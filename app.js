import * as api from './api.js';

const test = await api.printScores('20240123','lal');
//const test2 = await api.printTeams();
//const test3 = await api.getScores();

// Danny's Score Gathering Code
async function getScores(dates) {
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
            });
        });
    } catch (error) {
        console.error('Error fetching scores:', error);
    }
}


const getTeamStats = async(team) => {
    try{

        const teamStats = await api.teamStats(team);
        
        const teamRecord = teamStats.sports[0].leagues[0].teams[0].record[0].items[0].stats[0];

        //console.log(teamRecord);


    }catch(error){
        return error;
    }
};

//console.log(getScores('20240125'));
console.log(await api.teamStats('lal')/*.records.items[0]*/);
//console.log(getTeamStats('lal'));