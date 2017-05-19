var myCanvas;

function setup() {
	myCanvas = createCanvas(windowWidth, windowHeight);
	myCanvas.parent('sketch-holder');	
}

function draw() {
	fill(random(0,1), random(0,1), 250, 10);
	text("Imagine that you have before you a flagon of wine. You may choose your own favourite vintage for this imaginary demonstration, so that it be a deep shimmering crimson in colour. You have two goblets before you. One is of solid gold, wrought in the most exquisite patterns. The other is of crystal-clear glass, thin as a bubble, and as transparent. Pour and drink; and according to your choice of goblet, I shall know whether or not you are a connoisseur of wine. For if you have no feelings about wine one way or the other, you will want the sensation of drinking the stuff out of a vessel that may have cost thousands of pounds; but if you are a member of that vanishing tribe, the amateurs of fine vintages, you will choose the crystal, because everything about it is calculated to reveal rather than hide the beautiful thing which it was meant to contain. Bear with me <p>in this long-winded and fragrant metaphor; for you will find that almost all the virtues of the perfect wine-glass have a parallel in typography. There is the long, thin stem that obviates fingerprints on the bowl. Why? Because no cloud must come between your eyes and the fiery heart of the liquid. Are not the margins on book pages similarly meant to obviate the necessity of fingering the type-page? Again: the glass is colourless or at the most only faintly tinged in the bowl, because the connoisseur judges wine partly by its colour and is impatient of anything that alters it. There are a thousand mannerisms in typography that are as impudent and arbitrary as putting port in tumblers of red or green glass! When a goblet has a base that looks too small for security, it does not matter how cleverly it is weighted; you feel nervous lest it", mouseX-width/2, mouseY);

}

