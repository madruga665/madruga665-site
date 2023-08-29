import Usecase from "@/app/api/core/useCase";
import { Icon } from "@/interfaces/homePage";
import HomeRepository from "../repositories/home-repository";
import SerealizedIcon from "../types/serealized-icon";
import NotionFetchHomePageData from "../types/notion-fetch-home-page-data";
import HomePage from "../entities/home-page";

class GetHomePageDataUsecase implements Usecase {
  homeRepository: HomeRepository;

  constructor(homeRepository: HomeRepository) {
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

  async execute(): Promise<HomePage> {
    const notionFetchHomePageData = await this.homeRepository.getHomePageData();
    const icons = this.serealizeSocialIcons(notionFetchHomePageData);
    const homePage = new HomePage(
      notionFetchHomePageData.properties.description.rich_text[0].text.content,
      notionFetchHomePageData.properties.image.files[0].name,
      notionFetchHomePageData.properties.curriculo.files[0].external.url,
      icons,
    )

    return homePage;
  }
  
}

export default GetHomePageDataUsecase;