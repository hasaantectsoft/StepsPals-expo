import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import * as Linking from "expo-linking";
import { PROJECT_URL, PUBLIC_KEY } from "../utils/variables";

export const supabase = createClient(PROJECT_URL, PUBLIC_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    redirectTo: Linking.createURL("/"),
  },
});
