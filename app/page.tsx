import Description from "@/components/description";
import Header from "@/components/header";
import Image from "next/image";

function Home() {

  let showDescription = false;
  return (
    <main>
      <Header text ="Hello from Header"/>
      {/* we can use any of these 2 for the ternary operator */}
      {/* {showDescription && <Description />} */}
      {showDescription ? <Description /> : null}
    </main>
  );
}

export default Home;