import React, { useEffect, useState } from "react";
import { AiFillCaretDown } from "react-icons/ai";

const DropDown = ({ posts }) => {
  const [active, setActive] = useState(false);
  const [] = useState("Filter By Region");
  const options = ["Africa", "America", "Asia", "Europe", "Oceania"];

  return (
    <div className="dropdown">
      <div className="dropdown__btn" onClick={(e) => setActive(!active)}>
        {selected}
        <AiFillCaretDown />
      </div>
      {active && (
        <div className="dropdown__content">
          {options.map((option) => (
            <div
              onClick={(e) => {
                setSelected(option);
                setActive(false);
              }}
              className="dropdown__item"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
