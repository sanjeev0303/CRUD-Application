import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material"

import  {NavLink}  from "react-router-dom";


const Header = styled(AppBar)`
background: #111
`;

const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
cursor: pointer
`;

const NavBar = () => {
    return (
        <>
          <Header position="static">
              <Toolbar>
                <Tabs to='/'>Code for Interview</Tabs>
                <Tabs to='all'>All users</Tabs>
                <Tabs to='add'>Add users</Tabs>
              </Toolbar>
          </Header>
        </>
    )
}

export default NavBar;