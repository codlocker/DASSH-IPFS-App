// components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="container">
        <p>&copy; No rights reserved</p>
        <p>Created by Team Crucio.ai</p>
      </div>

      <style jsx>{`
        footer {
          background-color: #333;
          color: white;
          padding: 20px 0;
          position: fixed;
          bottom: 0;
          width: 100%;
        }

        .container {
          margin: 0 auto;
          text-align: right;
          font-size: 10px;
          padding-right: 20px;
        }

        p {
          margin: 5px 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;