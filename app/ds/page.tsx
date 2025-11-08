"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import AppsIcon from "@mui/icons-material/Apps";
import Navbar from "@/components/elements/Navbar";
import Footer from "@/components/elements/Footer";

export default function DesignSystemPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center gap-12 px-20 py-20 pt-37">
        {/* Buttons */}
        <div>
          <Button>
            <AppsIcon />
            Button
            <AppsIcon />
          </Button>
        </div>

        {/* Dropdown */}
        <div className="flex flex-wrap gap-2 justify-center">
          <Badge>Chips</Badge>
        </div>

        {/* Badge */}
        <div className="flex flex-wrap gap-2 justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger>Choice 1</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Choice 2</DropdownMenuItem>
              <DropdownMenuItem>Choice 3</DropdownMenuItem>
              <DropdownMenuItem>Choice 4</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger variant="outline">
              Choice 1
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem variant="outline">Choice 2</DropdownMenuItem>
              <DropdownMenuItem variant="outline">Choice 3</DropdownMenuItem>
              <DropdownMenuItem variant="outline">Choice 4</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Radio Buttons & Checkboxes */}
        <div className="flex gap-8">
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center gap-3">
              <RadioGroupItem value="default" id="r1" />
              <Label htmlFor="r1" className="cursor-pointer">
                Default
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="comfortable" id="r2" />
              <Label htmlFor="r2" className="cursor-pointer">
                Comfortable
              </Label>
            </div>
            <div className="flex items-center gap-3">
              <RadioGroupItem value="compact" id="r3" />
              <Label htmlFor="r3" className="cursor-pointer">
                Compact
              </Label>
            </div>
          </RadioGroup>
          <div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Checkbox id="default" />
                <Label htmlFor="default" className="cursor-pointer">
                  Default
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="comfortable" />
                <Label htmlFor="comfortable" className="cursor-pointer">
                  Comfortable
                </Label>
              </div>
              <div className="flex items-center gap-3">
                <Checkbox id="compact" />
                <Label htmlFor="compact" className="cursor-pointer">
                  Compact
                </Label>
              </div>
            </div>
          </div>
        </div>

        {/* Accordion */}
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue="item-1"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Product Information</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Shipping Details</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Return Policy</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Card */}
        <Card className="w-full max-w-lg">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your email below to login to your account
            </CardDescription>
            <CardAction>Sign Up</CardAction>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input id="password" type="password" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full">
              Login
            </Button>
            <Button className="w-full">Login with Google</Button>
          </CardFooter>
        </Card>

        {/* Inputs */}
        <div className="w-full space-y-2">
          <Input variant="search" type="email" placeholder="Email" />
          <Input variant="search" type="email" disabled placeholder="Email" />
          <Input
            variant="search"
            type="email"
            status="error"
            placeholder="Email"
          />
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" disabled />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </main>
      <Footer />
    </>
  );
}
