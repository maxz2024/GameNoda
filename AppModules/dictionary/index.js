const global = {
  hello: '\nПривет! Время начать игру!\n',
  chooseGame: '\nВыбери игру, в которую хочешь сыграть:\n\n"1" — "Рыцарь, дракон или принцесса",\n"2" — "Поле чудес"\n"3" — "У кого слово длиннее",\n"4" — "Блэк Джек"\n"5" — "Правда или ложь"\n"6" — "Бросим монетку"\n"7" — Не играем, закончить игру\n',
  playAgain: `Варианты продолжения:\n\n"1" — Сыграть снова в эту игру\n"2" — Выбрать другую игру\n"3" — Закончить игру\n`,
  goodbye: '\nСпасибо за игру! До свидания!',
  win: '\nВ этой игре победа! Что делаем дальше?\n',
  lose: '\nВ этой игре поражение. Что делаем дальше?\n',
  draw: '\nВ этой игре ничья. Что делаем дальше?\n',
}

const blackjack = {
  welcome: '\nСейчас Собака сыграет с тобой в Бдэк Джек! Правила просты: набери 21 очко или как можно ближе к этому числу, но не больше. Очки каждой карты равны её номиналу, кроме валета, дамы и короля, которые равны 10, и туза, который равен 11. Удачи!\n',
  suits: ['Пики', 'Трефы', 'Червы', 'Бубны'],
  values: ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Валет', 'Дама', 'Король', 'Туз'],
  yourHand: 'Твои карты:',
  yourPoints: 'Твои очки:',
  dogHand: 'Карты Собаки:',
  dogPoints: 'Очки Собаки:',
  oneMoreHidden: 'и еще одна скрытая',
  takeCard: 'Взять карту?\n"1" — Да,\n"2" — Нет\n',
  dogShows: 'Собака показывает свою скрытую карту:',
  dogGets: 'Собака получила',
  overflow: 'Перебор. Увы, проигрыш.',
  win: 'Победа над Собакой!',
  lose: 'Собака победила.',
  draw: 'Ничья.',
};

const coin = {
  welcome: '\nЦээсэсочка придумала самую простую игру на свете. Просто подбросить монетку. Выбери "Орел" или "Решка" и посмотрим, на твоей ли стороне удача!\n',
  question: 'Выбери "Орел" или "Решка"\n"1" — "Орел",\n"2" — "Решка"\n',
  win: 'Повезло!',
  lose: 'Увы! Это',
}

const words = {
  welcome: '\nСобака предлагает такую игру: у кого слово длиннее. В консоли появятся буквы, из них нужно собрать слово. Собака соберёт своё. Слово проверим в словаре, и получается ли оно из букв, которые были в консоли. У кого слово длиннее, тот победил. Удачи!\n',
  variants: [
    {
      letters: "бнтрпсбооспооонствкоб",
      word: "обороноспособность"
    },
    {
      letters: "пегзуоерркпасйыцл",
      word: "перегрузка"
    },
    {
      letters: "ттимоаипзозмефрйюцю",
      word: "оптимизация"
    },
  ],
  dictionaryApiKey: 'dict.1.1.20240213T152155Z.9e6cbc673a22ddfc.c6c72b58361fdb952acdfef2343081ed9cd0dfd4',
  dictionaryError: 'Произошла ошибка при выполнении запроса к словарю:',
  inputYourWord: '\nВведи своё слово:\n',
  letters: 'Вот буквы, из них нужно составить слово любой длины:\n',
  yourWord: 'Твоё слово:',
  dogWord: 'Слово Собаки:',
  isInDictionary: 'Твоё слово есть в словаре русского языка. Всё хорошо.',
  isNotInDictionary: 'В словаре русского языка нет твоего слова.',
  couldBeFormed: '— это слово можно составить из предложенных букв.',
  couldNotBeFormed: 'Ошибка: из предоставленных букв нельзя составить слово',
  win: 'Твоё слово длиннее слова от Собаки, победа!',
  lose: 'Слово от Собаки длиннее твоего слова, проигрыш.',
  draw: 'Слова одинаковой длины, ничья.',
  someError: 'Произошла ошибка.',
};

const poleChudes = {
  welcome: '\nАски приготовил для тебя игру "Поле чудес". Тебе нужно угадать слово по буквам. Удачи!\n',
  variants: [
    {
      question: '\nНазвание самого высокого горного хребта в мире, расположенного в Гималаях?\n■в■■■■■\n',
      answer: 'Эверест'
    },
    {
      question: '\nКакой металл используется для создания зеркал?\n■■р■■■■\n',
      answer: 'серебро'
    },
    {
      question: '\nКакое свойство CSS используется для задания цвета текста элемента?\n■о■■■\n',
      answer: 'color'
    },
  ],
  win: 'Правильно!',
  lose: 'Увы, неправильно. Ответ:',
};

const knightDragonAndPrincess = {
  welcome: '\nАски предлагает тебе сыграть в игру "Рыцарь, дракон или принцесса". Ты можешь выбрать одну из трёх ролей. Игра похожа на «камень, ножницы, бумага».\nПравила:\nРыцарь побеждает дракона,\nдракон похищает принцессу,\nпринцесса очаровывает рыцаря.\n',
  roles: ['Рыцарь', 'Дракон', 'Принцесса'],
  wrongInput: 'Неправильный ввод.',
  yorChoice: 'Твой выбор:',
  computerChoice: 'Выбор Аски:',
  draw: 'Ничья!',
  knightAndDragon: "Победа! Рыцарь победил дракона!",
  dragonAndPrincess: "Победа! Дракон похитил принцессу!",
  princessAndKnight: "Победа! Принцесса очаровала рыцаря!",
  dragonAndKnight: "Поражение! Дракон побежден рыцарем!",
  princessAndDragon: "Поражение! Принцесса похищена драконом!",
  knightAndPrincess: "Поражение! Рыцарь очарован принцессой!",
  question: 'Выбери Рыцаря, Дракона или Принцессу.\n"1" — "Рыцарь",\n"2" — "Дракон"\n"3" — "Принцесса"\n',
}

const trueOrFalse = {
  welcome: '\nЦээсэсочка предлагает тебе игру "Правда или ложь". Она задаст тебе три вопроса, нужно ответить, правда это или ложь. Для победы нужно два или три правильных ответа. Удачи!',
  facts: [
    {
      fact: "\nКрокодилы могут дышать под водой при помощи небольших отверстий на верхней части своих голов.\n",
      isTrue: true,
      response: "Это правда. Крокодилы могут действительно задерживать дыхание и находиться под водой, а когда они всплывают, они могут дышать через небольшие отверстия на верхней части своих морд."
    },
    {
      fact: "\nВ некоторых частях Австралии кенгуру участвуют в гонках, их зовут «кенгуринг».\n",
      isTrue: false,
      response: "Это ложь. Хотя кенгуру могут быть быстрыми, их не используют для гонок."
    },
    {
      fact: "\nВ Исландии существует традиция, согласно которой в день рождения человека он должен одарить других подарками.\n",
      isTrue: false,
      response: "Это ложь. В Исландии нет такой традиции. Однако есть традиция «скатерти на волшебном столе», когда именинник угощает других на свой день рождения."
    },
    {
      fact: "\nЕдинороги были официальным символом Шотландии до конца XV века.\n",
      isTrue: false,
      response: "Это ложь. Единороги никогда не были официальным символом Шотландии."
    },
    {
      fact: "\nЛимоны содержат больше сахара, чем клубника.\n",
      isTrue: true,
      response: "Это правда. Лимоны содержат больше сахара, чем клубника."
    },
  ],
  question: '\nПравда или ложь?\n"1" — Правда,\n"2" — Ложь\n',
  correct: 'Правильно! ',
  incorrect: 'Неправильно! ',
  numberOfCorrect: `Правильных ответов: `,
}



module.exports = {global, blackjack, coin, words, poleChudes, knightDragonAndPrincess, trueOrFalse};