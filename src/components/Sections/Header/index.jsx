import { HashLink as Link } from "react-router-hash-link";

import AppContainer from "components/Containers/AppContainer";

import "./index.scoped.css";

function Header(props) {
    return (
        <AppContainer>
            <div className="header__content">

                <Link className="header__logo" to="#home">
                    <div className="header__logo__img" />
                    <h3>Wonderland</h3>
                </Link>

                <ul className="header__navigation">
                    {props.navigation.map(
                        (item, key) => (
                            <li key={key} className="navigation__btn"><Link to={item.link}>{item.title}</Link></li>
                        )
                    )}
                    {props.children}
                </ul>

            </div>
        </AppContainer>
    );
}

export default Header;