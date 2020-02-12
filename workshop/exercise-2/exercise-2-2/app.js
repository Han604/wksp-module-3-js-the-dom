// Preset values
const FROGS = 3;

// 1. Create for loop that makes use of FROGS to know how many lanes to create.

    // 2. Create li    

    // 3. Create span and add it to the li

    // 4. Assign an id to each lane

    for(i = 1; i <= FROGS; i ++) {
        const createLane = document.createElement("li");
        const createSpan = document.createElement("span");
        createSpan.innerText = `lane ${i}`;
        createSpan.className = `lane-${i}`;
        createLane.appendChild(createSpan);
        const appendLane = document.querySelector(".track");
        appendLane.appendChild(createLane);
    };

    let racers = [];
    let tempStable = frogStable;

    for(i = 1; i <= FROGS; i++) {
        let randomnumber = Math.floor(Math.random() * tempStable.length);
        while (tempStable[randomnumber] === undefined){
            randomnumber = Math.floor(Math.random() * tempStable.length);
        }
        let newRacer = tempStable[randomnumber];
        tempStable[randomnumber] = undefined;
            racers.push(newRacer);    
    }
    console.log(racers);