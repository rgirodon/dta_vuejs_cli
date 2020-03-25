<template>
    <div>
        <h2>Shopping List</h2>
        <input v-model="itemToAdd" placeholder="Add item" v-on:keyup.enter="addItem"><span><button v-on:click="addItem">Add item</button></span>
        <ul>
            <li v-for="item in items" v-bind:key="item.id">{{ item.label }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data: function() { 
        return {
            itemToAdd : ''
        };
    },
    props: [
        'type'
    ],
    computed: {
        items: function() {

            let result;

            if (this.type == 'epicerie') {
            
                result = this.$store.state.epicerieItems;
            }
            else if (this.type == 'bricolage') {

                result = this.$store.state.bricolageItems;
            }

            return result;
        },
        maxItemId: function() {

            return this.items.length;
        }
    },
    methods: {
        addItem: function() {
            
            this.$store.commit('addItem', { itemToAdd: this.itemToAdd, type: this.type, id: this.maxItemId });

            this.itemToAdd = '';
        }
    }
}
</script>

<style lang="scss" scoped>

</style>