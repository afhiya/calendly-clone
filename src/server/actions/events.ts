"use server";

import "use-server";
import { eventFormSchema } from "@/schema/events";
import { z } from "zod";
import { db } from "@/drizzle/db";
import { auth } from "@clerk/nextjs/server";
import { EventTable } from "@/drizzle/schema";
import { redirect } from "next/navigation";

export async function createEvent(
  unsafeData: z.infer<typeof eventFormSchema>
): Promise<{ error: boolean | undefined }> {
  const { userId } = await auth();
  const { success, data } = eventFormSchema.safeParse(unsafeData);

  if (!success || userId == null) {
    return { error: true };
  }

  await db.insert(EventTable).values({ ...data, clerkUserId: userId });

  redirect("/events");
}
