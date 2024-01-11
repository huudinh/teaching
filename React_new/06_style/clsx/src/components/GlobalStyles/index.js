import './GlobalStyle.css';

function GlobalStyle({ children }) {
    return (
        <div style={{ padding: '5px 32px' }}>
            {children}
        </div>
    )
}

export default GlobalStyle;