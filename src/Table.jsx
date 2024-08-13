import React, { useState, useEffect } from 'react'
import logo1 from "./images/Logo.svg"
import logo2 from "./images/user.svg"
import logo3 from "./images/menu.svg"
import logo7 from "./images/plus.svg"
import logo23 from "./images/elektronika.svg"
import logo24 from "./images/telefonlar.svg"
import logo25 from "./images/texnika.svg"
import logo26 from "./images/kiyimlar.svg"
import logo20 from "./images/facebook.svg"
import logo21 from "./images/instagram.svg"
import logo22 from "./images/Exclude.svg"
import logo27 from "./images/savat.svg"

import "./sass/home.scss"
import { Link, useNavigate } from 'react-router-dom'


const Table = () => {
  const navigate=useNavigate()
  const [visible, setVisible] = useState(false)

  let x = JSON.parse(localStorage.getItem("email")) || ""
  let data = JSON.parse(localStorage.getItem("data")) || ""
  const [rasm, setRasm] = useState(data.img1)
  const [sena, setSena] = useState(data.price)
  const [xotiraValue, setXotiraValue] = useState(data.xotira[0])
  const [oxotira, setOxotiraValue] = useState(data.ram[0])
  const [protsessor, setProtsessor] = useState(data.protsessor[0])
  const [table, setTable] = useState([])
  const [xususiyatlar, setXususiyatlar] = useState([])
  const [tolovlar, setTolovlar] = useState([])

  const [arr,setArr]=useState([])
  let b=JSON.parse(localStorage.getItem("cart")) || ""
  const da = () => {
    setVisible(!visible)
  }
  const modalOpen = () => {
  }
  const getImg = (img1) => {
    setRasm(img1)
  }
  const alertModal = () => {
    alert("siz ro'yhatdan  o'tmagansiz")
  }


  const selectProtsessor = (event) => {
    let value =  String(event.target.value);
    
    setProtsessor(value);
    console.log(value);
    
    
    let price = data.price;
    if (data.productName == "Macbook air 13") {
      if (value == "Intel Core i5" && oxotira==8 && xotiraValue==128 ) {
        price=200
      }
      else if(value=="Intel Core i5" && oxotira==8 && xotiraValue==256){
        price=250
      }
      else if(value=="Intel Core i5" && oxotira==8 && xotiraValue==512){
        price=280
      }
      else if(value == "Intel Core i5" && oxotira==16 && xotiraValue==128){
        price=300
      }
      else if(value == "Intel Core i5" && oxotira==16 && xotiraValue==256){
        price=350
      }
      else if(value == "Intel Core i5" && oxotira==16 && xotiraValue==512){
        price=400
      }
      else if(value == "Intel Core i5" && oxotira==24 && xotiraValue==128){
        price=450
      }
      else if(value == "Intel Core i5" && oxotira==24 && xotiraValue==256){
        price=500
      }
      else if(value == "Intel Core i5" && oxotira==24 && xotiraValue==512){
        price=550
      }
      else if(value=="Intel Core i7" && oxotira==8 && xotiraValue==128){
        price=600
      }
      else if(value=="Intel Core i7" && oxotira==8 && xotiraValue==256){
        price=650
      }
      else if(value=="Intel Core i7" && oxotira==8 && xotiraValue==512){
        price=680
      }
      else if(value == "Intel Core i7" && oxotira==16 && xotiraValue==128){
        price=700
      }
      else if(value == "Intel Core i7" && oxotira==16 && xotiraValue==256){
        price=720
      }
      else if(value == "Intel Core i7" && oxotira==16 && xotiraValue==512){
        price=730
      }
      else if(value == "Intel Core i7" && oxotira==24 && xotiraValue==128){
        price=740
      }
      else if(value == "Intel Core i7" && oxotira==24 && xotiraValue==256){
        price=750
      }
      else if(value == "Intel Core i7" && oxotira==24 && xotiraValue==512){
        price=760
      }
      else if(value=="M1 2020" && oxotira==8 && xotiraValue==128){
        price=800
      }
      else if(value=="M1 2020" && oxotira==8 && xotiraValue==256){
        price=810
      }
      else if(value=="M1 2020" && oxotira==8 && xotiraValue==512){
        price=820
      }
      else if(value == "M1 2020" && oxotira==16 && xotiraValue==128){
        price=830
      }
      else if(value == "M1 2020" && oxotira==16 && xotiraValue==256){
        price=840
      }
      else if(value == "M1 2020" && oxotira==16 && xotiraValue==512){
        price=850
      }
      else if(value == "M1 2020" && oxotira==24 && xotiraValue==128){
        price=860
      }
      else if(value == "M1 2020" && oxotira==24 && xotiraValue==256){
        price=870
      }
      else if(value == "M1 2020" && oxotira==24 && xotiraValue==512){
        price=880
      }
      else if(value=="M2 2022" && oxotira==8 && xotiraValue==128){
        price=900
      }
      else if(value=="M2 2022" && oxotira==8 && xotiraValue==256){
        price=950
      }
      else if(value=="M2 2022" && oxotira==8 && xotiraValue==512){
        price=980
      }
      else if(value == "M2 2022" && oxotira==16 && xotiraValue==128){
        price=1000
      }
      else if(value == "M2 2022" && oxotira==16 && xotiraValue==256){
        price=1100
      }
      else if(value == "M2 2022" && oxotira==16 && xotiraValue==512){
        price=1200
      }
      else if(value == "M2 2022" && oxotira==24 && xotiraValue==128){
        price=1300
      }
      else if(value == "M2 2022" && oxotira==24 && xotiraValue==256){
        price=1500
      }
      else if(value == "M2 2022" && oxotira==24 && xotiraValue==512){
        price=2000
      }
      setSena(price);
    }
    else if(data.productName=="Asus VivoBook 15"){
      if (value == "Intel Core i3" && oxotira==8 && xotiraValue==128 ) {
        price=400
      }
      else if(value=="Intel Core i3" && oxotira==8 && xotiraValue==256){
        price=410
      }
      else if(value=="Intel Core i3" && oxotira==8 && xotiraValue==512){
        price=420
      }
      else if(value == "Intel Core i3" && oxotira==16 && xotiraValue==128){
        price=430
      }
      else if(value == "Intel Core i3" && oxotira==16 && xotiraValue==256){
        price=440
      }
      else if(value == "Intel Core i3" && oxotira==16 && xotiraValue==512){
        price=450
      }
      else if(value == "Intel Core i3" && oxotira==32 && xotiraValue==128){
        price=460
      }
      else if(value == "Intel Core i3" && oxotira==32 && xotiraValue==256){
        price=470
      }
      else if(value == "Intel Core i3" && oxotira==32 && xotiraValue==512){
        price=480
      }
      else if (value == "Intel Core i5" && oxotira==8 && xotiraValue==128 ) {
        price=550
      }
      else if(value=="Intel Core i5" && oxotira==8 && xotiraValue==256){
        price=560
      }
      else if(value=="Intel Core i5" && oxotira==8 && xotiraValue==512){
        price=570
      }
      else if(value == "Intel Core i5" && oxotira==16 && xotiraValue==128){
        price=580
      }
      else if(value == "Intel Core i5" && oxotira==16 && xotiraValue==256){
        price=590
      }
      else if(value == "Intel Core i5" && oxotira==16 && xotiraValue==512){
        price=600
      }
      else if(value == "Intel Core i5" && oxotira==32 && xotiraValue==128){
        price=610
      }
      else if(value == "Intel Core i5" && oxotira==32 && xotiraValue==256){
        price=620
      }
      else if(value == "Intel Core i5" && oxotira==32 && xotiraValue==512){
        price=630
      }
      else if (value == "Intel Core i7" && oxotira==8 && xotiraValue==128 ) {
        price=700
      }
      else if(value=="Intel Core i7" && oxotira==8 && xotiraValue==256){
        price=710
      }
      else if(value=="Intel Core i7" && oxotira==8 && xotiraValue==512){
        price=720
      }
      else if(value == "Intel Core i7" && oxotira==16 && xotiraValue==128){
        price=730
      }
      else if(value == "Intel Core i7" && oxotira==16 && xotiraValue==256){
        price=590
      }
      else if(value == "Intel Core i7" && oxotira==16 && xotiraValue==512){
        price=600
      }
      else if(value == "Intel Core i7" && oxotira==32 && xotiraValue==128){
        price=610
      }
      else if(value == "Intel Core i7" && oxotira==32 && xotiraValue==256){
        price=620
      }
      else if(value == "Intel Core i7" && oxotira==32 && xotiraValue==512){
        price=630
      }

setSena(price)
    }
    else if(data.productName=="Legion pro 5gen"){
      if(value=="Intel Core i7-13700HX" && oxotira==16 && xotiraValue==512){
        price=1400
      }
      else if(value=="Intel Core i7-13700HX" && oxotira==16 && xotiraValue==1){
        price=1450
      }
      else if(value=="Intel Core i7-13700HX" && oxotira==16 && xotiraValue==2){
        price=1480
      }
      else if(value == "Intel Core i7-13700HX" && oxotira==32 && xotiraValue==512){
        price=1500
      }
      else if(value == "Intel Core i7-13700HX" && oxotira==32 && xotiraValue==1){
        price=1550
      }
      else if(value == "Intel Core i7-13700HX" && oxotira==32 && xotiraValue==2){
        price=1600
      }
      else if(value == "Intel Core i7-13700HX" && oxotira==64 && xotiraValue==512){
        price=1650
      }
      else if(value == "Intel Core i7-13700HX" && oxotira==64 && xotiraValue==1){
        price=1700
      }
      else if(value == "Intel Core i7-13700HX" && oxotira==64 && xotiraValue==2){
        price=1800
      }
      else if(value=="Intel Core i9-13900HX" && oxotira==16 && xotiraValue==512){
        price=2500
      }
      else if(value=="Intel Core i9-13900HX" && oxotira==16 && xotiraValue==1){
        price=2600
      }
      else if(value=="Intel Core i9-13900HX" && oxotira==16 && xotiraValue==2){
        price=2700
      }
      else if(value == "Intel Core i9-13900HX" && oxotira==32 && xotiraValue==512){
        price=2800
      }
      else if(value == "Intel Core i9-13900HX" && oxotira==32 && xotiraValue==1){
        price=2900
      }
      else if(value == "Intel Core i9-13900HX" && oxotira==32 && xotiraValue==2){
        price=3000
      }
      else if(value == "Intel Core i9-13900HX" && oxotira==64 && xotiraValue==512){
        price=3100
      }
      else if(value == "Intel Core i9-13900HX" && oxotira==64 && xotiraValue==1){
        price=3200
      }
      else if(value == "Intel Core i9-13900HX" && oxotira==64 && xotiraValue==2){
        price=3300
      }
      else if(value=="AMD Ryzen 7 7735HS" && oxotira==16 && xotiraValue==512){
        price=1800
      }
      else if(value=="AMD Ryzen 7 7735HS" && oxotira==16 && xotiraValue==1){
        price=1900
      }
      else if(value=="AMD Ryzen 7 7735HS" && oxotira==16 && xotiraValue==2){
        price=2000
      }
      else if(value == "AMD Ryzen 7 7735HS" && oxotira==32 && xotiraValue==512){
        price=2100
      }
      else if(value == "AMD Ryzen 7 7735HS" && oxotira==32 && xotiraValue==1){
        price=2200
      }
      else if(value == "AMD Ryzen 7 7735HS" && oxotira==32 && xotiraValue==2){
        price=2300
      }
      else if(value == "AMD Ryzen 7 7735HS" && oxotira==64 && xotiraValue==512){
        price=2400
      }
      else if(value == "AMD Ryzen 7 7735HS" && oxotira==64 && xotiraValue==1){
        price=2500
      }
      else if(value == "AMD Ryzen 7 7735HS" && oxotira==64 && xotiraValue==2){
        price=2600
      }






        setSena(price)
    }
    else if(data.productName=="HP ENVY x360"){
      if(value=="AMD Ryzen 5 7530U/7535U" && oxotira==8 && xotiraValue==256){
        price=670
      }
      else if(value=="AMD Ryzen 5 7530U/7535U" && oxotira==8 && xotiraValue==512){
        price=680
      }
      else if(value=="AMD Ryzen 5 7530U/7535U" && oxotira==8 && xotiraValue==1){
        price=690
      }
      else if(value == "AMD Ryzen 5 7530U/7535U" && oxotira==16 && xotiraValue==256){
        price=700
      }
      else if(value == "AMD Ryzen 5 7530U/7535U" && oxotira==16 && xotiraValue==512){
        price=710
      }
      else if(value == "AMD Ryzen 5 7530U/7535U" && oxotira==16 && xotiraValue==1){
        price=720
      }
      else if(value == "AMD Ryzen 5 7530U/7535U" && oxotira==32 && xotiraValue==256){
        price=730
      }
      else if(value == "AMD Ryzen 5 7530U/7535U" && oxotira==32 && xotiraValue==512){
        price=740
      }
      else if(value == "AMD Ryzen 5 7530U/7535U" && oxotira==32 && xotiraValue==1){
        price=750
      }
      else  if(value=="AMD Ryzen 7 7730U/7735U" && oxotira==8 && xotiraValue==256){
        price=800
      }
      else if(value=="AMD Ryzen 7 7730U/7735U" && oxotira==8 && xotiraValue==512){
        price=810
      }
      else if(value=="AMD Ryzen 7 7730U/7735U" && oxotira==8 && xotiraValue==1){
        price=820
      }
      else if(value == "AMD Ryzen 7 7730U/7735U" && oxotira==16 && xotiraValue==256){
        price=830
      }
      else if(value == "AMD Ryzen 7 7730U/7735U" && oxotira==16 && xotiraValue==512){
        price=840
      }
      else if(value == "AMD Ryzen 7 7730U/7735U" && oxotira==16 && xotiraValue==1){
        price=850
      }
      else if(value == "AMD Ryzen 7 7730U/7735U" && oxotira==32 && xotiraValue==256){
        price=860
      }
      else if(value == "AMD Ryzen 7 7730U/7735U" && oxotira==32 && xotiraValue==512){
        price=870
      }
      else if(value == "AMD Ryzen 7 7730U/7735U" && oxotira==32 && xotiraValue==1){
        price=880
      }
      else  if(value=="Intel Core i5-1335U" && oxotira==8 && xotiraValue==256){
        price=800
      }
      else if(value=="Intel Core i5-1335U" && oxotira==8 && xotiraValue==512){
        price=810
      }
      else if(value=="Intel Core i5-1335U" && oxotira==8 && xotiraValue==1){
        price=820
      }
      else if(value == "Intel Core i5-1335U" && oxotira==16 && xotiraValue==256){
        price=830
      }
      else if(value == "Intel Core i5-1335U" && oxotira==16 && xotiraValue==512){
        price=840
      }
      else if(value == "Intel Core i5-1335U" && oxotira==16 && xotiraValue==1){
        price=850
      }
      else if(value == "Intel Core i5-1335U" && oxotira==32 && xotiraValue==256){
        price=860
      }
      else if(value == "Intel Core i5-1335U" && oxotira==32 && xotiraValue==512){
        price=870
      }
      else if(value == "Intel Core i5-1335U" && oxotira==32 && xotiraValue==1){
        price=880
      }
      setSena(price)
    }
    else if(data.productName=="Asus Strix g16"){
      if(value=="Intel Core i7-13700H" && oxotira==16 && xotiraValue==512){
        price=1400
      }
      else if(value=="Intel Core i7-13700H" && oxotira==16 && xotiraValue==1){
        price=1450
      }
      else if(value=="Intel Core i7-13700H" && oxotira==16 && xotiraValue==2){
        price=1500
      }
      else if(value == "Intel Core i7-13700H" && oxotira==32 && xotiraValue==512){
        price=1550
      }
      else if(value == "Intel Core i7-13700H" && oxotira==32 && xotiraValue==1){
        price=1600
      }
      else if(value == "Intel Core i7-13700H" && oxotira==32 && xotiraValue==2){
        price=1650
      }
      else if(value == "Intel Core i7-13700H" && oxotira==64 && xotiraValue==512){
        price=1700
      }
      else if(value == "Intel Core i7-13700H" && oxotira==64 && xotiraValue==1){
        price=1750
      }
      else if(value == "Intel Core i7-13700H" && oxotira==64 && xotiraValue==2){
        price=1800
      }
      else if(value=="Intel Core i9-13900H" && oxotira==16 && xotiraValue==512){
        price=1800
      }
      else if(value="Intel Core i9-13900H" && oxotira==16 && xotiraValue==1){
        price=1850
      }
      else if(value=="Intel Core i9-13900H" && oxotira==16 && xotiraValue==2){
        price=1900
      }
      else if(value=="Intel Core i9-13900H" && oxotira==32 && xotiraValue==512){
        price=1950
      }
      else if(value == "Intel Core i9-13900H" && oxotira==32 && xotiraValue==1){
        price=2000
      }
      else if(value == "Intel Core i9-13900H" && oxotira==32 && xotiraValue==2){
        price=2050
      }
      else if(value == "Intel Core i9-13900H" && oxotira==64 && xotiraValue==512){
        price=2100
      }
      else if(value == "Intel Core i9-13900H" && oxotira==64 && xotiraValue==1){
        price=2150
      }
      else if(value == "Intel Core i9-13900H" && oxotira==64 && xotiraValue==2){
        price=2200
      }
      
     
      
      
      
      


      
      
setSena(price)
    }
  }
  const selectOpxotira = (event) => {
    let value = Number(event.target.value);
    setOxotiraValue(value);
    let price = data.price;
    if (data.productName == "Macbook air 13") {
      if (value == 8 && protsessor=="Intel Core i5" && xotiraValue==128 ) {
        price = 200;
      }
      else if(value==8 && protsessor=="Intel Core i5" && xotiraValue==256){
        price=250
      }
      else if(value==8 && protsessor=="Intel Core i5" && xotiraValue==512){
        price=280
      }
      else if (value == 16 && protsessor=="Intel Core i5" && xotiraValue==128 ) {
        price = 300;
      }
      else if(value == 16 && protsessor=="Intel Core i5" && xotiraValue==256){
        price=350
      }
      else if(value == 16 && protsessor=="Intel Core i5" && xotiraValue==512){
        price=400
      }
      else if(value==24 && protsessor=="Intel Core i5" && xotiraValue==128){
        price=450
      }
      else if(value==24 && protsessor=="Intel Core i5" && xotiraValue==256){
        price=500

      }
      else if(value==24 && protsessor=="Intel Core i5" && xotiraValue==512){
        price=550

      }
      else  if (value == 8 && protsessor=="Intel Core i7" && xotiraValue==128 ) {
        price = 600;
      }
      else  if (value == 8 && protsessor=="Intel Core i7" && xotiraValue==256 ) {
        price = 650;
      }
      else  if (value == 8 && protsessor=="Intel Core i7" && xotiraValue==512 ) {
        price = 680;
      }
      else if (value == 16 && protsessor=="Intel Core i7" && xotiraValue==128 ) {
        price = 700;
      }
      else if(value == 16 && protsessor=="Intel Core i7" && xotiraValue==256){
        price=720
      }
      else if(value == 16 && protsessor=="Intel Core i7" && xotiraValue==512){
        price=730
      }
      else if(value==24 && protsessor=="Intel Core i7" && xotiraValue==128){
        price=740
      }
      else if(value==24 && protsessor=="Intel Core i7" && xotiraValue==256){
        price=750
      }
      else if(value==24 && protsessor=="Intel Core i7" && xotiraValue==512){
        price=760
      }
      else  if (value == 8 && protsessor=="M1 2020" && xotiraValue==128 ) {
        price = 800;
      }
      else  if (value == 8 && protsessor=="M1 2020" && xotiraValue==256 ) {
        price = 810;
      }
      else  if (value == 8 && protsessor=="M1 2020" && xotiraValue==512 ) {
        price = 820;
      }
      else if (value == 16 && protsessor=="M1 2020" && xotiraValue==128 ) {
        price = 830;
      }
      else if(value == 16 && protsessor=="M1 2020" && xotiraValue==256){
        price=840
      }
      else if(value == 16 && protsessor=="M1 2020" && xotiraValue==512){
        price=850
      }
      else if(value==24 && protsessor=="M1 2020" && xotiraValue==128){
        price=860
      }
      else if(value==24 && protsessor=="M1 2020" && xotiraValue==256){
        price=870
      }
      else if(value==24 && protsessor=="M1 2020" && xotiraValue==512){
        price=880
      }
      else  if (value == 8 && protsessor=="M2 2022" && xotiraValue==128 ) {
        price = 900;
      }
      else  if (value == 8 && protsessor=="M2 2022" && xotiraValue==256 ) {
        price = 950;
      }
      else  if (value == 8 && protsessor=="M2 2022" && xotiraValue==512 ) {
        price = 980;
      }
      else if (value == 16 && protsessor=="M2 2022" && xotiraValue==128 ) {
        price =1000;
      }
      else if(value == 16 && protsessor=="M2 2022" && xotiraValue==256){
        price=1100
      }
      else if(value == 16 && protsessor=="M2 2022" && xotiraValue==512){
        price=1200
      }
      else if(value==24 && protsessor=="M2 2022" && xotiraValue==128){
        price=1300
      }
      else if(value==24 && protsessor=="M2 2022" && xotiraValue==256){
        price=1500
      }
      else if(value==24 && protsessor=="M2 2022" && xotiraValue==512){
        price=2000
      }
      setSena(price);
    }
    else if(data.productName=="Asus VivoBook 15"){
      if (value == 8 && protsessor=="Intel Core i3" && xotiraValue==128 ) {
        price = 400;
      }
      else if(value==8 && protsessor=="Intel Core i3" && xotiraValue==256){
        price=410
      }
      else if(value==8 && protsessor=="Intel Core i3" && xotiraValue==512){
        price=420
      }
      else if (value == 16 && protsessor=="Intel Core i3" && xotiraValue==128 ) {
        price = 430;
      }
      else if(value == 16 && protsessor=="Intel Core i3" && xotiraValue==256){
        price=440
      }
      else if(value == 16 && protsessor=="Intel Core i3" && xotiraValue==512){
        price=450
      }
      else if(value==32 && protsessor=="Intel Core i3" && xotiraValue==128){
        price=460
      }
      else if(value==32 && protsessor=="Intel Core i3" && xotiraValue==256){
        price=470

      }
      else if(value==32 && protsessor=="Intel Core i3" && xotiraValue==512){
        price=480

      }
      else if (value == 8 && protsessor=="Intel Core i5" && xotiraValue==128 ) {
        price = 550;
      }
      else if(value==8 && protsessor=="Intel Core i5" && xotiraValue==256){
        price=560
      }
      else if(value==8 && protsessor=="Intel Core i5" && xotiraValue==512){
        price=570
      }
      else if (value == 16 && protsessor=="Intel Core i5" && xotiraValue==128 ) {
        price =580;
      }
      else if(value == 16 && protsessor=="Intel Core i5" && xotiraValue==256){
        price=590
      }
      else if(value == 16 && protsessor=="Intel Core i5" && xotiraValue==512){
        price=600
      }
      else if(value==32 && protsessor=="Intel Core i5" && xotiraValue==128){
        price=610
      }
      else if(value==32 && protsessor=="Intel Core i5" && xotiraValue==256){
        price=620
      }
      else if(value==32 && protsessor=="Intel Core i5" && xotiraValue==512){
        price=630

      }
      else if (value == 8 && protsessor=="Intel Core i7" && xotiraValue==128 ) {
        price = 700;
      }
      else if(value==8 && protsessor=="Intel Core i7" && xotiraValue==256){
        price=710
      }
      else if(value==8 && protsessor=="Intel Core i7" && xotiraValue==512){
        price=720
      }
      else if (value == 16 && protsessor=="Intel Core i7" && xotiraValue==128 ) {
        price =730;
      }
      else if(value == 16 && protsessor=="Intel Core i7" && xotiraValue==256){
        price=590
      }
      else if(value == 16 && protsessor=="Intel Core i7" && xotiraValue==512){
        price=600
      }
      else if(value==32 && protsessor=="Intel Core i7" && xotiraValue==128){
        price=610
      }
      else if(value==32 && protsessor=="Intel Core i7" && xotiraValue==256){
        price=620
      }
      else if(value==32 && protsessor=="Intel Core i7" && xotiraValue==512){
        price=630
      }
setSena(price)
    }
    else if(data.productName=="Legion pro 5gen"){
      if (value == 16 && protsessor=="Intel Core i7-13700HX" && xotiraValue==512 ) {
        price = 1400;
      }
      else if(value==16 && protsessor=="Intel Core i7-13700HX" && xotiraValue==1){
        price=1450
      }
      else if(value==16 && protsessor=="Intel Core i7-13700HX" && xotiraValue==2){
        price=1480
      }
      else if (value == 32 && protsessor=="Intel Core i7-13700HX" && xotiraValue==512 ) {
        price =1500;
      }
      else if(value == 32 && protsessor=="Intel Core i7-13700HX" && xotiraValue==1){
        price=1550
      }
      else if(value == 32 && protsessor=="Intel Core i7-13700HX" && xotiraValue==2){
        price=1600
      }
      else if(value==64 && protsessor=="Intel Core i7-13700HX" && xotiraValue==512){
        price=1650
      }
      else if(value==64 && protsessor=="Intel Core i7-13700HX" && xotiraValue==1){
        price=1700
      }
      else if(value==64 && protsessor=="Intel Core i7-13700HX" && xotiraValue==2){
        price=1800
      }
      else if (value == 16 && protsessor=="Intel Core i9-13900HX" && xotiraValue==512 ) {
        price = 2500;
      }
      else if(value==16 && protsessor=="Intel Core i9-13900HX" && xotiraValue==1){
        price=2600
      }
      else if(value==16 && protsessor=="Intel Core i9-13900HX" && xotiraValue==2){
        price=2700
      }
      else if (value == 32 && protsessor=="Intel Core i9-13900HX" && xotiraValue==512 ) {
        price =2800;
      }
      else if(value == 32 && protsessor=="Intel Core i9-13900HX" && xotiraValue==1){
        price=2900
      }
      else if(value == 32 && protsessor=="Intel Core i9-13900HX" && xotiraValue==2){
        price=3000
      }
      else if(value==64 && protsessor=="Intel Core i9-13900HX" && xotiraValue==512){
        price=3100
      }
      else if(value==64 && protsessor=="Intel Core i9-13900HX" && xotiraValue==1){
        price=3200
      }
      else if(value==64 && protsessor=="Intel Core i9-13900HX" && xotiraValue==2){
        price=3300
      }
      else if (value == 16 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==512 ) {
        price = 1800;
      }
      else if(value==16 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==1){
        price=1900
      }
      else if(value==16 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==2){
        price=2000
      }
      else if (value == 32 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==512 ) {
        price =2100;
      }
      else if(value == 32 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==1){
        price=2200
      }
      else if(value == 32 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==2){
        price=2300
      }
      else if(value==64 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==512){
        price=2400
      }
      else if(value==64 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==1){
        price=2500
      }
      else if(value==64 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==2){
        price=2600
      }
        setSena(price)
    }
    else if(data.productName=="HP ENVY x360"){
      if (value == 8 && protsessor=="AMD Ryzen 5 7530U/7535U" && xotiraValue==256 ) {
        price = 670;
      }
      else if(value==8 && protsessor=="AMD Ryzen 5 7530U/7535U" && xotiraValue==512){
        price=680
      }
      else if(value==8 && protsessor=="AMD Ryzen 5 7530U/7535U" && xotiraValue==1){
        price=690
      }
      else if (value == 16 && protsessor=="AMD Ryzen 5 7530U/7535U" && xotiraValue==256 ) {
        price =700;
      }
      else if(value == 16 && protsessor=="AMD Ryzen 5 7530U/7535U" && xotiraValue==512){
        price=710
      }
      else if(value == 16 && protsessor=="AMD Ryzen 5 7530U/7535U" && xotiraValue==1){
        price=720
      }
      else if(value==32 && protsessor=="AMD Ryzen 5 7530U/7535U" && xotiraValue==256){
        price=730
      }
      else if(value==32 && protsessor=="AMD Ryzen 5 7530U/7535U" && xotiraValue==512){
        price=740
      }
      else if(value==32 && protsessor=="AMD Ryzen 5 7530U/7535U" && xotiraValue==1){
        price=750
      }
     else if (value == 8 && protsessor=="AMD Ryzen 7 7730U/7735U" && xotiraValue==256 ) {
        price = 800;
      }
      else if(value==8 && protsessor=="AMD Ryzen 7 7730U/7735U" && xotiraValue==512){
        price=810
      }
      else if(value==8 && protsessor=="AMD Ryzen 7 7730U/7735U" && xotiraValue==1){
        price=820
      }
      else if (value == 16 && protsessor=="AMD Ryzen 7 7730U/7735U" && xotiraValue==256 ) {
        price =830;
      }
      else if(value == 16 && protsessor=="AMD Ryzen 7 7730U/7735U" && xotiraValue==512){
        price=840
      }
      else if(value == 16 && protsessor=="AMD Ryzen 7 7730U/7735U" && xotiraValue==1){
        price=850
      }
      else if(value==32 && protsessor=="AMD Ryzen 7 7730U/7735U" && xotiraValue==256){
        price=860
      }
      else if(value==32 && protsessor=="AMD Ryzen 7 7730U/7735U" && xotiraValue==512){
        price=870
      }
      else if(value==32 && protsessor=="AMD Ryzen 7 7730U/7735U" && xotiraValue==1){
        price=880
      }
      else if (value == 8 && protsessor=="Intel Core i5-1335U" && xotiraValue==256 ) {
        price = 800;
      }
      else if(value==8 && protsessor=="Intel Core i5-1335U" && xotiraValue==512){
        price=810
      }
      else if(value==8 && protsessor=="Intel Core i5-1335U" && xotiraValue==1){
        price=820
      }
      else if (value == 16 && protsessor=="Intel Core i5-1335U" && xotiraValue==256 ) {
        price =830;
      }
      else if(value == 16 && protsessor=="Intel Core i5-1335U" && xotiraValue==512){
        price=840
      }
      else if(value == 16 && protsessor=="Intel Core i5-1335U" && xotiraValue==1){
        price=850
      }
      else if(value==32 && protsessor=="Intel Core i5-1335U" && xotiraValue==256){
        price=860
      }
      else if(value==32 && protsessor=="Intel Core i5-1335U" && xotiraValue==512){
        price=870
      }
      else if(value==32 && protsessor=="Intel Core i5-1335U" && xotiraValue==1){
        price=880
      }
setSena(price)
    }
    else if(data.productName=="Asus Strix g16"){
      if (value == 16 && protsessor=="Intel Core i7-13700H" && xotiraValue==512 ) {
        price = 1400;
      }
      else if(value==16 && protsessor=="Intel Core i7-13700H" && xotiraValue==1){
        price=1450
      }
      else if(value==16 && protsessor=="Intel Core i7-13700H" && xotiraValue==2){
        price=1500
      }
      else if (value == 32 && protsessor=="Intel Core i7-13700H" && xotiraValue==512 ) {
        price =1550;
      }
      else if(value ==32 && protsessor=="Intel Core i7-13700H" && xotiraValue==1){
        price=1600
      }
      else if(value == 32 && protsessor=="Intel Core i7-13700H" && xotiraValue==2){
        price=1650
      }
      else if(value==64 && protsessor=="Intel Core i7-13700H" && xotiraValue==512){
        price=1700
      }
      else if(value==64 && protsessor=="Intel Core i7-13700H" && xotiraValue==1){
        price=1750
      }
      else if(value==64 && protsessor=="Intel Core i7-13700H" && xotiraValue==2){
        price=1800
      }
      else if (value == 16 && protsessor=="Intel Core i9-13900H" && xotiraValue==512 ) {
        price = 1800;
      }
      else if(value==16 && protsessor=="Intel Core i9-13900H" && xotiraValue==1){
        price=1850
      }
      else if(value==16 && protsessor=="Intel Core i9-13900H" && xotiraValue==2){
        price=1900
      }
      else if (value == 32 && protsessor=="Intel Core i9-13900H" && xotiraValue==512 ) {
        price =1950;
      }
      else if(value ==32 && protsessor=="Intel Core i9-13900H" && xotiraValue==1){
        price=2000
      }
      else if(value == 32 && protsessor=="Intel Core i9-13900H" && xotiraValue==2){
        price=2050
      }
      else if(value==64 && protsessor=="Intel Core i9-13900H" && xotiraValue==512){
        price=2100
      }
      else if(value==64 && protsessor=="Intel Core i9-13900H" && xotiraValue==1){
        price=2150
      }
      else if(value==64 && protsessor=="Intel Core i9-13900H" && xotiraValue==2){
        price=2200
      }
      else if (value == 16 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==512 ) {
        price = 1500;
      }
      else if(value==16 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==1){
        price=1550
      }
      else if(value==16 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==2){
        price=1600
      }
      else if (value == 32 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==512 ) {
        price =1650;
      }
      else if(value ==32 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==1){
        price=1700
      }
      else if(value == 32 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==2){
        price=1750
      }
      else if(value==64 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==512){
        price=1800
      }
      else if(value==64 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==1){
        price=1850
      }
      else if(value==64 && protsessor=="AMD Ryzen 7 7735HS" && xotiraValue==2){
        price=1900
      }
setSena(price)
    }
  }
  const selectXotira = (event) => {
    let value = Number(event.target.value);
    setXotiraValue(value);
    let price = data.price;
    if (data.productName == "Macbook air 13") {
      if (value == 128 && oxotira==8 && protsessor=="Intel Core i5" ) {
        price = 200;
      }
      else if(value == 128 && oxotira==16 && protsessor=="Intel Core i5"){
        price=300
      }
      else if(value == 128 && oxotira==24 && protsessor=="Intel Core i5"){
        price=450
      }
      else if (value == 256 && oxotira==8 && protsessor=="Intel Core i5") {
        price = 250;
      }
      else if(value == 256 && oxotira==16 && protsessor=="Intel Core i5"){
        price=350

      }
      else if(value == 256 && oxotira==24 && protsessor=="Intel Core i5"){
        price=500
      }
      else if(value==512 && oxotira==8 && protsessor=="Intel Core i5"){
        price=280

      }
      else if(value==512 && oxotira==16 && protsessor=="Intel Core i5"){
        price=400
      }
      else if(value==512 && oxotira==24 && protsessor=="Intel Core i5"){
        price=550
      }

      else if(value==128 && oxotira==8 && protsessor=="Intel Core i7"){
        price=600
      }
      else if(value==128 && oxotira==16 && protsessor=="Intel Core i7"){
        price=700
      }
      else if(value==128 && oxotira==24 && protsessor=="Intel Core i7"){
        price=740
      }
      else if(value==256 && oxotira==8 && protsessor=="Intel Core i7"){
        price=650
      }
      else if(value==256 && oxotira==16 && protsessor=="Intel Core i7"){
        price=720
      }
      else if(value==256 && oxotira==24 && protsessor=="Intel Core i7"){
        price=750
      }
      else if(value==512 && oxotira==8 && protsessor=="Intel Core i7"){
        price=680
      }
      else if(value==512 && oxotira==16 && protsessor=="Intel Core i7"){
        price=730
      }
      else if(value==512 && oxotira==24 && protsessor=="Intel Core i7"){
        price=760
      }
      else if(value==128 && oxotira==8 && protsessor=="M1 2020"){
        price=800
      }
      else if(value==128 && oxotira==16 && protsessor=="M1 2020"){
        price=830
      }
      else if(value==128 && oxotira==24 && protsessor=="M1 2020"){
        price=860
      }
      else if(value==256 && oxotira==8 && protsessor=="M1 2020"){
        price=810
      }
      else if(value==256 && oxotira==16 && protsessor=="M1 2020"){
        price=840
      }
      else if(value==256 && oxotira==24 && protsessor=="M1 2020"){
        price=870
      }
      else if(value==512 && oxotira==8 && protsessor=="M1 2020"){
        price=820
      }
      else if(value==512 && oxotira==16 && protsessor=="M1 2020"){
        price=850
      }
      else if(value==512 && oxotira==24 && protsessor=="M1 2020"){
        price=880
      }
      else if(value==128 && oxotira==8 && protsessor=="M2 2022"){
        price=900
      }
      else if(value==128 && oxotira==16 && protsessor=="M2 2022"){
        price=1000
      }
      else if(value==128 && oxotira==24 && protsessor=="M2 2022"){
        price=1300
      }
      else if(value==256 && oxotira==8 && protsessor=="M2 2022"){
        price=950
      }
      else if(value==256 && oxotira==16 && protsessor=="M2 2022"){
        price=1100
      }
      else if(value==256 && oxotira==24 && protsessor=="M2 2022"){
        price=1500
      }
      else if(value==512 && oxotira==8 && protsessor=="M2 2022"){
        price=980
      }
      else if(value==512 && oxotira==16 && protsessor=="M2 2022"){
        price=1200
      }
      else if(value==512 && oxotira==24 && protsessor=="M2 2022"){
        price=2000
      }
      setSena(price);
    }
    else if(data.productName=="Asus VivoBook 15"){
      if (value == 128 && oxotira==8 && protsessor=="Intel Core i3" ) {
        price = 400;
      }
      else if(value == 128 && oxotira==16 && protsessor=="Intel Core i3"){
        price=430
      }
      else if(value == 128 && oxotira==32 && protsessor=="Intel Core i3"){
        price=460
      }
      else if (value == 256 && oxotira==8 && protsessor=="Intel Core i3") {
        price = 410;
      }
      else if(value == 256 && oxotira==16 && protsessor=="Intel Core i3"){
        price=440
      }
      else if(value == 256 && oxotira==32 && protsessor=="Intel Core i3"){
        price=470
      }
      else if(value==512 && oxotira==8 && protsessor=="Intel Core i3"){
        price=420

      }
      else if(value==512 && oxotira==16 && protsessor=="Intel Core i3"){
        price=450
      }
      else if(value==512 && oxotira==32 && protsessor=="Intel Core i3"){
        price=480
      }
      else if (value == 128 && oxotira==8 && protsessor=="Intel Core i5" ) {
        price = 550;
      }
      else if (value == 256 && oxotira==8 && protsessor=="Intel Core i5") {
        price = 560;
      }
      else if(value==512 && oxotira==8 && protsessor=="Intel Core i5"){
        price=570
      }
      else if(value == 128 && oxotira==16 && protsessor=="Intel Core i5"){
        price=580
      }
      else if(value == 256 && oxotira==16 && protsessor=="Intel Core i5"){
        price=590
      }
      else if(value==512 && oxotira==16 && protsessor=="Intel Core i5"){
        price=600
      }
      else if(value == 128 && oxotira==32 && protsessor=="Intel Core i5"){
        price=610
      }
      else if(value == 256 && oxotira==32 && protsessor=="Intel Core i5"){
        price=620
      }
      else if(value==512 && oxotira==32 && protsessor=="Intel Core i5"){
        price=630
      }
      else if (value == 128 && oxotira==8 && protsessor=="Intel Core i7" ) {
        price = 700;
      }
      else if (value == 256 && oxotira==8 && protsessor=="Intel Core i7") {
        price = 710;
      }
      else if(value==512 && oxotira==8 && protsessor=="Intel Core i7"){
        price=720
      }
      else if(value == 128 && oxotira==16 && protsessor=="Intel Core i7"){
        price=730
      }
      else if(value == 256 && oxotira==16 && protsessor=="Intel Core i7"){
        price=590
      }
      else if(value==512 && oxotira==16 && protsessor=="Intel Core i7"){
        price=600
      }
      else if(value == 128 && oxotira==32 && protsessor=="Intel Core i7"){
        price=610
      }
      else if(value == 256 && oxotira==32 && protsessor=="Intel Core i7"){
        price=620
      }
      else if(value==512 && oxotira==32 && protsessor=="Intel Core i7"){
        price=630
      }
      setSena(price)
    }
    else if(data.productName=="Legion pro 5gen"){
       if (value == 512 && oxotira==16 && protsessor=="Intel Core i7-13700HX" ) {
        price = 1400;
      }
      else if (value == 1 && oxotira==16 && protsessor=="Intel Core i7-13700HX") {
        price = 1450;
      }
      else if(value==2 && oxotira==16 && protsessor=="Intel Core i7-13700HX"){
        price=1480
      }
      else if(value == 512 && oxotira==32 && protsessor=="Intel Core i7-13700HX"){
        price=1500
      }
      else if(value == 1 && oxotira==32 && protsessor=="Intel Core i7-13700HX"){
        price=1550
      }
      else if(value==2 && oxotira==32 && protsessor=="Intel Core i7-13700HX"){
        price=1600
      }
      else if(value == 512 && oxotira==64 && protsessor=="Intel Core i7-13700HX"){
        price=1650
      }
      else if(value == 1 && oxotira==64 && protsessor=="Intel Core i7-13700HX"){
        price=1700
      }
      else if(value==2 && oxotira==64 && protsessor=="Intel Core i7-13700HX"){
        price=1800
      }
      else if (value == 512 && oxotira==16 && protsessor=="Intel Core i9-13900HX" ) {
        price = 2500;
      }
      else if (value == 1 && oxotira==16 && protsessor=="Intel Core i9-13900HX") {
        price = 2600;
      }
      else if(value==2 && oxotira==16 && protsessor=="Intel Core i9-13900HX"){
        price=2700
      }
      else if(value == 512 && oxotira==32 && protsessor=="Intel Core i9-13900HX"){
        price=2800
      }
      else if(value == 1 && oxotira==32 && protsessor=="Intel Core i9-13900HX"){
        price=2900
      }
      else if(value==2 && oxotira==32 && protsessor=="Intel Core i9-13900HX"){
        price=3000
      }
      else if(value == 512 && oxotira==64 && protsessor=="Intel Core i9-13900HX"){
        price=3100
      }
      else if(value == 1 && oxotira==64 && protsessor=="Intel Core i9-13900HX"){
        price=3200
      }
      else if(value==2 && oxotira==64 && protsessor=="Intel Core i9-13900HX"){
        price=3300
      }







      else if (value == 512 && oxotira==16 && protsessor=="AMD Ryzen 7 7735HS" ) {
        price = 1800;
      }
      else if (value == 1 && oxotira==16 && protsessor=="AMD Ryzen 7 7735HS") {
        price = 1900;
      }
      else if(value==2 && oxotira==16 && protsessor=="AMD Ryzen 7 7735HS"){
        price=2000
      }
      else if(value == 512 && oxotira==32 && protsessor=="AMD Ryzen 7 7735HS"){
        price=2100
      }
      else if(value == 1 && oxotira==32 && protsessor=="AMD Ryzen 7 7735HS"){
        price=2200
      }
      else if(value==2 && oxotira==32 && protsessor=="AMD Ryzen 7 7735HS"){
        price=2300
      }
      else if(value == 512 && oxotira==64 && protsessor=="AMD Ryzen 7 7735HS"){
        price=2400
      }
      else if(value == 1 && oxotira==64 && protsessor=="AMD Ryzen 7 7735HS"){
        price=2500
      }
      else if(value==2 && oxotira==64 && protsessor=="AMD Ryzen 7 7735HS"){
        price=2600
      }










      setSena(price)
    }
    else if(data.productName=="HP ENVY x360"){
      if (value == 256 && oxotira==8 && protsessor=="AMD Ryzen 5 7530U/7535U" ) {
        price = 670;
      }
      else if (value == 512 && oxotira==8 && protsessor=="AMD Ryzen 5 7530U/7535U") {
        price = 680;
      }
      else if(value==1 && oxotira==8 && protsessor=="AMD Ryzen 5 7530U/7535U"){
        price=690
      }
      else if(value == 256 && oxotira==16 && protsessor=="AMD Ryzen 5 7530U/7535U"){
        price=700
      }
      else if(value == 512 && oxotira==16 && protsessor=="AMD Ryzen 5 7530U/7535U"){
        price=710
      }
      else if(value==1 && oxotira==16 && protsessor=="AMD Ryzen 5 7530U/7535U"){
        price=720
      }
      else if(value == 256 && oxotira==32 && protsessor=="AMD Ryzen 5 7530U/7535U"){
        price=730
      }
      else if(value == 512 && oxotira==32 && protsessor=="AMD Ryzen 5 7530U/7535U"){
        price=740
      }
      else if(value==1 && oxotira==32 && protsessor=="AMD Ryzen 5 7530U/7535U"){
        price=750
      }
      else  if (value == 256 && oxotira==8 && protsessor=="AMD Ryzen 7 7730U/7735U" ) {
        price = 800;
      }
      else if (value == 512 && oxotira==8 && protsessor=="AMD Ryzen 7 7730U/7735U") {
        price = 810;
      }
      else if(value==1 && oxotira==8 && protsessor=="AMD Ryzen 7 7730U/7735U"){
        price=820
      }
      else if(value == 256 && oxotira==16 && protsessor=="AMD Ryzen 7 7730U/7735U"){
        price=830
      }
      else if(value == 512 && oxotira==16 && protsessor=="AMD Ryzen 7 7730U/7735U"){
        price=840
      }
      else if(value==1 && oxotira==16 && protsessor=="AMD Ryzen 7 7730U/7735U"){
        price=850
      }
      else if(value == 256 && oxotira==32 && protsessor=="AMD Ryzen 7 7730U/7735U"){
        price=860
      }
      else if(value == 512 && oxotira==32 && protsessor=="AMD Ryzen 7 7730U/7735U"){
        price=870
      }
      else if(value==1 && oxotira==32 && protsessor=="AMD Ryzen 7 7730U/7735U"){
        price=880
      }
      else  if (value == 256 && oxotira==8 && protsessor=="Intel Core i5-1335U" ) {
        price = 800;
      }
      else if (value == 512 && oxotira==8 && protsessor=="Intel Core i5-1335U") {
        price = 810;
      }
      else if(value==1 && oxotira==8 && protsessor=="Intel Core i5-1335U"){
        price=820
      }
      else if(value == 256 && oxotira==16 && protsessor=="Intel Core i5-1335U"){
        price=830
      }
      else if(value == 512 && oxotira==16 && protsessor=="Intel Core i5-1335U"){
        price=840
      }
      else if(value==1 && oxotira==16 && protsessor=="Intel Core i5-1335U"){
        price=850
      }
      else if(value == 256 && oxotira==32 && protsessor=="Intel Core i5-1335U"){
        price=860
      }
      else if(value == 512 && oxotira==32 && protsessor=="Intel Core i5-1335U"){
        price=870
      }
      else if(value==1 && oxotira==32 && protsessor=="Intel Core i5-1335U"){
        price=880
      }
      setSena(price)
    }
    else if(data.productName=="Asus Strix g16"){
    
      
      if (value == 512 && oxotira==16 && protsessor=="Intel Core i7-13700H" ) {
        price = 1400;
      }
      else if (value == 1 && oxotira==16 && protsessor=="Intel Core i7-13700H") {
        price = 1450;
      }
      else if(value==2 && oxotira==16 && protsessor=="Intel Core i7-13700H"){
        price=1500
      }
      else if(value == 512 && oxotira==32 && protsessor=="Intel Core i7-13700H"){
        price=1550
      }
      else if(value == 1 && oxotira==32 && protsessor=="Intel Core i7-13700H"){
        price=1600
      }
      else if(value==2 && oxotira==32 && protsessor=="Intel Core i7-13700H"){
        price=1650
      }
      else if(value ==512 && oxotira==64 && protsessor=="Intel Core i7-13700H"){
        price=1700
      }
      else if(value == 1 && oxotira==64 && protsessor=="Intel Core i7-13700H"){
        price=1750
      }
      else if(value==2 && oxotira==64 && protsessor=="Intel Core i7-13700H"){
        price=1800
      }
      else if (value == 512 && oxotira==16 && protsessor=="Intel Core i9-13900H" ) {
        price = 1800;
      }
      else if (value == 1 && oxotira==16 && protsessor=="Intel Core i9-13900H") {
        price = 1850;
      }
      else if(value==2 && oxotira==16 && protsessor=="Intel Core i9-13900H"){
        price=1900
      }
      else if(value == 512 && oxotira==32 && protsessor=="Intel Core i9-13900H"){
        price=1950
      }
      else if(value == 1 && oxotira==32 && protsessor=="Intel Core i9-13900H"){
        price=2000
      }
      else if(value==2 && oxotira==32 && protsessor=="Intel Core i9-13900H"){
        price=2050
      }
      else if(value ==512 && oxotira==64 && protsessor=="Intel Core i9-13900H"){
        price=2100
      }
      else if(value == 1 && oxotira==64 && protsessor=="Intel Core i9-13900H"){
        price=2150
      }
      else if(value==2 && oxotira==64 && protsessor=="Intel Core i9-13900H"){
        price=2200
      }
      else if (value == 512 && oxotira==16 && protsessor=="AMD Ryzen 7 7735HS" ) {
        price = 1500;
      }
      else if (value == 1 && oxotira==16 && protsessor=="AMD Ryzen 7 7735HS") {
        price = 1550;
      }
      else if(value==2 && oxotira==16 && protsessor=="AMD Ryzen 7 7735HS"){
        price=1600
      }
      else if(value == 512 && oxotira==32 && protsessor=="AMD Ryzen 7 7735HS"){
        price=1650
      }
      else if(value == 1 && oxotira==32 && protsessor=="AMD Ryzen 7 7735HS"){
        price=1700
      }
      else if(value==2 && oxotira==32 && protsessor=="AMD Ryzen 7 7735HS"){
        price=1750
      }
      else if(value ==512 && oxotira==64 && protsessor=="AMD Ryzen 7 7735HS"){
        price=1800
      }
      else if(value == 1 && oxotira==64 && protsessor=="AMD Ryzen 7 7735HS"){
        price=1850
      }
      else if(value==2 && oxotira==64 && protsessor=="AMD Ryzen 7 7735HS"){
        price=1900
      }
setSena(price)
    }
  }
  const getCart=()=>{
    let obj={
      img1:data.img1,
      opxotira:oxotira,
      xotira:xotiraValue,
      protsessor:protsessor,
      productName:data.productName,
      price:sena
    }
    
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Yangi ob'ektni saqlash
    existingCart.push(obj);
    
    // Yangi savatni localStorage'ga saqlash
    localStorage.setItem('cart', JSON.stringify(existingCart));
    
    // State'ni yangilash
   
    
    
    setArr(existingCart);
  }
  
const ViewCart=()=>{
  navigate("/card")
}
  return (
    <div>
      <div className='main'>
        <header>
          <div>
            <img src={logo1} alt="" />
            <ul >
              <a style={{ textDecoration: "none", color: "black", }} href="">
                <li style={{ color: "rgba(0, 198, 94, 1)" }}>Internet-magazin Dily.uz</li>

              </a>
              <a style={{ textDecoration: "none", color: "black" }} href="https://dily.uz/Servises">
                <li>Markaziy servis xizmati</li>
              </a>

            </ul>
          </div>
          <div className='hunter'>
            <img src={logo2} alt="" />
            {
              x == "" ?
                <div>
                  <Link to={"/login"} style={{ textDecoration: "none" }}>Kirish/</Link>
                  <Link to={"/register"} style={{ textDecoration: "none" }}>Ro'yhatdan o'tish</Link>
                </div>
                : <p>{x}</p>
            }

          </div>

        </header>
        <section className='section1'>
          <div style={{ marginLeft: "85px" }}>

            <Link style={{ textDecoration: "none" }}  >
              <div onClick={da}>

                {
                  visible == true ? <a style={{ textDecoration: "none" }} href="">❌</a> :
                    <img src={logo3} alt="" />

                }
              </div>
            </Link>


            {
              visible == true ? <div style={{ position: "absolute", borderRadius: "10px", background: "white", zIndex: "2", top: "120px", boxShadow: "0px 4px 12px 0px rgba(54, 58, 69, 0.2)" }}>
                <ul style={{ padding: "20px" }}>
                  <li style={{ listStyle: "none" }}>
                    <div>
                      <img src={logo23} alt="" />
                      <Link style={{ textDecoration: "none" }}>Elektronika</Link>
                    </div>


                  </li>
                  <br />
                  <li style={{ listStyle: "none" }}>
                    <div style={{ display: "flex" }}>
                      <img src={logo24} alt="" />
                      <Link style={{ textDecoration: "none" }}>Telefonlar va aksessuarlar</Link>

                    </div>
                  </li>
                  <br />

                  <li style={{ listStyle: "none" }}>
                    <div style={{ display: "flex" }}>
                      <img src={logo26} alt="" />
                      <Link style={{ textDecoration: "none" }}>Erkaklar kiyimlari</Link>

                    </div>
                  </li>
                  <br />

                  <li style={{ listStyle: "none" }}>
                    <div style={{ display: "flex" }}>
                      <img src={logo25} alt="" />
                      <Link style={{ textDecoration: "none" }}>Maishiy texnika</Link>

                    </div>
                  </li>





                </ul>
              </div> : ""
            }


            <div>

              <Link to={"/elektronika"} style={{ textDecoration: "none", color: "black" }}>Elektronika</Link>
            </div>
            <div>
              <Link to={"/telefonlar"} style={{ textDecoration: "none", color: "black" }}>Telefonlar va aksessuarlar</Link>
            </div>
            <div>

              <Link to={"noutbuklar"} style={{ textDecoration: "none", color: "black" }}>Noutbuk va kompyuterlar</Link>
            </div>
          </div>
          
          

          <div>
            <button onClick={()=>ViewCart()}  style={{background:"#00C65E",padding:"10px",border:"none",borderRadius:"8px"}}>
            <img style={{width:"18px",height:"18px"}}  src={logo27} alt="" />
            
            </button>
            <div style={{width:"8px",height:"8px",background:"white",position:"relative",top:"-12px",left:"-50px",borderRadius:"2px"}}>
              <p style={{fontSize:"10px",marginLeft:"1px"}}>
              {b.length}
              </p>

            </div>
          </div>

        </section>
        <div style={{ width: "1370px", height: "fit-content", marginLeft: "180px", marginTop: "20px" }}>
          <h1>{data.productName}</h1>
          <div style={{ width: "100%", height: "100%", display: "flex", gap: "40px" }}>
            <div style={{ width: "370px", height: "570px" }}>
              <div style={{ width: "370px", height: "460px", border: "1px solid rgba(218, 220, 220, 1)", borderRadius: "10px", background: "white" }}>
                <img style={{ width: "90%", height: "90%", marginTop: "20px", marginLeft: "20px" }} src={rasm} alt="" />

              </div>
              <br />
              <div className='piu'>
                <div onClick={() => getImg(data.img1)} style={{ width: "100px", height: "90px", border: "1px solid rgba(218, 220, 220, 1)", borderRadius: "5px" }}>
                  <img style={{ width: "100%", height: "100%", borderRadius: "5px", transform: "" }} src={data.img1} alt="" />
                </div>
                <div onClick={() => getImg(data.img2)} style={{ width: "100px", height: "90px", border: "1px solid rgba(218, 220, 220, 1)", borderRadius: "5px" }}>
                  <img style={{ width: "100%", height: "100%", borderRadius: "5px" }} src={data.img2} alt="" />

                </div>
                <div onClick={() => getImg(data.img3)} style={{ width: "100px", height: "90px", border: "1px solid rgba(218, 220, 220, 1)", borderRadius: "5px" }}>
                  <img style={{ width: "100%", height: "100%", borderRadius: "5px" }} src={data.img3} alt="" />
                </div>


              </div>

            </div>
            <div style={{ width: "420px", height: "500px" }}>
              <br />
              <label >Protsessor</label>
              <br />
              <br />
              <select onChange={selectProtsessor} style={{ width: "400px", height: "30px", border: "1px solid white", borderRadius: "5px", outlineColor: "blue", outlineStyle: "solid", outlineWidth: "thin" }}>
                {
                  data.protsessor.map((item) => (
                    <option value={item}>{item}</option>
                  ))
                }
              </select>
              <br />
              <br />



            



              <label >Operativ xotira</label>
              <br />
              <br />
              <select onChange={selectOpxotira} style={{ width: "400px", height: "30px", border: "1px solid white", borderRadius: "5px", outlineColor: "blue", outlineStyle: "solid", outlineWidth: "thin" }}>
                {
                  data.ram.map((item) => (
                    <option value={item}>{item}</option>
                  ))
                }
              </select>
              <br />
              <br />
              <label >Xotira</label>
              <br />
              <br />
              <select onChange={selectXotira} style={{ width: "400px", border: "1px solid white", height: "30px", borderRadius: "5px", outlineColor: "blue", outlineStyle: "solid", outlineWidth: "thin" }}>
                {
                  data.xotira.map((item) => (
                    <option value={item}>{item}</option>
                  ))
                }
              </select>



            </div>
            <div style={{ width: "420px", marginTop: "90px", height: "fit-content", boxShadow: "0px 4px 12px 0px rgba(54, 58, 69, 0.2)", borderRadius: "10px" }}>
              <br />
              <div style={{ display: "flex" }}>
                <b>Narxi:</b>
                {sena}$

              </div>
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button onClick={()=>getCart()} style={{ width: "200px", height: "35px", border: "none", background: "#00C65E", borderRadius: "8px", color: "white" }}>Savatga qo'shish</button>

              </div>
              <br />

            </div>

          </div>







          <br />
          <br />

          <div style={{ width: "100%", display: "flex", gap: "40px" }}>
            <div>
              {
                table.map((item) => (
                  <div>
                    <h1 style={{ textAlign: "center", fontFamily: "Raleway", fontSize: "18px" }}>{item.name}</h1>
                    <p>{item.p1}</p>
                    <p>{item.p2}</p>
                  </div>
                ))
              }
            </div>
            <div>
              {
                xususiyatlar.map((item) => (
                  <div>
                    <h1 style={{ textAlign: "center", fontFamily: "Raleway", fontSize: "18px" }}>{item.name}</h1>
                    <p> Operativ xotiralari:{item.opxotira}GB</p>
                    <p>Xotirasi:{item.xotira}GB</p>
                  </div>
                ))

              }
            </div>
            <div>
              {
                tolovlar.map((item) => (
                  <div>
                    <h1 style={{ textAlign: "center", fontFamily: "Raleway", fontSize: "18px" }}>{item.name}</h1>
                    <p>{item.p1}</p>
                    <p>{item.p2}</p>
                    <p>{item.p3}</p>
                    <p>{item.p4}</p>
                    <p>{item.p5}</p>
                  </div>
                ))
              }
            </div>










          </div>
          <div style={{ backgroundColor: "rgba(239, 239, 239, 1)" }}>
            <div style={{ width: "100%", background: "#EFEFEF", display: "flex", justifyContent: "space-around" }}>

              <div style={{ marginTop: "20px" }}>
                <img src={logo1} alt="" />
              </div>
              <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
                <p style={{ fontFamily: "Raleway", fontSize: "14px" }}>Bizni ijtimoiy tarmoqda ham kuzating:</p>
                <a href="https://www.facebook.com/UzDaily.uz/">
                  <img style={{ width: "18.62px", height: "18.62px", marginTop: "12px" }} src={logo20} alt="" />

                </a>
                <a href="https://www.instagram.com/daily.uz/?hl=en">
                  <img style={{ width: "18.62px", height: "18.62px", marginTop: "12px" }} src={logo21} alt="" />

                </a>
                <a href="https://biznes-daily.uz.usitestat.com/">
                  <img style={{ width: "18.62px", height: "18.62px", marginTop: "12px" }} src={logo22} alt="" />
                </a>

              </div>


            </div>
            <div style={{ width: "100%", height: "1px", background: "rgba(218, 220, 220, 1)" }}></div>
            <div style={{ width: "857px", height: "171px", marginLeft: "275px", marginTop: "30px", display: "flex", gap: "155px" }}>
              <div>
                <h5>E'lonlar doskasi</h5>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>e'lonlar</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Do'konlar</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Xayriya</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Shaxsiy kabinet</p>
              </div>
              <div>
                <h5>Xizmat ko'rsatish markazi</h5>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Biz nimani tuzatamiz</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Xizmat manzillari
                  markazlari</p>
              </div>
              <div>
                <h5>Onlayn do'kon</h5>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Katalog</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Yetkazib berish va to'lash</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Savat</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Shaxsiy kabinet</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Kontaktlar</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Bo'sh ish o'rinlari</p>
              </div>
              <div>
                <h5>Foydalanuvchilar uchun</h5>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Kafolatlar</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Yetkazib berish va to'lash</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Qo'llab-quvvatlash xizmati</p>
                <p style={{ fontFamily: "Raleway", fontSize: "12px" }}>Savol javob</p>
              </div>


            </div>

          </div>
          <br />
          <br />
          <br />

        </div>
      </div>
    </div>
  )
}

export default Table