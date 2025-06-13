require('dotenv').config();

const TelegramBot = require("node-telegram-bot-api");
const { dishes } = require("./data"); 




const token = process.env.TELEGRAM_BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });



const userFavorites = {}; 




const mainKeyboard = {
  reply_markup: {
    keyboard: [
      [{ text: "🍽️ Каталог" }],
      [{ text: "🔍 Поиск по калориям" }],
      [{ text: "⭐️ Мои избранные блюда" }],
      [{ text: "🎲 Рандомное блюдо" }],
      [{ text: "❓ Помощь" }],
    ],
    resize_keyboard: true, 
  },
};


const catalogKeyboard = {
  reply_markup: {
    keyboard: [
      [{ text: "🌅 Завтраки" }],
      [{ text: "🍜 Основные блюда" }],
      [{ text: "🥣 Супы" }],
      [{ text: "🍰 Десерты" }],
      [{ text: "🔙 Назад в главное меню" }],
    ],
    resize_keyboard: true,
  },
};




function formatDishInfo(dish) {
  return `
*${dish.name}*
_Сложность:_ ${dish.difficulty}
_Время готовки:_ ${dish.time}
_Ингредиенты:_ ${dish.ingredients.join(", ")}
_Калории:_ ${dish.calories} ккал
_Теги:_ ${dish.tags.map((tag) => `#${tag}`).join(", ")}
    `;
}


function sendDishesByTag(chatId, tag) {
  const filteredDishes = dishes.filter((dish) => dish.tags.includes(tag));
  if (filteredDishes.length === 0) {
    bot.sendMessage(
      chatId,
      `К сожалению, блюд по категории "${tag}" не найдено.`
    );
    return;
  }
  bot.sendMessage(chatId, `Блюда по категории "${tag}":`);
  filteredDishes.forEach((dish) => {
    const options = {
      parse_mode: "Markdown", 
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Добавить в избранное",
              callback_data: `add_favorite_${dish.id}`,
            },
          ],
        ],
      },
    };
    bot.sendMessage(chatId, formatDishInfo(dish), options);
  });
}




bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(
    chatId,
    "Привет! Я твой кулинарный помощник. Выбери, что тебя интересует:",
    mainKeyboard
  );
});


bot.on("message", (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;


  if (msg.from.is_bot) return;


  if (text === "🍽️ Каталог") {
    bot.sendMessage(chatId, "Выберите категорию блюд:", catalogKeyboard);
  } else if (text === "🔍 Поиск по калориям") {
    bot.sendMessage(
      chatId,
      "Отправьте мне желаемое количество калорий, и я найду подходящие блюда (погрешность +-10%). Например: `500`"
    );

    bot.states = bot.states || {};
    bot.states[chatId] = "awaiting_calories";
  } else if (text === "⭐️ Мои избранные блюда") {
    const favoriteDishIds = userFavorites[chatId] || [];
    if (favoriteDishIds.length === 0) {
      bot.sendMessage(
        chatId,
        "У вас пока нет избранных блюд. Добавьте что-нибудь из каталога!"
      );
      return;
    }

    bot.sendMessage(chatId, "Ваши избранные блюда:");
    favoriteDishIds.forEach((dishId) => {
      const dish = dishes.find((d) => d.id === dishId);
      if (dish) {
        const options = {
          parse_mode: "Markdown",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: "Удалить из избранного",
                  callback_data: `remove_favorite_${dish.id}`,
                },
              ],
            ],
          },
        };
        bot.sendMessage(chatId, formatDishInfo(dish), options);
      }
    });
  } else if (text === "🎲 Рандомное блюдо") {
    const randomIndex = Math.floor(Math.random() * dishes.length);
    const randomDish = dishes[randomIndex];
    const options = {
      parse_mode: "Markdown",
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Добавить в избранное",
              callback_data: `add_favorite_${randomDish.id}`,
            },
          ],
        ],
      },
    };
    bot.sendMessage(
      chatId,
      `Вот случайное блюдо:\n${formatDishInfo(randomDish)}`,
      options
    );
  } else if (text === "❓ Помощь") {
    bot.sendMessage(
      chatId,
      `
Я бот-помощник для поиска рецептов!
С моей помощью вы можете:
- Просматривать каталог блюд по категориям.
- Искать блюда по калориям.
- Сохранять любимые блюда в избранное.
- Получать рандомные рецепты для вдохновения.

Связаться с создателями: boyarintsevvv@gmail.com
        `
    );
  }

  else if (text === "🌅 Завтраки") {
    sendDishesByTag(chatId, "завтрак");
  } else if (text === "🍜 Основные блюда") {
    sendDishesByTag(chatId, "основное блюдо");
  } else if (text === "🥣 Супы") {
    sendDishesByTag(chatId, "супы");
  } else if (text === "🍰 Десерты") {
    sendDishesByTag(chatId, "десерты");
  } else if (text === "🔙 Назад в главное меню") {
    bot.sendMessage(chatId, "Вы вернулись в главное меню.", mainKeyboard);
  }

  else if (bot.states && bot.states[chatId] === "awaiting_calories") {
    const calories = parseInt(text); 
    if (isNaN(calories)) {
      bot.sendMessage(
        chatId,
        "Пожалуйста, введите **числовое** значение для калорий."
      );
    } else {
      const minCalories = calories * 0.9; 
      const maxCalories = calories * 1.1; 

      const filteredDishes = dishes.filter(
        (dish) => dish.calories >= minCalories && dish.calories <= maxCalories
      );

      if (filteredDishes.length === 0) {
        bot.sendMessage(
          chatId,
          `К сожалению, блюд с калорийностью в диапазоне ${Math.round(
            minCalories
          )}-${Math.round(maxCalories)} ккал не найдено.`
        );
      } else {
        bot.sendMessage(
          chatId,
          `Блюда с калорийностью примерно ${calories} ккал (в диапазоне ${Math.round(
            minCalories
          )}-${Math.round(maxCalories)} ккал):`
        );
        filteredDishes.forEach((dish) => {
          const options = {
            parse_mode: "Markdown",
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "Добавить в избранное",
                    callback_data: `add_favorite_${dish.id}`,
                  },
                ],
              ],
            },
          };
          bot.sendMessage(chatId, formatDishInfo(dish), options);
        });
      }
    }
    delete bot.states[chatId]; 
  }
});


bot.on("callback_query", (callbackQuery) => {
  const message = callbackQuery.message; 
  const chatId = message.chat.id;
  const data = callbackQuery.data; 

  if (data.startsWith("add_favorite_")) {
    const dishId = data.replace("add_favorite_", ""); 
    if (!userFavorites[chatId]) {
      userFavorites[chatId] = []; 
    }
    if (!userFavorites[chatId].includes(dishId)) {

      userFavorites[chatId].push(dishId);
      bot.answerCallbackQuery(callbackQuery.id, "Блюдо добавлено в избранное!"); 
    } else {
      bot.answerCallbackQuery(callbackQuery.id, "Это блюдо уже в избранном!");
    }
  }

  else if (data.startsWith("remove_favorite_")) {
    const dishId = data.replace("remove_favorite_", "");
    if (userFavorites[chatId]) {
      userFavorites[chatId] = userFavorites[chatId].filter(
        (id) => id !== dishId
      ); 
      bot.answerCallbackQuery(callbackQuery.id, "Блюдо удалено из избранного!");

      bot
        .deleteMessage(chatId, message.message_id)
        .catch((err) => console.error("Error deleting message:", err.message));
    } else {
      bot.answerCallbackQuery(callbackQuery.id, "Этого блюда нет в избранном.");
    }
  }
});

console.log("Бот запущен...");
