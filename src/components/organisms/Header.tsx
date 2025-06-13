import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

type HeaderProps = {
	page : string;
}

const Header = (props:HeaderProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(true);
	const [isLoad, setIsLoad] = useState<boolean>(false);

	useEffect(() => {
		setInterval(() => {
			setIsLoad(true);
		}, 500);
		
		return () => {
			setIsLoad(false);
		}
	}, []);

	return (
		<StyledHeader className={isOpen ? "open" : "close"}>
			<div className={`nav-wrap ${isLoad ? "on" : ""}`} aria-hidden={isOpen ? "false" : "true"}>
				<ul>
					<li className={props.page === "home" ? "active" : ""}>
						<Link to="/" tabIndex={isOpen ? 0 : -1}>
							<span>HOME</span>
							<i className="fa-solid fa-house" aria-hidden="true"></i>
						</Link>
					</li>
					<li className={props.page === "about" ? "active" : ""}>
						<Link to="/about" tabIndex={isOpen ? 0 : -1}>
							<span>ABOUT</span>
							<i className="fa-solid fa-circle-user" aria-hidden="true"></i>
						</Link>
					</li>
					<li className={props.page === "projects" ? "active" : ""}>
						<Link to="/projects" tabIndex={isOpen ? 0 : -1}>
							<span>PROJECTS</span>
							<i className="fa-solid fa-list-check" aria-hidden="true"></i>
						</Link>
					</li>
					<li className={props.page === "memo" ? "active" : ""}>
						<Link to="/memo" tabIndex={isOpen ? 0 : -1}>
							<span>NOTE</span>
							<i className="fa-solid fa-pencil" aria-hidden="true"></i>
						</Link>
					</li>
					<li className={props.page === "github" ? "active" : ""}>
						<Link to="https://github.com/LEEDAHYE950627/react-portfolio" target="_blank" tabIndex={isOpen ? 0 : -1} aria-label="깃허브 소스보러가기">
							<span>GITHUB</span>
							<i className="fa-brands fa-github" aria-hidden="true"></i>
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
		opacity: 0;
		transform: translateY(40px);
		transition: transform 0.6s ease, opacity 0.8s ease;

		&.on {
			transform: translateY(0);
			opacity: 1;
		}

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
					transition: all 0.2s;
					box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.6);
	
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
					}
				}
				& + li {
					margin-top: 24px;
				}
			}
		}
	}
	.menu-btn {
		position: fixed;
		bottom: 20px;
		right: 23px;
		display: none;
		width: 44px;
		height: 44px;
		background: transparent;

		&:focus {
			outline: 1px dashed #aaa;
		}

		.arrow {
			position: absolute;
			top: 8px;
			left: calc(50% - 2px);
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
			position: fixed;
			bottom: 64px;
			right: 9px;
			overflow: hidden;
			height: auto;
			
			ul {
				position: relative;
				justify-content: flex-end;
				height: auto;
				transition: transform 0.3s ease-in-out , opacity 0.2s;

				li {
					a {
						&:hover, &:focus {
							padding: 13px;
							box-shadow: 0 0 8px 1px ${(props) => props.theme.mainTxtColor};
	
							span {
								position: absolute;
								right: 0;
								opacity: 0;
								color: transparent;
								font-size: 0;
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
					opacity: 0;
					transform: translateY(300px);
				}
			}
			.menu-btn {
				transform: rotate(180deg);
			}
		}
	}
`;


export default Header;
