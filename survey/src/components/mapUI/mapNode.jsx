import "../../css/components/mapUI/mapNode.scss";
import NoteAnimator from "./noteAnimator";
const MapNode = ({ name, thisNodeIdx, activeNodeIdx }) => {
  const isActive = thisNodeIdx === activeNodeIdx;
  return (
    <div className={"map-node " + (isActive ? "map-node-active" : "")}>
      {isActive && <NoteAnimator />}
      <p>{name}</p>
    </div>
  );
};

export default MapNode;
