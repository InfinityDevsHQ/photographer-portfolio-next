import { Camera } from "lucide-react";
import { ReactElement } from "react";
type ServiceCardProps = {
  icon: ReactElement;
  heading: string;
  description: string;
};

export default function ServiceCard({
  icon,
  heading,
  description,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col items-center gap-2.5 text-center">
      {icon}
      <h4 className="font-bold">{heading}</h4>
      <p className="text-sm">{description}</p>
    </div>
  );
}
