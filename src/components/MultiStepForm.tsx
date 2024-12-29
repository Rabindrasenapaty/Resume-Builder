import { useState } from "react";
import { ResumeData } from "@/types/resume";
import ResumeForm from "./ResumeForm";
import TemplateSelection from "./TemplateSelection";
import ResumePreview from "./ResumePreview";
import { Button } from "./ui/button";
import { toast } from "./ui/use-toast";
import html2pdf from "html2pdf.js";

const initialData: ResumeData = {
  personalInfo: {
    name: "",
    title: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    gender: "",
    github: "",
    linkedin: "",
    photo: "",
  },
  summary: "",
  skills: [],
  experience: [],
  education: [],
  additionalInfo: {
    languages: [],
    certifications: [],
    awards: [],
  },
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [resumeData, setResumeData] = useState<ResumeData>(initialData);

  const handleFormSubmit = (data: ResumeData) => {
    setResumeData(data);
    setStep(2);
    toast({
      title: "Information Saved",
      description: "Please select a template for your resume",
    });
  };

  const handleTemplateSelect = (template: 'template1' | 'template2') => {
    setResumeData({ ...resumeData, selectedTemplate: template });
    setStep(3);
    toast({
      title: "Template Selected",
      description: "You can now preview and download your resume",
    });
  };

  const handleDownloadPDF = async () => {
    const element = document.getElementById('resume-preview');
    if (!element) return;

    const opt = {
      margin: [0.2, 0.2],
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { 
        scale: 2,
        useCORS: true,
        logging: true,
        windowWidth: 1200
      },
      jsPDF: { 
        unit: 'in', 
        format: 'letter', 
        orientation: 'portrait',
        compress: true,
        hotfixes: ["px_scaling"]
      },
      pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
      await html2pdf().set(opt).from(element).save();
      toast({
        title: "Success",
        description: "Your resume has been downloaded successfully!",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download resume. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center mb-8">
        <div className="flex items-center">
          <div className={`w-8 h-8 rounded-full ${step >= 1 ? 'bg-resume-primary' : 'bg-gray-300'} text-white flex items-center justify-center`}>1</div>
          <div className={`w-20 h-1 ${step >= 2 ? 'bg-resume-primary' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 rounded-full ${step >= 2 ? 'bg-resume-primary' : 'bg-gray-300'} text-white flex items-center justify-center`}>2</div>
          <div className={`w-20 h-1 ${step >= 3 ? 'bg-resume-primary' : 'bg-gray-300'}`}></div>
          <div className={`w-8 h-8 rounded-full ${step >= 3 ? 'bg-resume-primary' : 'bg-gray-300'} text-white flex items-center justify-center`}>3</div>
        </div>
      </div>

      {step === 1 && <ResumeForm onSubmit={handleFormSubmit} initialData={resumeData} />}
      {step === 2 && <TemplateSelection onSelect={handleTemplateSelect} />}
      {step === 3 && (
        <div className="space-y-6">
          <div className="flex justify-end">
            <Button onClick={handleDownloadPDF}>Download PDF</Button>
          </div>
          <div id="resume-preview">
            <ResumePreview data={resumeData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;