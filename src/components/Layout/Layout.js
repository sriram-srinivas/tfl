import React,{Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Worksheets from '../../containers/Worksheets/Worksheets';
import AccountSettings from '../../containers/AccountSettings/AccountSettings';

const layout = props =>{
    return(
        <Fragment>
            <div>
                <Header />
            </div>
            <main>
                <Route path="/" exact component={Worksheets}/>
                <Route path="/Account" exact component={AccountSettings}/>
            </main>
            <div>
                <Footer/>
            </div>
        </Fragment>
    );

};

export default layout;