import React,{Fragment, useContext} from 'react';
import dictionary from '../../context/tflDictionary';
import FooterCSS from '../Footer/Footer.css';
import LinkList from '../LinkList/LinkList';
import SocialMedia from '../SocialMedia/SocialMedia';

const footer = props =>{

    const languageDictionary = useContext(dictionary);

    return(
        <Fragment>
            <div className={FooterCSS.pageLinkPanel}>
                <div className={FooterCSS.leftSegment}>
                    
                </div>
                <div className={FooterCSS.contentSegment}>
                    <LinkList 
                    sourceList={languageDictionary.GalleryLevelFilter} 
                    ListContainerClass={FooterCSS.ListContainer}
                    LinkDiv={FooterCSS.LinkDiv}
                    LinkCSS={FooterCSS.FooterLink}/>

                    <LinkList 
                    sourceList={languageDictionary.ActivityLinks} 
                    ListContainerClass={FooterCSS.ListContainer}
                    LinkDiv ={FooterCSS.LinkDiv}
                    LinkCSS={FooterCSS.FooterLink}/>
                    <LinkList 
                    sourceList={languageDictionary.PageLinks} 
                    ListContainerClass={FooterCSS.ListContainer}
                    LinkDiv ={FooterCSS.LinkDiv}
                    LinkCSS={FooterCSS.FooterLink}/>
                </div>
                <div className={FooterCSS.rightSegment}>
                    
                </div>
            </div>
            <div className={FooterCSS.CopyRightPanel}>
                <div className={FooterCSS.SocialMediaPanel}>
                    <div>
                        <SocialMedia SocialMediaList={languageDictionary.SocialMedia} sm={FooterCSS.socialMediaIcon} />
                    </div>
                    <a target="blank" 
                    href={"https://"+languageDictionary.TFLURL} 
                    className={FooterCSS.FooterLink}>
                        {languageDictionary.TFLURL}
                    </a>
                </div>
                    <div className={FooterCSS.FooterTxtPanel}>
                        <label className={FooterCSS.FooterTxt}>
                            {languageDictionary.FooterTxt}
                        </label>
                    </div>
            </div>
        </Fragment>
    )

};

export default footer;