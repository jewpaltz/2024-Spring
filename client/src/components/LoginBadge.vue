<script setup lang="ts">
import { getUsers, type User } from '@/model/users';
import { refSession, useLogin } from '@/viewModel/session';

    const session = refSession();

    const users = getUsers().slice(0, 5);

    const { login, logout } = useLogin();

    function doLogin(user: User) {
        login(user);
    }

    function doLogout() {
        logout();
    }

</script>

<template>
    <div class="badge" v-if="session.user">
        <img :src="session.user.image" alt="Avatar" />
        <div>
            {{ session.user.firstName }} {{ session.user.lastName }} <br />
            {{ session.user.email }}
        </div>
        <div>(
            <a class="is-danger" @click.prevent="doLogout">
                Not You?
            </a>)
        </div>
        
    </div>
    <div class="buttons" v-else>
        <a class="button is-primary">
            <strong>Sign up</strong>
        </a>

        <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link">
          Login
        </a>

        <div class="navbar-dropdown">
          <a v-for="user in users" class="navbar-item" @click="doLogin(user)">
            {{ user.firstName }} {{ user.lastName }}
          </a>
        </div>
      </div>

    </div>
</template>

<style scoped>
    .badge {
        display: flex;
        align-items: center;
        line-height: 1em;
    }
    .badge img {
        border-radius: 50%;
        margin-right: 0.5em;
    }
</style>