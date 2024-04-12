import db from "@/db/drizzle";
import { lessons } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { NextResponse } from "next/server";

// get lessons
export const GET = async () => {
  const isAdmin = getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", {
      status: 403,
    });
    // redirect("/");
  }
  const data = await db.query.lessons.findMany();

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
    .insert(lessons)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
};
