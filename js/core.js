var id = null;
function myMove() {
	var elem = document.getElementById("myAnimation");
	var pos = elem.offsetLeft;
	var Tmax = 0;
	var k = 1.0;                   // spring constant
	var m = 1.0;                   // mass in kg
	var xt0 = 1.0;                 // initial position
	var t0 = 0.0;                  // initial time
	var vt0 = 0.0;                 // initial velocity
	var dt = 0.1;                  // time interval
	var xtold = xt0;               // set & print out the initial conditions
	var vtold = vt0;
	clearInterval(id);
	id = setInterval(frame, 10);
	function frame() {
		if (Tmax > 130) {
			clearInterval(id);
		} else {
			var vt = vtold + dt*(-k/m)*xtold;
			var xt = xtold + dt*vtold;
			xtold = xt;
			vtold = vt;
			Tmax += dt;
			elem.style.left = (pos + xt) + 'px';
		}
	}
}
