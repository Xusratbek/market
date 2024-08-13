import React, { useState,useEffect } from 'react'

const Card = () => {
  const [cart, setCart] = useState([]);
  const [ism,setIsm]=useState("")
  const [telefon,setTelefon]=useState("")
  
  
  console.log(cart);
  
  useEffect(() => {
    // `localStorage`dan ma'lumotni olish va statega o'rnatish
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);
  const zakaz=()=>{
    if(ism=="" &&  telefon==""){
      alert("malumotlaringizni toldiring")
    }
    else if (ism=="" && telefon!="") {
      alert("malumotlaringizni toldiring")
    }
    else if (ism!="" && telefon=="") {
      alert("malumotlaringizni toldiring")
    }
    else{
      alert("buyurtmangiz tez orada yetib boradi")
    }
    setIsm("")
    setTelefon("")
  }
  const removeLocal = (index) => {
    // Elementni o'chirish
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    // Yangilangan arrayni `localStorage`ga saqlash
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  
  const plusBtn = (index) => {
    // Elementni yangilash
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: (item.quantity || 1) + 1 };
        
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };



  const minusBtn = (index) => {
    // Elementni yangilash
    const updatedCart = cart.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: Math.max((item.quantity || 1) - 1, 1) };
      }
      return item;
    });
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"20px"}}>

    
    <div style={{display:"flex",gap:"20px"}}>
      <div style={{width:"600px",height:"fit-content",border:"1px solid #9A9A9A",padding:"10px",borderRadius:"6px"}}>
        <h1>Savatchada {cart.length}  mahsulot bor</h1>
        {
          cart.map((item,index)=>(
            <div>
              <div style={{display:"flex",justifyContent:"space-between"}}>

              <div style={{display:"flex",gap:"20px"}}>
              <div style={{width:"100px",height:"100px",border:"1px solid"}}>
            <img style={{width:"100%",height:"100%"}} src={item.img1} alt="" />
          </div>
          <div>
            <p>{item?.productName}</p>
            <p>{item?.price}$</p>
          </div>

              </div>



<div style={{width:"300px",height:"100px",display:"flex",gap:"40px",alignItems:"center"}}>
  <br />
 
  <div style={{width:"80px",height:"30px",borderRadius:"6px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <button onClick={()=>minusBtn(index)} style={{fontSize:"20px", color:"white", backgroundColor:"#DC3545",border:"none",borderRadius:"6px"}}>-</button>
    <p>{item.quantity || 1}</p>
    <button onClick={()=>plusBtn(index)} style={{fontSize:"20px",color:"white", backgroundColor:"#0D6EFD",border:"none",borderRadius:"6px"}}>+</button>

  </div>
 
  <p>{item.price * (item.quantity || 1)}$</p>
<button onClick={()=>removeLocal(index)} style={{backgroundColor:"#DC3545",border:"none", paddingTop:"3px",paddingBottom:"3px", borderRadius:"3px",color:"white",marginTop:"60px",marginLeft:"40px"}}>X</button>
</div>
              </div>
          
        <hr />

        </div>
          ))
        }

      </div>
      <div style={{width:"600px",height:"400px",border:"1px solid #9A9A9A",borderRadius:"6px"}}>
          <div style={{display:"flex"}}>
            <h1>Jami:</h1>
            
<h1>
{cart.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0)}$</h1>      
          </div>
          <h1>Sizning ma'lumotlaringiz</h1>
          <br />

          <div style={{display:"flex",gap:"20px"}}>
          <div>
          <label>Ism va familya</label>
          <br />
          <input value={ism} onChange={(e)=>setIsm(e.target.value)}  style={{width:"280px",height:"30px",border:"2px solid",borderRadius:"6px"}} type="text" />
          </div>
          <div>
            <label>Telefon:</label>
            <br />
            <input value={telefon} onChange={(e)=>setTelefon(e.target.value)}  style={{width:"280px",height:"30px",border:"2px solid",borderRadius:"6px"}} type="text" />
          </div>

          </div>
         <br />
         <br />
         <div style={{display:"flex",justifyContent:"center"}}>
         <button onClick={()=>zakaz()} style={{background:"#C40027",color:"white",padding:"15px 40px",border:"none",borderRadius:"8px"}}>Buyurtma berish</button>

         </div>
      </div>
      
    </div>
    </div>
  )
}

export default Card