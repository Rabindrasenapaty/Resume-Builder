import MultiStepForm from "@/components/MultiStepForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-resume-primary text-white py-6">
        <div className="container">
          <h1 className="text-3xl font-bold">Resume Builder</h1>
          <p className="mt-2">Create your professional resume in minutes</p>
        </div>
      </header>

      <main className="container py-8">
        <MultiStepForm />
      </main>
    </div>
  );
};

export default Index;