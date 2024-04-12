import { auth } from "@clerk/nextjs";

const adminIds = [`${process.env.ADMIN_ID}`];

export const getIsAdmin = () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;
};
