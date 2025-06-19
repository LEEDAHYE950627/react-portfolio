import styled from "styled-components";
import { useEffect, useState, useRef } from "react";
import Heading from "@/components/atoms/Heading";
import { IProject } from "@/types/projectsData";

type ProjectsPopupProps = {
  onClose: () => void;
  projectData: IProject | null;
};

const ProjectsPopup = (props: ProjectsPopupProps) => {
  const [innerHeight, setInnerHeight] = useState<string>();
  const popRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 721) {
        setInnerHeight(window.innerHeight + "px");
      } else {
        setInnerHeight("80%");
      }
    };

    // init
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!popRef.current) return;

    const selector = [
      "button:not([disabled])",
      "a:not([disabled])",
      'div[tabindex="0"',
    ].join(",");
    const focusibleEl = popRef.current.querySelectorAll<HTMLElement>(selector);
    const firstEl = focusibleEl[0];
    const lastEl = focusibleEl[focusibleEl.length - 1];

    // 처음 popup open시 focus 셋팅
    firstEl?.focus();

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key != "Tab") return;

      const activeEl = document.activeElement as HTMLElement | null;
      if (!activeEl || !popRef.current?.contains(activeEl)) {
        firstEl?.focus();
      }

      if (e.shiftKey) {
        // shift + tab
        if (firstEl === activeEl) {
          e.preventDefault();
          lastEl?.focus();
        }
      } else {
        // tab
        if (lastEl === activeEl) {
          e.preventDefault();
          firstEl?.focus();
        }
      }
    };

    document.addEventListener("keydown", trapFocus);
    return () => document.removeEventListener("keydown", trapFocus);
  }, []);

  if (!props.projectData) return null;

  return (
    <ProjectsPopupStyled
      className="pop-wrap"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      ref={popRef}
    >
      <div className="pop-con" style={{ height: innerHeight }}>
        <div className="pop-body" tabIndex={0}>
          <div className="img">
            <img
              src={require(`@/assets/img/${props.projectData.img}.png`)}
              alt={`${props.projectData.orderer} 로고`}
              style={{
                width: props.projectData.img === "police" ? "36%" : "60%",
              }}
            />
          </div>
          <div className="info-area">
            <div className="flag">
              <span>{props.projectData.orderer}</span>
              <span>{props.projectData.type}</span>
              {props.projectData.web ? (
                <span className="color">웹접근성마크획득</span>
              ) : null}
            </div>
            <Heading level="2" className="tit">
              {props.projectData.name}
            </Heading>
            <p className="period">
              <i className="fa-solid fa-calendar-days"></i>
              {props.projectData.period}{" "}
              <span>( {props.projectData.month} )</span>
            </p>
          </div>

          <div className="line-box">
            <span className="sub-tit">Description</span>
            <p className="desc">{props.projectData.desc}</p>
          </div>
          <div className="line-box">
            <span className="sub-tit">Skill Keywords</span>
            <ul className="skill-list">
              {props.projectData.skill.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="line-box">
            <span className="sub-tit">My work</span>
            <ul className="work-list">
              {props.projectData.work.map((data, idx) => (
                <li key={idx}>
                  <i className="fa-solid fa-check"></i>
                  {data}
                </li>
              ))}
            </ul>
          </div>
          <div className="line-box">
            <span className="sub-tit">Cooperation</span>
            <ul className="coop-list">
              {props.projectData.cooperation.map((data, idx) => (
                <li key={idx}>
                  <span className="line">{data.title}</span>
                  <span>{data.con}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <button type="button" className="btn-close" onClick={props.onClose}>
          <span className="blind">닫기</span>
        </button>
      </div>
    </ProjectsPopupStyled>
  );
};

const ProjectsPopupStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;

  .pop-con {
    position: relative;
    width: 45%;
    height: 80vh;
    background-color: #000;
    padding: 60px 0 40px;
    border: 1px solid ${(props) => props.theme.mainColor};
    border-radius: 10px;

    .pop-body {
      height: 100%;
      padding: 20px 24px;
      overflow-y: auto;
      overflow-x: hidden;

      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-track {
        background: rgba(57, 57, 57);
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.mainColor};
        border-radius: 10px;
      }

      .img {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 200px;
        margin: 0 auto 64px auto;
        padding: 24px;
        background: #fff;
        border-radius: 10px;

        img {
          width: 60%;
          height: auto;
        }
      }
      .info-area {
        margin-bottom: 24px;

        .flag {
          span {
            display: inline-block;
            margin: 0 8px 5px 0;
            padding: 2px 8px;
            border-radius: 3px;
            background: #323232;
            font-size: 14px;
          }
          .color {
            background: ${(props) => props.theme.mainColor};
          }
        }
        .tit {
          display: block;
          margin: 10px 0;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          word-break: keep-all;
        }
        .period {
          display: block;
          font-weight: 600;
          word-break: keep-all;

          span {
            font-size: 14px;
          }
          i {
            padding-right: 8px;
            color: ${(props) => props.theme.mainTxtColor};
          }
        }
      }
      .line-box {
        padding: 24px 0;
        border: 1px dashed rgba(57, 57, 57);
        border-width: 1px 0;
        font-size: 15px;

        & + .line-box {
          border-top-width: 0;
        }
        .sub-tit {
          display: block;
          margin-bottom: 12px;
          font-size: 15px;
          font-weight: 600;
          color: ${(props) => props.theme.mainTxtColor};
          line-height: 1.2;

          &:after {
            content: "";
            display: inline-block;
            width: 0;
            height: 0;
            margin-left: 4px;
            border-left: 6px solid transparent;
            border-right: 6px solid transparent;
            border-top: 8px solid ${(props) => props.theme.mainTxtColor};
          }
        }
      }
      .skill-list {
        display: flex;
        flex-wrap: wrap;

        li {
          margin: 0 6px 0 0;
          padding: 3px 8px;
          border: 1px solid #fff;
          border-radius: 3px;
          font-weight: 300;
          line-height: 1.2;
        }
      }
      .work-list {
        li {
          position: relative;
          padding: 5px 12px 5px 30px;
          border-radius: 6px;
          background: rgba(50, 50, 50, 0.7);

          & + li {
            margin-top: 7px;
          }
          i {
            position: absolute;
            top: 8px;
            left: 10px;
            padding-right: 8px;
            color: ${(props) => props.theme.mainTxtColor};
          }
        }
      }
      .coop-list {
        li {
          position: relative;
          display: flex;
          padding-left: 16px;
          font-weight: 600;

          &:before {
            content: "";
            position: absolute;
            top: 8px;
            left: 3px;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            background: ${(props) => props.theme.mainTxtColor};
          }
          .line {
            position: relative;
            display: inline-block;
            min-width: 130px;
            font-weight: 400;
            color: #dcdcdc;

            &:after {
              content: "";
              position: absolute;
              right: 20px;
              top: 7px;
              width: 7px;
              height: 7px;
              border-top: 1px solid ${(props) => props.theme.mainTxtColor};
              border-right: 1px solid ${(props) => props.theme.mainTxtColor};
              transform: rotate(45deg);
            }
          }
          & + li {
            margin-top: 14px;
          }
        }
      }
    }

    .btn-close {
      position: absolute;
      right: 12px;
      top: 12px;
      width: 40px;
      height: 40px;
      background: transparent;

      &:before,
      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        display: inline-block;
        width: 2px;
        height: 24px;
        background: ${(props) => props.theme.mainTxtColor};
      }
      &:before {
        transform-origin: center;
        transform: translate(-50%, -50%) rotate(-45deg);
      }
      &:after {
        transform-origin: center;
        transform: translate(-50%, -50%) rotate(45deg);
      }
      &:focus {
        outline: 1px dashed ${(props) => props.theme.mainTxtColor};
      }
    }
  }

  @media ${(props) => props.theme.laptop} {
    .pop-con {
      width: 65%;
    }
  }

  @media ${(props) => props.theme.mobile} {
    .pop-con {
      width: 100%;
      height: 100vh;
      padding: 60px 0 0;
      border: none;

      &:before {
        content: "";
        position: fixed;
        top: 45px;
        left: 0;
        right: 0;
        height: 16px;
        background: #000;
        filter: blur(9px);
      }

      .pop-body {
        .img {
          width: 100%;
          margin-bottom: 36px;

          img {
            width: 60%;
          }
        }
      }
    }
  }
  @media ${(props) => props.theme.smallMobile} {
  }
`;

export default ProjectsPopup;
