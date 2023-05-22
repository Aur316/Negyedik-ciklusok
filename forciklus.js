

/////////////////// FOR CIKLUS

//szamok 1-tol 10-ig
// let i
// for (i=1; i<=10; i++)
// {
//     console.log(i)
// }

// szamok 1-tol 10-ig paros

// let i;

// for (i=1; i<=10; i++)
// {
//     if ((i%2)<1)
//     {
//         console.log(i)
//     }
// }

// szamok 1-tol 10-ig paratlanok

// let i;

// for (i=1; i<=10; i++)
// {
//     if ((i%2)!=0)
//     {
//         console.log(i)
//     }
// }

//  Számok 30-től 100-ig, hetesével:

// let i;

// for (i=30; i<101; i+=7)
// {
//     console.log(i)
// }

//  Számok 112-től 2-ig, tizenegyesével lefelé:

// let i;

// for (i=112; i>=2; i-=11)
// {
//     console.log(i)
// }

// Számok -90-től 90-ig, tizenötösével

// let i;

// for (i=-90; i<=90; i+=15)
// {
// console.log(i)
// }

//  Azok a kétjegyű számok, amelyek számjegyeinek összege 10:

// let i;
// // let a= Math.floor(i/10)
// // let b = i%10;
// // let c = a+b;
// // const t=10;

// // console.log("Ez a szam:",i)
// // console.log("Ez az elso szamjegy:",a)
// // console.log("Ez a masodik szamjegy:", b)
// // console.log("Ez a ket szamjegy osszege:",c)

// for (i=10; i<100; i++)
// {
//     let a = Math.floor(i/10)
//     let b = i%10;
//     let c = a+b;
//     const t =10;

// // // console.log("Ez a szam:",i)
// // // console.log("Ez az elso szamjegy:",a)
// // // console.log("Ez a masodik szamjegy:", b)
// // // console.log("Ez a ket szamjegy osszege:",c)
// // // console.log("------------")
  
//     if (c===t)
//     {
//         console.log(i)
//     }
// }

//  Pozitív egész számpárok, ahol a két szám összege 18:

// let i;
// let c;

// for (i=1; i<100; i++)
// {
//     for (c=1; c<100; c++)
//     {
//         if (c+i===18)
//         {
//             console.log(i,"-",c)
//         }
//     }
// }

// A 8-as szorzótábla:

// let i;
// const b=8;

// for(i=1; i<=20; i++)
// {
//     let c=i*b;
//     console.log(i,"*",b,"=",c)
// }

// Az első 15 pozitív egész szám négyzete:

// let i;


// for(i=1; i<=15; i++)
// {
//     let b=i*i
//     console.log("A(z)", i,"negyzete: ", b)
// }

//  A elkövetkezendő nem szökőévek 2041-ig:

// let i;

// for(i=2023; i<=2041; i++)
// {
//     if(i%4===0)
//     {
        
//     } else {
//         console.log(i)
//     }
// }

//  A  144  összes osztója:

// let i;
// console.log("A 104 összes osztója: ")
// for(i=1; i<=104; i++)
// { 
//     const a=104
//     if (a%i===0)
//     {
//         console.log(i)
//     }
// }

// A 2 hatványai:

// let i;

// for(i=0; i<20; i++)
// {   
//     const k =2
//     let b=2
//     b=b**i;
//     console.log("A", k, i,"-ik hatvanya",b)
// }

//  Mindig 1-gyel nagyobb különbség:

// let i;
// let b;

// for (i=1; i<100; i++)
// {
//    for (b=1; b<10; b++)
//    {
//     i=i+b;
//     console.log(i)
//    }
// }

//  Az előző két szám összege:



// let num1 = 1;
// let num2 = 2;


// console.log(num1);
// console.log(num2);


// for (let i = 3; i <= 10; i++) {
//   let sum = num1 + num2;
//   console.log(sum);

//   num1 = num2;
//   num2 = sum;
// }

//  9 időpont óránként, reggel negyed 9-től:

// let i;
// const b=15;

// for (i=8; i<=16; i++ )
// {
//     console.log(i, ":", b);
// }

//  Időpontok 20 percenként, délelőtt:

// let i;
// let b;

// for (i=8; i<=12; i++)
// {
//     for (b=0; b<=59; b++)
//     {
//         if (b%20!=0)
//         {
           
//         } else 
//         {   if (b==0)
//             {
//                 b="00"
//             }
//             console.log(i,":",b);
//         }
        
//     }
// }

// // Napi menetrend, 50 percenként induló járatokkal:


// //let i;
// //let b;

// for (i=8; i<=10; i++)
// {
//     for (b=0; b<=59; b=b++)
//     {
//         if (b>=50)
//         {
//            // console.log(i, ":",b) 
//             i=i+1           
//         }
        
//     }
// }
