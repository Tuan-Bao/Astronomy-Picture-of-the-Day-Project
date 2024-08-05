function SideBar(props) {
  const { data, onHandleShowModal } = props;

  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        {data && <h2>{data.title}</h2>}
        <div>
          <p className="date">{data?.date}</p>
          <p>{data?.explanation}</p>
        </div>
        <button onClick={() => onHandleShowModal()}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
