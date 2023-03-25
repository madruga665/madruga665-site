import { HomePageData } from "@/interfaces/homePage";

export async function getHomePageData(): Promise<HomePageData> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/home`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const data: HomePageData = await response.json();

  return data;
}
