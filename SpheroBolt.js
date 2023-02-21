//programmer Team:Andrew Krusniak Jacob Harback
//Date:2.6.2023
//project:sphero Bolt




async function CheckpointBLUE() {
  await scrollMatrixText('START', { r: 255, g: 255, b: 255 }, 30, true);
  await roll(0, 78.5, 2);
  await spin(90, 2.5);
  setMainLed({ r: 0, g: 0, b: 255 })
}


/**
 *
*/
async function CheckpointNoise_1(){
  await roll(90, 64.5, 1.5);
  await delay(2);
  await roll(180, 65, 1);
  await spin(42.5, 2.5);
  await Sound.Effects.Fireworks.play();
}


/**
 *
*/
async function CheckpointRED() {
await roll(217.5, 49.5, 1.5);
await delay(2);
await roll(132.5, 47.5, 1);
setMainLed({ r: 255, g: 0, b: 0})
await delay(2);
}


/**
 *
*/
async function CheckpointNoise_2() {
await roll(42.5, 48.5, 1.5);
await delay(1.5);
await roll(130, 33.5, 1.5);
await Sound.Effects.Thunder.play();
}


/**
 *
*/
async function CheckpointGREEN() {
await delay(1.5);
await roll(180, 42.5, 1);
await delay(1.5);
await roll(89.5, 41, 1.1);
setMainLed({ r: 0, g: 255, b: 0})
}


/**
 *
*/
async function CheckpointNoise_3() {
await roll(89.5, 41, 1.1);
await delay(2);
await roll(0, 45, 1.5);
await delay(2);
await roll(315, 45, 1.25);
await Sound.Mechanical.TruckHorn.play();
await delay(2);
}


/**
 *
*/
async function startProgram() {
await CheckpointBLUE(); // Calls CheckpointBLUE
await CheckpointNoise_1();
await CheckpointRED();
await CheckpointNoise_2();
await CheckpointGREEN();
await CheckpointNoise_3();
}