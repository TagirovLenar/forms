import { createRouter, createWebHistory } from 'vue-router';
import RegistrationPage from '../pages/ RegistrationPage.vue';
import FeedbackPage from '../pages/ FeedbackPage.vue';
import ProfileSettingsPage from '../pages/ProfileSettingsPage.vue';
import HomePage from '../pages/HomePage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/registration', component: RegistrationPage },
  { path: '/feedback', component: FeedbackPage },
  { path: '/profile-settings', component: ProfileSettingsPage }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
