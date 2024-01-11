import GlobalStyle from "./components/GlobalStyles";
import Button from "./components/Button";

function App() {
  return (
    <GlobalStyle>
        <Button default>default</Button>
        <Button primary>primary</Button>
        <Button success>success</Button>
        <Button info>info</Button>
        <Button warning>warning</Button>
        <Button danger>danger</Button>
        <Button danger disabled>disabled</Button>
    </GlobalStyle>
  )
}

export default App;