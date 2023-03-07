import { css } from "@emotion/css";
import { Layout } from "antd";
import { Steps } from "antd";
import { useSelector } from "react-redux";
import { steps } from "./components/steps/steps";
const { Content } = Layout;
function App() {
  const current = useSelector((state) => state.multiStepReducer.current);
  const items = steps.map((item) => ({ key: item.id }));
  return (
    <div className={style}>
      <Layout className="wrapper">
        <Content className="content">
          <>
            <Steps current={current} items={items} responsive={false} />
            <div>{steps[current].content}</div>
          </>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
const style = css`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  .wrapper {
    max-width: 1366px;
    margin: 0 auto;
    background-color: transparent;
    border-radius: 7px;
  }
  .content {
    box-shadow: rgb(34 41 47 / 10%) 0px 4px 24px 0px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(34 41 47 / 10%) 0px 4px 24px 0px;
    background-color: rgb(255, 255, 255);
    margin: 2rem 1rem;
    border-radius: 7px;
    padding: 2rem 4rem;
  }
`;
