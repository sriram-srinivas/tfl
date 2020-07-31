import React,{useContext} from 'react';
import loginCSS from './Login.css';
import Logo from '../../Logo/Logo'
import dictionary from '../../../context/tflDictionary';
import InputText from '../../InputText/InputText';
import Button from '../../Button/Button';

const login = props =>{
    const languageDictionary = useContext(dictionary);
    return (
        <div>
            <Logo PanelClass={loginCSS.LogoPanel} LogoClass={loginCSS.Logo} />
            <div className={loginCSS.LoginLabelPanel}>
                <h3 className={loginCSS.LoginLabel}>{languageDictionary.loginLabel}</h3>
            </div>
            <div className={loginCSS.InputPanel}>
                <InputText placeHolderText={languageDictionary.emailLabel} styleClass={loginCSS.InputText}/>
                <InputText placeHolderText={languageDictionary.pwdLabel} styleClass={loginCSS.InputText}/>
            </div>
            <div className={loginCSS.forgotPanel}>
                <label className={loginCSS.forgotLink}>{languageDictionary.forgotPWD}</label>
            </div>
            <div className={loginCSS.loginButtonPanel}>
                <Button btnType="button" 
                    styleClass={loginCSS.loginButton}>
                    <label>{languageDictionary.loginLabel}</label>
                </Button>
            </div>
            <hr/>
            <div className={loginCSS.oAuthPanel}>
                <Button btnType="button" 
                    styleClass={loginCSS.loginButton}>
                    <i className={"fa fa-facebook-square "+loginCSS.oAuthIcon} />
                    <label>{languageDictionary.logInFB}</label>
                </Button>
                <Button btnType="button" 
                    styleClass={loginCSS.loginButton}>
                    <i className={"fa fa-google "+loginCSS.oAuthIcon}/>
                    <label>{languageDictionary.logInGoogle}</label>
                </Button>
            </div>
        </div>
)};

export default login;