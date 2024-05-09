// the file for our application logic (aka logic to play 5 card poker)
import { select } from '@inquirer/prompts';
import * as api from './api.js';
//import * as db from './db.js';


export const brewSearch = async (args) => {
    try{
        const breweries = await api.searchByKeyword(args.brew);

        console.log(breweries);

    }catch(err){
        console.error(err);
    }

};

export const brewIDSearch = async (args) => {
    try{
        const brewery = await api.getByIdentifier(args.brewId);

        console.log(brewery);

    }catch(err){
        console.error(err);
    }
};

export const history = async () => {
    try{
        
    }catch(err){
        console.log(err);
    }
};