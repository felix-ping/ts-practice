var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Animals = /** @class */ (function () {
    function Animals(name) {
        this.name = name;
    }
    Animals.prototype.sayHi = function () {
        return "My name is " + this.name;
    };
    return Animals;
}());
var asd = new Animals('Jack');
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
//void, never, object(非原始类型值,允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法)
//断言
var someValue = "this is a string";
var strLength = someValue.length;
function createSquare(config) {
    return;
}
//正常跳过类型检查:索引签名
var squareOptions = { colour: "red", width: 100, xxx: 'xxx' };
var mySquare2 = createSquare(squareOptions);
//用断言强行跳过检查
var mySquare = createSquare({ colour: "red", width: 100 });
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
var fn1;
fn1 = function (arg1, arg2) {
    return +arg1 + arg2;
};
fn1('zhangsan', 18);
//这里为什么要断言?
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
//箭头函数
var myAdd = function (x, y) { return x + y; };
//剩余参数
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
var result;
result = function plus(arg1, arg2) {
    return arg1 <= arg2 ? arg2 : arg1;
};
result(1, 2);
var Money = /** @class */ (function () {
    function Money() {
    }
    Money.prototype.change = function (val) {
        return val;
    };
    return Money;
}());
var earning = new Money();
