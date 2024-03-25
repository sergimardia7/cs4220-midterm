import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/yargs'

yargs(hideBin(process.argv))
    .usage('')
    .command()
    .help().argv;