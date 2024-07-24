"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Loader, MessageCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, { message: "Please Enter You name" }),
  email: z.string().email({ message: "Please Enter your email address" }),
  message: z.string().min(1, { message: "Please Enter Your Message here" }),
});
export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const isLoading = form.formState.isLoading;
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-5 lg:w-[600px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel className="font-medium text-dark text-xs">
                Name
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Name"
                  className="bg-[#FFF7ED] border border-[#FED7AA] rounded-none placeholder:text-inverted-dark"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel className="font-medium text-dark text-xs">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Email"
                  className="bg-[#FFF7ED] border border-[#FED7AA] rounded-none placeholder:text-inverted-dark"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="message"
          render={({ field }) => (
            <FormItem className="space-y-1.5">
              <FormLabel className="font-medium text-dark text-xs">
                Message
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Message"
                  className="bg-[#FFF7ED] border border-[#FED7AA] rounded-none placeholder:text-inverted-dark"
                />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="bg-inverted gap-2.5">
          {isLoading ? (
            <>
              <span>Sending...</span>
              <Loader height={12} width={12} className="animate-spin" />
            </>
          ) : (
            <>
              <span>Send</span>
              <MessageCircle height={12} width={14} />
            </>
          )}
        </Button>
      </form>
    </Form>
  );
}
