"use client";

import { createContext, ReactNode, useContext, useEffect, useReducer, useState } from "react";

export type CartItem = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type AddPayload = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity?: number;
};

type CartAction =
  | { type: "ADD"; payload: AddPayload }
  | { type: "REMOVE"; payload: { id: number } }
  | { type: "UPDATE_QUANTITY"; payload: { id: number; quantity: number } }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; payload: CartState };

const CartContext = createContext<{
  items: CartItem[];
  addItem: (item: AddPayload) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
} | null>(null);

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE": {
      return action.payload;
    }
    case "ADD": {
      const { id, title, price, thumbnail } = action.payload;
      const quantity = action.payload.quantity ?? 1;
      const existing = state.items.find((item) => item.id === id);

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          { id, title, price, thumbnail, quantity },
        ],
      };
    }
    case "REMOVE": {
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };
    }
    case "UPDATE_QUANTITY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        return {
          items: state.items.filter((item) => item.id !== id),
        };
      }
      return {
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    }
    case "CLEAR": {
      return { items: [] };
    }
    default:
      return state;
  }
}

const STORAGE_KEY = "cart";

function safeReadStorage(): CartState | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CartState;
    if (!parsed || !Array.isArray(parsed.items)) return null;
    return parsed;
  } catch {
    return null;
  }
}

type CartProviderProps = {
  children: ReactNode;
};

export default function CartProvider({ children }: CartProviderProps) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = safeReadStorage();
    if (stored) {
      dispatch({ type: "HYDRATE", payload: stored });
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }, [state, hydrated]);

  const value = {
    items: state.items,
    addItem: (item: AddPayload) => dispatch({ type: "ADD", payload: item }),
    removeItem: (id: number) => dispatch({ type: "REMOVE", payload: { id } }),
    updateQuantity: (id: number, quantity: number) =>
      dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } }),
    clearCart: () => dispatch({ type: "CLEAR" }),
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
