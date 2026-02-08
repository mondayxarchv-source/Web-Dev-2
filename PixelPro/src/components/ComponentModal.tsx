import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

type ComponentModalProps = {
  open: boolean;
  code: string;
  title?: string;
  onClose: () => void;
};

export const ComponentModal = ({
  open,
  code,
  title = "Component Preview",
  onClose,
}: ComponentModalProps) => {
  const [size, setSize] = useState({ width: 900, height: 600 });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      {/* Modal container */}
      <div
        className="bg-background rounded-xl shadow-2xl relative flex flex-col resize overflow-hidden"
        style={{ width: size.width, height: size.height }}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border px-4 py-2 cursor-move">
          <h2 className="text-sm font-semibold">{title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="w-4 h-4" />
          </Button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          <pre className="text-sm bg-muted rounded-lg p-4 overflow-auto h-full">
            {code}
          </pre>
        </div>

        {/* Resize hint */}
        <div className="text-xs text-muted-foreground text-center py-1 border-t border-border">
          Drag edges to resize • Press close to exit
        </div>
      </div>
    </div>
  );
};
