"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

import { Calendar } from "./ui/calendar";
import CalenderIconTwo from "@/icons/calender";
import { toast } from "@/hooks/use-toast";

const reservationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  reservationDate: z.date({
    required_error: "Reservation date must be",
  }),
  totalPeople: z.string().min(1, "At least one person is required"),
  message: z.string().optional(),
});

const BookingForm = () => {
  const form = useForm<z.infer<typeof reservationSchema>>({
    resolver: zodResolver(reservationSchema),
    defaultValues: {
      name: "",
      email: "",
      reservationDate: undefined,
      totalPeople: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof reservationSchema>) => {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col sm:flex-row gap-4 mb-4 sm:gap-[30px]">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      className="h-[46px] border border-white rounded-none text-[14px] leading-[22px] text-white placeholder:text-white"
                      placeholder="Your Name"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      className="h-[46px] border border-white rounded-none text-[14px] leading-[22px] text-white placeholder:text-white"
                      placeholder="Your Email"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col sm:flex-row mb-4 gap-4 sm:gap-[30px]">
            <FormField
              control={form.control}
              name="reservationDate"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 h-[46px] rounded-none text-white text-left font-normal justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span className="text-white">
                                Reservation Date
                              </span>
                            )}
                            <CalenderIconTwo />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="totalPeople"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormControl>
                    <Input
                      className="h-[46px] border border-white rounded-none text-[14px] leading-[22px] text-white placeholder:text-white"
                      placeholder="Total People"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="mb-8">
                <FormControl>
                  <Textarea
                    placeholder="Message"
                    className="resize-none h-[140px] rounded-none placeholder:text-white text-white"
                    {...field}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            className="h-[48px]  sm:h-[56px] sm:w-[142px] w-[128px] text-[18px]"
            variant="mustardYellow"
            type="submit"
          >
            Book Now
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
