import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getStaticProps({ params }: { params: { id: string } }) {
  const profileDir = path.join(process.cwd(), "public/profiles", params.id);
  const contact = JSON.parse(
    fs.readFileSync(path.join(profileDir, "contact.json"), "utf8")
  );
  const blogsDir = path.join(profileDir, "blogs");
  const blogs = fs.readdirSync(blogsDir).map((file) => {
    const content = fs.readFileSync(path.join(blogsDir, file), "utf8");
    const { data, content: blogContent } = matter(content);
    return { data, content: blogContent };
  });

  return {
    props: {
      contact,
      blogs,
    },
  };
}

export async function getStaticPaths() {
  const profilesDir = path.join(process.cwd(), "public/profiles");
  const profiles = fs.readdirSync(profilesDir);
  return {
    paths: profiles.map((profile) => ({ params: { id: profile } })),
    fallback: false,
  };
}

const ProfilePage = ({ contact, blogs }: { contact: any; blogs: any[] }) => (
  <div>
    <h1>{contact.name}</h1>
    <p>Email: {contact.email}</p>
    <p>Phone: {contact.phone}</p>
    <h2>Blog Posts</h2>
    {blogs.map((blog, idx) => (
      <div key={idx}>
        <h3>{blog.data.title}</h3>
        <p>{blog.content}</p>
      </div>
    ))}
  </div>
);

export default ProfilePage;
