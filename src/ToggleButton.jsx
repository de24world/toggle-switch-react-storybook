import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ToggleButton.scss";

const ToggleButton = ({ ...props }) => {
  const { toggle_type, disabled, size } = props;
  const [isToggled, setIsToggled] = useState(false);
  const onToggle = () => setIsToggled(!isToggled);

  return (
    <div className="ToggleButton">
      <h1>{toggle_type}</h1>

      <div className={toggle_type}>
        <label className={`button-switch ${size}`}>
          <input
            type="checkbox"
            checked={isToggled}
            onChange={onToggle}
            disabled={disabled}
          />
          <span className={`switch ${size}`} />
        </label>
      </div>
    </div>
  );
};

ToggleButton.propTypes = {
  toggle_type: PropTypes.oneOf([
    "FullToggle",
    "HalfToggle",
    "SwitchToggle",
    "FixToggle"
  ]),
  size: PropTypes.oneOf(["large", "small"]),
  isToggled: PropTypes.bool,
  onToggle: PropTypes.func,
  disabled: PropTypes.bool
};

export default ToggleButton;
