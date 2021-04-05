const Path = ({ path }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" height="960" width="560">
      <path
        style={{
          fill: "none",
          stroke: "#000",
          vectorEffect: "non - scaling - stroke",
          strokeWidth: 2,
          strokeDasharray: [11, 5],
        }}
        d={path}
      />
    </svg>
  );
};

export default Path;
