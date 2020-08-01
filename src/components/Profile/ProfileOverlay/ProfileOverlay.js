import React,{useContext} from 'react';
import style from './ProfileOverlay.css';
import dictionary from '../../../context/tflDictionary';
import LinkList from '../../LinkList/LinkList';

const ProfileOverlay = props =>{
    const languageDictionary = useContext(dictionary);
    return (
        <div className={props.panelClass}>
            <div className={style.overlayContent}>
                <label className={style.profileUserName}>{props.UserName}</label>
                <LinkList 
                    sourceList={languageDictionary.ProfileActions} 
                    ListContainerClass={style.ListContainer}
                    LinkDiv ={style.LinkDiv}
                    LinkCSS={style.profileActionLink}/>
                <label onClick={props.logoutEvent} className={style.logout}>{languageDictionary.logoutLabel}</label>
            </div>
        </div>
    );
}
export default ProfileOverlay;
