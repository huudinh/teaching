import GlobalStyle from "./components/GlobalStyles";
import Heading from "./components/Heading";
import Paragraph from "./components/Paragraph";

function App() {
  return (
    <GlobalStyle>
      <div style={{ padding: '0 32px' }}>
        <Heading />
        <Paragraph />
        <div className='d-flex'>
          <div>Item1</div>
          <div>Item2</div>
        </div>
      </div>
    </GlobalStyle>
  )
}

export default App;