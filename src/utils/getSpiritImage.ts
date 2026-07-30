import type { Spirit } from "../models/Spirit";


export function getSpiritImage(
  spirit: Spirit,
  variant: string
) {

  const image =
    spirit.images[
      variant.toLowerCase() as keyof typeof spirit.images
    ] ?? spirit.images.normal;


  return import.meta.env.BASE_URL +
    image.replace(/^\//, "");

}