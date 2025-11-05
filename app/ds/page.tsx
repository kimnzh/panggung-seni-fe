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
import AppsIcon from "@mui/icons-material/Apps";

export default function DesignSystemPage() {
  return (
    <main className="flex flex-col items-center pt-12 gap-12">
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
        <DropdownMenu>
          <DropdownMenuTrigger>Choice 1</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Choice 2</DropdownMenuItem>
            <DropdownMenuItem>Choice 3</DropdownMenuItem>
            <DropdownMenuItem>Choice 4</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger variant="outline">Choice 1</DropdownMenuTrigger>
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
            <Label htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="comfortable" id="r2" />
            <Label htmlFor="r2">Comfortable</Label>
          </div>
          <div className="flex items-center gap-3">
            <RadioGroupItem value="compact" id="r3" />
            <Label htmlFor="r3">Compact</Label>
          </div>
        </RadioGroup>
        <div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <Checkbox id="default" />
              <Label htmlFor="default">Default</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="comfortable" />
              <Label htmlFor="comfortable">Comfortable</Label>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox id="compact" />
              <Label htmlFor="compact">Compact</Label>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
