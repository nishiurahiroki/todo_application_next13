import { NextApiRequest, NextApiResponse } from 'next';
import * as z from 'zod';

import { db } from '../../../lib/db';

const todoCreateSchema = z.object({
  title: z.string().min(1),
  description: z.string().optional(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const body = todoCreateSchema.parse(JSON.parse(req.body));
      const todo = await db.todo.create({
        data: {
          title: body.title,
          description: body.description,
        },
      });
      return res.status(200).json(todo);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
