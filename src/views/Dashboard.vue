<template>
    <div>
        <button @click="logout">Logout</button>
        <h2>Dashboard</h2>
        <p>This page is only visible to users that are currently logged in</p>
    </div>
</template>

<script>
import firebase from 'firebase';
export default {
    name: 'Dashboard',
    methods: {
        logout() {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    this.$router.push('/');
                })
                .catch(error => {
                    alert(error.message);
                    this.$router.push('/');
                });
        },
    },
};
</script>

<style lang="scss" scoped></style>