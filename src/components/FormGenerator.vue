<template>
  <VForm @submit="onSubmit" :validation-schema="validationSchema" v-slot="{ errors, submitCount }" class="form-generator">
    <div v-for="field in fields" :key="field.name" class="form-field">
      <label :for="field.name">{{ field.label }}</label>

      <!-- Input -->
      <template v-if="field.type === 'input'">
        <Field
          :name="field.name"
          v-model="formData[field.name]"
          :type="field.inputType || 'text'"
          :placeholder="field.placeholder"
        />
      </template>

      <!-- Select -->
      <template v-else-if="field.type === 'select'">
        <Field :name="field.name" v-model="formData[field.name]" as="select">
          <option v-for="option in field.options" :key="option.value" :value="option.value">
            {{ option.label }}
          </option>
        </Field>
      </template>

      <!-- Checkbox -->
      <template v-else-if="field.type === 'checkbox'">
        <Field :name="field.name" v-model="formData[field.name]" type="checkbox" />
      </template>

      <!-- Textarea -->
      <template v-else-if="field.type === 'textarea'">
        <Field :name="field.name" v-model="formData[field.name]" as="textarea" />
      </template>

      <!-- Ошибки валидации (показываем только после первого submit) -->
      <span class="error" v-if="submitCount > 0 && errors[field.name]">{{ errors[field.name] }}</span>
    </div>

    <div class="form-actions">
      <button type="submit">Сохранить</button>
      <button type="button" @click="cancelForm">Отмена</button>
    </div>
  </VForm>

  <div v-if="isSaved" class="success">Данные успешно сохранены!</div>
</template>

<script lang="ts" setup>
import { reactive, ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { Field, Form as VForm } from 'vee-validate';
import { z } from 'zod';
import { toTypedSchema } from '@vee-validate/zod';


// Пропсы и поля формы
const props = defineProps({
  fields: {
    type: Array as () => Array<any>,
    required: true,
  },
  modelValue: {
    type: Object,
    required: true,
  },
});

// Определение событий с использованием defineEmits
const emit = defineEmits<{
  (e: 'update:modelValue', value: any): void;
  (e: 'submit', formData: any): void;
  (e: 'cancel'): void;
}>();

// Состояния
const formData = reactive({ ...props.modelValue });
const isSaved = ref(false);
const router = useRouter(); // Инициализация роутера для переходов

// Динамическая схема валидации
const validationSchema = computed(() => {
  const schemaShape: Record<string, any> = {};

  // Валидация для каждого поля
  props.fields.forEach((field) => {
    if (field.name === 'name') {
      schemaShape[field.name] = z.string().min(3, 'Имя должно содержать не менее 3 символов').nonempty('Имя не должно быть пустым');
    }
    if (field.name === 'email') {
      schemaShape[field.name] = z.string().email('Неверный формат почты').nonempty('Почта обязательна');
    }
    if (field.name === 'password') {
      schemaShape[field.name] = z.string().min(8, 'Пароль должен содержать не менее 8 символов').nonempty('Пароль обязателен');
    }
    if (field.name === 'gender') {
      schemaShape[field.name] = z.string().nonempty('Пол обязателен');
    }
    if (field.name === 'agreement') {
      schemaShape[field.name] = z.boolean().refine(val => val === true, 'Необходимо согласие');
    }
    if (field.name === 'message') {
      schemaShape[field.name] = z.string().min(1, 'Сообщение обязательно').nonempty('Сообщение не должно быть пустым');
    }
  });

  return toTypedSchema(z.object(schemaShape));
});

// Функция отправки данных
const onSubmit = () => {
  // Сохранение данных и вызов события
  emit('update:modelValue', formData);
  emit('submit', formData);
  isSaved.value = true;

  // Скрытие сообщения об успешном сохранении
  setTimeout(() => {
    isSaved.value = false;
  }, 3000);
};

// Функция для отмены формы
const cancelForm = () => {
  router.push('/'); // Переход на главную страницу
};
</script>



<style lang="scss" scoped>
.form-generator {
  max-width: 600px;
  margin: 0 auto;

  .form-field {
    margin-bottom: 16px;

    label {
      display: block;
      margin-bottom: 8px;
    }

    input,
    select,
    textarea {
      width: 100%;
      padding: 8px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .error {
      color: red;
      font-size: 0.875rem;
    }
  }

  .form-actions {
    margin-top: 20px;

    button {
      padding: 10px 20px;
      margin-right: 10px;
      border: none;
      border-radius: 4px;
      background-color: #4caf50;
      color: white;
      cursor: pointer;

      &:hover {
        background-color: #45a049;
      }
    }
  }

  .success {
    margin-top: 20px;
    color: green;
    font-weight: bold;
  }
}
</style>
