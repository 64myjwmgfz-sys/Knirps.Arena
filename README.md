# Knirps-Arena

Knirps-Arena ist ein knuffiger Auto-Battler für unterwegs: Stelle ein Deck aus kleinen Helden und Truppen zusammen, platziere sie vor jedem Kampf und sieh zu, wie sie allein kämpfen. Verbessere sie mit Sternen, sammle Münzen und Trophäen, schalte neue Arenen frei und besiege den Bot, bevor dir die Herzen ausgehen.

Das Spiel ist eine einzelne Datei (`index.html`) und läuft direkt im Browser, am besten auf dem Handy.

## Konten einrichten (Anmelden, Registrieren, Cloud-Spielstand)

Das Spiel nutzt Firebase (kostenloser Spark-Tarif). Ohne Einrichtung bleibt der Spielstand nur lokal auf dem Gerät.

1. In der [Firebase-Konsole](https://console.firebase.google.com) ein Projekt anlegen.
2. **Authentication → Anmeldemethode:** „E-Mail/Passwort" aktivieren. Optional „Apple" (benötigt ein Apple-Developer-Konto).
3. **Authentication → Einstellungen → Autorisierte Domains:** `64myjwmgfz-sys.github.io` hinzufügen.
4. **Firestore Database** anlegen und unter „Regeln" einfügen:
   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{db}/documents {
       match /users/{uid} {
         allow read, write: if request.auth != null && request.auth.uid == uid;
       }
     }
   }
   ```
5. **Projekteinstellungen → Eigene Apps → Web-App (</>)** anlegen und die angezeigte Konfiguration in `cloud-config.js` eintragen.
