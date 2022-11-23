import { NextApiRequest, NextApiResponse } from 'next';
import * as z from 'zod';

import { db } from '../../../lib/db';

const todoUpdateSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  description: z.string().optional(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const body = todoUpdateSchema.parse(JSON.parse(req.body));
      const todo = await db.todo.update({
        where: {
          id: body.id,
        },
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
