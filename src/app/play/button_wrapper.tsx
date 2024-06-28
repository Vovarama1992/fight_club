import React, { ReactNode } from 'react';

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: WrapperProps) {
  const wrapperStyle = `${className ? className + ' ' : ''} w-[12%] z-[9998] h-[75%] flex justify-center items-center bg-darkBrown rounded-[15px] border-4 border-black`;
  return (
    <div className={wrapperStyle}>
      <div className="w-[94%] z-[9999] h-[94%] flex justify-center items-center bg-lightBrown rounded-[15px] border-4 border-black shadow-[0_0_10px_rgba(0,0,0,0.9)]">
        {children}
      </div>
    </div>
  );
}
