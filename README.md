# cs4220-midterm
Create a Command Line Interface to demonstrate your understanding of JavaScript, Node.js, CLIs and APIs.
 

The Command Line Application should interact with your Teams selected API.  The API selected should support searching by keyword and getting detailed data for single specified item.

 

The selected API should provide an endpoint which allows for searching by accepting a keyword/search term and returns a list of results associated to that keyword/search term.
This endpoint most likely provides a query parameter for searching
The selected API should provide an endpoint which allows for getting detailed data on a single item by some unique identifier.
This endpoint most likely has a path parameter which requires a unique id
 

Total points for the Midterm Project is 100, with 45% of the points allocated for the team's overall presentation performance and the remaining 45% dedicated to individual performance. This distribution emphasizes both collaborative teamwork and individual contributions in the evaluation process.

Project Requirements
 

package.json

Contains necessary metadata for the project.
Should include fields like name, version, author, contributors, description, dependencies, etc.
 

api.js

Exports a function for searching the selected API by keyword and returns the response
Exports a function for getting details from the selected API by a unique identifier and returns the response
 

cli.js

Includes a help menu by typing: node cli.js --help
Includes a search command to search based on your selected API using a keyword
Command Structure: node cli.js search <keyword>
Options: -c, --cache: Return cached results when available (default: false)

Includes a history command to get history on previous searches.
Command Structure: node cli.js history
No additional arguments or options
 

app.js

Exports function to handle the logic for when a user searches by keyword.
Searches the selected API by keyword
Saves data in the mock database
Reference search_history.json
Prompts the user to select an item from the search results.
Retrieves detailed data for the selected item based on the cache option
IF cache option false (default)
Gets the selected item by unique identifier from the your API
Saves an entry in search_cache.json
Reference: search_cache.json 
IF cache option true
Attempts to find the selected item in search_cache.json and return the item
If not found in the search_cache.json - gets the selected item by unique identifier from the API
Saves an entry in search_cache.json
Reference: search_cache.json
Displays the detailed data to the user in a user-friendly format.
NO Array/Object or JSON print outs.
   

Exports a function to handle logic for displaying the search history
Retrieves the search history from the mock database
Displays the history to the user in a user-friendly format
Reference search_history.json
 

db.js

The exact db.js file from cards-cli-app-completed (Week 09)
 

mock_database/search_history.json

Inside your mock_database folder create the search_history.json
This file should store previous search history
Saved data should be in the form of an array of objects
Each entry is an object that has the keys search whose value is the keyword and resultCount whose value is a count of results from the API
 

mock_database/search_cache.json

Inside your mock_database folder create the search_cache.json
This file should store cache version of the the item by unique identifier from the API
Saved data should be in the form of an array of objects
Each new entry represents the response body from the API for getting the selected item by unique identifier from the API
 

Grading Criteria
 
Midterm Project Presentation
As a team create a video presentation to present on your application in 20 minutes or less
As a team collaborate to create a coordinated presentation that is organized and focuses on the Midterm Project code (slides not required).
As a team run a demo of your Midterm Project
Each team member introduces themselves and presents on a specific portion of the code written, covering cli.js app.js and api.js
Each team member discuss code and explanation code from one of these files
Explain the code flow, how the code works and how it relates to achieving the application's functionality
Focus on presenting code aspects not extensively covered in class lectures or materials
Ensure your code explanation is clear and concise
 

Midterm Project Code

Code executes without errors during grading.
Code includes all functionalities detailed in the provided requirements.
Code follows proper ES6 syntax, utilizing let and const appropriately.
Code is clean and well-formatted, logical variable names, consistency in asynchronous handling.
Avoids hardcoding wherever possible, except when necessary or mandated by the API.
 

Midterm Submission

Each team should upload only one submission.  As a team, designate one individual to upload the video and code for the entire team. 
ZIP File
FOLDER for their App which includes - ONLY the files/folders listed under project requirements
Please make sure you are just right-click compressing files to standard zip. 
Do NOT use compression software as it is not compatible with all machines.
Video Presentation (max time 20 minutes) using Screen Sharing
Upload a either the mp4 video or a ,txt file with a link.
The .txt file should only contain Zoom Cloud or Microsoft Team Recordings no other third party URLs will be accepted.
Presentations can be easily created by using Zoom and recording a meeting to your local machine or to the cloud.
 

Each member of the team MUST take the Team Evaluation Quiz
This quiz is 10% of the Midterm Project Grade.
 Taking the quiz is mandatory, and failing to do so will result in a 0 for this portion. However, simply completing the quiz will automatically award the full 10% of the grade.
This quiz is a feedback on your team members performance and contribution.