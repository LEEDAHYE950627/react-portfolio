import { useEffect, useState, useRef } from 'react';
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Loading from '@/components/atoms/Loading';
import Heading from "@/components/atoms/Heading";
import gsap from 'gsap';

const HomeConWrap = () => {
	const pointsRef = useRef<HTMLDivElement | null>(null);
  const [isLoad, setIsLoad] = useState<boolean>(true);

	useEffect(() => {
		if (pointsRef.current){
			const points = document.querySelectorAll('.intro-area .point');

			const timeline = gsap.timeline({repeat: -1, repeatDelay: 0.7});

			points.forEach((char,idx) => {
				timeline
					.fromTo(
						char,
						{ y: 0},
						{ y: -15, duration: 0.3 },
						idx * 0.15
					)
					.to (
						char,
						{ y: 0, duration: 0.3, },
						idx * 0.15 + 0.3,
					)
			});
		}
  }, []);

	return (
    <>
      {isLoad && <Loading/>}
      <StyledHome>
        <div className="left">
          <div className="img-box">
            <img 
            src={require(`@/assets/img/img_main.png`)} 
            alt="포트폴리오 작성자 이다혜 퍼블리셔 사진" 
            onLoad={() => setIsLoad(false)}
            />
          </div>
        </div>
        <div className="right">
          <div className="intro-area" ref={pointsRef}>
            <Heading level="2">HELLO EVERYONE! 😁</Heading>
            <Heading level="1" >I'M {' '}
              <em aria-label="web publisher">
                <span className="point">W</span>
                <span className="point">E</span>
                <span className="point">B</span>{' '}
                <span>
                  <span className="point">P</span>
                  <span className="point">U</span>
                  <span className="point">B</span>
                  <span className="point">L</span>
                  <span className="point">I</span>
                  <span className="point">S</span>
                  <span className="point">H</span>
                  <span className="point">E</span>
                  <span className="point">R</span>
                </span>
              </em>
            </Heading>
            <p>
              안녕하세요, 퍼블리싱을 사랑하는 이다혜입니다 :D <br className="pc"/>
              새로운 기술과 프론트 엔드 개발 쪽에도 관심이 많으며, <br className="pc"/>
              기획팀, 디자인팀, 개발팀, 퍼블리셔 동료들과 커뮤니케이션을 통해 피드백을 주고받는 것을 좋아합니다. <br className="pc"/>
              새로운 기술에 도전하며 다양한 경험을 할 수 있는 회사에서 일하고 싶습니다.
            </p>
          </div>
          <div className="info-area">
            <Heading level="2">PERSONAL INFOS</Heading>
            <ul>
              <li><span>Name :</span> 이다혜</li>
              <li><span>Age :</span> 1995.06.27</li>
              <li><span>Phone :</span> 010-2350-3059</li>
              <li><span>Email :</span>  dahye950627@naver.com</li>
            </ul>
          </div>
          <div className="btn-area">
            <Link to="/about">
              MORE ABOUT ME
              <i className="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
      </StyledHome>
    </>
	)
}

const leftAni = keyframes`
	0% {
		transform: translateY(50px);
	}

	25% {
		transform: translateY(-50px);
	}

	50% {
		transform: translateY(20px);
	}

	75% {
		transform: translateY(-20px);
	}

	100% {
		transform: translateY(0);
	}
`;
const leftMoAni1 = keyframes`
	0% {
		left: -60px;
	}

	100% {
		left: 0;
	}
`;
const leftMoAni2 = keyframes`
	0% {
		right: -60px; 
	}

	100% {
		right: 0;
	}
`;

const StyledHome = styled.main`
	display: flex;
	width: 100%;
	overflow: hidden;

	.left {
		position: relative;
		flex: 0 0 35%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		padding: 0 0 0 40px;
		animation: ${leftAni} 0.55s ease-in-out 0.55s 1 normal both;

		&:before, &:after {
			content: '';
			position: absolute;
			left: calc(50% + 20px);
			transform: translateX(-50%);
			width: 70%;
			height: 100px;
			background: ${(props) => props.theme.mainColor};
		}
		&:before {
			top: -50px;
			border-radius: 0 0 32px 32px;
		}
		&:after {
			bottom: -50px;
			border-radius: 32px 32px 0 0;
		}

		.img-box {
			position: relative;
			width: 100%;
			height: 80vh;
			margin: auto 0;
      z-index: 2;

      img {
        width: 100%;
        height: 100%;
        border-radius: 32px;
        object-fit: cover;
        object-position: center;
        box-shadow: 0px 2px 11px 7px rgba(0,0,0,0.3);
      }
		}
	}
	.right {
		display: flex;
		flex-direction: column;
    	justify-content: center;
		width: 100%;
		padding: 0 0 0 70px;
		
		.intro-area {
			h1 {
				margin-bottom: 12px;
				font-size: 45px;
				font-weight: 700;
				word-break: keep-all;
				
				> em {
					display: inline;
					padding: 0;

					> p {
						display: inline-block; 
					}

					.point {
						display: inline-block;
					}
				}
			}
			h2 {
				font-size: 24px;
			}
			> p {
				padding-right: 71px;
				word-break: keep-all;
			}
		}
		.info-area {
			margin: 48px 0;

			h2 {
				margin-bottom: 12px;
				font-size: 26px;
				font-weight: 500;
			}
			ul {
				display: flex;
				flex-wrap: wrap;

				li {
					width: 50%;
					margin-bottom: 12px;
					color: ${(props) => props.theme.mainTxtColor};
					font-size: 16px;
					font-weight: 600;

					&:last-child {
						margin: 0;
					}
					span {
						font-weight: 400;
						color: #fff;
						opacity: 0.7;
					}
				}
			}
		}
		.btn-area {
			a {
				position: relative;
				display: inline-block;
				padding: 14px 30px;
				border-radius: 30px;
				font-size: 15px;
				font-weight: 600;
				color: #fff;
				background: ${(props) => props.theme.mainColor};
				transition: all 0.3s;

				i {
					position: absolute;
					top: 50%;
					right: 14px;
					padding-left: 10px;
					opacity: 0;
					transform: translateY(-50%);
					transition: opacity 0.3s, paddig 0.3s, letter-spacing 0.3s;
				}

				&:hover, &:focus {
					background: ${(props) => props.theme.mainTxtColor};
					letter-spacing: 1px;

					i {
						position: relative;
						top: unset;
						right: unset;
						opacity: 1;
						transform: none;
					}
				}
			}
		}
	}
	br.pc {
		display: inline-block;;
	}
	
	@media ${(props) => props.theme.laptop} {
		.right {
			padding: 2vw 0 2vw 6vw;

			.info-area {
				ul {
					flex-direction: column;

					li {
						width: 100%;
					}
				}
			}
		}
	}

	@media ${(props) => props.theme.tablet} {
		.right {
			padding: 0 0 0 5vw;
		}
	}

	@media ${(props) => props.theme.mobile} {
		flex-direction: column;

		.left {
			padding: 30px;
			animation: none;

			.img-box {
				width: 100%;
				height: 400px;
			}
			&:before, &:after {
				height: 100%;
				transform: none;
			}
			&:before {
				width: 10%;
				top: 0;
				left: 0;
				border-radius: 0 60px 60px 0;
				box-shadow: none;
				animation: ${leftMoAni1} 0.35s ease-in-out 0.3s 1 normal both;
			}
			&:after {
				content: '';
				position: absolute;
				left: unset;
				bottom: unset;
				right: 0;
				width: 10%;
				border-radius: 60px 0 0 60px;
				animation: ${leftMoAni2} 0.35s ease-in-out 0.5s 1 normal both;
			}
		}
		.right {
			padding: 36px 24px 71px 24px;

			.intro-area {
				h1 {
					font-size: 36px;

					em {
						display: inline-block;
					}
				}
				h2 {
					font-size: 20px;
				}
				> p {
					padding: 0;
					font-size: 15px;
				}
			}
			.info-area {
				margin: 48px 0 30px 0;
			}
		}
		br.pc {
			display: none;
		}
	}

	@media ${(props) => props.theme.smallMobile} {
		br.mobile {
			display: inline-block;
		}
	}

	@media ${(props) => props.theme.fold} {
		.left {
			padding: 20px;

			.img-box {
				width: 100%;
				height: 350px;
			}
		}
		br.mobile {
			display: inline-block;
		}
	}
`;

export default HomeConWrap;