function Currency(props) {
  const canada = <img width="24" height="24" src="/canada.png"></img>;
  const us = <img width="24" height="24" src="/united-states.png"></img>;
  const kr = <img width="24" height="24" src="/south-korea.png"></img>;
  const eu = <img width="24" height="24" src="/european-union.png"></img>;

  return (
    <div className={props.isHidden ? null : "hidden"}>
      <button
        className="block py-2 px-4"
        onClick={() => {
          setCur(canada);
        }}
      >
        {canada}
      </button>
      <button
        className="block py-2 px-4"
        onClick={() => {
          setCur(us);
        }}
      >
        {us}
      </button>
      <button
        className="block py-2 px-4"
        onClick={() => {
          setCur(kr);
        }}
      >
        {kr}
      </button>
      <button
        className="block py-2 px-4"
        onClick={() => {
          setCur(eu);
        }}
      >
        {eu}
      </button>
    </div>
  );
}

export default Currency;
