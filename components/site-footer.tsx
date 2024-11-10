// components/Footer.tsx

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-4 text-center text-sm">
      <div className="flex flex-col items-center justify-center space-y-2">
        <p className="flex items-center">
          <span className="mr-1">A VNOC Framework</span> 
          <span>❤️ Made with love by the</span> 
          <Link href="https://www.contrib.com" legacyBehavior>
            <a className="text-blue-400 hover:underline ml-1">Contrib Team</a>
          </Link>
          <span className="ml-1">✨</span>
        </p>
        <div className="flex space-x-4">
          <Link href="https://twitter.com/contrib" legacyBehavior>
            <a className="hover:text-blue-400" aria-label="Twitter">🐦</a>
          </Link>
          <Link href="https://www.linkedin.com/company/contrib/" legacyBehavior>
            <a className="hover:text-blue-400" aria-label="LinkedIn">🔗</a>
          </Link>
          <Link href="https://discord.com/invite/contrib" legacyBehavior>
            <a className="hover:text-blue-400" aria-label="Discord">💬</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
