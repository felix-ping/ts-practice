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
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
