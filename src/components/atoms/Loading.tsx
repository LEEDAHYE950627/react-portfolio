import styled, { keyframes } from "styled-components";

const Loading = () => {
  return (
    <LoadingStyled className="loading" aria-label="로딩중">
      <div className="dot-group">
        <span className="dot d1" aria-hidden="true"></span>
        <span className="dot d2" aria-hidden="true"></span>
        <span className="dot d3" aria-hidden="true"></span>
      </div>
    </LoadingStyled>
  );
};

const dot1Ani = keyframes`
  33% {
    top: 50px;
    left: 5px;
  }
  66% {
    top: 50px;
    left: 55px;
  }
  99% {
    top: 10px;
    left: 30px;
  }
`;

const dot2Ani = keyframes`
  33% {
    bottom: 10px;
    left: 55px;
  }
  66% {
    bottom: 50px;
    left: 30px;
  }
  99% {
    bottom: 10px;
    left: 5px;
  }
`;

const dot3Ani = keyframes`
  33% {
    bottom: 50px;
    right: 30px;
  }
  66% {
    bottom: 10px;
    right: 55px;
  }
  99% {
    bottom: 10px;
    right: 5px;
  }
`;

const LoadingStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.85);
  z-index: 500;

  .dot-group {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 80px;
    height: 80px;
    transform: translate(-50%,-50%);

    .dot {
      position: absolute;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background-color: #fff;
  
      &.d1 {
        top: 10px;
        left: 30px;
        background-color: ${(props) => props.theme.mainColor};
        animation: ${dot1Ani} 1.5s cubic-bezier(0.785, 0.135, 0.150, 0.860) 0s infinite;
        
      }
      &.d2 {
        left: 5px;
        bottom: 10px;
        background-color: ${(props) => props.theme.mainTxtColor};
        animation: ${dot2Ani} 1.5s cubic-bezier(0.785, 0.135, 0.150, 0.860) 0s infinite;
      }
      &.d3 {
        bottom: 10px;
        right: 5px;
        background-color: #fff;
        animation: ${dot3Ani} 1.5s cubic-bezier(0.785, 0.135, 0.150, 0.860) 0s infinite;
      }
    }
  }
`;

export default Loading;
