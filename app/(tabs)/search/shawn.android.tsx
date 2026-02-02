import { Button, ContextMenu } from "@expo/ui/jetpack-compose";
import { Text, View } from "react-native";

export default function ShawnScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Shawn</Text>
      <Text style={{ fontSize: 16 }}>This is Shawns profile page</Text>
      <ContextMenu
        style={{
          marginHorizontal: 16,
          height: 40,
          borderRadius: 100,
          borderWidth: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // With the page open, comment out the line below and save. Then uncomment it and save again.
          // You should see the width take up the full width of the screen.
          // Once you see this, navigate back to the search page, and click the link to Shawns page again.
          // You should see the button no longer taking up the full width of the screen.
          width: "100%",
        }}
      >
        <ContextMenu.Trigger>
          <Button style={{ flex: 1, marginHorizontal: 16, width: "100%" }}>
            Friends
          </Button>
        </ContextMenu.Trigger>
        <ContextMenu.Items>
          <Button elementColors={{ contentColor: "red" }}>Remove Friend</Button>
          <Button>Cancel</Button>
        </ContextMenu.Items>
      </ContextMenu>
    </View>
  );
}
