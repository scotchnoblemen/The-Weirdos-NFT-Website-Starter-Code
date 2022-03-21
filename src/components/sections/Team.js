import React, { lazy, Suspense } from 'react'
import styled from 'styled-components';

import img1 from '../../assets/Nfts/bighead.png';
import img2 from '../../assets/Nfts/bighead-1.png';
import img3 from '../../assets/Nfts/bighead-2.png';
import img4 from '../../assets/Nfts/bighead-3.png';
import img5 from '../../assets/Nfts/bighead-4.png';
import img6 from '../../assets/Nfts/bighead-5.png';
import img7 from '../../assets/Nfts/bighead-6.png';
import img8 from '../../assets/Nfts/bighead-7.png';
import img9 from '../../assets/Nfts/bighead-8.png';
import Loading from '../Loading';
// import ConfettiComponent from '../Confetti';

const ConfettiComponent = lazy(() => import("../Confetti"));


const Section = styled.section`
min-height: 100vh;
width: 100vw;
background-color: ${props => props.theme.body};
position: relative;
overflow: hidden;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em){
    font-size: ${(props) => props.theme.fontxl};

}
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;

@media (max-width: 64em){
width: 80%;
}
@media (max-width: 48em){
width: 90%;
justify-content: center;
}
`

const Item = styled.div`
width: calc(20rem - 4vw);
padding: 1rem 0;
color: ${props => props.theme.body};
margin: 2rem 1rem;
position: relative;
z-index:5;

backdrop-filter: blur(4px);

border: 2px solid ${props => props.theme.text};
border-radius: 20px;

&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

@media (max-width: 30em){
width: 70vw;
}

`

const ImageContainer = styled.div`
width: 80%;
margin: 0 auto;
background-color:${props => props.theme.carouselColor};
border: 1px solid ${props => props.theme.text};
padding: 1rem;

border-radius: 20px;
cursor: pointer;

img{
  width: 100%;
  height: auto;
transition: all 0.3s ease;

}
`

const Name = styled.h2`
font-size: ${props => props.theme.fontlg};
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: ${props => props.theme.text};
margin-top: 1rem;
`

const Position = styled.h2`
font-size: ${props => props.theme.fontmd};
display: flex;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: ${props => `rgba(${props.theme.textRgba},0.9)`};
font-weight:400;
`

const MemberComponent = ({img, name=" ",position=" "}) => {

  return(
    <Item>
      <ImageContainer>
        <img width={500} height={400}  src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )
}


const Team = () => {
  return (
    <Section id="team">
    <Suspense fallback={<Loading />}>
    <ConfettiComponent  /> </Suspense>
      <Title>Team</Title>
      <Container>
        <MemberComponent img={img1}  name="Kevin Woods" position="founder" />
        <MemberComponent img={img2}  name="Jimmy Standaert" position="Co-Founder/ CTO" />
        <MemberComponent img={img3}  name="Rob Burgher" position="Scribe" />
        <MemberComponent img={img4}  name="immaculate.0utlaw " position="Head of Merch Design" />
        <MemberComponent img={img5}  name="Nikki Studios" position="Artist 1" />
        <MemberComponent img={img6}  name="GDP" position="Moderator" />
        <MemberComponent img={img7}  name="Fergus" position="Web3 Developer" />
        <MemberComponent img={img8}  name="Kevin" position="Moderator" />
        <MemberComponent img={img9}  name="Diana" position="Marketing Manager" /> 
        

      </Container>
    </Section>
  )
}

export default Team