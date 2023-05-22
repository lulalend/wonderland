import AppBody from "components/Containers/AppBody";
import AppContainer from "components/Containers/AppContainer";
import ServiceCard from "components/ServiceCard";
import Header from "components/Sections/Header";
import Home from "components/Sections/Home";
import Contact from "components/Sections/Contact"
import Prices from "components/Sections/Prices"
import Footer from "components/Sections/Footer"

import 'primeicons/primeicons.css';
import "./index.scoped.css";
import { useState } from 'react';
import AuthForm from 'components/Sections/AuthForm';

function MainPage() {
    const headerNavigation = [
        { title: "Главная", link: "#home" },
        { title: "О нас", link: "#about" },
        { title: "Контакты", link: "#contact" },
        { title: "Цены", link: "#prices" }
    ];

    const serviceContent = [
        { title: "Захватывающая история", text: "Погрузись в захватывающую историю, в которой от тебя зависят дальнейшее развитие сюжета и раскрытие персонажей.", url: "story.png" },
        { title: "Современный подход", text: "Искуственный интеллект, который даёт возможность отказаться от вариантов ответов, все решаешь именно ты. Выбери как будет развиваться история.", url: "technology.png" },
        { title: "Психологический анализ", text: "Проходя уровни, получай психологический анализ своей личности, мы тщательно проанализировали его, пока ты играл.", url: "psychology.png" }
    ]

    const [authActive, setAuthActive] = useState(false);
     
    return (
        <AppBody>
            <Header navigation={headerNavigation}>
                <div className="border__button button" onClick={() => {setAuthActive(true); document.querySelector("html").style.overflowY = "hidden";}}>
                    <div className="button__text">Войти</div>
                    <i className="button__img pi pi-user"></i>
                </div>
            </Header>

            <Home />

            <div id="about">
                <AppContainer>
                    <div className="about__content">
                        <ServiceCard content={serviceContent[0]}  />
                        <ServiceCard content={serviceContent[1]} />
                        <ServiceCard content={serviceContent[2]} />
                    </div>
                </AppContainer>
            </div>

            <Contact />
            <Prices />
            <Footer />

            <AuthForm active={authActive} setActive={setAuthActive} />
        </AppBody>
    );
}

export default MainPage;