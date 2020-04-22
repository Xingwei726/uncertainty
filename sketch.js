var table
var x = 0;
var marginTop=50;
var marginBottom=50;


function preload() {
    table = loadTable('data/position.csv', 'csv', 'header')
    console.log (table)
}

function setup(){
    createCanvas(1440, 800)
    background(235, 235, 218);
    rectMode(CENTER);

    // for (let r=0; r<table.getRowCount(); r++) {
    //     const state = table.getString (r, "State")
    //     const stateAbbr = table.getString (r, "Abbr")
    //     const x = table.getNum (r, "xPosition")
    //     const y = table.getNum (r, "yPosition")
    //     rect(x*100, y*100, 100, 10);

    // }



}

function draw(){
  
  translate (600, 120);

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
        
        
        fill(0)
        rect(x*60, y*60, 55, 5);
        
        // ellipse (x*60,y*60,60,60)
    }



}