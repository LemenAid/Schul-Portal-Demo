import { PrismaClient } from '../generated-client'

const prisma = new PrismaClient()

function parseDate(dateStr: string, timeStr: string = "00:00:00"): Date {
  const [day, month, year] = dateStr.split('.').map(Number);
  const [hours, minutes, seconds] = timeStr.split(':').map(Number);
  return new Date(year, month - 1, day, hours, minutes, seconds);
}

// Data from Kursinhalte.md (converted to JSON-like structure in previous step)
const rawTopics = [
  {
    "title": "Fachbezogenes Rechnen",
    "courseName": "Einführung fachbezogenes Rechnen / Digitaltechnik",
    "startDate": "03.02.2025",
    "endDate": "07.02.2025",
    "ue": 45
  },
  {
    "title": "Digitaltechnik",
    "courseName": "Einführung fachbezogenes Rechnen / Digitaltechnik",
    "startDate": "10.02.2025",
    "endDate": "12.02.2025",
    "ue": 27
  },
  {
    "title": "Einführung Programmierung",
    "courseName": "Einführung Programmierung",
    "startDate": "13.02.2025",
    "endDate": "21.02.2025",
    "ue": 63
  },
  {
    "title": "Einführung Datenbanken",
    "courseName": "Einführung Datenbanken",
    "startDate": "24.02.2025",
    "endDate": "04.03.2025",
    "ue": 63
  },
  {
    "title": "Verkabelung",
    "courseName": "Einführung Netzwerktechnik",
    "startDate": "05.03.2025",
    "endDate": "06.03.2025",
    "ue": 18
  },
  {
    "title": "Netzwerkgrundlagen",
    "courseName": "Einführung Netzwerktechnik",
    "startDate": "07.03.2025",
    "endDate": "11.03.2025",
    "ue": 27
  },
  {
    "title": "Ethernet",
    "courseName": "Einführung Netzwerktechnik",
    "startDate": "12.03.2025",
    "endDate": "12.03.2025",
    "ue": 9
  },
  {
    "title": "Kommunikationsprotokolle",
    "courseName": "Einführung Netzwerktechnik",
    "startDate": "13.03.2025",
    "endDate": "14.03.2025",
    "ue": 18
  },
  {
    "title": "Arbeitsorganisation und -techniken",
    "courseName": "Allgemeine Betriebswirtschaftslehre",
    "startDate": "17.03.2025",
    "endDate": "18.03.2025",
    "ue": 14
  },
  {
    "title": "Sicherheit, Gesundheits- und Umweltschutz",
    "courseName": "Allgemeine Betriebswirtschaftslehre",
    "startDate": "18.03.2025",
    "endDate": "19.03.2025",
    "ue": 13
  },
  {
    "title": "Prozessorganisation und -ablauf",
    "courseName": "Allgemeine Betriebswirtschaftslehre",
    "startDate": "20.03.2025",
    "endDate": "21.03.2025",
    "ue": 18
  },
  {
    "title": "Informieren und Beraten von Kunden/Kundinnen",
    "courseName": "Allgemeine Betriebswirtschaftslehre",
    "startDate": "24.03.2025",
    "endDate": "26.03.2025",
    "ue": 27
  },
  {
    "title": "Kommunikation und vernetztes Zusammenarbeiten unter Nutzung digitaler Medien",
    "courseName": "Allgemeine Betriebswirtschaftslehre",
    "startDate": "27.03.2025",
    "endDate": "31.03.2025",
    "ue": 27
  },
  {
    "title": "Klausur",
    "courseName": "Allgemeine Betriebswirtschaftslehre",
    "startDate": "01.04.2025",
    "endDate": "01.04.2025",
    "ue": 9
  },
  {
    "title": "Grundlagen Qualitätsmanagement und Qualitätssicherung",
    "courseName": "Qualitätsmanagement, IT-Sicherheit und Datenschutz Teil I",
    "startDate": "02.04.2025",
    "endDate": "04.04.2025",
    "ue": 27
  },
  {
    "title": "Maßnahmen und Anforderungen zur IT-Sicherheit und Datenschutz",
    "courseName": "Qualitätsmanagement, IT-Sicherheit und Datenschutz Teil I",
    "startDate": "07.04.2025",
    "endDate": "11.04.2025",
    "ue": 45
  },
  {
    "title": "Klausur",
    "courseName": "Qualitätsmanagement, IT-Sicherheit und Datenschutz Teil I",
    "startDate": "14.04.2025",
    "endDate": "14.04.2025",
    "ue": 9
  },
  {
    "title": "Refresh Digitaltechnik",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "15.04.2025",
    "endDate": "17.04.2025",
    "ue": 30
  },
  {
    "title": "Kommunikationsgrundlagen",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "28.04.2025",
    "endDate": "29.04.2025",
    "ue": 15
  },
  {
    "title": "Transportorientierte Schichten",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "29.04.2025",
    "endDate": "30.04.2025",
    "ue": 15
  },
  {
    "title": "Transportorientierte Schichten",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "02.05.2025",
    "endDate": "05.05.2025",
    "ue": 15
  },
  {
    "title": "Internetkommunikation",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "05.05.2025",
    "endDate": "07.05.2025",
    "ue": 25
  },
  {
    "title": "Anwendungsorientierte Schichten",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "08.05.2025",
    "endDate": "12.05.2025",
    "ue": 30
  },
  {
    "title": "Hardware und Sicherheit",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "13.05.2025",
    "endDate": "14.05.2025",
    "ue": 15
  },
  {
    "title": "Öffentliche Kommunikationsnetze",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "14.05.2025",
    "endDate": "14.05.2025",
    "ue": 5
  },
  {
    "title": "Vermittlungstechnik",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "15.05.2025",
    "endDate": "15.05.2025",
    "ue": 10
  },
  {
    "title": "Mobilfunk",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "16.05.2025",
    "endDate": "16.05.2025",
    "ue": 5
  },
  {
    "title": "Satellitennetze, GPS",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "16.05.2025",
    "endDate": "16.05.2025",
    "ue": 5
  },
  {
    "title": "Klausur",
    "courseName": "Netzwerk- und Kommunikationstechnik",
    "startDate": "19.05.2025",
    "endDate": "19.05.2025",
    "ue": 10
  },
  {
    "title": "marktgängige IT-Systeme für unterschiedliche Einsatzbereich hinsichtlich Leistungsfähigkeit, Wirtschaftlichkeit und Barrierefreiheit beurteilen",
    "courseName": "Systemtechnik Teil I",
    "startDate": "20.05.2025",
    "endDate": "23.05.2025",
    "ue": 32
  },
  {
    "title": "Angebote zu IT-Komponenten, IT-Produkten und IT-Dienstleistungen einholen und bewerten sowie Spezifikationen und Konditionen vergleichen",
    "courseName": "Systemtechnik Teil I",
    "startDate": "23.05.2025",
    "endDate": "27.05.2025",
    "ue": 18
  },
  {
    "title": "IT-Systeme analysieren, unter Beacht. insb. von Lizenzmodellen, Urheberrechten, Barrierefreiheit konzeptionieren,konfigurieren, testen, dokumentieren",
    "courseName": "Systemtechnik Teil I",
    "startDate": "27.05.2025",
    "endDate": "28.05.2025",
    "ue": 13
  },
  {
    "title": "IT-Systeme analysieren, unter Beacht. insb. von Lizenzmodellen, Urheberrechten, Barrierefreiheit konzeptionieren,konfigurieren, testen, dokumentieren",
    "courseName": "Systemtechnik Teil I",
    "startDate": "30.05.2025",
    "endDate": "30.05.2025",
    "ue": 9
  },
  {
    "title": "Klausur",
    "courseName": "Systemtechnik Teil I",
    "startDate": "02.06.2025",
    "endDate": "02.06.2025",
    "ue": 9
  },
  {
    "title": "Leistungen nach betrieblichen und vertraglichen Vorgaben dokumentieren",
    "courseName": "Leistungserbringung /-bewertung, Kundenbeziehungsmanagement",
    "startDate": "03.06.2025",
    "endDate": "04.06.2025",
    "ue": 18
  },
  {
    "title": "Leistungserbringung unter Berücksichtigung organisatorischer/terminlicher Vorgaben mit Kunden und Kundinnen abstimmen und kontrollieren",
    "courseName": "Leistungserbringung /-bewertung, Kundenbeziehungsmanagement",
    "startDate": "05.06.2025",
    "endDate": "06.06.2025",
    "ue": 14
  },
  {
    "title": "Veränderungsprozesse begleiten und unterstützen",
    "courseName": "Leistungserbringung /-bewertung, Kundenbeziehungsmanagement",
    "startDate": "06.06.2025",
    "endDate": "06.06.2025",
    "ue": 4
  },
  {
    "title": "Veränderungsprozesse begleiten und unterstützen",
    "courseName": "Leistungserbringung /-bewertung, Kundenbeziehungsmanagement",
    "startDate": "10.06.2025",
    "endDate": "10.06.2025",
    "ue": 5
  },
  {
    "title": "Einweisung von Kunden/Kundinnen in die Nutzung von Produkten und Dienstleistungen, Leistungen/Dokumentationen übergeben, Abnahmeprotokolle anfertigen",
    "courseName": "Leistungserbringung /-bewertung, Kundenbeziehungsmanagement",
    "startDate": "10.06.2025",
    "endDate": "12.06.2025",
    "ue": 18
  },
  {
    "title": "Kosten für erbrachte Leistungen erfassen sowie im Zeitvergleich und im Soll-Ist-Vergleich bewerten",
    "courseName": "Leistungserbringung /-bewertung, Kundenbeziehungsmanagement",
    "startDate": "12.06.2025",
    "endDate": "17.06.2025",
    "ue": 27
  },
  {
    "title": "Kommunikation und Kundenbeziehungen",
    "courseName": "Leistungserbringung /-bewertung, Kundenbeziehungsmanagement",
    "startDate": "17.06.2025",
    "endDate": "18.06.2025",
    "ue": 13
  },
  {
    "title": "Klausur",
    "courseName": "Leistungserbringung /-bewertung, Kundenbeziehungsmanagement",
    "startDate": "20.06.2025",
    "endDate": "20.06.2025",
    "ue": 9
  },
  {
    "title": "SAP Überblick",
    "courseName": "Branchenspezifische ERP-Software",
    "startDate": "23.06.2025",
    "endDate": "30.06.2025",
    "ue": 54
  },
  {
    "title": "Zertifizierungsvorbereitung",
    "courseName": "Branchenspezifische ERP-Software",
    "startDate": "01.07.2025",
    "endDate": "02.07.2025",
    "ue": 18
  },
  {
    "title": "SAP-Zertifizierung (optional)",
    "courseName": "Branchenspezifische ERP-Software",
    "startDate": "03.07.2025",
    "endDate": "03.07.2025",
    "ue": 9
  },
  {
    "title": "Technisches Englisch",
    "courseName": "Technisches Englisch",
    "startDate": "04.07.2025",
    "endDate": "15.07.2025",
    "ue": 72
  },
  {
    "title": "Klausur",
    "courseName": "Technisches Englisch",
    "startDate": "16.07.2025",
    "endDate": "16.07.2025",
    "ue": 9
  },
  {
    "title": "Grundlagen",
    "courseName": "Prozedurale und Objektorientierte Programmierung",
    "startDate": "17.07.2025",
    "endDate": "18.07.2025",
    "ue": 18
  },
  {
    "title": "Refresh Programmierungsgrundlagen",
    "courseName": "Prozedurale und Objektorientierte Programmierung",
    "startDate": "21.07.2025",
    "endDate": "21.07.2025",
    "ue": 9
  },
  {
    "title": "Programmiertechniken/-methoden",
    "courseName": "Prozedurale und Objektorientierte Programmierung",
    "startDate": "22.07.2025",
    "endDate": "28.07.2025",
    "ue": 45
  },
  {
    "title": "Abgrenzung prozedurale zu objektorientierter Programmierung",
    "courseName": "Prozedurale und Objektorientierte Programmierung",
    "startDate": "29.07.2025",
    "endDate": "29.07.2025",
    "ue": 9
  },
  {
    "title": "Einführung in das objektorientierte Paradigma (Java, C# oder C++ als Anschauungssprache)",
    "courseName": "Prozedurale und Objektorientierte Programmierung",
    "startDate": "30.07.2025",
    "endDate": "01.08.2025",
    "ue": 27
  },
  {
    "title": "Einführung in das objektorientierte Paradigma (Java, C# oder C++ als Anschauungssprache)",
    "courseName": "Prozedurale und Objektorientierte Programmierung",
    "startDate": "18.08.2025",
    "endDate": "18.08.2025",
    "ue": 5
  },
  {
    "title": "Analyse und Design",
    "courseName": "Prozedurale und Objektorientierte Programmierung",
    "startDate": "18.08.2025",
    "endDate": "20.08.2025",
    "ue": 18
  },
  {
    "title": "UML",
    "courseName": "Prozedurale und Objektorientierte Programmierung",
    "startDate": "20.08.2025",
    "endDate": "25.08.2025",
    "ue": 27
  },
  {
    "title": "Lösungen konkreter Problemstellungen - prozedural und objektorientiert implementieren",
    "courseName": "Prozedurale und Objektorientierte Programmierung",
    "startDate": "25.08.2025",
    "endDate": "29.08.2025",
    "ue": 40
  },
  {
    "title": "Testverfahren/-konzepte",
    "courseName": "Prozedurale und Objektorientierte Programmierung",
    "startDate": "01.09.2025",
    "endDate": "01.09.2025",
    "ue": 9
  },
  {
    "title": "Klausur",
    "courseName": "Prozedurale und Objektorientierte Programmierung",
    "startDate": "02.09.2025",
    "endDate": "02.09.2025",
    "ue": 9
  },
  {
    "title": "Refresh Datenbankmodelle",
    "courseName": "Datenbanken",
    "startDate": "03.09.2025",
    "endDate": "03.09.2025",
    "ue": 9
  },
  {
    "title": "Datenbankdesign",
    "courseName": "Datenbanken",
    "startDate": "04.09.2025",
    "endDate": "09.09.2025",
    "ue": 32
  },
  {
    "title": "SQL",
    "courseName": "Datenbanken",
    "startDate": "09.09.2025",
    "endDate": "17.09.2025",
    "ue": 58
  },
  {
    "title": "Klausur",
    "courseName": "Datenbanken",
    "startDate": "18.09.2025",
    "endDate": "18.09.2025",
    "ue": 9
  },
  {
    "title": "technologische Entwicklungstrends von IT-Systemen feststellen sowie ihre wirtschaftlichen, sozialen und beruflichen Auswirkungen aufzeigen",
    "courseName": "Systemtechnik Teil II",
    "startDate": "19.09.2025",
    "endDate": "23.09.2025",
    "ue": 25
  },
  {
    "title": "Veränderungen von Einsatzfeldern für IT-Systeme aufgrund technischer, wirtschaftlicher und gesellschaftlicher Entwicklungen feststellen",
    "courseName": "Systemtechnik Teil II",
    "startDate": "23.09.2025",
    "endDate": "24.09.2025",
    "ue": 15
  },
  {
    "title": "Qualitätsmessung, -überwachung und -verbesserung",
    "courseName": "Qualitätsmanagement, IT-Sicherheit und Datenschutz Teil II",
    "startDate": "25.09.2025",
    "endDate": "30.09.2025",
    "ue": 36
  },
  {
    "title": "IT-Sicherheit und Datenschutz: Bedrohungsszenarien, Schadenspotenziale und Maßnahmenwirksamkeit",
    "courseName": "Qualitätsmanagement, IT-Sicherheit und Datenschutz Teil II",
    "startDate": "01.10.2025",
    "endDate": "02.10.2025",
    "ue": 18
  },
  {
    "title": "IT-Sicherheit und Datenschutz: Bedrohungsszenarien, Schadenspotenziale und Maßnahmenwirksamkeit",
    "courseName": "Qualitätsmanagement, IT-Sicherheit und Datenschutz Teil II",
    "startDate": "06.10.2025",
    "endDate": "08.10.2025",
    "ue": 27
  },
  {
    "title": "Klausur",
    "courseName": "Qualitätsmanagement, IT-Sicherheit und Datenschutz Teil II",
    "startDate": "09.10.2025",
    "endDate": "09.10.2025",
    "ue": 9
  },
  {
    "title": "Berufliche Bildung im dualen System; Arbeits- und Tarifrecht",
    "courseName": "Fachrichtungsübergreifendes Modul I",
    "startDate": "10.10.2025",
    "endDate": "10.10.2025",
    "ue": 10
  },
  {
    "title": "Betreiben von IT-Systemen",
    "courseName": "Fachrichtungsübergreifendes Modul I",
    "startDate": "13.10.2025",
    "endDate": "15.10.2025",
    "ue": 30
  },
  {
    "title": "Programmieren von Softwarelösungen",
    "courseName": "Fachrichtungsübergreifendes Modul I",
    "startDate": "16.10.2025",
    "endDate": "21.10.2025",
    "ue": 40
  },
  {
    "title": "Vorgehensmodelle und -methoden sowie Entwicklungsumgebungen und -bibliotheken auswählen und einsetzen",
    "courseName": "Fachspezifisches Modul I",
    "startDate": "22.10.2025",
    "endDate": "23.10.2025",
    "ue": 15
  },
  {
    "title": "Analyse- und Designverfahren anwenden",
    "courseName": "Fachspezifisches Modul I",
    "startDate": "23.10.2025",
    "endDate": "30.10.2025",
    "ue": 50
  },
  {
    "title": "Benutzerschnittstellen ergonomisch gestalten und an Kundenanforderungen anpassen",
    "courseName": "Fachspezifisches Modul I",
    "startDate": "30.10.2025",
    "endDate": "30.10.2025",
    "ue": 5
  },
  {
    "title": "Benutzerschnittstellen ergonomisch gestalten und an Kundenanforderungen anpassen",
    "courseName": "Fachspezifisches Modul I",
    "startDate": "03.11.2025",
    "endDate": "07.11.2025",
    "ue": 45
  },
  {
    "title": "Sicherheitsaspekte bei der Entwicklung von Softwareanwendungen berücksichtigen",
    "courseName": "Fachspezifisches Modul I",
    "startDate": "07.11.2025",
    "endDate": "10.11.2025",
    "ue": 10
  },
  {
    "title": "Datenintegrität mithilfe von Werkzeugen sicherstellen",
    "courseName": "Fachspezifisches Modul I",
    "startDate": "10.11.2025",
    "endDate": "11.11.2025",
    "ue": 10
  },
  {
    "title": "Modultests erstellen und durchführen",
    "courseName": "Fachspezifisches Modul I",
    "startDate": "11.11.2025",
    "endDate": "12.11.2025",
    "ue": 15
  },
  {
    "title": "Klausur",
    "courseName": "Fachspezifisches Modul I",
    "startDate": "13.11.2025",
    "endDate": "13.11.2025",
    "ue": 10
  },
  {
    "title": "Cloud-Konzepte",
    "courseName": "Branchenspezifische Cloud-Lösungen",
    "startDate": "14.11.2025",
    "endDate": "17.11.2025",
    "ue": 14
  },
  {
    "title": "Sicherheit und Compliance",
    "courseName": "Branchenspezifische Cloud-Lösungen",
    "startDate": "17.11.2025",
    "endDate": "18.11.2025",
    "ue": 13
  },
  {
    "title": "Sicherheit und Compliance",
    "courseName": "Branchenspezifische Cloud-Lösungen",
    "startDate": "20.11.2025",
    "endDate": "20.11.2025",
    "ue": 5
  },
  {
    "title": "Cloud-Technologie und -Services",
    "courseName": "Branchenspezifische Cloud-Lösungen",
    "startDate": "20.11.2025",
    "endDate": "24.11.2025",
    "ue": 22
  },
  {
    "title": "Fakturierung, Preisgestaltung und Support",
    "courseName": "Branchenspezifische Cloud-Lösungen",
    "startDate": "25.11.2025",
    "endDate": "25.11.2025",
    "ue": 9
  },
  {
    "title": "Prüfung AWS Certified Cloud Practitioner (CLF-C02)",
    "courseName": "Branchenspezifische Cloud-Lösungen",
    "startDate": "26.11.2025",
    "endDate": "26.11.2025",
    "ue": 9
  },
  {
    "title": "Einführung Projektmanagement",
    "courseName": "Projektmanagement und Projektarbeit",
    "startDate": "27.11.2025",
    "endDate": "27.11.2025",
    "ue": 9
  },
  {
    "title": "Definitionsphase",
    "courseName": "Projektmanagement und Projektarbeit",
    "startDate": "28.11.2025",
    "endDate": "01.12.2025",
    "ue": 14
  },
  {
    "title": "Planungsphase",
    "courseName": "Projektmanagement und Projektarbeit",
    "startDate": "01.12.2025",
    "endDate": "02.12.2025",
    "ue": 13
  },
  {
    "title": "Realisierungsphase",
    "courseName": "Projektmanagement und Projektarbeit",
    "startDate": "03.12.2025",
    "endDate": "04.12.2025",
    "ue": 14
  },
  {
    "title": "Abschlussphase",
    "courseName": "Projektmanagement und Projektarbeit",
    "startDate": "04.12.2025",
    "endDate": "04.12.2025",
    "ue": 4
  },
  {
    "title": "Projektarbeit: Anwendung/Umsetzung der fachspezifischen Projektmanagementinhalte",
    "courseName": "Projektmanagement und Projektarbeit",
    "startDate": "05.12.2025",
    "endDate": "10.12.2025",
    "ue": 36
  },
  {
    "title": "Überblick agiles Projektmanagement",
    "courseName": "Agiles Projektmanagement",
    "startDate": "11.12.2025",
    "endDate": "11.12.2025",
    "ue": 9
  },
  {
    "title": "Projektmanagement mit SCRUM",
    "courseName": "Agiles Projektmanagement",
    "startDate": "12.12.2025",
    "endDate": "18.12.2025",
    "ue": 45
  },
  {
    "title": "Projekt",
    "courseName": "Agiles Projektmanagement",
    "startDate": "19.12.2025",
    "endDate": "19.12.2025",
    "ue": 9
  },
  {
    "title": "Zertifizierungsvorbereitung",
    "courseName": "Agiles Projektmanagement",
    "startDate": "22.12.2025",
    "endDate": "22.12.2025",
    "ue": 9
  },
  // 2026/2027 parts omitted for brevity in seed but structure handles them
];

// Group topics by Course
interface CourseGroup {
  name: string;
  startDate: Date;
  endDate: Date;
  topics: any[];
}

function groupTopicsByCourse(topics: any[]): CourseGroup[] {
  const groups: { [key: string]: CourseGroup } = {};

  for (const t of topics) {
    const start = parseDate(t.startDate);
    const end = parseDate(t.endDate);

    if (!groups[t.courseName]) {
      groups[t.courseName] = {
        name: t.courseName,
        startDate: start,
        endDate: end,
        topics: []
      };
    } else {
      // Update min/max dates
      if (start < groups[t.courseName].startDate) groups[t.courseName].startDate = start;
      if (end > groups[t.courseName].endDate) groups[t.courseName].endDate = end;
    }
    groups[t.courseName].topics.push(t);
  }

  return Object.values(groups);
}

async function main() {
  console.log('Start seeding...');
  
  // Clean up
  await prisma.grade.deleteMany()
  await prisma.inquiry.deleteMany()
  await prisma.timeEntry.deleteMany()
  await prisma.bulletinPost.deleteMany()
  await prisma.courseEvent.deleteMany()
  await prisma.courseTopic.deleteMany()
  await prisma.exam.deleteMany()
  await prisma.course.deleteMany()
  await prisma.teacherSkill.deleteMany()
  await prisma.user.deleteMany()
  await prisma.educationTrack.deleteMany()
  await prisma.room.deleteMany()

  // 0. Create Rooms
  const room1 = await prisma.room.create({ data: { name: 'Raum 101 (Theorie)', capacity: 30 } });
  const room2 = await prisma.room.create({ data: { name: 'Raum 204 (IT-Labor)', capacity: 25 } });
  const roomRemote = await prisma.room.create({ data: { name: 'Remote / Telelearning', capacity: 100 } });

  // 1. Create Education Track
  const track = await prisma.educationTrack.create({
    data: {
      title: 'Fachinformatiker Anwendungsentwicklung - Winter 2025',
      startDate: parseDate("03.02.2025"),
      endDate: parseDate("02.02.2027")
    }
  });

  // 2. Create Users
  // Admin
  const admin = await prisma.user.create({
    data: {
      name: 'Admin Is TrAItor',
      email: 'admin@cc-corp.de',
      role: 'admin',
      department: 'IT-Administration'
    },
  })

  // Staff (Office)
  const office = await prisma.user.create({
    data: {
      name: 'Susi Sorglos',
      email: 'office@cc-corp.de',
      role: 'staff',
      department: 'Schulungsverwaltung'
    },
  })

  // Teacher 1 (Code)
  const profCode = await prisma.user.create({
    data: {
      name: 'Prof. Dr. Code',
      email: 'prof-code@cc-corp.de',
      role: 'teacher', // Changed from staff to teacher based on new role enum assumption or strictly logic
      teacherSkills: {
        create: [
          { subject: 'Programmierung' },
          { subject: 'Datenbanken' },
          { subject: 'Web Development' }
        ]
      }
    },
  })

  // Teacher 2 (BWL)
  const drBwl = await prisma.user.create({
    data: {
      name: 'Dr. Bilanz',
      email: 'bwl@cc-corp.de',
      role: 'teacher',
      teacherSkills: {
        create: [
          { subject: 'Wirtschaft' },
          { subject: 'Recht' }
        ]
      }
    },
  })
  
  // Student 1
  const marc = await prisma.user.create({
    data: {
      name: 'Marc Mustermann',
      email: 'marc@cc-student.de',
      role: 'student',
      measureNumber: '666/777/2025',
      educationTrackId: track.id
    },
  })

  // Student 2
  const anna = await prisma.user.create({
    data: {
      name: 'Anna Anständig',
      email: 'anna@cc-student.de',
      role: 'student',
      measureNumber: '111/222/2025',
      educationTrackId: track.id
    },
  })

  console.log('Users & Track created.');

  // 3. Create Courses and Topics
  const courses = groupTopicsByCourse(rawTopics);

  for (const c of courses) {
    // Determine teacher (simple logic for seed)
    let teachers = [];
    if (c.name.includes("Programmierung") || c.name.includes("Datenbank") || c.name.includes("IT") || c.name.includes("Netzwerk") || c.name.includes("Digitaltechnik")) {
      teachers.push({ id: profCode.id });
    } else {
      teachers.push({ id: drBwl.id });
    }

    const createdCourse = await prisma.course.create({
      data: {
        title: c.name,
        startDate: c.startDate,
        endDate: c.endDate,
        educationTrackId: track.id,
        students: {
          connect: [{ id: marc.id }, { id: anna.id }]
        },
        teachers: {
          connect: teachers
        },
        // Topics
        topics: {
          create: c.topics.map(t => ({
            title: t.title,
            durationUnits: t.ue,
            startDate: parseDate(t.startDate),
            endDate: parseDate(t.endDate)
          }))
        }
      }
    });

    // Check if any topic is a "Klausur" and create Exam entity
    for (const t of c.topics) {
      if (t.title.includes("Klausur") || t.title.includes("Prüfung")) {
        await prisma.exam.create({
          data: {
            title: `${c.name} - ${t.title}`,
            date: parseDate(t.startDate, "10:00:00"),
            duration: 90, // Standard duration
            content: "Prüfungsinhalte gemäß Modulbeschreibung",
            location: "Raum 101",
            courseId: createdCourse.id
          }
        });
      }
    }
  }

  console.log(`Created ${courses.length} courses with topics.`);

  // 4. Create some grades for finished exams (simulation)
  // Assuming the first course is finished in the past relative to "Winter 2025" start?
  // Actually start date is Feb 2025. If we run this now (Jan 2026), many courses are finished.
  
  // Find a course that is definitely in the past (e.g. "Fachbezogenes Rechnen" Feb 2025)
  // Note: Since I'm creating fresh, I can't rely on IDs. I'll just skip detailed grade seeding for specific courses to avoid lookup complexity, 
  // or I can fetch one back.
  
  // Let's create one dummy grade for Marc
  // We need to find an exam first.
  const firstExam = await prisma.exam.findFirst();
  if (firstExam) {
     await prisma.grade.create({
       data: {
         userId: marc.id,
         examId: firstExam.id,
         subject: firstExam.title,
         value: 1.3,
         date: new Date()
       }
     });
     console.log('Created sample grade for Marc.');
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
