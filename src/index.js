#!usr/bin/env node
const { Command } = require('commander');
const clone = require('./cloneRepository');

const program = new Command();

program.version('1.0.0', '-v', '--version')
    .command('init <name>')
    .action(async (name) => {
        await clone(name, 'wxstore_client_test');
    });
program.parse(process.argv);
