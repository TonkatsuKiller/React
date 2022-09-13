import React from "react";
import { motion } from "framer-motion";
import $ from "jquery";

/* css */
import "./Main.css";

/* imgs */
import workImg from "../../imgs/work.jpg";

import project1 from "../../imgs/projects/project1.png";
import project2 from "../../imgs/projects/project2.jpg";

const Main = () => {
    return (
        <motion.div
            className="Main"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay: .3}}
            exit={{opacity: 0}}
        >
            <div className="ma">
                <div className="page1" id="page1">
                    <p className="info1">건전한 사람들의 모임</p>
                    <p className="info2">" 줄행랑 스튜디오 "</p>
                </div>
                <div className="page2" id="page2">
                    <p className="info1-2">즐거운 스튜디오 생활</p><br/>
                    <img className="work" src={workImg}/>
                    <p className="info2-2">모두가 즐기기 좋게 잡힌 생활 규칙들..</p>
                </div>
                <div className="page3" id="page3">
                    <p className="info1-3">현재까지 함께 이룬 프로젝트</p>
                    <div className="projects">
                        <div className="project">
                            <img src={project1}/>
                            <p>엠넷을 함께 공부</p>
                        </div>
                        <div className="project">
                            <img src={project2}/>
                            <p>픽셀 게임 " 아크오브운지 " 출시</p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <p>Copyright(©) 2022-present <strong>동양대학교 이진우</strong> All right reserved.</p>
                </div>
            </div>
        </motion.div>
    );
}

export default Main;