export default async function BlogPostPage({ params }) {
  const currentParams = await params;

  return (
    <main>
      <h1>Blog Post</h1>
      <p>{currentParams.slug}</p>
    </main>
  );
}
