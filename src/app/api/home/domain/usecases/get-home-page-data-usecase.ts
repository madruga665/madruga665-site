import Usecase from "@/app/api/core/useCase";
import { Icon } from "@/interfaces/homePage";
import HomeRepositoryInterface from "../repositories/home-repository-interface";
import SerealizedIcon from "../../data/types/serealized-icon";
import HomePageData from "../../data/types/home-page-data";
import NotionFetchHomePageData from "../../data/types/notion-fetch-home-page-data";

class GetHomePageDataUsecase implements Usecase {
  homeRepository: HomeRepositoryInterface;

  constructor(homeRepository: HomeRepositoryInterface) {
    this.homeRepository = homeRepository;
  }

  private serealizeSocialIcons(notionFetchHomePageData: NotionFetchHomePageData ): SerealizedIcon[] {
    const icons = notionFetchHomePageData.properties.social_icons.files;
    const socialLinks = {
      linkedin: notionFetchHomePageData.properties.linkedin.url,
      github: notionFetchHomePageData.properties.github.url,
      instagram: notionFetchHomePageData.properties.instagram.url,
      facebook: notionFetchHomePageData.properties.facebook.url,
    };
    const socialIcons = icons.map((icon: Icon) => {
      if (icon.name.includes("linkedin")) {
        icon.link = socialLinks.linkedin;
      }
      if (icon.name.includes("github")) {
        icon.link = socialLinks.github;
      }
      if (icon.name.includes("instagram")) {
        icon.link = socialLinks.instagram;
      }
      if (icon.name.includes("facebook")) {
        icon.link = socialLinks.facebook;
      }

      const socialIcon = {
        name: icon.name,
        link: icon.link,
        iconImg: icon.external.url,
      };

      return socialIcon;
    });

    return socialIcons;
  }

  async execute(): Promise<HomePageData> {
    const notionFetchHomePageData = await this.homeRepository.getHomePageData();
    const icons = this.serealizeSocialIcons(notionFetchHomePageData);
    const data = {
      presentation: notionFetchHomePageData.properties.description.rich_text[0].text.content,
      image: notionFetchHomePageData.properties.image.files[0].name,
      curriculo: notionFetchHomePageData.properties.curriculo.files[0].external.url,
      socialIcons: icons,
    };

    return data;
  }
  
}

export default GetHomePageDataUsecase;