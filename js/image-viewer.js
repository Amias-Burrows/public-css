let div = document.createElement('div');
div.id = "close-up";
div.addEventListener('click', function() { div.remove() });

let alert = true;
div.addEventListener('load', function() { imageAlert() });

let img = document.createElement('img');
img.id = "close-up-img";

let alt = document.createElement('p');

div.appendChild('alt');
div.appendChild('img');

let body = document.getElementsByTagName('body')[0];
let image = document.querySelectorAll('img');

for (let i = 0; i < image.length; i++) {
	image[i].addEventListener('click', function() { imageViewer(this.src, this.alt)});
};

function imageViewer(src, alt) {
	if (alt != "") {
		alt.textContent = alt;
		img.src = src;
		body.appendChild(div);
		if (alert) {
			imageAlert();
			alert = false;
		};
	};
}

let box = document.createElement('div');
box.id - "alert-box";
box.classList.add("alert-show");

let content = document.createElement('p');
content.textContent = "Press anywhere on screen to close the image viewer";
box.appendChild(content);

function imageAlert() {
	body.appendChild(box);
	setTimeout(() => {
		box.remove();
	}, 5000);
}
