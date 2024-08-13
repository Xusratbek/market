import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import { collection,getDocs } from 'firebase/firestore'

import "./sass/home.scss"
import logo1 from "./images/Logo.svg"
import logo2 from "./images/user.svg"
import logo3 from "./images/menu.svg"
import logo8 from "./images/strelka.svg"
import logo9 from "./images/remont_servise.png"
import logo10 from "./images/charity.png"
import logo11 from "./images/repair.svg"
import logo12 from "./images/fudbolka.png"
import logo13 from "./images/telefonlar.png"
import logo14 from "./images/elektronika.png"
import logo15 from "./images/Maishiy texnika.png"
import logo16 from "./images/tovarlar.png"
import logo17 from "./images/xobbi.png"
import logo18 from "./images/noutbuk.png"
import logo19 from "./images/bel.png"
import logo20 from "./images/facebook.svg"
import logo21 from "./images/instagram.svg"
import logo22 from "./images/Exclude.svg"
import logo23 from "./images/elektronika.svg"
import logo24 from "./images/telefonlar.svg"
import logo25 from "./images/texnika.svg"
import logo26 from "./images/kiyimlar.svg"
import logo27 from "./images/savat.svg"
import { Link, useNavigate } from 'react-router-dom'
import { Swiper,SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./styles.css"
import 'swiper/css/autoplay'
import { Pagination,Autoplay} from 'swiper/modules'

const Home = () => {
  const [product,setProduct]=useState([])
  const [noutbooks,setNoutbooks]=useState([])
  const [productName, setProductName] = useState('');
  const [data, setData] = useState([]);
  const [texnika,setTexnika]=useState([])
  const [visible,setVisible]=useState(false)
  let x=JSON.parse(localStorage.getItem("email")) || ""
  let b=JSON.parse(localStorage.getItem("cart")) || ""
  const navigate=useNavigate()
 
const erkaklarkiyimlari=()=>{
  navigate("/erkaklar-kiyimlari")
}
const telefonlar=()=>{
  navigate("/telefonlar")
}
const elektronika=()=>{
  navigate("/elektronika")
}
const maishiyTexnika=()=>{
  navigate("/maishiy-texnika")
}
const noutbuklar=()=>{
  navigate("/noutbuklar")
}
const sport=()=>{
  navigate("/sport")
}
useEffect(()=>{
  getProducts()
  getNoutbooks()
  getTexnika()
},[])

const getProducts=()=>{
  let userRef=collection(db,"products")
  getDocs(userRef).then((res)=>{
    let arr=res.docs.map((item)=>{
      return {...item.data(),id:item.id}
    })
    setProduct(arr)
  })
}
const getNoutbooks=()=>{
  let userRef=collection(db,"noutbooks")
  getDocs(userRef).then((res)=>{
    let arr=res.docs.map((item)=>{
      return {...item.data(),id:item.id}
    })
    setNoutbooks(arr)
  })
}
const handleInputChange = (event) => {
  setProductName(event.target.value);
};
const getTexnika=()=>{
  let userRef=collection(db,"maishiy-texnika")
  getDocs(userRef).then((res)=>{
    let arr=res.docs.map((item)=>{
      return {...item.data(),id:item.id}
    })
    setTexnika(arr)
  })
}
const da=()=>{
  setVisible(!visible)
}
const getData=(data)=>{
  localStorage.setItem("data",JSON.stringify(data))
}
const searchData=()=>{
}

const ViewCart=()=>{
  navigate("/card")
}
const AccountDelete=()=>{
  localStorage.removeItem("email")
  navigate("/login")
}
  return (
    <div>
      <div className='main'>
        <header>
          <div>
            <img src={logo1} alt="" />
            <ul >
              <a style={{textDecoration:"none",color:"black",}} href="">
              <li style={{color:"rgba(0, 198, 94, 1)"}}>Internet-magazin Dily.uz</li>

              </a>
              <a style={{textDecoration:"none",color:"black"}} href="https://dily.uz/Servises">
              <li>Markaziy servis xizmati</li>
              </a>
              
            </ul>
          </div>
          <div className='hunter'>
            <img src={logo2} alt="" />
            {
              x=="" ?
 <div>
  <Link to={"/login"} style={{textDecoration:"none"}}>Kirish/</Link>
  <Link to={"/register"} style={{textDecoration:"none"}}>Ro'yhatdan o'tish</Link>
 </div>
 : <div>
  <p>{x}</p>
  <button style={{background:"#00C65E",border:"none",borderRadius:"5px",padding:"5px 10px",color:"white"}} onClick={()=>AccountDelete()}>Chiqish</button>
 </div>
            }
           
          </div>

        </header>
        <section className='section1'>
          <div style={{marginLeft:"85px"}}>
            
            <Link style={{textDecoration:"none"}}  >
            <div onClick={da}>
           
           {
             visible==true ? <a style={{textDecoration:"none"}} href="">❌</a> :
         <img src={logo3} alt="" />

           }
            </div>
            </Link>
           
           
               {
                visible==true ? <div style={{position:"absolute", borderRadius:"10px",  background:"white", zIndex:"2",top:"120px",boxShadow:"0px 4px 12px 0px rgba(54, 58, 69, 0.2)"}}>
                  <ul style={{padding:"20px"}}>
                    <li style={{listStyle:"none"}}>
                    <div>
                    <img src={logo23} alt="" />
                    <Link to={"/elektronika"} style={{textDecoration:"none"}}>Elektronika</Link>
                    </div>
                   
                    
                    </li>
                    <br />
                    <li style={{listStyle:"none"}}>
                    <div style={{display:"flex"}}>
                      <img src={logo24} alt="" />
                      <Link to={"/telefonlar"} style={{textDecoration:"none"}}>Telefonlar va aksessuarlar</Link>

                    </div>
                    </li>
                    <br />

                    <li style={{listStyle:"none"}}>
                    <div style={{display:"flex"}}>
                      <img src={logo26} alt="" />
                      <Link to={"/erkaklar-kiyimlari"} style={{textDecoration:"none"}}>Erkaklar kiyimlari</Link>

                    </div>
                    </li>
                    <br />

                    <li style={{listStyle:"none"}}>
                    <div style={{display:"flex"}}>
                      <img src={logo25} alt="" />
                      <Link to={"/maishiy-texnika"} style={{textDecoration:"none"}}>Maishiy texnika</Link>

                    </div>
                    </li>





                  </ul>
                  </div> : ""
               }
            

            <div>
              
              <Link to={"/elektronika"} style={{textDecoration:"none",color:"black"}}>Elektronika</Link>
            </div>
            <div>
              <Link to={"/telefonlar"} style={{textDecoration:"none",color:"black"}}>Telefonlar va aksessuarlar</Link>
            </div>
            <div>
              
              <Link to={"noutbuklar"} style={{textDecoration:"none",color:"black"}}>Noutbuk va kompyuterlar</Link>
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



<br />
<br />

        <div className='health'>
        <Swiper
        slidesPerView={3.5}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={true}
        
        
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide style={{display:"flex", padding:"30px",  borderRadius:"10px", boxShadow:" 1px 2px 16px 3px rgba(54, 58, 69, 0.08)"}}>
            <div style={{marginTop:"-50px"}}>
            <h1 style={{fontFamily:"Raleway",fontSize:"20px"}}>Tamirlash</h1>
            <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Biz har qanday elementni tez va samarali ta'mirlaymiz</p>
            <a href="https://dily.uz/Servises">
            <button  className='next'>
<img style={{width:"11px",height:"11px",objectFit:"contain"}} src={logo8} alt="" />
            </button>
            </a>
            </div>
            <div>
              <img style={{width:"330px",height:"170px"}} src={logo9} alt="" />
            </div>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", height:"170px", padding:"30px", background:"rgba(0, 198, 94, 1)",  borderRadius:"10px", boxShadow:" 1px 2px 16px 3px rgba(54, 58, 69, 0.08)"}}>
          <div>
            <h1 style={{fontFamily:"Raleway",fontSize:"20px"}}>Boshqalarga yordam bering</h1>
            <p style={{fontFamily:"Raleway",fontSize:"12px"}}>O'z narsalaringizni mehribonlik uylariga va xayriya tashkilotlariga hadya qiling
            </p>
            <a href="https://mentalhealthtx.org/uz/boshqa-birovga-yordam/">
            <button className='next'>
<img style={{width:"11px",height:"11px",objectFit:"contain"}} src={logo8} alt="" />
            </button>
            </a>
          </div>
          <div>
            <img style={{width:"220px",height:"200px"}} src={logo10} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide style={{display:"flex", height:"170px", padding:"30px", background:"rgba(0, 198, 94, 1)",  borderRadius:"10px", boxShadow:" 1px 2px 16px 3px rgba(54, 58, 69, 0.08)"}}>
        <div>
            <h1 style={{fontFamily:"Raleway",fontSize:"20px",marginTop:"-30px"}}>Do'konlar</h1>
            <p style={{fontFamily:"Raleway",fontSize:"12px",marginTop:"20px"}}>Onlayn do'koningizni osongina oching
            </p>

            <a href="https://ulkan.uz/internet-magazin-ochish">
            <button className='next'>
<img style={{width:"11px",height:"11px",objectFit:"contain"}} src={logo8} alt="" />
            </button>
            </a>
           
          </div>
          <div>
            <img style={{width:"220px",height:"200px"}} src={logo11} alt="" />
          </div>
        </SwiperSlide>



        <SwiperSlide style={{display:"flex", height:"170px", padding:"30px", background:"rgba(0, 198, 94, 1)",  borderRadius:"10px", boxShadow:" 1px 2px 16px 3px rgba(54, 58, 69, 0.08)"}}>
        <div>
            <h1 style={{fontFamily:"Raleway",fontSize:"20px",marginTop:"-30px"}}>Ta'rifga ulanish</h1>
            <p style={{fontFamily:"Raleway",fontSize:"12px",marginTop:"20px"}}>Sizning biznesingiz uchun turli xil variantlar
            </p>

            <a href="https://yoshlarkelajagimiz.uz/biznes-boshlash-uchun-5-variant/">
            <button className='next'>
<img style={{width:"11px",height:"11px",objectFit:"contain"}} src={logo8} alt="" />
            </button>
            </a>
            
          </div>
          <div>
            <img style={{width:"220px",height:"200px"}} src={logo11} alt="" />
          </div>
        </SwiperSlide>
        
        
      </Swiper>
        </div>
<br />
<br />
<br />
<br />
<div>
<h1 style={{marginLeft:"70px",fontFamily:"Raleway",fontSize:"24px",}}>Siz qidiryapsiz:</h1>
</div>
<br />
<br />
        <div>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide style={{background:"#EEEEEE",display:"flex",flexDirection:"column",}}>
<img onClick={erkaklarkiyimlari}  style={{objectFit:"contain",width:"95px",height:"95px",borderRadius:"50%"}} src={logo12} alt="" />

<h1 style={{fontFamily:"Raleway",fontSize:"12px",marginTop:"-10px"}}>Erkaklar kiyimlari</h1>
        </SwiperSlide>
        <SwiperSlide style={{background:"#EEEEEE",display:"flex",flexDirection:"column",}}>
          <img onClick={telefonlar} style={{objectFit:"contain",width:"95px",height:"95px",borderRadius:"50%"}} src={logo13} alt="" />
          <h1 style={{fontFamily:"Raleway",fontSize:"12px",marginTop:"-10px"}}>Telefonlar
          va <br /> aksessuarlar</h1>
        </SwiperSlide>
        <SwiperSlide style={{background:"#EEEEEE",display:"flex",flexDirection:"column"}}>
          <img onClick={elektronika} style={{objectFit:"contain",width:"95px",height:"95px",borderRadius:"50%"}} src={logo14} alt="" />
          <h1 style={{fontFamily:"Raleway",fontSize:"12px",marginTop:"-10px"}}>Elektronika</h1>
        </SwiperSlide>

        <SwiperSlide style={{background:"#EEEEEE",display:"flex",flexDirection:"column",}}>
          <img onClick={maishiyTexnika} style={{objectFit:"contain",width:"95px",height:"95px",borderRadius:"50%"}} src={logo15} alt="" />
          <h1 style={{fontFamily:"Raleway",fontSize:"12px",marginTop:"-10px"}}> Maishiy texnika</h1>
        </SwiperSlide>
        <SwiperSlide style={{background:"#EEEEEE",display:"flex",flexDirection:"column",}}>
          <img onClick={noutbuklar} style={{objectFit:"contain",width:"95px",height:"95px",borderRadius:"50%"}} src={logo18} alt="" />
          <h1 style={{fontFamily:"Raleway",fontSize:"12px",marginTop:"-10px"}}>
          Noutbuk va kompyuterlar</h1>
        </SwiperSlide>
        
        <SwiperSlide style={{background:"#EEEEEE",display:"flex",flexDirection:"column",}}>
          <img onClick={sport} style={{objectFit:"contain",width:"95px",height:"95px",borderRadius:"50%"}} src={logo17} alt="" />
          <h1 style={{fontFamily:"Raleway",fontSize:"12px",marginTop:"-10px"}}>
          Sport anjomlari</h1>
        </SwiperSlide>
        
        
      </Swiper>
        </div>
        <div className='middle'>
          <div style={{display:"flex",justifyContent:"space-between"}} >
          <b style={{fontFamily:"Raleway",fontSize:"22px"}} >Siz uchun:</b>
          <Link to={"/telefonlar"} style={{textDecoration:"none",color:"rgba(54, 58, 69, 1)"}}>barchasini ko'rish</Link>
          </div>
          <br />
          <br />
          <div className='rectangle'>
            {
              product.map((item)=>(
                <Link to={"/data"} onClick={()=>getData(item)}  style={{boxShadow:" 1px 2px 16px 3px rgba(54, 58, 69, 0.08)", textDecoration:"none", width:"180px", borderRadius:"8px", padding:"15px", background:"#FFFFFF"}}>
                  <div> 
                    <img style={{width:"180px",height:"180px", objectFit:"contain", }} src={item.img1} alt="" />
                     </div>
                     <br />
                  <div style={{fontFamily:"Raleway",fontSize:"16px",color:"rgba(54, 58, 69, 1)"}}>{item.productName}</div>
                  
                  <div style={{marginTop:"5px",fontFamily:"Raleway",fontSize:"16px",color:"rgba(0, 198, 94, 1)"}}>{item.price}$</div>
                  <div style={{marginTop:"5px",fontFamily:"Raleway",fontSize:"12px",color:"rgba(151, 151, 151, 1)"}}>{item.region}</div>
                </Link>
              ))
            }
          </div>
          <br />
          <br />
          <br />
          <br />
          <div style={{display:"flex",justifyContent:"space-between"}} >
          <b style={{fontFamily:"Raleway",fontSize:"22px",color:"rgba(0, 198, 94, 1)"}} >Dily.uz dan takliflar</b>
          <Link to={"/noutbuklar"} style={{textDecoration:"none",color:"rgba(54, 58, 69, 1)"}}>barchasini ko'rish</Link>
          </div>
          <br />
          <br />
          <div className='rectangle'>
            {
              noutbooks.map((item)=>(
                <Link to={"/table"} onClick={()=>getData(item)} style={{boxShadow:" 1px 2px 16px 3px rgba(54, 58, 69, 0.08)", textDecoration:"none", width:"180px", borderRadius:"8px", padding:"15px", background:"#FFFFFF"}}>
                  <div> 
                    <img style={{width:"180px",height:"180px", objectFit:"contain", }} src={item.img1} alt="" />
                     </div>
                     <br />
                  <div style={{fontFamily:"Raleway",fontSize:"16px",color:"rgba(54, 58, 69, 1)"}}>{item.productName}</div>
                  
                  <div style={{marginTop:"5px",fontFamily:"Raleway",fontSize:"16px",color:"rgba(0, 198, 94, 1)"}}>{item.price}$</div>
                  <div style={{marginTop:"5px",fontFamily:"Raleway",fontSize:"12px",color:"rgba(151, 151, 151, 1)"}}>{item.region}</div>
                </Link>
                
              ))

            }
          </div>
          <div className='people'>
            <div className='agree'>
              <div className='sada'>
                <b style={{fontFamily:"Raleway",fontSize:"30px"}}>O'tkazib yubormang!</b>
                <br />
                <br />
                <p style={{fontFamily:"Raleway",fontSize:"14px"}}>Uyingiz va bog'ingiz uchun
eng yaxshi takliflar

</p>
<br />

<button style={{width:"188px",height:"40px",background:"rgba(0, 198, 94, 1)",borderRadius:"10px",border:"none"}}> <a style={{textDecoration:"none"}} href="https://srcyrl.skatewindows.com/info/how-to-choose-the-right-high-end-aluminum-door-90756240.html">Batafsil</a></button>

              </div>
              <img src={logo19} alt="" />

            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
              <div style={{width:"100%",height:"580px"}}>
              <div style={{display:"flex",justifyContent:"space-between"}} >
          <b style={{fontFamily:"Raleway",fontSize:"22px"}} >Joriy takliflar</b>
          <Link to={'/maishiy-texnika'} style={{textDecoration:"none",color:"rgba(54, 58, 69, 1)"}}>barchasini ko'rish</Link>
          </div>
          <br />
          <br />
          <div className='rectangle'>
            {
              texnika.map((item)=>(
                <Link to={"/texnika"} onClick={()=>getData(item)} style={{boxShadow:" 1px 2px 16px 3px rgba(54, 58, 69, 0.08)", textDecoration:"none", width:"180px", borderRadius:"8px", padding:"15px", background:"#FFFFFF"}}>
                  <div> 
                    <img style={{width:"180px",height:"180px", objectFit:"contain", }} src={item.img1} alt="" />
                     </div>
                     <br />
                  <div style={{fontFamily:"Raleway",fontSize:"16px",color:"rgba(54, 58, 69, 1)"}}>{item.productName}</div>
                  
                  <div style={{marginTop:"5px",fontFamily:"Raleway",fontSize:"16px",color:"rgba(0, 198, 94, 1)"}}>{item.price}$</div>
                  <div style={{marginTop:"5px",fontFamily:"Raleway",fontSize:"12px",color:"rgba(151, 151, 151, 1)"}}>{item.region}</div>
                </Link>
              ))

            }
          </div>
          <br />
          <br />
          <br />
<p style={{fontFamily:"Raleway",fontSize:"14px",color:"rgba(129, 129, 135, 1)"}}>Tez va foydali narsalarni sotish yoki sotib olishni xohlaysizmi?</p>
              <p style={{fontFamily:"Raleway",fontSize:"14px",color:"rgba(129, 129, 135, 1)"}} >Dily.ru bepul e'lonlar taxtasi sizning xizmatingizda. Bizning portalimizda siz kichik maishiy texnikadan tortib ko'chmas mulk va avtomashinalargacha hamma narsani topasiz. Va agar siz mahsulot, xizmat sotsangiz, uyni ijaraga yoki ijaraga olsangiz, biz sizning muammoingizni tez va samarali hal qilishga yordam beramiz, shunchaki reklamani bepul qo'shing! <br />
Tovar va xizmatlarning keng taklifi. Kiyim va poyabzal, elektronika va maishiy texnika, ko'chmas mulk, avtomobillar, ish, kollektsiyalar - bu erda siz reklamalarni topasiz
har qanday lazzat uchun! Katta auditoriya. Har kuni minglab potentsial mijozlar bizning veb-saytimizga tashrif buyurishadi. <br /> Ularni o'tkazib yubormang, reklamangizni hozir joylashtiring! Foydalanish qulayligi. Yaxshi o'ylangan bo'lim tuzilishi va reklamalarni qidirish sizga kerakli takliflarni tezda topishga yordam beradi. Va siz bir necha marta bosish orqali reklama joylashtirishingiz mumkin.</p>
              </div>







              <div style={{backgroundColor:"rgba(239, 239, 239, 1)"}}>
              <div style={{width:"100%", background:"#EFEFEF",display:"flex",justifyContent:"space-around" }}>
                
                <div style={{marginTop:"20px"}}>
                <img src={logo1} alt="" />
                </div>
                <div style={{display:"flex",gap:"20px",marginTop:"20px"}}>
                  <p style={{fontFamily:"Raleway",fontSize:"14px"}}>Bizni ijtimoiy tarmoqda ham kuzating:</p>
                  <a href="https://www.facebook.com/UzDaily.uz/"> 
                  <img style={{width:"18.62px",height:"18.62px",marginTop:"12px"}} src={logo20} alt="" />

                  </a>
                  <a href="https://www.instagram.com/daily.uz/?hl=en">
                  <img style={{width:"18.62px",height:"18.62px",marginTop:"12px"}} src={logo21} alt="" />

                  </a>
                  <a href="https://biznes-daily.uz.usitestat.com/">
                  <img style={{width:"18.62px",height:"18.62px",marginTop:"12px"}} src={logo22} alt="" />
                  </a>

                </div>


              </div>
              <div style={{width:"100%",height:"1px",background:"rgba(218, 220, 220, 1)"}}></div>
              <div style={{width:"857px",height:"171px",marginLeft:"275px",marginTop:"30px",display:"flex",gap:"155px"}}>
                <div>
                <h5>E'lonlar doskasi</h5>
                <p style={{fontFamily:"Raleway",fontSize:"12px"}}>e'lonlar</p>
                <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Do'konlar</p>
                <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Xayriya</p>
                <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Shaxsiy kabinet</p>
                </div>
                <div>
                  <h5>Xizmat ko'rsatish markazi</h5>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Biz nimani tuzatamiz</p>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Xizmat manzillari
                  markazlari</p>
                </div>
                <div>
                  <h5>Onlayn do'kon</h5>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Katalog</p>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Yetkazib berish va to'lash</p>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Savat</p>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Shaxsiy kabinet</p>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Kontaktlar</p>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Bo'sh ish o'rinlari</p>
                </div>
                <div>
                  <h5>Foydalanuvchilar uchun</h5>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Kafolatlar</p>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Yetkazib berish va to'lash</p>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Qo'llab-quvvatlash xizmati</p>
                  <p style={{fontFamily:"Raleway",fontSize:"12px"}}>Savol javob</p>
                </div>


              </div>

              </div>
              
              















        </div>
      </div>
    </div>
  )
}

export default Home