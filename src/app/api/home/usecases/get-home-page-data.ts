import { Icon } from "@/interfaces/homePage";
import HomeRepository from "../repositories/home-repository";
import SerealizedIcon from "../types/serealized-icon";
import NotionFetchHomePageData from "../types/notion-fetch-home-page-data";
import UseCase from "../../core/useCase";
import HomePageDataDto from "../dtos/home-page-data";

class GetHomePageDataUsecase implements UseCase<void, HomePageDataDto> {
  homeRepository: HomeRepository;

  constructor(homeRepository: HomeRepository) {
    this.homeRepository = homeRepository;
  }

  private serealizeSocialIcons(notionFetchHomePageData: NotionFetchHomePageData): SerealizedIcon[] {
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

  async execute() {
    const notionFetchHomePageData = await this.homeRepository.getHomePageData();
    const icons = this.serealizeSocialIcons(notionFetchHomePageData);
    const homePage = new HomePageDataDto({
      presentation: notionFetchHomePageData.properties.description.rich_text[0].text.content,
      image: notionFetchHomePageData.properties.image.files[0].name,
      curriculo: notionFetchHomePageData.properties.curriculo.files[0].external.url,
      socialIcons: icons,
    });

    return homePage;
  }
}

export default GetHomePageDataUsecase;
