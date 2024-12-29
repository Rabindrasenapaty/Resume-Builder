import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

interface ContactInfoProps {
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  template: 'template1' | 'template2';
}

const ContactInfo = ({ email, phone, location, linkedin, github, template }: ContactInfoProps) => {
  const iconClass = template === 'template2' ? 'w-4 h-4 mr-2 text-resume-primary' : 'hidden';

  return (
    <div className={`space-y-1 ${template === 'template2' ? 'text-sm' : ''}`}>
      {email && (
        <div className="flex items-center">
          <Mail className={iconClass} />
          <span>{email}</span>
        </div>
      )}
      {phone && (
        <div className="flex items-center">
          <Phone className={iconClass} />
          <span>{phone}</span>
        </div>
      )}
      {location && (
        <div className="flex items-center">
          <MapPin className={iconClass} />
          <span>{location}</span>
        </div>
      )}
      {linkedin && (
        <div className="flex items-center">
          <Linkedin className={iconClass} />
          <span>{linkedin}</span>
        </div>
      )}
      {github && (
        <div className="flex items-center">
          <Github className={iconClass} />
          <span>{github}</span>
        </div>
      )}
    </div>
  );
};

export default ContactInfo;