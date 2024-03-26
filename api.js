import axios from 'axios';

//Base for the API Call
const base = 'http://site.api.espn.com/apis/site/v2/sports/basketball';

//Pulls information based on user request
export const buildScores = async (isNBA = true) => {
    try{
        // Need to find a way to choose from NBA, WNBA, MNCAA, WNCAA
        const series = isNBA ? 'NBA' : 'WNBA';
        
        //http://site.api.espn.com/apis/site/v2/sports/basketball/NBA/scoreboard
        const scores = `${base}/${series}/scoreboard`;

        const response = await axios.get(scores);

        return response.data;

    }catch(error){
        return error;
    }
};


const fetch = require('node-fetch');

// async function searchESPNAPI(keyword) {
//     try {
//         const apiUrl = `http://site.api.espn.com/apis/site/v2/sports/basketball?q=${encodeURIComponent(keyword)}`;
//         const response = await fetch(apiUrl);

//         if (!response.ok) {
//             throw new Error('Failed to fetch data from ESPN API');
//         }

//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error occurred while fetching data:', error);
//         return null;
//     }
// }

// module.exports = searchESPNAPI;
