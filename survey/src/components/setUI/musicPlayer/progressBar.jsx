import React, { useEffect, useState, useRef } from "react";

import "../../../css/components/setUI/musicPlayer/progressBar.scss";

const ProgressBar = (props) => {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);
  const { size, progress, strokeWidth } = props;

  const center = size / 2;
  const radius = size / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);

    circleRef.current.style = "transition: stroke-dashoffset 100ms ease";
  }, [setOffset, progress, circumference, offset]);

  return (
    <div className="progress-bar">
      <svg className="svg" width={size} height={size}>
        <circle
          className="svg-circle-bg"
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="svg-circle"
          ref={circleRef}
          cx={center}
          cy={center}
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
    </div>
  );
};

export default ProgressBar;
