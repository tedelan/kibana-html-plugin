'use strict';

module.exports = function (kibana) {

  return new kibana.Plugin({

    uiExports: {
      visTypes: ['plugins/raystorm-kibana-html/raystormHtml']
    }

  });
};
