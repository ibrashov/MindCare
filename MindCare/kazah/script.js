const likertOptions = [
  { label: "Ешқашан", score: 0, hint: "Бұл жағдай мүлде байқалмайды" },
  { label: "Сирек", score: 1, hint: "Кейде ғана сезіледі" },
  { label: "Кейде", score: 2, hint: "Орташа жиілікте кездеседі" },
  { label: "Жиі", score: 3, hint: "Көп жағдайда байқалады" },
  { label: "Өте жиі", score: 4, hint: "Тұрақты түрде мазалайды" }
];

const concernDetails = {
  stress: {
    title: "Стресс",
    description: "Қысым, асығыстық және ішкі ширығуды бағалау"
  },
  depression: {
    title: "Күйзеліс",
    description: "Көңіл күйдің төмендеуі мен қызығушылықтың азаюын бағалау"
  },
  insomnia: {
    title: "Ұйқысыздық",
    description: "Ұйқы сапасы мен түнгі тынығу күйін бағалау"
  },
  anxiety: {
    title: "Мазасыздық",
    description: "Ішкі алаң, қауіптену және тынышсыздық деңгейі"
  },
  loneliness: {
    title: "Жалғыздық сезімі",
    description: "Әлеуметтік қолдау мен жақындық сезімін бағалау"
  },
  pressure: {
    title: "Оқу/жұмыс қысымы",
    description: "Жауапкершілік жүктемесі мен уақыт қысымын бағалау"
  },
  burnout: {
    title: "Эмоциялық шаршау",
    description: "Қалжырау, мотивацияның азаюы және ішкі қажуды бағалау"
  }
};

const ageGroups = {
  teens: {
    title: "14–18 жас",
    description: "Оқу, ата-ана, достар және емтихан тақырыптары"
  },
  youngAdults: {
    title: "19–30 жас",
    description: "Оқу, мансап, қарым-қатынас және болашақ тақырыптары"
  },
  adults: {
    title: "31–50 жас",
    description: "Жұмыс, отбасы, өмірлік қысым және тұрақтылық мәселелері"
  }
};

const questionBank = {
  stress: {
    teens: [
      "Сабақ, үй тапсырмасы немесе емтихан туралы ойлағанда ішкі қысым сезінесіз бе?",
      "Ата-анаңыздың не мұғалімдердің үмітін ақтау қиын болып көріне ме?",
      "Күн ішінде уайымнан шаршап, демалуға уақыт таппай қаласыз ба?",
      "Достармен қарым-қатынастағы жағдайлар көңіліңізге қатты әсер ете ме?",
      "Оқу жүктемесі салдарынан ашушаңдық немесе жылағыңыз келетін сәттер бола ма?",
      "Стресс әсерінен жүрек қағуы, бас ауыруы немесе дене ширығуы сезіле ме?"
    ],
    youngAdults: [
      "Оқу, жұмыс немесе мансапқа қатысты міндеттер сізді жиі қысымға түсіре ме?",
      "Болашаққа қатысты ойлар мазалап, тынығуға кедергі келтіре ме?",
      "Көп жауапкершілікке байланысты өзіңізді үнемі асығыс күйде сезінесіз бе?",
      "Қарым-қатынас не жеке өмір мәселелері ішкі күйіңізге қатты әсер ете ме?",
      "Күн соңында эмоциялық тұрғыдан қатты шаршағаныңызды байқайсыз ба?",
      "Стресс салдарынан зейін қою қиын болып немесе ұсақ нәрсеге алаңдай бересіз бе?"
    ],
    adults: [
      "Жұмыс, отбасы және күнделікті міндеттер арасында тепе-теңдік сақтау қиын бола ма?",
      "Қаржылық немесе тұрмыстық жауапкершілік сізге қатты қысым түсіре ме?",
      "Күнделікті күйбеңнен кейін де ойыңыз тыныштала алмай жүре ме?",
      "Шаршаған күйде жақындарыңызбен сабырлы сөйлесу қиынға соға ма?",
      "Стресс салдарынан ұйқыңыз, тәбетіңіз немесе көңіл күйіңіз өзгеріп жүр ме?",
      "Өзіңізге уақыт бөлмеу ішкі қысымды күшейтіп тұрғандай сезіле ме?"
    ]
  },
  depression: {
    teens: [
      "Соңғы уақытта бұрын ұнайтын істерге қызығушылығыңыз азайды ма?",
      "Көңіл күйіңіз жиі түсіп, өзіңізді жабырқау сезінесіз бе?",
      "Достармен араласқыңыз келмей, жалғыз қалуды көбірек қалайсыз ба?",
      "Өзіңізді бағалау төмендеп, қолыңыздан ештеңе келмейтіндей көріне ме?",
      "Күнделікті іс бастауға күш таппай қалатын сәттер жиі бола ма?",
      "Ұйқы мен тәбеттің өзгеруі көңіл күйіңізбен қатар байқала ма?",
      "Болашақ туралы ойлағанда үміттен гөрі шаршау басым сезіле ме?"
    ],
    youngAdults: [
      "Соңғы күндері оқу, жұмыс немесе жеке өмірге деген қызығушылығыңыз төмендеді ме?",
      "Көңіліңіз түсіп, өзіңізді ішкі бос күйде сезінетін кездер көбейді ме?",
      "Қарапайым міндеттердің өзі ауыр жүк болып көріне ме?",
      "Өзіңізге деген сенім азайып, үнемі өзіңізді кінәлай бересіз бе?",
      "Жақын адамдармен сөйлесуге немесе араласуға құлқыңыз болмай жүр ме?",
      "Ұйқы, тәбет немесе энергия деңгейіңіз айтарлықтай өзгерді ме?",
      "Алдағы уақыт туралы ойлағанда қуаныштан гөрі торығу басым ба?"
    ],
    adults: [
      "Күнделікті өмірдің мәні мен қуанышы азайып кеткендей сезіле ме?",
      "Жұмыс пен отбасылық міндеттерді орындауға ішкі күш жетіспей ме?",
      "Өзіңізді жиі түңілген, жабырқау немесе жалғыз сезінесіз бе?",
      "Бұрынғы қызығушылықтарыңыздан алыстап бара жатқаныңызды байқайсыз ба?",
      "Шаршау себебін нақты түсіндірмей-ақ ұзақ сақтала ма?",
      "Ұйқыңыз не тәбетіңіз көңіл күйіңізбен бірге өзгеріп жүр ме?",
      "Ертеңгі күнге сенім азайып, ішкі үміт әлсірегендей бола ма?"
    ]
  },
  insomnia: {
    teens: [
      "Кешке ұйықтайтын уақытта ойыңыз тынышталмай, ұзақ жатасыз ба?",
      "Емтихан, оқу немесе телефон қолдану салдарынан кеш ұйықтап жүрсіз бе?",
      "Түн ішінде бірнеше рет оянып кететін кездер жиі бола ма?",
      "Таңертең тұру қиын болып, күні бойы ұйқышылдық сезінесіз бе?",
      "Ұйқының жеткіліксіздігі сабақтағы зейініңізге әсер ете ме?",
      "Ұйықтар алдында мазасыздық немесе ішкі қысым күшейе ме?"
    ],
    youngAdults: [
      "Күн соңында шаршасаңыз да, ұйқыға кету қиын бола ма?",
      "Экран алдында ұзақ отыру түнгі тынығуыңызға кері әсер ете ме?",
      "Жұмыс, оқу немесе болашақ туралы ойлар ұйқыңызды бөле ме?",
      "Таңертең сергек оянудың орнына әлсіздік сезінесіз бе?",
      "Ұйқы тапшылығы көңіл күйіңіз бен өнімділігіңізге ықпал ете ме?",
      "Ұйықтар алдында мазасыздықты азайту қиын болып жүр ме?"
    ],
    adults: [
      "Түнде тез ұйықтап кете алмай, ұзақ уақыт сергек жатасыз ба?",
      "Жұмыс немесе отбасылық жауапкершілік туралы ойлар ұйқыға кедергі келтіре ме?",
      "Түн ортасында оянып, қайта ұйықтау қиын бола ма?",
      "Ұйқы сапасының төмендігі күндізгі энергияңызға әсер ете ме?",
      "Тынығу жеткіліксіз болғандықтан сабыр мен зейін төмендей ме?",
      "Ұйқы режимін сақтау қиын болып, күн тәртібі жиі бұзыла ма?"
    ]
  },
  anxiety: {
    teens: [
      "Болуы мүмкін жағдайлар туралы шамадан тыс уайымдайсыз ба?",
      "Көпшіліктің алдында сөйлеу немесе бағаланудан қорқу мазалай ма?",
      "Мазасыздықтан денеңізде ширығу сезіле ме?",
      "Ойыңызды тоқтату қиын болып, ұсақ нәрсеге алаңдай бересіз бе?",
      "Қауіп болмаса да, іштей мазасыз күйде жүресіз бе?"
    ],
    youngAdults: [
      "Болашақ, мансап немесе қарым-қатынас жайлы уайым жиі күшейе ме?",
      "Кәдімгі жағдайлардың өзінде ішкі алаңдаушылық жоғары бола ма?",
      "Мазасыздықтан шешім қабылдау қиындап кете ме?",
      "Жүрек қағуы, тыныстың тарылуы сияқты белгілер байқала ма?",
      "Ойыңыз тынышталмай, демалуға кедергі келтіре ме?"
    ],
    adults: [
      "Отбасы, жұмыс және тұрақтылық туралы ойлар жиі мазалай ма?",
      "Қауіпсіз жағдайда да іштей алаңдау сезімі сақтала ма?",
      "Мазасыздық салдарынан ұйқыңыз немесе зейініңіз бұзыла ма?",
      "Күтпеген жағдайлар туралы тым көп ойлайсыз ба?",
      "Ішкі уайым дене ширығуымен қатар жүреді ме?"
    ]
  },
  loneliness: {
    teens: [
      "Өзіңізді түсінетін адам аз сияқты көріне ме?",
      "Достар арасында болсаңыз да, жалғыздық сезіле ме?",
      "Ішкі күйіңізді бөлісу қиын болып жүр ме?",
      "Қолдау жетіспегендей көрінетін сәттер жиі бола ма?",
      "Жалғыздық көңіл күйіңізге әсер ете ме?"
    ],
    youngAdults: [
      "Айналаңызда адамдар болса да, ішкі жақындық жетіспей ме?",
      "Жеке мәселелеріңізді бөлісуге сенімді адам табу қиын ба?",
      "Жұмыс не оқу қарқыны әлеуметтік байланысты әлсіретіп жүр ме?",
      "Өзіңізді еленбей қалғандай сезінесіз бе?",
      "Жалғыздық салдарынан көңіл күйіңіз төмендей ме?"
    ],
    adults: [
      "Көп міндет арасында өзіңізді жалғыз сезінетін сәттер бар ма?",
      "Жақындарыңызбен шынайы әңгіме азайғандай көріне ме?",
      "Эмоциялық қолдау жетіспейді деп ойлайсыз ба?",
      "Өзіңіздің ішкі күйіңізді ешкім түсінбейтіндей бола ма?",
      "Жалғыздық сезімі күнделікті қуатыңызды азайта ма?"
    ]
  },
  pressure: {
    teens: [
      "Оқу үлгерімі сізге тым үлкен қысым болып көріне ме?",
      "Үлгеру үшін тынығудан бас тартатын кездер бола ма?",
      "Емтихан немесе бағалау алдында қатты ширығасыз ба?",
      "Көп тапсырма арасында абдырап қаласыз ба?",
      "Қысым әсерінен өзіңізге сенім азая ма?"
    ],
    youngAdults: [
      "Оқу, жұмыс және жеке өмірді қатар алып жүру қиын ба?",
      "Мансапқа қатысты күтілім сізге ауыр салмақ түсіре ме?",
      "Уақыт тапшылығы жиі мазалай ма?",
      "Жауапкершілік көп болған сайын шаршау күшейе ме?",
      "Қысым салдарынан демалыс кейінге шегеріле бере ме?"
    ],
    adults: [
      "Жұмыс мерзімі мен отбасы міндеттері қатар қысым тудыра ма?",
      "Күнделікті жауапкершілік арасында өзіңізге уақыт қалмай ма?",
      "Тұрақтылықты сақтау үшін үнемі күш салуға тура келе ме?",
      "Уақыт жетпеуі жиі мазасыздандыра ма?",
      "Қысым көңіл күй мен ұйқыға әсер ете ме?"
    ]
  },
  burnout: {
    teens: [
      "Күн соңында ішкі қуатыңыз мүлде қалмайтындай сезім бола ма?",
      "Бұрынғы қызықты істер де шаршататын болды ма?",
      "Оқу мен міндеттерге ынта азайып жүр ме?",
      "Демалғаннан кейін де толық қалпына келмейтіндей боласыз ба?",
      "Эмоцияңызды басқару қиындап жүр ме?"
    ],
    youngAdults: [
      "Тұрақты шаршау демалыстан кейін де басылмай ма?",
      "Жұмыс немесе оқу сізді ішкі жағынан титықтатып жүр ме?",
      "Мотивация төмендеп, бәрі ауыр көріне ме?",
      "Адамдармен сөйлесуге де күш азайып кетті ме?",
      "Шаршау салдарынан ұсақ нәрсеге ашуланғыш болдыңыз ба?"
    ],
    adults: [
      "Ұзақ жүктемеден кейін өзіңізді толық қажыған күйде сезінесіз бе?",
      "Күнделікті міндеттерге ынта азайып бара ма?",
      "Демалыс алғанмен сергіп кету қиын ба?",
      "Эмоциялық тұрғыдан босап қалғандай сезінесіз бе?",
      "Қалжырау қарым-қатынас пен жұмысқа ықпал ете ме?"
    ]
  }
};

const sharedAdvicePool = [
  "Мен күн тәртібін реттегенде өзімді жақсырақ сезіне бастадым.",
  "Ұйқыны қалыпқа келтіру маған көмектесті.",
  "Жақын адаммен ашық сөйлесу жеңілдік берді.",
  "Кішкентай үзілістер де ойды сергітеді.",
  "Күн сайын аз уақыт серуендеу ішкі тыныштық берді.",
  "Өзіме тым қатал қарамауды үйрену маңызды болды.",
  "Әлеуметтік желіден уақытша үзіліс жасау пайдалы әсер етті."
];

const defaultMessages = [
  {
    id: createId(),
    author: "Аноним",
    message: "Өзіңізді әлсіз сезінсеңіз де, бұл уақытша кезең болуы мүмкін. Көмек сұрау - батыл қадам.",
    likes: 3
  },
  {
    id: createId(),
    author: "Аноним",
    message: "Ұйқыны реттеу мен күн тәртібін жазу маған көмектесті. Кішкентай қадамдардың өзі маңызды.",
    likes: 5
  }
];

const offensiveWords = ["ақымақ", "боқ", "боқауыз", "есалаң", "надан"];
const storageKey = "mindcare-kz-support-messages";

const appState = {
  selectedConcern: null,
  selectedAge: null,
  questions: [],
  currentQuestionIndex: 0,
  answers: [],
  currentAdviceIndex: 0
};

const concernOptions = document.getElementById("concern-options");
const ageOptions = document.getElementById("age-options");
const answerOptions = document.getElementById("answer-options");
const questionCounter = document.getElementById("question-counter");
const questionTitle = document.getElementById("question-title");
const questionText = document.getElementById("question-text");
const questionProgressBar = document.getElementById("question-progress-bar");
const resultPercent = document.getElementById("result-percent");
const resultProgressBar = document.getElementById("result-progress-bar");
const resultLevel = document.getElementById("result-level");
const resultDescription = document.getElementById("result-description");
const advisorTitle = document.getElementById("advisor-title");
const advisorText = document.getElementById("advisor-text");
const recommendationBlock = document.getElementById("recommendation-block");
const showAnotherTipBtn = document.getElementById("show-another-tip-btn");
const nextQuestionBtn = document.getElementById("next-question-btn");
const toAgeStepBtn = document.getElementById("to-age-step");
const startTestBtn = document.getElementById("start-test-btn");
const restartTestBtn = document.getElementById("restart-test-btn");
const supportForm = document.getElementById("support-form");
const authorNameInput = document.getElementById("author-name");
const supportMessageInput = document.getElementById("support-message");
const formFeedback = document.getElementById("form-feedback");
const messagesContainer = document.getElementById("messages-container");
const messageCountBadge = document.getElementById("message-count-badge");

function createId() {
  return `id-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function createChoiceButton(key, value, container, onSelect) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "choice-card";
  button.dataset.value = key;
  button.innerHTML = `<strong>${value.title}</strong><span>${value.description}</span>`;
  button.addEventListener("click", () => onSelect(key));
  container.appendChild(button);
}

function renderConcernOptions() {
  concernOptions.innerHTML = "";

  Object.entries(concernDetails).forEach(([key, value]) => {
    createChoiceButton(key, value, concernOptions, (selectedKey) => {
      appState.selectedConcern = selectedKey;
      highlightSelection(concernOptions, selectedKey);
      toAgeStepBtn.disabled = false;
    });
  });
}

function renderAgeOptions() {
  ageOptions.innerHTML = "";

  Object.entries(ageGroups).forEach(([key, value]) => {
    createChoiceButton(key, value, ageOptions, (selectedKey) => {
      appState.selectedAge = selectedKey;
      highlightSelection(ageOptions, selectedKey);
      startTestBtn.disabled = false;
    });
  });
}

function highlightSelection(container, selectedValue) {
  container.querySelectorAll(".choice-card").forEach((card) => {
    card.classList.toggle("selected", card.dataset.value === selectedValue);
  });
}

function showStep(stepNumber) {
  document.querySelectorAll(".test-step").forEach((step) => {
    step.classList.toggle("active", Number(step.dataset.step) === stepNumber);
  });

  document.querySelectorAll(".step-pill").forEach((pill) => {
    pill.classList.toggle("active", Number(pill.dataset.stepPill) === stepNumber);
  });
}

function buildQuestionSet() {
  appState.questions = questionBank[appState.selectedConcern][appState.selectedAge];
  appState.currentQuestionIndex = 0;
  appState.answers = new Array(appState.questions.length).fill(null);
}

function renderCurrentQuestion() {
  const question = appState.questions[appState.currentQuestionIndex];
  const concernName = concernDetails[appState.selectedConcern].title;

  questionCounter.textContent = `${appState.currentQuestionIndex + 1} / ${appState.questions.length}`;
  questionTitle.textContent = `${concernName} бойынша сұрақ`;
  questionText.textContent = question;
  questionProgressBar.style.width = `${
    ((appState.currentQuestionIndex + 1) / appState.questions.length) * 100
  }%`;

  answerOptions.innerHTML = "";

  likertOptions.forEach((option, index) => {
    const answerButton = document.createElement("button");
    answerButton.type = "button";
    answerButton.className = "answer-card";
    answerButton.innerHTML = `<strong>${option.label}</strong><small>${option.hint}</small>`;

    if (appState.answers[appState.currentQuestionIndex] === index) {
      answerButton.classList.add("selected");
    }

    answerButton.addEventListener("click", () => {
      appState.answers[appState.currentQuestionIndex] = index;
      answerOptions.querySelectorAll(".answer-card").forEach((card) => {
        card.classList.remove("selected");
      });
      answerButton.classList.add("selected");
      nextQuestionBtn.disabled = false;
      nextQuestionBtn.textContent =
        appState.currentQuestionIndex === appState.questions.length - 1
          ? "Нәтижені көру"
          : "Келесі сұрақ";
    });

    answerOptions.appendChild(answerButton);
  });

  nextQuestionBtn.disabled = appState.answers[appState.currentQuestionIndex] === null;
  nextQuestionBtn.textContent =
    appState.currentQuestionIndex === appState.questions.length - 1
      ? "Нәтижені көру"
      : "Келесі сұрақ";
}

function calculatePercentage() {
  const totalScore = appState.answers.reduce((sum, answerIndex) => {
    return sum + likertOptions[answerIndex].score;
  }, 0);
  const maxScore = appState.questions.length * 4;
  return Math.round((totalScore / maxScore) * 100);
}

function getResultMeta(percentage) {
  if (percentage <= 34) {
    return {
      level: "Қазіргі жағдайыңыз тұрақты, бірақ өзіңізге көңіл бөлуді ұмытпаңыз",
      description:
        "Сіздің жауаптарыңызда айқын жоғары жүктеме байқалмайды. Дегенмен демалыс, ұйқы және тұрақты қолдау әдеттерін сақтаған дұрыс.",
      statusClass: "low"
    };
  }

  if (percentage <= 64) {
    return {
      level: "Сізде эмоционалдық жүктеме байқалады, қолдау мен демалыс маңызды",
      description:
        "Қазіргі кезеңде ішкі қысым жиналып тұрғаны көрінеді. Күн тәртібін реттеу, эмоцияны бөлісу және тынығуға уақыт бөлу пайдалы болуы мүмкін.",
      statusClass: "medium"
    };
  }

  return {
    level: "Сізге психолог немесе сенімді маман көмегі қажет болуы мүмкін",
    description:
      "Жауаптарыңыз эмоциялық қысымның жоғары екенін көрсетеді. Бұл медициналық қорытынды емес, бірақ кәсіби қолдауға жүгіну маңызды болуы мүмкін.",
    statusClass: "high"
  };
}

function buildAdvisorText(percentage) {
  const isHigh = percentage >= 65;
  const adviceMap = {
    stress: {
      teens:
        "Оқу қысымы мен емтихан уайымы байқалады. Дайындықты шағын бөліктерге бөліп, ұйқыны қысқартпауға және сенімді ересек адаммен сөйлесуге тырысыңыз.",
      youngAdults:
        "Міндеттер мен болашаққа қатысты ойлар стресс тудыруы мүмкін. Істерді басымдыққа бөліп, демалыс уақытын күн тәртібіне қосуды ұмытпаңыз.",
      adults:
        "Жұмыс пен отбасы арасындағы қысым сезіледі. Міндеттерді бөлісу, кешкі тынығу уақытын белгілеу және өзіңізге шағын бос кеңістік беру пайдалы."
    },
    depression: {
      teens:
        "Көңіл күйдің төмендеуі ұзақ сақталса, сенімді ересек адаммен, ата-анамен немесе мектеп маманымен сөйлескен жөн. Жалғыз қалмауға тырысыңыз.",
      youngAdults:
        "Қызығушылықтың азаюы мен торығу байқалса, жүктемені азайтып, жақын адаммен немесе маманмен ашық әңгіме бастау пайдалы болуы мүмкін.",
      adults:
        "Егер шаршау мен жабырқау ұзаққа созылса, ішкі күйді елемей қалдырмаған дұрыс. Жақын қолдау мен кәсіби кеңес бұл кезеңді жеңілдетуі мүмкін."
    },
    insomnia: {
      teens:
        "Ұйықтар алдында телефонды ертерек шетке қойып, кешкі тыныш режим қалыптастыру маңызды. Оқу мен демалыс теңдігі ұйқы сапасын жақсартуы мүмкін.",
      youngAdults:
        "Экран уақытын азайтып, бір уақытта ұйықтау әдетін қалыптастыру пайдалы. Кешкі кофеинді шектеу мен тыныс жаттығулары да әсер етуі мүмкін.",
      adults:
        "Кешкі ой жүктемесін азайту үшін тыныш рәсім жасаңыз: жарықты бәсеңдету, телефоннан алыстау және ұйқы уақытын тұрақтандыру маңызды."
    },
    anxiety: {
      teens:
        "Ішкі алаңдаушылық күшейсе, сезіміңізді атауға және сенімді адаммен бөлісуге тырысыңыз. Терең тыныс алу мен қысқа серуен көмектесуі мүмкін.",
      youngAdults:
        "Мазасыз ойларды жазып, шешілетін және кейінге қалатын істерді ажырату пайдалы. Демалысты кейінге қалдырмаңыз.",
      adults:
        "Мазасыздықты күшейтетін ойлар көбейсе, күнделікті жүктемені шектеу және тынысқа назар аудару тәжірибелері жеңілдік беруі мүмкін."
    },
    loneliness: {
      teens:
        "Жалғыздық сезімі күшейсе, бір сенімді доспен немесе ересек адаммен ашық сөйлесуден бастаңыз. Аз да болса шынайы байланыс маңызды.",
      youngAdults:
        "Ішкі оқшаулануды азайту үшін тұрақты байланысқа шағын қадам жасаңыз: қысқа хабарлама, қоңырау немесе кездесу көмектесе алады.",
      adults:
        "Қолдау шеңберін қайта жандандыруға тырысыңыз. Сенімді адаммен жүйелі сөйлесу жалғыздық салмағын жеңілдетуі мүмкін."
    },
    pressure: {
      teens:
        "Оқу қысымы күшейсе, күн жоспарын қысқа бөліктерге бөліп, өзіңізден мінсіздікті емес, тұрақтылықты күткен дұрыс.",
      youngAdults:
        "Оқу мен мансап жүктемесін қатар алып жүруде демалыс уақытын кестеге енгізу аса маңызды. Бәрін жалғыз көтеруге тырыспаңыз.",
      adults:
        "Жауапкершілік көп болса, міндеттерді басымдыққа бөліп, мүмкін болса бөлісуді қарастырған жөн. Демалыс та жоспардың бір бөлігі болуы керек."
    },
    burnout: {
      teens:
        "Эмоциялық шаршау байқалса, сабақтан тыс тынығатын уақытты көбейтіп, өзіңізге қойылатын талапты сәл жеңілдету пайдалы болуы мүмкін.",
      youngAdults:
        "Қалжырау ұзаққа созылса, жүктемені азайтып, қалпына келу уақытын саналы түрде белгілеңіз. Үзіліс әлсіздік емес, қажеттілік.",
      adults:
        "Қатты қажу кезінде өзіңізден үнемі жоғары өнімділік күтуді азайтып, міндеттердің бір бөлігін қайта қарау маңызды."
    }
  };

  let adviceText = adviceMap[appState.selectedConcern][appState.selectedAge];

  if (isHigh) {
    adviceText +=
      " Нәтиже жоғары болғандықтан, бұл күйді жалғыз көтермей, психологпен немесе сенімді маманмен сөйлесуді қарастырған дұрыс.";
  }

  return adviceText;
}

function buildAdviceCards() {
  const cards = [];

  for (let index = 0; index < 3; index += 1) {
    const adviceText =
      sharedAdvicePool[(appState.currentAdviceIndex + index) % sharedAdvicePool.length];
    cards.push(`<div class="suggestion-card"><strong>Қолдау пікірі</strong><p>${adviceText}</p></div>`);
  }

  return cards.join("");
}

function renderRecommendations(resultMeta, percentage) {
  recommendationBlock.className = `recommendation-block ${resultMeta.statusClass}`;
  showAnotherTipBtn.classList.add("hidden");

  if (percentage >= 65) {
    recommendationBlock.innerHTML = `
      <h3>Көмек жолдары</h3>
      <p>
        Сіздің нәтижелеріңіз эмоционалдық қысымның жоғары екенін көрсетеді. Жақын адаммен
        сөйлесіп, психолог немесе сенімді маман көмегіне жүгінгеніңіз дұрыс.
      </p>
      <div class="tip-suggestion-grid">
        <div class="suggestion-card"><strong>Сенімді адаммен сөйлесу</strong><p>Ішкі күйіңізді жалғыз көтермеңіз.</p></div>
        <div class="suggestion-card"><strong>Маманға жазылу</strong><p>Кәсіби қолдау жағдайды тереңірек түсінуге көмектеседі.</p></div>
        <div class="suggestion-card"><strong>Күн тәртібін реттеу</strong><p>Ұйқы, тамақ және демалыс уақытын тұрақтандыру маңызды.</p></div>
        <div class="suggestion-card"><strong>Демалыс уақытын көбейту</strong><p>Қалпына келу үшін күн ішінде қысқа үзіліс те пайдалы.</p></div>
      </div>
    `;
    return;
  }

  appState.currentAdviceIndex = 0;
  recommendationBlock.innerHTML = `
    <h3>Анонимді кеңестер мен қолдау пікірлері</h3>
    <p>Сіздің нәтижеге сай басқа адамдардан келген жылы кеңестер төменде ұсынылады.</p>
    <div class="tip-suggestion-grid" id="support-tip-grid">
      ${buildAdviceCards()}
    </div>
  `;
  showAnotherTipBtn.classList.remove("hidden");
}

function animateResult(targetPercent) {
  let current = 0;
  const timer = setInterval(() => {
    current += 1;
    resultPercent.textContent = `${current}%`;
    resultProgressBar.style.width = `${current}%`;

    if (current >= targetPercent) {
      clearInterval(timer);
    }
  }, 12);
}

function showResults() {
  const percentage = calculatePercentage();
  const resultMeta = getResultMeta(percentage);

  resultLevel.textContent = resultMeta.level;
  resultDescription.textContent = resultMeta.description;
  advisorTitle.textContent = `${concernDetails[appState.selectedConcern].title} бойынша жеке кеңес`;
  advisorText.textContent = buildAdvisorText(percentage);
  resultPercent.textContent = "0%";
  resultProgressBar.style.width = "0%";

  renderRecommendations(resultMeta, percentage);
  showStep(4);
  animateResult(percentage);
}

function resetTest() {
  appState.selectedConcern = null;
  appState.selectedAge = null;
  appState.questions = [];
  appState.currentQuestionIndex = 0;
  appState.answers = [];
  appState.currentAdviceIndex = 0;

  toAgeStepBtn.disabled = true;
  startTestBtn.disabled = true;
  nextQuestionBtn.disabled = true;

  concernOptions.querySelectorAll(".choice-card").forEach((card) => card.classList.remove("selected"));
  ageOptions.querySelectorAll(".choice-card").forEach((card) => card.classList.remove("selected"));

  showStep(1);
}

function loadMessages() {
  const storedValue = localStorage.getItem(storageKey);

  if (!storedValue) {
    localStorage.setItem(storageKey, JSON.stringify(defaultMessages));
    return [...defaultMessages];
  }

  try {
    const parsedValue = JSON.parse(storedValue);
    return Array.isArray(parsedValue) ? parsedValue : [...defaultMessages];
  } catch (error) {
    return [...defaultMessages];
  }
}

function saveMessages(messages) {
  localStorage.setItem(storageKey, JSON.stringify(messages));
}

function renderMessages() {
  const messages = loadMessages();
  messageCountBadge.textContent = `${messages.length} пікір`;

  if (!messages.length) {
    messagesContainer.innerHTML = `
      <article class="support-message-card empty-state">
        <strong>Әзірге пікір жоқ</strong>
        <p>Алғашқы қолдау пікірін сіз қалдыра аласыз.</p>
      </article>
    `;
    return;
  }

  messagesContainer.innerHTML = messages
    .slice()
    .reverse()
    .map(
      (item) => `
        <article class="support-message-card">
          <div class="support-meta"><strong>${item.author}</strong></div>
          <p>${item.message}</p>
          <div class="support-card-actions">
            <span class="support-count">Қолдау саны: ${item.likes}</span>
            <button class="support-like-btn" type="button" data-message-id="${item.id}">
              Қолдау білдіру
            </button>
          </div>
        </article>
      `
    )
    .join("");
}

function containsOffensiveWord(text) {
  const normalizedText = text.toLowerCase();
  return offensiveWords.some((word) => normalizedText.includes(word));
}

function setFormFeedback(message, type) {
  formFeedback.textContent = message;
  formFeedback.className = `form-feedback ${type}`;
}

function handleMessageSubmit(event) {
  event.preventDefault();

  const author = authorNameInput.value.trim() || "Аноним";
  const message = supportMessageInput.value.trim();

  if (!message) {
    setFormFeedback("Хабарлама мәтінін бос қалдыруға болмайды.", "error");
    return;
  }

  if (containsOffensiveWord(message)) {
    setFormFeedback("Хабарламада қолайсыз сөздер бар. Мәтінді сыпайы түрде түзетіңіз.", "error");
    return;
  }

  const messages = loadMessages();
  messages.push({
    id: createId(),
    author,
    message,
    likes: 0
  });

  saveMessages(messages);
  renderMessages();
  supportForm.reset();
  setFormFeedback("Пікіріңіз сәтті жарияланды.", "success");
}

function handleSupportLike(event) {
  const likeButton = event.target.closest("[data-message-id]");

  if (!likeButton) {
    return;
  }

  const messages = loadMessages();
  const targetMessage = messages.find((item) => item.id === likeButton.dataset.messageId);

  if (!targetMessage) {
    return;
  }

  targetMessage.likes += 1;
  saveMessages(messages);
  renderMessages();
}

function bindEvents() {
  toAgeStepBtn.addEventListener("click", () => showStep(2));

  startTestBtn.addEventListener("click", () => {
    buildQuestionSet();
    renderCurrentQuestion();
    showStep(3);
  });

  document.querySelectorAll("[data-back-step]").forEach((button) => {
    button.addEventListener("click", () => {
      showStep(Number(button.dataset.backStep));
    });
  });

  nextQuestionBtn.addEventListener("click", () => {
    if (appState.answers[appState.currentQuestionIndex] === null) {
      return;
    }

    if (appState.currentQuestionIndex < appState.questions.length - 1) {
      appState.currentQuestionIndex += 1;
      renderCurrentQuestion();
      return;
    }

    showResults();
  });

  showAnotherTipBtn.addEventListener("click", () => {
    appState.currentAdviceIndex =
      (appState.currentAdviceIndex + 1) % sharedAdvicePool.length;

    const tipGrid = document.getElementById("support-tip-grid");
    if (tipGrid) {
      tipGrid.innerHTML = buildAdviceCards();
    }
  });

  restartTestBtn.addEventListener("click", resetTest);
  supportForm.addEventListener("submit", handleMessageSubmit);
  messagesContainer.addEventListener("click", handleSupportLike);
}

function init() {
  // Бастапқы интерфейсті дайындау және сақталған пікірлерді шығару.
  renderConcernOptions();
  renderAgeOptions();
  renderMessages();
  bindEvents();
}

init();
