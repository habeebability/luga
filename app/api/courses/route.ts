import db from "@/db/drizzle";
import { courses } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { NextResponse } from "next/server";

// get courses
export const GET = async () => {
  const isAdmin = getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", {
      status: 403,
    });
    // redirect("/");
  }
  const data = await db.query.courses.findMany();

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
    .insert(courses)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
};
