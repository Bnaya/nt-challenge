import { useState } from "react";

type Passage = {
  reference: string;
  completed: boolean;
};

export function usePassages() {
  const [passages, setPassages] = useState<Passage[]>([
    { reference: "John 1", completed: false },
    { reference: "John 2", completed: false },
    { reference: "John 3", completed: false },
    { reference: "John 4", completed: false },
    { reference: "John 5", completed: false },
  ]);

  function handleCompleteChange(index: number, checked: boolean) {
    setPassages(
      passages.map((passage, idx) => ({
        ...passage,
        completed: index === idx ? checked : passage.completed,
      }))
    );
  }

  return { passages, handleCompleteChange };
}
