import { HomePageData } from '../entities/home-page-data';
import { HomeRepository } from '../repositories/home-repository';

export class GetHomePageDataUsecase {
  private homeRepository: HomeRepository;

  constructor(homeRepository: HomeRepository) {
    this.homeRepository = homeRepository;
  }

  async execute(): Promise<HomePageData> {
    const homePageData = await this.homeRepository.getHomePageData();

    return homePageData;
  }
}
