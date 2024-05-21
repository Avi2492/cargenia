import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import {
  RiCopyrightLine,
  RiHeartFill,
  RiMailLine,
  RiMapPinLine,
  RiWhatsappLine,
} from "@remixicon/react";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Link href={"/"}>
            <Logo />
          </Link>
          <p className="text-base text-gray-700  gap-2 justify-center items-center">
            <span className="text-2xl font-semibold">Contact Details:</span>
            <span className="flex flex-wrap gap-2 text-xl text-gray-500">
              {" "}
              <RiMapPinLine color="blue" />
              Ludhiana, Punjab, 141002, India.
            </span>
            <span className="flex flex-wrap gap-2 text-xl text-gray-500">
              {" "}
              <RiWhatsappLine color="blue" />
              +91 8888899999
            </span>
            <span className="flex flex-wrap gap-2 text-xl text-gray-500">
              {" "}
              <RiMailLine color="blue" />
              cargenia@gmail.com
            </span>
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  href={item.url}
                  key={item.title}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="footer__copyright-link flex justify-center items-center gap-2 py-4 font-semibold">
        Made with <RiHeartFill color="red" size={20} />{" "}
        {new Date().getFullYear()}
        <br />
        <span className="font-semibold flex justify-center items-center gap-2">
          {" "}
          <RiCopyrightLine className="text-gray-700" />
          All rights reserved by <Logo />
        </span>{" "}
      </div>
    </footer>
  );
};

export default Footer;
