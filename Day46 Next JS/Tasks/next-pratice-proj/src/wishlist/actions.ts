"use server";

import { cookies } from "next/headers";

const WISHLIST_KEY = "wishlist";

type Wishlist = {
  ids: number[];
};

function readWishlist(): Wishlist {
  const raw = cookies().get(WISHLIST_KEY)?.value;
  if (!raw) return { ids: [] };

  try {
    const parsed = JSON.parse(raw) as Wishlist;
    if (!parsed || !Array.isArray(parsed.ids)) return { ids: [] };
    return { ids: parsed.ids.filter((n) => typeof n === "number") };
  } catch {
    return { ids: [] };
  }
}

function writeWishlist(next: Wishlist) {
  cookies().set(WISHLIST_KEY, JSON.stringify(next), {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
  });
}

export async function addToWishlistAction(formData: FormData) {
  const productId = Number(formData.get("productId"));
  if (!Number.isFinite(productId)) return;

  const current = readWishlist();
  if (current.ids.includes(productId)) return;

  writeWishlist({ ids: [...current.ids, productId] });
}
