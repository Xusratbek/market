import React, { useState, useEffect } from 'react'
import "./sass/home.scss"
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


import { Link, useNavigate } from 'react-router-dom'


const Data = () => {

  const [visible, setVisible] = useState(false)

  let x = JSON.parse(localStorage.getItem("email")) || ""
  let data = JSON.parse(localStorage.getItem("data")) || ""
  const [rasm, setRasm] = useState(data.img1)
  const [sena, setSena] = useState(data.price)
  const [xotiraValue, setXotiraValue] = useState(128)
  const [oxotira, setOxotiraValue] = useState(6)
  const [table, setTable] = useState([])
  const [xususiyatlar, setXususiyatlar] = useState([])
  const [tolovlar, setTolovlar] = useState([])
 const [arr,setArr]=useState([])
  let b=JSON.parse(localStorage.getItem("cart")) || ""
  
  
  
  const navigate=useNavigate()
  const da = () => {
    setVisible(!visible)
  }

  const modalOpen = () => {

  }

  useEffect(() => {
    setXususiyatlar(data.xususiyatlar)
  }, [])
  useEffect(() => {
    setTable(data.tavsif)
  }, [])
  
  useEffect(() => {
    setTolovlar(data.tolovlar)
  }, [])

  

  

  const getImg = (img1) => {
    setRasm(img1)
  }
  const alertModal = () => {
    alert("siz ro'yhatdan  o'tmagansiz")
  }


  const selectValue = (event) => {
    if (data.productName == "Redmi Note 12 Pro") {
      let value = event.target.value
      setOxotiraValue(Number(value))
      let price = data.price
      if (value == 8) {
        if (xotiraValue == 128 && value == 8) {
          price = 235
        }
        else {
          price = 250
        }
      }
      else if (value == 6) {
        if (xotiraValue == 128 && value == 6) {
          price = 225
        }
        else {
          price = 240
        }
      }
      setSena(price)
    }
    else if (data.productName == "Nokia x20") {
      let value = event.target.value
      setOxotiraValue(Number(value))

      let price = data.price
      if (value == 8) {
        if (xotiraValue == 128 && value == 8) {
          price = 220
        }
        else {
          price = 230
        }
      }
      else if (value == 6) {
        if (xotiraValue == 128 && value == 6) {
          price = 200
        }
        else {
          price = 215
        }
      }
      setSena(price)


    }
    else if (data.productName == "Samsung s11") {
      let value = event.target.value
      setOxotiraValue(Number(value))
      let price = data.price
      if (value == 8) {
        if (xotiraValue == 128 && value == 8) {
          price = 310
        }
        else {
          price = 330
        }
      }
      else if (value == 12) {
        if (xotiraValue == 128 && value == 12) {
          price = 320
        }
        else {
          price = 340
        }
      }
      setSena(price)


    }
  }
  const selectXotira = (event) => {
    if (data.productName == "Redmi Note 12 Pro") {
      let value = event.target.value
      setXotiraValue(Number(value))
      let price = data.price
      if (value == 128) {
        if (oxotira == 6 && value == 128) {
          price = 225
        }
        else {
          price = 235
        }
      }
      else if (value == 256) {
        if (oxotira == 6 && value == 256) {
          price = 240
        }
        else {
          price = 250
        }
      }
      setSena(price)
    }
    else if (data.productName == "Nokia x20") {
      let value = event.target.value
      setXotiraValue(Number(value))
      let price = data.price
      if (value == 128) {
        if (oxotira == 6 && value == 128) {
          price = 200
        }
        else {
          price = 220
        }
      }
      else if (value == 256) {
        if (oxotira == 6 && value == 256) {
          price = 215
        }
        else {
          price = 230
        }
      }
      setSena(price)
    }
    else if (data.productName == "Xonor x8b") {
      let value = event.target.value
      setXotiraValue(Number(value))
      let price = data.price
      if (value == 256) {
        price = 330
      }

      setSena(price)
    }
    else if (data.productName == "Samsung s11") {
      let value = event.target.value
      setXotiraValue(Number(value))
      let price = data.price
      if (value == 128) {
        if (oxotira == 8 && value == 128) {
          price = 310
        }
        else {
          price = 320
        }
      }
      else if (value == 256) {
        if (oxotira == 8 && value == 256) {
          price = 330
        }
        else {
          price = 340
        }
      }
      setSena(price)
    }
    else if (data.productName == "Iphone 11pro") {
      let value = event.target.value
      setXotiraValue(Number(value))
      let price = data.price
      if (value == 256) {
        price = 595
      }
      else if (value == 512) {
        price = 800
      }
      setSena(price)
    }
  }



const getCart=()=>{
  let obj={
    img1:data.img1,
    opxotira:oxotira,
    xotira:xotiraValue,
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
              <label >Operativ xotira</label>
              <br />
              <br />
              <select onClick={() => selectValue(event)} style={{ width: "400px", height: "30px", border: "1px solid white", borderRadius: "5px", outlineColor: "blue", outlineStyle: "solid", outlineWidth: "thin" }}>
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
              <select onClick={() => selectXotira(event)} style={{ width: "400px", border: "1px solid white", height: "30px", borderRadius: "5px", outlineColor: "blue", outlineStyle: "solid", outlineWidth: "thin" }}>
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

export default Data