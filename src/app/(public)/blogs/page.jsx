import BlogHero from "../../components/blogs/BlogHero";
import BlogGrid from "../../components/blogs/BlogGrid";

export const metadata = {
  title: "Blogs & Insights | Fimco Real Estate",
  description: "Read our latest insights, market analyses, and news on Dubai real estate.",
};

export default function BlogsPage() {
  return (
    <>
      <BlogHero />
      <BlogGrid />
    </>
  );
}
