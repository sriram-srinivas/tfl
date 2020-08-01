import React,{Component, Fragment} from 'react';
import axios from 'axios';
import AccSettingsCSS from './AccountSettings.css';
import dictionary from '../../context/tflDictionary';
import Field from '../AccountSettings/Field/Field';
import Button from '../../components/Button/Button';


class AccountSettings extends Component {

    static contextType = dictionary;
    state ={
        customerType: "school",
      }
    
      render(){
        const accInfo = this.context.FieldList;

        const infoList=<Fragment>{accInfo.map((items,index) => {
            return(
                <Field
                 key={items.id} {...items} 
                 FieldCss={AccSettingsCSS.FieldCss} 
                 FieldLabelCss={AccSettingsCSS.FieldLabelCss} 
                 FieldValueCss={AccSettingsCSS.FieldValueCss}/> 
                );
        })}</Fragment>;
      
        return(
            <div className={AccSettingsCSS.AccountPanel}>
                <div className={AccSettingsCSS.leftAccPanel}>

                </div>
                <div className={AccSettingsCSS.accContentPanel}>
                    <h2 className={AccSettingsCSS.accHeader}>{this.context.accountHeader}</h2>
                    <div className={AccSettingsCSS.linkPanel}>
                        <h5>{this.context.changePwdLabel}</h5>
                        <h5>{this.context.editLabel}</h5>
                        <i className={"fa fa-angle-down"} aria-hidden="true"></i>
                    </div>
                    <div className={AccSettingsCSS.infoPanel}>
                        {infoList}
                    </div>
                    <div className={AccSettingsCSS.upgradePanel}>
                        <Button btnType="button" 
                            styleClass={AccSettingsCSS.upgradeButton}>
                            <label>{this.context.upgradePremium}</label>
                        </Button>
                    </div>
                    <div className={AccSettingsCSS.preferencePanel}>
                        <div className={AccSettingsCSS.prefLinkPanel}>
                            <div className={AccSettingsCSS.planLabel}>{this.context.PlanLabel}</div>
                            <div className={AccSettingsCSS.prefLink}>{this.context.accPref}</div>
                            <div className={AccSettingsCSS.prefLink}>{this.context.emailPref}</div>
                        </div>
                        <div className={AccSettingsCSS.prefConnectPanel}>
                            <Button btnType="button" 
                                styleClass={AccSettingsCSS.connectButton}>
                                <i className={"fa fa-facebook-square "+AccSettingsCSS.oAuthIcon} />
                                <label>{this.context.connectFB}</label>
                            </Button>
                            <Button btnType="button" 
                                styleClass={AccSettingsCSS.disconnectButton}>
                                <i className={"fa fa-google "+AccSettingsCSS.oAuthIcon}/>
                                <label>{this.context.disconnectGO}</label>
                            </Button>
                        </div>
                    </div>
                    <div className={AccSettingsCSS.deAcPanel}>
                        <label className={AccSettingsCSS.prefLink}>{this.context.deActivateAccLabel}</label>
                    </div>
                </div>
               <div className={AccSettingsCSS.rightAccPanel}>

               </div>
            </div>
        );
    }
}

export default AccountSettings;