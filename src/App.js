import React from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
     
     <div className="split left">
	   <div className="center">
		   <div id="rcorners3">
        <div>
               
               

              <img style={{marginBottom: '-17px'}} src="pointer.png" height='50' width='50' />
              <span style={{color: '#256cd9',fontFamily:'verdana'}}>Single sign-on <br style={{lineHeight: '0.9'}} />(SSO)</span>


        </div>

<br />


        
		      <div id="rcorners2" >
			     </div>
				     <div id="rcorners1">
                
                   <img src="userlogo.png" className="logo" />
                   <input type="text" placeholder="Enter User Name Here" name="uname" required />
                    

             </div>
               
                        
             <div id="rcorners5">
                
                   <img src="password.png" className="logo" />
                   <input type="password" placeholder="Enter Password Here" name="uname" required />
           
				    
          </div>
			    <button type="submit"className="button">Login</button>
          <br />
          <br />
         <a href="#" style={{color:'#808080'}} >Forget Password?</a>
        </div>
        
      </div>

  
       
       

	<div className="split right">
	<div className="center">
		

      <div>
               

              <img style={{verticalAlign:'middle',marginBottom: '-10px'}} src="pointer2.png" height='50' width='50' />
              <span style={{color:'	#FFFFFF'}}>Single sign-on <br />(SSO)</span>

        </div>
        <br />
		  <font size='5' className="left-text"><b>Welcome Back!</b></font>
      <p className="left-text">Enter your ID and password to <br />continue</p>
		</div>
	</div>

            </div>
    </div>
  );
}

export default App;
