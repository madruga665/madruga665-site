import SerealizedIcon from "../types/serealized-icon";

class HomePage {
  presentation: string;
  image: string;
  curriculo: string;
  socialIcons: SerealizedIcon[];

  constructor(presentation: string, image: string, curriculo: string, socialIcons: SerealizedIcon[]) {
    this.presentation = presentation;
    this.image = image;
    this.curriculo = curriculo;
    this.socialIcons = socialIcons;
  }
}

export default HomePage;