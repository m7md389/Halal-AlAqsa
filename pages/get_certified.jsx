import Head from "next/head";
import Card from "../components/Card";
import Process from "../components/Process";
import Hero from "../components/Hero";

import {
  faFileDownload,
  faFileWaveform,
  faReply
} from "@fortawesome/free-solid-svg-icons";

export default function GetCertified() {
  const getCertifiedHero = {
    title: "Apply Now",
    tagline: "3 steps certification process",
    img: {
      url: "images/cirtificate.bmp",
      desc: "Get certified hero image."
    }
  };

  const processes = [
    {
      faIcon: faFileDownload,
      heading: "Download form",
      description: "Please download our Application form here: ..."
    },
    {
      faIcon: faFileWaveform,
      heading: "Fill the form",
      description:
        "print and fill this form as your first step and send it to our E-mail: halal-alaqsa@gmail.com"
    },
    {
      faIcon: faReply,
      heading: "Wait for reply",
      description:
        "After your application, your contact person will provide you the initial documentation."
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
        <Hero {...getCertifiedHero} />

        <Card heading="Application for Halal Certification">
          {processes.map((process) => (
            <Process key={process.heading} {...process} />
          ))}
        </Card>
      </main>
    </div>
  );
}
