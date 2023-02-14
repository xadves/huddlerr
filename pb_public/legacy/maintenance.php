<?php

$sessions = json_decode(file_get_contents("./sessions.json"),true);

foreach ($sessions as $val){
    $session = $val["session"];

    $file = file_get_contents("./sessions/$session-settings.json");

    $json = json_decode($file, true);
    
    foreach ($json["players"] as $k=>$player) {
        if (!isset($player["id"])){
            $json["players"][$k]["id"] = uniqid();
        }
    }
    
    file_put_contents("./sessions/$session-settings.json", json_encode($json));
    
}

function createNewSession(){
    // This is going to create the approrpiate files and add the session to sessions.json
}
function populateIDs(){
    // This will do what the current file is doing, make and add ids to players
}
?>