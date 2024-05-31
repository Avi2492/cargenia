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

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in search bar");
    }

    updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathname);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
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
          value={model}
          onChange={(e) => setModel(e.target.value)}
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
