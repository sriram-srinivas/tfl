import React,{useContext} from 'react';
import workSheetInfoCSS from './WorksheetInfo.css';
import Button from '../Button/Button';
import dictionary from '../../context/tflDictionary';
import GalleryFilter from '../../components/Gallery/GalleryFilter/GalleryFilter';
import GalleryFilterCSS from '../../components/Gallery/GalleryFilter/GalleryFilter.css';
import SocialMedia from '../SocialMedia/SocialMedia';
import Rating from '../Rating/Rating';
import DownloadCount from '../DownloadCount/DownloadCount';

const workSheetInfo = props => {
    const languageDictionary = useContext(dictionary);
    return(
        <div>
            <div className={workSheetInfoCSS.worksheetInfoPanel}>
                <h2 className={workSheetInfoCSS.worksheetType}>Printable Worksheet</h2>
                <h2 className={workSheetInfoCSS.worksheetTitle}>{props.title}</h2>
                <h3 className={workSheetInfoCSS.worksheetDescTitle}>Lorem ipsum</h3>
                <div className={workSheetInfoCSS.attributespanel}>
                    <span className={workSheetInfoCSS.rating}>
                        <Rating rating={props.rating}/>
                    </span>
                    <span className={workSheetInfoCSS.dwldDiv}>
                        <DownloadCount 
                                iconCSS={workSheetInfoCSS.dwld}
                                countCSS={workSheetInfoCSS.dwlCount}>
                                    {new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(props.downloadsCount)+" "+languageDictionary.downloadCountLabel}
                        </DownloadCount>
                    </span>
                </div>
                <p className={workSheetInfoCSS.worksheetDesc}>
                    {props.Description}
                </p>
                <div className={workSheetInfoCSS.btnPanel}>
                        <Button btnType="button"
                            styleClass={workSheetInfoCSS.dwldWorksheetBtn}>
                            <label>{languageDictionary.downloadWorksheetLabel}</label>
                        </Button>
                </div>
            </div>
            <div className={workSheetInfoCSS.worksheetPreviewPanel}>
                <div className={workSheetInfoCSS.worksheetPreviewImgPanel}>
                    <img src={props.url} alt="No Preview" className={workSheetInfoCSS.worksheetPreviewIMG}/>
                </div>
                <div className={workSheetInfoCSS.worksheetPreviewFilterPanel}>
                    <div>
                        <SocialMedia SocialMediaList={languageDictionary.SocialMedia_share} sm={workSheetInfoCSS.socialMediaIcon} />
                    </div>

                    <GalleryFilter 
                        title={languageDictionary.bylevelLabel}
                        FilterOptions={languageDictionary.GalleryLevelFilter}
                        GalleryFilterHeader={GalleryFilterCSS.GalleryFilterHeader}
                        FilterDiv={GalleryFilterCSS.WorksheetInfoFilterDiv}
                        GalleryFilterPanel={GalleryFilterCSS.WorksheetInfoFilterPanel}
                        FilterLink={GalleryFilterCSS.FilterLink}/>
                </div>
            </div>
        </div>
)};

export default workSheetInfo;