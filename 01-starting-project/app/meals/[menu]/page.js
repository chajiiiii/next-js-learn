export default async function Menu({ params }) {
  const currentParams = await params;

  return (
    <div>
      <h1>{currentParams.menu}</h1>
    </div>
  );
}
