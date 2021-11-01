//Ticker Animation

var ticker = document.getElementsByClassName("cta-ticker");

for (var e of ticker) {
	startTicker(e, 15);
}

function startTicker(e, speed) {
	//speed - higher value is slower
	var childWidth = getTextWidth(e.firstElementChild.innerHTML, getCanvasFontSize(e.firstElementChild)) + 31;
	var pos = 0;
	var interval = setInterval(() => {
		if (pos > childWidth) {
			pos = 0;
		} else {
			pos++;
		}
		e.style.top = -pos + "px";
	}, speed);
}

//Calculate Text Width
//https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript

function getTextWidth(text, font) {
	const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
	const context = canvas.getContext("2d");
	context.font = font;
	const metrics = context.measureText(text);
	return metrics.width;
}

function getCssStyle(element, prop) {
	return window.getComputedStyle(element, null).getPropertyValue(prop);
}

function getCanvasFontSize(el = document.body) {
	const fontWeight = getCssStyle(el, "font-weight") || "normal";
	const fontSize = getCssStyle(el, "font-size") || "16px";
	const fontFamily = getCssStyle(el, "font-family") || "Times New Roman";
	return `${fontWeight} ${fontSize} ${fontFamily}`;
}
