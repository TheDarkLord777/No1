import {ButtonContainer, ButtonStyled} from "./Button.styled.js";
import {useState} from "react";

const Button = () => {
  const [number,setNumber]=useState(1)
  const ChangeNumber=(num)=>{
    setNumber(num)
  }
  return <ButtonContainer>
    <ButtonStyled $color="red" $active={number===1} onClick={()=>ChangeNumber(1)}></ButtonStyled>
    <ButtonStyled $color="yellow" $active={number===2} onClick={()=>ChangeNumber(2)}></ButtonStyled>
    <ButtonStyled $color="green" $active={number===3} onClick={()=>ChangeNumber(3)}></ButtonStyled>

  </ButtonContainer>

}
export default Button