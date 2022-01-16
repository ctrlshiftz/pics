import React from 'react';

const ImageList = ({ images }) => {
	const photos = images.map((image) => {
		return <img key={image.id} src={image.urls.regular} alt={image.alt_description} />;
	});
	console.log(images);
	return <div>{photos}</div>;
};

export default ImageList;
