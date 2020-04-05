import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonListHeader,
  IonLabel,
} from "@ionic/react";
import React from "react";
import { ReadingList } from "../components/ReadingList";
import "./Home.css";

function getCurrentDate() {
  return new Date().toLocaleDateString(undefined, {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function Home() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>NT Challenge</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">NT Challenge</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonListHeader>
          <IonLabel>{getCurrentDate()}</IonLabel>
        </IonListHeader>
        <ReadingList />
      </IonContent>
    </IonPage>
  );
}
