// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.DATOCMS_PREVIEW_SECRETT) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData({});

  res.writeHead(307, { Location: "/" });
  res.end("Preview mode enabled");
}
