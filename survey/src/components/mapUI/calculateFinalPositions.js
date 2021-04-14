const calculateFinalPositions = (num) => {
  let positions = [];
  for (let i = 0; i < num; i++) {
    positions.push({ x: 200 * Math.sin(i), y: 200 * Math.cos(i) });
  }
  return positions;
};

export default calculateFinalPositions;
