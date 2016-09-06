import React from 'react';

const ImageScore = (props) => {
  // props.ups upvotes
  // props.downs is downvotes

  // similar to const ups = props.ups; const downs = props.downs;
  const { ups, downs } = props;

  const upsPercent = `${100 * (ups / (ups+downs))}%`;
  const downsPercent = `${100 * (downs / (ups+downs))}%`;

  // a single {} means there is a js inside
  // another {} means that is object inside
  // style{{}}

  return(
    <div>
      Ups/Downs
      <div className="progress">
        <div style={{ width: upsPercent }} className="progress-bar progress-bar-success progress-bar-striped" />
        <div style={{ width: downsPercent }} className="progress-bar progress-bar-danger progress-bar-striped" />
      </div>
    </div>
  );
};

export default ImageScore;
