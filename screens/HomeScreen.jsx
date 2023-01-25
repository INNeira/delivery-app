import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Image, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronDownIcon, UserIcon } from "react-native-heroicons/outline";

export const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView>
      <Text className="text-blue-600">
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="w-4/5">
            <View>
              <Text className="font-bold text-gray-400 text-xs">
                Deliver Now!!
              </Text>
              <View className="flex-row items-center">
                <Text className="font-bold text-xl">Current Location</Text>
                <ChevronDownIcon size={20} color="#00CCBB" />
              </View>
            </View>
          </View>
          <View className="w-1/5">
            <UserIcon size={35} color="#00CCBB" />
          </View>
        </View>
      </Text>
    </SafeAreaView>
  );
};
