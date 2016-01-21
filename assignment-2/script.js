var enter = confirm("You're at the gates of hell. Press OK to open and go in.");

if (enter) {
	//go into garage
	var gates = prompt("You see 3 demons named Zufolous, Jecarza and Becrolock. Pick one.")
	if (gates == 'Zufolous') {
    	console.log("Your dead! THE END");
	} else if (gates == 'Jecarza') {
    	console.log("You wake up! THE END");
	} else {
    	console.log("Into heaven you go!");
   	 
    	var centuries = "You have to go to purgatory. How many centuries are you going to be there?";
    	var away = prompt(centuries);
    	away = Number(away);
   	 
    	if (away <= 2) {
        	console.log("You wake up and your alive!");
    	} else {
        	console.log("You burn in hell for eternity.");
    	}
    	console.log("THE END.");
   	 
	}
} else {
	//didn't go in
	console.log("And that's life. THE END.")
}