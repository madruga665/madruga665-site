import { ExperiencesPageData } from "@/interfaces/experiencesPage";
import { HomePageData, Icon, IconSerealized } from "@/interfaces/homePage";

function serealizeSocialIcons(homePageData: HomePageData): Array<IconSerealized> {
  const icons = homePageData.properties.social_icons.files;
  const socialLinks = {
    linkedin: homePageData.properties.linkedin.url,
    github: homePageData.properties.github.url,
    instagram: homePageData.properties.instagram.url,
    facebook: homePageData.properties.facebook.url,
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
      iconImg: icon.file.url,
    };

    return socialIcon;
  });

  return socialIcons;
}

function getHomePageData(homePageData: HomePageData) {
  const icons = serealizeSocialIcons(homePageData);
  const data = {
    presentation: homePageData.properties.description.rich_text[0].text.content,
    image: homePageData.properties.image.files[0].name,
    socialIcons: icons,
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
    const checkObjectisUndefined = Object.values(item).every(
      (value) => value === undefined || value === null
    );
    return !checkObjectisUndefined;
  });

  return filterUndefinedObjects;
}

const NotionService = {
  getHomePageData,
  getExperiencePageData,
};

export default NotionService;
