import React from 'react';

// Figma-style selection box with four corner handles.
const Frame = ({ className = '', children }) => (
  <div className={`frame ${className}`}>
    <span className="handle -top-[7px] -left-[7px]" />
    <span className="handle -top-[7px] -right-[7px]" />
    <span className="handle -bottom-[7px] -left-[7px]" />
    <span className="handle -bottom-[7px] -right-[7px]" />
    {children}
  </div>
);

export default Frame;
