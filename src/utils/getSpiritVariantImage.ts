import type { Spirit } from "../models/Spirit";


export function getSpiritVariantImage(
  spirit: Spirit,
  variant?: string
) {

  const image =
    !variant
      ? spirit.images.normal
      : spirit.images[
          variant.toLowerCase() as keyof typeof spirit.images
        ] ?? spirit.images.normal;


  return import.meta.env.BASE_URL +
    image.replace(/^\//, "");

}