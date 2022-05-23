// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const secret = process.env.DATOCMS_PREVIEW_SECRET;
  const { slug } = req.query;
  const url = slug ? slug : "/";

  if (secret && req.query.secret !== process.env.DATOCMS_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid token" });
  }

  res.setPreviewData(
    {},
    {
      maxAge: 60 * 2, // The preview mode cookies expire in 2 minutes
    }
  );

  // res.writeHead(307, { Location: url });
  res.redirect(url as string);
  // res.end("Preview mode enabled");
}
