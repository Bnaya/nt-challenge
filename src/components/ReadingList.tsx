import React from "react";
import { IonList, IonItem, IonLabel, IonCheckbox } from "@ionic/react";
import { usePassages } from "../hooks/usePassages";

export function ReadingList() {
  const { passages, handleCompleteChange } = usePassages();

  return (
    <IonList>
      {passages.map(({ completed, reference }, index) => (
        <IonItem key={reference}>
          <IonLabel
            style={{ textDecoration: completed ? "line-through" : undefined }}
          >
            {reference}
          </IonLabel>

          <IonCheckbox
            slot="start"
            checked={completed}
            onIonChange={(e) => handleCompleteChange(index, e.detail.checked)}
          />
        </IonItem>
      ))}
    </IonList>
  );
}
