import React from 'react';

const ImageDetail = (props) => {
  return(
        <li className="ImageDetail">
          <div className="media-left">
            <img src={props.image.link} alt=""/>
          </div>
          <div className="media-body">
            <div className="media-heading">
              {props.image.title}
            </div>
          </div>
        </li>
  );
};

export default ImageDetail;
