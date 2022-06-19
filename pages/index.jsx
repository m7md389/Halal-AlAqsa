import Head from "next/head";
import Hero from "../components/Hero";
import Card from "../components/Card";

export default function Home() {
  const homeHero = {
    title: "Halal AlAqsa",
    tagline: "We give certificates and the world recognizes",
    img: {
      url: "/logo_700.png",
      desc: "Home page hero image."
    }
  };

  const halalAlaqsa = {
    heading: "Halal Alaqsa",
    description: [
      "The Muslims around the world are more than one billion and a half Muslims, and the Halal food for them is extremely important. The Muslims should not eat any food that does not comply with the Islamic laws, nor can it have ingredients and preparation that deviate from the strict principles of Halal.",
      "In the past, the Halal certificate was required only for meat which was imported to the Islamic countries or produced there. Today with globalization, many products are shipped from around the world and the Halal concept has developed and spread across the globe. Today Halal certificates are required for all processed foods, medical products and cosmetics products… etc, in addition to the meat now the Halal certification became mandatory from all the manufacturers for most of Islamic countries, and for Muslims residing in other countries.",
      "Today there is a growing need for a professional and trustworthy certification body on the highest level to meet the demand from emerging markets and manufacturers and customers. The certification body must be highly credible and recognized by Muslims around the world and adhere to the strictest laws od Islam. This is exactly what our office Halal Alaqsa is doing through its office in Jerusalem.",
      "A Halal certification received from our organization (if the products are compatible with the applicable standards in our office), will give you the ability to enhance your business exposure to the growing demand for Halal food and export door your goods to many Muslim countries and customers around the world."
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
