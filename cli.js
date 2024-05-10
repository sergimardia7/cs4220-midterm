// the file to build the command line interface
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';

import { brewSearch, history } from './app.js';

yargs(hideBin(process.argv))
    // $0 expands the file name
    // <> indicate that the command is manadatory
    // [] indicate that options are optional
    .usage('$0: Usage <command> [options]')
    .command(
        // command name with argument
        'search <brew>',
        // description
        'Search for a Brewery based on Keywords (Please use quotes or aposterphes for exact Search)',
        // builder function to add a positional argument and option
        (yargs) => {
            yargs
                .positional('brew', {
                    describe: 'Keyword for Breweries',
                    type: 'string'
                })
                .options('cache', {
                    alias: '--c',
                    type: 'boolean',
                });
        },
        // handler function
        (args) => {
            brewSearch(args);
        }
    )/*.command(
        // command name with argument
        'search id <brewId>',
        // description
        'Search for a Brewery based on ID',
        // builder function to add a positional argument and option
        (yargs) => {
            yargs
                .positional('brewId', {
                    describe: 'Breweries ID',
                    type: 'string'
                })
                .options('cache', {
                    alias: 'c',
                    type: 'boolean',
                });
        },
        // handler function
        (args) => {
            brewIDSearch(args);
        }
    )*/    .command(
        'history',
        'View History Search',
        () => {},
        () => {
            history();
        })
    .help().argv;
