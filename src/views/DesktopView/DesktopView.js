import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import store from "../../store";
import {ThemeProvider} from "styled-components";
import {Redirect} from "react-router-dom";
import StyledDesktopView from "./StyledDesktopView";

import {
    authenticateAction,
    getUserInfoAction,
    getInquiriesAction
} from "../../actions";
import {connect} from "react-redux";
import Cookie from 'js-cookie';
import UserInfo from "./components/UserInfo/UserInfo";
import Logo from "../../components/Logo/Logo";
import Navigation
    from "../../components/Navigation/Navigation";
import StyledButton
    from "../../components/StyledComponents/StyledButton/StyledButton";
import SmallSpinner
    from "../../components/LoadingSpinners/SmallSpinner/SmallSpinner";
import {object} from "prop-types";



const DesktopView = ({getUserInfo, userID, isLawyer, userEmail, isUserInfoFetched, getAllInquiries, allInquiries}) => {


    useEffect(() => {

        getUserInfo(Cookie.get('access'));
        getAllInquiries(Cookie.get('access'));


    }, []);

    useEffect(() => {
        console.log(allInquiries);
    });

    return (
        <StyledDesktopView>

            <nav>
            <Logo dark/>
            <Link to='/logout'> <StyledButton logout onClick={() => { store.dispatch({type: 'LOGOUT_USER'});}}> Wyloguj się <span className="fas fa-sign-out-alt"/> </StyledButton></Link>
            </nav>

   <UserInfo userID={userID} isLawyer={isLawyer} userEmail={userEmail} />


            {
                allInquiries ?
                allInquiries.map(data => {
                    return(
                        <>
                        <h4>{data.id}</h4> <h3>{data.title}</h3> <h5> {data.description} </h5>
                        </>
                    )

            }) : null
            }

        </StyledDesktopView>
    );




};

const mapDispatchToProps = dispatch => ({
    getUserInfo: (access) => dispatch(getUserInfoAction(access)),
    getAllInquiries: (access) => dispatch(getInquiriesAction(access)),
});


const mapStateToProps = ({userID, userEmail, isLawyer, isUserInfoFetched, allInquiries}) => ({userID,  userEmail, isLawyer, isUserInfoFetched, allInquiries});



export default connect(mapStateToProps, mapDispatchToProps)(DesktopView);
