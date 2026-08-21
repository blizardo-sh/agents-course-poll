/* ==========================================================
   НАСТРОЙКА ГОЛОСОВАНИЯ — боевые значения

   Заполнено 21.08.2026 по вердиктам владельца, пункты 3 и 4 пакета
   чекпойнта 04-08. Форма файла — vote/config.template.js: шаблон
   остаётся рядом и остаётся источником формы, а не копией про запас.

   Что стоит за этими значениями:
   1. Проект Firebase заведён под курс отдельно от боевого проекта
      другого выступления. Realtime Database включена в регионе
      europe-west1, правила из interactive/database.rules.json
      опубликованы живой заливкой.
   2. Публичный репозиторий под страницу заведён отдельно от репозитория
      курса. voteUrl — публичный адрес страницы участника: из него
      собирается код на слайде входа, и он же печатается текстом
      для тех, кому нечем сканировать.

   Конфиг веб-приложения Firebase публичен по замыслу: доступ ограничивают
   правила базы, а не секретность ключа. Он ложится в репозиторий как конфиг,
   а не как секрет. Это не повод класть сюда что-то ещё: файл уезжает
   во внешний контур целиком, рядом со страницей, и всё написанное здесь
   уезжает вместе с ним.

   Перед каждой выгрузкой наружу — гейт по ОБОИМ собранным файлам:
     python3 scripts/check-publish.py --scan-artifact build/vote/index.html
     python3 scripts/check-publish.py --scan-artifact build/vote/config.js
   ========================================================== */
window.POLL_CONFIG = {

  firebase: {
    apiKey: "AIzaSyBlZcYDym_mrVexQekCfbARHhdxsWgx7CA",
    authDomain: "agents-course-poll.firebaseapp.com",
    databaseURL: "https://agents-course-poll-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "agents-course-poll",
    storageBucket: "agents-course-poll.firebasestorage.app",
    messagingSenderId: "265357754025",
    appId: "1:265357754025:web:7647cc0918c3a559f973b8"
  },

  voteUrl: "https://blizardo-sh.github.io/agents-course-poll/"
};
