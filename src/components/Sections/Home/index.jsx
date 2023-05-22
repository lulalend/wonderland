import { useRef, useEffect } from "react";
import ReactCurvedText from 'react-curved-text';

import "./index.scoped.css";

function Home(props) {
    const greetingText = "Больше, чем просто новелла"

    return (
        <div id="home">

                <div className="center home__img"></div>

                <div className="center home__dotted"></div>
                <div className="center home__bold"></div>
                <ReactCurvedText
                    width={570}
                    height={570}
                    cx={285}
                    cy={285}
                    rx={260}
                    ry={260}
                    startOffset={115}
                    reversed={true}
                    text={greetingText}
                    textProps={{}}
                    textPathProps={null}
                    tspanProps={null}
                    ellipseProps={null}
                    svgProps={null}
                />

                <div className="center home__cirlce" id="circle-1"></div>
                <div className="center home__cirlce" id="circle-2"></div>
                <div className="center home__cirlce" id="circle-3"></div>
                <div className="center home__cirlce" id="circle-4"></div>
                <div className="center home__cirlce" id="circle-5"></div>
                <div className="center home__cirlce" id="circle-6"></div>
        </div>
    );
}

export default Home;