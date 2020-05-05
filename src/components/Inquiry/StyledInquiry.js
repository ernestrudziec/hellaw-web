import React from "react";
import styled, { css } from "styled-components";

export const StyledInquiryWrapper = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 90vw;
  background: #dddddd;
  padding: 1em;
  margin: 1em 0;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 6px 6px rgba(0, 0, 0, 0.01);

  ${({ exact }) =>
    exact &&
    css`
      width: 90vw;
      max-width: 800px;
    `}
`;

export const StyledInquiryTitle = styled.h2`
  font-size: 1.6rem;
  font-family: Manrope, sans-serif;
  background: #131313;
  color: white;
  padding: 0.3em;
  padding-left: 0.6em;
  border-radius: 5px;
  margin: 0;
  margin-right: 0.3em;
  flex: 8;
`;

export const StyledInquiryDescription = styled.p`
  line-height: 1.5;
  font-size: 1.6rem;
  background: #ffffff;
  font-weight: 200;
  padding: 1em;
  height: auto;
  border-radius: 5px;

  ${({ exact }) => exact && css``}
`;

export const StyledInquiryCategory = styled.h4`
  background: #131313;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.3em;
  font-family: Manrope, sans-serif;
  border-radius: 5px;
  font-size: 1.6rem;
  flex: 2;
  margin: 0;
`;

export const StyledInquiryHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 !important;
  transition: 1s;
`;

export const StyledInquiryDescriptionTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0 !important;
`;

export const StyledShowMoreButton = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 30px;
  background: transparent;
  font-size: 2em;
  border: none;
  margin-top: -8px;
  outline: none;
`;

export const StyledInquiryID = styled.data``;

export const StyledInquiryPremium = styled.h3``;

export const StyledInquiryResponses = styled.h3`
  align-self: flex-end;
  font-family: Manrope, sans-serif;
  color: #666666;
  margin: 0;
  font-size: 1.3rem;
  margin-bottom: 1em;
  opacity: 0.5;
`;

export const StyledInquiryBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  a {
    width: 100%;
  }
`;

export const StyledReplyInquiryButton = styled.button`
  margin: 0;
  background: #131313;
  font-size: 2rem;
  border-radius: 5px;
  cursor: pointer;
  font-family: Oxanium, sans-serif;
  font-weight: 600;
  width: 100%;
  flex: auto;
  color: white;

  padding: 0.3em 0.6em;
`;
