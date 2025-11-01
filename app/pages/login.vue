<template>
    <div class="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
        <UPageCard class="w-full max-w-md">
            <UAuthForm
                :schema="schema"
                :title="$t('LOGIN.TITLE')"
                :description="$t('LOGIN.DESCRIPTION')"
                icon="i-lucide-user"
                :fields="fields"
                :submit="{label: $t('LOGIN.SUBMIT_BUTTON'),}"
                @submit="onSubmit"
            >
                <template #password-hint>
                    <NuxtLinkLocale to="/forgot-password" class="text-primary font-medium" tabindex="-1">{{ $t('LOGIN.FORGOT_PASSWORD') }}</NuxtLinkLocale>
                </template>

                <template #footer>
                    <div class="text-sm text-center">
                        {{ $t('LOGIN.NO_ACCOUNT') }} <NuxtLinkLocale  to="/signup" class="text-primary-600 hover:underline" >{{ $t('LOGIN.REGISTER_LINK') }}</NuxtLinkLocale>
                    </div>
                </template>
            </UAuthForm>
        </UPageCard>
    </div>
</template>


<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent, AuthFormField } from '@nuxt/ui'

const toast = useToast()

const fields: AuthFormField[] = [{
name: 'email',
type: 'email',
label: $t('LOGIN.EMAIL_LABEL'),
placeholder: $t('LOGIN.EMAIL_PLACEHOLDER'),
required: true
}, {
name: 'password',
label: $t('LOGIN.PASSWORD_LABEL'),
type: 'password',
placeholder: $t('LOGIN.PASSWORD_PLACEHOLDER'),
required: true
}, {
name: 'remember',
label: $t('LOGIN.REMEMBER_ME'),
type: 'checkbox'
}]

const schema = z.object({
email: z.email($t('LOGIN.EMAIL_ERROR')),
password: z.string($t('LOGIN.PASSWORD_ERROR')).min(8, $t('LOGIN.PASSWORD_ERROR'))
})

type Schema = z.output<typeof schema>

async function onSubmit(payload: FormSubmitEvent<Schema>) {
    console.log('Submitted', payload)
    toast.add({ title: 'Success', description: 'You have logged in successfully.', color: 'success' })
    await navigateTo('/dashboard');
}
</script>