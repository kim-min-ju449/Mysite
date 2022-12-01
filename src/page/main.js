import React from 'react'
import {FaInstagram, FaGithub} from 'react-icons/fa';
import jeju1 from '../img/jeju1.jpg';
import jeju2 from '../img/jeju2.jpg';
import gr1 from '../img/gr1.jpg';

const Main = () => {
	return (
		<div className="mp">
            <div className="info">
                
                <h3>학교: 미림여자정보과학고등학교</h3>
                <h3>학과: 뉴미디어 웹솔루션과</h3>
                <h3> {FaInstagram} insta:minju_1158</h3>
                <h3> {FaGithub}Github:<a href="https://github.com/kim-min-ju449" target="_blank">here</a></h3>
                
                
            </div>
            <h1>MY FAVORITE</h1>
            <h3>MUSIC</h3>
            <iframe width="642" height="361" src="https://www.youtube.com/embed/dmSUBdk4SY4" title="마크툽 (MAKTUB) - 오늘도 빛나는 너에게(To You My Light)(Feat.이라온) Lyrics Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <h3>오늘도 빛나는 너에게 By 마크툽</h3>
            <div className="travel">
                <h1>TRAVEL✈</h1>
                <div className="imgdiv">
                <img src={jeju1}></img>
                <img src={jeju2}></img>
                </div>
                <p>2020. 1.19 ~ 2020.1.21</p>
                <h2>제주도 여행</h2>

                <div className="imgdiv">
                <img src={gr1}></img>
                <img src={jeju2}></img>
                </div>
                <p>2020. 2.1 ~ 2020.2.3</p>
                <h2>강릉 여행</h2>
                
            </div>
            <div className="hometown">
                <h1>HOMETOWN🏠</h1>
                <h2>경기도 끝에 있는 평택시에 대해서</h2>
                <div className="imgdiv">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d352914.32517324353!2d126.94409678788281!3d37.02237923244837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b17e2750b4685%3A0x2633d4ac7a57eb49!2z6rK96riw64-EIO2Pie2DneyLnA!5e0!3m2!1sko!2skr!4v1669894451690!5m2!1sko!2skr"></iframe>
                </div>
            </div>
            <div className="stacks">
                <h1>STACKS📖</h1>
                <div className="stackimg">
                <div className="scon">
                        <img src="https://velog.velcdn.com/images/gga4638/post/6d9df8cb-5086-4fa9-83d1-521fd6a2cb27/image.png"></img>
                        <h3>Html+CSS+<br/>Javascript</h3>
                        <p>학습기간: 2020. 4 ~ </p>
                    </div>
                    <div className="scon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/300px-React-icon.svg.png"></img>
                        <h3>React</h3>
                        <p>학습기간: 2022. 5 ~ </p>
                    </div>
                    <div className="scon">
                        <img src="https://velog.velcdn.com/images/codemcd/post/f74f8131-e2a7-4424-bd05-73c5869f49bb/Java_Logo.png"></img>
                        <h3>Java</h3>
                        <p>학습기간: 2020. 5 ~ 2021. 12</p>
                    </div>
                    <div className="scon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/182px-Python-logo-notext.svg.png"></img>
                        <h3>Python</h3>
                        <p>학습기간: 2021. 3 ~ 2021. 12</p>
                    </div>
                    <div className="scon">
                        <img src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FOVQIB%2FbtqUto772MZ%2FCWKw9qqCSsaBPsYJxp6kyK%2Fimg.png"></img>
                        <h3>C</h3>
                        <p>학습기간: 2020. 9 ~ 2020. 12</p>
                    </div>
                    <div className="scon">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"></img>
                        <h3>Oracle</h3>
                        <p>학습기간: 2021. 4 ~ 2022. 6</p>
                    </div>

                
                </div>
            </div>
        </div>
	)
}
export default Main;