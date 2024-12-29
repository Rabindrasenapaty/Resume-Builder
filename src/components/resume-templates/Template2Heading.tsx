import React from 'react';

interface Template2HeadingProps {
  title: string;
  className?: string;
}

const Template2Heading = ({ title, className = "" }: Template2HeadingProps) => {
  return (
    <div className="relative mb-4">
      <h3 className={`text-lg font-semibold border-b-2 border-current pb-1 ${className}`}>{title}</h3>
    </div>
  );
};

export default Template2Heading;