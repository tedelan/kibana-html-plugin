define(function (require) {
  // we need to load the css ourselves
  require('plugins/raystorm-kibana-html/raystormHtml.less');

  // we also need to load the controller and used by the template
  require('plugins/raystorm-kibana-html/raystormHtmlController');

  // register the provider with the visTypes registry so that other know it exists
  require('ui/registry/vis_types').register(HtmlVisProvider);

  function HtmlVisProvider(Private) {
    var TemplateVisType = Private(require('ui/template_vis_type/TemplateVisType'));

    // return the visType object, which kibana will use to display and configure new
    // Vis object of this type.
    return new TemplateVisType({
      name: 'html',
      title: 'Html widget',
      icon: 'fa-code',
      description: 'Useful for displaying html in dashboards.',
      template: require('plugins/raystorm-kibana-html/raystormHtml.html'),
      params: {
        editor: require('plugins/raystorm-kibana-html/raystormHtmlParams.html')
      },
      requiresSearch: false
    });
  }

  // export the provider so that the visType can be required with Private()
  return HtmlVisProvider;
});
