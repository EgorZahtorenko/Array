function getRandomNumber(from, to) {
    return Math.round(from + Math.random()*(to - from));
}


function generateArray(k) {
    var length = Math.round(Math.random() * k),
        arr = new Array(length);
    for (var i=0; i < length; i++){
        arr[i] = getRandomNumber(0, 100);
    }
    return arr;
}


function isPaitive(num) {
    return num > 0;
}


var data = generateArray(Number(prompt('Введите максимальную длину массива')));
var result = [];
for (var i = 0; i < data.length; i++){
    if (isPaitive(data[i])){
        result.push(data[i]);
    }
}
data.sort(function(a,b){return b - a});

alert(data);