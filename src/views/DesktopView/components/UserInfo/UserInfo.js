import React from 'react';
import {
    StyledUserEmail,
    StyledUserID,
    StyledUserInfo, StyledUserType
} from "./StyledUserInfo";


const UserInfo = ({isLawyer, userID, userEmail}) => {
    return (
        <StyledUserInfo>

            <div>
            <StyledUserType>{isLawyer ? "Prawnik" : "Użytkownik"}</StyledUserType>
            <StyledUserID>ID: {userID}</StyledUserID>
            </div>

            <StyledUserEmail> {userEmail} </StyledUserEmail>

        </StyledUserInfo>
    );
};

export default UserInfo;