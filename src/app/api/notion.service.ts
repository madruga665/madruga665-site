import { ExperiencesPageData } from "@/interfaces/experiencesPage";

function getExperiencePageData(experiencesPageData: ExperiencesPageData) {
  const response = experiencesPageData.results.map((result: any) => {
    return {
      companyImg: result.properties.company_img.files[0]?.file.url,
      role: result.properties.role.title[0]?.plain_text,
      companyName: result.properties.company_name.rich_text[0]?.plain_text,
      period: result.properties.period.rich_text[0]?.plain_text,
      description: result.properties.description.rich_text[0]?.plain_text,
      year: result.properties.year.number,
    };
  });

  const filterUndefinedObjects = response.filter((item: any) => {
    const checkObjectisUndefined = Object.values(item).every(
      (value) => value === undefined || value === null
    );
    return !checkObjectisUndefined;
  });

  return filterUndefinedObjects;
}

const NotionService = {
  getExperiencePageData,
};

export default NotionService;
