import { getCurrentUser } from "@/lib/auth";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, BookOpen, UserCircle, Settings, Shield, Clock, GraduationCap, LayoutDashboard, Database, HelpCircle, BookCheck, MessageSquare } from "lucide-react";

export default async function TutorialPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/login");
  }

  // Define content for each role
  const roleContent = {
    admin: {
      title: "Administratoren-Guide",
      description: "Volle Kontrolle über das System, Benutzerverwaltung und Datenbank-Zugriff.",
      icon: Shield,
      sections: [
        {
          title: "Benutzerverwaltung",
          content: "Erstellen, bearbeiten und löschen Sie Benutzerkonten. Verwalten Sie Rollen (Admin, Staff, Teacher, Student) und Berechtigungen.",
          icon: UserCircle,
          steps: [
            "Klicken Sie in der Sidebar auf 'Admin'", 
            "Nutzen Sie 'Add User' oben rechts für neue Accounts", 
            "Füllen Sie Name, E-Mail und Rolle aus (z.B. 'Max Mustermann', Rolle: Student)",
            "Initial-Passwörter werden automatisch generiert",
            "Benutzer können ihre Accounts über das Profil verwalten"
          ]
        },
        {
          title: "Skill Freigaben",
          content: "Überprüfen und genehmigen Sie Skills, die von Benutzern zur Freischaltung eingereicht wurden.",
          icon: CheckCircle2,
          steps: [
            "Navigieren Sie zu 'Skill Freigaben' in der Sidebar", 
            "Sehen Sie offene Skill-Anfragen mit Details", 
            "Genehmigen Sie Skills mit einem Klick",
            "Lehnen Sie ungültige Skills ab mit Begründung"
          ]
        },
        {
          title: "Neon Datenbank",
          content: "Direkter Zugriff auf die PostgreSQL-Datenbank über Neon Console.",
          icon: Database,
          steps: [
            "Klicken Sie auf 'Neon DB' in der Sidebar (Admin-only)", 
            "Neon Console öffnet sich in neuem Tab",
            "Melden Sie sich mit Ihrem Neon-Account an",
            "Verwalten Sie Datenbank, sehen Sie Queries, überwachen Performance"
          ]
        }
      ]
    },
    staff: {
      title: "Verwaltungs-Handbuch",
      description: "Organisation von Education Tracks, Kursen, Räumen und Schülerzuweisungen.",
      icon: Settings,
      sections: [
        {
          title: "Education Tracks erstellen",
          content: "Legen Sie neue Ausbildungsgänge und Jahrgänge an (z.B. 'Fachinformatiker Winter 2025').",
          icon: GraduationCap,
          steps: [
            "Öffnen Sie 'Planung' in der Sidebar", 
            "Klicken Sie auf 'Neuer Jahrgang'", 
            "Geben Sie Titel, Start- und Enddatum ein (z.B. 'FIAE 2024')",
            "Der Track erscheint in der Übersicht",
            "Klicken Sie auf den Track um Details anzuzeigen"
          ]
        },
        {
          title: "Kurse verwalten",
          content: "Erstellen Sie Kurse mit Räumen, Themen (UE) und weisen Sie Dozenten zu.",
          icon: BookOpen,
          steps: [
            "Wählen Sie einen Track aus und klicken 'Kurs hinzufügen'", 
            "Füllen Sie Titel, Beschreibung, Datum aus",
            "⭐ NEU: Wählen Sie einen Raum aus (z.B. 'Room 101', 'Remote')",
            "⭐ NEU: Fügen Sie Themen hinzu mit Unterrichtseinheiten (UE)",
            "Beispiel: 'React Basics' - 40 UE, 'React Hooks' - 40 UE",
            "Laden Sie Dozenten per E-Mail ein oder weisen direkt zu"
          ]
        },
        {
          title: "Schüler zuweisen",
          content: "Weisen Sie Schüler zu Kursen zu - System aktualisiert alle Ansichten in Echtzeit.",
          icon: UserCircle,
          steps: [
            "Öffnen Sie einen Kurs in der Planung", 
            "Klicken Sie auf 'Studenten zuweisen'",
            "Dialog zeigt verfügbare Schüler mit Checkboxen",
            "Wählen Sie mehrere Schüler aus (z.B. 18 von 25)",
            "Klicken Sie 'Zuweisen' - Schüler sehen Kurs sofort in Dashboard"
          ]
        },
        {
          title: "Benachrichtigungen",
          content: "Erhalten Sie Anfragen von Schülern und beantworten Sie diese direkt.",
          icon: HelpCircle,
          steps: [
            "Neue Anfragen erscheinen als Benachrichtigung (Glocke-Symbol)",
            "Klicken Sie auf die Benachrichtigung um zur Anfrage zu gelangen",
            "Öffnen Sie 'History' für alle Anfragen",
            "Geben Sie Antworten ein und klicken 'Absenden'",
            "Schüler erhalten automatisch Info-Benachrichtigung"
          ]
        }
      ]
    },
    teacher: {
      title: "Dozenten-Leitfaden",
      description: "Kursmanagement, Prüfungsverwaltung, Notengebung und Kurs-Einladungen.",
      icon: BookOpen,
      sections: [
        {
          title: "Meine Kurse",
          content: "Übersicht über Ihre zugewiesenen Kurse mit Teilnehmerlisten und Themen.",
          icon: LayoutDashboard,
          steps: [
            "Klicken Sie auf 'Meine Kurse' in der Sidebar", 
            "Sehen Sie Details zu allen zugewiesenen Modulen", 
            "Prüfen Sie die Teilnehmerliste mit Kontaktdaten",
            "⭐ NEU: Sehen Sie strukturierte Themen mit UE-Planung",
            "Beispiel: 'React Basics (40 UE)' vom 01.01. bis 31.01."
          ]
        },
        {
          title: "Kurs-Einladungen",
          content: "Erhalten Sie Einladungen zu Kursen von der Verwaltung und nehmen Sie diese an.",
          icon: CheckCircle2,
          steps: [
            "Erhalten Sie INVITATION Benachrichtigung (graues Badge)",
            "Klicken Sie auf Benachrichtigung um Details zu sehen",
            "Prüfen Sie Kurs-Informationen (Titel, Datum, Raum)",
            "Klicken Sie 'Annehmen' oder 'Ablehnen'",
            "Bei Annahme: Kurs erscheint in 'Meine Kurse'"
          ]
        },
        {
          title: "Prüfungsverwaltung",
          content: "Erstellen und verwalten Sie Prüfungen für Ihre Kurse mit Datum, Raum und Dauer.",
          icon: BookCheck,
          steps: [
            "Gehen Sie zu 'Prüfungsverwaltung' in der Sidebar", 
            "Klicken Sie auf 'Prüfung erstellen'", 
            "Wählen Sie Kurs, Titel (z.B. 'React Basics Test')",
            "Definieren Sie Datum, Uhrzeit, Raum und Dauer (z.B. 120 Min)",
            "Prüfung erscheint in Liste und im Schüler-Dashboard"
          ]
        },
        {
          title: "Noten eintragen",
          content: "Bewerten Sie Schülerleistungen - System benachrichtigt automatisch alle Schüler.",
          icon: BookOpen,
          steps: [
            "Wählen Sie eine Prüfung aus der Liste", 
            "Sehen Sie alle eingeschriebenen Schüler",
            "Tragen Sie Noten ein (z.B. '1.0', '2.3', '1.7')",
            "Klicken Sie 'Speichern' für jeden Schüler",
            "⭐ System sendet automatisch GRADE Benachrichtigung (blaues Badge)"
          ]
        }
      ]
    },
    student: {
      title: "Schüler-Tutorial",
      description: "Ihr Begleiter für den täglichen Unterrichtsablauf und Kommunikation.",
      icon: GraduationCap,
      sections: [
        {
          title: "Zeiterfassung",
          content: "Erfassen Sie Ihre Arbeitszeiten präzise mit Standort (Vor Ort / Remote).",
          icon: Clock,
          steps: [
            "Klicken Sie auf 'Zeiterfassung' in der Sidebar", 
            "Wählen Sie Ihren Standort: 'On Site' oder 'Remote'",
            "Nutzen Sie den grünen 'Clock In' Button beim Start", 
            "Status wechselt zu 'Active' mit laufendem Timer",
            "Beenden Sie den Tag mit rotem 'Clock Out' Button",
            "Sehen Sie Ihre Wochenübersicht mit Stunden pro Tag"
          ]
        },
        {
          title: "Benachrichtigungen & History",
          content: "⭐ Intelligentes Benachrichtigungssystem mit farbigen Badges und History.",
          icon: HelpCircle,
          steps: [
            "Glocken-Symbol (Header) zeigt Anzahl neuer Benachrichtigungen",
            "Klicken öffnet Popover mit zwei Tabs: 'Neu' und 'Gelesen'",
            "Farbcode: Blau (Note), Rot (Warnung), Grau (Einladung/Info)",
            "⭐ Klick auf Benachrichtigung → Auto-Dismiss → Navigation",
            "⭐ 'History' Seite: Tab 'Benachrichtigungen' für alle wichtigen Meldungen",
            "Filter: Keine Anfragen in History - nur Noten, Einladungen, Warnungen"
          ]
        },
        {
          title: "Dashboard & Kurse",
          content: "Ihr Überblick über aktuelle Module, Termine und Raum-Zuweisungen.",
          icon: LayoutDashboard,
          steps: [
            "Dashboard zeigt aktuelle Informationen und Ankündigungen", 
            "Unter 'Mein Studium' finden Sie alle eingeschriebenen Kurse",
            "⭐ NEU: Sehen Sie Raum-Zuweisungen (z.B. 'Room 101')",
            "⭐ NEU: Kurs-Themen mit UE und Zeitplan",
            "Beachten Sie Ankündigungen auf dem Schwarzen Brett"
          ]
        },
        {
          title: "Schwarzes Brett",
          content: "Marketplace für Angebote und Gesuche (z.B. Laptop verkaufen, Nachhilfe suchen).",
          icon: MessageSquare,
          steps: [
            "Klicken Sie auf 'Schwarzes Brett' in der Sidebar",
            "Sehen Sie alle aktiven Posts mit Typ (OFFER/SEARCH)",
            "Klicken Sie 'Eintrag erstellen' für neuen Post",
            "Wählen Sie Typ: OFFER (Angebot) oder SEARCH (Suche)",
            "Optional: Setzen Sie Ablaufdatum (Post wird auto-gelöscht)",
            "⚠️ Moderation: Unangemessene Posts werden entfernt mit Benachrichtigung"
          ]
        },
        {
          title: "Anfragen stellen",
          content: "Stellen Sie strukturierte Fragen direkt an Verwaltung oder Dozenten.",
          icon: HelpCircle,
          steps: [
            "Klicken Sie 'Neue Anfrage' (oben rechts auf History-Seite)",
            "Wählen Sie Kategorie: 'Verwaltung' oder 'Lehrer'",
            "Geben Sie Betreff und Nachricht ein",
            "Klicken Sie 'Absenden' - Staff erhält Benachrichtigung",
            "Sie erhalten Info-Benachrichtigung sobald Antwort vorhanden",
            "Sehen Sie alle Anfragen und Antworten unter 'History' → Tab 'Anfragen'"
          ]
        }
      ]
    }
  };

  // Fallback for unknown roles or if role is missing in map
  // @ts-expect-error - roleContent index signature is implicit
  const currentRoleContent = roleContent[user.role] || roleContent.student;
  const RoleIcon = currentRoleContent.icon;

  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl space-y-8">
      <div className="flex items-center gap-4 border-b pb-6">
        <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-xl">
            <RoleIcon className="w-8 h-8 text-blue-600 dark:text-blue-300" />
        </div>
        <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{currentRoleContent.title}</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1">{currentRoleContent.description}</p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* @ts-expect-error - sections might be missing on some types */}
        {currentRoleContent.sections.map((section, index) => {
          const SectionIcon = section.icon || BookOpen;
          return (
            <Card key={index} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-2 rounded-lg">
                      <SectionIcon className="w-5 h-5 text-blue-500" />
                  </div>
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col gap-4">
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {section.content}
                </p>
                <div className="mt-auto bg-gray-50 dark:bg-gray-800/50 rounded-lg p-3">
                  <p className="text-xs font-semibold text-gray-500 uppercase mb-2">Wie geht das?</p>
                  <ul className="space-y-2">
                    {/* @ts-expect-error - steps might be missing on some types */}
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="text-sm flex items-start gap-2">
                        <span className="min-w-[1.25rem] h-5 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-[10px] font-bold text-blue-600 dark:text-blue-300 mt-0.5">
                          {stepIndex + 1}
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 leading-tight py-0.5">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border-blue-100 dark:border-blue-800">
        <CardContent className="flex items-center gap-4 p-6">
          <BookOpen className="w-10 h-10 text-blue-600 dark:text-blue-400 flex-shrink-0" />
          <div>
            <h3 className="font-semibold text-lg text-blue-900 dark:text-blue-100">Benötigen Sie weitere Hilfe?</h3>
            <p className="text-blue-700 dark:text-blue-300 text-sm">
              Für technische Fragen wenden Sie sich bitte an die Administration oder nutzen Sie die integrierte Support-Funktion.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
