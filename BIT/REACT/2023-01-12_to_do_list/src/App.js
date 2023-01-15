import Main from "./components/main/main";
import Header from "./components/header/header";

const Container = (props) => {
  return <div className="container d-flex ustify-content-center">{props.children}</div>;
}

function App() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

export default App;
