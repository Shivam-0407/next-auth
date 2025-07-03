"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcryptjs from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/users";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/mail";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  const { email, password, name } = validatedFields.data;

  const hashedPassword = await bcryptjs.hash(password, 10);

  const isUserAlreadyPresent = await getUserByEmail(email);

  if (isUserAlreadyPresent) {
    return { error: "User Already Present!!" };
  }

  await db.user.create({
    data: {
      email,
      password: hashedPassword,
      name,
    },
  });

  // Send verification token email

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);
  return { success: "Confirmation email sent" };
};
