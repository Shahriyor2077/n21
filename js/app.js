// const obj1={}
// console.log(obj1);

// const fruits=new Object()
// console.log(fruits);
// console.log(typeof fruits);

// const mevalar={
//     nomi: "Olma", //property key value
//     narxi: 15000,
//     rangi: "qizil",
//     "shirin mevalar": true,
//     2: "ikki",
//     2: "ikki str"
// };
// console.log(mevalar);
// console.log(mevalar.nomi);
// console.log(mevalar["nomi"]);
// console.log(mevalar["shirin mevalar"]);
// mevalar.narxi=1000
// console.log(mevalar);
// mevalar.madeIn="UZB"
// delete mevalar[2]
// delete mevalar.rangi,
// delete mevalar[true]
// console.log(mevalar);


// const box={
//     material: "paper",
//     color: ["white", "green", "blue"],
//     size:{
//         width: 20,
//         height: 20,
//         length: 10
//     }
// };
// console.log(box);
// console.log(box.color[1]);
// console.log(box.size.height);
// console.log(box.size);
// console.log(box?.size?.length);


// console.log(box);
// for (const key in key){
//     console.log(key);
//     console.log(box[key]);
// }




// const box = {
//   material: "paper",
//   color: ["white", "green", "blue"],
//   size: {
//     width: 20,
//     height: 20,
//     length: 10,
//   },
// };
// const quti=box
// quti.material="iron"
// console.log(box);
// console.log(box==quti);

// const box1=Object.assign({}, box)
// box1.material="wood"
// console.log(box);
// console.log(box1);
// console.log(box==box1);

// const box2={}
// Object.assign(box2, box)
// console.log(box==box2);

// const box3={...box1, ...queueMicrotask, ...box2};
// console.log(box3);



// const player={
//     name: "Abbos", 
//     number: 21, 
//     age: 22,
//     boots:["nike", "adidas"],
//     about_player: function(){  //function kalit sozini ochirib tashasa ham boladi
//         console.log(`ismi: ${this.name}, yoshi: ${this.age}`);
//     },
// };
// console.log(player);
// player.about_player()

// const new_player={...player};
// new_player.name="Abduqodir";
// new_player.age=21;
// new_player.about_player()


// const player = {
//   name: "Abbos",
//   number: 21,
//   age: 22,
//   boots: ["nike", "adidas"],
//   about_player() {
//     console.log(this);
    
//     console.log(`ismi: ${this.name}, yoshi: ${this.age}`);
//   },
//   about_player2(){
//     const inner=()=>{
//         console.log(`ismi: ${this.name}, yoshi: ${this.age}`);
//     };
//     return inner();
//   },
// };
// console.log(player);
// player.about_player();
// player.about_player2();



// const car={
//     marka: "bmw",
//     model: "m8",
//     year: 2020,
//     speed: 300,
//     color: "dark"
// }
// if ("km" in car){
//     console.log(car.km);
// }else{
//     console.log("yo'q");
// }
// function mashina(car){
//     for(const key in car){
//         if (typeof car[key]==="number"){
//             console.log(key, car[key]);
//         }
//     }
// }
// mashina(car);


// let count = 0;
// let summa = 0;
// const hodimlar={
//     salim: 21,
//     karim: 25,
//     aziz: 32,
// };
// let count = 0;
// let summa = 0;
// for(const i in hodimlar){
//     count++
//     summa+=hodimlar[i]
// }
// console.log(Math.floor(summa/count));


// const user={
//     last_name: "Komilov",
//     first_name: "Zafar",
//     getFirstName(){
//         return this.first_name;
//     },
//     setFirstName(newName){
//         this.first_name=newName;
//     },
//     get firstName(){
//         return this.firstName;
//     },
//     set firstName(newName){
//         this.first_name=newName;
//     },
// };
// console.log(user);
// user.setFirstName("Zafarjon");
// user.firstName="Zafarella";
// console.log(user.getFirstName());
// console.log(user.first_name);


const product={
    nomi: "olma",
    miqdori: 5,
    price: 10000,
    productInfo(){
        return this;
    },
    set setPrice(newPrice){
        this.price=newPrice
    }
}
console.log(product.productInfo());
product.setPrice=12000
console.log(product.productInfo());


