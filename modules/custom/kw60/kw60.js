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
    testimonials:{
      title:'Testimonials',
      page_callback:'kw60_testimonials_page',
      pageshow:'kw60_testimonials_pageshow'
    },
    galleries:{
      title:'Galleries',
      page_callback:'kw60_galleries_page',
      pageshow:'kw60_galleries_pageshow',
      /*region:{
        name:'footer',
        options:{
          attributes:{
            'data-icon':'star',
            'class':'ui-btn-left'
          }
        },
        pages:{
          value:['galleries'],
          mode:'exclude',
        }
      }*/
    },
    history:{
      title:'History',
      page_callback:'kw60_history_page'
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
          content = 'Service History';
          break;
        case '455':
        case '340':
        case '457':
        case '458':
        case '383':
          content = l('Service History', 'node/486');
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
 * Page callback for the testimonials page.
 */
function kw60_history_page() {
  /*overview
  service_history
  social_advances
  wartime_advances
  personal_history*/
  var content = {
    history_items:{
      theme:'jqm_item_list',
      items:[
        l('Service History', 'node/486'),
        l('Social Advances', 'node/488'),
        l('Wartime Advances', 'node/279'),
        l('Personal History', 'node/936')
      ],
      attributes:{
        id:'testimonial_listing_items'
      }
    }
  };
  return content;
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
    },
    /*gallery_image_title:{
      markup:'<h2 id="gallery_image_title" data-role="header"></h2>'
    },
    gallery_pager_prev:{
      theme:'button',
      text:'Prev',
      options:{
        attributes:{
          'data-icon':'arrow-l',
          'data-iconpos':'left',
          'data-inline':'true',
          onclick:'javascript:gallery_image_prev();'
        }
      }
    },
    gallery_pager_next:{
      theme:'button',
      text:'Next',
      options:{
        attributes:{
          'data-icon':'arrow-r',
          'data-iconpos':'right',
          'data-inline':'true',
          onclick:'javascript:gallery_image_next();'
        }
      }
    },
    gallery_image:{
      markup:'<div id="gallery_image"></div>'
    },*/
  };
  return content;
}

var gallery_images = {};
var gallery_page_index = 0;
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
        //gallery_image_show(gallery_page_index);
      },
    });
  }
  catch (error) { drupalgap_error(error); }
}

function gallery_image_prev() {
  gallery_image_show(gallery_page_index-1);
}

function gallery_image_next() {
  gallery_image_show(gallery_page_index+1);
}

/**
 * Given an index in the gallery, this will show the image. Returns false if
 * it fails.
 */
function gallery_image_show(index) {
  console.log('gallery_image_show');
  if (typeof gallery_images[index] === 'undefined') { return false; }
  var title = 'Image';
  if (gallery_images[index].title) {
    title = gallery_images[index].title
  }
  var src = false;
  if (gallery_images[index].src) {
    src = gallery_images[index].src;
  }
  var original = false;
  if (gallery_images[index].original) {
    original = gallery_images[index].original;
  }
  if (src) {
    $('#gallery_image_title').html(title);
    var image = theme('image', {path:src});
    console.log(image);
    var link = l(image, original, {InAppBrowser:true});
    console.log(link);
    $('#gallery_image').html(link);
    gallery_page_index = index;
  }
}



