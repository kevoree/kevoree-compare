var chalk = require('chalk');
var path = require('path');
var kevoree = require('kevoree-library').org.kevoree;
var factory = new kevoree.factory.DefaultKevoreeFactory();
var compare = factory.createModelCompare();
var Util = require('../lib/util');

module.exports = function (program) {
    program
        .command('inter <path/to/modelA.json> <path/to/modelB.json>')
        .description('Output a model which is the intersection between modelA and B')
        .action(function (pathA, pathB) {
            var modelA = Util.modelReader(pathA),
                modelB = Util.modelReader(pathB),
                modelC = factory.createContainerRoot();

            factory.root(modelA);
            factory.root(modelB);
            factory.root(modelC);

            compare.inter(modelA, modelB).applyOn(modelC);

            var outputPath = Util.modelWriter('inter', path.basename(pathA, '.json'), path.basename(pathB, '.json'), modelC);
            console.log(chalk.green('inter succeed')+' '+outputPath);
        });
};