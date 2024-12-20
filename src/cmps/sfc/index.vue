<template>
  <FormProvider :form="form">
    <Field
      name="name"
      title="Name"
      :decorator="[FormItem]"
      :component="[Input, { placeholder: 'Please Input' }]"
    />
    <Field
      name="password"
      title="Password"
      :decorator="[FormItem]"
      :component="[Input, { type: 'text', placeholder: 'Please Input' }]"
      :reactions="createPasswordEqualValidate('confirm_password')"
    />
    
    <FormConsumer>
      <template #default="{ form }">
        <div class="code">
          <p>FormConsumer</p>
          {{ JSON.stringify(form.values, null, 2) }}
        </div>
      </template>
    </FormConsumer>
    
    <JsxCmp />
  
  </FormProvider>
</template>

<script setup lang="ts">
import { Form, Input } from 'ant-design-vue'
import { createForm, isVoidField, setValidateLanguage } from '@formily/core'
import {
  FormProvider,
  FormConsumer,
  Field,
  connect,
  mapProps,
} from '@formily/vue'
import SfcChild from './child.vue'
import {JsxCmp} from '../jsx/jsx.tsx'

setValidateLanguage('en')

const FormItem = connect(
  Form.Item,
  mapProps(
    { validateStatus: true, title: 'label', required: true },
    (props, field) => {
      return {
        help: !isVoidField(field)
          ? field.selfErrors.length
            ? field.selfErrors
            : undefined
          : undefined,
        extra: field.description,
      }
    }
  )
)

const form = createForm({ validateFirst: true })
const createPasswordEqualValidate = (equalName) => (field) => {
  if (
    form.values.confirm_password &&
    field.value &&
    form.values[equalName] !== field.value
  ) {
    field.selfErrors = ['Password does not match Confirm Password.']
  } else {
    field.selfErrors = []
  }
}
</script>