var table
// var x = 0;
// var marginTop=50;
// var marginBottom=50;
let angle=0;
let speed =0;
var button;
var color;

function preload() {
    table = loadTable('data/position2.csv', 'csv', 'header')
    console.log (table)
    
    
    
    
}

function setup(){
            // translate (600, 120);

    createCanvas(800, 1000)

    // button = createButton("go")
    // button.mousePressed(changeColor)


}

function draw(){
  
    translate (100, -20);
    background(255, 250, 240);


//static circles
    // for (let r=0; r<table.getRowCount(); r++) {
    //     const state = table.getString (r, "State")
    //     const stateAbbr = table.getString (r, "Abbr")
    //     const x = table.getNum (r, "xPosition")
    //     const y = table.getNum (r, "yPosition")
    //     // rect(x*100, y*100, 100, 10);
    //     ellipse (x*60,y*60,60,60)
    // }

//static squares
    // for (let r=0; r<table.getRowCount(); r++) {
    //     const state = table.getString (r, "State")
    //     const stateAbbr = table.getString (r, "Abbr")
    //     const x = table.getNum (r, "xPosition")
    //     const y = table.getNum (r, "yPosition")
    //     rect(x*60, y*60, 60, 60);
    //     // ellipse (x*60,y*60,60,60)
    // }


//rotating bars
    for (let r=0; r<table.getRowCount(); r++) {
        const state = table.getString (r, "State")
        const stateAbbr = table.getString (r, "Abbr")
        const x = table.getNum (r, "xPosition")
        const y = table.getNum (r, "yPosition")
        // const value = table.getNum (r, "Win")
        const x1 = x*60
        const y1 = y*60
        const acce = table.getNum (r, "Margin")
        speed = map (acce, 1.8, 5.5, 0.1,20)
        
        
        
        push()
        rectMode(CENTER);
        // angleMode(RADIANS)
        angleMode(DEGREES)
        translate(x1, y1)
        rotate(angle)
        
        fill(0)
        rect(0, 0, 55, 2);
        angle=angle+speed
        pop()

        console.log (speed)

    }



}