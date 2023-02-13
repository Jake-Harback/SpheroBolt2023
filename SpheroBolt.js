//Team: Jake Harback, Andrew Krusniak 
//Date: 2.13.2023
//Project: Sphero Bolt Maze 

async function startProgram() { 
	await scrollMatrixText('start', { r: 66, g: 56, b: 255 }, 30, true)
	setSpeed(80); 
	await delay (2); 
	setSpeed(0); 
	await roll((getHeading() + 90), 60, 0); 
	setMainLed({r: 0, g: 0, b: 255 }); 




