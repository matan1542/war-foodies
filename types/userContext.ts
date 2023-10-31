import { UserContext } from "@auth0/nextjs-auth0/client";
import { User } from "./user";

export interface auth0UserContext extends UserContext {
    user: User
}