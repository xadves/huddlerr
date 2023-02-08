<?php

$gameFile = "-gamedata.json";
$saveGamesPrefix = "./games/";

function handleError($message="None"){
    die();
}

function gamefile($ses){
    return "./sessions/$ses-gamedata.json";
}


if ($_SERVER["REQUEST_METHOD"] == "POST"){

    // do things

    if (isset($_POST["action"])){
        $action = $_POST["action"];
    } else {
        handleError("No Action Data");
    }

    if ($action == "save"){
        $session = $_POST["session"];
        $file = file_get_contents(gamefile($session));
        // Get post data to put into file
        /*
        Game Time
        Score (rebuildable?)
        Player Times
        Player Goals
        */
        $json = json_decode($file, true);

        $data = $_POST["playerData"]; // Convert from CSV to JSON

        //echo $data;

        //var_dump($_POST);

        $json["playerData"] = $data;

        // TODO: Validate the inputs
        $json["gameTime"] = $_POST["gameTime"];
        $json["gameScore"] = $_POST["gameScore"];
        
        $json["auditLog"] = $_POST["auditLog"];
        $json["session"] = $session;

        // adjust properties

        file_put_contents(gamefile($session), json_encode($json));

        echo file_get_contents(gamefile($session), true);
    }

    if ($action == "new"){
        $date = new DateTime();
        $date = $date->format("Y-m-d");
        $game = array(
            "gameDate"=> $date, // This needs to be fixed. This is the only place it exists.
            "gameTime"=> "0",
            "gameScore" => "0,0",
            "playerData"=> array()
        );

        file_put_contents($gameFile, json_encode($game));

        echo file_get_contents($gameFile, true);
    }

    if ($action == "finish"){

        /* 
            This is a hacky fix since gameDate is not persistent through the system yet. just add the date of when the finish button is hit.
            $data["gameDate"]
        */

        $date = new DateTime();
        $date = $date->format("Y-m-d");

        $session = $_POST["session"];
        $data = json_decode(file_get_contents(gamefile($session)), true);
        file_put_contents($saveGamesPrefix . $date . "_$session-" . uniqid() . ".json", json_encode($data));
    }

}

?>