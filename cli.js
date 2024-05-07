import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getScores, printOut, getTeamStats } from './app.js';
import { teamStats } from './api.js';

const teams = ['ATL', 'BOS', 'BKN', 'CHA', 'CHI', 'CLE', 'DAL', 'DEN', 'DET', 'GS', 'HOU', 'IND', 'LAC', 'LAL', 'MEM', 'MIA', 'MIL', 'MIN', 'NO', 'NY', 'OKC', 'ORL', 'PHI', 'PHX', 'POR', 'SAC', 'SA', 'TOR', 'UTAH', 'WSH'];

// had added this in order to display a message on command prompt but I don't like how 
// it looks. 
// Didn't update node_modules to run this module
//import input from '@inquirer/input';

// $0 expands the file name
// <> indicate that the command is manadatory
// [] indicate that options are optional

// Define Command Line Options
yargs(hideBin(process.argv))
    .command(
        // command name with argument
        'search <team>',
        // description
        'Searches for the information of a team',
        // builder function to add  a positional argument and option
        (yargs) => {
            yargs
                .positional('team', {
                    describe: 'team user wishes to see',
                    type: 'string',
                    choices: teams
                });
        },
        // handler function
        (args) => {
            if (teams.includes(args.team)){
                //getTeamStats(args.team);
                getTeamStats(args.team);
            }
        }

    )
    .command(
        //Command name with argument
        'history search',
        //description
        'Search for a Specific History Point'
        // builder function
    )
    .command(
        // Command name with Argument
        '-c',
        // Description
        'Return Cache Results when Available'
    )
    .help()
    .argv;



// Define command-line options
// yargs(hideBin(process.argv))
//     .command({
//         command: 'process-date',
//         describe: 'Process a date in format yyyyMMdd',
//         builder: {
//             date: {
//                 alias: 'd',
//                 describe: 'Date in format yyyyMMdd',
//                 type: 'string',
//                 demandOption: true // Make the option required
//             }
//         },
//         handler: (argv) => {
//             // Extract the date from command-line arguments
            
//             const { date } = argv;

//             // Pass the date to the app module
//             printOut(date);
//         }
//     })
   
//     .command(
//         'history', 
//         'View search history',
//         {},
//         async () => {
//             try {
//                 const searchHistory = await getSearchHistory();
//                 if (searchHistory && searchHistory.length > 0) {
//                     console.log('Search History:');
//                     searchHistory.forEach((item, index) => {
//                         console.log(`${index + 1}. Keyword: ${item.keyword}, Date: ${item.date}`);
//                     });
//                 } else {
//                     console.log('No search history available.');
//                 }
//             } catch (error) {
//                 console.error('Error getting search history:', error.message);
//             }
//         })
//     .help()
//     .argv; 
