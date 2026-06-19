import HomeClient from "@/components/HomeClient";

export default async function Home(props: {
  searchParams: Promise<{ niche?: string }>;
}) {
  const resolvedSearchParams = await props.searchParams;
  const initialNiche = resolvedSearchParams.niche || "construction";
  return <HomeClient initialNiche={initialNiche} />;
}
