import styled from "styled-components"
import {useTranslation} from "react-i18next";

const Content=()=>{
    const { t } = useTranslation();
    return <>
        <BigText>{t('content.sale')}</BigText>
        <BigText>{t('content.saleValue')}</BigText>

    </>
}
const BigText=styled.div`
    font-size: 8vw;
    text-align: center;
    background: linear-gradient(to bottom, #141730, #694351);
    color: transparent;
    background-clip: text;
    filter: brightness(2);
    text-shadow: 0 0 10px red;

`
export default Content