// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";

export default function handler(_req: unknown, res: NextApiResponse) {
  res.setPreviewData(
    {},
    {
      maxAge: 60 * 2, // The preview mode cookies expire in 2 minutes
    }
  );

  res.redirect("/");
}
