// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;
  const url = slug ? slug : "/";
  res.clearPreviewData();

  console.log(url);

  // res.writeHead(307, { Location: url });
  res.redirect(url as string);
  res.end("Preview mode disabled");
}
