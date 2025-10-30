//const User={
  //  name:"Thendral",
    //email:"thendral@gmail.com",
    //isAvtive:true,
//}
//===========================
//function createUser({ name, isPaid }: { name: string; isPaid: boolean }){}
//let newUser={name:"Thendral",isPaid:false, email:"elanthandral2004@#gmail.com"}

//createUser(newUser)

//==============================
//function createCourse():{name:string,price:number}{
//  return {name:"rectjs",price:999}
//}

type User1={
    name:string;
    email:string;
    isActive:boolean;
}


function createUser(user:User1){
   return {name:"",email:"",isActive:true}
}
createUser({name:"",email:"",isActive: true})

//===========================
type User={
  readonly _id:string;
  name:string;
  email:string;
  isActive:boolean;
  creditcardNumber?:number
}
 let  myUser:User={
  _id:"12345",
  name:"Thendral",
  email:"elanthandral2004",
  isActive:false
 }

 type cardNumber={
  cardnumber:string
 }
 type cardDate={
  cardDate:string
 }
 type cardDetails=cardNumber & cardDate&{
  cvv:number,
 }
 

 myUser.email="abc2004@gmail.com"
 //myUser._id="abc"




export{} 