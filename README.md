# Webproject-Warmup
First project 
# C++ Eular 
#include <stdio.h>
#include <math.h>
#include <stdlib.h>

#define Tmax  50     // seconds for integration


main(argc,argv)
int argc; char *argv[];
{
  double k,m,xt0,t0,vt0,vt,xt,t,dt,xtold,vtold;
  FILE *fout, *fopen();

	fout = fopen("osc1.dat","w");

	k = 1.0;                   // spring constant
	m = 1.0;                   // mass in kg
	xt0 = 1.0;                 // initial position
	t0 = 0.0;                  // initial time
	vt0 = 0.0;                 // initial velocity
	dt = 0.001;		   // time interval

	xtold = xt0;               // set & print out the initial conditions
	vtold = vt0;
	t = t0;
	fprintf(fout,"%e\t%e\t%e\n",t, xt0,vt0);

/* Here is the loop that propagates the motion:
	vt is for the new time, vtold the previous step time;
	xt is the new position, xtold the previous;
	after each step is calculated, the old is set
	to the new, and the cycle is repeated  */

	for(t=t0; t<Tmax; t+= dt){
		vt = vtold + dt*(-k/m)*xtold;
		xt = xtold + dt*vtold;
		xtold = xt;
		vtold = vt;
		fprintf(fout,"%e\t%e\t%e\n", t,xt,vt);
	   }


}
