// dataType 
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let id = 10;
let username = 'Chhotu';
let isActive = true;
let other = [25, 'dfds'];
//console.log("id", id, 'username', username, 'isActive', isActive, 'other', other);
//array
let user = [10, 20, 50, 30, 40, 20, 20];
// console.log('user array', typeof(user)); // array
//tuple
let person = [1, 'chhotu'];
// console.log("person", typeof(person)); // obj
//union
let testingId = 5;
// console.log("testingId", typeof(testingId));
//enum 
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 0] = "up";
    Direction[Direction["down"] = 1] = "down";
    Direction[Direction["left"] = 2] = "left";
    Direction[Direction["right"] = 3] = "right";
})(Direction || (Direction = {}));
const userObj = {
    id: '1',
    name: 'chhotu',
    password: 'sjdfkldj'
};
// console.log(userObj.password);
/* function */
function addTwo(x, y) {
    return x + y;
}
// console.log(addTwo(5.2,2));
// void return type
function messagePrint(message) {
    console.log("message", message);
}
const user1 = {
    id: 5,
    name: "chhotu",
    roll: '2365'
};
const p1 = 52;
const p2 = {
    x: 5,
    y: 10
};
const add = (x, y) => x + y;
console.log("addition", add);
/* async function */
function getFavoriteNumber() {
    return __awaiter(this, void 0, void 0, function* () {
        return 26;
    });
}
export {};
//# sourceMappingURL=index.js.map