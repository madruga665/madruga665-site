import { Experience } from "@/interfaces/experiencesPage";

export async function getExperiencePageData(): Promise<Experience[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/experiences`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const data: Experience[] = await response.json();

  return data;
}
