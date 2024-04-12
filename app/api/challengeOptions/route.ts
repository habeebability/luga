import db from "@/db/drizzle";
import { challengeOptions } from "@/db/schema";
import { getIsAdmin } from "@/lib/admin";
import { NextResponse } from "next/server";

// get challengeOptions
export const GET = async () => {
  const isAdmin = getIsAdmin();

  if (!isAdmin) {
    return new NextResponse("Unauthorized", {
      status: 403,
    });
    // redirect("/");
  }
  const data = await db.query.challengeOptions.findMany();

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
    .insert(challengeOptions)
    .values({
      ...body,
    })
    .returning();

  return NextResponse.json(data[0]);
};
