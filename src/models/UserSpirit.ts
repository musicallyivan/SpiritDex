import type { Variant } from "../constants/variants";

export interface UserSpirit {

  spiritId: string;

  owned: boolean;

  level: 1 | 2 | 3 | 4 | 5;

  mastery: number;

  favorite: boolean;

  lost: boolean;

  variant: Variant;

  obtainedAt?: string;

  updatedAt?: string;

  notes?: string;

}