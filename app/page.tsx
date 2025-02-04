import Description from "@/components/description";
import Header from "@/components/header";
import Image from "next/image";

function Home() {
  return (
    <main>
      <Header text ="Hello from Header"/>
      <Description />
    </main>
  );
}

export default Home;