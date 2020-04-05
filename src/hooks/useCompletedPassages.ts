import { useState, useEffect } from "react";
import { StorageKey } from "../models/storage";

type Completed = Record<string, boolean>;

type Storage =
  | { key: undefined }
  | {
      completed: Completed;
      key: string;
    };

const getStorageKey = () => new Date().toISOString().split("T")[0];

function load() {
  const stored = JSON.parse(
    localStorage.getItem(StorageKey.CompletedPassages) || "{}"
  ) as Storage;

  // If there is nothing stored or it is for a different day, don't return the
  // stored passages.
  if (!stored.key || stored.key !== getStorageKey()) {
    return {};
  }

  return stored.completed;
}

export function useCompletedPassages() {
  const [completed, setCompleted] = useState<Completed>(load());

  function handleComplete(passage: string, checked: boolean) {
    setCompleted({
      ...completed,
      [passage]: checked,
    });
  }

  // Save changes to storage when the complete passages changes
  useEffect(() => {
    localStorage.setItem(
      StorageKey.CompletedPassages,
      JSON.stringify({ key: getStorageKey(), completed })
    );
  });

  return { completedPassages: completed, handleComplete };
}
