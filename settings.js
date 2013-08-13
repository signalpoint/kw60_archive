/**
 * Specify your DrupalGap's Mobile Application settings here. 
 */
drupalgap.settings = {
  
  /* Paths */
  'site_path':'http://kw60.imarketingsolutions.com', /* e.g. http://www.example.com */
  'base_path':'/',
  'default_services_endpoint':'drupalgap',
  'clean_urls':false, /* set to true if you have clean urls enabled on your site */
  
  /* App Title */
  'title':'DrupalGap',
  
  /* App Front Page */
  'front':'node/404',
  /*'front':'gallery',*/
  
  /* Language */
  'language':'und',
  
  /* Files */
  'file_public_path':'sites/default/files',
  
  /* Debug */
  'debug':false, /* Set to true to see console.log debug information. Set to
                   false when publishing app! */
  'debug_level':0, /* 0 = mild, 1 = medium (), 2 = spicy () */
  
  /* Theme */
  'theme':'easystreet3',
  
  /* Logo */
  'logo':'themes/easystreet3/images/drupalgap.jpg',
  
  /* Cache Performance Settings */
  cache:{
    
    /* Set to true to load the page.tpl.html contents from cache */
    theme_registry:true,
    
    /* Allow entities retrieved from the Drupal server to be cached on the
       device using local storage.  */
    entity:{
      enabled:true, /* Set to true to enable entity local storage caching. */
      expiration:300 /* Number of seconds before cached copy of entity expires. 
                       Set to 0 to cache forever, set to 60 for one minute, etc.  */
    },

  },
  
  /* Blocks */
  'blocks':{
    'easystreet3':{
      'header':{
        'header':{}
      },
      'navigation':{
        'main_menu':{}
      },
      'sub_navigation':{
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
        },
      },
      'content':{
        'main':{}
      },
      'footer':{
        'kw60_footer':{}
      },
    },
  },
  
  /* Menus */
  'menus':{
    'main_menu':{
      'links':[
        {'title':'Service History','path':'node/486','options':{'attributes':{'data-icon':'star'}}},
        {'title':'Social Advances','path':'node/488','options':{'attributes':{'data-icon':'grid'}}},
        {'title':'Wartime Advances','path':'node/279','options':{'attributes':{'data-icon':'info'}}},
        {'title':'Personal History','path':'node/936','options':{'attributes':{'data-icon':'info'}}}
      ],
      options:{
        attributes:{'data-theme':'c'}
      }
    },
    'service_history':{
      'links':[
        {'title':'Allies','path':'node/486'},
        {'title':'Army','path':'node/455'},
        {'title':'Marine Corps','path':'node/340'},
        {'title':'Navy','path':'node/457'},
        {'title':'Air Force','path':'node/458'},
        {'title':'Coast Guard','path':'node/383'},
      ],
    },
    'social_advances':{
      'links':[
        {'title':'Women in the Military','path':'node/488'},
        {'title':'African Americans','path':'node/977'},
        {'title':'Asian Americans','path':'node/978'},
        {'title':'Hispanic Americans','path':'node/979'},
        {'title':'Native Americans','path':'node/980'},
      ],
    },
    'wartime_advances':{
      'links':[
        {'title':'Medical','path':'node/279'},
        {'title':'Technological','path':'node/487'},
      ],
    },
    'personal_history':{
      'links':[
        {'title':'Oral Histories','path':'node/936'},
        {'title':'Testimonials','path':'testimonials'},
        {'title':'Medal of Honor Videos','path':'node/1361'},
      ],
    },
    /* Region menu links. */
    'regions':{
      'header':{
        'links':[
          /* Home Button */
          {
            'title':'Home',
            'path':'',
            "options":{"attributes":{"data-icon":"home", "class":"ui-btn-left"}},
            "pages":{
              "value":[''],
              "mode":"exclude",
            }
          },
          /* Back Button */
          {
            'title':'Back',
            "options":{
              "attributes":{
                "data-icon":"back",
                "class":"ui-btn-right",
                "onclick":"javascript:drupalgap_back();"
              }
            },
            "pages":{
              "value":[''],
              "mode":"exclude",
            }
          }
        ],
      },
    }
  },
};

/* Custom Modules */
drupalgap.modules.custom = [
  {'name':'kw60'},
];

/* Contrib Modules */
drupalgap.modules.contrib = [
  /*{'name':'example'},*/
];

