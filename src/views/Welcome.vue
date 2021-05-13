<template>
    <div>
        <h2>This is the landing page!</h2>
        <div>
            <router-link to="/login">Login</router-link> or
            <router-link to="/register">Register</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Welcome',
};
</script>

<style lang="scss" scoped></style>