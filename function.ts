function addTwo(num:number){
    return num + 2;
}
console.log(addTwo(10));
//==========================

function add(num:any){
    return num + 2;
}
console.log(add("10"));
//==========================

function addOne(str:String){
    return str + "World";
    str.toUpperCase();
}
console.log(addOne("Hello"));
//==========================

function signUpUser(name:string,email:string,isPaid:boolean){}
signUpUser("Thendral","elanthandral2004@gmail.com",true)

//==========================

let loginUser=function (name:string,email:string,isPaid:boolean=false): void{
  console.log("Login User is  "+ name)
  console.log("Email: "+ email)
  console.log("Is Paid User: "+ isPaid)
}
loginUser("Then","12345@#gmail.com",false)

//===============================
function getValue(myVal:number):boolean{
    if(myVal>5){
        return true;
    }
    return false;
}

//==============================
const getHello =(s:string):string=>{
    return "hello"
}

//=============================
const heros=["thor","spiderman","ironman"]
//const hero =[1,2,3]

heros.map((hero):string =>{//(hero:string) if i declare string string only accept
    return `hero is ${hero}`
})

//===============================
function consoleError(errmsg:string):void{
    console.log(errmsg);
}

function handleError(errmsg:string):never{
    throw new Error(errmsg);
}

export{}