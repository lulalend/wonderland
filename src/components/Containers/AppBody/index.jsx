import "./index.scoped.css"

// Компонент-обертка для верстки
function AppBody(props) {
    return (
        <div className="content">
          {props.children}
        </div>

    );
}

export default AppBody;
