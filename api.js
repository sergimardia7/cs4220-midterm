import axios from 'axios';

const base = 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba';

export const buildScoreboard = async(date) => {
    try{
        
        const statsURL = `${base}/scoreboard?dates=${date}`;

        const response = await axios.get(statsURL);

        return response.data;
    }catch(error){
        return error;
    }
};

export const teamStats = async(team) => {
    try{
        const teamStatics = `${base}/teams/${team}`;

        const response = await axios.get(teamStatics);

        const wins = response.data.team.record.items[0].stats[18];
        const loss = response.data.team.record.items[0].stats[9];

        return wins;
    }catch(error){
        return error;
    }
};

// export async function getScores() {
//     try {
//         const scoreboardData = await buildScoreboard();
//         //'competitors' properties
//         const events = scoreboardData.events;
//         events.forEach(event => {
//             const competitions = event.competitions;
//             competitions.forEach(competition => {
//                 const competitors = competition.competitors;
//                 competitors.forEach(competitor => {
//                     const team = competitor.team.displayName;
//                     const score = competitor.score;
//                     console.log(`${team} : ${score}`);
//                 });
//             });
//         });
//     } catch (error) {
//         console.error('Error fetching scores:', error);
//     }
// }


// export const buildStats = async(date, team) => {
//     try{
        
//         const statsURL = `${base}/teams/${team}?nextEvent=401585683`;

//         let response = await axios.get(statsURL);

//         return response.data;
//     }catch(error){
//         return error;
//     }
// };

//Yusef Code
export const printScores = async (dates, shorthand) => {
    const { data } = await axios({
        method: 'get',
        url: `${base}/scoreboard`,
        params: {
            dates
        },
    });

    for (const event in data.events) {
        if (data.events[event].shortName.includes(shorthand)) {
            console.log(data.events[event].competitions[0]);
        }
    }
};

export const printTeams = async () => {
    const { data } = await axios({
        method: 'get',
        url: 'http://site.api.espn.com/apis/site/v2/sports/basketball/nba/teams',
    });
    const teams = data.sports[0].leagues[0].teams;
    const abbreviations = {};

    for (const t in teams) {
        abbreviations[teams[t].team.displayName.toLowerCase()] =
            teams[t].team.abbreviation;
    }

    console.log(abbreviations);
};




