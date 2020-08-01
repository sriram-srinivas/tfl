import React,{Fragment} from 'react';
import {Route} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Worksheets from '../../containers/Worksheets/Worksheets';
import AccountSettings from '../../containers/AccountSettings/AccountSettings';
import UnderConstruction from '../UI/UnderConstruction/UnderConstruction';

const layout = props =>{
    return(
        <Fragment>
            <div>
                <Header />
            </div>
            <main>
                <Route path="/" exact component={Worksheets}/>
                <Route path="/PrintableWorksheets" exact component={Worksheets}/>
                <Route path="/LessonPlan" exact component={UnderConstruction}/>
                <Route path="/OnlineGames" exact component={UnderConstruction}/>
                <Route path="/Account" exact component={AccountSettings}/>
            </main>
            <div>
                <Footer/>
            </div>
        </Fragment>
    );

};

export default layout;