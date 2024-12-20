import { defineComponent } from 'vue'
import { FormProvider, Field, useForm } from '@formily/vue'
import { useObserver } from '@formily/reactive-vue'

export const JsxCmp = defineComponent({
  setup() {
    useObserver()
    const formRef = useForm()
    const form = formRef.value
    const formValue = form.values
    
    const onInput = e => {
      const v = e.target.value
      form.setValuesIn('name', v)
    }
    return () => (
      <>
      <div class="box">
        <p>jsx 组件</p>
        <div class="code">
          {formValue}
        </div>
        <input onInput={onInput} />
      </div>
      </>
    )
  }
})