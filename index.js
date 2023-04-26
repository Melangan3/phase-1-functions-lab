function distanceFromHqInBlocks(someValue){
    if (someValue<42){
        return 42-someValue
    } else {
return someValue-42}};

function distanceFromHqInFeet(someValue) {
let distance= distanceFromHqInBlocks(someValue)*264
return distance}

function distanceTravelledInFeet(start, destination){
if (destination < start) {
    return (start-destination) *264}
    else {
        return (destination - start) *264}
}

function calculatesFarePrice (start, destination){
if (distanceTravelledInFeet(start, destination)<=400){
    return 0
} 
if (distanceTravelledInFeet(start, destination)>=400 && distanceTravelledInFeet(start, destination)<=2000){
    return ((distanceTravelledInFeet(start,destination)-400)*0.02)
} 
if (distanceTravelledInFeet(start, destination)>=2001 && distanceTravelledInFeet(start,destination)<=2500){
    return 25
} 
if (distanceTravelledInFeet(start, destination)>2500){
    return 'cannot travel that far'
}
console.log (start,destination)}