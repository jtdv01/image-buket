import React from 'react';
import ImageDetail from './image_detail';

// const IMAGES = [
//   {title: 'Pen',link: 'http://dummyimage.com/600x400'},
//   {title: 'Pine Tree', link: 'http://dummyimage.com/600x400'},
//   {title: 'Mug', link: 'http://dummyimage.com/600x400'}
// ];

// Create image list component
const ImageList = (props) => {
  const validImages = props.images.filter(x => !x.is_album);

  const RenderedImages = validImages.map(image =>
    <ImageDetail key={image.title} image={image}/>
  );

  return(
  <ul className="media-list list-group">
    {RenderedImages}
  </ul>
  );
};

// Create our component

// Export component
export default ImageList;
