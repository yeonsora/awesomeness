import React, {Component} from 'react';
import styled, {injectGlobal, keyframes, css} from "styled-components";

// body css설정을 위해 사용. 따로 component를 안만들어도 된다.
injectGlobal`
  body{
    padding:0;
    margin:0;
  }
`;

// 나는 쉬운데, 디자이너들은 어려운거 아님?
//mixin : css그룹. 내가 그룹화 하고 싶은것. 재사용성이 뛰어남.
//shared해서 사용하면 됨.
const awesomeCard = css`
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.88);
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

// styled Div Component
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: pink;
`;

// styled Input Component
const Input = styled.input.attrs({
  required: true // placeholder와 같은 속성을 custom하게 만들기 위해 사용.
})`
  border : none;
  ${awesomeCard}; // css그룹을 적용
`;

class App extends Component {
  render() {
    // console.log(Container)
    return <Container>
      <Input placeholder="hello" />
    </Container>;
  }
}


export default App;
