import Head from "next/head";
import Hero from "./../components/Hero";
import TeamCard from "./../components/TeamCard";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const teamMembers = [
    {
      name: "Mohammad Jaber",
      photoUrl:
        "https://scontent.fsdv3-1.fna.fbcdn.net/v/t1.6435-9/145549364_4934348773306576_6284008872217121415_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lsKzreXm1scAX8-1xUi&_nc_ht=scontent.fsdv3-1.fna&oh=00_AT-z8PSy9V_YCxlrSI_7hNDsyFWu9XdfPWWc7w29tKKAnw&oe=62BE9BD7",
      cv: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id neque vel magna dictum gravida. Fusce auctor fringilla leo a efficitur. Phasellus consequat pretium leo eu consequat. Aliquam id magna."
    },
    {
      name: "Husam Afaneh",
      photoUrl:
        "https://www.aljazeera.net/wp-content/uploads/2014/08/dbffe381-8987-4a25-93ad-2755ca82402c.jpeg?resize=686%2C513",
      cv: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam aliquet mollis augue sed cursus. Nunc cursus tristique orci eget vehicula. Mauris eu elit risus. Cras hendrerit aliquet turpis, eu vulputate neque placerat et. Integer nunc libero, iaculis ac sollicitudin ac, tempus sit amet velit. Cras luctus accumsan mi eu facilisis. Fusce tempus tempus ipsum. Curabitur pretium tellus in mauris tincidunt, id feugiat mi malesuada. Nam eros orci, consectetur nec volutpat."
    }
  ];

  return (
    <div className={styles.container}>
      <Head>
        <title>Halal AlAqsa - members</title>
        <meta name="description" content="Team Members" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero
          title={"Team members"}
          paragraph={
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer purus."
          }
          img={{
            url: "https://assets.entrepreneur.com/content/3x2/2000/20151215195453-business-leader-group-front-leadership-team-professionals-businesspeople.jpeg?auto=webp&quality=95&crop=16:9&width=675",
            desc: "Our team members."
          }}
        />

        <TeamCard teamMembers={teamMembers} />
      </main>
    </div>
  );
}
