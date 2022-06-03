import Head from "next/head";
import Hero from "./../components/Hero";
import Card from "./../components/Card";

export default function About() {
  return (
    <div>
      <Head>
        <title>Halal AlAqsa - about</title>
        <meta name="description" content="About Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          title={"About us"}
          tagline={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus."
          }
          img={{
            url: "https://st2.depositphotos.com/3591429/10464/i/450/depositphotos_104648666-stock-photo-group-of-people-brainstorming-on.jpg",
            desc: "About us hero image."
          }}
        />

        <Card
          heading={"About Halal AlAqsa"}
          description={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          }
        />
      </main>
    </div>
  );
}
