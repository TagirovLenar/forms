<template>
    <div class="form-container">
      <h1 class="title">Регистрация</h1>
  
      <!-- Form Generator -->
      <FormGenerator :fields="fields" v-model="formData">
        <template #name="{ field }">
          <input
            v-model="formData[field.name]"
            :type="field.inputType"
            :name="field.name"
            :placeholder="field.label"
            class="form-input"
          />
        </template>
  
        <template #email="{ field }">
          <input
            v-model="formData[field.name]"
            :type="field.inputType"
            :name="field.name"
            :placeholder="field.label"
            class="form-input"
          />
        </template>
  
        <template #password="{ field }">
          <input
            v-model="formData[field.name]"
            :type="field.inputType"
            :name="field.name"
            :placeholder="field.label"
            class="form-input"
          />
        </template>
  
        <template #gender="{ field }">
          <select
            v-model="formData[field.name]"
            :name="field.name"
            class="form-input"
          >
            <option v-for="(option, i) in field.options" :key="i" :value="option.value">
              {{ option.label }}
            </option>
          </select>
        </template>
      </FormGenerator>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  import FormGenerator from '../components/FormGenerator.vue';
  
  // Типы для полей формы и данных формы
  interface Field {
    label: string;
    name: 'name' | 'email' | 'password' | 'gender';  // Указываем конкретные имена для полей
    type: 'input' | 'select';  // Типы полей
    inputType?: 'text' | 'email' | 'password';  // Дополнительные параметры для input
    options?: { value: string; label: string }[];  // Для поля select
  }
  
  interface FormData {
  [key: string]: string; // Все поля формы будут строками
}
  
  // Данные формы
  const formData = ref<FormData>({
    name: '',
    email: '',
    password: '',
    gender: ''
  });
  
  // Описание полей формы
  const fields: Field[] = [
    { label: 'Имя', name: 'name', type: 'input', inputType: 'text' },
    { label: 'Электронная почта', name: 'email', type: 'input', inputType: 'email' },
    { label: 'Пароль', name: 'password', type: 'input', inputType: 'password' },
    { label: 'Пол', name: 'gender', type: 'select', options: [{ value: 'male', label: 'Мужской' }, { value: 'female', label: 'Женский' }] }
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
    border-color: #4CAF50;
    box-shadow: 0 0 0 2px rgba(76, 175, 80, 0.3);
  }
  
  .form-footer {
    text-align: center;
    margin-top: 1.5rem;
  }
  
  .save-button {
    width: 100%;
    padding: 1rem;
    background-color: #007BFF;
    color: white;
    border-radius: 8px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
      background-color: #0056b3;
    }
  }
  
  .success-message {
    margin-top: 1rem;
    color: #4CAF50;
    font-size: 1rem;
  }
  </style>
  