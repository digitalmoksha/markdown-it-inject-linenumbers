'use strict';


module.exports = function inject_linenumbers_plugin(md) {
  //
  // Inject line numbers for sync scroll. Notes:
  //
  // - We track only headings and paragraphs, at any level.
  // - TODO Footnotes content causes jumps. Level limit filters it automatically.
  function injectLineNumbers(tokens, idx, options, env, slf) {
    var line;
    // if (tokens[idx].map && tokens[idx].level === 0) {
    if (tokens[idx].map) {
      line = tokens[idx].map[0];
      tokens[idx].attrJoin('class', 'source-line');
      tokens[idx].attrSet('data-source-line', String(line));
    }
    return slf.renderToken(tokens, idx, options, env, slf);
  }

  md.renderer.rules.paragraph_open = md.renderer.rules.heading_open = injectLineNumbers;
};
