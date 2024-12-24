import { LazyLoadImage } from "react-lazy-load-image-component";

interface LazyImgProps {
    src: string;
    alt: string;
    className?: string;
    width?: number;
    height?: number;
}

function LazyImg({ src, alt, width, height, className }: LazyImgProps) {
    return (
        <LazyLoadImage
            className={className}
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    );
}

export default LazyImg;
