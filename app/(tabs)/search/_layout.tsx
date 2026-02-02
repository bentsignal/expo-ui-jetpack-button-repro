import { Stack } from "expo-router";

export default function SearchLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Search" }} />
      <Stack.Screen name="shawn" options={{ title: "Shawn" }} />
    </Stack>
  );
}
