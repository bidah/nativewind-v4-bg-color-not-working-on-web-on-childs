import { Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <View className="bg-gray-100 flex-1 p-3">
      <View className="flex-1 bg-indigo-500 rounded-xl pt-6 items-center justify-center">
        <Text className="text-2xl uppercase font-bold text-white text-center">
          Tab two
        </Text>
      </View>
    </View>
  );
}
