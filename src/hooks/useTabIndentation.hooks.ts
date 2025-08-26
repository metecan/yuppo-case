import { useCallback } from 'react';

export interface UseTabIndentationProps {
  value: string;
  onChange: (value: string) => void;
  indentSize?: number;
}

export interface UseTabIndentationReturn {
  handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const useTabIndentation = ({ value, onChange, indentSize = 2 }: UseTabIndentationProps): UseTabIndentationReturn => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Tab') {
        e.preventDefault();
        const textarea = e.currentTarget;
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;

        const indent = ' '.repeat(indentSize);
        const newValue = value.substring(0, start) + indent + value.substring(end);
        onChange(newValue);

        // Set cursor position after the inserted spaces
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + indentSize;
        }, 0);
      }
    },
    [value, onChange, indentSize],
  );

  return {
    handleKeyDown,
  };
};

export default useTabIndentation;
