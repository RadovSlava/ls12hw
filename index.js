var arr = ["HTML", 11, "JavaScript", 2, "CSS", 23, 12]

arr.push(-1)

arr.unshift(1000)

arr.push("last array element")

arr.splice(3, 1);

var numberArr = arr.filter(function(number){return number >-5;})

var arr2 = numberArr.map (function(elem){return elem*elem;})

Math.max.apply(null, arr2)

