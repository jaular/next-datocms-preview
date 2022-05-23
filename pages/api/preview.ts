// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setPreviewData(
    {},
    {
      maxAge: 60 * 2, // The preview mode cookies expire in 2 minutes
    }
  );

  res.redirect("/");
  res.end("Preview mode enabled");
}
