import { CalendarIcon } from "lucide-react";
import { HoverCardContent } from "@/components/ui/hover-card";
import Image from "next/image";

export function HoverCardDemo({
  image,
  title,
  subtitle,
}: {
  image: string;
  title: string;
  subtitle: string;
}) {
  return (
    <HoverCardContent className="w-80">
      <div className="flex justify-between space-x-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Image
              src={image}
              alt=""
              width={20}
              height={20}
              className="rounded-full"
            />
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold">{title}</span>
              <span className="text-[10px] text-gray-400">{subtitle}</span>
            </div>
          </div>

          <div className="flex items-center pt-2">
            <CalendarIcon className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-muted-foreground text-xs">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  );
}
