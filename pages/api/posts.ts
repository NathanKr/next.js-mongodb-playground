// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { getPosts } from "../../src/dal/get-posts";

type Data = {
  _id : string;
  name: string;
  likes : number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const posts : Data[] = await getPosts();
  res.status(200).json(posts);
}
