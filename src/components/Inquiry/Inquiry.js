import React, { useEffect, useState } from "react";
import {
  StyledInquiryCategory,
  StyledInquiryDescription,
  StyledInquiryResponses,
  StyledInquiryTitle,
  StyledInquiryWrapper,
  StyledInquiryHeader,
  StyledReplyInquiryButton,
  StyledInquiryBottom,
  StyledInquiryDescriptionTop,
  StyledShowMoreButton,
} from "./StyledInquiry";
import { Redirect } from "react-router";
import Cookie from "js-cookie";

import { connect } from "react-redux";
import {
  getInquiriesAction,
  getInquiryByIdAction,
  getUserInfoAction,
} from "../../actions";
import { Link } from "react-router-dom";
import history from "../../history";

const truncateString = (str, length, truncate) => {
  if (truncate) {
    if (str.length <= length) {
      return str;
    } else {
      return str.slice(0, length) + "...";
    }
  } else {
    return str;
  }
};

const Inquiry = ({
  exactInquiryView,
  exactInquiry,
  isExactInquiryLoaded,
  category,
  description,
  id,
  photos,
  premiumStatus,
  responses,
  title,
  isTruncated,
  key,
  getInquiryById,
}) => {
  const handleReplyClick = () => {
    history.push(`/logged/inquiry/${id}`);
  };

  const [isInquiryExpanded, setInquiryExpand] = useState(false);

  if (!exactInquiryView) {
    return (
      <StyledInquiryWrapper key={key} id={id}>
        <StyledInquiryHeader>
          <StyledInquiryTitle> {title} </StyledInquiryTitle>
          <StyledInquiryCategory> {category} </StyledInquiryCategory>
        </StyledInquiryHeader>

        <StyledInquiryDescription>
          <StyledInquiryDescriptionTop>
            <StyledInquiryResponses>
              Odpowiedzi: {responses}
            </StyledInquiryResponses>
            <StyledShowMoreButton
              onClick={() => setInquiryExpand(!isInquiryExpanded)}
            >
              <div className="fas fa-caret-down" />
            </StyledShowMoreButton>
          </StyledInquiryDescriptionTop>

          {truncateString(description, 100, !isInquiryExpanded)}
        </StyledInquiryDescription>

        <StyledInquiryBottom>
          <StyledReplyInquiryButton onClick={handleReplyClick}>
            {" "}
            Odpowiedz{" "}
          </StyledReplyInquiryButton>
        </StyledInquiryBottom>
      </StyledInquiryWrapper>
    );
  } else {
    return (
      <StyledInquiryWrapper exact>
        <StyledInquiryTitle exact>{title}</StyledInquiryTitle>
        <StyledInquiryDescription exact>{description}</StyledInquiryDescription>
      </StyledInquiryWrapper>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  getInquiryById: (access, id) => dispatch(getInquiryByIdAction(access, id)),
});

const mapStateToProps = ({ exactInquiry, isExactInquiryLoaded }) => ({
  exactInquiry,
  isExactInquiryLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(Inquiry);
