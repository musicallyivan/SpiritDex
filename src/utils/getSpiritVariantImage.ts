import type { Spirit } from "../models/Spirit";


export function getSpiritVariantImage(
  spirit: Spirit,
  variant?: string
) {


  if (!variant) {
    return spirit.images.normal;
  }


  const key = variant.toLowerCase() as keyof typeof spirit.images;


  return (
    spirit.images[key]
    ??
    spirit.images.normal
  );

}