import React from "react";

const images = [
  { 
    id: 1, 
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREZStESwkDMlepHTV3sCzTTFmBx08eeRx63w&s", 
    description: "Golden sunset view" 
  },
  { 
    id: 2, 
    url: "https://www.travelandleisure.com/thmb/vUg27nvDbB-7wOnPngrSwJcklfs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/matira-beach-bora-bora-WRLDBEACH0421-ea58c57679554cdea45cc6e51ce598de.jpg", 
    description: "A beautiful beach" 
  },
  { 
    id: 3, 
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgXJaBMPU1rlfOL0AGgaFF169E8-QWXNtbbA&s", 
    description: "Mountain landscape" 
  }
];

const ImageGallery = () => {
  return (
    <div>
      <h2>Image Gallery</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        {images.map(img => (
          <div key={img.id}>
            <img src={img.url} alt={img.description} style={{ width: "200px", height: "200px", objectFit: "cover" }} />
            <p>{img.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
