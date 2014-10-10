var chalk = require('chalk');
var path = require('path');
var kevoree = require('kevoree-library').org.kevoree;
var factory = new kevoree.factory.DefaultKevoreeFactory();
var compare = factory.createModelCompare();
var Util = require('../lib/util');

module.exports = function (program) {
    program
        .command('merge <path/to/modelA.json> <path/to/modelB.json>')
        .description('Output a model which is the merge of modelA and B')
        .action(function (pathA, pathB) {
            var modelA = Util.modelReader(pathA),
                modelB = Util.modelReader(pathB);

            factory.root(modelA);
            factory.root(modelB);

            compare.merge(modelA, modelB).applyOn(modelA);

            var outputPath = Util.modelWriter('merge', path.basename(pathA, '.json'), path.basename(pathB, '.json'), modelA);
            console.log(chalk.green('merge succeed')+' '+outputPath);
        });
};