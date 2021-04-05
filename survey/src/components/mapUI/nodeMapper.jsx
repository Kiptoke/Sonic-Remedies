import MapNode from "./mapNode";
import { useState } from "react";

const NodeMapper = ({ numNodes, activeNodeIdx }) => {
  const initNodes = [];
  const [nodes] = useState(initNodes);
  for (let i = 0; i < numNodes; i++) {
    initNodes.push(
      <MapNode
        name={i + 1}
        key={i}
        activeNodeIdx={activeNodeIdx}
        thisNodeIdx={i}
      />
    );
  }
  return nodes.map((Node) => Node);
};

export default NodeMapper;
