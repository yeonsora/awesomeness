import React, {Component} from 'react';
import styled, {injectGlobal, ThemeProvider} from "styled-components";
import theme from "./theme";

// body css설정을 위해 사용. 따로 component를 안만들어도 된다.
injectGlobal`
  body{
    padding:0;
    margin:0;
  }
`;


// styled Div Component
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

const Card = styled.div`
  background-color:red;
`;

const Button = styled.button`
  border-radius: 30px;
  padding:25px 15px;
  background-color: ${props => props.theme.successColor}
`;

class App extends Component {
  render() {
    return (
      // 테마 적용....  Button-> parents에서 뭐 적용하고 그럴 필요가 없음!!!
    <ThemeProvider theme={theme}>
      <Container>
        <Form />
      </Container>
    </ThemeProvider>
    )
  }
}

const Form = () => (<Card><Button>Hello</Button></Card>)


export default App;
