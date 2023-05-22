import AppContainer from 'components/Containers/AppContainer';

import { InputText } from 'primereact/inputtext';
import Button from '@mui/material/Button';

import "./index.scoped.css";
import "assets/instagram.png";
import { useState } from 'react';

function AuthForm({active, setActive}) {
    
    const [authActive, setAuthActive] = useState(true);
    
    return(
       <div className={active ? "auth__form active" : "auth__form"} onClick={() => {setActive(false); document.querySelector("html").style.overflowY = "auto";}}>
            <AppContainer>
                <div className={authActive ? "sign__up active" : "sign__up"} onClick={e => e.stopPropagation()}>
                    <div className="card auth"></div>
                    <h2 className="form__title">Создайте аккаунт</h2>
                    <form>
                            <InputText placeholder="Введите почту" type="email" required />
                            <InputText placeholder="Введите пароль" type="password" required />
                            <InputText placeholder="Повторите пароль" type="password" required />
                    
                        <a href="http://localhost:3000/agile#home">
                            <Button onClick={() => {setActive(false); document.querySelector("html").style.overflowY = "auto";}}>
                                Создать
                            </Button>
                        </a>
                    </form>
                    <p>или <a onClick={() => setAuthActive(false)}>войдите!</a></p>
                </div>

                <div className={authActive ? "log__in" : "log__in active"} onClick={e => e.stopPropagation()}>
                    <div className="card login"></div>
                    <h2 className="form__title">Войдите в аккаунт</h2>
                    <form>
                            <InputText placeholder="Введите почту" type="email" />
                            <InputText placeholder="Введите пароль" type="password" />
                    
                        <a href="http://localhost:3000/agile#home">
                            <Button onClick={() => {setActive(false); document.querySelector("html").style.overflowY = "auto";}}>
                                Войти
                            </Button>
                        </a>
                    </form>
                    <p>или <a onClick={() => setAuthActive(true)}>создайте его!</a></p>
                </div>
            </AppContainer>
       </div> 
    );
}

export default AuthForm;