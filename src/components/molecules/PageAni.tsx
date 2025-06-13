import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";

const PageAni = () => {
	const [isLoad, setIsLoad] = useState<boolean>(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoad(true);
		}, 300);

		return () => {
			setIsLoad(false);
		}
	},[])

	return (
		<PageAniStyled className={isLoad ? "off" : ""} aria-hidden={true} />
	)
}

const ani = keyframes`
	from {
		transform: scaleY(0);
	}

	to {
		transform: scaleY(1);
	}
`;

const PageAniStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: #000;
	transform-origin: bottom;
	z-index: 200;
	animation: ${ani} 0.5s ease-in-out 0.3s 1 reverse both;

	&:after {
		content: '';
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-top: 7px solid ${(props) => props.theme.mainColor};
		background-color: #181818;
		transform-origin: top;
		animation: ${ani} 0.5s ease-in-out 0s 1 normal both;
	}

`;


export default PageAni;