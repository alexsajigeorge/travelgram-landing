// MobileDrawer.tsx

import React, { useState } from 'react';
import Image from 'next/image';

interface MobileDrawerProps {
  // Any additional props you might need
}

const MobileDrawer: React.FC<MobileDrawerProps> = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div>
      {/* Your button to toggle the drawer */}
      <button onClick={handleToggleDrawer}>
      <Image
        src={"menu.svg"}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />
      </button>

      {/* The actual drawer */}
      {isDrawerOpen && (
        <div className="drawer">
          {/* Drawer content goes here */}
          <p>Drawer Content</p>
        </div>
      )}
      
    </div>
  );
};

export default MobileDrawer;
