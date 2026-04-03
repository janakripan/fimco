import BlogHero from "../../components/blogs/BlogHero";
import BlogFeatured from "../../components/blogs/BlogFeatured";
import BlogGrid from "../../components/blogs/BlogGrid";
import BlogNewsletter from "../../components/blogs/BlogNewsletter";

export const metadata = {
  title: "Dubai Real Estate Insights | Market Trends & Expert Analysis",
  description: "Read Fimco Real Estate's latest insights, architectural analyses, and market trends in Dubai's high-end property sector.",
  alternates: {
    canonical: "/blogs",
  },
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
