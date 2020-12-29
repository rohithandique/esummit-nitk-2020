import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink as PrimaryLinkBase, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;

const PrimaryLink = tw(PrimaryLinkBase)`rounded-full`
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover h-screen min-h-144`}
  background-image: url("https://images.unsplash.com/photo-1536300007881-7e482242baa5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80");
`;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-black opacity-75`;

const HeroContainer = tw.div`z-20 relative px-6 sm:px-8 mx-auto h-full flex flex-col`;
const Content = tw.div`px-4 flex flex-1 flex-col justify-center items-center`;

const Heading = styled.h1`
  ${tw`text-3xl text-center sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-snug -mt-24 sm:mt-0`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-700 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#talks">
        E-Talks
      </NavLink>
      <NavLink href="#pitch">
        E-Pitch
      </NavLink>
      <NavLink href="#comps">
        Competitions
      </NavLink>
      <NavLink href="#workshops">
        Workshops
      </NavLink>
      <NavLink href="#panel">
        Panel Discussion
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink style={{backgroundColor: "#0762b0"}} href="https://ecell.nitk.ac.in" target="_blank" >
        E-Cell Website
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay />
      <HeroContainer> 
        <StyledHeader links={navLinks} />
        <Content>
          <Heading>
              The Biggest Business Event of NITK
              <br />
              <SlantedBackground style={{color: "#112f58"}}>E-Summit 2021</SlantedBackground>
              <br />
              <p style={{fontSize: "2.75vw"}}>15-17th January</p>
          </Heading>
          <PrimaryLink style={{backgroundColor: "#0762b0"}} href="#talks">
            Browse Events
          </PrimaryLink>
        </Content>
      </HeroContainer>
    </Container>
  );
};
