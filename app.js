// the file for our application logic (aka logic to play 5 card poker)
import { select } from '@inquirer/prompts';
import * as api from './api.js';
import * as db from './db.js';

const _printConsole = async (brewsId) => {
    const brewery = await api.getByIdentifier(brewsId);
    
    console.log(`Type: ${brewery.brewery_type}`);
    console.log(`Address: ${brewery.address_1}, ${brewery.state_province}, ${brewery.country} ${brewery.postal_code}`);
    console.log(`Website: ${brewery.website_url}`);
    console.log(`Phone: ${brewery.phone}`);

    //console.log(brewery);
};

const _printHistory = async (brewsId) => {

    const brewery = await api.getByIdentifier(brewsId);
    
    console.log(`Name: ${brewery.name}`);
    console.log(`Type: ${brewery.brewery_type}`);
    console.log(`Address: ${brewery.address_1}, ${brewery.state_province}, ${brewery.country} ${brewery.postal_code}`);
    console.log(`Website: ${brewery.website_url}`);
    console.log(`Phone: ${brewery.phone}`);
    console.log('------------------------------------');

};

const _brewList = async (brews) => {
    const displayBrews = brews.map((brew) => {
        return {name: `${brew.name}`, value: brew.id};
    });

    return await select({
        message: 'Select Brewery of Interest for more Information',
        choices: displayBrews,
    });
};




export const brewSearch = async (args) => {
    try{
        const breweries = await api.searchByKeyword(args.brew);
        const userChoice = await _brewList(breweries);

        _printConsole(userChoice);

        //console.log(userChoice);

        const entry = {
            id: userChoice
        };

        await db.create('search_history', userChoice);

    }catch(err){
        console.error(err);
    }

};

// export const brewIDSearch = async (args) => {
//     try{
//         const brewery = await api.getByIdentifier(args.brewId);

//         console.log(brewery);

//     }catch(err){
//         console.error(err);
//     }
// };

export const history = async () => {
    try{
        const historySearch = await db.find('search_history');
        let previousSearch;
        //const brewery = await api.getByIdentifier(previousSearch);
        historySearch.forEach((search) => {
            previousSearch = historySearch.pop();
            _printHistory(previousSearch);
        });

        // _printConsole(previousSearch);

    }catch(err){
        console.log(err);
    }
};