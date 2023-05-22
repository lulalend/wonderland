import "./index.scoped.css"

// Компонент-обертка для секций
function AppContainer(props) {
    return (
        <div className="container">
            {props.children}
        </div >
    );
}

export default AppContainer;
