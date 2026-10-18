import { StyleSheet, Text, View } from "react-native";

const habits = [
  ["01", "Hydration", "Keep a water bottle within reach."],
  ["02", "Movement", "Add a little movement to your day."],
  ["03", "Mindfulness", "Pause, breathe, and check in with yourself."],
  ["04", "Rest", "Create a calm wind-down routine."],
];

export default function HabitsScreen() {
  return <View style={styles.page}>
    <Text style={styles.eyebrow}>YOUR ROUTINE</Text>
    <Text style={styles.title}>Habits that add up.</Text>
    <Text style={styles.subtitle}>Choose gentle, repeatable actions. Your routine can change as you do.</Text>
    {habits.map(([number, title, detail]) => <View key={number} style={styles.card}>
      <Text style={styles.number}>{number}</Text>
      <View style={styles.copy}><Text style={styles.cardTitle}>{title}</Text><Text style={styles.detail}>{detail}</Text></View>
    </View>)}
  </View>;
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#f5f8f7", padding: 24, paddingTop: 64 },
  eyebrow: { color: "#176b61", fontSize: 11, fontWeight: "800", letterSpacing: 1.8 },
  title: { color: "#152238", fontSize: 32, fontWeight: "800", marginTop: 12 },
  subtitle: { color: "#667085", fontSize: 14, lineHeight: 22, marginTop: 10, marginBottom: 24 },
  card: { flexDirection: "row", alignItems: "center", backgroundColor: "white", borderRadius: 16, padding: 18, marginBottom: 12, borderWidth: 1, borderColor: "#e0e8e5" },
  number: { color: "#176b61", fontSize: 13, fontWeight: "800", marginRight: 16 },
  copy: { flex: 1 },
  cardTitle: { color: "#152238", fontSize: 15, fontWeight: "700" },
  detail: { color: "#667085", fontSize: 12, marginTop: 5, lineHeight: 18 },
});
