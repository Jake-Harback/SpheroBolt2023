//Programmer: Jake Harback 
//Date: 2.6.2023
//Project: Sphero Bolt


//hello world practice program
async function startProgram() {
	await speak("Hello World", true);
	setMainLed({ r: 0, g: 0, b: 255});
	setSpeed(60);
	await delay (2);
	setSpeed(0);
}
