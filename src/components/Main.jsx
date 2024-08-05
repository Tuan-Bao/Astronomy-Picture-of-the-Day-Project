function Main(props) {
  const { data } = props;
  return (
    <div className="imgContainer">
      <img src={data.url} alt="" className="bgImage" />
    </div>
  );
}

export default Main;
