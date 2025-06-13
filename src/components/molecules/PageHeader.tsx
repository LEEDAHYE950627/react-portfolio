import React from "react";
import styled, { keyframes } from "styled-components";
import Heading from "@/components/atoms/Heading";

type PageHeaderProps = {
	text : string;
	point : string;
	children? : React.ReactNode;
}

const PageTitle = (props:PageHeaderProps) => {
	const textSplit = (text: string) => {
		return text.split('').map((char, idx) => (
			<span key={idx}>{ char }</span>
		));
	}

	return (
		<PageHeaderStyled className="page-tit">
			<Heading level="1" aria-label={`${props.text} ${props.point}`}>
				{ textSplit(props.text) }
				<span className="point">{' '}
					{ textSplit(props.point) }
				</span>
			</Heading>
			{ props.children }
		</PageHeaderStyled>
	)
}

const titleTopAni = keyframes`
	from {
		transform: translateY(20px);
	}

	to {
		transform: translateY(0px);
	}
`;
const titleBomAni = keyframes`
	from {
		transform: translateY(-20px);
	}

	to {
		transform: translateY(0px);
	}
`;
const titleSizeAni = keyframes`
	from {
		transform: scaleX(0.6);
	}

	to {
		transform: scaleX(1);
	}
`;

const PageHeaderStyled = styled.div`
	padding: 80px 0;
	text-align: center;

	h1 {
		font-size: 60px;
		font-weight: 900;
		line-height: 1.2;
		letter-spacing: 1px;
		animation: ${titleSizeAni} 0.65s ease 0.5s 1 normal both;

		span {
			display: inline-block;
		}
		.point {
			padding-left: 15px;
		}
		span:not(.point), .point > span {
			&:nth-child(odd) {
				animation: ${titleBomAni} 0.65s ease 0.5s 1 normal both;
			}
			&:nth-child(even) {
				animation: ${titleTopAni} 0.65s ease 0.5s 1 normal both;
			}
		}
	}

	@media ${(props) => props.theme.mobile} {
		padding: 50px 0;

		h1 {
			font-size: 44px;
		}
	}
`;

export default PageTitle;