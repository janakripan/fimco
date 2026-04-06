import { notFound } from "next/navigation";
import { getPropertyBySlug } from "@/constants/propertyData";
import PropertyDetailClient from "../../../components/propertyDetailPage/PropertyDetailClient";


export async function generateMetadata({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) return { title: "Property Not Found | Fimco Real Estate" };
  return {
    title: `${property.title} | Fimco Real Estate`,
    description: property.shortDesc,
    openGraph: {
      title: property.title,
      description: property.shortDesc,
      images: [{ url: property.images?.[0] || "" }],
    },
  };
}

export default async function PropertyDetailPage({ params }) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);
  if (!property) notFound();

  return <PropertyDetailClient property={property} />;
}
