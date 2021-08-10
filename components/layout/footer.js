import { useState } from "react";
import About from "../footer/about";
import Contact from "../footer/contact";
import MailingList from "../footer/mailingList";
import Shop from "../footer/shop";
import Sustainability from "../footer/sustainability";
import FooterCopyright from "../footer/footerCopyright";
import Currency from "../footer/currency";

function Footer() {
  const canada = <img width="24" height="24" src="/canada.png"></img>;
  
  const [isHidden, setIsHidden] = useState(false);
  const [cur, setCur] = useState(canada);
  const toggleMenu = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <div className="grid grid-cols-2 text-sm md:grid-cols-6 md:p-10">
        <MailingList />
        <About />
        <Shop />
        <Contact />
        <Sustainability />
      </div>
      <footer>
        <FooterCopyright 
          toggleMenu={toggleMenu}
          cur={cur}
        />
      </footer>
      {/* menu for currency */}
      <Currency 
        isHidden={isHidden}
      />
    </div>
  );
}

export default Footer;
