import React from 'react';
import loader from '../../../assets/images/loader.svg'

const Preloader = (props: any) => {
    return (
        <div>
            <img src={loader}/>
        </div>
    );
};

export default Preloader;