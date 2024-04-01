import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { getScores, printOut } from './app.js';
import { getSearchHistory } from './api.js';

// had added this in order to display a message on command prompt but I don't like how 
// it looks. 
// Didn't update node_modules to run this module
import input from '@inquirer/input';
//const answer  = await input({message: 'Enter date in yyyyMMdd format: '});

// Define command-line options
yargs(hideBin(process.argv))
    .command({
        command: 'process-date',
        describe: 'Process a date in format yyyyMMdd',
        builder: {
            date: {
                alias: 'd',
                describe: 'Date in format yyyyMMdd',
                type: 'string',
                demandOption: true // Make the option required
            }
        },
        handler: (argv) => {
            // Extract the date from command-line arguments
            
            const { date } = argv;

            // Pass the date to the app module
            printOut(date);
        }
    })
   
    .command(
        'history', 
        'View search history',
        {},
        async () => {
            try {
                const searchHistory = await getSearchHistory();
                if (searchHistory && searchHistory.length > 0) {
                    console.log('Search History:');
                    searchHistory.forEach((item, index) => {
                        console.log(`${index + 1}. Keyword: ${item.keyword}, Date: ${item.date}`);
                    });
                } else {
                    console.log('No search history available.');
                }
            } catch (error) {
                console.error('Error getting search history:', error.message);
            }
        })
    .help()
    .argv; 
