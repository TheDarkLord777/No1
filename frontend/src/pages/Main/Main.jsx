import styled from "styled-components";
import Header from "../../components/Header/Header.jsx";
import Content from "../../components/Content/Content.jsx";

const Main=()=>{
  return <Container >
    <Header />
    <Inside>
      <Content/>
    </Inside>
  </Container>
}
const Container=styled.div`
height: calc(100vh - 20px);
    width: calc(100% - 20px);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;


    @media (max-width: 768px) {
      height: calc(100vh - 10px);
      width: calc(100% - 10px);
    }
`;
const Inside = styled.div`
  flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  background: url("/assets/background.gif") no-repeat;
  background-position: center;
  background-size: cover;
`;
export default Main