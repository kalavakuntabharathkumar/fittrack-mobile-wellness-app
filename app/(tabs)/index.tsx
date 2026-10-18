import { useState } from "react";
import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";

const goals = [
  { id: "water", title: "Drink water", detail: "8 glasses today", icon: "💧" },
  { id: "move", title: "Move your body", detail: "20 minutes of movement", icon: "🌿" },
  { id: "breathe", title: "Take a mindful break", detail: "5 minutes to reset", icon: "🧘" },
];

export default function TodayScreen() {
  const [done, setDone] = useState<string[]>([]);
  const toggle = (id: string) => setDone(current => current.includes(id) ? current.filter(item => item !== id) : [...current, id]);
  return <ScrollView style={styles.page} contentContainerStyle={styles.content}>
    <Text style={styles.eyebrow}>FITTRACK · YOUR DAILY RESET</Text>
    <Text style={styles.title}>Small steps.{"\n"}Stronger you.</Text>
    <Text style={styles.subtitle}>Build a routine that supports how you want to feel.</Text>
    <View style={styles.scoreCard}>
      <Text style={styles.scoreLabel}>TODAY'S PROGRESS</Text>
      <Text style={styles.score}>{done.length} <Text style={styles.scoreTotal}>/ {goals.length} habits</Text></Text>
      <View style={styles.track}><View style={[styles.fill, { width: `${done.length / goals.length * 100}%` }]} /></View>
    </View>
    <Text style={styles.sectionTitle}>Your daily intentions</Text>
    {goals.map(goal => <Pressable key={goal.id} accessibilityRole="checkbox" accessibilityState={{ checked: done.includes(goal.id) }} onPress={() => toggle(goal.id)} style={styles.habit}>
      <Text style={styles.emoji}>{goal.icon}</Text>
      <View style={styles.habitText}><Text style={styles.habitTitle}>{goal.title}</Text><Text style={styles.habitDetail}>{goal.detail}</Text></View>
      <Text style={[styles.check, done.includes(goal.id) && styles.checked]}>{done.includes(goal.id) ? "✓" : "+"}</Text>
    </Pressable>)}
    <Text style={styles.footer}>Consistency over perfection. Take it one day at a time.</Text>
  </ScrollView>;
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#f5f8f7" },
  content: { padding: 24, paddingTop: 64, paddingBottom: 40 },
  eyebrow: { color: "#176b61", fontSize: 11, fontWeight: "800", letterSpacing: 1.8 },
  title: { color: "#152238", fontSize: 42, lineHeight: 47, fontWeight: "800", marginTop: 12 },
  subtitle: { color: "#667085", fontSize: 15, lineHeight: 23, marginTop: 12, marginBottom: 24 },
  scoreCard: { backgroundColor: "#176b61", borderRadius: 22, padding: 22, marginBottom: 28 },
  scoreLabel: { color: "#cce8df", fontSize: 11, fontWeight: "800", letterSpacing: 1.2 },
  score: { color: "white", fontSize: 34, fontWeight: "800", marginTop: 8 },
  scoreTotal: { color: "#cce8df", fontSize: 16, fontWeight: "500" },
  track: { height: 7, borderRadius: 8, backgroundColor: "#ffffff50", marginTop: 16, overflow: "hidden" },
  fill: { height: 7, backgroundColor: "#d6f4a6", borderRadius: 8 },
  sectionTitle: { color: "#152238", fontSize: 20, fontWeight: "800", marginBottom: 14 },
  habit: { backgroundColor: "white", borderRadius: 16, padding: 16, marginBottom: 12, flexDirection: "row", alignItems: "center", borderWidth: 1, borderColor: "#e0e8e5" },
  emoji: { fontSize: 25, marginRight: 14 },
  habitText: { flex: 1 },
  habitTitle: { color: "#152238", fontSize: 15, fontWeight: "700" },
  habitDetail: { color: "#667085", fontSize: 12, marginTop: 5 },
  check: { color: "#176b61", fontSize: 24, fontWeight: "700", paddingHorizontal: 8 },
  checked: { color: "#176b61", backgroundColor: "#e4f3ef", overflow: "hidden", borderRadius: 20 },
  footer: { textAlign: "center", color: "#667085", fontSize: 12, marginTop: 18, lineHeight: 18 },
});
