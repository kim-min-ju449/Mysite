import React from 'react'
import {FaInstagram, FaGithub} from 'react-icons/fa';
const Main = () => {
	return (
		<div>
            <div className="info">
                
                <h3>학교: 미림여자정보과학고등학교</h3>
                <h3>학과: 뉴미디어 웹솔루션과</h3>
                <h3> {FaInstagram} insta:minju_1158</h3>
                <h3> {FaGithub}Github:<a href="https://github.com/kim-min-ju449" target="_blank">here</a></h3>
                <h1>MY FAVORITE</h1>

                
            </div>
            <div className="travel">
                <h1>TRAVEL✈</h1>
                <div className="imgdiv">
                <img src="https://cdn.pixabay.com/photo/2019/06/11/07/36/shiroyama-hiji-peak-4266254_1280.jpg"></img>
                <img src="https://cdn.pixabay.com/photo/2019/06/11/07/36/shiroyama-hiji-peak-4266254_1280.jpg"></img>
                </div>
                <p>2020. 1.19 ~ 2020.1.21</p>
            </div>
            <div className="hometown">
                <h1>HOMETOWN🏠</h1>
                <div className="imgdiv">
                
                </div>
            </div>
            <div className="hometown">
                <h1>STACKS📖</h1>
                <div className="imgdiv">
                
                </div>
            </div>
        </div>
	)
}
export default Main;