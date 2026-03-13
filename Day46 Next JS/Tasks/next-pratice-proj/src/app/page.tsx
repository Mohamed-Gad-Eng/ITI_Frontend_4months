import { redirect } from "next/navigation";
// import HomePage from "./Home/page";

export default function Home() {
  
  // return <HomePage />;

  redirect("/home");
}
