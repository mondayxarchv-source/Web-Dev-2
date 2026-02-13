import { useEffect } from "react";

interface KeyboardShortcutProps {
  onGenerate: () => void;
  onCopy: () => void;
  onClear: () => void;
}

const useKeyboardShortcuts = ({
  onGenerate,
  onCopy,
  onClear,
}: KeyboardShortcutProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ctrl + Enter → Generate
      if (event.ctrlKey && event.key === "Enter") {
        event.preventDefault();
        onGenerate();
      }

      // Ctrl + C → Copy
      if (event.ctrlKey && event.key.toLowerCase() === "c") {
        event.preventDefault();
        onCopy();
      }

      // Escape → Clear
      if (event.key === "Escape") {
        event.preventDefault();
        onClear();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onGenerate, onCopy, onClear]);
};

export default useKeyboardShortcuts;
