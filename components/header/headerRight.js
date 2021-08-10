function HeaderRight() {
  return (
    <div className="hidden lg:flex font-serif font-medium text-xl col-span-4 flex justify-end items-center">
      <a href="#" className="mr-10  hover:text-sheertex">
        Our Knit
      </a>

      <a href="#" className="mr-20  hover:text-sheertex">
        Our Story
      </a>
      <div className="flex space-x-2">
        <button className="hover:bg-sheertex">
          <img width="24" height="24" src="/search.svg"></img>
        </button>
        <button className="hover:bg-sheertex">
          <img width="24" height="24" src="/cart.svg"></img>
        </button>
        <button className="hover:bg-sheertex">
          <img width="24" height="24" src="/profile.svg"></img>
        </button>
      </div>
      <div className="flex mx-10">
        <a href="#" className="hover:text-sheertex">
          en
        </a>
        <span>/</span>
        <a href="#" className="hover:text-sheertex">
          fr
        </a>
      </div>
    </div>
  );
}

export default HeaderRight;
