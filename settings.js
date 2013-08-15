/* Specify DrupalGap Mobile Application Settings Here */
drupalgap.settings = {};

/***************|
 * Drupal Paths |
 ***************/
 
// Site Path
drupalgap.settings.site_path = 'http://kw60.imarketingsolutions.com'; // e.g. http://www.example.com

// Base Path
drupalgap.settings.base_path = '/';

// Default Services Endpoint Path
drupalgap.settings.default_services_endpoint = 'drupalgap';

// Public Files Directory Path
drupalgap.settings.file_public_path = 'sites/default/files';

// Clean URLs (optional)
drupalgap.settings.clean_urls = false; // Setting to false is recommended.

/*************|
 * Appearance |
 *************/

// App Title
drupalgap.settings.title = 'DrupalGap';
 
// App Front Page
drupalgap.settings.front = 'node/404';
//drupalgap.settings.front = 'galleries';
//drupalgap.settings.front = 'node/1486';

// Theme
drupalgap.settings.theme = 'easystreet3';

// Logo
drupalgap.settings.logo = 'themes/easystreet3/images/drupalgap.jpg';

// Language
drupalgap.settings.language = 'und';

// Loading Animation - http://view.jquerymobile.com/1.3.2/dist/demos/widgets/loader/
drupalgap.settings.loading = {
  text: 'Loading...',
  textVisible: true,
  theme:'a'
};

/*****************************************|
 * Modules - http://drupalgap.org/node/74 |
 *****************************************/

// Contributed Modules - www/app/modules
drupalgap.modules.contrib = [
  {'name':'image_path_rewrite'},
  {'name':'shadowbox'}
];

// Custom Modules - www/app/modules/custom
drupalgap.modules.custom = [
  {'name':'kw60'},
];

/****************************************|
 * Blocks - http://drupalgap.org/node/83 |
 ****************************************/
drupalgap.settings.blocks = {};

// Easy Street 3 Theme Blocks
drupalgap.settings.blocks.easystreet3 = {
  header:{
    header:{}
  },
  navigation:{
    main_menu:{}
  },
  sub_navigation:{
    'service_history':{
      'pages':{
        'value':['node/486', 'node/455', 'node/340', 'node/457', 'node/458', 'node/383'],
        'mode':'include',
      }
    },
    'social_advances':{
      'pages':{
        'value':['node/488', 'node/977', 'node/978', 'node/979', 'node/980'],
        'mode':'include',
      }
    },
    'wartime_advances':{
      'pages':{
        'value':['node/279', 'node/487'],
        'mode':'include',
      }
    },
    'personal_history':{
      'pages':{
        'value':['node/936', 'testimonials', 'node/1361'],
        'mode':'include',
      }
    }
  },
  content:{
    main:{}
  },
  footer:{
    kw60_footer:{}
  }
};

/***************************************|
 * Menus - http://drupalgap.org/node/85 |
 ***************************************/
drupalgap.settings.menus = {};

// User Menu Anonymous
drupalgap.settings.menus['user_menu_anonymous'] = {
  links:[
    {title:'Login','path':'user/login'},
    {title:'Register','path':'user/register'}
  ]
};

// User Menu Authenticated
drupalgap.settings.menus['user_menu_authenticated'] = {
  links:[
    {title:'My Account','path':'user'},
    {title:'Logout','path':'user/logout'}
  ]
};

// Main Menu
drupalgap.settings.menus['main_menu'] = {
  'links':[
    {'title':'Service History','path':'node/486','options':{'attributes':{'data-icon':'star'}}},
    {'title':'Social Advances','path':'node/488','options':{'attributes':{'data-icon':'grid'}}},
    {'title':'Wartime Advances','path':'node/279','options':{'attributes':{'data-icon':'info'}}},
    {'title':'Personal History','path':'node/936','options':{'attributes':{'data-icon':'info'}}}
  ],
  options:{
    attributes:{'data-theme':'c'}
  }
};

drupalgap.settings.menus['service_history'] = {
  'links':[
    {'title':'Allies','path':'node/486'},
    {'title':'Army','path':'node/455'},
    {'title':'Marine Corps','path':'node/340'},
    {'title':'Navy','path':'node/457'},
    {'title':'Air Force','path':'node/458'},
    {'title':'Coast Guard','path':'node/383'},
  ]
};
drupalgap.settings.menus['social_advances'] = {
  'links':[
    {'title':'Women in the Military','path':'node/488'},
    {'title':'African Americans','path':'node/977'},
    {'title':'Asian Americans','path':'node/978'},
    {'title':'Hispanic Americans','path':'node/979'},
    {'title':'Native Americans','path':'node/980'},
  ]
};
drupalgap.settings.menus['wartime_advances'] = {
  'links':[
    {'title':'Medical','path':'node/279'},
    {'title':'Technological','path':'node/487'},
  ]
};
drupalgap.settings.menus['personal_history'] = {
  'links':[
    {'title':'Oral Histories','path':'node/936'},
    {'title':'Testimonials','path':'testimonials'},
    {'title':'Medal of Honor Videos','path':'node/1361'},
  ]
};

/****************************************************|
 * Region Menu Links - http://drupalgap.org/node/173 |
 ****************************************************/
drupalgap.settings.menus.regions = {};

// Header Region Links
drupalgap.settings.menus.regions['header'] = {
  links:[
    /* Home Button */
    {
      title:'Home',
      path:'',
      options:{
        attributes:{
          "data-icon":"home",
          "class":"ui-btn-left"
        }
      },
      pages:{
        value:[''],
        mode:"exclude"
      }
    },
    /* Back Button */
    {
      title:'Back',
      options:{
        attributes:{
          "data-icon":"back",
          "class":"ui-btn-right",
          "onclick":"javascript:drupalgap_back();"
        }
      },
      pages:{
        value:[''],
        mode:"exclude"
      }
    }
  ]
};

/**************|
 * Development |
 **************/

// Debug
drupalgap.settings.debug = false; /* Set to true to see console.log debug
                                     information. Set to false when publishing
                                     app! */

// Debug Level
drupalgap.settings.debug_level = 0; /* 0 = mild, just a little debugging
                                       1 = medium
                                       2 = spicy, lots of debugging */

/***********************|
 * Performance Settings |
 ***********************/
drupalgap.settings.cache = {};

// Theme Registry - Set to true to load the page.tpl.html contents from cache.
drupalgap.settings.cache.theme_registry = true;

// Entities - Allow entities retrieved from the Drupal server to be cached on
//            the mobile device using local storage.
drupalgap.settings.cache.entity = {
  enabled:false,   /* Set to true to enable entity local storage caching. */
  expiration:300 /* Number of seconds before cached copy of entity expires. Set
                     to 0 to cache forever, set to 60 for one minute, etc. */
};

