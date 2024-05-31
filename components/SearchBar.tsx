"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { RiSearchLine } from "@remixicon/react";
import Image from "next/image";
// import { URLSearchParams } from "url";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: any) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <RiSearchLine size={25} className="object-contain" />
    </button>
  );
};

const SearchBar = ({ setManufacturer, setModel }) => {
  const [isManufacturer, setIsManufacturer] = useState("");
  const [isModel, setIsModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isManufacturer === "" && isModel === "") {
      return alert("Please fill in search bar");
    }

    setModel(isModel);
    setManufacturer(isManufacturer);
  };

  // const updateSearchParams = (isModel: string, manufacturer: string) => {
  //   const searchParams = new URLSearchParams(window.location.search);

  //   if (isModel) {
  //     searchParams.set("isModel", isModel);
  //   } else {
  //     searchParams.delete("isModel");
  //   }

  //   if (isManufacturer) {
  //     searchParams.set("isManufacturer", isManufacturer);
  //   } else {
  //     searchParams.delete("isManufacturer");
  //   }

  //   const newPathname = `${
  //     window.location.pathname
  //   }?${searchParams.toString()}`;

  //   router.push(newPathname);
  // };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={isManufacturer}
          setSelected={setIsManufacturer}
        />
      </div>
      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          width={25}
          height={25}
          alt="model"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          value={isModel}
          onChange={(e) => setIsModel(e.target.value)}
          placeholder="Taigun Model"
          className="searchbar__input"
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <SearchButton otherClasses={"max-sm:hidden"} />
    </form>
  );
};

export default SearchBar;
