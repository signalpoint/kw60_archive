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
    gallery:{
      title:'Gallery',
      page_callback:'kw60_gallery_page',
      pageshow:'kw60_gallery_pageshow',
      region:{
        name:'footer',
        options:{
          attributes:{
            'data-icon':'star',
            'class':'ui-btn-left'
          }
        },
        pages:{
          value:['gallery'],
          mode:'exclude',
        }
      }
    }
  };
  return items;
}

/**
 * Implements hook_block_info().
 */
function kw60_block_info() {
  var blocks = {
    'kw60_footer':{
      'delta':'kw60_footer',
      'module':'kw60',
    },
  };
  return blocks;
}
/**
 * Implements hook_block_view().
 */
function kw60_block_view(delta) {
  var content = '';
  if (delta == 'kw60_footer') { content = '<h2>60th Anniversary</h2>'; }
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
 * Page callback for the gallery page.
 */
function kw60_gallery_page() {
  var content = {
    /*gallery_listing:{
      theme:'jqm_item_list',
      items:[],
      attributes:{
        id:'gallery_listing_items'
      }
    },*/
    gallery_image_title:{
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
    },
  };
  return content;
}

var gallery_images = {};
var gallery_page_index = 0;
/**
 * The jQM pageshow callback for the gallery page.
 */
function kw60_gallery_pageshow() {
  try {
    drupalgap.views_datasource.call({
      'path':'drupalgap/gallery',
      'success':function(data) {
        $.each(data.nodes, function(index, object){
            gallery_images[index] = object.node;
        });
        gallery_image_show(gallery_page_index);
        
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



