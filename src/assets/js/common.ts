import config from '@/assets/config';

export const ui = {
    fn: {
        // 초기 설정
        init(){
            document.documentElement.style.setProperty('--main-color', config.mainColor);
        },
        // iOS, Android, 모바일 웹을 감지
        checkDevice(){
            const userAgent = navigator.userAgent;
            
            if (/iPhone|iPad|iPod|Android/i.test(userAgent)) {
                document.documentElement.classList.add('is-device');
            } else {
                document.documentElement.classList.remove('is-device');
            }
        },
        // 블로그 날짜 변환
        getMonthAbbr(month:number){
            const monthAbbr = [
                "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
            ];
            return monthAbbr[month-1];
        },
    }
}

ui.fn.init();