import React, { useState } from "react";

const SoundOnLogo = () => {
  const [sound, setSound] = useState(true);

  const handleSoundChange = () => {
    setSound(!sound);
  };

  return (
    <div className="sound-logo__container">
      <div className="sound-logo">
        <label
          className="sound-logo--label fs-sm"
          htmlFor="sound-check"
          onClick={handleSoundChange}
        >
          <span>Sound:</span> {sound ? "on" : "off"}
        </label>
        <div className="sound-logo--btn" onClick={handleSoundChange}>
          <h5 id="sound-check" className="sound-logo--original fs-sm">
            {sound ? "off" : "on"}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default SoundOnLogo;
