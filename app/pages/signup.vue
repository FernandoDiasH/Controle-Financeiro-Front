<template>
    <div class="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
        <UCard class="w-full max-w-md p-6">
            <template #default>
                <div class="text-center mb-4">
                    <h1 class="text-2xl font-bold">{{ $t('SIGNUP.TITLE') }}</h1>
                    <p class="text-sm text-gray-600">{{ $t('SIGNUP.DESCRIPTION') }}</p>
                </div>

                <UForm :schema="schema" :state="state" class="flex flex-col gap-4" @submit="onSubmit">

                    <UFormField :label="$t('SIGNUP.NAME.LABEL')" name="name" class="w-full">
                        <UInput v-model="state.name" class="w-full" />
                    </UFormField>

                    <UFormField :label="$t('SIGNUP.PHONE.LABEL')" name="phone" class="w-full">
                        <UInput v-model="state.phone" class="w-full" />
                    </UFormField>

                    <UFormField :label="$t('SIGNUP.EMAIL.LABEL')" name="email" class="w-full">
                        <UInput v-model="state.email" class="w-full" />
                    </UFormField>

                    <UFormField :label="$t('SIGNUP.DOCUMENT.LABEL')" name="document" class="w-full">
                        <UInput v-model="state.document" class="w-full" />
                    </UFormField>

                    <USeparator />

                    <UFormField :label="$t('SIGNUP.PASSWORD.LABEL')" name="password" class="w-full">
                        <UInput v-model="state.password" type="password" class="w-full" />
                    </UFormField>

                    <UFormField :label="$t('SIGNUP.CONFIRM_PASSWORD.LABEL')" name="confirmPassword" class="w-full">
                        <UInput v-model="state.confirmPassword" type="password" class="w-full" />
                    </UFormField>

                    <UButton type="submit" class="flex justify-center"> {{ $t('SIGNUP.SUBMIT_BUTTON') }}</UButton>

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
    name: z.string($t('SIGNUP.NAME.REQUIRED_ERROR')).min(2, $t('SIGNUP.NAME.LENGTH_ERROR')),
    phone: z.string($t('SIGNUP.PHONE.REQUIRED_ERROR')).min(10, $t('SIGNUP.PHONE.LENGTH_ERROR')),
    email: z.email($t('SIGNUP.EMAIL.REQUIRED_ERROR')),
    password: z.string($t('SIGNUP.PASSWORD.REQUIRED_ERROR')).min(8, $t('SIGNUP.PASSWORD.LENGTH_ERROR')),
    document: z.string($t('SIGNUP.DOCUMENT.REQUIRED_ERROR')).min(5, $t('SIGNUP.DOCUMENT.LENGTH_ERROR')),
    confirmPassword: z.string($t('SIGNUP.CONFIRM_PASSWORD.REQUIRED_ERROR')).min(8, $t('SIGNUP.CONFIRM_PASSWORD.LENGTH_ERROR'))
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>
