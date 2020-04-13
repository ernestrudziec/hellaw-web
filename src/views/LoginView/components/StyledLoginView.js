import React from 'react';
import styled from 'styled-components';
import StyledSignUpView
    from "../../SignUpView/StyledComponents/StyledSignUpView";

const StyledLoginView = styled(StyledSignUpView)`


color: white;

::after{
background: linear-gradient(120deg, rgba(0,0,0,0.9) 50%, rgba(0,0,0,1));
}


::before{
background: url("https://images.unsplash.com/photo-1454923634634-bd1614719a7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80") no-repeat;
background-size: cover;
background-position:center;
}

`;

export default StyledLoginView;


