import React from "react";

import ToggleButton from "components/Buttons/ToggleButton";

export default {
  title: "Components/Buttons/ToggleButton",
  component: ToggleButton
};

const Template = (args) => <ToggleButton {...args} />;

export const FullToggle = Template.bind({});
FullToggle.args = {
  toggle_type: "FullToggle",
  size: "large",
  isToggled: false,
  onToggle: false,
  disabled: false
};

export const HalfToggle = Template.bind({});
HalfToggle.args = {
  toggle_type: "HalfToggle",
  size: "large",
  isToggled: false,
  onToggle: false,
  disabled: false
};

export const SwitchToggle = Template.bind({});
SwitchToggle.args = {
  toggle_type: "SwitchToggle",
  size: "small",
  isToggled: false,
  onToggle: false,
  disabled: false
};

export const FixToggle = Template.bind({});
FixToggle.args = {
  toggle_type: "FixToggle",
  size: "large",
  isToggled: false,
  onToggle: false,
  disabled: true
};
