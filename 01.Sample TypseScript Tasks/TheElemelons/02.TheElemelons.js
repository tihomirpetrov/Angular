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
var Melon = /** @class */ (function () {
    function Melon(weight, melonSort) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
    return Melon;
}());
var Watermelon = /** @class */ (function (_super) {
    __extends(Watermelon, _super);
    function Watermelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.text = "Element: {Water/Fire/Earth/Air}\n Sort: " + melonSort + "\n Element Index: " + _this.elementIndex;
        return _this;
    }
    return Watermelon;
}(Melon));
var Firemelon = /** @class */ (function (_super) {
    __extends(Firemelon, _super);
    function Firemelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.text = "Element: {Water/Fire/Earth/Air}\n Sort: " + melonSort + "\n Element Index: " + _this.elementIndex;
        return _this;
    }
    return Firemelon;
}(Melon));
var Earthmelon = /** @class */ (function (_super) {
    __extends(Earthmelon, _super);
    function Earthmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.text = "Element: {Water/Fire/Earth/Air}\n Sort: " + melonSort + "\n Element Index: " + _this.elementIndex;
        return _this;
    }
    return Earthmelon;
}(Melon));
var Airmelon = /** @class */ (function (_super) {
    __extends(Airmelon, _super);
    function Airmelon(weight, melonSort) {
        var _this = _super.call(this, weight, melonSort) || this;
        _this.elementIndex = weight * melonSort.length;
        _this.text = "Element: {Water/Fire/Earth/Air}\n Sort: " + melonSort + "\n Element Index: " + _this.elementIndex;
        return _this;
    }
    return Airmelon;
}(Melon));
