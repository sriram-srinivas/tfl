import React,{ Component, Fragment} from 'react';
import headerCSS from './Header.css'
import dictionary from '../../context/tflDictionary';
import  * as images from '../../assets/images/images';
import Button from '../Button/Button';
import Modal from '../UI/Modal/Modal';
import Login from '../Authenticate/Login/Login';

class Header extends Component{
    static contextType = dictionary;

    state={
        isAuth:false,
        showLoginPopup:false,
    };

    showLoginPopup = () =>{
        this.setState({showLoginPopup: true});
    }

    hideLoginPopup = () =>{
        this.setState({showLoginPopup: false});
    }

    render(){
        return(
            <Fragment>
                <Modal show={this.state.showLoginPopup} clickEvent={this.hideLoginPopup}>
                    <Login />
                </Modal>
                <div className={headerCSS.HeaderContainer}>
                    <div className={headerCSS.LogoPanel}>
                        <img  className={headerCSS.Logo}src={images.logoBlue} alt="TFL"/>
                    </div>
                    <div className={headerCSS.ContentPanel}>
                        
                    </div>
                    <div className={headerCSS.MenuPanel}>
                        <h5 className={headerCSS.Explore}>{this.context.exploreLabel}</h5>
                        <Button btnType="button" 
                            styleClass={headerCSS.loginButton}
                            clickEvent={this.showLoginPopup}>
                            <label>{this.context.loginLabel}</label>
                        </Button>
                    </div>
                    <div className={headerCSS.LoginPanel}>
                        <Button btnType="button" 
                            styleClass={headerCSS.signupButton}>
                            <label>{this.context.signUpLabel}</label>
                        </Button>
                    </div>
                </div>
                <hr/>
            </Fragment>
        );
    }
};

export default Header;