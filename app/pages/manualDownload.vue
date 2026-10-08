<template>
  <ManualDownloadBanner />

  <div class="flex flex-col flex-1 w-full">
    <div class="flex px-4 py-3.5 border-b border-accented">
      <UInput
        :model-value="table?.tableApi?.getColumn('name')?.getFilterValue() as string"
        class="max-w-sm"
        :placeholder="t('manualDownload.search_manual_name')"
        @update:model-value="table?.tableApi?.getColumn('name')?.setFilterValue($event)"
      />
    </div>

    <UTable
      ref="table"
      v-model:column-filters="columnFilters"
      :data="dataList"
      :columns="columns"
    >
      <template #empty>
        <ManualEmptyState />
      </template>
    </UTable>
  </div>

  <UModal
    v-model:open="isOpenPwdDialog"
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
import type { TableColumn } from '@nuxt/ui'
import ManualDownloadBanner from '~/components/manualDownload/ManualDownloadBanner.vue'
import ManualEmptyState from '~/components/manualDownload/ManualEmptyState.vue'

const { t } = useI18n()

const UBadge = resolveComponent('UBadge')
const UIcon = resolveComponent('UIcon')

type Manual = {
  code: string
  name: string
  date: string
}
const dataList = ref<Manual[]>([
  {
    code: 'MES',
    name: t('manualDownload.MES_manual_tw'),
    date: '2026/10/07'
  }
])

const columns: TableColumn<Manual>[] = [
  {
    accessorKey: 'name',
    header: t('manualDownload.name'),

    cell: ({ row }) => {
      return h(
        'div',
        {
          class: 'flex items-center gap-2 cursor-pointer',
          onClick: () => openPasswordDialog(row.original.code)
        },
        [
          h(UIcon, { name: 'tabler:book', class: 'size-5 shrink-0' }),
          h('span', `${row.getValue<string>('name')}`)
        ]
      )
    }
  },
  {
    accessorKey: 'date',
    header: t('manualDownload.version_date')
  }
]

const columnFilters = ref([
  {
    id: 'name',
    value: ''
  }
])

const table = useTemplateRef('table')

/** 是否開啟下載之密碼提示對話框 */
const isOpenPwdDialog = ref(false)

/** 目前點擊的手冊代碼 */
const currentClickCode = ref()

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
  if (!state.password)
    errors.push({ name: 'password', message: t('manualDownload.password_required') })
  return errors
}

/**
 * 開啟MES輸入密碼對話框
 * @param code
 */
function openPasswordDialog(code: string) {
  mesPasswordError.value = undefined
  isOpenPwdDialog.value = true
  currentClickCode.value = code
}

/** 下載MES操作手冊 */
function downloadMesManual() {
  mesPasswordError.value = undefined

  switch (currentClickCode.value) {
    case 'MES':
      if (mesForm.password === 'Aie@82957797MES') {
        const link = document.createElement('a')
        link.href = mesManualUrl
        link.download = 'AIoTCoLtdMes202610.pdf'
        document.body.appendChild(link)
        link.click()
        link.remove()
        isOpenPwdDialog.value = false
      } else {
        mesPasswordError.value = t('manualDownload.password_error')
      }
      break

    default:
      break
  }
}

useSeoMeta({
  title: `${t('seo.index.title')}-${t('manualDownload.title')}`,
  ogTitle: `${t('seo.index.title')}-${t('manualDownload.title')}`,
  description: t('manualDownload.description'),
  ogDescription: t('manualDownload.description')
})
</script>
