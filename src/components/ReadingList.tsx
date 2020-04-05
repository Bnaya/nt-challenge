import React from "react";
import { IonList, IonItem, IonLabel, IonCheckbox } from "@ionic/react";
import { usePassages } from "../hooks/usePassages";

export function ReadingList() {
  const { completedPassages, handleComplete } = usePassages();
  const passages = ["Jon 1", "Jon 3"];

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
