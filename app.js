// the file for our application logic (aka logic to play 5 card poker)
import { checkbox } from '@inquirer/prompts';
import * as api from './api.js';
import * as db from './db.js';

// const test = await api.printScores('20240123','lal');
// //const test2 = await api.printTeams();
// //const test3 = await api.getScores();

const userChoices = [{name:'See Roster', value: 'Roster'}, {name: 'See Win Rate', value: 'winRate'}, {name: 'See Lose Rate', value: 'loseRate'}, {name: 'See Latest Scores', value: 'scores'}];

const _choicePrompt = async () => {
    return await checkbox({
        message: 'Please Select what you wish to see: ',
        choices: userChoices
    });
};

const printIt = await _choicePrompt();

console.log(printIt);

// Danny's Score Gathering Code
export async function getScores(dates) {
    try {
        const scoreboardData = await api.buildScoreboard(dates);
        //'competitors' properties
        const events = scoreboardData.events;
        events.forEach(event => {
            const competitions = event.competitions;
            competitions.forEach(competition => {
                const competitors = competition.competitors;
                competitors.forEach(competitor => {
                    const team = competitor.team.displayName;
                    const score = competitor.score;
                    console.log(`${team} : ${score}`);
                });
                // Only putting the first team's data on the search history file.
                // Need to add only the team : score data for the searched date. 
                db.create('search_history', competitors);
            });
        });
    } catch (error) {
        console.error('Error fetching scores:', error);
    }
}


export const getTeamStats = async(team) => {
    try{

        const teamStats = await api.teamStats(team);
        
        const teamRecord = teamStats.sports[0].leagues[0].teams[0].record[0].items[0].stats[0];

        return teamRecord;
        //console.log(teamRecord);

    }catch(error){
        return error;
    }
};

export const displaySearchHistory = async () => {
    try {
        const history = await api.getSearchHistory();
        if (history && history.length > 0) {
            console.log('Search History:');
            history.forEach((item, index) => {
                console.log(`${index + 1}. Keyword: ${item.keyword}, Date: ${item.date}`);
            });
        } else {
            console.log('No search history available.');
        }
    } catch (error) {
        console.error('Error displaying search history:', error.message);
    }
};

export const previous= async () => {
    // get all previously game scores based on the dates  in the search history
    const getScores = await db.getScores('searched_dates');

    //pop last game
    const previousSarch = getScores.pop();
};

// Call the function to display search history
//displaySearchHistory();

//console.log(getScores('20240125'));
//console.log(await api.teamStats('lal')/*.records.items[0]*/);
//console.log(getTeamStats('lal'));

export const printOut = async (argv) => {
    getScores(argv);
};
