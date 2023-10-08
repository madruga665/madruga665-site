import SerealizedIcon from "../types/serealized-icon";

type HomePageDataDtoProps = {
  presentation: string;
  image: string;
  socialIcons: SerealizedIcon[];
  curriculo: string;
};

class HomePageDataDto {
  presentation: string;
  image: string;
  socialIcons: SerealizedIcon[];
  curriculo: string;

  constructor({ presentation, image, socialIcons, curriculo }: HomePageDataDtoProps) {
    this.presentation = presentation;
    this.image = image;
    this.socialIcons = socialIcons;
    this.curriculo = curriculo;
  }
}

export default HomePageDataDto;
