function solve(steps, footLength, studentSpeed) {

    //•	The first is the number of steps the student takes from their home to the university
    //•	Тhe second number is the length of the student's footprint in meters
    //•	Тhe third number is the student speed in km/h

    // Every 500 meters the student rests and takes a 1 minute break.

    let result = ((steps * footLength) / 1000);
    
    console.log(result);    

}

solve(4000, 0.60, 5);

solve(2564, 0.70, 5.5);