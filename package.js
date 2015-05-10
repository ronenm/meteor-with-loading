Package.describe({
  name: 'ronenm:with-loading',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Simple templates that shows loading templates on sections of the page',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ronenm/meteor-with-loading',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.1');
  api.use([
    'blaze',
    'spacebars',
    'templating',
    'minimongo'
  ], 'client');
  api.addFiles('blocks.html','client');
  api.addFiles('helpers.js','client');
  api.addFiles('with-loading.js','client');
  api.export('WithLoading','client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ronenm:with-loading');
  api.addFiles('with-loading-tests.js');
});
