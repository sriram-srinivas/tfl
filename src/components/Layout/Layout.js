import React,{Fragment} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

const layout = props =>{
    return(
        <Fragment>
            <div>
                <Header />
            </div>
            <main>
                {props.children}
            </main>
            <div>
                <Footer/>
            </div>
        </Fragment>
    );

};

export default layout;