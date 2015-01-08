var eap = document.getElementById("eap");
var vid = document.getElementById("song1");
var slider = document.getElementById("slider1");
var canvas = document.getElementById("myCanvas");
var canvas1 = document.getElementById("urCanvas");
var canvas2 = document.getElementById("ourCanvas");
var context = canvas.getContext("2d");
var context1 = canvas1.getContext("2d");
var context2 = canvas2.getContext("2d");
var img = new Image();
slider.style.visibility="hidden";
var isMute = false;

window.onload = function(){
	document.getElementById("add").src = "img/addLeaf.png";
};

eap.addEventListener('click', function() {
	if(!isMute){
    	toggleAutoplay(false);
    	isMute = true;
    }
    else{
    	toggleAutoplay(true);
    	isMute = false;
    }
}, false);

function toggleAutoplay(autoplay) {
	vid.autoplay = autoplay;
	vid.load();
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }
        
		img.src = URL.createObjectURL(input.files[0]);

		slider.style.visibility="visible";

		img.onload = function() {
			canvas.width = canvas1.width = canvas2.width = img.width;
			canvas.height = canvas1.height = canvas2.height = img.height;
		    context.drawImage(img, 0, 0);
		    context1.drawImage(img, 0, 0);

		}
    }
}

$("#file-input").change(function(){
    readURL(this);
});

$("#slider1").change(function(){
	width = canvas1.width;
	height = canvas1.height;

	imageData = context1.createImageData(width, height);

	pos = 0; // index position into imagedata array

	xoff = width / 3; // offsets to "center"
	yoff = height / 3;

	// walk left-to-right, top-to-bottom; it's the
	// same as the ordering in the imagedata array:

	for (y = 0; y < height; y++) {
		for (x = 0; x < width; x++) {
			imageData.data[pos++] = Math.random() * 255;
			imageData.data[pos++] = Math.random() * 255;
			imageData.data[pos++] = Math.random() * 255;
			imageData.data[pos++] = document.getElementById("slider1").value; // opaque alpha
		}
	}

	context1.putImageData(imageData, 0, 0);
	context2.drawImage(canvas, 0 ,0);
	context2.drawImage(canvas1, 0 ,0);

});

function setPixel(imageData, x, y, r, g, b, a) {
    index = (x + y * imageData.width) * 4;
    imageData.data[index+0] = r;
    imageData.data[index+1] = g;
    imageData.data[index+2] = b;
    imageData.data[index+3] = a;
}

// $(#"apply").onClick();

// function generateNoise(opacity) {
//    if ( !!!document.createElement('canvas').getContext ) {
//       return false;
//    }
 
//    var canvas = document.createElement("canvas"),
//    ctx = canvas.getContext('2d'),
//    x, y,
//    number,
//    opacity = opacity || .2;
 
//    canvas.width = 45;
//    canvas.height = 45;
 
//    for ( x = 0; x < canvas.width; x++ ) {
//       for ( y = 0; y < canvas.height; y++ ) {
//          number = Math.floor( Math.random() * 60 );
 
//          ctx.fillStyle = "rgba(" + number + "," + number + "," + number + "," + opacity + ")";
//          ctx.fillRect(x, y, 1, 1);
//       }
//    }
 
//    // document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";
// }
// generateNoise(.1); // default opacity is .2

 // function drawImage(imageObj){
 //      var canvas = document.getElementById("myCanvas");
 //      var context = canvas.getContext("2d");
 //      context.save();
 //      context.translate(100,0);

 //      var destX = 1;
 //      var destY = 1;

 //      context.drawImage(imageObj, destX, destY);

 //      var imageData = context.getImageData(0, 0, canvas.width, canvas.height);
 //      var data = imageData.data;

 //      for (var i = 0; i < data.length; i += 4) {
 //          var red = data[i]; // red
 //          var green = data[i + 1]; // green
 //          var blue = data[i + 2]; // blue
 //          // i+3 is alpha (the fourth element)
 //      }

 //      // overwrite original image
 //      context.putImageData(imageData, 0, 0);
 // }
// if(img.src != ""){
// 	slider.style.visibility="visible";
// 	slider.addEventListener('change', function(){
// 		console.log(img.src);
// 	})
// }
