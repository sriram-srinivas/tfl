import React,{Component} from 'react';
import axios from 'axios';
import AccSettingsCSS from './AccountSettings.css';

import dictionary from '../../context/tflDictionary';


class AccountSettings extends Component {

    static contextType = dictionary;
    state ={
        customerType: "school",
      }
    
   
    render(){
      
        return(
            <div className={AccSettingsCSS.AccountPanel}>
                account settings
                <hr/>
                routing
            </div>
        );
    }
}

export default AccountSettings;