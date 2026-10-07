<template>
  <UTabs
    :items="items"
    :ui="{
      list: 'justify-around w-full',
      trigger: 'grow flex-col gap-1 py-1',
      label: 'text-[10px]/3'
    }"
    class="w-full"
  >
    <template #mes>
      <ULink
        class="cursor-pointer"
        @click="openMesPwdDialog"
        active-class="font-bold"
        inactive-class="text-muted"
        >{{ t('manualDownload.MES_manual_tw') }}(version：2026/10/07)
      </ULink>
    </template>

    <template #other> </template>
  </UTabs>

  <UModal
    v-model:open="isOpenMesPwd"
    :title="t('manualDownload.input_password_first')"
  >
    <template #body>
      <UForm
        :validate="validate"
        :state="mesForm"
        class="space-y-4"
        @submit="downloadMesManual"
      >
        <UFormField
          :label="t('manualDownload.download_password')"
          name="password"
          :error="mesPasswordError"
        >
          <UInput
            v-model="mesForm.password"
            type="password"
          />
        </UFormField>

        <UButton type="submit"> {{ t('manualDownload.submit') }} </UButton>
      </UForm>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { TabsItem, FormError } from '@nuxt/ui'
import mesManualUrl from '~/assets/pdf/MES_Manual_20261007.pdf?url'

const { t } = useI18n()

const items: TabsItem[] = [
  {
    label: t('solutions.mes_title'),
    icon: 'icon-park-outline:system',
    slot: 'mes' as const,
    code: 'mes'
  },
  {
    label: t('manualDownload.other'),
    icon: 'i-lucide-activity',
    slot: 'other' as const,
    code: 'other'
  }
]

/** 是否開啟MES下載之密碼提示對話框 */
const isOpenMesPwd = ref(false)

/** MES輸入密碼錯誤訊息 */
const mesPasswordError = ref<string>()

/** 下載MES表單 */
const mesForm = reactive({
  password: ''
})

type Schema = typeof mesForm

/** 驗證必填欄位 */
function validate(state: Partial<Schema>): FormError[] {
  const errors = []
  if (!state.password) errors.push({ name: 'password', message:  t('manualDownload.password_required') })
  return errors
}

/** 開啟MES輸入密碼對話框 */
function openMesPwdDialog() {
  mesPasswordError.value = undefined
  isOpenMesPwd.value = true
}

/** 下載MES操作手冊 */
function downloadMesManual() {
  mesPasswordError.value = undefined
  if (mesForm.password === 'AIoTCoLtdAIE_Mes202610') {
    const link = document.createElement('a')
    link.href = mesManualUrl
    link.download = 'AIoTCoLtdMes202610.pdf'
    document.body.appendChild(link)
    link.click()
    link.remove()
    isOpenMesPwd.value = false
  } else {
    mesPasswordError.value = t('manualDownload.password_error')
  }
}
</script>
