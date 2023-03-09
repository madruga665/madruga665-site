import { ExperiencesPageData } from "../../interfaces/experiencesPage";
import { HomePageData, HomePageProps } from "../../interfaces/homePage";

function getHomePageData(homePageData: HomePageData): HomePageProps {
  const data = {
    presentation: homePageData.properties.description.rich_text[0].text.content,
    image: homePageData.properties.image.files[0].name,
  };

  return data;
}

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
    const checkObjectisUndefined = Object.values(item).every((value) => value === undefined || value === null);
    return !checkObjectisUndefined;
  });

  return filterUndefinedObjects;
}

const NotionService = {
  getHomePageData,
  getExperiencePageData,
};

export default NotionService;
