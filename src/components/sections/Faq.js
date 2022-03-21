import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  width: 90%;
  align-self: center;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="How do I contact The Scotch Noblemen team?" >
  Hop in the Discord server and submit a ticket. Reach out on twitter and shoot one of us a DM.
Come to the AMAs and Twitter Spaces and ask there.

  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What is the total supply of Scotch Noblemen?" >
  Scotch Noblemen is a 10,000 Generative project on the Ethereum blockchain. Post-mint there will be a drop of 10,000 generative Scotch Noblewomen.


  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="Do I have to be Scottish to be apart of the community?" >
  Absolutely not! As a matter of fact, the Scotch Noblemen is an multinational team!</Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="How do I get on the whitelist?" >
1. There are two ways to get on the whitelist: Invite 4 people to the Discord (these people have to stay in the discord and be involved) 
2. Reach level 5 in the server through interaction with the community!

  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="Staking Utility?" >
  Scotch Noblemen live on an ERC 721 contract, a contract rich with the ability for staking features. Staking will be held on our website. </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What Are The Launch Details?
" >
Scotch Noblemen is a staking game on the Ethereum blockchain. Those on the whitelist will be able to mint on May 15th at 11:59PM CST for 0.05 ETH! Public mint will go live on May 18th, 2022 at 11:59PM CST at 0.07 ETH. Community members will be able to mint their Noblemen on our website.
  </Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq