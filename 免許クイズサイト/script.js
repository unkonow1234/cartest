const questions = [
    {
        text: "シートベルトは交通事故があった場合の被害を大幅に軽減するとともに正しい運転姿勢を保たせることにより、運転中の疲労を軽減するなど、さまざまな効果がある。",
        answer: true
    },
    {
        text: "横断歩道や自転車横断帯とその手前から30メートル以内の場所ではほかの車を追い越したり、追い抜いたりしてはならない。",
        answer: true
    },
    {
        text: "歩行者専用道路は、沿道に車庫を持つ車であれば、警察署長の許可を受けなくても通行することができる。",
        answer: false
    },
    {
        text: "オートマチック車でエンジンをかけるときは、ハンドブレーキを引いてあるか、チェンジレバーは「P」の位置にあるかを目で確認して、ブレーキペダルをしっかり踏んだままエンジンを始動するのがよい。",
        answer: true
    },
    {
        text: "横断歩道のない交差点やその近くを歩行者が横断しているときは、警音器を鳴らして立ち止まらせて通行できる。",
        answer: false
    },
    {
        text: "ABSの装置を有する車は、車が停止するときの空走距離は発生しない。",
        answer: false
    },
    {
        text: "標識や標示で規制されていない一般道路の普通自動車の最高速度は、時速60キロメートルをこえて走行してはならない。",
        answer: true
    },
    {
        text: "見通しの悪い交差点や曲がり角、上り坂の頂上付近では、警音器を鳴らさなければならない。",
        answer: false
    },
    {
        text: "乗車定員11人以上29人以下のマイクロバスは、中型免許で運転ができる。",
        answer: true
    },
    {
        text: "追い越される時は、追い越しが終わるまで速度を上げてはならない。",
        answer: true
    },
    {
        text: "横断歩道のない交差点やその近くを横断している歩行者がいるときは、徐行や一時停止をするなどして、その歩行者の通行を妨げてはならない。",
        answer: true
    },
    {
        text: "路線バスが停留所から発進しようと合図をしている場合でも、急な用事があるとき、発進が遅れているときなどは追い抜いて進行してもよい。",
        answer: false
    },
    {
        text: "左折や右折と転回の合図の時期は、その行為をしようとするときの約3秒前である。",
        answer: false
    },
    {
        text: "仮運転免許で一般原動機付自転車を練習のため運転することができる。",
        answer: false
    },
    {
        text: "同一方向に二つの車両通行帯のある道路では、右側の車両通行帯を通行するのがよい。",
        answer: false
    },
    {
        text: "交差点を右折しようとしたところ、対向車が見えたが、対向車の妨げにならない十分な右折できるための距離がある場合は、通過を待たずに、先に右折することができる。",
        answer: true
    },
    {
        text: "バックで発進することは、危険なので車庫などに入れるときは、あらかじめ発進しやすいようにバックで入れておくのがよい。",
        answer: true
    },
    {
        text: "信号機のない交差点で交差道路の幅員が広い場合や交差道路が優先道路のときは、徐行して交差方向の車の進行を妨げてはならない。",
        answer: true
    },
    {
        text: "踏切とその手前30メートル以内の場所では、追い越しが禁止されている。",
        answer: true
    },
    {
        text: "踏切を通過するときは、変速しないで、発進したときの高速ギアのまま一気に通過するのがよい。",
        answer: false
    },
    {
        text: "歩道や路側帯のない道路では、路肩（路端から0.5メートルの部分）を通行することはできない。",
        answer: true
    },
    {
        text: "一方通行の道路を通行中、右折する場合に限り道路の右側部分にはみ出して通行してもよい",
        answer: true
    },
    {
        text: "一方通行になっている道路では、道路の中央から右側部分にはみ出して通行できるが、この場合には、はみ出し方ができるだけ少なくなるようにしなければならない。",
        answer: false
    },
    {
        text: "飲酒運転は、運転者本人の自覚によるもので、第三者が運転しようとしている人に酒を提供し又は酒をすすめても責任にはならない。",
        answer: false
    },
    {
        text: "けん引自動車である大型自動車、中型自動車、普通自動車、大型特殊自動車のいずれかで他の車をけん引するときは、けん引する自動車の種類に応じた運転免許のほかに、けん引免許が必要であるが、けん引される車の総重量（人や荷物をのせた状態での車全体の重さ）が750キログラム以下であれば、けん引免許は必要ない。",
        answer: true
    },
    {
        text: "シートベルトは、安全を守るためのものであり、同乗者の着用も運転者が指導しなければならない。",
        answer: true
    },
    {
        text: "車両通行帯のあるトンネル内は、自動車や一般原動機付自転車を追い越しすることができる。",
        answer: true
    },
    {
        text: "横断歩道や自転車横断帯に近づいたとき、横断する人や自転車がいないことが明らかな場合は、その手前から30メートル以内の場所でも前の車を追い越してもよい。",
        answer: false
    },
    {
        text: "客の乗り降りのため、安全地帯のない停留所で止まっている路面電車がいるときは、その後方で停止し、乗り降りする人や道路を横断する人がいなくなるまで待たなければならない。",
        answer: true
    },
    {
        text: "大型自動車などのすぐ後ろを通行しているときは、前方の状況が見えないので二つの車両通行帯にまたがって通行してもよい。",
        answer: false
    },
    {
        text: "交差点で右折しようとするときは、あらかじめできるだけ道路の中央に寄り、交差点の中心のすぐ内側を減速しながら通行しなければならない。",
        answer: false
    },
    {
        text: "車のブレーキのかけ方は、最初はできるだけ軽く踏み込み、それから必要な強さまで徐々に踏み込んで速度を落とすのがよい。",
        answer: true
    },
    {
        text: "通行区分が指定されている道路を通行中、緊急自動車が接近した場合は他の通行帯に進路を変更することができる。",
        answer: true
    },
    {
        text: "路面が雨に濡れ、タイヤがすり減っている場合の停止距離は、乾燥した路面でタイヤの状態がよい場合に比べて2倍程度に伸びることがある。",
        answer: true
    },
    {
        text: "運転者が疲れているときは、危険を認知してから判断するまでに時間がかかるので、空走距離は長くなる。",
        answer: true
    },
    {
        text: "後退するときの合図の時期は、後退しようとするときである。",
        answer: true
    },
    {
        text: "同一方向に進行しながら進路を変えようとするときは、進路を変えようとするときの約3秒前に合図を行う。",
        answer: true
    },
    {
        text: "歩行者用道路は、警察署長の許可を受けて、その沿道に車庫を持っている車などは、とくに歩行者に注意して減速すれば通行することができる。",
        answer: false
    },
    {
        text: "左側部分の幅が6メートル未満の見通しのよい道路では、右の部分にはみ出してほかの車を追い越すことができる。",
        answer: true
    },
    {
        text: "優先道路を通行している場合は、交差点の手前30メートル以内でも追い越しをすることができる。",
        answer: true
    },
    {
        text: "前車が右折などのため、道路の中央（一方通行の道路では右端）に寄っているときや路面電車を追い越すときは左側から追い越さなければならない。",
        answer: true
    },
    {
        text: "駐車場に入るために歩道や路側帯を横切る場合、歩行者がいるときは一時停止をし、その通行を妨げないようにしなければならないが歩行者がいないときは徐行すればよい。",
        answer: false
    },
    {
        text: "交差点やその付近以外の道路を通行中、後方から緊急自動車が近づいてきたときは、車は、道路の左側に寄って進路をゆずらなければならない。",
        answer: true
    },
    {
        text: "路面がぬれている道路でブレーキをかけるときは、ブレーキペダルを一気に踏み込むのがよい。",
        answer: false
    },
    {
        text: "横断歩道や自転車横断帯に近づいたとき、横断する歩行者や自転車がいないことが明らかな場合であっても、徐行して通行しなければならない。",
        answer: false
    },
    {
        text: "同一方向に車両通行帯がある道路で、黄色い実線で区画されている場合、追い越し以外ははみ出して通行してはならない。",
        answer: false
    },
    {
        text: "横断歩道や自転車横断帯に近づいたとき、歩行者や自転車が横断しているときは、一時停止しなければならないが、歩行者や自転車が横断しようとしているときは徐行すればよい。",
        answer: false
    },
    {
        text: "勾配の急な上り坂は、標識や標示で追い越しが禁止されていないとき、遅い車を追い越すことができる。",
        answer: true
    },
    {
        text: "道路が渋滞しているときは、路側帯を通行してもよい。",
        answer: false
    },
    {
        text: "警察署や消防署などの前に停止禁止部分の標示がされていても、その標示は緊急時のものであるから、緊急時以外であれば標示部分に入って停止してもよい。",
        answer: false
    },
    {
        text: "クリープ現象とは、オートマチック車のチェンジレバーを「D」の位置に入れ、アクセルペダルを軽く踏んだときに走り出す現象をいう。",
        answer: false
    },
    {
        text: "交差点に入ろうとしているとき、緊急自動車が近づいてきたときは、直ちに交差点で一時停止し、緊急自動車に進路をゆずらなければならない。",
        answer: false
    },
    {
        text: "横断歩道や自転車横断帯と、その手前で停止している車があるときは、そのそばを通って前方に出る前に安全確認をして減速しながら通行しなければならない。",
        answer: false
    },
    {
        text: "道路外に出るため、左折しようとするときは、あらかじめ道路の左側に寄るよりも、その直前に寄るほうがよい。",
        answer: false
    },
    {
        text: "停止距離とは空走距離と制動距離を合わせたものである。",
        answer: true
    },
    {
        text: "標識や標示がない一般道路では、普通貨物自動車の最高速度は時速50キロメートルである。",
        answer: false
    },
    {
        text: "標識や標示がない一般道路では、普通貨物自動車の最高速度は時速50キロメートルである。",
        answer: false
    }
];


let currentQuestion = 0;
let correctCount = 0;
let isAnswered = false;

let quizQuestions = [];
const QUIZ_COUNT = 10;

const menu = document.getElementById("menu");
const quizArea = document.getElementById("quizArea");
const startButton = document.getElementById("startButton");
const question = document.getElementById("question");
const result = document.getElementById("result");
const progress = document.getElementById("progress");
const maruBtn = document.getElementById("maruBtn");
const batuBtn = document.getElementById("batuBtn");

startButton.addEventListener("click", startQuiz);

maruBtn.addEventListener("click", function () {
    checkAnswer(true);
});

batuBtn.addEventListener("click", function () {
    checkAnswer(false);
});

function startQuiz() {
    menu.style.display = "none";
    quizArea.style.display = "block";

    currentQuestion = 0;
    correctCount = 0;
    isAnswered = false;

    document.querySelector(".answer-buttons").style.display = "flex";

    quizQuestions = [...questions]
        .sort(() => Math.random() - 0.5)
        .slice(0, QUIZ_COUNT);

    showQuestion();
}

function showQuestion() {
    isAnswered = false;

    progress.textContent =
        "問題 " + (currentQuestion + 1) + " / " + QUIZ_COUNT;

    question.textContent =
        quizQuestions[currentQuestion].text;

    result.textContent = "";
    result.className = "";
}

function checkAnswer(userAnswer) {

    if (isAnswered) {
        return;
    }

    isAnswered = true;

    if (userAnswer === quizQuestions[currentQuestion].answer) {

        correctCount++;

        result.textContent = "正解";
        result.className = "correct";

    } else {

        result.textContent = "不正解";
        result.className = "incorrect";

    }

    setTimeout(function () {

        currentQuestion++;

        if (currentQuestion < QUIZ_COUNT) {
            showQuestion();
        } else {
            showResult();
        }

    }, 1000);
}

function showResult() {

    const incorrectCount =
        Math.max(0, QUIZ_COUNT - correctCount);

    const percentage =
        Math.min(
            100,
            Math.round((correctCount / QUIZ_COUNT) * 100)
        );

    const isPass = percentage >= 90;

    progress.textContent = "リザルト";

    question.innerHTML =
        "<h2>クイズ終了！</h2>" +
        "<h1 style='color:" +
        (isPass ? "red" : "blue") +
        "'>" +
        (isPass ? "合格" : "不合格") +
        "</h1>" +
        "<p>正解数：" + correctCount + "問</p>" +
        "<p>不正解数：" + incorrectCount + "問</p>" +
        "<p>正答率：" + percentage + "%</p>" +
        "<br><br>" +
        "<button onclick='goHome()'>ホームへ戻る</button>";

    document.querySelector(".answer-buttons").style.display = "none";

    result.textContent = "";
    result.className = "";
}

function goHome() {

    quizArea.style.display = "none";
    menu.style.display = "block";

    result.textContent = "";
    result.className = "";

    progress.textContent = "";

    document.querySelector(".answer-buttons").style.display = "flex";
}