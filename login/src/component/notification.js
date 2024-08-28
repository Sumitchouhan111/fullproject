import React from 'react'
import './notification.css'
import './border.css'
import gpg from '../gpg.webp'

function Notification() {
  return (
    <div className='form-container ' style={{ height: '100vh', overflowY: 'auto',borderRadius:"1%" }}>
      <div  className='d-flex justify-content-center '>


    <div class="card row  mt-3">

  <div className='row mt-1 form-container card'>
    <div style={{ width: "75px", height: "75px", overflow: "hidden", borderRadius: "50%" }} className='form-container'>
  <img src={gpg} alt="profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</div>

    
    <div class="textBox">
      <div class="textContent mt-1">
        <p class="h1">Clans of Clash</p>
        
      </div>
      <div style={{marginTop:"-10px"}}><span class="span">12 min ago</span></div>
      <p class="p mt-2">Xhattmahs is not attacking your base! Xhattmahs is not attacking your base!Xhattmahs is not attacking your base!Xhattmahs is not attacking your base!Xhattmahs is not attacking your base!</p>
    <div>
  </div></div></div>

  <div className='row mt-1 form-container card'>
    <div style={{ width: "75px", height: "75px", overflow: "hidden", borderRadius: "50%" }} className='form-container'>
  <img src={gpg} alt="profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</div>

    
    <div class="textBox">
      <div class="textContent mt-1">
        <p class="h1">Clans of Clash</p>
        
      </div>
      <div style={{marginTop:"-10px"}}><span class="span">12 min ago</span></div>
      <p class="p mt-2">Xhattmahs is not attacking your base! Xhattmahs is not attacking your base!Xhattmahs is not attacking your base!Xhattmahs is not attacking your base!Xhattmahs is not attacking your base!</p>
    <div>
  </div></div></div>  <div className='row mt-1 form-container card'>
    <div style={{ width: "75px", height: "75px", overflow: "hidden", borderRadius: "50%" }} className='form-container'>
  <img src={gpg} alt="profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
</div>

    
    <div class="textBox">
      <div class="textContent mt-4">
        <p class="h1">Clans of Clash</p>
        
      </div>
      <div style={{marginTop:"-10px"}}><span class="span">12 min ago</span></div>
      <p class="p mt-2">Xhattmahs is not attacking your base! Xhattmahs is not attacking your base!Xhattmahs is not attacking your base!Xhattmahs is not attacking your base!Xhattmahs is not attacking your base!</p>
    <div>
  </div></div></div>
  
  

  
  
  
  </div>






  </div>



  </div>
  )
}

export default Notification