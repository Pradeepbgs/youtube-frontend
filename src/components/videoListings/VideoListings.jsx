import React from "react";

const VideoListings = ({
  imgWidth = "w-[20vw]",
  imgHeight = "h-[25vh]",
  mainDIvWidth = "w-screen",
  titleWidth = "w-[65%]",
  titleSize = "text-[1.2rem]",
  titleFont = "font-semibold",
  showVideoDescription = true,
  descriptionWidth = "w-[40vw]",
  video
}) => {


  return (
    <div className={`${mainDIvWidth}`}>
        <div className="py-1">
    
        <div className="text-white ml-3 mt-4 flex" >
          <div>
            <img 
            className={`${imgWidth} ${imgHeight}`}
            src={video.thumbnail} alt="" />
          </div>
          <div className="ml-2 w-[37%]">
            <h1 className={`${titleFont} ${titleWidth} ${titleSize}`}>JavaScript Fundamentals: Variables and Data Types</h1>
            <p className="mb-1">200k • views</p>
            <div className="flex items-center mb-2">
              <img
                className="w-9 mr-3 rounded-full"
                src="https://assets.stickpng.com/thumbs/585e4beacb11b227491c3399.png"
                alt=""
              />
              <p>Username</p>
            </div>
            {showVideoDescription && <span className={``}>
              <p className={`${descriptionWidth}`}>
              Learn the basics of JavaScript, including variables, data types,
              and how to use them in your programs.
              </p>
            </span>}
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoListings;
