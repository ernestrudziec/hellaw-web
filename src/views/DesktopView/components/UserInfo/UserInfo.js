import React from 'react';
import {
    StyledUserEmail,
    StyledUserID,
    StyledUserInfo, StyledUserType
} from "./StyledUserInfo";

import { connect } from "react-redux";
import SmallSpinner
    from "../../../../components/LoadingSpinners/SmallSpinner/SmallSpinner";



const UserInfo = ({isLawyer, userID, userEmail, isUserInfoFetched}) => {

    if (isUserInfoFetched) {

        return (
            <StyledUserInfo>
                <div>
                    <StyledUserType>{isLawyer ? "Prawnik" : "Użytkownik"}</StyledUserType>
                    <StyledUserID>ID: {userID}</StyledUserID>
                </div>

                <StyledUserEmail> {userEmail} </StyledUserEmail>

            </StyledUserInfo>
        );
    } else return(
        <StyledUserInfo>
            <SmallSpinner/>
        </StyledUserInfo>
    );


}


const mapStateToProps = ({isUserInfoFetched}) => ({isUserInfoFetched});

export default connect(mapStateToProps, null)(UserInfo);