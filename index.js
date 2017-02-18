'use strict';

const po2json = require('po2json');

class PoBrunchPlugin {
  constructor(config){
    this.config = config;
    return;
  }

  compile(file){
    return new Promise((resolve, reject) => {
      const parsedFile = po2json.parseFileSync(file.path);
      resolve({data: "module.exports = " + JSON.stringify(parsedFile) + ";"});
    });
  }
}

PoBrunchPlugin.prototype.brunchPlugin = true;
PoBrunchPlugin.prototype.type = 'javascript';
PoBrunchPlugin.prototype.extension = 'po';

module.exports = PoBrunchPlugin;
