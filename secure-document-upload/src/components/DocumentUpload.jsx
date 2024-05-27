import React, { useState } from 'react';
import { storage } from '../firebase'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const DocumentUpload = (props) => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);

    const storageRef = ref(storage, `uploads/${props.caseNumber}/${file.name}`);
    try {
      await uploadBytes(storageRef, file);
      const url = await getDownloadURL(storageRef);
      setDownloadURL(url);
      console.log('File uploaded successfully:', url);
    } catch (error) {
      console.error('Error uploading file:', error);
      alert("Error uploading file: " + error)
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <input type="file" accept="image/png" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {downloadURL && (
        <div>
          <p>File available at:</p>
          <a href={downloadURL} target="_blank" rel="noopener noreferrer">
            {downloadURL}
          </a>
        </div>
      )}
    </div>
  );
};

export default DocumentUpload;
