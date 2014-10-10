#! /usr/bin/env node

// Created by leiko on 10/10/14 11:28
var program = require('commander');
var commands = require('../commands');

program
    .version(require('../package.json').version)
    .usage('<cmd> <path/to/modelA.json> <path/to/modelB.json> [options]');

commands.merge(program);
commands.inter(program);
commands.diff(program);

program.parse(process.argv);

if (program.args.length === 0) {
    program.help();
}