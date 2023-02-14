class Player {

    constructor(obj, element){
        this.name = obj.name;
        this.id = obj.id;
        
        var items = createPlayerRow(this, element);
        this.display = items[1];
        this.goalDisplay = items[0];
        this.time = 0;
        this.goals = 0;

        // Fill out the zero data
        this.updateDisplays();
    }

    changeTimer(){
        // TODO Change the Action Button Title
        if (typeof this.timer == 'undefined'){
            this.timer = setInterval(() => timerFun(this), 1000);
        } else {
            this.timer = clearInterval(this.timer);
        }
    }

    checkInStatus(){
        // TODO Change the Action Button Title
        if (typeof this.timer == 'undefined'){
            return false;
        } else {
            return true;
        }
    }

    updatePlayer(obj){
        this.time = obj.time;
        this.goals = obj.goals;

        this.updateDisplays();
    }

    updateDisplays(){
        this.display.innerHTML = formatTimer(this.time)
        this.goalDisplay.innerHTML = this.goals;
    }
    
    exportPlayer(){
        return this.id + "," + this.time + "," + this.goals + ",";
    }

    resetPlayer(){
        // Add more to this, like stop timers maybe?
        this.updatePlayer({"time":0,"goals":0});
    }

    addGoal(){
        this.goals += 1;
        newGameScore.home += 1;
        createAuditEntry(this);
        this.goalDisplay.innerHTML = this.goals;
        updateGameScore();
    }

    removeGoal(){
        this.goals -= 1;
        newGameScore.home -= 1;
        this.goalDisplay.innerHTML = this.goals;
        updateGameScore();
    }
    
}