import { ProjectSerealized } from "@/interfaces/projectsPage";

export async function getProjectsPageData(): Promise<ProjectSerealized[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/modules/projects`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });
  const data: ProjectSerealized[] = await response.json();

  return data;
}
