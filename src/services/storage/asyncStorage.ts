import AsyncStorage from "@react-native-async-storage/async-storage";
import { toast } from "sonner-native";

import { StorageService } from "./storageService";

export const asyncStorage: StorageService = {
    getItem: async (key) => {
        try {
            const value = await AsyncStorage.getItem(key);
            return value ? JSON.parse(value) : null;
        } catch {
            toast.error("Error getting item from async storage", {
                richColors: true,
            });
            return null;
        }
    },
    setItem: async (key, value) => {
        try {
            await AsyncStorage.setItem(key, JSON.stringify(value));
        } catch {
            toast.error("Error setting item in async storage", {
                richColors: true,
            });
        }
    },
};
