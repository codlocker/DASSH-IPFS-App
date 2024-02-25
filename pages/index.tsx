import React, { useState } from "react";
import { useStorageUpload } from "@thirdweb-dev/react";
import { FileUploader } from "react-drag-drop-files";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  const [file, setFile] = useState<any>();
  const [isUploading, setIsUploading] = useState(false);
  const [uploadFileUri, setUploadFileUri] = useState('');
  const { mutateAsync: upload } = useStorageUpload();

  const uploadToIpfs = async () => {
    if(file) {
      setIsUploading(true);
      const uploadURL = await upload({
        data: [file],
        options: {
          uploadWithGatewayUrl: true,
          uploadWithoutDirectory: true
        }
      })
      
      if(uploadURL.length > 0) {
        setUploadFileUri(uploadURL[0]);
        setIsUploading(false);
      }
    }
  }

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleDrop = (files: FileList) => {
    setFile(files[0]);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>File Upload</h1>
        <div className={styles.dragDropContainer}>
          <FileUploader
            handleChange={handleDrop}
            name="file"
            types={["JPG", "PNG", "GIF"]}
            className={styles.dragDrop}
          />
        </div>
        <input type="file" onChange={handleFileChange} className={styles.fileUpload} />
        <button className={styles.uploadBtn} onClick={uploadToIpfs} disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload'}
        </button>
        {isUploading && <div className={styles.spinner}></div>}
        <p className={styles.uploadUrl}>Upload URL: {uploadFileUri}</p>


        { uploadFileUri && <img src={uploadFileUri} alt="Image" className={styles.imagePostView}></img> }
      </div>
    </main>
  );
};

export default Home;
