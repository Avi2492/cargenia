import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export async function fetchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const headers = {
    "X-RapidAPI-Key": "66f7874bb4mshab6f6d13ec4fdaap12e9a4jsn560c9477cd1b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}

// export const generateCarImageUrl = async (car: CarProps, angle?: string) => {
//   // iq480lm2s_4iuwpb4xn_fb85x9q2y

//   const response = await fetch("./dataImages.json");

//   const { make, year, model } = car;

//   response.searchParams.append("customer", process.env.CARXE_APIKEY!);

//   response.searchParams.append("make", make);
//   response.searchParams.append("modelFamily", model.split(" ")[0]);
//   response.searchParams.append("zoomType", "fullscreen");
//   response.searchParams.append("modelYear", `${year}`);
//   response.searchParams.append("angle", `${angle}`);

//   return `${response}`;
// };

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);

  searchParams.set(type, value);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};
