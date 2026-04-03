import BlogHero from "../../components/blogs/BlogHero";
import BlogFeatured from "../../components/blogs/BlogFeatured";
import BlogGrid from "../../components/blogs/BlogGrid";
import BlogNewsletter from "../../components/blogs/BlogNewsletter";

export const metadata = {
  title: "Blogs & Insights | Fimco Real Estate",
  description: "Read our latest insights, market analyses, and news on Dubai real estate.",
};

export default function BlogsPage() {
  return (
    <>
      <BlogHero />
      <BlogFeatured />
      <BlogGrid />
      <BlogNewsletter />
    </>
  );
}
