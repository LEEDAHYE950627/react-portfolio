import styled from "styled-components";
import aboutData from "@/assets/data/aboutData";

const AboutCertiWrap = () => {
	return (
		<AboutCertiStyled>
			{
				aboutData.certificateList.map((item, idx) => (
					<div className="certi-box" key={idx}>
						<div className="inner">
							<div className="icon">
								<i className="fa-solid fa-address-card"></i>
							</div>
							<strong className="tit">{ item.label }</strong>
							<span className="desc">{ item.issuer }</span>
						</div>
					</div>
				))
			}
		</AboutCertiStyled>
	)
}

const AboutCertiStyled = styled.div`
	display: flex;
	width: 80%;
	margin: 0 auto;

	.certi-box {
		width: 50%;
		padding: 24px 12px 12px;
		
		.inner {
			position: relative;
			display: flex;
			justify-content: space-between;
			padding: 20px;
			border: 1px solid #8B03FF;
			border-radius: 6px;
			background: ${(props) => props.theme.mainColor};

			.icon {
				position: absolute;
				top: -24px;
				left: 18px;
				width: 50px;
				height: 40px;
				border-radius: 6px;
				background: ${(props) => props.theme.mainColor};
				font-size: 24px;
				text-align: center;
			}
			.tit {
				font-weight: 600;
			}
			.desc {
				font-size: 14px;
			}
		}
		
		
	}

	@media ${(props) => props.theme.laptop} {
		.certi-box {
			.inner {
				flex-direction: column;
				text-align: center;
			}
		}
	}
	@media ${(props) => props.theme.mobile} {
		width: 100%;
		flex-direction: column;
		align-items: center;

		.certi-box {
			width: 100%;
			padding: 24px 0 12px 0;
			
			.inner {
				padding: 12px 20px 10px 20px;
				
				.icon {
					top: -20px;
					left: 14px;
					width: 42px;
					height: 30px;
					font-size: 18px;
				}
				.tit {
					font-size: 14px;
				}
				.desc {
					font-size: 12px;
				}
			}
		}
	}
	@media ${(props) => props.theme.smallMobile} {
		width: 100%;
	}
`;


export default AboutCertiWrap;