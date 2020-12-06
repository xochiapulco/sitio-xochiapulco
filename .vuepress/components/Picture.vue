<template>
    <div class="custompic">
        <div>
            <img :src="$withBase(image)" :width="w" :height="h" :title="label">
        </div>
        <div class="caption" >{{ label }}</div>       
    </div>
</template>
<script>
export default {
    props: ['image', 'w', 'h', 'label']
}
</script>

<style>
div.custompic {
    text-align: center;
}

div.custompic div.caption {
    font-size:12px;
}
</style>