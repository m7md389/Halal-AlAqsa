import Head from "next/head";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function About() {
  const aboutHero = {
    title: "About us",
    tagline: "100% halal products for Muslims",
    img: {
      url: "images/who_are_we.jpg",
      desc: "Who we are image."
    }
  };

  const aboutUs = {
    ourMission: {
      heading: "Our Mission",
      description: [
        "We guarantee our Muslim customers 100% Halal products by being transparent with our methods and process of certifying Halal products. Our potential target group consists of two main groups.",
        "A. Multinational companies in the food industry who want to expand their business by entering or developing the ever-growing market for Halal products.",
        "B. Muslims who truly want to buy guaranteed Halal products.",
        "For them, this is the most important buying factor, because they really want to have 100% Halal quality for all products labeled as Halal. Our certification services target both audiences and are able to meet their needs for proper certification for Halal products.",
        "We are able to certify manufacturing plants of any size, meat producers and packers, raw food materials and additives, large catering facilities for airlines and cruises and other major events etc."
      ],
      innerCard: true
    },
    ourStaff: {
      heading: "Our Staff",
      description: [
        "Our skilled and experienced personnel understand Halal standards and the needs of the industry. Our strict staff is one of our most important assets.",
        "We have a very experienced advisory board and Islamic scholars and experts in the nutritional industry, which brings valuable benefits for our customers.",
        "Our team has the extensive know-how and international experience provides superior services to our customers."
      ],
      innerCard: true
    },
    blessing: {
      heading: "Blessing",
      description: [
        "Mufti Husam Al-Din bin Musa Muhammad bin Afana - Head of Advisory Board.",
        "Dr. Ibrahim Abdallah Afaneh P.h.d.in Food Engineering – Ingredients Advisor.",
        "Jaber Mohamed – Executive Director of Halal Alaqsa."
      ],
      innerCard: true
    }
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
          <Card {...aboutUs.ourMission} />
          <Card {...aboutUs.ourStaff} />
          <Card {...aboutUs.blessing} />
        </Card>
      </main>
    </div>
  );
}
