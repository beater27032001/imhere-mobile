import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  const backgroundColor = "#000000";

  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor },
        }}
      />
      <StatusBar style="light" backgroundColor="transparent" translucent />
    </>
  );
}
