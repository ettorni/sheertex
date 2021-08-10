import Head from "next/head";
import { useState } from "react";
import HeaderLeft from "../header/headerLeft";
import HeaderRight from "../header/headerRight";
import MobileHeaderLeft from "../header/mobileHeaderLeft";
import MobileHeaderMenu from "../header/mobileHeaderMenu";
import MobileHeaderRight from "../header/mobileHeaderRight";

function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const toggleMenu = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <Head>
        <title>Sheertex</title>

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
      </Head>
      <nav className="bg-white border-b-2 border-gray-400">
        <div className="mx-auto">
          <div className="grid grid-cols-9 px-6 py-4">
            {/* Left Side */}
            <HeaderLeft />
            {/* Center */}
            <a
              href="#"
              className="hidden lg:flex font-serif font-extrabold text-4xl col-span-1 flex justify-center items-center hover:text-sheertex"
            >
              Sheertex
            </a>
            {/* Right */}
            <HeaderRight />
            {/* Mobile Header */}
            <MobileHeaderLeft toggleMenu={toggleMenu} />
            <a
              href="#"
              className="lg:hidden col-span-1 font-serif font-extrabold text-xl flex justify-center  hover:text-sheertex"
            >
              Sheertex
            </a>
            <MobileHeaderRight />
          </div>
        </div>
        {/* Mobile Menu */}
        <MobileHeaderMenu isHidden={isHidden} />
      </nav>
    </div>
  );
}

export default Header;
