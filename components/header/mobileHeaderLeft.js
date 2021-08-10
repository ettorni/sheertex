function MobileHeaderLeft(props) {
  return (
    <div className="flex lg:hidden col-span-4 items-center flex space-x-2 justify-start">
      <button className="mobile-menu-button" onClick={props.toggleMenu}>
        <img
          className="hover:bg-sheertex"
          width="24"
          height="24"
          src="/menu.svg"
        ></img>
      </button>
      <button>
        <img
          className="hover:bg-sheertex"
          width="24"
          height="24"
          src="/search.svg"
        ></img>
      </button>
    </div>
  );
}

export default MobileHeaderLeft;