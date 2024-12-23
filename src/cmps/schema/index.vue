<template>
  <FormProvider :form="form">
    <SchemaField :schema="schema" />
  </FormProvider>
</template>

<script>
import { Input } from 'ant-design-vue'
import { createForm } from '@formily/core'
import { FormProvider, createSchemaField } from '@formily/vue'
import { ArrayTableJson } from './conf'

const { SchemaField } = createSchemaField({
  components: {
    Input,
  },
})

export default {
  components: { FormProvider, SchemaField },
  data() {
    return {
      form: createForm(),
      schema: ArrayTableJson,
    }
  },
}
</script>