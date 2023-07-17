function findMin(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function calcMean(arr) {
    return calcSum(arr) / arr.length;
}

function calcStdDev(arr) {
    let mean = calcMean(arr);
    let n = arr.length;
    let summation = 0;

    for (let i = 0; i < n; i++) {
        summation += ((arr[i] - mean) * (arr[i] - mean));
    }

    return Math.sqrt(summation / n);
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function calcSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}



function calcMedian(arr) {

    let lOver2 = arr.length / 2;

    return (arr.length % 2 === 0) ? //two lines under
        ((arr[lOver2] + arr[lOver2 - 1]) / 2) :
        arr[Math.floor(lOver2)];
}

function calcVariance(arr) {
    let s = calcStdDev(arr);
    return s * s;
}

function findMode(arr) {
    let freq = {};
    let maxCount = 0;
    let mode = [];

    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) {
            maxCount = freq[num];
        }
    }

    for (let num in freq) {
        if (freq.hasOwnProperty(num)) {
            if (freq[num] === maxCount) {
                mode.push(parseInt(num));
            }
        }
    }

    return mode;
}

function performStatistics() {
    //prevent auto refresh
    event.preventDefault();

    //get input
    let input = document.getElementById("input").value;

    //convert input to int list
    let inputArr = input.split(" ");
    inputArr = inputArr.map(function(str) {
        return parseInt(str, 10);
    });

    //sort array
    inputArr = inputArr.sort(function(a,b){
        return a-b;
    });

    //remove all NaN from inputArr caused by spacing issues
    inputArr = inputArr.filter((value) => !Number.isNaN(value));

    //display statistics
    document.getElementById("min").value = findMin(inputArr);
    document.getElementById("max").value = findMax(inputArr);
    document.getElementById("mean").value = calcMean(inputArr);
    document.getElementById("sum").value = calcSum(inputArr);
    document.getElementById("median").value = calcMedian(inputArr);
    document.getElementById("mode").value = findMode(inputArr).join(" ");
    document.getElementById("stDiv").value = calcStdDev(inputArr);
    document.getElementById("var").value = calcVariance(inputArr);
}