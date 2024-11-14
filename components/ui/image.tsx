import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface ImageComponentProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

const ImageComponent = ({
  src,
  alt,
  className,
  imageClassName,
}: ImageComponentProps) => {
  return (
    <div className={cn("relative", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className={cn("absolute object-cover", imageClassName)}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};

export default ImageComponent;
