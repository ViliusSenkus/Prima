import Main from "./components/main/main";
import Tasker from "./components/main/tasker";

const Container = (props) => {
  return <div className="container">{props.children}</div>;
}

function App() {
  return (
    <Container>
      <Main />
      <Tasker />
    </Container>
  );
}

export default App;
