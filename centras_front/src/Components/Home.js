import React from 'react';
import './Home.css';
import main1 from '../img/centras_main1.JPG'

const style_bg={
  'background':'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))'
}

const Home = () => {
    return(
      <div>
        <img alt="main_bg" style={style_bg} src={main1} className="main_bg"></img>
        <div className="main-content"> 
          <div className="main-content-title">
          “Future Smart Form of Fisheries”
          </div>
          <div className="main-content-content">
            <p>어떻게 하면 양식장 운영을 효율적으로 할 수 있을까?</p>
            <p>어떻게 하면 불필요한 인력 고용을 막을 수 있을까?</p>
            <p>어떻게 하면 우리 양식업을 발전시킬까?</p>
            <p>고민하고 만들었습니다.</p>
          </div>
      </div>
      </div>
    );
};
export default Home;