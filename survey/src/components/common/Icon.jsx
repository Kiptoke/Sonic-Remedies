const Icon = ({ src, width }) => {
  return (
    <div style={{ width: width ? width : "3rem", margin: 0 }}>
      <img
        src={src}
        className="icon"
        width="100%"
        style={{ margin: 0 }}
        alt="icon"
      ></img>
    </div>
  );
};

export default Icon;
