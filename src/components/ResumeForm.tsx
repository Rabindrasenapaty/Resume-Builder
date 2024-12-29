import { useState } from "react";
import { ResumeData } from "@/types/resume";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";
import PersonalInfoSection from "./resume-form/PersonalInfoSection";

interface ResumeFormProps {
  onSubmit: (data: ResumeData) => void;
  initialData: ResumeData;
}

const ResumeForm = ({ onSubmit, initialData }: ResumeFormProps) => {
  const [formData, setFormData] = useState<ResumeData>(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const updatePersonalInfo = (field: keyof typeof formData.personalInfo, value: string) => {
    setFormData({
      ...formData,
      personalInfo: {
        ...formData.personalInfo,
        [field]: value,
      },
    });
  };

  const addExperience = () => {
    setFormData({
      ...formData,
      experience: [
        ...formData.experience,
        { company: "", position: "", startDate: "", endDate: "", description: [] },
      ],
    });
  };

  const updateExperience = (index: number, field: keyof typeof formData.experience[0], value: string) => {
    const newExperience = [...formData.experience];
    newExperience[index] = { ...newExperience[index], [field]: value };
    setFormData({ ...formData, experience: newExperience });
  };

  const addEducation = () => {
    setFormData({
      ...formData,
      education: [
        ...formData.education,
        { school: "", degree: "", startDate: "", endDate: "", details: [] },
      ],
    });
  };

  const updateEducation = (index: number, field: keyof typeof formData.education[0], value: string) => {
    const newEducation = [...formData.education];
    newEducation[index] = { ...newEducation[index], [field]: value };
    setFormData({ ...formData, education: newEducation });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PersonalInfoSection 
        personalInfo={formData.personalInfo}
        updatePersonalInfo={updatePersonalInfo}
      />

      <Card>
        <CardHeader>
          <CardTitle>Professional Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={formData.summary}
            onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
            placeholder="Write a brief summary of your professional background and goals..."
            className="min-h-[100px]"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={formData.skills.join(", ")}
            onChange={(e) => setFormData({ ...formData, skills: e.target.value.split(",").map(s => s.trim()) })}
            placeholder="Enter your skills, separated by commas..."
            className="min-h-[100px]"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Work Experience</CardTitle>
          <Button type="button" variant="outline" size="sm" onClick={addExperience}>
            <Plus className="w-4 h-4 mr-2" /> Add Experience
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.experience.map((exp, index) => (
            <div key={index} className="space-y-4 p-4 border rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Company</Label>
                  <Input
                    value={exp.company}
                    onChange={(e) => updateExperience(index, "company", e.target.value)}
                    placeholder="Company name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Position</Label>
                  <Input
                    value={exp.position}
                    onChange={(e) => updateExperience(index, "position", e.target.value)}
                    placeholder="Job title"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    value={exp.startDate}
                    onChange={(e) => updateExperience(index, "startDate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    value={exp.endDate}
                    onChange={(e) => updateExperience(index, "endDate", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Description</Label>
                <Textarea
                  value={exp.description.join("\n")}
                  onChange={(e) => {
                    const newExp = [...formData.experience];
                    newExp[index] = { ...exp, description: e.target.value.split("\n") };
                    setFormData({ ...formData, experience: newExp });
                  }}
                  placeholder="Enter your responsibilities and achievements..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Education</CardTitle>
          <Button type="button" variant="outline" size="sm" onClick={addEducation}>
            <Plus className="w-4 h-4 mr-2" /> Add Education
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {formData.education.map((edu, index) => (
            <div key={index} className="space-y-4 p-4 border rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>School</Label>
                  <Input
                    value={edu.school}
                    onChange={(e) => updateEducation(index, "school", e.target.value)}
                    placeholder="School name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Degree</Label>
                  <Input
                    value={edu.degree}
                    onChange={(e) => updateEducation(index, "degree", e.target.value)}
                    placeholder="Degree name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Start Date</Label>
                  <Input
                    type="date"
                    value={edu.startDate}
                    onChange={(e) => updateEducation(index, "startDate", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>End Date</Label>
                  <Input
                    type="date"
                    value={edu.endDate}
                    onChange={(e) => updateEducation(index, "endDate", e.target.value)}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Details</Label>
                <Textarea
                  value={edu.details.join("\n")}
                  onChange={(e) => {
                    const newEdu = [...formData.education];
                    newEdu[index] = { ...edu, details: e.target.value.split("\n") };
                    setFormData({ ...formData, education: newEdu });
                  }}
                  placeholder="Enter additional details about your education..."
                  className="min-h-[100px]"
                />
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="flex justify-end">
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default ResumeForm;
