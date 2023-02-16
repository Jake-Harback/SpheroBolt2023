//programmer Team: Andrew Krusniak & Jacob Harback 
//Date:2.6.2023
//project:sphero Bolt 


//blue 

async function blue() {
    await scrollMatrixText('start', { r: 66, g: 56, b: 255 }, 30, true)
    await roll(0, 70, 2);
    setHeading(90);
    setMainLed({r: 0, g: 0, b: 255 });  
    
} 

//sound 1 

/**
 *
*/
async function soundnumber1(){
  await roll(90, 69, 1);
  await delay(3);
  await roll(180, 65, 1);
  await spin(42, 2);
  await Sound.Effects.Fireworks.play(true) 
}

//red 

/**
 *
*/
async function Change to RED() {
await roll(217.5, 56.75, 1);
await delay(3);
await roll(132.5, 41, 1.3);
setMainLed({ r: 255, g: 0, b: 0})
await delay(3);
}




async function startProgram() { 
	await blue();
	await firstSound(); 
	
}  
