import React from 'react';
import { useEffect } from 'react';
import { ui } from '@/assets/js/common';
import Header from '@/components/organisms/Header';
import PageAni from '@/components/molecules/PageAni';

type pageWrapProps = {
	page : string;
	children? : React.ReactNode;
}

const PageWrap = (props:pageWrapProps) => {

	useEffect(() => {
		ui.fn.checkDevice(); // 초기 로드 시 한 번 실행
	
		// 리사이즈 이벤트 리스너 등록
		window.addEventListener('resize', ui.fn.checkDevice);
	
		// 컴포넌트 언마운트 시 리소스 정리
		return () => {
			window.removeEventListener('resize', ui.fn.checkDevice);
		};
	}, []); // 빈 배열로 최초 렌더링 후 한 번만 실행, 리사이즈 리스너는 여기서 설정

	return (
		<>
			<Header page={props.page} />
			{ props.children }
			<PageAni/>
		</>
	)
}

export default PageWrap;