import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  // same as setting props as an arguement, and defining as a const to access video data.
  // const video = props.video;

  // console.log(video.snippet);
  const imgUrl = video.snippet.thumbnails.default.url;
  const vidTitle = video.snippet.title;

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <div>
            <img className="media-object" src={imgUrl} />
          </div>
        </div>
      </div>
      <div className="media-body">
        <div className="media-heading" />
        <a href={imgUrl}>{vidTitle}</a>
      </div>
    </li>
  );
};

export default VideoListItem;
