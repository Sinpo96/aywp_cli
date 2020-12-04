#!usr/bin/env node
const { Command } = require('commander');
const clone = require('./cloneRepository');

const program = new Command();

// 当前版本号
program.version('0.0.1', '-v', '--version');

program.parse(process.argv);
