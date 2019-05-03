var a = function (xx) { return xx; };
function getLength(something) {
    if (something.length) {
        return something.length;
    }
    else {
        return something.toString().length;
    }
}
var xcatliu;
xcatliu[0] = 'XcaLiu';
xcatliu[1] = 25;
xcatliu.push('http://xcatliu.com/');
var Week;
(function (Week) {
    Week[Week["Sun"] = 0] = "Sun";
    Week[Week["Mon"] = 1] = "Mon";
    Week[Week["Tue"] = 2] = "Tue";
    Week[Week["Wed"] = 3] = "Wed";
    Week[Week["Thu"] = 4] = "Thu";
    Week[Week["Fri"] = 5] = "Fri";
    Week[Week["Sat"] = 6] = "Sat";
})(Week || (Week = {}));
console.log(Week[0] === 'Sun');
var directions = [0 /* Up */, 3 /* Right */];
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animal;
}());
var asd = new Animal('Jack');
console.log(asd.sayHi());
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.alert = function () {
        'xxx';
    };
    Car.prototype.lightOn = function () {
        console.log('light on');
    };
    Car.prototype.lightOff = function () {
        console.log('light off');
    };
    return Car;
}());
var mySearch;
mySearch = function (source, subString) {
    return source.search(subString) !== -1;
};
mySearch('a', '1');
