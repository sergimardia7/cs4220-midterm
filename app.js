import * as api from './api.js';
import { checkbox } from '@inquirer/checkbox';
import * as db from './db.js';

export const handleSearch = async (teamName, useCache) => {
    try {
        const searchResult = await searchNBATeam(teamName);
        await create('history', {search: teamName, result: searchResult.length});
        const selectedItem = searchResult.find(team => team.displayName.toLowerCase() === teamName.toLowerCase());
        if (!selectedItem) {
            throw new Error(`Team '${teamName}' not found.`);
        }
        let data;
        if (useCache) {
            const cachedData = await find('search_cache', selectedItem.id);
            if (cachedData){
                data = cachedData;
            } else{
                data = await buildScores();
                await create('search_cache', data);
            }
        } else {
            data = await buildScores();
            await create('search_cache', data);
        }
        console.log('Information on selected team: ');
        console.log(data);
    } catch (error) {
        console.error(error.message);
    }
};

const _printConsole = () => {

};

export const buildStats = async (args) => {
    try{
        const stats = await api.teamSearch(args);

        console.log(stats);
        return stats;
        
    }catch(error){
        return error;
    }
};

export const buildScore = async (args) => {
    try{

        const scores = await api.buildScores();
        console.log(scores);
        return scores; 
        
    }catch(error){
        return error;
    }
};

export const handleHistory = async () => {
    try {
        const history = await find('history');
        console.log('Search History:');
        console.log(history);
    } catch (error) {
        console.error(error.message);
        return error; 
    }
};