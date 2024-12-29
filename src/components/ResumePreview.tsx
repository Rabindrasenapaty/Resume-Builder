import { ResumeData } from "@/types/resume";
import { format } from "date-fns";
import Template1Heading from "./resume-templates/Template1Heading";
import Template2Heading from "./resume-templates/Template2Heading";
import ContactInfo from "./resume-templates/ContactInfo";

interface ResumePreviewProps {
  data: ResumeData;
}

const ResumePreview = ({ data }: ResumePreviewProps) => {
  const Template1 = () => (
    <div className="bg-white shadow-lg p-8 min-h-[1056px] w-full max-w-[800px] mx-auto">
      <div className="border-b-2 border-resume-primary pb-4 mb-6">
        <h1 className="text-3xl font-bold text-resume-primary">{data.personalInfo.name || "Your Name"}</h1>
        <h2 className="text-xl text-gray-600 mt-1">{data.personalInfo.title || "Professional Title"}</h2>
        <div className="mt-4">
          <ContactInfo {...data.personalInfo} template="template1" />
        </div>
      </div>

      {data.summary && (
        <div className="mb-6">
          <Template1Heading title="Summary" />
          <p className="text-gray-700">{data.summary}</p>
        </div>
      )}

      {data.skills.length > 0 && (
        <div className="mb-6">
          <Template1Heading title="Skills" />
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, index) => (
              <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {data.experience.length > 0 && (
        <div className="mb-6">
          <Template1Heading title="Experience" />
          <div className="space-y-4">
            {data.experience.map((exp, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{exp.position}</h4>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <p className="text-sm text-gray-500 font-bold">
                    {exp.startDate && format(new Date(exp.startDate), "MMM yyyy")} -{" "}
                    {exp.endDate ? format(new Date(exp.endDate), "MMM yyyy") : "Present"}
                  </p>
                </div>
                <ul className="list-disc list-inside mt-2 text-sm">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="text-gray-700">{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {data.education.length > 0 && (
        <div className="mb-6">
          <Template1Heading title="Education" />
          <div className="space-y-4">
            {data.education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold">{edu.degree}</h4>
                    <p className="text-gray-600">{edu.school}</p>
                  </div>
                  <p className="text-sm text-gray-500 font-bold">
                    {edu.startDate && format(new Date(edu.startDate), "MMM yyyy")} -{" "}
                    {edu.endDate ? format(new Date(edu.endDate), "MMM yyyy") : "Present"}
                  </p>
                </div>
                <ul className="list-disc list-inside mt-2 text-sm">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-gray-700">{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );

  const Template2 = () => (
    <div className="bg-white shadow-lg min-h-[1056px] w-full max-w-[800px] mx-auto flex">
      {/* Left Column */}
      <div className="w-1/3 bg-resume-primary text-white p-8 space-y-6">
        {data.personalInfo.photo && (
          <div className="mb-6">
            <img
              src={data.personalInfo.photo}
              alt={data.personalInfo.name}
              className="w-32 h-32 rounded-full mx-auto border-4 border-white"
            />
          </div>
        )}

        <div>
          <Template2Heading title="Contact" className="text-white" />
          <ContactInfo {...data.personalInfo} template="template2" />
        </div>

        {data.education.length > 0 && (
          <div>
            <Template2Heading title="Education" className="text-white" />
            <div className="space-y-3">
              {data.education.map((edu, index) => (
                <div key={index} className="text-sm">
                  <h4 className="font-semibold">{edu.degree}</h4>
                  <p className="opacity-90">{edu.school}</p>
                  <p className="opacity-75">
                    {edu.startDate && format(new Date(edu.startDate), "MMM yyyy")} -{" "}
                    {edu.endDate ? format(new Date(edu.endDate), "MMM yyyy") : "Present"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {data.skills.length > 0 && (
          <div>
            <Template2Heading title="Skills" className="text-white" />
            <div className="space-y-1 text-sm">
              {data.skills.map((skill, index) => (
                <p key={index} className="opacity-90">{skill}</p>
              ))}
            </div>
          </div>
        )}

        {data.additionalInfo?.languages?.length > 0 && (
          <div>
            <Template2Heading title="Languages" className="text-white" />
            <div className="space-y-1 text-sm">
              {data.additionalInfo.languages.map((lang, index) => (
                <p key={index} className="opacity-90">{lang}</p>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Column */}
      <div className="w-2/3 p-8 space-y-6 border-l border-gray-200">
        <div>
          <h1 className="text-3xl font-bold text-resume-primary mb-1">{data.personalInfo.name}</h1>
          <h2 className="text-xl text-gray-600">{data.personalInfo.title}</h2>
        </div>

        {data.summary && (
          <div>
            <Template2Heading title="Profile" />
            <p className="text-sm text-gray-700">{data.summary}</p>
          </div>
        )}

        {data.experience.length > 0 && (
          <div>
            <Template2Heading title="Work Experience" />
            <div className="space-y-4">
              {data.experience.map((exp, index) => (
                <div key={index}>
                  <h4 className="font-semibold">{exp.position}</h4>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">
                    {exp.startDate && format(new Date(exp.startDate), "MMM yyyy")} -{" "}
                    {exp.endDate ? format(new Date(exp.endDate), "MMM yyyy") : "Present"}
                  </p>
                  <ul className="list-disc list-inside mt-2 text-sm">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-gray-700">{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return data.selectedTemplate === 'template2' ? <Template2 /> : <Template1 />;
};

export default ResumePreview;