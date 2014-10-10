// Created by leiko on 10/10/14 11:39
var os = require('os');
var fs = require('fs');
var path = require('path');
var kevoree = require('kevoree-library').org.kevoree;
var factory = new kevoree.factory.DefaultKevoreeFactory();
var loader = factory.createJSONLoader();

/**
 *
 * @param tag
 * @param nameA
 * @param nameB
 * @param model
 */
function modelWriter(tag, nameA, nameB, model) {
    var jsonModel = factory.createJSONSerializer().serialize(model);
    jsonModel = JSON.stringify(JSON.parse(jsonModel), null, 4);
    var outputModelPath = path.resolve(os.tmpdir(), tag+'_'+nameA+'-'+nameB+'.json');

    fs.writeFileSync(outputModelPath, jsonModel);
    return outputModelPath;
}

/**
 *
 * @param modelPath
 */
function modelReader(modelPath) {
    var jsonModel = fs.readFileSync(modelPath, 'utf8');
    return loader.loadModelFromString(jsonModel).get(0);
}

exports.modelReader = modelReader;
exports.modelWriter = modelWriter;