import Image from "next/image";

export default function BrandLogo({
  compactOnMobile = false,
}: {
  compactOnMobile?: boolean;
}) {
  return (
    <picture>
      {compactOnMobile && (
        <source
          media="(max-width: 380px)"
          srcSet="/icon.svg"
          width={80}
          height={80}
        />
      )}
      <Image
        src="/brand/prock-logo.svg"
        alt="prock.dev"
        width={324}
        height={80}
        loading="eager"
        unoptimized
      />
    </picture>
  );
}
