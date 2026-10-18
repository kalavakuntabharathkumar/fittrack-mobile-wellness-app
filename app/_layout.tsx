import "../lib/sentry";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { registerForPushNotificationsAsync } from "../lib/notifications";

export default function RootLayout() {
  useEffect(() => { registerForPushNotificationsAsync().catch(console.warn); }, []);
  return <><StatusBar style="dark" /><Stack screenOptions={{ headerShown: false }} /></>;
}
