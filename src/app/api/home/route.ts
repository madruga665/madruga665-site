import { NextResponse } from "next/server";

import { HomeService } from "./service/home-service";
import { HomeController } from "./controller/home-controller";
import { HomeRepository } from "./repository/home-repository";

export async function GET() {
  try {
    const homeRepository = new HomeRepository();
    const homeService = new HomeService(homeRepository);
    const homeController = new HomeController(homeService);
    const data = await homeController.getHomePageData();

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    NextResponse.error();
  }
}
