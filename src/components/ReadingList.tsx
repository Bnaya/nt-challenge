import React from "react";
import { IonList, IonItem, IonLabel, IonCheckbox } from "@ionic/react";
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
            <IonLabel
              style={{ textDecoration: completed ? "line-through" : undefined }}
            >
              {passage}
            </IonLabel>

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
