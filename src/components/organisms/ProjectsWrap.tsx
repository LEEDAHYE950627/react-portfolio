import { useState, useEffect } from "react";
import styled from "styled-components";
import ProjectsPopup from "@/components/organisms/ProjectsPopup";
import { IProject } from "@/types/projectsData";

const ProjectsWrap = () => {
  const [projectsData, setProjectsData] = useState<IProject[]>();
  const [isShow, setIsShow] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [previousElement, setPreviousElement] = useState<HTMLElement | null>(
    null
  );

  const projectClickHandler = (idx: number) => {
    if (!projectsData) return;
    setSelectedProject(projectsData[idx]);
    setIsShow(true);
  };

  const closePopup = () => {
    setIsShow(false);
    setSelectedProject(null);
  };

  const getScrollbarWidth = () => {
    let scrollbarWidth = 0;
    const outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.height = "100px";
    outer.style.overflow = "scroll";
    document.body.appendChild(outer);

    const inner = document.createElement("div");
    outer.appendChild(inner);

    scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
    document.body.removeChild(outer);
    return scrollbarWidth;
  };

  const setScrollCss = (width: number) => {
    const css = `
      body.openPop:not(.is-device) {position: relative; padding-right: ${width}px !important;}
      body.openPop:not(.is-device):after {content: ''; position: fixed; top: 0; right: 0; width: ${width}px; height: 100%; background-color: #fff;} 
      body.openPop:not(.is-device) header {right: ${width + 10}px;}
    `;

    const styleElement = document.createElement("style");
    styleElement.innerHTML = css;
    document.head.appendChild(styleElement);
  };

  useEffect(() => {
    setScrollCss(getScrollbarWidth());

    const getProjectsData = async () => {
      try {
        const res = await fetch(
          `${process.env.PUBLIC_URL}/data/projectsData.json`
        );
        const result = await res.json();
        setProjectsData(result.projectList);
      } catch (error) {
        console.log("프로젝트 목록 가져오기 실패 : " + error);
      }
    };

    getProjectsData();
  }, []);

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = "hidden";
      if (window.innerWidth > 720) {
        document.body.classList.add("openPop");
      }
    } else {
      previousElement?.focus();
      document.body.style.overflow = "auto";
      if (window.innerWidth > 720) {
        document.body.classList.remove("openPop");
      }
    }
  }, [isShow, previousElement]);

  if (!projectsData) return null;

  return (
    <>
      <ProjectsWrapStyled>
        {projectsData.map((data, idx) => (
          <div className="project-box" key={idx}>
            <div className="inner" onClick={() => projectClickHandler(idx)}>
              <div className="info-area">
                <div className="flag">
                  <span>{data.orderer}</span>
                  <span>{data.type}</span>
                  {data.employment !== "" && data.employment !== undefined ? (
                    <span>{data.employment}</span>
                  ) : (
                    ""
                  )}
                  {data.web ? (
                    <span className="color">웹접근성마크획득</span>
                  ) : null}
                </div>
                <strong className="tit">{data.name}</strong>
                <p className="period">
                  <i
                    className="fa-solid fa-calendar-days"
                    aria-hidden="true"
                  ></i>{" "}
                  {data.period} <span>( {data.month} )</span>
                </p>
                <p className="desc">{data.desc}</p>
              </div>
              <ul className="skill-list">
                {data.skill.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <button
                type="button"
                className={"btn-open"}
                aria-label={`${data.name} 상세보기`}
                onClick={(e) => setPreviousElement(e.currentTarget)}
              ></button>
            </div>
          </div>
        ))}
      </ProjectsWrapStyled>

      {isShow && (
        <ProjectsPopup onClose={closePopup} projectData={selectedProject} />
      )}
    </>
  );
};

const ProjectsWrapStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;

  .project-box {
    width: 33.3333%;
    padding: 12px;

    .inner {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
      padding: 15px 20px 20px;
      border: 1px solid rgba(25, 25, 25);
      background: rgba(25, 25, 25);
      cursor: pointer;

      .info-area {
        .flag {
          font-size: 0;
          span {
            display: inline-block;
            margin: 5px 5px 0 0;
            padding: 2px 6px;
            border-radius: 3px;
            background: #323232;
            font-size: 11px;
          }
          .color {
            background: ${(props) => props.theme.mainColor};
          }
        }
        .tit {
          display: block;
          margin: 6px 0 8px 0;
          font-size: 16px;
          font-weight: 700;
          color: ${(props) => props.theme.mainTxtColor};
          word-break: keep-all;
        }
        .period {
          display: block;
          font-size: 15px;
          word-break: keep-all;

          span {
            font-size: 12px;
            vertical-align: text-bottom;
          }
          i {
            padding-right: 3px;
            font-size: 14px;
            color: rgba(255, 255, 255, 0.9);
          }
        }
        .desc {
          margin: 16px 0 0;
          padding: 12px 0 0;
          border: 1px dashed rgba(57, 57, 57);
          border-width: 1px 0 0;
          font-size: 13px;
        }
      }

      .skill-list {
        display: flex;
        flex-wrap: wrap;
        margin-top: 16px;
        padding-top: 12px;
        border: 1px dashed rgba(57, 57, 57);
        border-width: 1px 0 0;

        li {
          margin: 0 6px 6px 0;
          padding: 2px 5px;
          border: 1px solid #fff;
          border-radius: 3px;
          font-size: 13px;
          font-weight: 300;
          line-height: 1.2;
        }
      }

      .btn-open {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: transparent;
        -webkit-tap-highlight-color: transparent !important;

        .ico {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 48px;
          height: 48px;
          font-size: 32px;
          color: rgba(255, 255, 255, 0.9);
          text-align: center;
          transform: translate(-100%, 0%) scale(0);
          opacity: 0;
        }

        &:before,
        &:after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          border: 1px solid transparent;
          box-sizing: border-box;
          -webkit-tap-highlight-color: transparent !important;
        }
        &:before {
          top: 0;
          left: 0;
        }
        &:after {
          bottom: 0;
          right: 0;
        }

        &:hover,
        &:focus {
          transition: all 0.2s ease-out 0.4s;

          &:before {
            width: 100%;
            height: 100%;
            border-top-color: ${(props) => props.theme.mainColor};
            border-right-color: ${(props) => props.theme.mainColor};
            transition: width 0.1s ease-out, height 0.1s ease-out 0.1s;
          }
          &:after {
            width: 100%;
            height: 100%;
            border-bottom-color: ${(props) => props.theme.mainColor};
            border-left-color: ${(props) => props.theme.mainColor};
            transition: width 0.1s ease-out 0.2s,
              border-bottom-color 0s ease-out 0.2s, height 0.1s ease-out 0.3s,
              border-left-color 0s ease-out 0.3s;
          }
        }
      }
    }
  }

  @media ${(props) => props.theme.laptop} {
    width: 85%;

    .project-box {
      width: 50%;
    }
  }

  @media ${(props) => props.theme.mobile} {
    width: 100%;

    .project-box {
      width: 100%;
      padding: 12px 0;
    }
  }
`;

export default ProjectsWrap;
