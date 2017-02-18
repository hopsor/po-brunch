'use strict';

const po2json = require('po2json');

class PoBrunchPlugin {
  constructor(config){
    this.config = config;
    return;
  }

  compile(file){
    const parsedFile = po2json.parseFileSync(file.path);
    return Promise.resolve(parsedFile);
  }
}

PoBrunchPlugin.prototype.brunchPlugin = true;
PoBrunchPlugin.prototype.extension = 'po';

module.exports = PoBrunchPlugin;
