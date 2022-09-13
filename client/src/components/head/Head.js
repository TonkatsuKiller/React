import React, { useEffect } from "react";
import $ from "jquery";

/* css */
import "./Head.css";

const Head = () => {

    function scrollTop() {
        $("html").scrollTop(0);
    }

    const scrollEvent = () => {
        if (window.scrollY >= 30) {
            $(".Header").addClass("rd");
        }
        else if (window.scrollY < 30) {
            $(".Header").removeClass("rd");
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollEvent);
    })

    return (
        <div className="Header">
            <div className="logo">
                Logo
            </div>
            <div className="btns">
                <a onClick={scrollTop}><div className="btn">Introduce</div></a>
                <a href="#page2"><div className="btn">In life..</div></a>
                <a href="#page3"><div className="btn">Projects</div></a>
            </div>
        </div>
    );
}

export default Head;