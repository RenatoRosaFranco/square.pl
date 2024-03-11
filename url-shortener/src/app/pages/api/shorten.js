import { nanoid } from 'nanoid';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { longUrl } = req.body;
    const { shortId } = nanoid(8);
  }
}