import styled from "styled-components";
import Heading from "@/components/atoms/Heading";
import PageHeader from "@/components/molecules/PageHeader";
import PageWrap from "@/components/templates/PageWrap";
import AboutSkillWrap from "@/components/organisms/AboutSkillWrap";
import AboutCertiWrap from "@/components/organisms/AboutCertiWrap";
import AboutCompWrap from "@/components/organisms/AboutCompWrap";

const AboutPage = () => {
  return (
    <PageWrap page="about">
      <AboutPageStyled>
        <PageHeader text="ABOUT" point="ME" />
        <section>
          <SectionHeaderStyled className="tit-wrap">
            <Heading level="2">MY SKILLS</Heading>
          </SectionHeaderStyled>
          <AboutSkillWrap />
        </section>

        <section>
          <SectionHeaderStyled className="tit-wrap">
            <Heading level="2">MY CERTIFICATE</Heading>
          </SectionHeaderStyled>
          <AboutCertiWrap />
        </section>

        <section>
          <SectionHeaderStyled className="tit-wrap">
            <Heading level="2">COMPANY HISTORY</Heading>
          </SectionHeaderStyled>
          <AboutCompWrap />
        </section>
      </AboutPageStyled>
    </PageWrap>
  );
};

const AboutPageStyled = styled.main`
  section {
    position: relative;
    max-width: 1140px;
    margin: 0 auto 70px auto;
    padding-bottom: 70px;

    &:after {
      content: "";
      position: absolute;
      display: block;
      bottom: 0;
      left: 0;
      right: 0;
      width: 500px;
      height: 1px;
      margin: auto;
      background: rgba(37, 37, 37);
    }
    &:last-child {
      &:after {
        content: none;
      }
    }
  }

  @media ${(props) => props.theme.laptop} {
    section {
      width: 85%;
    }
  }
  @media ${(props) => props.theme.mobile} {
    section {
      width: 100%;
      padding: 0 24px 44px 24px;
      margin: 0 0 44px 0;

      &:after {
        width: 60%;
      }
    }
  }
`;

const SectionHeaderStyled = styled.div`
  padding-bottom: 50px;
  text-align: center;

  h2 {
    position: relative;
    font-size: 26px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 1.2;
    letter-spacing: 1px;

    &:before {
      content: "";
      position: absolute;
      bottom: -15px;
      left: 50%;
      width: 70px;
      height: 2px;
      transform: translateX(-50%);
      background: linear-gradient(to right, #ff69b4, #8b03ff);
    }
  }

  @media ${(props) => props.theme.mobile} {
    padding: 0 0 40px;

    h2 {
      font-size: 24px;
    }
  }
`;

export default AboutPage;
