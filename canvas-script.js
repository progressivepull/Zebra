$(document).ready(function(){

    // Definitions
    var canvas = document.getElementById("canvas-tag");
    var context = canvas.getContext("2d");

    var x = 10;
    var y = 40;
    var width = 30;
    var height = 70;
    var color = "blue";

    // Blue rectangle
    function drawRect(x, y, width, height, color) {
      context.fillStyle = color;

      console.log(`**** RECTANGLE VALUE ****`);
      console.log(`X: ${x}`);
      console.log(`Y: ${y}`);
      console.log(`Width: ${width}`);
      console.log(`Height: ${height}`);
      console.log(`Color: ${color}`);
      console.log(` `);

      context.fillRect(x, y, width, height);
    };
 


    drawRect(x, y, width, height, color);

    
    $("#submit").click(function(){

      x = $("#x").val();
      y = $("#y").val();
      width = $("#width").val();
      height = $("#height").val();
      color = $("#color").val();
        
      drawRect(x, y, width, height, color);
    });


    $("#clear").click(function(){
      context.clearRect(0, 0, canvas.width, canvas.height);
    });


  });

