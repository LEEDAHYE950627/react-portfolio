import styled from "styled-components";
import Heading from "@/components/atoms/Heading";
import aboutData from "@/assets/data/aboutData";

const AboutCompWrap = () => {
	return (
		<AboutCompStyled>
			<ul className="comp-list">
				{
					aboutData.companyList.map((data, idx) => (
						<li key={idx}>
							<div className="icon" aria-hidden={true}>
								<i className="fa-solid fa-building"></i>
							</div>
							<span className="period">{ data.period }{' '}
								{
									data.years !== "" && data.years !== undefined ? `(${ data.years })` : ""
								}
							</span>
							<Heading level="4">
								{ data.label }
								<span className="job">{ data.job }</span>
							</Heading>
							<p>{ data.detail }</p>
						</li>
					))
				}
			</ul>
		</AboutCompStyled>
	)
}

const AboutCompStyled = styled.div`
	width: 80%;
	margin: 0 auto;

	.comp-list {
		position: relative;
		margin-top: 10px;
		padding: 40px;
		border: 1px solid ${(props) => props.theme.mainColor};
		border-radius: 10px;

		li {
			position: relative;
			padding: 0 0 40px 60px;

			.icon {
				position: absolute;
				top: 0;
				left: 0;
				width: 42px;
				height: 42px;
				border-radius: 50%;
				background: ${(props) => props.theme.mainColor};
				font-size: 18px;
				text-align: center;
				line-height: 42px;
				z-index: 2;
			}
			.period {
				padding: 5px 15px;
				border-radius: 20px;
				background: rgb(37, 37, 37);
				font-size: 14px;
				font-weight: 500;
				text-align: center;
			}
			h4 {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				padding: 15px 0 8px 0;
				font-size: 18px;
				font-weight: 600;
				color: #fff;
			}
			.job {
				position: relative;
				padding-left: 30px;
				font-size: 15px;
				font-weight: 500;

				&:before {
					content: '';
					position: absolute;
					top: 50%;
					left: 7px;
					width: 15px;
					height: 1px;
					background: ${(props) => props.theme.mainTxtColor};
					transform: translateY(-50%);
				}
			}
			p {
				font-size: 15px;
				color: #e3e3e3;
			}
			
			&:before {
				content: '';
				position: absolute;
				top: 0;
				left: 21px;
				width: 1px;
				height: 100%;
				background: rgba(51,51,51);

			}
			&:last-child {
				padding-bottom: 0;
			}
		}
	}

	@media ${(props) => props.theme.mobile} {
		width: 100%;

		.comp-list {
			padding: 0;
			border: none;

			li {
				padding: 0 0 30px 46px;

				.icon {
					width: 36px;
					height: 36px;
					font-size: 15px;
					line-height: 36px;
				}
				.period {
					padding: 5px 12px;
					font-size: 13px;
				}
				p {
					font-size: 14px;
				}
				
				&:before {
					left: 18px;
				}
			}
		}
	}
	@media ${(props) => props.theme.smallMobile} {
		.comp-list {
			li {
				position: relative;
				padding: 0 0 30px 0;

				.icon {
					display: none;
				}

				&:before {
					content: none;
				}
				& + li:before {
					content: '';
					position: absolute;
					top: -15px;
					left: 0;
					width: 100%;
					height: 1px;
				}
			}
		}
	}
`;



export default AboutCompWrap;