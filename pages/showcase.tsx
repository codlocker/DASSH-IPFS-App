const Showcase = () => {
    // Sample image URLs
  const imageUrls = [
    'https://477ec3fc51413cad7ffa7ddd75a3b1e4.ipfscdn.io/ipfs/bafybeif6t5kbtd3yocque6q4bl7rvgxdsxrkitfm6q5d25g27uiv5eiaa4/',
    'https://477ec3fc51413cad7ffa7ddd75a3b1e4.ipfscdn.io/ipfs/bafybeigihpgq4mfe3lwb6sfol3sznirv3kqlkp2a74kum66hjngtwtsfja/',
    'https://477ec3fc51413cad7ffa7ddd75a3b1e4.ipfscdn.io/ipfs/bafybeif6g4inajyxmtjimcvorpmmrxkezyyowhugluzq2ytwa6iundoozi/'
  ];

  return (
    <div className="image-gallery">
      {imageUrls.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
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