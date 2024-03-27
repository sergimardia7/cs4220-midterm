// The File to interact with the Basketball API
import axios from 'axios';

//Base for the API Call
const base = 'http://site.api.espn.com/apis/site/v2/sports/basketball';

//Pulls information based on user request
export const buildScores = async () => {
    try {
        // Need to find a way to choose from NBA, WNBA, MNCAA, WNCAA
        //choice === true;
        const scores = `${base}/nba/scoreboard`;
        const response = await axios.get(scores);
        return response.data;

        //http://site.api.espn.com/apis/site/v2/sports/basketball/NBA/scoreboard
    } catch (error) {
        return error;
    }
};

// Searches thru NBA Stats
export const teamSearch = async (teamName) => {
    try {
        const url = `${base}/nba/teams/${teamName}`;

        const response = await axios.get(url);

        return response.data;
    } catch (error) {
        return error;
    }
};
