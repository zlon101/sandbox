<template>
  <div class="box">
    <p>child</p>
    <div class="code">
      {{ formValue }}
    </div>
    <input @input="onInput" />
  </div>
</template>

<script setup lang="ts">
import { FormProvider, Field, useForm } from '@formily/vue'
import { useObserver } from '@formily/reactive-vue'
useObserver()
const formRef = useForm()
const form = formRef.value
const formValue = form.values

const onInput = e => {
  const v = e.target.value
  form.setValuesIn('name', v)
}
</script>