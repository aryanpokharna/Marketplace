import React from "react";
import "./Main.css";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import { useState, useEffect } from "react";

const Main = ({selectedPunk, punkListData}) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk])
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img src={activePunk.image_url}
                className="selectedPunk"
            />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title"> 
            {activePunk.name} #{activePunk.token_id}
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img src={activePunk.owner.profile_img_url}/>
            </div>

            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div> {activePunk.owner.address} </div>
                <div className="ownerHandle">
                    @renrenren
                </div>
              </div>

              <div className="ownerLink">
                <img src={instagramLogo} />
              </div>

              <div className="ownerLink">
                <img src={twitterLogo} />
              </div>

              <div className="ownerLink">
                <img src={moreIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;
