import { NextApiRequest, NextApiResponse } from "next";

function teste(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ data: "o teste funcionou" });
}

export default teste;
