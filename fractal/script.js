// main
    window.addEventListener("resize", resizeHandler); // add event handler for resize of "window" object
    setInterval(repaintHandler, 15); // set timer to repaintHandler, every 15 ms

//-----------------------------------------------------------------------------------------
/* 
    Document view resize handler. 
    Get document view size, and set it to canvas size
    call repaint handler
*/ 
function resizeHandler(){
    myCanvas = document.getElementById("myCanvas"); // get canvas object
    myCanvas.width = window.innerWidth;
    myCanvas.height = window.innerHeight;

    // Redraw everything after resizing the window
    repaintHandler();
}

//-----------------------------------------------------------------------------------------

class Point {
    constructor(x, y, r = 1){
        this.x = parseFloat(x);
        this.y = parseFloat(y);
        this.r = parseFloat(r);
    }

    drawPoint(ctx){
        if( this.r == 1 ){           
            var id = ctx.createImageData(1,1); // only do this once per page
            var d  = id.data;                        // only do this once per page
            d[0]   = 0;
            d[1]   = 0;
            d[2]   = 0;
            d[3]   = 255;
            ctx.putImageData( id, this.x, this.y );    
        } else {
            ctx.fillStyle = "rgb(0,0,0)";
            ctx.moveTo(this.x + this.r, this.y);
            ctx.arc(this.x, this.y, 2, 0, 360, false);
        }
    }

    div(value){
        value = parseFloat(value);
        this.x /= value;
        this.y /= value;
    }
}
//-----------------------------------------------------------------------------------------


var current_pos = new Point( 50.0 , 50, 1);
var points = [new Point(0,0), new Point(600, 0 ), new Point(300, 600)];


//-----------------------------------------------------------------------------------------
/*
    Canvas repaint handler.
    Calls every 15 ms, and with resize event
*/
function repaintHandler(){
    myCanvas = document.getElementById("myCanvas"); // get canvas object
    var ctx = myCanvas.getContext("2d");

    r = getRandomInt(3);
    triangle_point = new Point(points[r].x, points[r].y);
    vec2 = new Point(triangle_point.x - current_pos.x, triangle_point.y - current_pos.y)
    vec2 = new Point(vec2.x / 2.0, vec2.y / 2.0);
    current_pos.x = current_pos.x + vec2.x;
    current_pos.y = current_pos.y + vec2.y;
    current_pos.drawPoint(ctx);

    ctx.stroke();
}
//-----------------------------------------------------------------------------------------

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}