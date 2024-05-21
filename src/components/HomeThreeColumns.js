import React from "react";
import '../scss/HomeThreeColumns.scss'

const HomeThreeColumns = () => {
    return (
        <div className="three-columns">
            <div className="column">
                <p>10</p>
                <h4>ODDANYCH WORKOW</h4>
                <section>
                   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque deleniti distinctio magnam molestias mollitia nobis, pariatur!
                </section>
            </div>
            <div className="column">
                <p>5</p>
                <h4>WSPARTYCH ORGANIZACJI</h4>
                <section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque deleniti distinctio magnam molestias mollitia nobis, pariatur!
                </section>
            </div>
            <div className="column">
                <p>7</p>
                <h4>ZORGANIZOWANYCH ZBIOREK</h4>
                <section>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus atque deleniti distinctio magnam molestias mollitia nobis, pariatur!
                </section>
            </div>
        </div>
    )
}

export default HomeThreeColumns;