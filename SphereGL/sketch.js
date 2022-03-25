// let angle = 0;

function setup(){
    createCanvas(800, 700, WEBGL);
}

function draw(){
    // pointLight(255, 255, 255, 0, -1000, 0)
    background(175);
    angleMode(DEGREES);

    // translate(0, -200, 0);
    // normalMaterial();
    stroke(0);
    noFill();
    // push();
    // rotateY(frameCount * 0.01);
    // sphere(100);
    // pop();

    // translate(0,130,0);
    // push();
    // rotateY(frameCount * 0.01);
    // cylinder(50, 100);
    // pop();
    
    // translate(0, 135, 0);
    // push();
    // rotateY(frameCount * 0.01);
    // sphere(100);
    // pop();

    // translaete(-200,0,0);
    push();
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    rotateZ(frameCount * 0.01);
    beginShape();
    for(let a=0; a<360; a += 10){

        let x = 100 * sin(a)+200;
        let y = 100 * cos(a)+200;

        vertex(x, y);
        for(let b=0; b<360; b+= 10){
            let x = 100 * cos(a)+100;
            let y = 100 * sin(a)+100;
            vertex(x, y);
        }
    }

    endShape(CLOSE);
    
}