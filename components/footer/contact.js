function Contact() {
  const facebook = <img width="24" height="24" src="/facebook.svg"></img>;
  const instagram = <img width="24" height="24" src="/instagram.svg"></img>;

  return (
    <div className="col-span-2 md:col-span-1 grid grid-flow-col md:grid-cols-none">
      <div className="flex flex-col md:col-span-1 flex-grow py-5 px-6 md:px-0 font-serif">
        <h1 className="text-lg mb-2">Contact</h1>
        <p>7471 Avenue Léonard-De Vinci</p>
        <p>Montréal, QC H2A 2P3</p>
        <p>1 800-715-1658</p>
        <a href="mailto: hello@sheertex.com">hello@sheertex.com</a>
      </div>
      {/* Mobile Follow Us */}
      <div className="md:hidden grid grid-cols-2 content-center space-x-2 pt-16 px-3">
        <span className="font-bold col-span-2">FOLLOW US</span>
        <a href="#" className="hover:bg-sheertex">
          {facebook}
        </a>
        <a href="#" className="hover:bg-sheertex">
          {instagram}
        </a>
      </div>
    </div>
  );
}

export default Contact;
