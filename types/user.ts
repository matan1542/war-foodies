import { UserProfile } from "@auth0/nextjs-auth0/client";

export interface User extends UserProfile {
  address: string;
  isKosher: boolean;
  phone: string;
}
