import Head from "next/head";
import Hero from "../components/Hero";
import TeamCard from "../components/TeamCard";

export default function Team() {
  const teamHero = {
    title: "Team members",
    tagline: "Skilled and experienced members in the field",
    img: {
      url: "/images/team.bmp",
      desc: "Our team members."
    }
  };

  const teamMembers = [
    {
      prefix: "",
      name: "Mohammad Jaber",
      photoUrl: "/images/persons/mohammad_jaber.jpeg",
      cv: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id neque vel magna dictum gravida. Fusce auctor fringilla leo a efficitur. Phasellus consequat pretium leo eu consequat. Aliquam id magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id neque vel magna dictum gravida. Fusce auctor fringilla leo a efficitur. Phasellus consequat pretium leo eu consequat. Aliquam id magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id neque vel magna dictum gravida. Fusce auctor fringilla leo a efficitur. Phasellus consequat pretium leo eu consequat. Aliquam id magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet mollis augue sed cursus. Nunc cursus tristique orci eget vehicula. Mauris eu elit risus. Cras hendrerit aliquet turpis, eu vulputate neque placerat et. Integer nunc libero, iaculis ac sollicitudin ac, tempus sit amet velit. Cras luctus accumsan mi eu facilisis. Fusce tempus tempus ipsum. Curabitur pretium tellus in mauris tincidunt, id feugiat mi malesuada. Nam eros orci, consectetur nec volutpat."
      ]
    },
    {
      prefix: "PhD.",
      name: "Husam AlDin Afana",
      photoUrl: "/images/persons/husam_afaneh.bmp",
      cv: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id neque vel magna dictum gravida. Fusce auctor fringilla leo a efficitur. Phasellus consequat pretium leo eu consequat. Aliquam id magna.",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id neque vel magna dictum gravida. Fusce auctor fringilla leo a efficitur. Phasellus consequat pretium leo eu consequat. Aliquam id magna."
      ]
    },
    {
      prefix: "Dr.",
      name: "Ibrahim Abdallah Afaneh",
      photoUrl: "/images/persons/ibrahim_afaneh.jpeg",
      cv: [
        "diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget felis eget nunc lobortis mattis aliquam faucibus purus in massa tempor nec feugiat nisl pretium fusce id velit ut tortor pretium viverra suspendisse potenti nullam ac."
      ]
    }
  ];

  return (
    <div>
      <Head>
        <title>Halal AlAqsa - members</title>
        <meta name="description" content="Team Members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero {...teamHero} />

        <TeamCard teamMembers={teamMembers} />
      </main>
    </div>
  );
}
