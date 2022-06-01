import Head from "next/head";
import Image from "next/image";
import Hero from "./../components/Hero";
import Card from "./../components/Card";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Halal AlAqsa</title>
        <meta name="description" content="About Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          title={"About us"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus."
          }
          img={{
            url: "https://www.canon-printersetupsupport.com/images/about-us.jpg",
            desc: "Test image."
          }}
        />

        <Card
          title={"About us"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
      </main>
    </div>
  );
}
