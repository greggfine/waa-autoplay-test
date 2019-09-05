const ctx = new(window.AudioContext || window.webkitAudioContext)();


// ctx.suspend();
// ctx.resume();


const osc = ctx.createOscillator();

osc.connect(ctx.destination);

osc.start(0);
osc.stop(3);