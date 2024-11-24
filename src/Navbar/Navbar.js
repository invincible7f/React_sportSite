import React from 'react';
import './Navbar.css'

class Navbar extends React.Component{


render(){

    return(
     <nav>
      <div className='LogoName'>
       <img alt='picture'/>
        <h2>FitPower</h2>
      
      </div>

       <div className='navMenu'>
       <ul>

        <li> <img alt='picture'/> <a href='#'>Тренировки</a></li> 
        <li> <img alt='picture'/> <a href='#'>Питание</a></li> 
        <li> <img alt='picture'/> <a href='#'>Расписание</a></li> 
   
       </ul>
       <button>Войти</button>
       </div>
     </nav>
     


    )

}


}

export default Navbar
