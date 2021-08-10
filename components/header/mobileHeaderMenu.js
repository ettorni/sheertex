function MobileHeaderMenu(props) {
  return (
    <div className={props.isHidden ? null : "hidden"}>
      <a href="#" className="block py-2 px-4 font-medium hover:text-sheertex">
        TIGHTS
      </a>

      <a href="#" className="block py-2 px-4 font-medium hover:text-sheertex">
        STOCKING
      </a>
      <a href="#" className="block py-2 px-4 font-medium hover:text-sheertex">
        SOCKS & ACCESSORIES
      </a>
    </div>
  );
}

export default MobileHeaderMenu;
