import Main from "./components/main/main";

const Container = (props) => {
  return <div className="container">{props.children}</div>;
}

function App() {
  return (
    <Container>
      <Main />
    </Container>
  );
}

export default App;
