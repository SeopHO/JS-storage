// let user={
//     name:"john",
//     "haha":30,
    
// }

// let k = name;
// console.log(user[name]); //no
// console.log(user.name);  //yes

// console.log(user.k); //no
// console.log(user[k]); //no

// let fruit = prompt();
// let bag={};

// bag[fruit]=true;

// alert(bag.apple); //yes


//!!이런식으로도 만들수 있음!!

// let fName,SName,aage;
// function makeUser(first_name,second_name,age,sex="male")
// {
//     return{
//         // first_name: first_name,
//         // second_name: second_name,
//         // age:age,
//         // sex:sex,

//         ////SAME↑↓
//         first_name,
//         second_name,
//         age,
//         sex,
//     };
// }

// function question()
// {
//     fName=prompt("firstName?");
//     SName=prompt("secondName?");
//     aage=prompt("age?");
// }

// question();

// let user=makeUser(fName,SName,aage);

// console.log(user.first_name,user.second_name,user.age,user.sex);

// let user={name:"seop"};

// alert('name' in user); //true
// alert(name in user); //false.



// let codes = {
//     "+49": "독일",
//     "+41": "스위스",
//     "+44": "영국",
//     // ..,
//     "+1": "미국"
//   };
  
//   for (let code in codes) {
//     alert( +code ); // 49, 41, 44, 1
//   }
