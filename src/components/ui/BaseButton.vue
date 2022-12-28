<template>
    <button v-if="!link" :class="mode">
        <slot></slot>
    </button>
    <router-link v-else :to="to" :class="mode">
    <slot></slot>
    </router-link>
</template>

<script>
export default {
    props: {
        link: {
            type: Boolean,
            reqired: false,
            default: false,
        },
        mode: {
            type: String,
            reqired: false,
            default: null,
        },
        to: {
            type: String,
            reqired: false,
            default: '/',
        },
    }
}
</script>
<!-- <style lang="scss">
button {

}
</style> -->