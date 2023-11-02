const heading = React.createElement(
    'h1',
    {
        id:"heading",
        xyx:"abc"
    },
    'Hello World from React');

const parent = React.createElement(
    'div',
    {
        id:"parent"
    },
    [heading, React.createElement("h2", null, "Hello World from React")]
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);