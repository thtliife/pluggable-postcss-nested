const transform = function(existingConfig) {
  const newConfig = existingConfig;
  let postCssOrig, insertAt;
  
  if (existingConfig.postcss) {
    postCssOrig = existingConfig.postcss();
    const postCssMod = [...postCssOrig, require('postcss-nested')];
    newConfig.postcss = postCssMod;
    
  } else {
    const idx = existingConfig.module.rules.findIndex(
      x => x.test ? x.test.toString() === '/\\.css$/' : false
    );
    const cssRules = existingConfig.module.rules[idx];
    
    const postCssIdx = cssRules.use.findIndex(
      x => x.loader ? x.loader === 'postcss-loader' : false
    );
    const postCssProp = cssRules.use[postCssIdx];
    
    postCssOrig = postCssProp.options.plugins();
    const postCssMod = [...postCssOrig, require('postcss-nested')];
    newConfig.module.rules[idx].use[postCssIdx].options.plugins = postCssMod;
  }

  
  return newConfig;
};
module.exports = {
  transform: transform,
  development: true,
  production: true
};
