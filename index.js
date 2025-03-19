// Code your solution in this file!
function distanceFromHqInBlocks(customerStreetNumber) {
    return Math.abs(customerStreetNumber - 42)
}

function distanceFromHqInFeet(customerStreetNumber) {
    return distanceFromHqInBlocks(customerStreetNumber) * 264
}

function distanceTravelledInFeet(startBlock, destinationBlock) {
    return Math.abs(destinationBlock - startBlock) * 264
}

function calculatesFarePrice(startBlock, destinationBlock){
    // Write your code here!
    let feet = distanceTravelledInFeet(startBlock, destinationBlock);
    if (feet <= 400) {
      return 0;
    } else if ((feet > 400) && (feet <= 2000)) {
      return (feet - 400) * .02
    } else if ((feet > 2000) && (feet<=2500)) {
      return 25
    } else if (feet > 2500) {
      return  'cannot travel that far'
    }
  }

console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(50));
console.log(distanceTravelledInFeet(0, 10));
console.log(calculatesFarePrice(0, 5));