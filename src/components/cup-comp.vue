<template >
    <router-link :to="{ name: 'Product', params: { id: products.id } }">
        <div class="container-fluid">
        <div class="circle">       
        <img :src="product.image" :alt="product_name" class="circle">
        <p>
            {{ product_desc }}
        </p>
        <h5>R {{ product.price }}</h5>
        </div>
        </div>
    </router-link>
</template>d
<script>
export default {
    props: ["property"]
}
</script>
<style >
img {
    height: 200px;
    width: 100%;
    object-fit: cover;
}
</style>