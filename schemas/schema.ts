// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './indoo/blockContent'
// Indoo
import post from './indoo/post'
import author from './indoo/author'
import video from './indoo/video'
import puneet from './indoo/puneet'
import IHCL from './indoo/IHCL'
import chef from './indoo/chef'
import ja from './indoo/ja'
import documentdataseven from './indoo/documentdataseven'
import documentdataeight from './indoo/documentdataeight'
import documentdatanine from './indoo/documentdatanine'
import documentdataten from './indoo/documentdataten'

//Aditya
import images from './Aditya schemas/Carosal/logo'
import carosal from './Aditya schemas/Carosal/carosal'
import CarosalImagesWithContent from './Aditya schemas/Body Content/CarosalImagesWithContent'
import companyInformation from './Aditya schemas/Body Content/companyInformation'
import CorporateAnnouncements from './Aditya schemas/Body Content/CorporateAnnouncements'
import FinancialResults from './Aditya schemas/Body Content/FinancialResults'
import AGMs from './Aditya schemas/Body Content/AGMs'
import CorporateActions from './Aditya schemas/Body Content/CorporateActions'
import InvestorToolKits from './Aditya schemas/Body Content/InvestorToolKits'
import chart from './Aditya schemas/Body Content/chart'
import date from './Aditya schemas/Body Content/calender'
import fieldOne from './Aditya schemas/Blog Content/blogFiledOne'
import fieldTwo from './Aditya schemas/Blog Content/blogFiledTwo'
import fieldThree from './Aditya schemas/Blog Content/blogFiledThree'
import fieldFour from './Aditya schemas/Blog Content/blogFiledFour'
import fieldFive from './Aditya schemas/Blog Content/blogFiledFive'
import brands from './Aditya schemas/footer/footerBrands'
import career from './Aditya schemas/footer/footerCareer'
import company from './Aditya schemas/footer/footerCompany'
import contact from './Aditya schemas/footer/footerContactUs'
import devlopment from './Aditya schemas/footer/footerDevlopment'
import investers from './Aditya schemas/footer/footerInvesters'
import pressRoom from './Aditya schemas/footer/footerPressRoom'
import responsibility from './Aditya schemas/footer/footerResponsibility'
import joinUs from './Aditya schemas/footer/joinUs'
import subFooter from "./Aditya schemas/footer/subFooter";
import footer from "./Aditya schemas/footer/footer";


//santhosh
import contactdocument from './santhosh schemas/contactdocument'
import hrcarddocument from './santhosh schemas/hrcarddocument'
import bannerdocument from './santhosh schemas/bannerdocument'
import withoutcard from './santhosh schemas/withoutcard'
import headtwo from './santhosh schemas/headtwo'
import pdfdownload from './santhosh schemas/pdfdownload'
// import footerBrands from './santhosh schemas/footer/footerBrands'
// import footerCareer from './santhosh schemas/footer/footerCareer'
// import footerCompany from './santhosh schemas/footer/footerCompany'
// import footerContactUs from './santhosh schemas/footer/footerContactUs'
// import footerDevlopment from './santhosh schemas/footer/footerDevlopment'
// import footerInvesters from './santhosh schemas/footer/footerInvesters'
// import footerPressRoom from './santhosh schemas/footer/footerPressRoom'
// import footerResponsibility from './santhosh schemas/footer/footerResponsibility'

//Amit
import documentdata from './amitschema/doumentdata'
import content from './amitschema/content'
import contentone from './amitschema/contentone'
//venky
import documentdatasevenv from './venky schemas/documentdatasevenv'
import documentdataeightv from './venky schemas/documentdataeightv'
import documentdataninev from './venky schemas/documentdataninev'
import documentdatatenv from './venky schemas/documentdatatenv'
import documentdatasix from './venky schemas/documentdatasix'
import documentdatafour from './venky schemas/documentdatafour'
import documentdatathree from './venky schemas/documentdatathree'
import documentdatatwo from './venky schemas/documentdatatwo'
import documentdatafive from './venky schemas/documentdatafive'





// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    post,
    author,
    puneet,
    IHCL,
    chef,
    ja,
    documentdataseven,
    documentdataeight,
    documentdatanine,
    documentdataten,
    video,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,

    //Aditya
    images,
    carosal,
    CarosalImagesWithContent,
    companyInformation,
    CorporateAnnouncements,
    FinancialResults,
    AGMs,
    CorporateActions,
    InvestorToolKits,
    chart,
    date,
    fieldOne,
    fieldTwo,
    fieldThree,
    fieldFour,
    fieldFive,
    brands,
    career,
    company,
    contact,
    devlopment,
    investers,
    pressRoom,
    responsibility,
    joinUs,
    subFooter,
    footer,

    //santhosh
    contactdocument,
    hrcarddocument,
    bannerdocument,
    withoutcard,
    headtwo,
    pdfdownload,
    // footerBrands,
    // footerCareer,
    // footerCompany,
    // footerContactUs,
    // footerDevlopment,
    // footerInvesters,
    // footerPressRoom,
    // footerResponsibility,
    // subFooter,
    // footer,
    // joinUs


    //amit
    documentdata,
    content,
    contentone,
 


    //venky
    documentdatatwo,
    documentdatathree,
    documentdatafour,
    documentdatafive,
    documentdatasix,
    documentdatasevenv,
    documentdataeightv,
    documentdataninev,
    documentdatatenv,
  ]),
})
