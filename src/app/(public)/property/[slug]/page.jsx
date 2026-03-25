export default async function PropertyDetailPage({ params }) {
  const { slug } = await params;

  return (
    <div className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">Property: {slug}</h1>
    </div>
  );
}

