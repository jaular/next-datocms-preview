// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";

export default function handler(_req: unknown, res: NextApiResponse) {
  res.clearPreviewData();

  res.writeHead(307, { Location: "/" });
  res.end("Preview mode disabled");
}
