// dataType 

let id:number = 10;
let username :string = 'Chhotu'
let isActive : boolean = true
let other:any =[25, 'dfds']

//console.log("id", id, 'username', username, 'isActive', isActive, 'other', other);

//array
let user:number [] = [10,20,50,30,40,20,20];
// console.log('user array', typeof(user)); // array

//tuple
let person:[number,string] = [1, 'chhotu'];
// console.log("person", typeof(person)); // obj

//union
let testingId :string | number = 5
// console.log("testingId", typeof(testingId));

//enum 
enum Direction {
  up,
  down,
  left,
  right
}
// console.log("direction", typeof(Direction));
/* object */
type User = {
  id : any,
  name : string,
  password : string
}

const userObj : User = {
  id: '1',
  name: 'chhotu',
  password: 'sjdfkldj'
}

// console.log(userObj.password);

/* function */
function addTwo (x:number, y:number): number{
  return x+y;
}
// console.log(addTwo(5.2,2));

// void return type
function messagePrint(message : number | string): void{
  console.log("message", message);
}

// messagePrint(525);

/* interface */

interface IUserInterface {
  id:number,
  name : string
  roll : string
}

const user1 : IUserInterface ={
  id : 5,
  name : "chhotu",
  roll : '2365'
}
// console.log('user1 ', user1);
/* Difference between interface and object is in onject you can give the privellage (type) of another vatiable but in interface can't. */
type Opoint = number
const p1 : Opoint = 52
// console.log(typeof(p1));

interface IPoint{
  x:number,
  y:number
} 
const p2: IPoint = {
  x : 5,
  y : 10
}
// console.log("p2", p2.x);

// if you don't have any value then you bypass them
interface IUserInterface1 {
  id : number
  name :string
  age ?: number // age is optional
}

/*using interface create function */
interface MathFuc {
  (x: number, y:number): number
}
const add : MathFuc = (x: number, y:number) : number => x+y;
console.log("addition", add);

/* async function */
async function getFavoriteNumber(): Promise<number> {
  return 26;
}






