import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, Clock, MapPin, Phone, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your full address"),
  date: z.date({
    required_error: "Please select an appointment date",
  }),
  timeSlot: z.string({
    required_error: "Please select a time slot",
  }),
  scrapType: z.string({
    required_error: "Please select scrap type",
  }),
  estimatedWeight: z.string().optional(),
  specialInstructions: z.string().optional(),
});

type AppointmentFormData = z.infer<typeof appointmentSchema>;

interface AppointmentBookingProps {
  children: React.ReactNode;
}

const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM", 
  "11:00 AM - 12:00 PM",
  "1:00 PM - 2:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
  "5:00 PM - 6:00 PM",
];

const scrapTypes = [
  { value: "metal", label: "Metal Scraps (Iron, Aluminum, Copper)" },
  { value: "electronics", label: "Electronic Waste (Computers, Phones)" },
  { value: "paper", label: "Paper & Cardboard" },
  { value: "plastic", label: "Plastic Materials" },
  { value: "automotive", label: "Automotive Parts" },
  { value: "mixed", label: "Mixed Materials" },
  { value: "other", label: "Other (Please specify in instructions)" },
];

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  const { toast } = useToast();

  const form = useForm<AppointmentFormData>({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      name: "",
      phone: "",
      address: "",
      estimatedWeight: "",
      specialInstructions: "",
    },
  });

  const onSubmit = (data: AppointmentFormData) => {
    console.log("Appointment data:", data);
    
    toast({
      title: "Appointment Scheduled!",
      description: `Your pickup is scheduled for ${format(data.date, "PPP")} at ${data.timeSlot}. We'll call you to confirm.`,
      duration: 5000,
    });

    form.reset();
    setOpen(false);
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary">
            Schedule Scrap Collection
          </DialogTitle>
          <DialogDescription>
            Book a free pickup appointment. Our team will arrive at your location with proper equipment and certified weighing scales.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <User className="h-4 w-4 text-primary" />
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="+977-9841234567" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Pickup Address
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="House no., Street, Area, City" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-primary" />
                      Pickup Date
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Select date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < tomorrow || date < new Date("1900-01-01")
                          }
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="timeSlot"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      Time Slot
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {timeSlots.map((slot) => (
                          <SelectItem key={slot} value={slot}>
                            {slot}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="scrapType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Scrap Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select scrap type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {scrapTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="estimatedWeight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Estimated Weight (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., 50 kg" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="specialInstructions"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Special Instructions (Optional)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Any specific details about your scrap materials, access instructions, or special requirements..."
                      rows={3}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="bg-gradient-secondary p-4 rounded-lg">
              <h4 className="font-semibold text-primary mb-2">What happens next?</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>• We'll call you within 1 hour to confirm the appointment</p>
                <p>• Our team arrives with certified weighing scales</p>
                <p>• Free evaluation and transparent pricing</p>
                <p>• Instant payment after weighing</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button type="submit" variant="hero" className="flex-1">
                Schedule Pickup
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};