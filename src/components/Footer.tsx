
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-5 text-center text-sm text-portfolio-light">
      <p>© {new Date().getFullYear()} Pranav Rana. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
