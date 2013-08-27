/**
 * Implements hook_install().
 */
function kw60_install() {
  try {
    var css_file_path = drupalgap_get_path('module', 'kw60') +
                        '/kw60.css';
    drupalgap_add_css(css_file_path);
  }
  catch (error) {
    alert('kw60_install - ' + error);
  }
}

/**
 * Implements hook_menu
 */
function kw60_menu() {
  var items = {
    home:{
      title:'Korean War',
      page_callback:'kw60_home_page',
      pageshow:'kw60_home_pageshow'
    },
    testimonials:{
      title:'Testimonials',
      page_callback:'kw60_testimonials_page',
      pageshow:'kw60_testimonials_pageshow'
    },
    galleries:{
      title:'Galleries',
      page_callback:'kw60_galleries_page',
      pageshow:'kw60_galleries_pageshow'
    },
    history:{
      title:'History',
      page_callback:'kw60_history_page',
      pageshow:'kw60_history_pageshow'
    }
  };
  return items;
}

/**
 * Implements hook_block_info().
 */
function kw60_block_info() {
  var blocks = {
    kw60_footer:{
      delta:'kw60_footer',
      module:'kw60',
    },
    kw60_sub_nav_header:{
      delta:'kw60_sub_nav_header',
      module:'kw60'
    }
  };
  return blocks;
}
/**
 * Implements hook_block_view().
 */
function kw60_block_view(delta) {
  var content = '';
  if (delta == 'kw60_footer') { content = '<h2>60th Anniversary</h2>'; }
  else if (delta == 'kw60_sub_nav_header') {
    if (arg(0) == 'node') {
      switch (arg(1)) {
        case '486':
        case '455':
        case '340':
        case '457':
        case '458':
        case '383':
          content = 'Service History';
          break;
        case '488':
        case '977':
        case '978':
        case '979':
        case '980':
          content = 'Social Advances';
          break;
        case '279':
        case '487':
          content = 'Wartime Advances';
          break;
        case '936':
        case 'testimonials':
        case '1361':
          content = 'Personal History';
          break;
      }
      if (content != '') {
        content = '<h3 data-role="header">' + content + '</h3>';
      }
    }
  }
  return content;
}

/**
 * Page callback for the home page.
 */
function kw60_home_page() {
  var content = {
    home_node:{
      markup:'<div id="home_node" style="display: none;"></div>'
    },
    this_week_in_history:{
      markup:'<h1 id="this_week_in_history_header" style="display: none;">This Week in History</h1>' +
        '<div id="this_week_in_history_list"></div>'
    }
  };
  return content;
}

/**
 * Pageshow callback for the home page.
 */
function kw60_home_pageshow() {
  drupalgap.services.node.retrieve.call({
      nid:404,
      success:function(node){
        $('#home_node').html(node.content).show('slow');
      }
  });
  drupalgap.views_datasource.call({
    path:'drupalgap/this_week_in_history',
    success:function(data) {
      $('#this_week_in_history_header').show('slow');
      $.each(data.nodes, function(index, object){
          var node = object.node;
          $('#this_week_in_history_list').append('<div><strong>' + node.field_this_week_date + '</strong><p>' + node.body + '</p></div>');
      });
    },
  });
}

/**
 * Page callback for the history page.
 */
function kw60_history_page() {
  var content = {
    history_items:{
      theme:'jqm_item_list',
      items:[
        l('Service History', 'node/486'),
        l('Social Advances', 'node/488'),
        l('Wartime Advances', 'node/279'),
        l('Personal History', 'testimonials')
      ],
      attributes:{
        id:'history_listing_items'
      }
    },
    history_node:{
      markup:'<div id="history_node"></div>'
    }
  };
  return content;
}

/**
 * Pageshow callback for the history page.
 */
function kw60_history_pageshow() {
  drupalgap.services.node.retrieve.call({
      nid:261,
      success:function(node){
        $('#history_node').html(node.content);
      }
  });
}

/**
 * Page callback for the testimonials page.
 */
function kw60_testimonials_page() {
  var content = {
    testimonial_listing:{
      theme:'jqm_item_list',
      items:[],
      attributes:{
        id:'testimonial_listing_items'
      }
    }
  };
  return content;
}

/**
 * The jQM pageshow callback for the testimonials page.
 */
function kw60_testimonials_pageshow() {
  try {
    drupalgap.views_datasource.call({
      'path':'drupalgap/testimonials',
      'success':function(data) {
        var items = [];
        $.each(data.nodes, function(index, object){
            var node = object.node;
            items.push(l(node.title, 'node/' + node.nid));
        });
        drupalgap_item_list_populate("#testimonial_listing_items", items);
      },
    });
  }
  catch (error) { drupalgap_error(error); }
}

/**
 * Page callback for the galleries page.
 */
function kw60_galleries_page() {
  var content = {
    galleries_listing:{
      theme:'jqm_item_list',
      items:[],
      attributes:{
        id:'galleries_listing_items'
      }
    }
  };
  return content;
}

/**
 * The jQM pageshow callback for the galleries page.
 */
function kw60_galleries_pageshow() {
  try {
    drupalgap.views_datasource.call({
      'path':'drupalgap/galleries',
      'success':function(data) {
        // Extract the nodes into items, then drop them in the list.
        var items = [];
        $.each(data.nodes, function(index, object){
            var node = object.node;
            var image = theme('image', {path:node.src});
            var header = '<h2>' + node.title + '</h2>';
            var paragraph = '<p>' + node.title + '</p>';
            items.push(l(image + header + paragraph, 'node/' + node.nid));
        });
        drupalgap_item_list_populate("#galleries_listing_items", items);
      },
    });
  }
  catch (error) { drupalgap_error(error); }
}

