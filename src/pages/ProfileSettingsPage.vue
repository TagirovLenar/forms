<template>
  <div class="form-container">
    <h1 class="title">Настройки профиля</h1>

    <FormGenerator :fields="fields" v-model="formData">
      <template #email="{ field }">
        <input
          v-model="formData[field.name]"
          :type="field.inputType"
          :name="field.name"
          :placeholder="field.placeholder"
          class="form-input"
        />
      </template>

      <template #acceptTerms="{ field }">
        <label>
          <input v-model="formData[field.name]" type="checkbox" :name="field.name" />
          {{ field.label }}
        </label>
      </template>
    </FormGenerator>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import FormGenerator from '../components/FormGenerator.vue';

interface FormData {
  email: string;
  acceptTerms: boolean;
}

// Данные формы
const formData = ref<FormData>({
  email: '',
  acceptTerms: false
});

// Описание полей формы
const fields = [
  { label: 'Электронная почта', name: 'email', type: 'input', inputType: 'email' },
  { label: 'Согласие с условиями', name: 'acceptTerms', type: 'checkbox' }
];
</script>

<style scoped lang="scss">
.form-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.form-input {
  width: 100%;
  padding: 1rem;
  margin-bottom: 1.25rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.form-input:focus {
  border-color: #4caf50;
  box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
}

.form-footer {
  text-align: center;
  margin-top: 1.5rem;
}

.save-button {
  width: 100%;
  padding: 1rem;
  background-color: #007bff;
  color: white;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.save-button:hover {
  background-color: #0056b3;
}

.success-message {
  margin-top: 1rem;
  color: #4caf50;
  font-size: 1rem;
}
</style>
