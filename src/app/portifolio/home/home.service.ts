import { HomePageData } from "@/interfaces/homePage";

export async function getHomePageData(): Promise<HomePageData> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/modules/home`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data: HomePageData = await response.json();

  return data;
}
