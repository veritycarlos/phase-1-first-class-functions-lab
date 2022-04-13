const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = drivers => drivers.slice(0,2);

const returnLastTwoDrivers = drivers => drivers.slice(-2);

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = numOne => function(fare) {
    return fare * numOne;
}

const fareDoubler = function(fare) {
    return fare*2;
}


const fareTripler = function(fare) {
    return fare*3;
}

const selectDifferentDrivers = (drivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(drivers);
}