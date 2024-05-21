<template>
      <main
        class="fixed inset-0 flex z-50"
        :class="[
            {
                'justify-end': side === 'right' 
            }
        ]" 
      >
        <div
            v-if="modelValue" 
            @click="closeFunction"
        >
          <div class="fixed inset-0 transition-opacity bg-gray-200/75 dark:bg-gray-800/75" />
        </div>
  
        <template
            v-if="modelValue" 
            v-bind="transitionClass"
        >
          <div
            class="relative flex-1 flex flex-col w-full h-full focus:outline-none max-w-md bg-white dark:bg-gray-900">
            <slot />
          </div>
        </template>
      </main>
  </template>
  
  <script setup lang="ts">

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
    });
    
    const emit = defineEmits(['update:modelValue', 'close', 'close-prevented']);

    
    const transitionClass = computed(() => {
        if (!props.transition) {
          return {}
        }
  
        return {
          enter: 'transform transition ease-in-out duration-300',
          leave: 'transform transition ease-in-out duration-200',
          enterFrom: props.side === 'left' ? '-translate-x-full rtl:translate-x-full' : 'translate-x-full rtl:-translate-x-full',
          enterTo: 'translate-x-0',
          leaveFrom: 'translate-x-0',
          leaveTo: props.side === 'left' ? '-translate-x-full rtl:translate-x-full' : 'translate-x-full rtl:-translate-x-full'
        }
      });
  
    const closeFunction = (value: boolean) => {
        if (props.preventClose) {
          emit('close-prevented')
  
          return
        }
  
        emit('update:modelValue', !props.modelValue);
        emit('close');
    };


  </script>
  