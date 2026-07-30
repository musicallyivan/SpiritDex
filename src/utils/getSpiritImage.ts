import type { Spirit } from "../models/Spirit";


export function getSpiritImage(
  spirit: Spirit,
  variant: string
) {

  const image =
    spirit.images[
      variant.toLowerCase() as keyof typeof spirit.images
    ];


  return image ?? spirit.images.normal;

}