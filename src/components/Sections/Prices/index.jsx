import AppContainer from "components/Containers/AppContainer";
import TariffCard from "components/TariffCard";

import "./index.scoped.css";

function Prices() {
    return (
        <div id="prices">
            <AppContainer>
                <div id="tariffs">
                    <h1>Доступные тарифы:</h1>
                    <TariffCard title = "Базовый" price = "0 рублей"
                        text = "Вы сможете проходить базовые уровни без ограничений"
                        color = "var(--primary-1)"
                    />
                    <TariffCard title = "Улучшенный" price = "50 рублей"
                        text = "Вы получаете всё, что есть на базовом тарифе и дополнительные уровни, а также после прохождения уровня будет доступен Ваш психологический портрет"
                        color = "var(--primary-grad)"
                    />
                    <TariffCard title = "Pro" price = "100 рублей"
                        text = "Вы получите всё, что есть на продвинутом, и помимо этого картины, cгенерированные искусственным интеллектом"
                        color = "var(--primary-2)"
                    />
                </div>
            </AppContainer>
        </div>
    );
}

export default Prices;