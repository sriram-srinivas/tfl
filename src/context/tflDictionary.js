import React from 'react';

const labelDictionary = {
    'searchPlaceHolder':'Search',
    'bylevelLabel':'By Level',
    'bySubLabel':'By Subject',
    'byActivityLabel':'By Activity',
    'byLessonLabel':'By Lesson',
    'exploreLabel':'Explore',
    'loginLabel':'Log in',
    'signUpLabel':'Sign up',
    'tryPremiumLabel':'Try Premium',
    'logoutLabel':'Log out',
    'TFLURL':'www.tfl.in',
    'FooterTxt':'@TFL|Eblaze Technology',
    'downloadCountLabel':'download(s)',
    'downloadWorksheetLabel':'Download to read more',
    'relatedResourcesLabel':'Related Resources',
    'emailLabel':'Email ID',
    'pwdLabel':'Password',
    'forgotPWD':'Forgot Password',
    'logInFB':'Log in with Facebook',
    'logInGoogle':'Log in with Google',
    'signUpFB':'Sign up with Facebook',
    'signUpGoogle':'Sign up with Google',
    'worksheetsPerPage':12,
    'accountHeader':'Account Details',
    'changePwdLabel':'Change Password',
    'editLabel':'Edit',
    'upgradePremium':'Upgrade Premium',
    'PlanLabel':'Plan',
    'accPref':'Account Preferences',
    'emailPref':'Email Preferences',
    'connectFB':'Connect with Facebook',
    'disconnectFB':'Disconnect from Facebook',
    'connectGO':'Connect with Google',
    'disconnectGO':'Disconnect from Google',
    'deActivateAccLabel':'Deactivate Account',
    'schoolInstLabel':'School/Institution',
    'EduTeacherLabel':'Educator/Teacher',
    'ParentsLabel':'Parents',
    'selectCategory':'Select Your Category',
    'selectGrade':'Select Grade',
    'createAccount':'Create Account',
    dummyList :[
        {"id":1,"title":"Human", "rating":1.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1133001_1134000/1133295/file_1133295.gif?width=600","downloadsCount":1101},
        {"id":2,"title":"Birds", "rating":1.5, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1119001_1120000/1119502/file_1119502.png?width=600","downloadsCount":1292},
        {"id":3,"title":"Animals", "rating":2.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1133001_1134000/1133651/file_1133651.gif?width=600","downloadsCount":1383},
        {"id":4,"title":"Jobs", "rating":2.5, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1133001_1134000/1133538/file_1133538.gif?width=600","downloadsCount":1474},
        {"id":5,"title":"Cities", "rating":3.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1133001_1134000/1133129/file_1133129.gif?width=600","downloadsCount":1565},
        {"id":6,"title":"States", "rating":3.5, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1133001_1134000/1133480/file_1133480.png?width=600","downloadsCount":1656},
        {"id":7,"title":"Vehicles", "rating":4.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1135001_1136000/1135871/file_1135871.png?width=600","downloadsCount":1747},
        {"id":8,"title":"Insects", "rating":4.5, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1133001_1134000/1133025/file_1133025.gif?width=600","downloadsCount":1838},
        {"id":9,"title":"Reptiles", "rating":5.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1133001_1134000/1133454/file_1133454.png?width=600","downloadsCount":1929},
        {"id":10,"title":"Buildings", "rating":1.5, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1136001_1137000/1136143/file_1136143.gif?width=600","downloadsCount":1910},
        {"id":11,"title":"Dinosaurs", "rating":1.5, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/worksheet-image/1451936/spell-tricky-word-challenge.gif?width=600","downloadsCount":1910},
        {"id":12,"title":"Carnivores", "rating":5.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1117001_1118000/1117940/file_1117940.gif?width=600","downloadsCount":1929},
        {"id":13,"title":"Herbivores", "rating":4.5, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/worksheet-image/1391365/sight-word-assessment.gif?width=600","downloadsCount":1838},
        {"id":14,"title":"Birds", "rating":4.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1130001_1131000/1130706/file_1130706.gif?width=600","downloadsCount":1747},
        {"id":15,"title":"Wild Animals", "rating":3.5, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1118001_1119000/1118959/file_1118959.gif?width=600","downloadsCount":1656},
        {"id":16,"title":"Domestic Animals", "rating":3.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/worksheet-image/1296952/secret-garden-reading-comprehension.gif?width=600","downloadsCount":1565},
        {"id":17,"title":"Fishes", "rating":2.5, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1132001_1133000/1132972/file_1132972.gif?width=600","downloadsCount":1474},
        {"id":18,"title":"Arts", "rating":2.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1124001_1125000/1124667/file_1124667.gif?width=600","downloadsCount":1383},
        {"id":19,"title":"Numbers", "rating":1.5, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1133001_1134000/1133295/file_1133295.gif?width=600","downloadsCount":1292},
        {"id":20,"title":"Alphabets", "rating":1.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1137001_1138000/1137796/file_1137796.gif?width=600","downloadsCount":1101}
    ],
    GalleryMenu : [
        {'id':1,'value':'Printable Worksheets','to':'/PrintableWorksheets'},
        {'id':2,'value':'Lesson Plan','to':'/LessonPlan'},
        {'id':3,'value':'Online Games','to':'/OnlineGames'}
    ],
    GalleryLevelFilter : [
        {'id':1,'value':'Pre-school','to':'/preSchool'},
        {'id':2,'value':'Kindergarten','to':'/KG'},
        {'id':3,'value':'Grade 1','to':'/G1'},
        {'id':4,'value':'Grade 2','to':'/G2'},
        {'id':5,'value':'Grade 3','to':'/G3'}
    ],
    GallerySubFilter : [
        {'id':1,'value':'English'},
        {'id':2,'value':'Maths'},
        {'id':3,'value':'Science'},
        {'id':4,'value':'Social'},
        {'id':5,'value':'Art & Craft'}
    ],
    GalleryActivityFilter : [
        {'id':1,'value':'Writing'},
        {'id':2,'value':'Colouring'},
        {'id':3,'value':'Drawing'},
        {'id':4,'value':'Matching'},
        {'id':5,'value':'Counting'}
    ],
    GalleryLessonFilter : [
        {'id':1,'value':'Alphabets'},
        {'id':2,'value':'Rhymes'},
        {'id':3,'value':'Stories'},
        {'id':4,'value':'Vowels and Consonants'},
        {'id':5,'value':'Consonants and Sounds'}
    ],
    ActivityLinks : [
        {'id':1,'value':'Worksheet','to':'/PrintableWorksheets'},
        {'id':2,'value':'Lesson Plan','to':'/LessonPlan'},
        {'id':3,'value':'Online Activity','to':'/Activity'},
        {'id':4,'value':'Online Games','to':'/OnlineGames'},
        {'id':5,'value':'Stories','to':'/Stories'},
        {'id':6,'value':'Exercises','to':'/Exercises'}
    ],
    PageLinks : [
        {'id':1,'value':'About Us','to':'/About'},
        {'id':2,'value':'TFL Product','to':'/Products'},
        {'id':3,'value':'Blog','to':'/Blog'},
        {'id':4,'value':'Contact Us','to':'/Contact'}
    ],
    SocialMedia : [
        {'id':1, 'name': 'facebook', 'class':'fa fa-facebook','url':'https://www.facebook.com'},
        {'id':2, 'name': 'whatsapp', 'class':'fa fa-whatsapp','url':'https://web.whatsapp.com/'},
        {'id':3, 'name': 'twitter', 'class':'fa fa-twitter','url':'https://www.twitter.com'},
        {'id':4, 'name': 'instagram', 'class':'fa fa-instagram','url':'https://www.instagram.com'}
    ],
    SocialMedia_share : [
        {'id':1, 'name': 'pinterest', 'BGclass':'pinterestBG', 'class':'fa fa-pinterest-p','url':'https://web.whatsapp.com/'},
        {'id':2, 'name': 'facebook', 'BGclass':'facebookBG', 'class':'fa fa-facebook','url':'https://www.facebook.com'},
        {'id':3, 'name': 'twitter', 'BGclass':'twiiterBG', 'class':'fa fa-twitter','url':'https://www.twitter.com'}
    ],
    relatedList : [
        {"id":5,"title":"Cities", "rating":3.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1133001_1134000/1133129/file_1133129.gif?width=600","downloadsCount":1565},
        {"id":6,"title":"States", "rating":3.5, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1133001_1134000/1133480/file_1133480.png?width=600","downloadsCount":1656},
        {"id":7,"title":"Vehicles", "rating":4.0, "Description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...","url":"https://cdn.education.com/files/1135001_1136000/1135871/file_1135871.png?width=600","downloadsCount":1747}
      ],
    FieldList : [
        {"id":1,"label":"User Name","value":"SUD1979"},
        {"id":2,"label":"Email","value":"sudsanam1979@TFL.in"},
        {"id":3,"label":"School Name","value":"Nehru Govt High School"},
        {"id":4,"label":"Designation","value":"Supervisor"},
        {"id":5,"label":"Phone Number","value":"+91 9789099810"},
        {"id":6,"label":"Address1","value":"No 6, Vivekanandar Street"},
        {"id":7,"label":"Address2","value":""},
        {"id":8,"label":"City","value":"Chennai"},
        {"id":9,"label":"State","value":"Tamil Nadu"},
        {"id":10,"label":"Zip Code","value":"600044"}
    ],
    ProfileActions:[
        {"id":1,"to":"/Account","value":"Account Settings"},
        {"id":2,"to":"/Downloads","value":"My Downloads"},
        {"id":3,"to":"/Collections","value":"My Collections"},
    ]
};


const tflDictionary = React.createContext(labelDictionary);

export default tflDictionary;