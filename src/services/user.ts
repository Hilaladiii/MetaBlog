import { UserType } from "@/common/types/user";

export async function signUp(data: UserType) {
  try {
    const response = await fetch("/api/auth/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const res = await response.json();
    if (!response.ok) {
      throw new Error(res.message || "Failed to sign up");
    }

    return res;
  } catch (error) {
    throw error;
  }
}
