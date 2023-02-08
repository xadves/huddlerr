function uuidv3() {
    return ([1e7]+1e3).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

function formatTimer(time){
    // Convert Seconds to 00:00 format
    temp = "";

    // Create Minutes
    minutes = Math.floor(time/60);
    if (minutes < 10) {
        temp = "0" + String(minutes);
    } else {
        temp += String(minutes);
    }
    temp += ":";

    // Create Seconds
    seconds = time%60;
    if (seconds < 10){
        temp += "0" + seconds;
    } else {
        temp += seconds;
    }

    // Return the String
    return temp;
}

function getSession(){

    // We need to do input validation on this

    var url = new URL(window.location.href);
    var c = url.searchParams.get("session");
    //console.log(c);

    if (c == null){
        c = "dragons";
    }

    return c;

}