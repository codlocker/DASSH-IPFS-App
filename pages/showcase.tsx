import Image from "next/image";

const Showcase = () => {
    // Sample image URLs
  const imageUrls = [
    'https://f595e216533050f5c2571992a7e9bc88.ipfscdn.io/ipfs/bafybeib4besqetdo3z5sfxjlltnzd2ze3o22sorayddl54va4755jgz3vu/',
    'https://f595e216533050f5c2571992a7e9bc88.ipfscdn.io/ipfs/bafybeihcfm4qwpz3kt7yghkmydmyso566c3es2qmtmhhym4gzof5ab7xh4/',
    'https://f595e216533050f5c2571992a7e9bc88.ipfscdn.io/ipfs/bafybeieav4iw3o2njw6bi5eifdti2iqb5ghsqyl2tjfahydun3orro2fra/'
  ];

  return (
    <div className="image-gallery">
      {imageUrls.map((imageUrl, index) => (
        <Image
          key={index}
          src={imageUrl}
          alt={`Image ${index + 1}`}
         />
      ))}

      <style jsx>{`
        .image-gallery {
          padding: 10px;
          margin: 0 100px;  
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
          max-width: 900px;
        }

        img {
          width: 30%; /* Adjust according to your preference */
          height: auto;
        }
      `}</style>
    </div>
  );
}

export default Showcase;