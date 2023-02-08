function saveGame(){

    setSpinner(true);


    // TODO: Make this an automatic timed function
    // TODO: Create a function for assurance this happened?

    // Create CSVs for player data

    
    var playerData = "";
    var keys = Object.keys(players);
    for (let i=0; i<keys.length; i++){
        playerData += players[keys[i]].exportPlayer();
    }

    var auditLog = "";
    var keys = Object.keys(masterAuditLog);
    for (let i=0; i<keys.length; i++){
        var t = masterAuditLog[keys[i]];
        auditLog += keys[i] + "," + t.playerid + "," + t.time + ",";
    }

    // Send the data to the server to save to a file. This is a session file.
    
    /* DELETE AFTER TESTING
    var data = new FormData();
    data.append('action', 'save');
    data.append('gameTime', gameClock.time);
    data.append('gameScore', newGameScore.home + "," + newGameScore.away);
    data.append('playerData', playerData);
    data.append('auditLog', auditLog);
    data.append('session', session.session);
    */

    data = {
        "action":"save",
        "gameTime":"gameClock.time",
        "gameScore": newGameScore.home + "," + newGameScore.away,
        "session":session.session,
        "playerData":playerData,
        "auditLog":auditLog
    }
    axios.post('/api/save', data, {
    headers: {
    'Content-Type': 'application/json'
    }})
    .then((response) => {
        // Debug a result
        if (debug == true){
            console.log(response.data);
        }
        setSpinner(false, "saveButton");
        //alert("Game Successfully Saved");
    });
}

function openSavedGame(){

        if (confirm("Are you sure you want to load from a previous game?")){
            setSpinner(true, "openGameButton");

        // Open the session data
        axios.get(session.gamedata, data, {
        headers: {
            'Content-Type': 'text/json'
        }})
        .then((response) => {

            // Clear the audit log to pull the saved one
            masterAuditLog = [];
            document.getElementById("gameAuditLog").innerHTML = "";

            // Parse the CSV for score, uneeded from rebuild
            var score = response.data.gameScore.split(",");
            newGameScore.home = Number(score[0]);
            newGameScore.away = Number(score[1]);
            updateGameScore(); // This needs to go into a different place, right?

            // Parse the game time
            gameClock.time = Number(response.data.gameTime);
            // This starts the clock automatically, preferablly save this state
            setGameClockState(false);
            updateGameTime();


            // Parse the CSV and set the player data
            var pd = response.data.auditLog;
            pd = pd.split(",");

            var totalCount = 0;
            var count = 0;
            var playerid = "";
            var time = 0;
            var eid = 0;

            for (var i=0; i < pd.length; i++){
                if (count == 0){
                    eid = pd[i];
                }
                if (count == 1){
                    playerid = pd[i];
                }
                if (count == 2) {

                    time = Number(pd[i]);
                    masterAuditLog[eid] = {"playerid": playerid, "time":time};

                    count = -1;
                }
                count++;
                totalCount++;
            }

            var pd = response.data.playerData;
            pd = pd.split(",");

            var count = 0;
            var tempPlayer= {"id":"", "time":0, "goals":0};
            var eid = 0;

            for (var i=0; i < pd.length; i++){
                if (count == 0){
                    tempPlayer.id = pd[i];
                }
                if (count == 1) {
                    tempPlayer.time = Number(pd[i]);                    
                }
                if (count == 2){
                    // Goals are not used anymore
                    tempPlayer.goals = pd[i];
                    players[tempPlayer.id].updatePlayer(tempPlayer);
                    count = -1;
                }
                count++;
            }

            rebuildGameFromAuditLog();
            setSpinner(false, "openGameButton");
        })
    }
}

function finishGame(){
    if (confirm("Are you sure you want to finish the game?") == true){
        // Send Game End Function to API, which saves it into the /games/. dir
        /*var data = new FormData();
        data.append('action', 'finish');
        data.append('session', session.session);
        */
        data = {
            "session":session.session
        }
        axios.post('/api/finish', data, {
        headers: {
        'Content-Type': 'application/json'
        }})
        .then((response) => {
            if (debug == true){
                console.log(response.data);
            }
            setGameClockState(false);
        });
    }
}


function newGame(){

    if (confirm("Are you sure you want to create a new game?") == true){

        // Set Master Variables
        // TODO: Add this to the actual master variable
        gameClock.time = 0;
        
        // TODO: Move this to a Start/Stop Button
        setGameClockState(false);
        updateGameTime();

        // Set Scores to 0
        newGameScore.home = 0;
        newGameScore.away = 0;
        updateGameScore();

        var keys = Object.keys(masterAuditLog);
        for (let i=0; i<keys.length; i++){
            delete masterAuditLog[keys[i]];
        }

        rebuildGameFromAuditLog();



        // Reset Player Data
        var keys = Object.keys(players);
        for (let i=0; i<keys.length; i++){
            players[keys[i]].resetPlayer();
        }

        // Send the save function to the game
        var data = new FormData();
        data.append('action', 'new');
        axios.post('./save.php', data, {
        headers: {
        'Content-Type': 'application/json'
        }})
        .then((response) => {
            // Debug a response
            if (debug == true){
                console.log(response.data);
            }           

        });
    }
}