"use server";

import { getCourseById } from "@/db/queries";
import { auth, currentUser } from "@clerk/nextjs";

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || !user) {
    throw new Error("Unauthorized");
  }

  const course = await getCourseById(courseId);
  if (!course) {
    throw new Error("Course not found");
  }
};
