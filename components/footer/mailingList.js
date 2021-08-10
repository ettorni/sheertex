function MailingList() {
  return (
    <div className="col-span-2 bg-sheertex md:max-w-sm mx-3 px-3 md:px-10 py-5">
      <h1 className="mb-3 text-lg md:text-xl">
        Get 15% off - Join our mailing list
      </h1>
      <h2 className="mb-6 pr-5 text-sm">
        Be the first to get updates on special offers, products, launches and
        insider exclusives.{" "}
      </h2>
      <div className="relative justify-items-center border-b-2 border-gray-400 mb-5">
        <input
          placeholder="Enter Your Email"
          className="bg-sheertex text-gray-600"
        ></input>
        <button className="absolute inset-y-0 right-0 text-gray-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default MailingList;
