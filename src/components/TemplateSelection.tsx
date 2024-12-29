import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

interface TemplateSelectionProps {
  onSelect: (template: 'template1' | 'template2') => void;
}

const TemplateSelection = ({ onSelect }: TemplateSelectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="cursor-pointer hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="aspect-[8.5/11] bg-gray-100 mb-4">
            <img
              src="\public\temp1.png"
              alt="Template 1"
              className="w-full h-full object-cover"
            />
          </div>
          <Button onClick={() => onSelect('template1')} className="w-full">
            Select Template 1
          </Button>
        </CardContent>
      </Card>

      <Card className="cursor-pointer hover:shadow-lg transition-shadow">
        <CardContent className="p-6">
          <div className="aspect-[8.5/11] bg-gray-100 mb-4">
            <img
              src="\public\temp2.png"
              alt="Template 2"
              className="w-full h-full object-cover"
            />
          </div>
          <Button onClick={() => onSelect('template2')} className="w-full">
            Select Template 2
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default TemplateSelection;