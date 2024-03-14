/* B"H
*/

import type { User } from "@/model/users";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const session  = reactive({
    user: null as User | null,
});

export function useLogin() {
    const router = useRouter();
    return {
        login(user: User) {
            session.user = user;
            router.push("/products");
        },
        logout() {
            session.user = null;
            router.push("/login");
        }
    };
}

export const refSession = () => session;

