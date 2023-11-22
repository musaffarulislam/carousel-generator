import React from "react";
import * as z from "zod";
import { ConfigSchema, DocumentSchema } from "@/lib/validation/document-schema";
import { cn } from "@/lib/utils";
import { Footer } from "../elements/footer";
import { fontIdToClassName } from "@/lib/fonts-map";
import { ContentSlideSchema } from "@/lib/validation/slide-schema";
import { BackgroundLayer } from "@/components/elements/background-layer";
import { PageLayout } from "./page-layout";
import { Title } from "../elements/title";
import { Description } from "@/components/elements/description";
import { ContentImage } from "../elements/content-image";

export function ContentPage({
  index,
  config,
  slide,
  size,
  className,
  handleClick = undefined,
}: {
  index: number;
  config: z.infer<typeof ConfigSchema>;
  slide: z.infer<typeof ContentSlideSchema>;
  size: { width: number; height: number };
  className?: string;
  handleClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
}) {
  return (
    <PageLayout handleClick={handleClick} size={size}>
      <BackgroundLayer background={config.theme.background} className="-z-20" />
      <div className={cn("p-10 flex flex-col h-full w-full", className)}>
        <div className="flex flex-col justify-center  items-stretch grow gap-4">
          <Title config={config} title={slide.title} />
          <Description config={config} description={slide.description} />
          {slide.image && <ContentImage image={slide.image} className="h-40" />}
        </div>
        <Footer number={index + 1} config={config} />
        {/* TODO: better number calculation */}
      </div>
    </PageLayout>
  );
}