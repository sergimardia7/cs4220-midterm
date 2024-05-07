import axios from 'axios';
import { find } from './db.js';

const base = 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba';

// builds scoreboard by dates
export const buildScoreboard = async(date) => {
    try{
        
        const statsURL = `${base}/scoreboard?dates=${date}`;

        const response = await axios.get(statsURL);

        return response.data;
    }catch(error){
        return error;
    }
};

//Supposed to Return Team Stats by team
export const teamStats = async(team) => {
    try{
        const teamStatics = `${base}/teams/${team}`;

        const response = await axios.get(teamStatics);

        const wins = response.data.team.record.items[0].stats[18];
        const loss = response.data.team.record.items[0].stats[9];

        return console.log(wins);
    }catch(error){
        return error;
    }
};

//Mason's getSearchHistory
export const getSearchHistory = async () => {
    try {
        return await find('search_history');
    } catch (error) {
        throw new Error(`Error getting search history: ${error.message}`);
    }
};


//const team = 'LAL';
//console.log(teamStats(team));

