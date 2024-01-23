import { useState } from 'react';


const ImageUploader = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const handleFileChange = (event) => {
      const file = event.target.files[0];
  
      if (file) {
        const reader = new FileReader();
  
        reader.onloadend = () => {
          setSelectedImage(reader.result);
        };
  
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div>
        <input type="file" accept="image/*" onChange={handleFileChange} />
        {selectedImage && <img src={selectedImage} alt="Uploaded" width="200px" style={{border:"3px solid green", marginBottom: "30px"}} />}
      </div>
    );
  };
  
  export default ImageUploader