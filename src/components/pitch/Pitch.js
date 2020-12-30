import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import pitchImageSrc from "images/pitch.svg";
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { ReactComponent as PlusIcon } from "feather-icons/dist/icons/plus.svg";
import { ReactComponent as MinusIcon } from "feather-icons/dist/icons/minus.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const TwoColumn = tw.div`flex`;
const Column = tw.div``;

const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  props.imageContain ? tw`bg-contain bg-no-repeat` : tw`bg-cover`,
  props.imageShadow ? tw`` : tw`shadow-none`,
  tw`hidden lg:block  h-144 bg-center`
]);

const FAQContent = tw.div`lg:ml-12`;
const Subheading = tw(SubheadingBase)`mb-4 text-center lg:text-left`;
const Heading = tw(SectionHeading)`lg:text-left`;
const Description = tw.p`max-w-xl text-center mx-auto lg:mx-0 lg:text-left lg:max-w-none leading-relaxed text-sm sm:text-base lg:text-lg font-medium mt-4 text-secondary-100`;

const FAQSContainer = tw.dl`mt-12`;
const FAQ = tw.div`cursor-pointer mt-8 select-none  lg:border-0 px-8 py-4 lg:p-0 rounded-lg lg:rounded-none`;
const Question = tw.dt`flex justify-between items-center`;
const QuestionText = tw.span`text-lg lg:text-xl font-semibold`;
const QuestionToggleIcon = styled.span`
  ${tw`ml-2 bg-primary-500 text-gray-100 p-1 rounded-full group-hover:bg-primary-700 group-hover:text-gray-200  duration-300`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const Answer = motion.custom(tw.dd`pointer-events-none text-sm sm:text-base leading-relaxed`);

export default ({
  subheading = "",
  heading = "E-Pitch",
  description = "Getting financial support is not easy and here we bring you the opportunity to pitch our investors with your start-up idea and get technical support and advices from the investors for your start-up.",
  imageSrc = pitchImageSrc,
  imageContain = false,
  imageShadow = true,
  faqs = null
}) => {
  /*
   * You can modify FAQs either by modifying the below defaultFaqs array or by passing a custom array of FAQs using
   * the faqs prop
   */
  const defaultFaqs = [
    {
      question: "What's the objective of the event?",
      answer:
        "To support young entrepreneurs by providing them a platform with the investors backing them up for their start-ups with Financial and Technical support."
    },
    {
      question: "What is the process of applying?",
      answer:
        "Registration link will be put up soon"/* For the first round you have to send an email application with a filled questionnaire (it will be sent to you through email after you register) and basic information and documents of the company. Once you have qualified for Round 2, you have to send a video application of 5-10 minutes explaining your business to showcase brilliance of your idea."*/
    },
    {
      question: "Who are the Investors?",
      answer:
        "Investors for E-Pitch 2021 will be announced soon."
    },
    {
      question: "Is a B-Plan necessary?",
      answer:
        "Yes, a B-Plan is must for E-Pitch. The B-Plan should include all the basic questions answered such as Problem statement, Solution to the problem statement, USP, Revenue model and other important things. You will be sent a B-Plan format through mail."
    },
    /*{
      question: "What's the prize money for E-Pitch 2021?",
      answer:
        "E-Pitch 2021 will have a prize money of Rs 50,000, along with this you will also get to attend E-Talks, Panel discussion and the Case Crunch."
    },*/
    {
      question: "What's the date for E-Pitch?",
      answer:
        "Date for the E-Pitch will be announced."
    },
    {
      question: "What about COVID?",
      answer:
        "No need to worry about COVID. The event is being held online and you can attend it from anywhere."
    },
    {
      question: "What's the minimum amount venture would get by the investors?",
      answer:
        "There's no such minimum amount you would get. The top 3 winners would get the prize money and we'll make sure all the start-ups get other required support from E-Cell NITK."
    }
  ];

  if (!faqs || faqs.length === 0) faqs = defaultFaqs;

  const [activeQuestionIndex, setActiveQuestionIndex] = useState(null);

  const toggleQuestion = questionIndex => {
    if (activeQuestionIndex === questionIndex) setActiveQuestionIndex(null);
    else setActiveQuestionIndex(questionIndex);
  };

  return (
    <Container id="pitch">
      <Content>
        <TwoColumn>
          <Column tw="hidden lg:block w-5/12 flex-shrink-0">
            <Image imageContain={imageContain} imageShadow={imageShadow} imageSrc={imageSrc} />
          </Column>
          <Column>
            <FAQContent>
              {subheading ? <Subheading>{subheading}</Subheading> : null}
              <Heading style={{color: "#0762b0"}}>{heading}</Heading>
              <Description>{description}</Description>
              <FAQSContainer>
                {faqs.map((faq, index) => (
                  <FAQ
                    key={index}
                    onClick={() => {
                      toggleQuestion(index);
                    }}
                    className="group"
                  >
                    <Question>
                      <QuestionText>{faq.question}</QuestionText>
                      <QuestionToggleIcon style={{backgroundColor: "#0762b0"}}>
                        {activeQuestionIndex === index ? <MinusIcon /> : <PlusIcon />}
                      </QuestionToggleIcon>
                    </Question>
                    <Answer
                      variants={{
                        open: { opacity: 1, height: "auto", marginTop: "16px" },
                        collapsed: { opacity: 0, height: 0, marginTop: "0px" }
                      }}
                      initial="collapsed"
                      animate={activeQuestionIndex === index ? "open" : "collapsed"}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      {faq.answer}
                    </Answer>
                  </FAQ>
                ))}
              </FAQSContainer>
            </FAQContent>
          </Column>
        </TwoColumn>
      </Content>
    </Container>
  );
};
