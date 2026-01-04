// for loops nested
// a loop inside a loop is called nested loop
var outerloop = ["karachi","islamabad","lahore"]
var innerloop = [1,2,3,4,5,6,7,8,9,10]
for(i=0; i<outerloop.length; i++){
    for(j=0; j<innerloop.length; j++){
        console.log([i,j])
    }
}