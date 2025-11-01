<template>
    <div class="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
        <UCard class="w-full max-w-md p-6">
            <template #default>
                <div class="text-center mb-4">
                    <h1 class="text-2xl font-bold">{{ $t('FORGOT_PASSWORD.TITLE') }}</h1>
                    <p class="text-sm text-gray-600">{{ $t('FORGOT_PASSWORD.DESCRIPTION') }}</p>
                </div>

                <UForm :schema="schema" :state="state" class="flex flex-col gap-4" @submit="onSubmit">
                    <UFormField :label="$t('FORGOT_PASSWORD.EMAIL_LABEL')" name="email" class="w-full">
                        <UInput v-model="state.email" class="w-full" />
                    </UFormField>

                    <UButton type="submit" class="flex justify-center"> {{ $t('FORGOT_PASSWORD.SUBMIT_BUTTON') }}</UButton>

                    <USeparator />
                    
                    <div class="text-sm text-center">
                        {{ $t('SIGNUP.HAVE_ACCOUNT') }} <NuxtLinkLocale to="/login" class="text-primary-600 hover:underline">{{ $t('SIGNUP.LOGIN_LINK') }}</NuxtLinkLocale>
                    </div>

                </UForm>
            </template>
        </UCard>
    </div>
</template>
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

const schema = z.object({
    email: z.email($t('SIGNUP.EMAIL.REQUIRED_ERROR')),
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
    email: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
    toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
    console.log(event.data)
}
</script>