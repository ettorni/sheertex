function FooterCopyright(props) {
  const date = new Date();
  const curYear = date.getFullYear();

  const copyRight = <img width="24" height="24" src="/copyright.svg"></img>;
  const facebook = <img width="24" height="24" src="/facebook.svg"></img>;
  const instagram = <img width="24" height="24" src="/instagram.svg"></img>;

  return (
    <div className="grid grid-cols-2 md:px-10 py-3">
      <div className="hidden md:flex justify-start items-center pl-4 space-x-2">
        <p className="text-gray-600">Select your currency</p>
        <button onClick={props.toggleMenu}>{props.cur}</button>
      </div>
      <div className="flex col-span-2 justify-center items-center md:col-span-1 px-1 space-x-2">
        <span className="flex text-xs md:text-base ">{copyRight}</span>
        <span className="text-xs md:text-base ">
          {curYear} Sheertex All Rights Reserved.
        </span>
        <a
          href="#"
          className="text-xs md:text-base font-bold underline hover:text-sheertex"
        >
          TERMS
        </a>
        <a
          href="#"
          className="text-xs md:text-base font-bold underline md:pr-20 hover:text-sheertex"
        >
          PRIVACY
        </a>
        <div className="hidden md:flex space-x-2">
          <span className="font-bold">FOLLOW US</span>
          <a href="#" className="hover:bg-sheertex">
            {facebook}
          </a>
          <a href="#" className="hover:bg-sheertex">
            {instagram}
          </a>
        </div>
      </div>
    </div>
  );
}

export default FooterCopyright;
