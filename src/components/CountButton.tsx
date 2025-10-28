import { useState } from 'react';
interface CountButtonProps {
  value?: number | string;
  onUpdate?: () => void;
}

export default function CountButton({ value, onUpdate }: CountButtonProps) {
  return <button onClick={onUpdate}> Current: {value}</button>;
}
