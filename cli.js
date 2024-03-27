import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/yargs'
import { buildScores, teamSearch } from './api';

yargs(hideBin(process.argv))
    .usage('$0: Usage <commands> [options]')
    .command(
        // <> indicates the commands required
        // Search Lakers Scores
        'Search <team> Scores ',
        'Select Stats or Scores',
        
        (yargs) => {
            yargs
                .positional(
                    'item',
                    {
                        describe: 'Choosing between Stats and Game Scores',
                        type: 'string',
                        choices: ['scores', 'teams']
                    }
                )
                .options('cache', {
                    alias: 'c',
                    describe: 'Return cached results when available',
                    default: false,
                    type: 'boolean'
                });
        },
        
        (argv) => {
            //const{item} = argv;

            if (item === 'Stats'){
                //Handle Stats Display
                console.log("Displaying the Teams Stats");
                teamSearch(argv);
            } else if (item === 'scores'){
                //Dispalys Team Scores
                console.log("Displaying the Teams Scores")
                buildScores(argv);
            }else {
                console.error("Invalid Selection. Please Select between Stats or Scores.")
            }
        }

    )

    .command(
        'history',
        'View search history',
        () => {},
       async () => {
            try{
                await handleHistory();
            } catch (error) {
                console.error('An error occured while retrieving search history: ', error);
            }
        }
    )
    .help().argv;