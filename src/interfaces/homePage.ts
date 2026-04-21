export interface Icon {
  name: string;
  external: {
    url: string;
  };
  link: string;
}

export interface IconSerealized {
  name: string;
  link: string;
  iconImg: string;
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram: string;
  facebook: string;
}

export interface HomePageData {
  presentation: string;
  image: string;
  socialIcons: Array<IconSerealized>;
  curriculo: string;
}
