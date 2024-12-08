import { DAYS_OF_WEEK_IN_ORDER } from "@/data/constants";
import { timeToInt } from "@/lib/utils";
import { z } from "zod";

export const scheduleFormSchema = z.object({
  timezone: z.string().min(1, "Required"),
  availabilities: z
    .array(
      z.object({
        dayOfWeek: z.enum(DAYS_OF_WEEK_IN_ORDER),
        startTime: z
          .string()
          .regex(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
        endTime: z.string().regex(/^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/),
      })
    )
    .superRefine((availabilities, ctx) => {
      availabilities.forEach((avaibility, index) => {
        const overlaps = availabilities.some(
          (other, otherIndex) =>
            otherIndex !== index &&
            other.dayOfWeek === avaibility.dayOfWeek &&
            timeToInt(other.startTime) < timeToInt(avaibility.endTime) &&
            timeToInt(other.endTime) > timeToInt(avaibility.startTime)
        );

        if(overlaps) {
          ctx.addIssue({
            code: "custom",
            message: "Availability overlaps with another",
            path: [index,]
          })
        }

        if(timeToInt(avaibility.startTime) >= timeToInt(avaibility.endTime)) {
          ctx.addIssue({
            code: "custom",
            message: "End time must be after start time",
            path: [index]
          })
        }
      });
    }),
});
