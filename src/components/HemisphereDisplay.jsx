import React from "react";
const HemisphereDisplay = ({ latitude }) => {
  const hemisphereConfig = {
    Northern: { text: "It is Northern Hemisphere.", picture: "northern.png" },
    Southern: { text: "It is Southern Hemisphere.", picture: "southern.jpg" },
  };
  const hemisphere = latitude > 0 ? "Northern" : "Southern";

  const { text, picture } = hemisphereConfig[hemisphere];
  return (
    <div className={hemisphere}>
      {" "}
      <div className="ui raised text container segment">
        {" "}
        <div className="image">
          {" "}
          <img src={picture} alt={text} height="500" width="600" />{" "}
        </div>{" "}
        <div className="ui teal bottom attached label">
          {" "}
          <h1>{text}</h1>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default HemisphereDisplay;
