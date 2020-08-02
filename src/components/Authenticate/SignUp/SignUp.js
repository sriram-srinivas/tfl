import React,{ Component, Fragment} from 'react';
import SignUpCSS from './SignUp.css';
import Logo from '../../Logo/Logo'
import dictionary from '../../../context/tflDictionary';
import InputText from '../../InputText/InputText';
import Button from '../../Button/Button';


class SignUp extends Component{
    static contextType = dictionary;

    state={
        isAuth:false,
        step:this.props.initStep,
        customerType:'', 
        grade:''
    };

    customerHandler = custType => {
        this.setState({step: custType === 'Parent' ? 2 : 3 ,customerType:custType});
    }

    gradeHandler = event => {
        this.setState({step: 3, grade: event.target.value});
    }
    render(){
        
            const {step} = this.state;
            const GradeSelect= this.context.GalleryLevelFilter.map((grade,index) => {
                return(
                    <div key={grade.id} className={SignUpCSS.GradeDiv}>
                            <label>{grade.value}</label>
                            <input type="checkbox" 
                                id={grade.value} 
                                name="Grade" 
                                onClick={this.gradeHandler}
                                value={grade.value} />
                    </div>
                )
            });
            const signupComp = (<div>
                                    <Logo PanelClass={SignUpCSS.LogoPanel} LogoClass={SignUpCSS.Logo} />
                                    <div className={SignUpCSS.LoginLabelPanel}>
                                        <h3 className={SignUpCSS.LoginLabel}>{this.context.signUpLabel}</h3>
                                    </div>
                                    <div className={SignUpCSS.InputPanel}>
                                        <InputText placeHolderText={this.context.emailLabel} styleClass={SignUpCSS.InputText}/>
                                        <InputText placeHolderText={this.context.pwdLabel} styleClass={SignUpCSS.InputText}/>
                                    </div>
                                    <div className={SignUpCSS.loginButtonPanel}>
                                        <Button btnType="button" clickEvent={this.props.loginEvent}
                                            styleClass={SignUpCSS.loginButton}>
                                            <label>{this.context.createAccount}</label>
                                        </Button>
                                    </div>
                                    <hr/>
                                    <div className={SignUpCSS.oAuthPanel}>
                                        <Button btnType="button" 
                                            styleClass={SignUpCSS.loginButton}>
                                            <i className={"fa fa-facebook-square "+SignUpCSS.oAuthIcon} />
                                            <label>{this.context.signUpFB}</label>
                                        </Button>
                                        <Button btnType="button" 
                                            styleClass={SignUpCSS.loginButton}>
                                            <i className={"fa fa-google "+SignUpCSS.oAuthIcon}/>
                                            <label>{this.context.signUpGoogle}</label>
                                        </Button>
                                    </div>
                                </div>);
            switch(step) {
            case 1:
                return <div className={SignUpCSS.custTypePanel}>
                            <h2>{this.context.selectCategory}</h2>
                            <Button btnType="button" clickEvent={() => this.customerHandler('School')}
                                styleClass={SignUpCSS.custTypeBtn}>
                                <label>{this.context.schoolInstLabel}</label>
                            </Button>
                            <Button btnType="button" clickEvent={() => this.customerHandler('Teacher')}
                                styleClass={SignUpCSS.custTypeBtn}>
                                <label>{this.context.EduTeacherLabel}</label>
                            </Button>
                            <Button btnType="button" clickEvent={() => this.customerHandler('Parent')}
                                styleClass={SignUpCSS.custTypeBtn}>
                                <label>{this.context.ParentsLabel}</label>
                            </Button>
                        </div>
            case 2:
                return <div className={SignUpCSS.GradePanel}>
                            <h2>{this.context.selectGrade}</h2>
                            <div>
                                {GradeSelect}
                            </div>
                        </div>
            case 3:
                return <Fragment>{signupComp}</Fragment>
            default:
                return 'Some error Occured';
            }   
        }      
};

export default SignUp;