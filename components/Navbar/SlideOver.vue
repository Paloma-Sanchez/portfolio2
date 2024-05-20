<template>
      <HDialog :class="[ui.wrapper, { 'justify-end': side === 'right' }]" v-bind="attrs" @close="close">
        <TransitionChild v-if="overlay" as="template" :appear="appear" v-bind="ui.overlay.transition">
          <div :class="[ui.overlay.base, ui.overlay.background]" />
        </TransitionChild>
  
        <TransitionChild as="template" :appear="appear" v-bind="transitionClass">
          <HDialogPanel :class="[ui.base, ui.width, ui.background, ui.ring, ui.padding]">
            <slot />
          </HDialogPanel>
        </TransitionChild>
      </HDialog>
  </template>
  
  <script lang="ts">
    const props =defineProps({
      modelValue: {
        type: Boolean as PropType<boolean>,
        default: false
      },
      appear: {
        type: Boolean,
        default: false
      },
      side: {
        type: String as PropType<'left' | 'right'>,
        default: 'right',
        validator: (value: string) => ['left', 'right'].includes(value)
      },
      overlay: {
        type: Boolean,
        default: true
      },
      transition: {
        type: Boolean,
        default: true
      },
      preventClose: {
        type: Boolean,
        default: false
      },
      class: {
        type: [String, Object, Array] as PropType<any>,
        default: () => ''
      },
      ui: {
        type: Object as PropType<Partial<typeof config> & { strategy?: Strategy }>,
        default: () => ({})
      }
    }),
    
    const emit = defineEmits(['update:modelValue', 'close', 'close-prevented']),
  
      const isOpen: WritableComputedRef<boolean> = computed({
        get () {
          return props.modelValue
        },
        set (value) {
          emit('update:modelValue', value)
        }
      })
  
      const transitionClass = computed(() => {
        if (!props.transition) {
          return {}
        }
  
        return {
          ...ui.value.transition,
          enterFrom: props.side === 'left' ? ui.value.translate.left : ui.value.translate.right,
          enterTo: ui.value.translate.base,
          leaveFrom: ui.value.translate.base,
          leaveTo: props.side === 'left' ? ui.value.translate.left : ui.value.translate.right
        }
      })
  
      function close (value: boolean) {
        if (props.preventClose) {
          emit('close-prevented')
  
          return
        }
  
        isOpen.value = value
        emit('close')
      }
  </script>
  