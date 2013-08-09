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
  'front':'node/261',
  
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
  
  /* Cache - Set to true when publishing app!*/
  'cache':{
    'theme_registry':false,
  },
  
  /* Blocks */
  'blocks':{
    'easystreet3':{
      'header':{
        'header':{}
      },
      'navigation':{
        /*'user_menu_anonymous':{
          'roles':{
            'value':['anonymous user'],
            'mode':'include',
          }
        },
        'user_menu_authenticated':{
          'roles':{
            'value':['authenticated user'],
            'mode':'include',
          }
        }*/
      },
      'sub_navigation':{
        'main_menu':{},
        'primary_local_tasks':{},
      },
      'content':{
        'main':{}
      },
      'footer':{
        'powered_by':{}
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
    },
    'user_menu_anonymous':{
      'links':[
        {'title':'Login','path':'user/login'},
        {'title':'Register','path':'user/register'},
      ],
    },
    'user_menu_authenticated':{
      'links':[
        {'title':'My Account','path':'user'},
        {'title':'Logout','path':'user/logout'},
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

