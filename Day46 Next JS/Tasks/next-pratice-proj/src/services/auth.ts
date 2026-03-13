"use server";

import { redirect } from "next/navigation";

type Provider = "google" | "facebook";

type SignInOptions = {
	redirectTo: string;
};

export async function signIn(provider: Provider, options: SignInOptions) {
	const callbackUrl = encodeURIComponent(options.redirectTo);
	redirect(`/api/auth/signin/${provider}?callbackUrl=${callbackUrl}`);
}
