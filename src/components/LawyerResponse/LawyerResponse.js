import React from "react";
import {
  StyledLawyerResponse,
  StyledLawyerInfo,
  StyledLawyerName,
  StyledLawyerAvatar,
  StyledResponseContent,
  StyledResponseDate,
  StyledBestResponse,
} from "./StyledLawyerResponse";

let img1 =
  "https://images.unsplash.com/photo-1559548331-f9cb98001426?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";
let img2 =
  "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80";
let img3 =
  "https://images.unsplash.com/photo-1565104781149-275a5392dabc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=928&q=80";

let finalImg = null;
let best = false;

const LawyerResponse = ({
  index,
  content,
  date,
  isBest,
  lawyerID,
  lawyerName,
  id,
}) => {
  if (index === 0) finalImg = img2;
  if (index === 1) finalImg = img3;
  if (index === 2) finalImg = img1;

  best = index === 0;

  return (
    <StyledLawyerResponse id={id}>
      <StyledLawyerInfo bg={finalImg} id={lawyerID}>
        <StyledLawyerName>{lawyerName}</StyledLawyerName>
        <StyledLawyerAvatar src={finalImg} />
      </StyledLawyerInfo>
      <StyledResponseContent>
        {best ? (
          <StyledBestResponse>
            Najlepsza odpowiedź <i className="fas fa-check"></i>
          </StyledBestResponse>
        ) : null}
        {content}
      </StyledResponseContent>
      <StyledResponseDate>Odpowiedź dodano: {date}</StyledResponseDate>
    </StyledLawyerResponse>
  );
};

export default LawyerResponse;
