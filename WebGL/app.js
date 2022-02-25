//Vertex Shader
var vertexShaderText = 
[
    'precision mediump float;',
    '',
    'attribute vec2 vertPosition;',
    'attribute vec3 vertColor;',
    'varying vec3 fragColor;',
    '',
    'void main()',
    '{',
    '   fragColor = vertColor;',
    '   gl_Position = vec4(vertPosition, 0.0, 1.0);',
    '}'
].join('\n');

//Fragment Shader 
var fragmentShaderText = [
    'precision mediump float;',
    '',
    'varying vec3 fragColor; ',
    'void main()',
    '{',
    'gl_FragColor = vec4(fragColor, 1.0);',
    '}'
].join('\n');

var InitDemo = function(){
    console.log('working');

    var canvas = document.getElementById('game-surface');
    var gl = canvas.getContext('webgl');

    // WebGL error catch
    if(!gl){
        console.log('WebGL not supported, falling back on experimental-webwgl');
        gl = canvas.getContext('experimental-webgl');
    }

    if(!gl){
        alert('Your browser does not support WebGL');
    }

    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);

    gl.shaderSource(vertexShader, vertexShaderText);
    gl.shaderSource(fragmentShader, fragmentShaderText);

    // Shader compiling error catch
    gl.compileShader(vertexShader);
    if(!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)){
        console.error('ERROR compiling vertex shader', gl.getShaderInfoLog(vertexShader));
        return;
    }
    gl.compileShader(fragmentShader);
    if(!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)){
        console.error('ERROR compiling fragment shader', gl.getShaderInfoLog(fragmentShader));
        return;
    }

    //Program creation

    var program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if(!gl.getProgramParameter(program, gl.LINK_STATUS)){
        console.error('ERROR linking program!', gl.getPrgramInfoLog(program));
        return;
    }
    gl.validateProgram(program);
    if(!gl.getProgramParameter(program, gl.VALIDATE_STATUS)){
        console.error('ERROR validating program!', gl/getProgramInfoLog(program));
        return; 
    }

    // Buffer creation function
    
    function createBuffer(triangleVertices){

        var triangleVertexBufferObject = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, triangleVertexBufferObject);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);

        var positionAttribLocation = gl.getAttribLocation(program, 'vertPosition');
        var colorAttribLocation = gl.getAttribLocation(program, 'vertColor');
        gl.vertexAttribPointer(
            positionAttribLocation,//Attribute location
            2, // Number of elements per attribute 
            gl.FLOAT, // Type of elements 
            gl.FALSE,
            5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
            0 // Offset from the beginning of a single vertex to this attribute
        );

        gl.vertexAttribPointer(
            colorAttribLocation,//Attribute location
            3, // Number of elements per attribute 
            gl.FLOAT, // Type of elements 
            gl.FALSE,
            5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
            2 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
        );

        gl.enableVertexAttribArray(positionAttribLocation);
        gl.enableVertexAttribArray(colorAttribLocation);

        // Main render loop

        gl.useProgram(program);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    //Create buffer 1 
    // -------------------------------------------------------------------------------------------------------
    //Background 1

    var triangleVertices1 = 
    [//X, Y             R,G,B
        -0.8, 0.8,       0.1, 0.3, 1.8,
        0.8, 0.8,     1.0, 0.5, 0.0,
        0.8, -0.8,      1.0, 0.6, 0.4
    ];

    createBuffer(triangleVertices1);

    //Create buffer 2
    // -------------------------------------------------------------------------------------------------------
    //Background 2
    
    var triangleVertices2 = 
    [//X, Y             R,G,B
        -0.8, 0.8,       0.1, 0.3, 1.8,
        0.8, -0.8,       1.0, 0.6, 0.4,
        -0.8, -0.8,      1.0, 0.6, 0.4
    ];

    createBuffer(triangleVertices2);

    //Create buffer 3 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices3 = 
    [//X, Y             R,G,B
        -0.3, 0.65,       0.36, 0.36, 0.36,
        -0.1, 0.43,       0.36, 0.36, 0.36,
        -0.17, 0.30,      0.36, 0.36, 0.36
    ];

    createBuffer(triangleVertices3);
    
    //Create buffer 4 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices4 = 
    [//X, Y             R,G,B
        -0.22, 0.56,       0.25, 0.25, 0.25,
        -0.1, 0.43,       0.25, 0.25, 0.25,
        -0.13, 0.52,      0.25, 0.25, 0.25,
    ];
    
    createBuffer(triangleVertices4);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices5 = 
    [//X, Y             R,G,B
        -0.3, 0.65,       0.0, 0.0, 0.0,
        -0.32, 0.63,       0.0, 0.0, 0.0,
        -0.285, 0.61,      0.0, 0.0, 0.0
    ];
    
    createBuffer(triangleVertices5);

     //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices6 = 
    [//X, Y             R,G,B
        -0.32, 0.63,       0.8, 0.8, 0.8,
        -0.33, 0.59,       0.8, 0.8, 0.8,
        -0.285, 0.61,      0.8, 0.8, 0.8
    ];
    
    createBuffer(triangleVertices6);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices7 = 
    [//X, Y             R,G,B
        -0.285, 0.61,       0.8, 0.8, 0.8,
        -0.33, 0.59,       0.8, 0.8, 0.8,
        -0.2, 0.38,      0.8, 0.8, 0.8
    ];
    
    createBuffer(triangleVertices7);


    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices8 = 
    [//X, Y             R,G,B
        -0.2, 0.38,       0.65, 0.65, 0.65,
        -0.17, 0.3,       0.65, 0.65, 0.65,
        -0.321, 0.53,      0.65, 0.65, 0.65
    ];
    
    createBuffer(triangleVertices8);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices9 = 
    [//X, Y             R,G,B
        -0.31, 0.56,       0.65, 0.65, 0.65,
        -0.2, 0.38,       0.65, 0.65, 0.65,
        -0.321, 0.53,      0.65, 0.65, 0.65
    ];
    
    createBuffer(triangleVertices9);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices10 = 
    [//X, Y             R,G,B
        -0.289, 0.48,       0.36, 0.36, 0.36,
        -0.17, 0.3,       0.36, 0.36, 0.36,
        -0.321, 0.35,      0.36, 0.36, 0.36
    ];
    
    createBuffer(triangleVertices10);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices10 = 
    [//X, Y             R,G,B
        -0.23, 0.15,       0.25, 0.25, 0.25,
        -0.17, 0.3,       0.25, 0.25, 0.25,
        -0.321, 0.35,      0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices10);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices11 = 
    [//X, Y             R,G,B
        -0.23, 0.15,       0.36, 0.36, 0.36,
        -0.17, 0.3,       0.36, 0.36, 0.36,
        -0.16, 0.235,      0.36, 0.36, 0.36
    ];
    
    createBuffer(triangleVertices11);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices12 = 
    [//X, Y             R,G,B
        -0.1, 0.325,       0.25, 0.25, 0.25,
        -0.17, 0.3,      0.25, 0.25, 0.25,
        -0.16, 0.235,      0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices12);

    //Create buffer 3 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices13 = 
    [//X, Y             R,G,B
        -0.01, 0.359,       0.0, 0.0, 0.0,
        -0.1, 0.43,       0.0, 0.0, 0.0,
        -0.17, 0.30,      0.0, 0.0, 0.0
    ];

    createBuffer(triangleVertices13);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices14 = 
    [//X, Y             R,G,B
        -0.1, 0.325,       0.36, 0.36, 0.36,
        -0.03, 0.13,      0.36, 0.36, 0.36,
        -0.16, 0.235,      0.36, 0.36, 0.36
    ];
    
    createBuffer(triangleVertices14);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices15 = 
    [//X, Y             R,G,B
        -0.13, 0.38,       0.25, 0.25, 0.25,
        -0.03, 0.13,      0.25, 0.25, 0.25,
        -0.08, 0.367,     0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices15);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices16 = 
    [//X, Y             R,G,B
        -0.125, 0.06,       0.0, 0.0, 0.0,
        -0.03, 0.13,       0.0, 0.0, 0.0,
        -0.16, 0.235,       0.0, 0.0, 0.0
    ];
    
    createBuffer(triangleVertices16);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices17 = 
    [//X, Y             R,G,B
        -0.125, 0.06,       0.25, 0.25, 0.25,
        -0.32, 0.055,      0.25, 0.25, 0.25,
        -0.16, 0.235,       0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices17);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices18 = 
    [//X, Y             R,G,B
        -0.23, 0.15,       0.36, 0.36, 0.36,
        -0.32, 0.05,       0.36, 0.36, 0.36,
        -0.321, 0.35,      0.36, 0.36, 0.36
    ];
    
    createBuffer(triangleVertices18);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices19 = 
    [//X, Y             R,G,B
        -0.32, 0.05,       0.25, 0.25, 0.25,
        -0.38, 0.17,       0.25, 0.25, 0.25,
        -0.321, 0.35,      0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices19);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices20 = 
    [//X, Y             R,G,B
        -0.219, 0.058,       0.36, 0.36, 0.36,
        -0.32, 0.055,      0.36, 0.36, 0.36,
        -0.31, -0.4,       0.36, 0.36, 0.36
    ];
    
    createBuffer(triangleVertices20);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices21 = 
    [//X, Y             R,G,B
        -0.09, 0.064,       0.36, 0.36, 0.36,
        -0.22, 0.059,      0.36, 0.36, 0.36,
        -0.12, -0.35,       0.36, 0.36, 0.36
    ];
    
    createBuffer(triangleVertices21);

        //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices22 = 
    [//X, Y             R,G,B
        -0.22, 0.06,       0.25, 0.25, 0.25,
        -0.25, -0.07,      0.25, 0.25, 0.25,
        -0.12, -0.35,       0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices22);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices23 = 
    [//X, Y             R,G,B
        -0.28, -0.4,       0.25, 0.25, 0.25,
        -0.26, -0.15,      0.25, 0.25, 0.25,
        -0.31, -0.4,       0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices23);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices24 = 
    [//X, Y             R,G,B
        -0.28, -0.4,       0.25, 0.25, 0.25,
        -0.26, -0.15,      0.25, 0.25, 0.25,
        -0.31, -0.4,       0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices24);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices25 = 
    [//X, Y             R,G,B
        -0.31, -0.4,       0.20, 0.20, 0.20,
        -0.36, -0.34,      0.20, 0.20, 0.20,
        -0.4, -0.4,       0.20, 0.20, 0.20
    ];
    
    createBuffer(triangleVertices25);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices26 = 
    [//X, Y             R,G,B
        -0.31, -0.4,       0.20, 0.20, 0.20,
        -0.36, -0.34,      0.20, 0.20, 0.20,
        -0.31, -0.35,       0.20, 0.20, 0.20
    ];
    
    createBuffer(triangleVertices26);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices27 = 
    [//X, Y             R,G,B
        0.15, -0.4,       0.0, 0.0, 0.0,
        -0.13, -0.4,      0.0, 0.0, 0.0,
        -.1, -0.03,       0.0, 0.0, 0.0
    ];
    
    createBuffer(triangleVertices27);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices28 = 
    [//X, Y             R,G,B
        0.15, -0.4,       0.25, 0.25, 0.25,
        0.05, -0.13,      0.25, 0.25, 0.25,
        -.1, -0.03,       0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices28);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices29 = 
    [//X, Y             R,G,B
        -0.035, 0.065,       0.36, 0.36, 0.36,
        0.05, -0.13,      0.36, 0.36, 0.36,
        -.1, -0.03,       0.36, 0.36, 0.36
    ];
    
    createBuffer(triangleVertices29);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices30 = 
    [//X, Y             R,G,B
        -0.035, 0.065,       0.25, 0.25, 0.25,
        -0.1, 0.065,      0.25, 0.25, 0.25,
        -0.1, -0.03,       0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices30);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices31 = 
    [//X, Y             R,G,B
        -0.125, 0.06,       0.36, 0.36, 0.36,
        -0.03, 0.13,       0.36, 0.36, 0.36,
        0.0, 0.06,       0.36, 0.36, 0.36
    ];
    
    createBuffer(triangleVertices31);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices32 = 
    [//X, Y             R,G,B
        -0.26, -0.4,       0.20, 0.20, 0.20,
        -0.12, -0.4,      0.20, 0.20, 0.20,
        -.23, -0.34,       0.20, 0.20, 0.20
    ];
    
    createBuffer(triangleVertices32);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices33 = 
    [//X, Y             R,G,B
        -0.125, -0.36,       0.20, 0.20, 0.20,
        -0.13, -0.4,      0.20, 0.20, 0.20,
        -.23, -0.34,       0.20, 0.20, 0.20
    ];
    
    createBuffer(triangleVertices33);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices34 = 
    [//X, Y             R,G,B
        0.35, -0.4,       0.36, 0.36, 0.36,
        0.15, -0.4,      0.36, 0.36, 0.36,
        0.11, -0.3,       0.36, 0.36, 0.36
    ];
    
    createBuffer(triangleVertices34);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices35 = 
    [//X, Y             R,G,B
        0.35, -0.4,       0.25, 0.25, 0.25,
        0.2, -0.34,      0.25, 0.25, 0.25,
        0.37, -0.3,       0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices35);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices36 = 
    [//X, Y             R,G,B
        0.35, -0.2,       0.36, 0.36, 0.36,
        0.27, -0.324,      0.36, 0.36, 0.36,
        0.37, -0.3,       0.36, 0.36, 0.36
    ];
    
    createBuffer(triangleVertices36);

    //Create buffer 5 
    // -------------------------------------------------------------------------------------------------------

    var triangleVertices37 = 
    [//X, Y             R,G,B
        0.35, -0.2,       0.25, 0.25, 0.25,
        0.31, -0.27,      0.25, 0.25, 0.25,
        0.23, -0.18,       0.25, 0.25, 0.25
    ];
    
    createBuffer(triangleVertices37);

};