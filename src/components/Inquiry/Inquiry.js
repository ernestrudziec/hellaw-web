import React, {useState} from 'react';
import {
    StyledInquiryCategory,
    StyledInquiryDescription, StyledInquiryResponses,
    StyledInquiryTitle,
    StyledInquiryWrapper,
    StyledInquiryHeader,
    StyledReplyInquiryButton,
    StyledInquiryBottom,
    StyledInquiryDescriptionTop,
    StyledShowMoreButton
} from "./StyledInquiry";

function truncateString(str, length, truncate) {

    if(truncate){


        if(str.length <= length)

    {
        return str
    } else {return str.slice(0, length) + '...'}
    } else {
        return str;
    }

}


const Inquiry = ({ category, description, id, photos, premiumStatus, responses, title, isTruncated, key}) => {

    const [isInquiryExpanded, setInquiryExpand] = useState(false);


    return (
        <StyledInquiryWrapper key={key} id={id}>

            <StyledInquiryHeader>
            <StyledInquiryTitle> {title} </StyledInquiryTitle>
            <StyledInquiryCategory>{category}</StyledInquiryCategory>
            </StyledInquiryHeader>

            <StyledInquiryDescription>
                <StyledInquiryDescriptionTop>
                <StyledInquiryResponses>Odpowiedzi: {responses}</StyledInquiryResponses>
                    <StyledShowMoreButton onClick={() => setInquiryExpand(!isInquiryExpanded)}><div className="fas fa-caret-down"></div></StyledShowMoreButton>
                </StyledInquiryDescriptionTop>

                {truncateString(description, 100, !isInquiryExpanded)}
            </StyledInquiryDescription>

            <StyledInquiryBottom>
            <StyledReplyInquiryButton>Odpowiedz</StyledReplyInquiryButton>
            </StyledInquiryBottom>

        </StyledInquiryWrapper>
    );
};

export default Inquiry;