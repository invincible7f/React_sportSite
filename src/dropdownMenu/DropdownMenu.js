import React from "react";
import "./DropdownMenu.min.css"


class DropdownMenu extends React.Component {

constructor(props){
  super(props)
 
 this.state ={
  trainingDropDownMenuOpacity:this.props.op,
  trainingDropMenuTop:this.props.top

 }

}
  showMenu =(e)=>{

    e.target.style.opacity = 1

  }
  hideMenu =(e)=>{
   e.target.style.opacity = 0
   

  }
  render(){
  
  return (
 

<ul className='dropDownMenu' style={{opacity:this.props.op, top:this.props.top}} onMouseEnter={this.showMenu} onMouseLeave={this.hideMenu}>
          <li><a href='#'>Бодибилдинг</a></li>
          <li><a href='#'>Кроссфит</a></li>
          <li><a href='#'>Калистеника</a></li>
          <li><a href='#'>ЛФК</a></li>
          </ul>

 

  )



  }


}

export default DropdownMenu
