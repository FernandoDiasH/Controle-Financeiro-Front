<template>
    <div>
        <UButton label="Adicionar Lançamento Recorrente" @click="isOpen = true"/>
        <UModal class="" v-model="isOpen" :overlay="false" prevent-close>
            <UCard >
                <template #header>
                    <div class="flex items-center justify-between">
                        <h2>Adicionar Lançamento Recorrente</h2>
                        <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
                    </div>
                </template>

                <UForm class="flex flex-col gap-6" :validate="validate" :state="state" @submit="onSubmit" >
                    <UFormGroup label="Descrição" name="descricao">
                        <UInput type="text" v-model="state.descricao" />
                    </UFormGroup>
                    
                    <div class="flex gap-6">
                        <UFormGroup label="Valor" name="valor" >
                            <UInput type="number" v-model="state.valor" />
                        </UFormGroup>

                        <UFormGroup label="Dia do Vencimento" name="dataCompra" >
                            <UInput type="number" v-model="state.vencimento"/>
                        </UFormGroup>
                    </div>

                    <div class="flex justify-between">
                        <UFormGroup label="Tipo de recorrência">
                            <URadioGroup v-model="state.tipoRecorrencia" @change="teste(state.tipoRecorrencia)" :options="methods"/>
                        </UFormGroup>

                        <UFormGroup label="Categoria" name="categoria" >
                            <USelectMenu class="mt-1 w-40" v-model="state.categoria" :options="categorias" placeholder="Selecione" />
                        </UFormGroup>
                    </div>

                    <div class="flex flex-col gap-3">
                        <UFormGroup v-if="ativaTipoRecorrencia" label="Mês que inicia">
                            <UInput type="number" v-model="state.mesInicio" />
                        </UFormGroup>
                        
                        <UFormGroup v-if="ativaTipoRecorrencia" label="Por quantos meses">
                            <UInput type="number" v-model="state.tempo" />
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

const categorias =  ['Casa', 'Gastros Extras']
const isOpen = ref(false)
const state = reactive({
    descricao: undefined,
    valor: undefined,
    tipoRecorrencia: 'anual',
    vencimento: undefined,
    tempo: undefined,
    mesInicio:undefined, 
    categoria: []
})

let ativaTipoRecorrencia = ref(false)

const methods = [
    { value: 'anual', label: 'Para sempre' },
    { value: 'mensal', label: 'Mensal' },
]

function teste (tipoRecorrencia:any){
    ativaTipoRecorrencia.value = tipoRecorrencia != 'anual'
}

const validate = (state:any) :FormError[] => {
    return []
}

async function onSubmit (event: FormSubmitEvent<any>) {
    console.log(event.data)
}

</script>

<style>

</style>