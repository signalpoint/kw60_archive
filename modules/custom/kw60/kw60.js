/**
 * Implements hook_menu
 */
function kw60_menu() {
  var items = {
    my_custom_page:{
      title:'Hello DrupalGap',
      page_callback:'my_module_custom_page',
    }
  };
  return items;
}

/**
 * Page callback for my custom page.
 */
function my_module_custom_page() {
  var content = {
    my_intro_text:{
      markup:'<p>Hello App World!</p>',
    }
  };
  return content;
}

