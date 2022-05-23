// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { slug = "" } = req.query as { slug: string };
  res.clearPreviewData();

  res.writeHead(307, { Location: slug });
  res.end("Preview mode disabled");
}
