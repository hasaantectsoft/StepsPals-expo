// hook for managing user data
// manage user state
// make sure it stays up to date

import { useCallback, useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export const useUser = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const getUserData = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (user) {
      setLoading(false);
      setUser(user);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  // on auth state change
  // it will call the getUserData()

  const refreshUser = useCallback(async () => {
    await supabase.auth.refreshSession();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      setUser(user);
    }
    return user;
  }, []);

  return {
    user,
  };
};
