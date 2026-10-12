import React from 'react';

// Figma-style selection box with four corner handles.
const Frame = ({ className = '', children }) => (
  <div className={`frame ${className}`}>
    <span className="handle -top-[6px] -left-[6px]" />
    <span className="handle -top-[6px] -right-[6px]" />
    <span className="handle -bottom-[6px] -left-[6px]" />
    <span className="handle -bottom-[6px] -right-[6px]" />
    {children}
  </div>
);

export default Frame;
