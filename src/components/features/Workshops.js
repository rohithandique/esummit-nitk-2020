import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import workshopImageSrc from "images/workshop.jpg";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw` md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-100`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer  duration-300 border-b-2 border-transparent hover:border-primary-500`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

export default () => {
  const cards = [
    {
      imageSrc:workshopImageSrc,
      subtitle: "Free",
      title: "Digital Marketing and E-Commerce Management",
      description:
        "Daksh is a COO at Avignyata Inc., which was established in 2007. It is a Digital Marketing Agency. Mr. Daksh has worked with 1400+ clients from various industries. He has been a Digital Marketing trainer since 2014 and has trained students from Institutes and colleges. He has also done corporate training. His area of expertise includes SEM, SMM, Email, and E-Commerce Management. He is a featured technology writer at Hindustan Times. Last but not the least, he is a stationary addict. He also owns Steno stationery.",
      url: "https://dare2compete.com/o/St9dWT5"
    },

    {
      imageSrc:workshopImageSrc,
      subtitle: "Free",
      title: "Elements of a Strong Business Model",
      description:
        "At iB Hubs, Abhinav leads the collaborations with state Governments of Uttar Pradesh and Haryana in North India and serves as a mentor for startups supported by iB Hubs. Abhinav plays a key role in mentoring startups on innovation, validation, and commercialization. He has guided 80+ startups from diverse fields including drone manufacturing, solar design, EdTech, AI, etc., and trained 2000+ students through sensitization programs in North India. He is a passionate teacher and quit his job at Harman International in 2014 to teach 49 excitable children in the slum areas of East Delhi. In 2015, Abhinav founded a transformational social project called Carpe Diem, a holistic residential camp for children from underserved schools in New Delhi. Abhinav did his MBA from HKUST Business School in Hong Kong, and his B Tech in Computer Science from BITS - Pilani, Hyderabad.",
      url: "https://dare2compete.com/o/rT3CJLM"
    }

    /*{
      imageSrc:
        "https://images.pexels.com/photos/4778667/pexels-photo-4778667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      subtitle: "Exclusive",
      title: "Biz Quiz",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      url: "https://en.wikipedia.org/wiki/Main_Page"
    }*/
  ];

  return (
    <Container id="workshops">
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle style={{color: "#0762b0"}}>E-Summit Workshops</HeadingTitle>
          <HeadingDescription>
            Workshops at E-Summit NITK will introduce you to the entrepreneurial mindset and help you discover, learn and develop a wide range of skills. Participants develop creative capacity, entrepreneurial confidence, and acquire the necessary skills to solve real-life problems and learn from the best in the industry.
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
          {cards.map((card, i) => (
            <Card key={i} reversed={i % 2 === 1}>
              <Image imageSrc={card.imageSrc} />
              <Details>
                <Subtitle>{card.subtitle}</Subtitle>
                <Title style={{color: "#0762b0"}}>{card.title}</Title>
                <Description>{card.description}</Description>
                <Link href={card.url} style={{color: "#0762b0"}}>See Workshop Details</Link>
              </Details>
            </Card>
          ))}
        </Content>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};
