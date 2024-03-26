import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/yargs'
import { buildInfo } from './api';

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
                buildInfo(args);
            } else if(args.divisions === 'WNBA'){
                buildInfo(args);
            }
        }

    )
    .help().argv;