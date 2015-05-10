// You may override the helpers on a template to return
// a contextual loading template
Template.registerHelper('getWithLoadingTemplate', function() {
  return WithLoading.defaultTemplate;
});

