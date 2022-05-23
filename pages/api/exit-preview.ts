// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const url = slug ? slug : "/";
  res.clearPreviewData();

  console.log(url);

  res.redirect(slug as string);
}
