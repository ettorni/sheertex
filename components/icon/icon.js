function Icon(props) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mb-3">
        <img src={props.image} width="100" height="100"></img>
      </div>
      <h1 className="flex justify-center mb-3 font-extrabold">{props.title}</h1>
      <h2 className="flex justify-center mx-14 text-center text-gray-400">
        {props.description}
      </h2>
    </div>
  );
}

export default Icon;
