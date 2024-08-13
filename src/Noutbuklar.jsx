import React,{useState,useEffect} from 'react'
import { db } from './firebase'
import { collection,getDocs } from 'firebase/firestore'
import logo1 from "./images/Logo.svg"
import logo2 from "./images/user.svg"
import logo3 from "./images/menu.svg"
import logo23 from "./images/elektronika.svg"
import logo24 from "./images/telefonlar.svg"
import logo26 from "./images/kiyimlar.svg"
import logo25 from "./images/texnika.svg"
import logo4 from "./images/cart.svg"
import logo20 from "./images/facebook.svg"
import logo21 from "./images/instagram.svg"
import logo22 from "./images/Exclude.svg"
import logo27 from "./images/savat.svg"

import { Link,useNavigate  } from 'react-router-dom'
import "./sass/home.scss"

const Noutbuklar = () => {
  const [products,setProducts]=useState([])
  const [visible,setVisible]=useState(false)
  const [arr,setArr]=useState([])
  let b=JSON.parse(localStorage.getItem("cart")) || ""

  let x=JSON.parse(localStorage.getItem("email")) || ""
  const navigate=useNavigate()

  useEffect(()=>{
    getElektronika()
  },[])

  const getElektronika=()=>{
    let userRef=collection(db,"computers")
    getDocs(userRef).then((res)=>{
      let arr=res.docs.map((item)=>{
        return {...item.data(),id:item.id}
      })
      setProducts(arr)
    })
  }
  const da=()=>{
    setVisible(!visible)
    
  }
  const modalOpen=()=>{

  }
  const alertModal=()=>{
    alert("siz ro'yhatdan  o'tmagansiz")
  }
  const getNoutbuklar=(category)=>{
    let userRef=collection(db,"computers")
    getDocs(userRef).then((res)=>{
      let arr=res.docs.map((item)=>{
        return {...item.data(),id:item.id}
      })
      const result=arr.filter((item)=>{
        return item?.category===category
      })
      setProducts(result)
    })
    
    
   
  }
  const getMonitorlar=(category)=>{
    let userRef=collection(db,"computers")
    getDocs(userRef).then((res)=>{
      let arr=res.docs.map((item)=>{
        return {...item.data(),id:item.id}
      })
      const result=arr.filter((item)=>{
        return item?.category===category
      })
      setProducts(result)
      

    })
    



  }
  const getQurilmalar=(category)=>{
    let userRef=collection(db,"computers")
    getDocs(userRef).then((res)=>{
      let arr=res.docs.map((item)=>{
        return {...item.data(),id:item.id}
      })
      const result=arr.filter((item)=>{
        return item?.category===category
      })
      setProducts(result)
      

    })
    



  }
  const getMonoblok=(category)=>{
    let userRef=collection(db,"computers")
    getDocs(userRef).then((res)=>{
      let arr=res.docs.map((item)=>{
        return {...item.data(),id:item.id}
      })
      const result=arr.filter((item)=>{
        return item?.category===category
      })
      setProducts(result)
    })
  }
  const getProektorlar=(category)=>{
    let userRef=collection(db,"computers")
    getDocs(userRef).then((res)=>{
      let arr=res.docs.map((item)=>{
        return {...item.data(),id:item.id}
      })
      const result=arr.filter((item)=>{
        return item?.category===category
      })
      setProducts(result)
    })
  }
  const getLaminator=(category)=>{
    let userRef=collection(db,"computers")
    getDocs(userRef).then((res)=>{
      let arr=res.docs.map((item)=>{
        return {...item.data(),id:item.id}
      })
      const result=arr.filter((item)=>{
        return item?.category===category
      })
      setProducts(result)
    })
  }
  const getAll=()=>{
    getElektronika()
  }

  const getCart=(item)=>{
    let obj={
      img1:item.img1,
      productName:item.productName,
      price:item.price
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
  const getElektr=(item)=>{
    localStorage.setItem("elektr",JSON.stringify(item))
  
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
 : <p>{x}</p>
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
                    <Link style={{textDecoration:"none"}}>Elektronika</Link>
                    </div>
                   
                    
                    </li>
                    <br />
                    <li style={{listStyle:"none"}}>
                    <div style={{display:"flex"}}>
                      <img src={logo24} alt="" />
                      <Link style={{textDecoration:"none"}}>Telefonlar va aksessuarlar</Link>

                    </div>
                    </li>
                    <br />

                    <li style={{listStyle:"none"}}>
                    <div style={{display:"flex"}}>
                      <img src={logo26} alt="" />
                      <Link style={{textDecoration:"none"}}>Erkaklar kiyimlari</Link>

                    </div>
                    </li>
                    <br />

                    <li style={{listStyle:"none"}}>
                    <div style={{display:"flex"}}>
                      <img src={logo25} alt="" />
                      <Link style={{textDecoration:"none"}}>Maishiy texnika</Link>

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
        <div className='title'>
          <div className='left'>
            <h1 style={{fontFamily:"Raleway",}}>Noutbuklar va kompyuterlar</h1>
          </div>
          <div className='left-btns'>
           
              <button onClick={()=>getNoutbuklar("noutbuklar")} style={{padding:"10px", borderRadius:"5px", border:"none",boxShadow:"0px 4px 12px 0px rgba(54, 58, 69, 0.2)"}}>Noutbuklar</button>
                <button onClick={()=>getMonitorlar("monitorlar")} style={{padding:"10px",border:"none", borderRadius:"5px", boxShadow:"0px 4px 12px 0px rgba(54, 58, 69, 0.2)"}}>Monitorlar</button>
                <button onClick={()=>getQurilmalar("qurilmalar")} style={{padding:"10px",border:"none", borderRadius:"5px", boxShadow:"0px 4px 12px 0px rgba(54, 58, 69, 0.2)"}}>Kompyuter qurilmalari</button>
                <button onClick={()=>getMonoblok("monoblok")} style={{padding:"10px",border:"none", borderRadius:"5px", boxShadow:"0px 4px 12px 0px rgba(54, 58, 69, 0.2)"}}>Monoblok</button>
                <button onClick={()=>getProektorlar("proektorlar")} style={{padding:"10px",border:"none", borderRadius:"5px", boxShadow:"0px 4px 12px 0px rgba(54, 58, 69, 0.2)"}}>Proektorlar</button>
                <button onClick={()=>getLaminator("laminator")} style={{padding:"10px",border:"none", borderRadius:"5px", boxShadow:"0px 4px 12px 0px rgba(54, 58, 69, 0.2)"}}>Laminator</button>
                <button onClick={getAll} style={{padding:"10px",border:"none", borderRadius:"5px", boxShadow:"0px 4px 12px 0px rgba(54, 58, 69, 0.2)"}}>All</button>
                
    



            
            
            
          
          </div>
          <div className='clear'>
            {
              products.map((item,index)=>(
                <div key={index} style={{boxShadow:" 1px 2px 16px 3px rgba(54, 58, 69, 0.08)", width:"180px", height:"fit-content", borderRadius:"8px", padding:"15px", background:"#FFFFFF"}}>
                <Link to={"/elektr"} onClick={()=>getElektr(item)}> 
                  <img style={{width:"180px",height:"180px", objectFit:"contain", }} src={item.img1} alt="" />
                   </Link>
                   <br />
                <div style={{fontFamily:"Raleway",fontSize:"16px",color:"rgba(54, 58, 69, 1)"}}>{item.productName}</div>
                
                <div style={{marginTop:"5px",fontFamily:"Raleway",fontSize:"16px",color:"rgba(0, 198, 94, 1)"}}>{item.price}$</div>
                <button onClick={()=>getCart(item)}  style={{display:"flex", marginTop:"10px", width:"100%", background:"rgba(0, 198, 94, 1)", border:"none", borderRadius:"5px", justifyContent:"center", gap:"10px", padding:"8px",  alignItems:"center", boxShadow:" 1px 2px 16px 3px rgba(54, 58, 69, 0.08)",}}>Savatga qo'shish
                  <img style={{width:"20px",height:"20px"}} src={logo4} alt="" />
                </button>
              </div>

              ))


            }

</div>
<br />
<br />
<br />
<br />
<br />
<br />
<br />
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
       





<br />
<br />
<br />
        
        </div>
    </div>
  )
}

export default Noutbuklar