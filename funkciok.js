// const osszead = function(x,y)
// {
//     console.log("Az x +Y=", x+y)
// }
// let x=3;
// let y=4;
// osszead (x,y)
// osszead ("harom",4)

// const paros = function (a,b)
// {   
//     console.log("Paros szamok ",a,"-tol",b,"-ig:")
//     for (i=a; i<=b; i++)
//      {
//         if (i%2==0)
//         {   if(i===0){

//         } else {
//             console.log(i)
//         }
//         } 
//     }
// }

// paros(-50,10)





// const list1 = function (a,b)
// {   
//      let list1=[]
//     // console.log("Az elso lista elemei",a,"-tol",b,"-ig")

// for (a; a<=b; a++)
// {   
//     list1=[ ,a];
// }
//    // console.log(list1);
//     return list1;
// }

// const proba1 = list1(0,10)



// const list2 = function (a,b)
// {   
//     //console.log("A masodik lista elemei",a,"-tol",b,"-ig")
//     let list2 = []
//     while (a<=b)   
//         {
//             list2 = [...list2,a]
//             a++
// }
//     //console.log(list2)
//     return list2;
// }

// const proba2 = list2(10,20)

// const conc = function (a,b)
// {
//     let list = [...a,...b];
//     //console.log("A ket lista elemei egyutt: ",list)
//     return list;
// }


// const x =conc(proba1, proba2)

// console.log(x);

// let terulet = function (a,b) 
// {
//     //let meret = a*b
//     console.log("Terulet = ", a*b)
//     return a*b
// }
 
// let terulet2 = function (r)
// {
//     let meret2 = 3.14*r**2;
//     console.log("Terulet2 = ",meret2)
//     return  meret2
// }

// //terulet (10,10)
// //terulet2 (5)

// let osszead = function (a,b)
// {
//     let osszterulet = a+b;
//     console.log ("A ket terulet osszege: ", osszterulet)
// }

// osszead (terulet(10,10), terulet2(5))

let paros = function (a,b) {

    let list = [];
    for (a; a<=b; a++) {

        if (a%2==0) {
       // console.log("A ciklusban a parosszam: ",a);
        list = [...list,a]
        }
    }
    //console.log("A listaban a parosszam ", list)
    return list;
}

//paros (0,12)

let paratlan = function (x,y) {

    let list2 = []

    while (x<=y) {

        if (x%2!=0) {

           // console.log("A ciklusban a paratlan szam: ", x)
            list2 = [...list2,x]
        }
        x++;
    }
    //console.log("A listaban a paratlan szam: ", list2)
    return list2;
}

//paratlan (0,10)

let all = function (a,b) {

        let list3 = [...a,...b]
        //console.log ("A ket lista együtt: ", list3)
        return list3

}

//console.log(all (paros(1,6),paratlan(3,9)))


let listall = [all (paros(1,6),paratlan(3,9))]

// listall.forEach((a,b,c) => {

//     console.log(c)
    
// });

console.log("...............")

let people = ["Bela","Janos","maci", "Karoly","Laci"]

people.forEach((a,b,c)=>{
   // console.log("A lista elemei: ",a)
   // console.log ("A lista indexei: ",b)
   console.log("",c)
})