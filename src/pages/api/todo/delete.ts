import { NextApiRequest, NextApiResponse } from 'next';
import * as z from 'zod';

import { db } from '../../../lib/db';

const todoDeleteSchema = z.object({
  id: z
    .string()
    .refine((v) => {
      return !isNaN(Number(v));
    }, 'error message')
    .transform((v) => {
      return Number(v);
    }),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'DELETE') {
    try {
      const body = todoDeleteSchema.parse(JSON.parse(req.body));

      const todo = await db.todo.delete({
        where: {
          id: body.id,
        },
      });
      return res.status(200).json(todo);
    } catch (error) {
      return res.status(500).json({ error });
    }
  }
}
