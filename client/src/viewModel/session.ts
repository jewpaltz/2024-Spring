/* B"H
*/

import type { User } from "@/model/users";
import { reactive } from "vue";

const session  = reactive({
    user: null as User | null,
});

export function login(user: User) {
    session.user = user;
}

export function logout() {
    session.user = null;
}

export const refSession = () => session;

