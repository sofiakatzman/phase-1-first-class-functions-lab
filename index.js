const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fareMultiplier){
    return function(rideCost){
        return rideCost * fareMultiplier
    }
    }


function fareDoubler(rideCost){
       return rideCost * 2 
        }

function fareTripler(rideCost){
    return rideCost * 3
}

function selectDifferentDrivers(arrayOfDrivers,functionEntered){
    return functionEntered(arrayOfDrivers);
}