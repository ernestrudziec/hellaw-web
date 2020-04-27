import React from 'react';
import {
    StyledInquiryCategory,
    StyledInquiryDescription, StyledInquiryResponses,
    StyledInquiryTitle,
    StyledInquiryWrapper,
    StyledInquiryHeader,
    StyledReplyInquiryButton,
    StyledInquiryBottom
} from "./StyledInquiry";


const Inquiry = ({category, description, id, photos, premiumStatus, responses, title}) => {
    return (
        <StyledInquiryWrapper>

            <StyledInquiryHeader>
            <StyledInquiryTitle> {title} </StyledInquiryTitle>
            <StyledInquiryCategory>{category}</StyledInquiryCategory>
            </StyledInquiryHeader>

            <StyledInquiryDescription>
                <StyledInquiryResponses>Odpowiedzi: {responses}</StyledInquiryResponses>
                {description}
            </StyledInquiryDescription>

            <StyledInquiryBottom>
            <StyledReplyInquiryButton>Odpowiedz</StyledReplyInquiryButton>
            </StyledInquiryBottom>

        </StyledInquiryWrapper>
    );
};

export default Inquiry;