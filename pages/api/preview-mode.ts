// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = process.env.DATOCMS_PREVIEW_SECRET;
  const { slug } = req.query as { slug: string };
  const url = slug ? slug : "/";

  if (secret && req.query.secret !== process.env.DATOCMS_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData(
    {},
    {
      maxAge: 20, // The preview mode cookies expire in 20 seconds
    }
  );

  res.redirect(url);
}
