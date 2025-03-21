import Image from "next/image";
import {redirect} from "next/navigation";

export default function Home() {

    redirect("/dashboard/counter"); // redirect to /dashboard/counter
  return (
      <>
        <h1>My Dashboard</h1>
      </>
  );
}
