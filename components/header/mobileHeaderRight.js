function MobileHeaderRight() {
  return (
    <div className="lg:hidden col-span-4 flex space-x-2 justify-end">
      <img
        className="hover:text-sheertex"
        width="24"
        height="24"
        src="/cart.svg"
      ></img>
      <img
        className="hover:bg-sheertex"
        width="24"
        height="24"
        src="/profile.svg"
      ></img>
    </div>
  );
}
export default MobileHeaderRight;
