import styled from "styled-components";
import PageHeader from '@/components/molecules/PageHeader';
import PageWrap from '@/components/templates/PageWrap';
import MemoWrap from "@/components/organisms/MemoWrap";

const MemoPage = () => {
	return (
		<PageWrap page="memo">
			<MemoPageStyled>
				<PageHeader text="SIMPLE" point="NOTE" />
				<section>
					<MemoWrap />
				</section>
			</MemoPageStyled>
		</PageWrap>
	)
}

const MemoPageStyled = styled.main`
	section {
		position: relative;
		max-width: 1140px;
		margin: 0 auto 70px auto;
		padding-bottom: 70px;

		&:after {
			content: '';
			position: absolute;
			display: block;
			bottom: 0;
			left: 0;
			right: 0;
			width: 500px;
			height: 1px;
			margin: auto;
			background: rgba(37,37,37);
		}
		&:last-child {
			&:after {
				content: none;
			}
		}
	}

	@media ${(props) => props.theme.laptop} {
		section {
			width: 85%;
		}
	}
	@media ${(props) => props.theme.mobile} {
		section {
			width: 100%;
			padding: 0 24px 44px 24px;
			margin: 0 0 44px 0;

			&:after {
				width: 60%;
			}
		}
	}
`;

export default MemoPage;