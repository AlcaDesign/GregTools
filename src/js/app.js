import Vue from 'vue';
import Router from 'vue-router';
import App from './app.vue';
import ChatView from './components/views/ChatView.vue';
import PollView from './components/views/PollView.vue';
import BotView from './components/views/BotView.vue';
import AlertView from './components/views/AlertView.vue';
import SongView from './components/views/SongView.vue';

Vue.use(Router);
const router = new Router();

router.map({
  '/chat': {
    component: ChatView
  },
  '/poll': {
    component: PollView
  },
  '/alert': {
    component: AlertView
  },
  '/bot': {
    component: BotView
  },
  '/song': {
    component: SongView
  }
});

router.beforeEach(function () {
  window.scrollTo(0, 0);
});

router.redirect({
  '*': '/chat'
});

router.start(App, 'app');
