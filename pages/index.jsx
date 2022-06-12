import Head from "next/head";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function Home() {
  const homeHero = {
    title: "Halal AlAqsa",
    tagline: "We give certificates and the world recognizes.",
    img: {
      url: "/logo.png",
      desc: "Home page hero image."
    }
  };

  const halalAlaqsa = {
    heading: "Halal Alaqsa",
    description: [
      "The Muslims around the world are more than one billion and a half billion Muslims, and the halal food for them is extremely important, the Muslim should not eat any food that does not comply with the Islamic laws, or it can be suspicious, from that principles coming the importance of Halal food for Muslims.",
      "In the past the halal certificates were required only for meat which was imported to the Islamic countries, and since the halal concept has developed and spread across the world, today halal Certificates become required for all processed foods, medical products and cosmetics products… etc, in addition to the meat now the halal certificates became mandatory  from all the manufacturers for most of Islamic countries.",
      "Because of necessary to the existence of specialized institutions in the granting of Halal certification for manufacturers, and these institutions must be highly credible and recognized by islamic . This is exactly what our office Halal Alaqsa doing through its office in Jerusalem.",
      "By halal certificate obtained by the customer from our office (if the products are compatible with the applicable standards in our office),  you will have the ability to  open the export door to alot of Muslim countries around the world."
    ]
  };

  return (
    <div>
      <Head>
        <title>Halal AlAqsa</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero {...homeHero} />

        <Card {...halalAlaqsa} />
      </main>
    </div>
  );
}
