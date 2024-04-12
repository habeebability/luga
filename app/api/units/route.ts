import db from "@/db/drizzle";
import { units } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { NextResponse } from "next/server";

// get units
export const GET = async () => {
  const isAdmin = getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", {
      status: 403,
    });
    // redirect("/");
  }
  const data = await db.query.units.findMany();

  return NextResponse.json(data);
};

// post courses
export const POST = async (req: Request) => {
  const isAdmin = getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", {
      status: 403,
    });
  }

  const body = await req.json();

  const data = await db
    .insert(units)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
};
