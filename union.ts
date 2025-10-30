 let score:number | string=33
 score=44
 score="55"
 //===============
 type User={
    name:string;
    id:number
 }

 type Admin={
    username:string;
    id:number
 }

 let thendral:User | Admin={name:"thara",id:334}
 thendral={username:"Thara",id:334}

 getDbId(3)
 getDbId("3")

 //function getDbId(id:number | string){
    //making some api calls
  //  console.log(`DB id is :${id}`)
 //}

 function getDbId(id:number |string){//id is string only
    if(typeof id==="string"){//if give write a number it will cause error
        id.toLowerCase()
    }
 }

 //=======================
 const data:number[]=[1,2,3,4,4]
 const data1:string[]=["1","2","3","4"]
 const data3:(string|number|boolean)[]=["1","2",3,4,true]
    //========================

let seatAllotment:"aisle" | "middle" | "window"

seatAllotment="aisle"
seatAllotment="middle"
seatAllotment="window"


 export{}