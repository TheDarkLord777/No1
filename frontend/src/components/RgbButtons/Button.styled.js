import styled,{css} from "styled-components";

const colorMapping = {
  red: '#fd833f',
  yellow: '#fef158',
  green: '#8ec79b',
};
export const ButtonStyled=styled.button`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    cursor: pointer;
    border: none;
    background: ${({ $color }) => colorMapping[$color]};
    transition:transform 1s;
    ${({ $active })=> $active && css`
        border: 3px dashed black;
        box-shadow: 0 0 10px silver;
        transform: rotate(360deg);
    `}
    
`

export const ButtonContainer=styled.div`
display: flex;
gap: 10px;`