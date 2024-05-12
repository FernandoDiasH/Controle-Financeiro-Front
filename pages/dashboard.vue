<script lang="ts" setup>
import { useFilterTable } from '../composables/useFilterTable';

const items = (row:any) =>[
    [
        {
            label:"Pagar",
            icon:"i-heroicons-archive-box-20-solid",
            click: () => usePagarLancameto(row.id)
        }
    ]
]

const pathDev = process.env.URL_DEV
const resumoFinaceiro = await $fetch('/api/dev/resumofinanceiro')
const proximosLancamentos = await $fetch('/api/dev/proximoslancamentos')

const filtro = ref('')
const linhasFiltradas = useFilterTable(filtro, proximosLancamentos)

const ui = {
    "background": "bg-white dark:bg-gray-800",
}

</script>

<template>
  <div class="flex flex-col py-12 gap-12 items-center">
    <div class="flex max-w-6xl w-full sm:px-6 lg:px-8 text-white justify-between">
        <UCard class="w-56" :ui="ui" v-for="dadoTipoLancamento, tipoLancamento in resumoFinaceiro">
            <template #header>
                <p class="text-xs">{{ tipoLancamento }}</p>
            </template>
            <p class="text-xl font-semibold">R$ {{ dadoTipoLancamento.valor }}</p>
        </UCard>
    </div>
    
    <VisualSeparadorDeTitulo :titulo="'Proxímos Vencimentos - '+ proximosLancamentos.mesReferencia "/>

    <div class="max-w-6xl w-full mx-auto sm:px-6 lg:px-8">
        <div class="flex justify-between px-3 py-3.5 border-b border-gray-200 dark:border-gray-700">
            <!-- <ModalAddLancamentoRecorrente/> -->
            <UInput v-model="filtro" placeholder="Filtre um lançamento..." />
        </div>        
        <UTable 
            :empty-state="{ icon: 'i-heroicons-circle-stack-20-solid', label: 'Sem registros' }"  
            :sort="proximosLancamentos.ordenacao" 
            :columns="proximosLancamentos.metadados" 
            :rows="linhasFiltradas" 
        >
            <template #action-data="{ row }" >
                <UDropdown :items="items(row)">
                    <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid"  />
                </UDropdown>
            </template>
        
        </UTable>
    </div>

    <VisualSeparadorDeTitulo titulo="Grafico para Mostra onde tem mais gastos"/>
    
  </div>
</template>

<style scoped></style>
