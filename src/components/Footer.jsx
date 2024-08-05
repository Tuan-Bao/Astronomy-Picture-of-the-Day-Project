function Footer(props) {
  const { data, onHandleShowModal } = props;

  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data && data.title}</h2>
        <h1>ASTRONOMIC PICTURE OF THE DAY PROJECT</h1>
      </div>
      <button onClick={() => onHandleShowModal()}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

export default Footer;
