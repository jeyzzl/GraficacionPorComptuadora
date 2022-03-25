var globe;
var total = 30;

var offset = 0;

var m = 0;
var mchange = 0;

var a = 1;
var b = 1;

function setup(){
    createCanvas(800, 800, WEBGL); 
    colorMode(HSB);
    globe = new Array((total + 1)*(total + 1));
}

function supershape(theta, m, n1, n2, n3){
    var t1 = abs((1/a)*cos(m*theta/4));
    t1 = pow(t1, n2);
    var t2 = abs((1/b)*sin(m * theta/4));
    t2 = pow(t2, n3);
    var t3 =  t1 + t2;
    var r = pow(t3, -1/n1);
    return r;
}

function draw(){
    m = 1;
    // 
    // map(sin(mchange), -1, 1, 0, 7);
    // mchange += 0.05;

    rotateY(frameCount * 0.01);
    // 
    // rotateX(frameCount * 0.01);

    background(0);
    // 
    // noStroke();
    // lights();
    var r = 10;
    for(var i =0; i<total + 1; i++){
        var lat = map(i, 0, total, -HALF_PI, HALF_PI);
        var r2 = supershape(lat, 1, 2, 100, 100);

        for(var j = 0; j < total + 1; j++){
            var lon = map(j, 0, total, -PI, PI);
            var r1 = supershape(lon, 1, 2, 1, 2);

            var x = r * r1 * cos(lon) * r2 * cos(lat);
            var y = r * r1 * sin(lon) * r2 * cos(lat);
            var z = r * r2 * sin(lat);

            var index = i + j * (total + 1);
            globe[index] = new createVector(x, y, z);
        }
    }

    stroke(255);
    noFill();

    offset += 5;
    for(var i = 0; i < total; i++){
        // 
        // var hu = map(i, 0, total, 0, 255 * 6);
        // fill((hu + offset) % 255, 255, 255);
        beginShape(TRIANGLE_STRIP);
        for(var j = 0; j<total + 1; j++){
            var index1 = i + j * (total + 1);
            var v1 = globe[index1];
            vertex(v1.x, v1.y, v1.z);
            var index2 = (i+1) + j * (total + 1);
            var v2 = globe[index2];
            vertex(v2.x, v2.y, v2.z);

            // 
            // push();
            // translate(v1.x, v1.y, v1.z);
            // sphere(10);
            // pop();
        }
        endShape();
    }

}