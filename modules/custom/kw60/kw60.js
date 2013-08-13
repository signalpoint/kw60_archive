/**
 * Implements hook_menu
 */
function kw60_menu() {
  var items = {
    testimonials:{
      title:'Testimonials',
      page_callback:'kw60_testimonials_page',
      pageshow:'kw60_testimonials_pageshow'
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

