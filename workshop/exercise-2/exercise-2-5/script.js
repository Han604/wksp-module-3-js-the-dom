// Preset values
const FROGS = 3;
let ranking = [];

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

// 2. Create li    

    // 3. Create span and add it to the li

    // 4. Assign an id to each lane
// NOTE, THIS IS JUST A COPY OF 4, I FINISHED THE ASSIGNMENT ON 4

    for(i = 1; i <= FROGS; i ++) { // for loop to create frogs to be pushed to an array
        const createLane = document.createElement("li"); // create li
        const createSpan = document.createElement("span"); // create span
        const appendLane = document.querySelector(".track"); //variable to target the track, track is now appendLane, after the action we're doing to it
        createSpan.innerText = `${i}`; //span inner text lane [i]
        createLane.id = `lane-${i}`; // give span id lane-[i]
        createLane.appendChild(createSpan); //make created span the child of the created list item
        appendLane.appendChild(createLane);// make created lane the child of the created track class item
    };

    let racers = []; // this is the array that we're pushing frogs into from frog stable
    let tempStable = frogStable; // created var so frog stable variable could be accessed from this code

    for(i = 1; i <= FROGS; i++) { // this is the for loop that pushes random frogs into the array
        let randomnumber = Math.floor(Math.random() * tempStable.length);
        while (tempStable[randomnumber] === undefined){
            randomnumber = Math.floor(Math.random() * tempStable.length);
        }
        let newRacer = tempStable[randomnumber];
        tempStable[randomnumber] = undefined;
            racers.push(newRacer);    
    }
    console.log(racers);
    
    racers.forEach (function(racer, id) {
        const newFrog = document.createElement('span'); //this span is the frog
        newFrog.innerHTML = `${racer.number}`; //this is how to differentiate the frogs
        newFrog.classList.add('frog') //classing as frog to style all frogs at once
        newFrog.id = racer.name;
        newFrog.style.background = racer.color; //individual frog is their specified color
        document.getElementById(`lane-${id+1}`).appendChild(newFrog); // append newfrog variable to lane id we created in part 1
        racers[id].progress = 0;
        racers[id].lane = `lane-${id+1}`;
        const frogProgress = document.createElement('span');
        frogProgress.id = racers[id].name;
        document.getElementById(`lane-${id+1}`).appendChild(frogProgress);
    });

    function racingFrog (racer) {
        let progress = racer.progress;
        let actualRace = setInterval(function(){
            progress += Math.random() * 10
        
        console.log(progress)
        if (progress > 100) {
            progress = 100.1;
            ranking.push(racer.name);
            clearInterval(actualRace);
        }
        console.log(racer)
        document.querySelector(`#${racer.name}`).style.left = `${progress}%`;
    }, Math.random() * 2500);
}
    function frogRank () {
        let rankCheck = setInterval(function(){
            if (ranking.length === racers.length) {
                console.log(ranking)
                clearInterval(rankCheck);
            }
        },1000)
}
    racers.forEach(function(racer) {
        racingFrog(racer)
        frogRank()
    });

    // racers.forEach(function(racer, index){
    //     let laneId = index + 1;
    //     console.log(laneId);
    //     racer.progress = 0;
    //     let printProgress = racer[index].progress
    //     let newFrog = document.createElement('span');
    //     let displayProgress = document.createElement('p');
    //     let 0
    //     displayProgress.innerText `${racer}${index}: ${printProgress}`
        
    //     newFrog.classList.add = "frog";
    //     newFrog.innerText = `${racer.name} ${racer.progress}`;
    //     newFrog.style.background = racer.color;
    //     document.getElementById(`lane-${laneId}`).appendChild(newFrog);
    // });