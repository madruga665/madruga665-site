import { NextResponse } from "next/server";

import { HomeService } from "./service/home-service";
import { HomeController } from "./controller/home-controller";
import { HomeRepository } from "./repository/home-repository";

export async function GET() {
  const homeRepository = new HomeRepository();
  const homeService = new HomeService(homeRepository);
  const homeController = new HomeController(homeService);

  try {
    const data = await homeController.getHomePageData();

    return NextResponse.json(data);
  } catch (error) {
    NextResponse.json({ error: "Erro ao requisitar dados da home page" });
  }
}
