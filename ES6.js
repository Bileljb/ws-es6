// 1 Arrow function

// function Sum (a,b){
//     if(a>5)
//     return a+b 
//     else return 0
//   }
//   console.log(Sum(6,5))
  
  
//   var Summ=(a,b)=>{
//      if(a>5)
//     return a+b 
//     else return 0
//   }
//   console.log(Summ(8,5))

// manajm na7i les parentheses kan mayabda andi parametre wa7ed 

// var greet=name=>"Hello " +name

// console.log(greet('ali'))


// 2.ternary operator 

// if (age>10) return "adult" else return 'enfant'
// let Greetingg = age => age>10 ? "adult" :  age<5 ?" bébé" :"enfant"
// console.log(Greetingg(11))


//3. template literlats

// var name="ali"
// var age=25

// console.log("my name is "+name+" and my age is "+age)
// console.log(`my name is ${name} and my age is ${age}`)


// 4 map   t3awedh boucle for taaml nafs traitement alaa kol elemnt

// arr.map(  (el,i,arr)=> )
// el element arr[i]
// i indice
// arr tableau
// var arr=[2,14,78,95]

// // for (let i=0; i<arr.length;i++){

// //   arr[i]=arr[i]+2
// // }
// // console.log(arr)


// console.log(arr.map(el=> el+2 ))


// 3)filter
// var arr=[2,14,78,95]
// var newArr=[]
// for (let i=0; i<arr.length; i++){
// if(arr[i]>14){
//   newArr.push(arr[i])
// }
// }
// console.log(newArr)
// console.log(arr.filter(el=>  el>14  ))


// if in map 
// console.log(arr.map(el=>el>14? true: false))




// reduce
//var arr=[17,14,78,95]
// var sum=8
// for (let i=0; i<arr.length; i++){
// sum+=arr[i]
// }
// console.log(sum)
// console.log(arr.reduce((a,c)=> a+c )) aadiya
// console.log(arr.reduce((a,c,i)=> i>=2 ? a+c :0 ))

// for each
// var arr=[17,14,78,95]

// const x= arr.map(el=>el+2)
// console.log(x)
// console.log(arr.forEach(el=>  console.log(el+2)))


// find and filter 

// var arr= [1,2,5,5]
// console.log(arr.filter(el=> el==5 )) filter traja3 tableau
// console.log(arr.find(el=>el==5))  find traja3 awel element yo3rodhha


//sort
// var arrr=["ali","Ab",2,"ahmed","charef"]
// console.log(arrr.sort())



// var arr= [2,5,1,7,0,11]
// console.log(arr.sort((a,b)=>a-b))



// var str='hello world world'

// console.log(str.split(' '))

// console.log(str.split('').filter(el=> el!="a" && el!="e" && el!="o" && el!='i' && el!='u' ).join(''))


// str.split('') trodlek chaine de caractere tableau
//arr.join()  trodlek tableau chaine de caractere