<script lang="ts" setup>

const q = ref('')

const items = (row:any) =>[
    [{
        label:"Pagar",
        icon:"i-heroicons-archive-box-20-solid",
        click: () => console.log(row.id) 
    }]
]

const pathDev = process.env.URL_DEV
console.log(pathDev)

const resumoFinaceiro = ref( await $fetch('/api/dev/resumofinanceiro'))
const proximosLancamentos = await $fetch('/api/dev/proximoslancamentos')

const filteredRows = computed(() => {
    if (!q.value) {
        return proximosLancamentos.dados
    }

    return proximosLancamentos.dados.filter((data) => {
        return Object.values(data).some((value) => {
        return String(value).toLowerCase().includes(q.value.toLowerCase())
        })
    })
})

const ui = {
    "background": "bg-white dark:bg-gray-800",
}

</script>

<template>
  <div class="flex flex-col py-12 gap-12 items-center">
    <div class="flex max-w-6xl w-full sm:px-6 lg:px-8 text-white justify-between">
        <UCard class="w-56" :ui="ui" v-for="dado, chave in resumoFinaceiro">
            <template #header>
                <p class="text-xs">{{ chave }}</p>
            </template>
            <p class="text-xl font-semibold">R$ {{ dado.valor }}</p>
        </UCard>
    </div>

    <div class="max-w-6xl w-full mx-auto sm:px-6 lg:px-8">
        <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
            <div class="p-6 text-gray-900 dark:text-gray-100">
                Proxímos vencimentos - Fevereiro
            </div>
        </div>
    </div>

    <div class="max-w-6xl w-full mx-auto sm:px-6 lg:px-8">
        <div class="flex justify-between px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
            <ModalAddLancamentoRecorrente/>
            <UInput v-model="q" placeholder="Filtre um lançamento..." />
        </div>        
        <UTable 
            :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'Sem registros' }"  
            :sort="proximosLancamentos.ordenacao" 
            :columns="proximosLancamentos.metadados" 
            :rows="filteredRows" 
        >
            <template #action-data="{ row }" >
                <UDropdown :items="items(row)">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid"  />
                </UDropdown>
            </template>
        
        </UTable>
    </div>
  </div>
</template>

<style scoped></style>
