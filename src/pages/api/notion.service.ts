import { HomePageData, HomePageProps } from "../../interfaces/homePage";

function getHomePageData(homePageData: HomePageData): HomePageProps {
  const data = {
    presentation: homePageData.properties.description.rich_text[0].text.content,
    image: homePageData.properties.image.files[0].name,
  };

  return data;
}

const NotionService = {
  getHomePageData,
};

export default NotionService;
