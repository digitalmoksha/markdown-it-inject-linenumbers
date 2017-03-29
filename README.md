# markdown-it-inject-linenumbers

> Insert line numbers to support sync scrolling for the [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

Inject the source line numbers into the final HTML.  This gives you the anchor points to implement synchronized scrolling.

`lorem` => `<p class="line" data-source-line="0">lorem</p>`

Inline elements are not supported. Only the following block level elements are currently supported:

- headings
- paragraphs
- list items
- tables

_This plugin was built using the [markdown-it demo](https://github.com/markdown-it/markdown-it/tree/master/support/demo_template) sync scrolling as a starting point._

## Install

node.js, browser:

```bash
npm install markdown-it-inject-linenumbers --save
bower install markdown-it-inject-linenumbers --save
```

## Use

```js
var md = require('markdown-it')()
            .use(require('markdown-it-inject-linenumbers'));

md.render('lorem') // => '<p class="source-line" data-source-line="0">lorem</p>'
```

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownitInjectLinenumbers`.


## License

[MIT](https://github.com/digitalmoksha/markdown-it-inject-linenumbers/blob/master/LICENSE)
