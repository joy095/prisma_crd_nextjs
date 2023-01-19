import { prisma } from "../../../lib/prisma";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const crudId = req.query.id;

  if (req.method === "DELETE") {
    const crud = await prisma.crud.delete({
      where: { id: String(crudId) },
    });
    res.json(crud);
  } else {
    console.log("Note could not be created");
  }
}
