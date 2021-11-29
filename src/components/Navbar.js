import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";

export default class Navbar extends Component {
  render() {
    return (
      // navbar navbar-dark bg-dark navbar-expand-lg navbar-light bg-light
      <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
        {/* https://www.iconfinder.com/icons/1243689/phone_call_icon%20Creative%20Commons%20(Attribution%203.0%20Unported); https://www.iconfinder.com/Makoto_msk */}
        <Link to="/">
          <img src={Logo} alt="store" className="navbar-brand" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ms-5">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ms-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: nav(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
