import React ,{ useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/carSlice/CarSlice";
import {useSelector } from "react-redux";

const Header = ({toggleMenu,setToggleMenu}) => {

  // const [toggleMenu , setToggleMenu] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  return (
    <Container >
      <a href="#">
        <img alt="Tesla" src="/images/logo.svg" />
      </a>
      <Menu toggleMenu={toggleMenu}>
        {cars && cars.map((car,index)=> (<Anchor key={index} href="#">{car}</Anchor>)  )}
        {/* <a href="#">Model S</a>

        <a href="#">Model X</a>

        <a href="#">Model Y</a>

        <a href="#">Model 3</a> */}
      </Menu>

      <RightMenu>
        <a href="#">Shop Now</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={(e)=> {e.preventDefault(); setToggleMenu(!toggleMenu)}} ></CustomMenu>
      </RightMenu>

      <BurgerNav  className={toggleMenu && "active"} >
        <CustomClose onClick={(e)=> {e.preventDefault(); setToggleMenu(!toggleMenu)}} />
        {cars && cars.map((car,index)=> (<li key={index}><Anchor href="#">{car}</Anchor></li>)  )}
        <li><a href="#">Existing Inventory</a></li>
        <li><a href="#">Used Inventory</a></li>
        <li><a href="#">Trade in</a></li>
        <li><a href="#">Cyber truck</a></li>
        <li><a href="#">Roadaster</a></li>
      </BurgerNav>

    </Container>
  );
};

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  padding: 0 20px;
  z-index:1;
  & a{
    align-self: center;
  }

  /* backdrop-filter: blur(2px); */
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  backdrop-filter: ${({toggleMenu}) => !toggleMenu && "blur(2px)" };

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 5px 15px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  padding:2px;
  width:1.2em !important;
  height:1.2em !important;
  &:hover{
    background-color:hsla(0,0%,0%,.1);
    border-radius: 100%;
  }
`;
const BurgerNav = styled.div`
  position:fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background:#fff;
  width:300px;
  z-index:2;
  list-style:none;
  padding:20px;
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  text-align:start;
  transform:translateX(100%);
  transition: transform 1s ease-in-out;


  &.active{
    transform:translateX(0);
    transition: transform 0.8s ease-in-out;
  }
  li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);

    a{
      font-weight: 600;
    }
  }

`;

const CustomClose =styled(CloseIcon)`  
  cursor: pointer;
  align-self: flex-end;
  padding:2px;
  width:1.2em !important;
  height:1.2em !important;

  &:hover{
    background-color:hsla(0,0%,0%,.1);
    border-radius: 100%;
  }
  
`;

const Anchor =styled.a`
font-size:14px;
  &:hover{
    background-color:hsla(0,0%,0%,.05);
    border-radius : 25px;
    backdrop-filter :blur(16px) ;
  }
`;