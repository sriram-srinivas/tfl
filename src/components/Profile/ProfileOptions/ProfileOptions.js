import React from 'react';
import style from './ProfileOptions.css';
import * as images from '../../../assets/images/images';
import ProfileOverlay from '../ProfileOverlay/ProfileOverlay';

const ProfileOptions = props =>{
    const usrName = props.UserName;
    let usrMask = usrName;
        if(usrMask.length > 15){
            usrMask= usrMask.substring(0, 12)+"...";
        }
    return (
        <div className={style.profilePanel}>
            <label className={style.profileName}>{usrMask}</label>
            <img src={images.avatar} className={style.profileIcon} alt=""/>
            <ProfileOverlay UserName={usrName} panelClass={style.profileOverlayPanel} logoutEvent={props.logoutEvent}/>
        </div>
    );
}
export default ProfileOptions;
