import { notFound } from "next/navigation";
import { getBlogBySlug, getRelatedBlogs } from "../../../../constants/blogData";
import BlogDetailClient from "../../../components/blogDetailPage/BlogDetailClient";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const related = getRelatedBlogs(blog.relatedIds || []).slice(0, 3);

  return <BlogDetailClient blog={blog} related={related} />;
}