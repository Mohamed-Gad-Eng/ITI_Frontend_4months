"use server";

import { signIn } from "@/services/auth";

export async function signingAction() {
  await signIn("google", { redirectTo: "/account" });
}

export async function facebookSigningAction() {
  await signIn("facebook", { redirectTo: "/account" });
}
