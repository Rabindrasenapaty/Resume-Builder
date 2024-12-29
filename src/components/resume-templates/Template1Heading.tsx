import React from 'react';

interface Template1HeadingProps {
  title: string;
}

const Template1Heading = ({ title }: Template1HeadingProps) => {
  return (
    <div className="relative mb-4">
      <h3 className="text-lg font-semibold text-resume-primary border-y-2 border-resume-primary py-1">{title}</h3>
    </div>
  );
};

export default Template1Heading;