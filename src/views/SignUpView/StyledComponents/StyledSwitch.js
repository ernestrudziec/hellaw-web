import React from "react";
import styled from "styled-components";

export const StyledSwitch = styled.div`
  display: flex;
  justify-content: center !important;
  width: 100%;

  align-items: center;
  flex-direction: row !important;
  font-size: 2em !important;
  font-weight: 400;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row !important;
    margin: 0 1em;
    width: 45% !important;
  }

  h3 {
    font-size: 1em !important;
    font-weight: 700;

    margin: 0 0.5em !important;
  }
`;

export const StyledCheckmark = styled.span`
  width: 1em;
  height: 1em;
  background: ${({ checked }) =>
    checked
      ? 'url("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/facebook/65/white-heavy-check-mark_2705.png")'
      : "#BBBBBB"};
  background-size: contain;
  border-radius: 3px;
  margin-right: 1em !important;
  cursor: pointer;
  position: relative;

  :after {
    display: ${({ checked }) => (checked ? "flex" : "none")};
    position: absolute;

    z-index: 999;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
`;
