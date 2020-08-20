import React from 'react'

const ImageList = (props) => {

    const list = props.images.map((image) => {
        return <img key={image.id} src={image.urls.regular} alt={image.description} />
    })
    return(
        <div>{list}</div>
    );
};

export default ImageList;