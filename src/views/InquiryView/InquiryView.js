import React, { useEffect } from "react";
import {
  StyledInquiryView,
  StyledResponsesSection,
  StyledResponsesTitle,
} from "./StyledInquiryView";
import Inquiry from "../../components/Inquiry/Inquiry";
import { connect } from "react-redux";
import { getInquiryByIdAction } from "../../actions";
import Cookie from "js-cookie";
import SmallSpinner from "../../components/LoadingSpinners/SmallSpinner/SmallSpinner";
import Logo from "../../components/Logo/Logo";
import LawyerResponse from "../../components/LawyerResponse/LawyerResponse";

const InquiryView = ({
  getInquiryById,
  exactInquiry,
  isExactInquiryLoaded,
}) => {
  let inquiryID = window.location.href[window.location.href.length - 1];

  useEffect(() => {
    getInquiryById(Cookie.get("access"), inquiryID);
  }, []);

  if (isExactInquiryLoaded) {
    return (
      <StyledInquiryView>
        <Logo dark />

        <Inquiry
          exactInquiryView
          title={exactInquiry.title}
          description={exactInquiry.description}
        />

        <StyledResponsesSection>
          <StyledResponsesTitle>
            Odpowiedzi: ({exactInquiry.answers.length})
          </StyledResponsesTitle>
          {exactInquiry.answers.map((answer, i) => {
            return (
              <LawyerResponse
                index={i}
                key={answer.id}
                id={answer.id}
                lawyerID={answer.lawyer.id}
                date={answer.date}
                content={answer.content}
                isBest={answer.is_best}
                lawyerName={answer.lawyer.name}
              />
            );
          })}
        </StyledResponsesSection>
      </StyledInquiryView>
    );
  } else {
    return <SmallSpinner />;
  }
};

const mapDispatchToProps = (dispatch) => ({
  getInquiryById: (access, id) => dispatch(getInquiryByIdAction(access, id)),
});

const mapStateToProps = ({ exactInquiry, isExactInquiryLoaded }) => ({
  exactInquiry,
  isExactInquiryLoaded,
});

export default connect(mapStateToProps, mapDispatchToProps)(InquiryView);
