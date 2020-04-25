import React from 'react';
import './BeforeUserAuthSpinner.scss';





 const BeforeUserAuthSpinner = () => {


    return (
        <div className="wrapper">

            <div className="item loading-2">

                <div className="spinner">

                    <div className="circle circle-1">
                        <div className="circle-inner"></div>
                    </div>

                    <div className="circle circle-2">
                        <div className="circle-inner"></div>
                    </div>


                </div>

            </div>
        </div>
    );


}

export default BeforeUserAuthSpinner;


