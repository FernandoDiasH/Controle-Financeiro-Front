<script lang="ts" setup>
import type { FormError, FormSubmitEvent } from '@nuxt/ui/dist/runtime/types';

const items = (row:any) => [
    [
        {label:'Editar', icon:'i-heroicons-pencil-square-20-solid', click:()=> console.log(row.id)},
        {label:'Deletar', icon:'i-heroicons-trash-20-solid', click:()=> console.log(row.id)}
    ]
]

let lancamentos = await $fetch('/api/dev/lancamentos');
const categorias = await $fetch('/api/dev/categorias');

const categoriaSelected = ref([])

const q = ref('')

const filteredRows = computed(() => {
    if (!q.value) {
        return lancamentos.dados
    }

    return lancamentos.dados.filter((data) => {
        return Object.values(data).some((value) => {
        return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })
})

const selected = ref([])

const page = ref(1)
const pageCount = 5

const rows = computed(()=>{
    return data.slice((page.value -1) * pageCount, (page.value) * pageCount)
})

const state = reactive({})

const validate = (state:any) :FormError[] => {
    return []
}

async function onSubmit (event: FormSubmitEvent<any>) {
    console.log(event.data)
}
</script>

<template>
    <div class="mt-12 max-w-6xl mx-auto sm:px-6 lg:px-8 flex flex-col gap-12">
        <div class="p-6 bg-white dark:bg-gray-800 shadow-sm sm:rounded-lg flex flex-col gap-6">
            <UForm class="flex flex-col gap-4" :validate="validate" :state="state" @onSubimit="onSubmit">
                <div class="flex gap-4">
                    <UFormGroup label="Descrição" name="descricao">
                        <UInput type="text" name="descricao"/>
                    </UFormGroup>
                    
                    <UFormGroup label="Data Início" name="datainicio">
                        <UInput type="date" name="datainicio"/>
                    </UFormGroup>
                    
                    <UFormGroup label="Data Fim" name="datafim">
                        <UInput type="date" name="datafim"/>
                    </UFormGroup>
                    
                    <UFormGroup label="Categoria" name="categoria">
                        <USelectMenu 
                            class="w-40" 
                            v-model="categoriaSelected" 
                            :options="categorias" 
                            multiple 
                            placeholder="Slecione"
                            value-attribute="id" 
                            option-attribute="nome"
                        />
                    </UFormGroup>
                </div>

                <div class="max-w-4xl">
                    <UButton type="submit">Filtrar</UButton>
                </div>
            </UForm>
        </div>

        <div class="max-w-6xl">
            <div class="flex justify-between px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
                <ModalAddLancamento :categorias="categorias"/>
                <UInput v-model="q" placeholder="Filtre um lançamento..." />
            </div>
            
            <UTable :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'Sem registros' }" v-model="selected" :sort="lancamentos.ordenacao" :columns="lancamentos.metadados" :rows="filteredRows">
                <template #name-data="{ row }">
                    <span :class="[selected.find(person => person.id === row.id) && 'text-primary-500 dark:text-primary-400']">{{ row.name }}</span>
                </template>

                <template #action-data="{row}">
                    <UDropdown :items="items(row)">
                        <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid"  />
                    </UDropdown>
                </template>
            </UTable>
            
            <div class="flex justify-end px-3 py-3.5 border-t border-gray-200 dark:border-gray-700">
                <UPagination v-model="page" :page-count="pageCount" :total="lancamentos.dados.length" />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
