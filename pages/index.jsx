import Head from "next/head";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Halal AlAqsa</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          title={"Halal AlAqsa"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus."
          }
          img={{
            url: "https://oks.org.il/wp-content/uploads/2021/04/jars-OKS-1.jpg",
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
