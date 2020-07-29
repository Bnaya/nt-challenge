import { IonCheckbox, IonItem, IonList } from "@ionic/react";
import React from "react";
import { useCompletedPassages } from "../hooks/useCompletedPassages";
import { useTodaysPassages } from "../hooks/useTodaysPassages";

export function ReadingList() {
  const { completedPassages, handleComplete } = useCompletedPassages();
  const passages = useTodaysPassages();

  return (
    <IonList>
      {passages.map((passage) => {
        const completed = !!completedPassages[passage];

        return (
          <IonItem key={passage}>
            <a
              href={`https://www.esv.org/${passage.replace(/ /g, "+")}/`}
              target="blank"
              style={{ textDecoration: completed ? "line-through" : "none" }}
            >
              {passage}
            </a>

            <IonCheckbox
              disabled={completed}
              slot="start"
              checked={completed}
              onIonChange={(e) => handleComplete(passage, e.detail.checked)}
            />
          </IonItem>
        );
      })}
    </IonList>
  );
}
