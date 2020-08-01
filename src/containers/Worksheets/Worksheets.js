import React,{Component, Fragment} from 'react';
import axios from 'axios';
import worksheetCSS from './Worksheets.css';

import dictionary from '../../context/tflDictionary';
import SearchBar from '../../components/SearchBar/SearchBar';
import Gallery from '../../components/Gallery/Gallery';
import GalleryMenu from '../../components/Gallery/GalleryMenu/GalleryMenu';
import GalleryFilter from '../../components/Gallery/GalleryFilter/GalleryFilter';
import WorksheetInfo from '../../components/WorksheetInfo/WorksheetInfo';
import GalleryFilterCSS from '../../components/Gallery/GalleryFilter/GalleryFilter.css';
import RelatedResources from '../../components/RelatedResources/RelatedResources';

class Worksheets extends Component {

    static contextType = dictionary;
    state ={
        activePage: "Gallery",
        worksheet: this.context.dummyList[0],
        currentPage: 0
      }
    
    openWorksheet = (activeSheet) =>{
        this.setState({
            activePage: "dwldWorkSheet",
            worksheet: activeSheet
        });
    }

    getWorksheetList = () => {
        axios.get('http://localhost:8080').then(
            response => {
                console.log(response)
        });
    }
    
    componentDidMount(){
        this.getWorksheetList();    
    }

    worksheetListPaginator = (pageIndex) =>{    
        this.setState({
            currentPage: pageIndex
        });
    }

    render(){
        
        let galleryLeftFilter = null;
        let galleryNav = null;
        let gallerySort = null;
        let worksheetContent = null;

        if(this.state.activePage === "Gallery"){
            galleryLeftFilter = <span className={GalleryFilterCSS.GalleryFilterPanel}>
                                    <GalleryFilter 
                                    title={this.context.bylevelLabel}
                                    FilterOptions={this.context.GalleryLevelFilter}
                                    GalleryFilterHeader={GalleryFilterCSS.GalleryFilterHeader}
                                    FilterDiv={GalleryFilterCSS.FilterDiv}
                                    GalleryFilterPanel={GalleryFilterCSS.FilterContainer}
                                    FilterLink={GalleryFilterCSS.FilterLink}/>

                                    <GalleryFilter 
                                    title={this.context.bySubLabel}
                                    FilterOptions={this.context.GallerySubFilter}
                                    GalleryFilterHeader={GalleryFilterCSS.GalleryFilterHeader}
                                    FilterDiv={GalleryFilterCSS.FilterDiv}
                                    GalleryFilterPanel={GalleryFilterCSS.FilterContainer}
                                    FilterLink={GalleryFilterCSS.FilterLink}/>

                                    <GalleryFilter 
                                    title={this.context.byActivityLabel}
                                    FilterOptions={this.context.GalleryActivityFilter}
                                    GalleryFilterHeader={GalleryFilterCSS.GalleryFilterHeader}
                                    FilterDiv={GalleryFilterCSS.FilterDiv}
                                    GalleryFilterPanel={GalleryFilterCSS.FilterContainer}
                                    FilterLink={GalleryFilterCSS.FilterLink}/>

                                    <GalleryFilter 
                                    title={this.context.byLessonLabel}
                                    FilterOptions={this.context.GalleryLessonFilter}
                                    GalleryFilterHeader={GalleryFilterCSS.GalleryFilterHeader}
                                    FilterDiv={GalleryFilterCSS.FilterDiv}
                                    GalleryFilterPanel={GalleryFilterCSS.FilterContainer}
                                    FilterLink={GalleryFilterCSS.FilterLink}/>

                                </span>;
            galleryNav = <Fragment>
                <div className={worksheetCSS.GalleryMenuPanel}>
                    <GalleryMenu menuList={this.context.GalleryMenu}/>
                </div>
                <hr/>
            </Fragment>;
            gallerySort = <div className={worksheetCSS.GallerySortPanel}>
                    <select className={worksheetCSS.GallerySort}>
                        <option selected="" value="popularity">Popularity</option>
                        <option value="weightedRating">Highest Rated</option>
                        <option value="dateCreated">Most Recent</option>
                        <option value="title">Title</option>
                        <option value="relevance">Relevance</option>
                    </select>
            </div>;
            worksheetContent=<Gallery 
                paginatorClickEvent = {this.worksheetListPaginator}
                currentPage={this.state.currentPage} 
                clickEvent={this.openWorksheet} 
                worksheetList={this.context.dummyList}/>;
        }

        if(this.state.activePage === "dwldWorkSheet"){
            const divStyle={padding:"2% 0",fontSize:"12px"};
            galleryNav=<div style={divStyle}>
                Printable Worksheet &gt; Pre School &gt; Science &gt; {this.state.worksheet.title} 
            </div>;
            worksheetContent=<Fragment>
                                <div className={worksheetCSS.WorksheetInfoWrapper}>
                                    <WorksheetInfo {...this.state.worksheet}/>
                                </div>
                                <RelatedResources clickEvent={this.openWorksheet} relatedList={this.context.relatedList}/>
                            </Fragment>
        }

        return(
            <div className={worksheetCSS.WorksheetPanel}>
                <div className={worksheetCSS.LeftADBanner}>
                </div>
                <div className={worksheetCSS.LeftPanel}>
                    {galleryLeftFilter}
                </div>
                <div className={worksheetCSS.GalleryPanel}>
                    <SearchBar searchDiv={worksheetCSS.SearchDiv} searchBar={worksheetCSS.WorksheetSearch}>
                    <i className={"fa fa-search "+worksheetCSS.SearchBarIcon} aria-hidden="true"></i>
                    </SearchBar>
                    {galleryNav}
                    {gallerySort}
                    {worksheetContent}
                </div>
                <div className={worksheetCSS.RightADBanner}>
                </div> 
            </div>
        );
    }
}

export default Worksheets;