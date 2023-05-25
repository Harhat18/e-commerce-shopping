import React from "react";
import { styled } from "styled-components";

import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../responsive";
import { Search } from "@mui/icons-material";
import logoImage from "../logo/Logo.png";
const Container = styled.div`
  height: 70px;
  ${mobile({ height: "50px", width: "100%" })}
`;

const Wrapper = styled.div`
  padding: 0px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  border: none;
  ${mobile({ width: "30px" })}
`;

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  display: flex;
  align-items: center;
  padding: 2px;
`;

const Logo = styled.img`
  height: 75px;
  ${mobile({ height: "40px" })}
`;
const LogoItem = styled.h1`
  font-size: 40px;
  margin-left: 10px;
  border: none;
  font-weight: 900;
  color: #025464;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo src={logoImage} alt="Logo" />
          <LogoItem>KUZUCUK</LogoItem>
        </Left>
        <Center>
          <SearchContainer>
            <Input placeholder="Ara" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>KAYIT OL!</MenuItem>
          <MenuItem>GİRİŞ</MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
