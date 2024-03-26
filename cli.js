import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/yargs'
import { buildScores } from './api';

yargs(hideBin(process.argv))
    .usage('$0: Usage <commands> [options]')
    .command(
        'Choose Division: <divisions>',
        'Choosing different divisions in Basketball',
        (yargs) => {
            yargs
                .positional(
                    'divisions',
                    {
                        describe: 'name of the divions',
                        type: 'string',
                        choices: ['NBA', 'WNBA']
                    }
                )
                .options()
        },
        (args) => {
            if(args.divisions === 'NBA'){
                buildScores(args);
            } else if(args.divisions === 'WNBA'){
                buildScores(args);
            }
        }

    )
    .help().argv;