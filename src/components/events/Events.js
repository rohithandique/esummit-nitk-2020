import React, { useState } from "react";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import investofinImageSrc from "images/investofin-05.jpg";
import boardroomImageSrc from "images/executive-05.jpg";
import quizImageSrc from "images/bizquiz.jpg";
import caseImageSrc from "images/casecrunch-05.jpg";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg { 
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center  sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full  sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;
export default () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: caseImageSrc,
      title: "Case Crunch",
      description: "Enjoy solving business problems? Brace yourselves to rack your brains, understand, analyze, and strategize for some of the most challenging problem statements!",
      locationText: "5th Jan",
      pricingText: "₹20k",
      url: "https://dare2compete.com/o/2Kv3MoF"
    },
    {
      imageSrc: investofinImageSrc,
      title: "Investofin",
      description: "The world of stock market is an unknown entity for the uninformed but a money minting machine for the enthusiasts! Take part in the toughest Mock Stock Competition.",
      locationText: "11th Jan",
      pricingText: "₹7k",
      url: "https://dare2compete.com/o/GCyeV7f"
    },
    {
      imageSrc: boardroomImageSrc,
      title: "E-Xecutive",
      description: "Ever pictured yourself in a critical corporate position? We present to you an opportunity to put yourself in those shoes and reveal to the world the executives of tomorrow.",
      locationText: "11th Jan",
      pricingText: "₹7k",
      url: "https://dare2compete.com/o/MPuKEUp"
    },
    {
      imageSrc: quizImageSrc,
      title: "SciBizTech Quiz",
      description: "Do you see yourself as the next Wolf on Wall Street? Get ready to unleash your inner Elon Musk, Einstein and Steve Jobs as you go head to head with fellow business enthusiasts and quizzing aficionados.",
      locationText: "16th Jan",
      pricingText: "₹9k",
      url: "https://dare2compete.com/f/e-summit-nitk21-national-institute-of-technology-surathkal-8799"
    },
  ]
 
  return (
    <Container id="comps">
      <Content>
        <HeadingWithControl>
          <Heading>Competitions</Heading>
          <Controls >
            <PrevButton style={{backgroundColor: "#0762b0"}} onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton style={{backgroundColor: "#0762b0"}} onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{card.title}</Title>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{card.locationText}</Text>
                  </IconWithText>
                  <IconWithText>
                    <IconContainer>
                      <PriceIcon />
                    </IconContainer>
                    <Text>{card.pricingText}</Text>
                  </IconWithText>
                </SecondaryInfoContainer>
                <Description>{card.description}</Description>
              </TextInfo>
              <a href={card.url} target="_blank" ><PrimaryButton style={{backgroundColor: "#0762b0"}} >Register</PrimaryButton></a>
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};
