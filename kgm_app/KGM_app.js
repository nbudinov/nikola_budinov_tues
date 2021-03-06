var eap = document.getElementById("eap");
var vid = document.getElementById("song1");
var slider = document.getElementById("slider1");
var linkdl = document.getElementById("download");
var canvas = document.getElementById("myCanvas");
var canvas1 = document.getElementById("urCanvas");
var canvas2 = document.getElementById("ourCanvas");
var context = canvas.getContext("2d");
var context1 = canvas1.getContext("2d");
var context2 = canvas2.getContext("2d");
var img = new Image();
slider.style.visibility="hidden";
linkdl.style.visibility="hidden";

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

		slider.style.visibility = "visible";
		linkdl.style.visibility = "visible";

		img.onload = function() {
			canvas.width = canvas1.width = canvas2.width = img.width;
			canvas.height = canvas1.height = canvas2.height = img.height;
		    context.drawImage(img, 0, 0);
		    context1.drawImage(img, 0, 0);
		    context1.save();

		}
    }
}

$("#file-input").change(function(){
    readURL(this);
});

var e = document.getElementById("options");
$("#slider1").change(function(){
	width = canvas1.width;
	height = canvas1.height;

	imageData = context1.createImageData(width, height);

	pos = 0;

	var strUser = e.options[e.selectedIndex].value;
	console.log(strUser)

	for (y = 0; y < height; y++) {
		for (x = 0; x < width; x++) {

			var rand = Math.random() * 255;

			if(strUser == 2){
				imageData.data[pos++] = rand;
				imageData.data[pos++] = rand;
				imageData.data[pos++] = rand;
			}
			else{
				imageData.data[pos++] = Math.random() * 255;
				imageData.data[pos++] = Math.random() * 255;
				imageData.data[pos++] = Math.random() * 255;
			}

			imageData.data[pos++] = document.getElementById("slider1").value;

		}
	}

	context1.putImageData(imageData, 0, 0);
	context2.drawImage(canvas, 0 ,0);
	context2.drawImage(canvas1, 0 ,0);
	context1.restore();
});

function downloadCanvas(link, canvasId, filename) {
    linkdl.href = document.getElementById(canvasId).toDataURL();
    linkdl.download = filename;
}

document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'ourCanvas', 'test.png');
}, false);

