<template>
    <div>
        <UButton label="Adicionar" @click="isOpen = true"/>
        <UModal class="" v-model="isOpen" :overlay="false" prevent-close>
            <UCard >
                <template #header>
                    <div class="flex items-center justify-between">
                        <h2>Adicionar Lançamento</h2>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
                    </div>
                </template>
                
                <UForm class="flex flex-col gap-6" :validate="validate" :state="state" @submit="onSubmit" >
                    <UFormGroup label="Descrição" name="descricao">
                        <UInput type="text" v-model="state.descricao" />
                    </UFormGroup>
                    
                    <UFormGroup label="Valor" name="valor" >
                        <UInput type="number" v-model="state.valor" />
                    </UFormGroup>
                    
                    <div class="flex gap-6">
                        <UFormGroup label="Data da Compra" name="dataCompra" >
                            <UInput type="date" v-model="state.datacompra"/>
                        </UFormGroup>
    
                        <UFormGroup label="Categoria" name="categoria" >
                            <USelectMenu class="mt-1 w-40" v-model="state.categoria" :options="categorias" placeholder="Slecione" />
                        </UFormGroup>
                    </div>
                    
                    <UButton class="w-fit" type="submit">
                        Adicionar
                    </UButton>
                </UForm >
            </UCard>
        </UModal>
    </div>
</template>

<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

defineProps({
    categorias:Array
})

const isOpen = ref(false)
const state = reactive({
    descricao:undefined,
    valor:undefined,
    datacompra:undefined,
    categoria:[]
})
const categoriaSelected = ref([])

const validate = (state:any) :FormError[] => {
    return []
}

async function onSubmit (event: FormSubmitEvent<any>) {
    console.log(event.data)
}
</script>

<style>

</style>