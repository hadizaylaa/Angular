var x = "hadi";
var y = " zaylaa";
console.log(x  + y)

var a =2;
var b =3;
var c = a + b ;
console.log(c);


const express = require('express')
const app = express()
var cors = require('cors')
app.use(cors())

app.get('/', function (req, res) {
  res.send({
    CarReadMore : 'Read More !',
    CarPrice : "3500$",
    CarName  : "CAR 1",
    CarModel : 2024,    
    CarColor : [
     "Red","Blue",
    ],
    CarSeepd : "3000Km",

    CarImg :"https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600",


  CarReadMore1 : 'Read More ! !',
    CarPrice1 : "2800$",
    CarName1  : "CAR 2",
    CarModel1 : 2023,    
    CarColor1 : [
     "Red",
    ],
    CarImg1 :"https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=600",
    CarSeepd1 : "2500Km",

  CarReadMore2 : 'Read More ! ! !',
    CarPrice2 : "2300$",
    CarName2  : "CAR 3",
    CarModel2 : 2022,    
    CarColor2 : [
     "Yellow",
    ],
    CarImg2 :"https://images.pexels.com/photos/575386/pexels-photo-575386.jpeg?auto=compress&cs=tinysrgb&w=600",
    CarSeepd2 : "2000Km",
    

    motorcycleReadMore : 'Read More ! ',
    motorcyclePrice : "1200$",
    motorcycleName  : "motorcycle 1",
    motorcycleModel : 2024,    
    motorcycleColor : [
     "Red",
    ],
    motorcycleImg :"https://cdn.pixabay.com/photo/2023/07/22/04/15/motorbike-8142649_640.jpg",
    motorcycleSeepd : "2000Km",



    motorcycleReadMore1 : 'Read More ! ! ',
    motorcyclePrice1 : "1100$",
    motorcycleName1  : "motorcycle 2",
    motorcycleModel1 : 2023,    
    motorcycleColor1 : [
     "Black",
    ],
    motorcycleImg1 :"https://cdn.pixabay.com/photo/2016/11/18/21/30/bike-1836962_640.jpg",
    motorcycleSeepd1 : "1900Km",


    motorcycleReadMore2 : 'Read More ! ! ! ',
    motorcyclePrice2 : "1600$",
    motorcycleName2  : "motorcycle 3",
    motorcycleModel2 : 2022,    
    motorcycleColor2 : [
     "Blue",
    ],
    motorcycleImg2 :"https://cdn.pixabay.com/photo/2014/09/07/22/33/motorbike-438464_640.jpg",
    motorcycleSeepd2 : "2600Km",


  });
})




app.listen(3000)

    // CarColor0 : 'RED',
    
    // CarColor1  :  'YELLOW',
    
    // CarColor2  : 'BLUE',
