function startSpinner(){
    console.log("[*] Start Spinner is still being called.");
    setSpinner(true);
}

function stopSpinner(){
    console.log("[*] Stop Spinner is still being called.");
   setSpinner(false);
}

function setSpinner(state, eid="saveButton"){


    var makeSpin = document.getElementById(eid);
    if (state){
        makeSpin.classList.add("is-loading");
    } else {
        makeSpin.classList.remove("is-loading");
    }


    /*

    var spinEle = document.getElementById("spinner");
    var spinState = false;
    if (spinEle != null){
        spinState = true;
    }

    if ((state) && (!spinState)){
        var spinner = document.createElement("div");
        spinner.id = "spinner";
        spinner.className = "spinner"
        document.getElementById("control-panel").appendChild(spinner);
    }

    if ((!state) && (spinState)){
        spinEle.remove();
    }
    */
}