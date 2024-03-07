import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="hidden lg:block">
      <div className="container">
        <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackish">
          <Link className="navbar__link relative" href="/">
            HOME
          </Link>
          <Link className="navbar__link relative" href="Men">
            MEN'S
          </Link>
          <Link className="navbar__link relative" href="Women">
            WOMEN'S
          </Link>
          <Link className="navbar__link relative" href="#">
            JEWELRY
          </Link>
          <Link className="navbar__link relative" href="#">
            PERFUME
          </Link>
          <Link className="navbar__link relative" href="About">
            ABOUT US
          </Link>
          <Link className="navbar__link relative" href="Contact">
            CONTACT US                                        
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;