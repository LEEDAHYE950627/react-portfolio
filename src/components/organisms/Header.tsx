import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

type HeaderProps = {
	page : string
}

const Header:React.FC<HeaderProps>  = (props) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);

	return (
		<StyledHeader className={isOpen ? "open" : "close"}>
			<div className="nav-wrap">
				<ul>
					<li className={props.page === "home" ? "active" : ""}>
						<Link to="/" tabIndex={isOpen ? 0 : -1}>
							<span>HOME</span>
							<i className="fa-solid fa-house"></i>
						</Link>
					</li>
					<li className={props.page === "about" ? "active" : ""}>
						<Link to="/about" tabIndex={isOpen ? 0 : -1}>
							<span>ABOUT</span>
							<i className="fa-solid fa-circle-user"></i>
						</Link>
					</li>
					<li className={props.page === "projects" ? "active" : ""}>
						<Link to="/projects" tabIndex={isOpen ? 0 : -1}>
							<span>PROJECTS</span>
							<i className="fa-solid fa-list-check"></i>
						</Link>
					</li>
					<li className={props.page === "github" ? "active" : ""}>
						<Link to="/github" tabIndex={isOpen ? 0 : -1}>
							<span>GITHUB</span>
							<i className="fa-brands fa-github"></i>
						</Link>
					</li>
				</ul>
			</div>
			<button type="button" className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
				<span className="blind">{ isOpen ? "메뉴닫기" : "메뉴열기" }</span>
				<span className="arrow" aria-hidden="true"></span>
				<span className="arrow" aria-hidden="true"></span>
			</button>
		</StyledHeader>
	)
}

const menuBtnAni = keyframes`
	from {
		opacity: 0;
		transform: translateY(-5px);
	}

	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const StyledHeader = styled.header`
	position: fixed;
	top: 0;
	right: 10px;
	bottom: 0;
	z-index: 100;

	.nav-wrap {
		height: 100%;

		ul {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: flex-end;
			height: 100%;
			padding: 10px;
			transition: all 0.4s cubic-bezier(0.215, 0.610, 0.355, 1.000);
	
			li {
				a {
					position: relative;
					display: flex;
					align-items: center;
					padding: 13px;
					border-radius: 30px;
					background: #333;
					box-shadow: 0 0 8px 1px rgba(100,100,100,0.5);
					transition: all 0.2s;
	
					span {
						position: absolute;
						right: 0;
						font-weight: 500;
						color: transparent;
						opacity: 0;
						line-height: 1.2;
						transition: padding 0.3s, opacity 0.3s;
					}
					i {
						display: inline-block;
						width: 25px;
						height: 25px;
						font-size: 20px;
						text-align: center;
						line-height: 25px;
					}
					&:hover, &:focus {
						padding: 13px 13px 13px 22px;
						background: ${(props) => (props.theme.mainColor)};
						box-shadow: 0 0 8px 1px #c174ff;
						span {
							position: relative;
							padding-right: 12px;
							color: #fff;
							opacity: 1;
						}
					}
				}
				&.active {
					a {
						background: ${(props) => (props.theme.mainColor)};
						box-shadow: 0 0 8px 1px #c174ff;
					}
				}
				& + li {
					margin-top: 24px;
				}
			}
		}
	}
	.menu-btn {
		position: absolute;
		bottom: 20px;
		right: 50%;
		display: none;
		width: 40px;
		height: 40px;
		background: transparent;
		transform: translateX(50%);
		-webkit-tap-highlight-color: transparent;

		.arrow {
			position: absolute;
			top: 8px;
			left: 18px;
			display: inline-block;
			animation: ${menuBtnAni} 1.2s ease-in-out 0s infinite;

			&:before,&:after {
				content: "";
				position: absolute;
				top: 0;
				left: 0;
				width: 2px;
				height: 14px;
				border-radius: 1px;
				background: #707070;
			}
			&:before {
				transform-origin: right bottom;
				transform: rotate(55deg);
			}
			&:after {
				margin-left: 2px;
				transform-origin: left bottom;
				transform: rotate(-55deg);
			}

			&:last-child {
				top: 16px;
				animation: ${menuBtnAni} 1.2s ease-in-out 0s infinite;
			}
		}
	}

	@media ${(props) => props.theme.mobile} {
		padding-bottom: 70px;

		.nav-wrap {
			overflow: hidden;
			
			ul {
				justify-content: flex-end;
				transition: all 0.3s;
	
				li {
					a {
						&:hover, &:focus {
							padding: 13px;
							box-shadow: 0 0 8px 1px #c174ff;
	
							span {
								position: absolute;
								right: 0;
								opacity: 0;
								color: transparent;
							}
						}
					}
				}
			}
		}
		.menu-btn {
			display: inline-block;
		}

		&.close {
			.nav-wrap {
				ul {
					transform: translateY(300px);
				}
			}
			.menu-btn {
				transform: translateX(50%) rotate(180deg);
			}
		}
	}
`;


export default Header;