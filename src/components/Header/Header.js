import Link from 'next/link';
import React from 'react';
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display: "flex", alignItems: "center", color:"white"}}>
          <DiCssdeck size="3rem" /> <span>Portofolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://github.com/otatame" target="_blank">
        <AiFillGithub size="3rem" />
      </SocialIcons>
      
      <SocialIcons href="https://www.instagram.com/willee_12/" target="_blank">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
      
      <SocialIcons href="https://www.facebook.com/weeeleeee" target="_blank">
        <AiFillFacebook size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;