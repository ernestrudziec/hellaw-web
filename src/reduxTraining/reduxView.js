import React, {useEffect} from 'react';
import StyledReduxView from "./StyledReduxView";
import { connect } from "react-redux";
import axios from 'axios';



const ReduxView = ({user}) => {

    useEffect(() => {




    }, []);

    return (
     <StyledReduxView>




     </StyledReduxView>
    );
};

const mapStateToProps = state => {

   return state;
}


export default connect(mapStateToProps)(ReduxView);