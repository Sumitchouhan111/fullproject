import React from 'react'

import {Routes,Route, useNavigate} from 'react-router-dom'
import Profilesimple from './profilesimple';
import EditProfile from './editprofile';




function Profile() {

   return     <Routes>
            
            <Route path='/' element={<Profilesimple/>}/>

            <Route path='/editprofile' element={<EditProfile/>}/>
        </Routes>
}

export default Profile;