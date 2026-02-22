var SURVEY_JS = [
  // ШАГ 1: Проверка возраста (TabUnder монетизация)
  {
    "title": "attention",
    "question": "age_verification",
    "answers": [
      {
        "text": "no",
        "exit": "ageExit" // Уводит с сайта (или можно тоже поставить "mainExit", если хочешь монетизировать и отказы)
      },
      {
        "text": "yes",
        "exit": "tabUnderClick" // Открывает рекламу в новой вкладке в фоне и переводит на Шаг 2
      }
    ]
  },
  
  // ШАГ 2: Финал с видео (Обе кнопки ведут на главную ссылку)
  {
    "title": "private_video",
    "question": "watch_full_uncensored",
    "answers": [
      {
        "text": "play_button",
        "exit": "mainExit" // Переход на твою главную смартлинку/оффер
      },
      {
        "text": "exit_site",
        "exit": "mainExit" // ХИТРОСТЬ: юзер жмет выход, но тоже улетает на твою смартлинку!
      }
    ]
  }
]