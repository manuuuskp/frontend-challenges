import React, { useMemo, useState } from "react";

import "./styles/StarRating.css";

const StarRating = ({ total = 5, rating }: Props): React.ReactElement => {
  const [hoverIdx, setHoverIdx] = useState<number>(0);
  const [selectedIdx, setSelectedIdx] = useState<number | undefined>(rating);
  const starRatingArr = useMemo(
    () =>
      Array.from({
        length: total,
      }),

    [total]
  );

  const handleMouseOver = (index: number): void => {
    setHoverIdx(index);
  };

  const handleClick = (index: number): void => {
    setSelectedIdx(index);
  };

  const handleMouseLeave = () => {
    setHoverIdx(0);
  };

  return (
    <div className="starRating__container">
      <div className="starGroup__container">
        {starRatingArr.map((_, index) => {
          const currentIdx = index + 1;
          const selectedClass =
            currentIdx <= Number(selectedIdx) ? "selected" : "";
          const hoverClass =
            hoverIdx !== null && currentIdx <= Number(hoverIdx) ? "hover" : "";
          return (
            <span
              key={currentIdx}
              className={`star__container ${selectedClass} ${hoverClass}`}
              onMouseOver={() => handleMouseOver(currentIdx)}
              onClick={() => handleClick(currentIdx)}
              onMouseOut={handleMouseLeave}
            />
          );
        })}
      </div>
      <div className="starCount__container">
        <span>
          {selectedIdx ?? 0}/{total}
        </span>
      </div>
    </div>
  );
};

export default StarRating;

interface Props {
  total?: number;
  rating?: number;
}
