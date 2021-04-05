import "../../css/components/mapUI/surveyMap.scss";
import { useState } from "react";
import NodeMapper from "./nodeMapper";
import PathAnimator from "./pathAnimator";

const SurveyMap = () => {
  const numNodes = 10;
  const [mapRef, setMapRef] = useState(null);
  const [activeNodeIdx] = useState(1);
  return (
    <div
      ref={(Ref) => {
        if (Ref && Ref.children) setMapRef(Ref);
      }}
      className="survey-map"
    >
      <div className="path-animator">
        {/* <PathAnimator mapRef={mapRef} /> */}
      </div>
      <NodeMapper numNodes={numNodes} activeNodeIdx={activeNodeIdx} />
    </div>
  );
};

export default SurveyMap;
