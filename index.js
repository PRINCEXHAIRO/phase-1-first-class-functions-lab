// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers(drivers) {
    
    return drivers.slice(0,2)
    
}
console.log(returnFirstTwoDrivers(drivers));

function returnLastTwoDrivers(drivers) { 
   
   return  drivers.slice(2)

}

console.log(returnLastTwoDrivers(drivers));

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
// Higher Order Function 
const createFareMultiplier = function(fareMult) {
    return function fareMultiplier(fare) {
        return fare*fareMult
    }
}
console.log(createFareMultiplier(2)(2))
// We reassign the function to a variable.

// With agruement 

// When we invoke the fareMultiplier we access the return inside the function.

//DOUBLE THE FARE 

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare)
}
fareDoubler(10);

const fareTripler = function(fare){ 
    return createFareMultiplier(3)(fare)
}

console.log(fareTripler(12))

function selectDifferentDrivers(array, driverSelector) { 

    return driverSelector(array)

}


console.log(selectingDifferentDrivers(drivers, returnFirstTwoDrivers));