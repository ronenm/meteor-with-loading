# with-loading
A set of very simple blocks that can be used to show "Loading" message and/or spinners on sections of the web page instead.
All blocks have been written in pure Spacebars

## Installation
```
meteor add ronenm:with-loading
```

## The blocks

The "loadingWhile" and "loadingUntil" blocks shows the loading template till the helper used as their parameter returns a false (loadingWhile) or true (loadingUntil) value.
"withLoading" is very similar to "loadingUntil" except that it uses the conditional data (this) as the data to the internal template.

The {{else}} section of the block is not shown!

```html

{{#loadingUntil messageAvailable}}
  {{{messageHtml}}}
{{/loadingUntil}}

{{#loadingWhile loadingData}}
  {{> showData currentArticle }}
{{/loadingWhile}}

{{#withLoading currentArticle}}
  {{> displayArticle }}
{{/withLoading}}

```

By default with-loading uses the "SectionLoading" template to display the loading message and/or spinners. The "SectionLoading" template should be defined by the user of the package.

You can modify the used template either by modifying the global variable `WithLoading.defaultTemplate` or by overriding the helper `getWithLoadingTemplate` (which is defined as global helper).

```javascript

// Globally modify the template used by with-loading blocks to show loading message and or spinner
WithLoading.defaultTemplate = "SectionLoading";

// Modifying the specific template used to show loading data for a specific template
Template.Article.helpers({
  getWithLoadingTemplate: function() {
    // Return the name of the template to be used
  }
});

```

