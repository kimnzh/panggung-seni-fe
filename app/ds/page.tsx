"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    </main>
  );
}
