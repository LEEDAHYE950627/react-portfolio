import { useEffect, useState } from 'react';
import styled from "styled-components";
import { ui } from '@/assets/js/common';

type BlogPost = {
	title : string;
	link : string;
	description : string;
	pubDate : string;
}

const MemoWrap = () => {
	const [posts, setPosts] = useState<BlogPost[]>([]);

	useEffect(() => {
		const fetchRSS = async () => {
			try {
				const response = await fetch(
					`https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent('https://rss.blog.naver.com/dahye950627.xml')}`	
				);
				const data = await response.json();
				setPosts(data.items);
			} catch (error){
				console.log('블로그 포스팅을 불러오기 실패: ' + error);
			}
		}
		fetchRSS();
	}, []);

	posts.forEach(post => {
		const dateArr = post.pubDate.split(' ')[0].split('-');

		// 01,02,03 > Jan, Feb, Mar 변환
		post.pubDate = ui.fn.getMonthAbbr(parseInt(dateArr[1])) + " " + parseInt(dateArr[2]) + ", " + parseInt(dateArr[0]);
	})


	return (
		<MemoStyled>
			<ul>
				{
					posts.map((post, idx) => (
						<li key={idx}>
							<a href={post.link} target="_black">
								<span className="thum">BLOG</span>
								<div className="cont-box">
									<span className="date">{ post.pubDate }</span>
									<span className="tit">{ post.title }</span>
									<p className="desc">{ post.description }</p>
								</div>
							</a>
						</li>
					))
				}
			</ul>
		</MemoStyled>
	);
}

const MemoStyled = styled.div`
	li {
		padding: 32px 12px;
		border-bottom: 1px solid #333;

		a {
			display: flex;
			align-items: center;

			&:focus {
				outline: 1px dashed #e5e5e5;
			}

			.thum {
				position: relative;
				display: flex;
				justify-content: center;
				align-items: center;
				min-width: 250px;
				height: 150px;
				margin: 0 24px 0 0;
				border: 1px dashed ${(props) => props.theme.mainColor};
				border-radius: 4px;
				background-color: #333;
				font-weight: 400;
				color: #999;
				overflow: hidden;

				&:before {
					content: '';
					position: absolute;
					top: 0;
					left: -132px;
					width: 100%;
					height: 100%;
					background-color: ${(props) => props.theme.main};
					transform: rotate(90deg);
					transform-origin: center center;
				}
			}

			.cont-box {
				span {
					display: block;
				}
				.date {
					padding-bottom: 8px;
					font-size: 14px;
					font-weight: 300;
					color: #ccc;
				}
				.tit {
					position: relative;
					display: inline-block;
					font-size: 20px;
					font-weight: 500;
					color: ${(props) => props.theme.mainTxtColor};
					word-break: keep-all;

					&:before {
						position: absolute;
						left: 0;
						bottom: 1px;
						width: 100%;
						height: 4px;
						border-radius: 4px;
						background: linear-gradient(to right, #ff69b4, #8B03FF);
						z-index: -1;
					}
				}
				.desc {
					display: -webkit-box;
					-webkit-line-clamp: 4;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
					padding-top: 16px;
					font-size: 14px;
					font-weight: 300;
					word-break: break-all;
				}
			}
		}

		&:first-child {
			border-top: 1px solid #333;
		}
		&:nth-child(even){
			a {
				flex-direction: row-reverse;

				.thum {
					margin: 0 0 0 24px;
				}
			}
		}
	}

	@media ${(props) => props.theme.mobile} {
		li {
			padding: 24px 8px;

			a {
				display: block;

				.thum {
					min-width: unset;
					margin: 0 0 20px 0 !important;
				}

				.cont-box { 
					.date {
						font-size: 11px;
						padding-bottom: 4px;
					}
					.tit {
						font-size: 16px;
					}
					.desc {
						padding-top: 8px;
						font-size: 13px;
					}
				}
			}
		}
	}
`;


export default MemoWrap;