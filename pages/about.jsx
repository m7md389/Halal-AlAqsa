import Head from "next/head";
import Hero from "/components/Hero";
import Card from "/components/Card";

export default function About() {
  const aboutHero = {
    title: "About us",
    tagline: "100% halal products for Muslims",
    img: {
      url: "https://st2.depositphotos.com/3591429/10464/i/450/depositphotos_104648666-stock-photo-group-of-people-brainstorming-on.jpg",
      desc: "About us hero image."
    }
  };

  const ourMission = {
    heading: "Our Mission",
    description: [
      "We guarantee our Muslim customers 100% Halal products by demonstrating to the industry in a transparent way how to guarantee the safe creation of Halal products. Our potential target group consists of two main groups.",
      "On the one hand, multinational companies in the food industry who want to expand their business by entering or developing the ever-growing market for Halal products. On the other hand, Muslims who want to buy wholly-Halal products.",
      "For them, this is the most important buying factor, because they really want to have 100% Halal quality from all products that are labeled as Halal. Our certification services target both audiences and are able to meet their needs for proper certification for Halal products."
    ],
    innerCard: true
  };
  const ourStaff = {
    heading: "Our Staff",
    description: [
      "Our skilled and experienced personnel that understands Halal standards and the needs of the industry is one of our most important assets led by Islamic scholars and scholars in the nutritional industry, which brings valuable benefits for our customers.",
      "Our team with extensive know-how and international experience provides superior services to our customers."
    ],
    innerCard: true
  };
  return (
    <div>
      <Head>
        <title>Halal AlAqsa - about</title>
        <meta name="description" content="About Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero {...aboutHero} />

        <Card heading={"About Halal AlAqsa"}>
          <Card {...ourMission} />
          <Card {...ourStaff} />
        </Card>
      </main>
    </div>
  );
}
