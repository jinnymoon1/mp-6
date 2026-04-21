import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
    trustHost: true,
    providers: [
        GitHub({
            authorization: {
                params: {
                    scope: "read:user user:email"
                }
            }
        })
    ]
});
