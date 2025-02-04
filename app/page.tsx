import Description from "@/components/description";
import Header from "@/components/header";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

function Home() {

  let showDescription = true;
  return (
    <main >
      <div className={styles.section}>
        <Header text="Hello from Header" />
        {/* we can use any of these 2 for the ternary operator */}
        {/* {showDescription && <Description />} */}
        {showDescription ? <Description /> : null}
      </div>
      <Link href = "/about">Go to About</Link>
    </main>
  );
}

export default Home;