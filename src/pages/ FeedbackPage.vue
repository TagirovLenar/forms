<template>
  <div class="form-container">
    <h1 class="title">Обратная связь</h1>

    <FormGenerator :fields="fields" v-model="formData" @submit="saveFormData">
      <template #message="{ field }">
        <textarea
          v-model="formData[field.name]"
          :name="field.name"
          :placeholder="field.placeholder"
          class="form-input"
        ></textarea>
      </template>
    </FormGenerator>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import FormGenerator from '../components/FormGenerator.vue';

// Подключаем Vuex store
const store = useStore();

const formData = ref({
  name: '',
  email: '',
  message: ''
});

const fields = [
  { label: 'Имя', name: 'name', type: 'input', inputType: 'text' },
  { label: 'Электронная почта', name: 'email', type: 'input', inputType: 'email' },
  { label: 'Сообщение', name: 'message', type: 'textarea' }
];

// Метод для сохранения данных в Vuex
const saveFormData = () => {
  store.dispatch('saveFormData', formData.value);
};
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
