/**
 * Created by milas6582 on 4/20/2017.
 */
var levels = [];

//an array with all of the first level's walls
//[].concat.apply([], something) takes the array of arrays (each wall() function creates its own array of individual bricks)
//and returns one big array (took from stack overflow)
var walls1 = [].concat.apply([], [wall({x:200, y:400, w:100, h:50}, false), wall({x:350, y:500, w:50, h:50}, false),
    wall({x:650, y:0, w:50, h:600}, true), wall({x:0, y:50, w:50, h:50}, false)]);

//the function that is called when the lever in level one is first sitched (or on any odd-number of switches)
function leverFunc1r(lever) {
    picts.springs.push(spring({x:480, y: 550, w: 50, h: 50}))
};

//the function that is called when the lever in level one is switched a second time
function leverFunc1l(lever) {
    lever.funcs[1] = function () {}
};

//a function that returns an object with all of level one's pictures
//I didn't create a variable because when I set picts equal to this variable and change pict, this variable also changes
var createPict1 = function () {
    return {walls: walls1.slice(),
    heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
    chest: createPict({x:-100, y:340, w:80, h:60}, "Resources/chest.png", true),
    bombs: [],
    springs: [spring({x:75, y: 550, w: 50, h: 50})],
    sliders: [slider(25, 270, 500, 250, 2.5, 0)],
    launchers: [launcher({x: 5, y: 0, w: 40, h: 50}, 1.5, 3, 50)],
    saws: [saw({x: 700, y: 300, w:100, h:100}, 4)],
    levers: [lever({x: 710, y: 531, w:80, h:69}, leverFunc1l, leverFunc1r)],
    buttons: [createButton("Click to Start", 240, 225, 40, 230, function () {currLevel=1; time=0; levelTime = 0;
        document.getElementById('myCanvas').removeEventListener('click', picts.buttons[0].func); startLevel();})]};
};

//adds level 1's pictures, adds where the player should start, and adds how many lives he should have into levels
// alert('hi')
levels.push([createPict1, 500, 499, 3, [["Bomber Boy", 170, 150, 70]]]);

//does the same process as above for different levels
var walls2 = [].concat.apply([], [wall({x: 150, y: 0, w: 50, h: 150}, false), wall({x: 150, y: 150, w: 50, h: 150}, true),
    wall({x: 150, y: 300, w: 50, h: 300}, false), wall({x: 550, y: 300, w: 200, h: 50}, false), wall({x: 750, y: 300, w: 50, h: 50}, true),
    wall({x: 550, y: 350, w: 50, h: 250}, false)]);

var createPict2 = function () {
    return {
        walls: walls2.slice(),
        heart: createPict({x: 0, y: 610, w: 30, h: 30}, "Resources/heart.png", true),
        chest: createPict({x: 610, y: 540, w: 80, h: 60}, "Resources/chest.png", true),
        bombs: [],
        springs: [spring({x: 50, y: 550, w: 50, h: 50}), spring({x: 350, y: 550, w: 50, h: 50})],
        sliders: [slider(220, 320, 520, 420, 2, 0)],
        launchers: [],
        saws: [saw({x: 200, y: 525, w: 75, h: 75}, 4), saw({x: 475, y: 525, w: 75, h: 75}, -4)],
        levers: []};
};
levels.push([createPict2, 5, 499, 3, [["Get to the chest. Press the arrow keys to throw a ", 270, 100, 22],
     ["bomb in the desired dierection. Use wasd to move.", 260, 150, 22],["Press r to restart a level.", 400, 200, 22]]]);

var walls3 = [].concat.apply([], [wall({x: 400, y: 0, w: 50, h: 450}, false), wall({x: 300, y: 100, w: 100, h: 50}, false),
    wall({x: 0, y: 400, w: 400, h: 50}, false), wall({x:0, y:50, w:50, h:50}, false)]);

function leverFunc3r(lever) {
    picts.sliders.push(slider(610, 550, 610, 250, 0, -3))
};

function leverFunc3l(lever) {
    lever.funcs[1] = function () {}
};

function leverFunc3R(lever) {
    picts.chest = createPict({x: 450, y: 540, w: 80, h: 60}, "Resources/chest.png", true)
};

function leverFunc3L(lever) {
    lever.funcs[1] = function () {}
};

var createPict3 = function () {
    return {
        walls: walls3.slice(),
        heart: createPict({x: 0, y: 610, w: 30, h: 30}, "Resources/heart.png", true),
        chest: createPict({x: -100, y: 0, w: 80, h: 60}, "Resources/chest.png", true),
        bombs: [],
        springs: [],
        sliders: [],
        launchers: [launcher({x: 5, y: 0, w: 40, h: 50}, 2, 3, 50)],
        saws: [],
        levers: [lever({x: 10, y: 331, w: 80, h: 69}, leverFunc3l, leverFunc3r), lever({x: 310, y: 31, w: 80, h: 69}, leverFunc3L, leverFunc3R)]};
};

levels.push([createPict3, 500, 499, 3, [["Create an explosion near the", 475, 100, 22],
    ["levers to activate them", 510, 150, 22]]]);

var walls4 = [].concat.apply([], [wall({x: 550, y: 0, w: 50, h: 400}, false), wall({x: 550, y: 400, w: 250, h: 50}, false),
    wall({x: 150, y: 450, w: 50, h: 150}, false), wall({x: 300, y: 450, w: 50, h: 150}, false), wall({x: 750, y: 50, w: 50, h: 50}, false),
    wall({x: 650, y: 150, w: 150, h: 50}, false), wall({x: 600, y: 300, w: 50, h: 50}, false), wall({x: 700, y: 250, w: 100, h: 50}, false)]);

function leverFunc4r(lever) {
    picts.launchers.push(launcher({x: 755, y: 0, w: 40, h: 50}, .4, 3, -50))
};

function leverFunc4l(lever) {
    lever.funcs[1] = function () {}
};

function leverFunc4R(lever) {
    picts.chest = createPict({x: 450, y: 540, w: 80, h: 60}, "Resources/chest.png", true)
};

function leverFunc4L(lever) {
    lever.funcs[1] = function () {}
};

var createPict4 = function () {
    return {walls: walls4.slice(),
    heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
    chest: createPict({x: -100, y: 0, w: 80, h: 60}, "Resources/chest.png", true),
    bombs: [],
    springs: [spring({x: 50, y: 550, w: 50, h: 50}), spring({x: 350, y: 550, w: 50, h: 50})],
    sliders: [],
    launchers: [],
    saws: [saw({x: 200, y: 350, w: 100, h: 100}, 4)],
    levers: [lever({x: 210, y: 531, w: 80, h: 69}, leverFunc4l, leverFunc4r), lever({x: 710, y: 331, w: 80, h: 69}, leverFunc4L, leverFunc4R)]};
};

levels.push([createPict4, 5, 499, 1, [["Bombs can go through saws without exploding", 35, 100, 22]]]);

function createWalls5() {
    return [].concat.apply([], [wall({x: 150, y: 550, w: 50, h: 50}, false), wall({x: 145, y: 200, w: 50, h: 250}, false),
        wall({x: 250, y: 200, w: 100, h: 50}, false), wall({x: 405, y: 200, w: 100, h: 50}, false), wall({x: 560, y: 200, w: 100, h: 50}, false),
        wall({x: 715, y: 200, w: 100, h: 50}, false), wall({x: 750, y: 100, w: 50, h: 50}, false), wall({x: 300, y: 250, w: 50, h: 50}, false), wall({x: 405, y: 250, w: 50, h: 50}, false)]);
}

function leverFunc5r(lever) {
    picts.springs.push(spring({x:0, y: 200, w: 50, h: 50}));
    picts.springs.push(spring({x:50, y: 200, w: 50, h: 50}));
    picts.springs.push(spring({x:100, y: 200, w: 50, h: 50}));
};

function leverFunc5l(lever) {
    picts.springs = [picts.springs[0]]
};

function leverFunc5R(lever) {
    picts.walls[0].doesExplode = true;
    picts.walls[0].pict.src = "Resources/brick.png";
};

function leverFunc5L(lever) {
    picts.walls[0].doesExplode = false;
    picts.walls[0].pict.src = "Resources/stone.png";

};

var createPict5 = function () {
    return {walls: createWalls5(),
        heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
        chest: createPict({x: 720, y: 540, w: 80, h: 60}, "Resources/chest.png", true),
        bombs: [],
        springs: [spring({x: 0, y: 550, w: 50, h: 50})],
        sliders: [],
        launchers: [launcher({x: 760, y: 50, w: 40, h: 50}, 1.5, 3, -50)],
        saws: [saw({x: 195, y: 200, w: 55, h: 55}, 4),saw({x: 350, y: 200, w: 55, h: 55}, 4),saw({x: 505, y: 200, w: 55, h: 55}, 4),saw({x: 660, y: 200, w: 55, h: 55}, 4)],
        levers: [lever({x: 400, y: 531, w: 80, h: 69}, leverFunc5l, leverFunc5r), lever({x: 740, y: 150, w: 60, h: 50}, leverFunc5L, leverFunc5R)]};
};

// var walls5 = [].concat.apply([], [wall({x: 150, y: 550, w: 50, h: 50}, true), wall({x: 145, y: 150, w: 50, h: 300}, false),
// wall({x: 95, y: 400, w: 50, h: 50}, false), wall({x: 250, y: 150, w: 100, h: 50}, false), wall({x: 405, y: 150, w: 100, h: 50}, false), wall({x: 560, y: 150, w: 100, h: 50}, false), wall({x: 715, y: 150, w: 100, h: 50}, false), wall({x: 750, y: 50, w: 50, h: 100}, false)]);


// var createPict5 = function () {
//     return {walls: walls5.slice(),
//         heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
//         chest: createPict({x: 720, y: 540, w: 80, h: 60}, "Resources/chest.png", true),
//         bombs: [],
//         springs: [spring({x: 0, y: 500, w: 40, h: 40})],
//         sliders: [],
//         launchers: [launcher({x: 760, y: 0, w: 40, h: 50}, 1.5, 3, -50)],
//         saws: [saw({x: 95, y: 580, w: 20, h: 20}, 4), saw({x: 195, y: 150, w: 55, h: 55}, 4),saw({x: 350, y: 150, w: 55, h: 55}, 4),saw({x: 505, y: 150, w: 55, h: 55}, 4),saw({x: 660, y: 150, w: 55, h: 55}, 4)],
//         levers: [lever({x: 400, y: 531, w: 80, h: 69}, leverFunc5l, leverFunc5r)]};
// };

levels.push([createPict5, 10, 499, 1, [["Don't get hit by the bullets. You can explode ", 375, 350, 20], ["them by throwing a bomb at them", 405, 400, 22]]]);

var walls6 = [].concat.apply([], [wall({x: 200, y:450 , w:50 , h: 150}, false), wall({x: 0, y:50 , w:50 , h: 50}, false),
    wall({x: 200, y:220 , w:50 , h: 50}, true), wall({x: 200, y:170 , w:50 , h: 50}, false), wall({x: 600, y:200 , w:100 , h: 50}, false),
    wall({x: 550, y:0 , w:50 , h: 150}, false)]); // wall({x: 550, y:150 , w:50 , h: 50}, true)

function leverFunc6r(lever) {
    picts.saws.splice(1, 1);
};

function leverFunc6l(lever) {
    lever.funcs[1] = function () {}
};

function leverFunc7r(lever) {
    picts.saws.splice(0, 1);
};

function leverFunc7l(lever) {
    lever.funcs[1] = function () {}
};

var createPict6 = function () {
    return {walls: walls6.slice(),
        heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
        chest: createPict({x: 720, y: 540, w: 80, h: 60}, "Resources/chest.png", true),
        bombs: [],
        springs: [spring({x: 50, y: 550, w: 50, h: 50}), spring({x: 300, y: 550, w: 50, h: 50})],
        sliders: [slider(10, 429, 550, 430, 1.75, 0)],
        launchers: [launcher({x: 5, y: 0, w: 40, h: 50}, .75, 3, 50)],
        saws: [saw({x:207.5 , y:360 , w: 35, h: 35}, 4), saw({x:715 , y:450 , w: 80, h: 80}, 4)],
        levers: [lever({x: 610, y: 130, w: 80, h: 70}, leverFunc6l, leverFunc6r)]};
};

levels.push([createPict6, 10, 499, 1, []]);

var walls7 = [].concat.apply([], [wall({x: 650, y:200 , w:50 , h: 400}, false), wall({x: 700, y:200 , w:100 , h: 50}, true)]);

var createPict7 = function () {
    saws = [saw({x:710 , y:260 , w: 80, h: 80}, 4), saw({x:710 , y:355 , w: 80, h: 80}, -4), saw({x:710 , y:450 , w: 80, h: 80}, 4)];
    for (var i=0; i<650; i += 50) {
        saws.push(saw({x:i , y:480 , w: 50, h: 50}, 4))
    }
    for (var i=230; i<480; i+=50) {
        saws.push(saw({x:280 , y:i , w: 50, h: 50}, 4))
    }
    for (var i=330; i<480; i+=50) {
        saws.push(saw({x:80 , y:i , w: 50, h: 50}, 4))
    }
    return {walls: walls7.slice(),
        heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
        chest: createPict({x: 710, y: 540, w: 80, h: 60}, "Resources/chest.png", true),
        bombs: [],
        springs: [spring({x: 480, y: 420, w: 50, h: 50}), spring({x: 280, y: 180, w: 50, h: 50}), spring({x: 80, y: 280, w: 50, h: 50})],
        sliders: [],
        launchers: [],
        saws: saws,
        levers: [lever({x: 70, y: 531, w: 80, h: 69}, leverFunc7l, leverFunc7r), lever({x: 270, y: 531, w: 80, h: 69}, leverFunc7l, leverFunc7r), lever({x: 470, y: 531, w: 80, h: 69}, leverFunc7l, leverFunc7r)]};
};

levels.push([createPict7, 750, 99, 1, []]);

var walls8 = [].concat.apply([], [wall({x: 540, y: 550, w: 100, h: 50}, false), wall({x: 540, y: 369, w: 100, h: 50}, false), wall({x: 0, y: 250, w: 100, h: 50}, false), wall({x: 300, y: 350, w: 50, h: 50}, false), wall({x: 300, y: 500, w: 50, h: 100}, false), wall({x: 300, y: 100, w: 50, h: 150}, false)]);

function leverFunc8r(lever) {
    picts.walls.splice(picts.walls.indexOf(createPict({x:300, y:200, w:50, h:50}, "Resources/stone.png", true)), 1);
};

function leverFunc8l(lever) {
    lever.funcs[1] = function () {}
};
// , slider(105, 210, 700, 400, 2, 0)
// spring({x: 600, y: 550, w: 50, h: 50})
var createPict8 = function () {
    return {walls: walls8.slice(),
        heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
        chest: createPict({x: 10, y: 200, w: 80, h: 60}, "Resources/chest.png", true),
        bombs: [],
        springs: [spring({x: 250, y: 550, w: 50, h: 50}), spring({x: 350, y: 550, w: 50, h: 50})],
        sliders: [slider(50, 370, 700, 400, 2, 0), slider(105, 199, 700, 400, 2, 0)],
        launchers: [],
        saws: [],
        levers: [lever({x: 550, y: 481, w: 80, h: 69}, leverFunc8l, leverFunc8r), lever({x: 550, y: 300, w: 80, h: 69}, leverFunc8l, leverFunc8r)]};
};

levels.push([createPict8, 10, 499, 3, []]);

var walls9 = [].concat.apply([], [wall({x: 500, y: 0, w: 100, h: 50}, false), wall({x: 750, y: 50, w: 50, h: 50}, false),
    wall({x: 200, y: 130, w: 150, h: 50}, false), wall({x: 500, y: 200, w: 50, h: 50}, false),
    wall({x: 200, y: 269, w: 600, h: 50}, false), wall({x: 430, y: 450, w: 50, h: 150}, false), wall({x: 170, y: 398, w: 150, h: 50}, false),
    wall({x: 150, y: 0, w: 50, h: 600}, false)]);

function leverFunc9r(lever) {
    for (var i=picts.walls.length-1; i>=0; i--) {
        if (!picts.walls[i].doesExplode) {
            picts.walls[i].pict.src = "Resources/brick.png";
            picts.walls[i].doesExplode = true;
            break;
        }
    }
};

function leverFunc9l(lever) {
    lever.funcs[1] = function () {}
};

function leverFunc9R(lever) {
    for (var i=picts.walls.length-1; i>=0; i--) {
        if (picts.walls[i].pictInfo.x === 430) {
            picts.walls[i].pict.src = "Resources/brick.png";
            picts.walls[i].doesExplode = true;
        }
    }
};

function leverFunc9L(lever) {
    lever.funcs[1] = function () {}
};

var createPict9 = function () {
    return {walls: walls9.slice(),
        heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
        chest: createPict({x: 200, y: 540, w: 80, h: 60}, "Resources/chest.png", true),
        bombs: [],
        springs: [spring({x: 0, y: 550, w: 50, h: 50}), spring({x: 0, y: 200, w: 50, h: 50})],
        sliders: [],
        launchers: [launcher({x: 755, y: 0, w: 40, h: 50}, 1, 2, -50), launcher({x: 755, y: 550, w: 40, h: 50}, 1, 1, -50)],
        saws: [],
        levers: [lever({x: 210, y: 200, w: 80, h: 69}, leverFunc9l, leverFunc9r), lever({x: 350, y: 531, w: 80, h: 69}, leverFunc9l, leverFunc9r),
            lever({x: 210, y: 61, w: 80, h: 69}, leverFunc9l, leverFunc9r), lever({x: 210, y: 329, w: 80, h: 69}, leverFunc9L, leverFunc9R)]};
}

levels.push([createPict9, 10, 499, 3, []]);

var walls10 = [].concat.apply([], [wall({x: 0, y: 140, w: 100 , h: 50}, false), wall({x: 0, y: 259, w: 100 , h: 50}, false), wall({x: 610, y: 400, w: 50 , h: 200}, false)]);

function leverFunc10r(lever) {
    picts.sliders[1].extraFunction = function () {
        if (picts.sliders[1].pictInfo.y>=picts.sliders[1].boundaries[2]&&picts.sliders[1].pictInfo.x<=200) {
            picts.sliders[1].boundaries = [picts.sliders[1].pictInfo.x-.1, 750, picts.sliders[1].pictInfo.y, picts.sliders[1].pictInfo.y];
            picts.sliders[1].changeX = 2;
            picts.sliders[1].changeY = 0;
            picts.sliders[1].extraFunction = undefined;
        }
    }
};
function leverFunc10l(lever) {
    picts.sliders[1].extraFunction = function () {
        if (picts.sliders[1].pictInfo.x<=picts.sliders[1].boundaries[0]&&picts.sliders[1].pictInfo.y>=250) {
            picts.sliders[1].boundaries = [picts.sliders[1].pictInfo.x, picts.sliders[1].pictInfo.x, picts.sliders[1].pictInfo.y+.1, 150];
            picts.sliders[1].changeX = 0;
            picts.sliders[1].changeY = -2;
            picts.sliders[1].extraFunction = undefined;
        }
    }
};

function leverFunc10R(lever) {
    picts.chest.pictInfo.x = 0;
};

function leverFunc10L(lever) {
    lever.funcs[1] = function () {}
};

var createPict10 = function () {
    return {walls: walls10.slice(),
        heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
        chest: createPict({x: -100, y: 80, w: 80, h: 60}, "Resources/chest.png", true),
        bombs: [],
        springs: [spring({x: 360, y: 470, w: 50, h: 50})],
        sliders: [slider(200, 550, 250, 425, 0, -2), slider(200, 250, 250, 150, 0, -2)],
        launchers: [],
        saws: [saw({x: 250, y: 300, w: 50, h: 50}, -4), saw({x: 610, y: 300, w: 50, h: 50}, 4), saw({x: 610, y: 350, w: 50, h: 50}, -4)],
        levers: [lever({x: 10, y: 190, w: 80, h: 69}, leverFunc10l, leverFunc10r), lever({x: 695, y: 531, w: 80, h: 69}, leverFunc10L, leverFunc10R)]};
};

levels.push([createPict10, 5, 499, 2, []]);

var walls11 = [].concat.apply([], [wall({x: 750, y: 450, w: 50, h: 150}, false), wall({x: 550, y: 130, w: 50, h: 50}, false),
    wall({x: 100, y: 0, w: 50, h: 150}, true), wall({x: 0, y: 450, w: 200, h: 150}, false), wall({x: 550, y: 550, w: 50, h: 50}, false), wall({x: 500, y: 250, w: 50, h: 350}, false)]);

function leverFunc11r(lever) {
    picts.springs.push(spring({x: 550, y: 500, w: 50, h: 50}))
};

function leverFunc11l(lever) {
    lever.funcs[1] = function () {}
};

var createPict11 = function () {
    var saws = [saw({x: 630, y: 460, w: 60, h: 60}, 4),saw({x: 690, y: 460, w: 60, h: 60}, -4), saw({x: 480, y: 200, w: 50, h: 50}, -4), saw({x: 320, y: 100, w: 50, h: 50}, 4)];
    for (var i=200; i<=450; i += 50) {
        saws.push(saw({x: i , y:550 , w: 50, h: 50}, 4))
    }
    for (var i=150; i<=400; i += 50) {
        saws.push(saw({x: 100 , y:i , w: 50, h: 50}, 4))
    }
    return {walls: walls11.slice(),
    heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
    chest: createPict({x: 0, y: 400, w: 80, h: 60}, "Resources/chest.png", true),
    bombs: [],
    springs: [spring({x: 150, y: 400, w: 50, h: 50})],
    sliders: [slider(650, 331, 650, 100, 0, -2),slider(210, 400, 500, 178, 1.2, -1.935)],
    launchers: [],
    saws: saws,
    levers: [lever({x: 640, y: 531, w: 80, h: 69}, leverFunc11l, leverFunc11r)]};
}

levels.push([createPict11, 750, 349, 1, []]);

var walls12 = [].concat.apply([], []);

var createPict12 = function () {
    return {walls: walls12.slice(),
        heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
        chest: createPict({x: -100, y: 0, w: 80, h: 60}, "Resources/chest.png", true),
        bombs: [],
        springs: [spring({x: 375, y: 550, w: 50, h: 50}), spring({x: 175, y: 550, w: 50, h: 50}), spring({x: 575, y: 550, w: 50, h: 50})],
        sliders: [],
        launchers: [],
        saws: [],
        levers: []};
}

levels.push([createPict12, 10, 499, 3, [["Congratulations, you beat all 10 levels", 150, 200, 30]]]);
//
// template for adding a new level
// var wallsk = [].concat.apply([], [wall({x: , y: , w: , h: }, doesExplode)]);
//
// function leverFunckr(lever) {
//
// };
//
// function leverFunckl(lever) {
//     lever.funcs[1] = function () {}
// };
//
// var createPictk = function () {
//     return {walls: wallsK.slice(),
//     heart: createPict({x:0, y:610, w:30, h:30}, "Resources/heart.png", true),
//     chest: createPict({x: , y: , w: 80, h: 60}, "Resources/chest.png", true),
//     bombs: [],
//     springs: [spring({x: , y: , w: 50, h: 50})],
//     sliders: [slider(startX, startY, endX, endY, changeX, changeY)],
//     launchers: [launcher({x: , y: , w: 40, h: 50}, 1.5, 3, 50)],
//     saws: [saw({x: , y: , w: 100, h: 100}, 4)],
//     levers: [lever({x: , y: , w: 80, h: 69}, leverFunckl, leverFunckr)]};
// }
//
// levels.push([createPictk, 10, 499, 1, [["Text", x, y, size]]]);