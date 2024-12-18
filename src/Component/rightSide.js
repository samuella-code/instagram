import React from "react";
 import './rightSide.css';
 import RightImage from '../assets/Profile-Pic.png' 
 import profile from '../assets/Profile-Pic (1).png'
const RightSide = () =>{
  return(
<div className="rightSideHome">
  <div className="topProfileRight">
    <div className="leftRightProfile">
    <div className="imageDivRightSide">
      <img className="imageRightSideProfile" src={RightImage} alt="rightImage"/>
    </div>
    <div className="userNameBlock">
      <div className="userNameRightSide">mediamodifier</div>
      <div className="userfullName">Mediamodifier•Building Brands</div>
    </div>
    </div>
    <div className="switchBtn">Switch
  </div>
</div>
<div className="bottomRightSide">
  <div className="suggestedBlock">
    <div className="suggestedForYou">Suggestions For You</div>
    <div className="seeAll">See All</div>
  </div>
  <div className="followBlock">

  <div className="topProfileRightBottomProfile">
    <div className="leftRightProfile">
    <div className="imageDivRightSide">
      <img className="imageRightSideProfile" src={profile} alt="follow"/>
    </div>
    <div className="userNameBlock">
      <div className="userNameRightSide">lucas</div>
      <div className="userfullName">Followed by mark +2 more</div>
    </div>
    </div>
    <div className="switchBtn">Follow
  </div>
</div>

<div className="topProfileRightBottomProfile">
    <div className="leftRightProfile">
    <div className="imageDivRightSide">
      <img className="imageRightSideProfile" src={profile} alt="follow"/>
    </div>
    <div className="userNameBlock">
      <div className="userNameRightSide">laura</div>
      <div className="userfullName">Followed by brandon + 6 more</div>
    </div>
    </div>
    <div className="switchBtn">Follow
  </div>
</div>

<div className="topProfileRightBottomProfile">
    <div className="leftRightProfile">
    <div className="imageDivRightSide">
      <img className="imageRightSideProfile" src={profile} alt="follow"/>
    </div>
    <div className="userNameBlock">
      <div className="userNameRightSide">rikki</div>
      <div className="userfullName">Followed by mik + 1 more</div>
    </div>
    </div>
    <div className="switchBtn">Follow
  </div>
</div>

<div className="topProfileRightBottomProfile">
    <div className="leftRightProfile">
    <div className="imageDivRightSide">
      <img className="imageRightSideProfile" src={profile} alt="follow"/>
    </div>
    <div className="userNameBlock">
      <div className="userNameRightSide">elrani</div>
      <div className="userfullName">Followed by ednamanz + 1 more</div>
    </div>
    </div>
    <div className="switchBtn">Follow
  </div>
</div>

<div className="topProfileRightBottomProfile">
    <div className="leftRightProfile">
    <div className="imageDivRightSide">
      <img className="imageRightSideProfile" src={profile} alt="follow"/>
    </div>
    <div className="userNameBlock">
      <div className="userNameRightSide">tomaska</div>
      <div className="userfullName">Followed by katarinasteling + 2 m...</div>
    </div>
    </div>
    <div className="switchBtn">Follow
  </div>
</div>
<div className="footer">
  About press API jobs privacy Terms Locations <br/> Top Accounts Hashtags Language
</div>
<div className="meta">© 2021 INSTAGRAM FROM META</div>
  </div>
</div>
</div>
  )
}
export default RightSide;