// json - javascript object notation
// json is a lightweight data interchange format that is easy to read and write
// it is a string of text that represents a collection of name/value pairs or an ordered list of
// values
//JSON.stringify()
//JSON.parse()
// let obj = {name:"shashi"}
// let string_data = JSON.stringify(obj)
// console.log(string_data)

// let obj = {name:"shashi", age: 30, occupation: "Developer"};
// let string_data = JSON.stringify(obj, null, 2);
// console.log(string_data);

//intermdiate data
//xml-> xtensible markup language
//xml is a markup language that defines a set of rules for encoding documents in a format that is
// yml-> yet another markup language
//bson-> binary js object notation



let obj={
    name:"vijay",
    age:"100",   
}

obj.gender="male"
let str_data=JSON.stringify(obj)
localStorage.setItem("user1",str_data)
console.log(str_data)

let rec_data=JSON.parse(str_data)
console.log(rec_data)

let obj2=[{
    name:"lucky",
    age:200
}]

let sl=Object.seal(obj2)
obj2.gender="male"
let s_data=JSON.stringify(obj2)
sessionStorage.setItem("user2",s_data)
console.log(s_data)
console.log(obj2[0])

let obj3=[{
    name:"surya",
    age:3000
}]

console.log(obj3)
console.log(obj3.length)
let s3_data=JSON.stringify(obj3)
sessionStorage.setItem("user3",s3_data)
console.log(s3_data)


let re_data=JSON.parse(s3_data)
console.log(re_data)

let obj4=[{
    name:"syam",
    age:300
},{
    name:"sanju",
    age:400
},
{
    name:"sesi",
    age:500
}]

let c=0
for(i=0;i<obj4.length;i++){
    sessionStorage.setItem(`user${i}`,JSON.stringify(obj4[i]))
    sessionStorage.setItem("count",c=c+1)
}

