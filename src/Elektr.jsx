import React,{useState,useEffect} from 'react'
import logo1 from "./images/Logo.svg"
import logo2 from "./images/user.svg"
import logo3 from "./images/menu.svg"
import logo20 from "./images/facebook.svg"
import logo21 from "./images/instagram.svg"
import logo22 from "./images/Exclude.svg"
import logo27 from "./images/savat.svg"
import { Link, useNavigate } from 'react-router-dom'
import "./sass/home.scss"

const Elektr = () => {
  const [visible, setVisible] = useState(false)
  let b=JSON.parse(localStorage.getItem("cart")) || ""
  let elektr=JSON.parse(localStorage.getItem("elektr")) || ""
  let x=JSON.parse(localStorage.getItem("email")) || ""
  const [rasm, setRasm] = useState(elektr.img1)
  const [arr,setArr]=useState([])
  const navigate=useNavigate()
  const da = () => {
          setVisible(!visible)
        }
        const getImg = (img1) => {
          setRasm(img1)
        }
        const ViewCart=()=>{
          navigate("/card")
        }
        const getCart=()=>{
          let obj={
            productName:elektr.productName,
            img1:elektr.img1,
            price:elektr.price,

          }
          
          const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
          
          // Yangi ob'ektni saqlash
          existingCart.push(obj);
          
          // Yangi savatni localStorage'ga saqlash
          localStorage.setItem('cart', JSON.stringify(existingCart));
          
          // State'ni yangilash
         
          
          
          setArr(existingCart);
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



        <div style={{ width: "1370px", height: "fit-content", marginLeft: "180px", marginTop: "20px", }}>
          <h1>{elektr.productName}</h1>
          <div style={{ width: "100%", height: "100%", display: "flex", gap: "40px" }}>
          <div style={{ width: "370px", height: "570px" }}>
              <div style={{ width: "370px", height: "460px", border: "1px solid rgba(218, 220, 220, 1)", borderRadius: "10px", background: "white" }}>
                <img style={{ width: "90%", height: "90%", marginTop: "20px", marginLeft: "20px" }} src={rasm} alt="" />

              </div>
              <br />
              <div className='piu'>
                <div onClick={() => getImg(elektr.img1)} style={{ width: "100px", height: "90px", border: "1px solid rgba(218, 220, 220, 1)", borderRadius: "5px" }}>
                  <img style={{ width: "100%", height: "100%", borderRadius: "5px", transform: "" }} src={elektr.img1} alt="" />
                </div>
                <div onClick={() => getImg(elektr.img2)} style={{ width: "100px", height: "90px", border: "1px solid rgba(218, 220, 220, 1)", borderRadius: "5px" }}>
                  <img style={{ width: "100%", height: "100%", borderRadius: "5px" }} src={elektr.img2} alt="" />

                </div>
                <div onClick={() => getImg(elektr.img3)} style={{ width: "100px", height: "90px", border: "1px solid rgba(218, 220, 220, 1)", borderRadius: "5px" }}>
                  <img style={{ width: "100%", height: "100%", borderRadius: "5px" }} src={elektr.img3} alt="" />
                </div>


              </div>

            </div>



<div style={{width:"500px",height:"fit-content"}}>
  <h1>Xususiyatlar:</h1>
  {
    <div>
    <p> {elektr.xususiyat.p1}</p>
    <p>   {elektr.xususiyat.p2}</p>
    <p>     {elektr.xususiyat.p3}</p>
    <p>      {elektr.xususiyat.p4}</p>

    </div>

    
  }

</div>



<div style={{ width: "420px", marginTop: "90px", height: "fit-content", boxShadow: "0px 4px 12px 0px rgba(54, 58, 69, 0.2)", borderRadius: "10px" }}>
              <br />
              <div style={{ display: "flex" }}>
                <b>Narxi:</b>
                {elektr.price}$

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

export default Elektr