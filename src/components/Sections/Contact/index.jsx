import { useRef, useEffect } from "react";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

import AppContainer from "components/Containers/AppContainer";

import "./index.scoped.css";

function Contact(props) {
    return (
        <div id="contact">
            <AppContainer>
                <div className="wrapper">
                    <div className="contact__form half">
                        <h3>Задайте вопрос</h3>
                        <form>
                            <InputText placeholder="Ваше имя" type="text"/>
                            <InputText placeholder="Ваша почта" type="email"/>

                            <InputTextarea rows={5} cols={30} placeholder="Ваш вопрос" />
                        
                            <a href="http://localhost:3000/agile#home">
                                <Button endIcon={<SendIcon style={{fill: "var(--text-light)", margin: "0 1px 0 10px"}}/>}>
                                    Отправить
                                </Button>
                            </a>
                        </form>
                    </div>
                    <div className="half">
                        <h3>Соц. сети</h3>
                        <div className="contact__links">
                            <div className="card insta"></div>
                            <div className="card telegram"></div>
                            <div className="card vkontakte"></div>
                            <div className="card gitlab"></div>
                        </div>
                    </div>
                </div>
            </AppContainer>
        </div>
    );
}

export default Contact;