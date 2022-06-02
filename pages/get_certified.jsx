import Head from "next/head";
import Card from "../components/Card";
import Process from "../components/Process";
import Hero from "./../components/Hero";
import TeamCard from "./../components/TeamCard";

import {
  faBookmark,
  faMicroscope,
  faLayerGroup,
  faScroll
} from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const processes = [
    {
      faIcon: faBookmark,
      heading: "Apply & review",
      description:
        "Download & Submit your application. The application form includes details about your company, plant, products, and ingredients used. Filling out the application will give us a clear indication if the certification process is feasible. You can contact us also by email at contact-us@halal-alaqsa.com or whatsApp +972-507123652"
    },
    {
      faIcon: faMicroscope,
      heading: "Inspection",
      description:
        "Our Rabbinic representative will visit the factory/plant for an initial inspection of your facility. This initial inspection will give us a more clear indication of the pathway if kosher certification is viable."
    },
    {
      faIcon: faLayerGroup,
      heading: "Contract",
      description:
        "After our review, Halal AlAqsa will draft an agreement with the terms of certification. This agreement will specify the requirements and obligations of both parties."
    },
    {
      faIcon: faScroll,
      heading: "Halal certification",
      description:
        "After the product passes the initial inspection and the certification fee is paid, we will send you a certification along with the Halal AlAqsa symbol to be used on your certified products."
    }
  ];

  return (
    <div>
      <Head>
        <title>Halal AlAqsa - get certified</title>
        <meta name="description" content="Get Certified" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          title={"Get Certified"}
          paragraph={"4 steps certification process"}
          img={{
            url: "https://assets.entrepreneur.com/content/3x2/2000/20151215195453-business-leader-group-front-leadership-team-professionals-businesspeople.jpeg?auto=webp&quality=95&crop=16:9&width=675",
            desc: "Our team members."
          }}
        />

        <Card heading="The process">
          {processes.map((process) => (
            <Process {...process} />
          ))}
        </Card>
      </main>
    </div>
  );
}
