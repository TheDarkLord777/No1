import styled, { keyframes } from "styled-components";
import { useTranslation } from "react-i18next";

const Content = () => {
    const { t } = useTranslation();
    return (
      <>
          <BigText>
              {t('content.sale').split('').map((char, index) => (
                <span key={index}>{char}</span>
              ))}
          </BigText>
          <BigText>
              {t('content.saleValue').split('').map((char, index) => (
                <span key={index}>{char}</span>
              ))}
          </BigText>
      </>
    );
}

const orbAnimation = keyframes`
    0% {
        transform:scale(0);
        bottom: -10%;
        opacity: 0;
    }
    50% {
        transform:scale(1);
        opacity: 0.8;
    }
    100% {
        transform:scale(0);
        opacity: 0;
        bottom: 90%;
    }
`;

const BigText = styled.div`
    display: flex;
    font-size: 10vw;
    font-weight: bold;
    color: #fff;
    text-align: center;
    position: relative;
    overflow: hidden;

    span {
        position: relative;
        display: inline-block;
        overflow: hidden;
    
    }

    span::before {
        content: '';
        position: absolute;
        bottom: -10%;
        left: 50%;
        width: 30%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background: red;
        transform: translateX(-50%);
        animation: ${orbAnimation} 2s infinite;
      
        
    }

    span:nth-child(odd)::before { animation-delay: 1s; }
    
    /* Add more nth-child selectors if necessary */
`;

export default Content;
