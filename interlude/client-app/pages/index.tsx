import fs from "fs";
import path from "path";
import Link from "next/link";

export async function getStaticProps() {
  const profilesDir = path.join(process.cwd(), "public/profiles");
  const profiles = fs.readdirSync(profilesDir);
  return {
    props: {
      profiles,
    },
  };
}

const HomePage = ({ profiles }: { profiles: string[] }) => (
  <div>
    <h1>Client Portal</h1>
    <ul>
      {profiles.map((profile) => (
        <li key={profile}>
          <Link href={`/profiles/${profile}`}>{profile}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default HomePage;
