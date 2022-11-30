import React from "react";
import { BrowserRouter as Router ,Route , Routes ,Navigate } from 'react-router-dom'
import './App.css';
import {Big_main} from './Section/Index'

import { Profile , Classic_home ,Settings , News , Home , Profile5, Messenger ,Profile1 , Profile2 , Profile3 , Profile4} from "../src/Pages/Index";


function App() {


  return (
    
    <>     
         <Router>
          <div className="appContainer"></div>
            
           <Routes>
              <Route path="/" element={<Big_main/>}/>
              <Route path="/Classic_home" element={<Classic_home/>}/>
              <Route path="/Profile" element={<Profile/>}/>
              <Route path="/Profile1" element={<Profile1/>}/>
              <Route path="/Profile2" element={<Profile2/>}/>
              <Route path="/Profile3" element={<Profile3/>}/>
              <Route path="/Profile4" element={<Profile4/>}/>
              <Route path="/Profile5" element={<Profile5/>}/>
              <Route path="/Messenger" element={<Messenger/>}/>
              <Route path="/News" element={<News/>}/>
              <Route path="/Settings" element={<Settings/>}/>
           </Routes>
         
         </Router>
    </>
  );


  // <Home/>
  //<Classic_home/>
  //<Settings/>
  // <Profile/>
  //<News/>
  //<Messenger/> 
}


export default App;



 

 



//========================================
//         <Header/>
//         <Nav_right/> 
//===========================================
//fe weset lcontainer hathom
  //  <Containeree>
  //            <Storie/>   
  //             <Statu/>        
  //             <Representation/>
  //             <Publicite/>
  //             <Statu_exempl/>                                              
  //             <Add_friends/>
  //             <Many_pages/>
  //             <Poursentage/>
  //             <div className="uniqueforthis">
  //                    <Buttons Id="forthiS" >See More ... </Buttons>
  //             </div>
  //   </Containeree>
//================================================

//               
//              <Nav_left/>
//             <Special_zone/>



//==============pages==================================================================
//        

//       
//        for messenger chat 
//             <Nav />
//             <ChatoBody/>    






//           <Statu/>        
//           <Representation/>
//           <Publicite/>
//           <Statu_exempl/>
//           <Many_pages/>