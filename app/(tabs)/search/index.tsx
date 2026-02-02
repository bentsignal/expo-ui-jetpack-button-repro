import { Link } from "expo-router";
import { Text, View } from "react-native";
export default function SearchScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Search</Text>
      <Text style={{ fontSize: 16 }}>
        Click the link below to go to Shawns page
      </Text>
      <Link href="/search/shawn" style={{ fontSize: 16, color: "blue" }}>
        Shawn
      </Link>
    </View>
  );
}
