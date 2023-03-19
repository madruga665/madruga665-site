import { HomePageData, Icon, IconSerealized, NotionFetchHomePageData } from "@/interfaces/homePage";
import { HomeRepositoryInterface } from "../repository/home-repository-interface";
import { HomeServiceInterface } from "./home-service-interface";

export class HomeService implements HomeServiceInterface {
  homeRepository: HomeRepositoryInterface;

  constructor(homeRepository: HomeRepositoryInterface) {
    this.homeRepository = homeRepository;
  }

  private serealizeSocialIcons(
    notionFetchHomePageData: NotionFetchHomePageData
  ): Array<IconSerealized> {
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

  async getHomePageData() {
    const notionFetchHomePageData = await this.homeRepository.getHomePageData();
    const icons = this.serealizeSocialIcons(notionFetchHomePageData);
    const data = {
      presentation: notionFetchHomePageData.properties.description.rich_text[0].text.content,
      image: notionFetchHomePageData.properties.image.files[0].name,
      socialIcons: icons,
    };

    return data;
  }
}