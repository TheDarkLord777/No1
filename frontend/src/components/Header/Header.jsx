import {HeaderStyled, Text} from "./Header.styled.js";
import Button from "../RgbButtons/Button.jsx";

const Header=()=>{
  return <HeaderStyled>
    <Button/>
    <Text>Store</Text>
    <Text>Uz/Ru</Text>
    <Text>Login/Register</Text>
    <Text>Settings</Text>


  </HeaderStyled>
}
export default Header