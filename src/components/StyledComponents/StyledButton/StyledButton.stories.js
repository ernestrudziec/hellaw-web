import React from "react";
import Button from "./StyledButton";

export default {
  component: Button,
  title: "Button",
};

export const Primary = () => <Button>Hello</Button>;
export const Secondary = () => <Button secondary>Hello</Button>;
