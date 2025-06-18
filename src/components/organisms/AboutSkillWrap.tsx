import { useEffect, useState } from "react";
import styled from "styled-components";
import { ISkill } from "@/types/aboutData";

const AboutSkillWrap = () => {
  const [skillData, setSkillData] = useState<ISkill[]>();

  useEffect(() => {
    const getSkillData = async () => {
      try {
        const res = await fetch(
          `${process.env.PUBLIC_URL}/data/aboutData.json`
        );
        const result = await res.json();

        // rank로 percent 매핑
        result.skillList.forEach((item: ISkill) => {
          item.percent = getPercent(item.rank);
        });
        setSkillData(result.skillList);
      } catch (error) {
        console.log("skill 목록 가져오기 실패 : " + error);
      }
    };

    getSkillData();
  }, []);

  // rank > percent 매핑
  const getPercent = (skillRank: string) => {
    switch (skillRank) {
      case "상":
        return 90;
      case "중상":
        return 80;
      case "중":
        return 60;
      case "중하":
        return 45;
      case "하":
        return 35;
      default:
        return 0;
    }
  };

  // 로딩중 화면 작업 필요
  if (!skillData) return null;

  return (
    <AboutSkillStyled>
      {skillData.map((item, idx) => (
        <div className="skill-box" key={idx}>
          <div className="inner">
            <div className="left">
              <i className={item.icon} aria-hidden={true}></i>
              <span>{item.label}</span>
            </div>
            <div className="right">
              <div className="graph">
                <span
                  className="bar"
                  style={{ width: item.percent + "%" }}
                ></span>
              </div>
              <span>
                <span className="blind">보유 level</span>
                {item.rank}
              </span>
            </div>
          </div>
        </div>
      ))}
    </AboutSkillStyled>
  );
};

const AboutSkillStyled = styled.div`
  display: flex;
  flex-wrap: wrap;

  .skill-box {
    width: 33.3333%;
    padding: 12px;

    .inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      padding: 12px 20px;
      border: 1px solid rgba(37, 37, 37);
      border-radius: 6px;
      background: rgba(30, 30, 30);

      .left {
        display: flex;
        align-items: center;

        i {
          min-width: 45px;
          font-size: 42px;
          color: ${(props) => props.theme.mainColor};
        }
        span {
          display: inline-block;
          margin-left: 10px;
          font-size: 18px;
          font-weight: 500;
        }
      }
      .right {
        position: relative;
        min-width: 34px;
        padding: 10px 5px 0;
        font-size: 13px;
        text-align: center;

        .graph {
          position: absolute;
          left: 0;
          top: 0;
          display: inline-block;
          width: 100%;
          height: 5px;
          border-radius: 3px;
          background-color: rgba(130, 130, 130);

          .bar {
            position: absolute;
            left: 0;
            top: 0;
            display: inline-block;
            width: 0;
            height: 100%;
            border-radius: 3px 0 0 3px;
            background: ${(props) => props.theme.mainColor};
            transition: width 0.3s 0.8s;
          }
        }
      }
    }

    &:last-child {
      .inner .left i {
        font-size: 36px;
      }
    }
  }

  @media ${(props) => props.theme.laptop} {
    .skill-box {
      width: 50%;
    }
  }

  @media ${(props) => props.theme.mobile} {
    .skill-box {
      width: 100%;
      padding: 12px 0;
    }
  }
`;

export default AboutSkillWrap;
