import React from "react";
  import statusImg from '../assets/you.png'
  import statusNext from '../assets/user 4 (1).png'
  import statusForward from '../assets/user 1.png'
  import statusUser4 from '../assets/user 2.png'
  import statusUser5 from '../assets/user 3.png'
  import statusUser6 from '../assets/user 4 (2).png'
  import postInfoImg from '../assets/ProfilePicture (1).png'
  import postImage from '../assets/Rectangle 55 (1).png'
  import love from '../assets/Vector.png'
  import comment from '../assets/Vector (1).png'
  import share from '../assets/Group 33.png'
  import copy from '../assets/Vector (Stroke).png'
  import './middleSide.css'

const MiddleSide = () => {
  return (
<div className="middleHomeSide">
  <div className="storyBlock">

    <div className="storyParticular">
      <div className="imageDiv">
        <img className="statusImg" src={statusImg} alt="Status"/>
      </div>
      <div className="profileName"></div>
    </div>

    <div className="storyParticular">
      <div className="imageDiv">
        <img className="statusImg" src={statusNext} alt="Status"/>
      </div>
      <div className="profileName"></div>
    </div>
    <div className="storyParticular">
      <div className="imageDiv">
        <img className="statusImg" src={statusForward} alt="Status"/>
      </div>
      <div className="profileName"></div>
    </div>
    <div className="storyParticular">
      <div className="imageDiv">
        <img className="statusImg" src={statusUser4} alt="Status"/>
      </div>
      <div className="profileName"></div>
    </div>
    <div className="storyParticular">
      <div className="imageDiv">
        <img className="statusImg" src={statusUser5} alt="Status"/>
      </div>
      <div className="profileName"></div>
    </div>
    <div className="storyParticular">
      <div className="imageDiv">
        <img className="statusImg" src={statusUser6} alt="Status"/>
      </div>
      <div className="profileName"></div>
    </div>

    <div className="storyParticular">
      <div className="imageDiv">
        <img className="statusImg" src={statusForward} alt="Status"/>
      </div>
      <div className="profileName"></div>
    </div>
    <div className="storyParticular">
      <div className="imageDiv">
        <img className="statusImg" src={statusUser4} alt="Status"/>
      </div>
      <div className="profileName"></div>
    </div>
    <div className="storyParticular">
      <div className="imageDiv">
        <img className="statusImg" src={statusUser5} alt="Status"/>
      </div>
      <div className="profileName"></div>
    </div>
    <div className="storyParticular">
      <div className="imageDiv">
        <img className="statusImg" src={statusUser6} alt="Status"/>
      </div>
      <div className="profileName"></div>
    </div>

    </div>
  
   <div className="postSection">
    <div className="post">
      <div className="postInfo">
  <img className="postInfoImg" src={postInfoImg} alt="profile"/>
  <div className="postInfoUserName">mediamodifier</div>
      </div>
      <div className="postImg">
        <img className="postImage" src={postImage} alt="post"/>

      </div>
      <div className="iconBlock">
        <div className="leftIcon">
        <img src={love} alt="loveIcon"/>
        <img src={comment} alt="comment"/>
        <img src={share} alt="share"/>
        <div>
        </div>
        <img className="copy" src={copy} alt="copy"/>
        
      </div>
      </div>
      <div className="numberOfLikes">
      Liked by you and 905,235 others
      </div>
      <div className="postAbout">
        <div className="postAboutName">
      #mediamodifier #mockups #design #blackfriday<br/> #blackfridaysale #sale #cybermonday...more
      </div>
      </div>
      <div className="noOfComment">View all 103 comments</div>
      <div className="ago">HOUR AGO</div>
      <div className="addComment">Add a comment ...</div>
    </div>
  </div>
</div>
  )
}

export default MiddleSide;