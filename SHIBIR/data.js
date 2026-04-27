const pages = [
  { key: "samp", title: "સંપ", file: "samp.html", image: "SAMP.png", images: ["SAMP.png", "SAMP-2.png"] },
  { key: "das-bhav", title: "દાસભાવ", file: "das-bhav.html", image: "DAS-BHAV.png" },
  { key: "agna-upasana", title: "આજ્ઞા & ઉપાસના", file: "agna-upasana.html", image: "AGNA.png" },
  { key: "sahan", title: "સહન", file: "sahan.html", image: "SAHAN.png", images: ["SAHAN.png", "SAHAN-2.png"] },
  { key: "dhiraj", title: "ધીરજ", file: "dhiraj.html", image: "DHIRAJ.png", images: ["DHIRAJ.png", "DHIRAJ-2.png"] },
  { key: "niyam-dharma", title: "નિયમ-ધર્મ", file: "niyam-dharma.html", image: "NIYAM-DHARMA.png" }
];

const activityInfo = {
  samp: [
    { title: "Option 1: Hula Hoop Circle" },
    { title: "Objective", items: ["Pass the hula hoop around the entire circle without letting go of each other’s hands."] },
    { title: "Materials Needed", items: ["Hula hoop"] },
    { title: "Instructions", ordered: true, items: [
      "All team members stand in a circle.",
      "Everyone holds hands.",
      "Place the hula hoop between two people before they join hands.",
      "The team must move the hula hoop around the full circle.",
      "Players may use their arms, shoulders, head, legs, and body movement.",
      "Hands must stay connected at all times.",
      "If anyone lets go, the team must restart."
    ] },
    { title: "Extra Challenge", items: ["Try one round without talking."] },
    { title: "Option 2: Blindfold Bat and Ball Challenge" },
    { title: "Objective", items: ["Knock the soft ball off your partner’s head by following their instructions while blindfolded."] },
    { title: "Materials Needed", items: ["Soft foam bat or cushion bat", "Soft ball", "Blindfold", "Open space"] },
    { title: "Instructions", ordered: true, items: [
      "Divide participants into pairs.",
      "One participant balances a soft ball on their head.",
      "The other participant holds a soft foam bat and is blindfolded.",
      "The blindfolded participant must not swing randomly.",
      "The partner with the ball gives clear verbal instructions, such as “move one step forward,” “turn slightly left,” or “raise the bat a little.”",
      "The blindfolded participant follows only their partner’s guidance.",
      "The goal is to gently hit the ball off the partner’s head using the soft bat.",
      "Once the ball falls, the challenge is complete.",
      "Partners may switch roles after one round."
    ] },
    { title: "Safety Rules", items: [
      "Use only a soft bat and soft ball.",
      "The blindfolded person should swing gently.",
      "No hard hitting.",
      "A volunteer should stand nearby to make sure the game stays safe."
    ] },
    { title: "Extra Challenge", items: ["Make it a team relay where each pair gets one attempt, and the team with the most successful hits wins."] }
  ],
  "das-bhav": [
    { title: "Limbo Challenge" },
    { title: "Objective", items: ["Pass under the limbo bar as it gets lower each round."] },
    { title: "Materials Needed", items: ["Limbo stick, rope, pool noodle, or any safe bar"] },
    { title: "Instructions", ordered: true, items: [
      "Two volunteers hold the limbo bar.",
      "One participant goes at a time.",
      "Each participant must pass under the bar by leaning backward.",
      "Hands should not touch the ground.",
      "If a participant touches the bar, falls, or uses hands for support, they are out for that round.",
      "After every round, lower the bar slightly.",
      "Continue until the final participant remains, or until the team completes the challenge."
    ] },
    { title: "Reflection Before Turn", items: ["Before going under the bar, each participant may share one way they can practice humility in daily life."] }
  ],
  "agna-upasana": [
    { title: "Blindfold Trust Walk" },
    { title: "Objective", items: ["Reach the finish line safely by following instructions from teammates."] },
    { title: "Materials Needed", items: ["Blindfold", "Cones or simple obstacles"] },
    { title: "Instructions", ordered: true, items: [
      "Choose one participant to be blindfolded.",
      "Set up a simple path with cones or safe obstacles.",
      "The blindfolded participant must walk from the start line to the finish line.",
      "Teammates may guide only by giving verbal instructions.",
      "No one may touch or physically move the blindfolded participant.",
      "The blindfolded participant must listen carefully and follow the instructions.",
      "If they touch an obstacle, pause and continue from that spot."
    ] },
    { title: "Extra Challenge", items: ["Allow only one teammate to give directions, while others remain silent."] }
  ],
  sahan: [
    { title: "Option 1: Ice Diamond Challenge" },
    { title: "Objective", items: ["Melt the ice using only your hands and retrieve the diamond inside."] },
    { title: "Materials Needed", items: ["Ice blocks with small plastic diamonds or objects frozen inside", "Tray or bowl", "Towels"] },
    { title: "Instructions", ordered: true, items: [
      "Each team receives one ice block with a diamond inside.",
      "Participants must melt the ice using only their hands.",
      "They may take turns holding and rubbing the ice.",
      "No tools, breaking, hitting, or throwing the ice is allowed.",
      "The team continues until the diamond is fully released.",
      "Once the diamond is free, the challenge is complete."
    ] },
    { title: "Option 2: Chair Position Challenge" },
    { title: "Objective", items: ["Stay in a sitting position without using an actual chair for as long as possible."] },
    { title: "Materials Needed", items: ["Open space", "Timer"] },
    { title: "Instructions", ordered: true, items: [
      "Participants stand with their back against a wall or in an open space.",
      "They slowly bend their knees and sit as if they are sitting on an invisible chair.",
      "Their knees should be bent, and their back should stay straight.",
      "Hands should not touch the ground, wall, knees, or any other support.",
      "Once the participant stands up, falls, or takes support, they are out.",
      "The person who holds the position the longest wins."
    ] },
    { title: "Safety Note", items: ["Do not force anyone to continue if they feel pain or discomfort. This game should test endurance, not cause injury."] }
  ],
  dhiraj: [
    { title: "Option 1: Steady Steps Challenge" },
    { title: "Objective", items: ["Carry a cup of water from start to finish without spilling too much."] },
    { title: "Materials Needed", items: ["Plastic cups", "Water", "Tape for start and finish lines"] },
    { title: "Instructions", ordered: true, items: [
      "Fill a cup of water up to the marked line.",
      "One participant starts at the start line.",
      "They must walk slowly to the finish line while holding the cup.",
      "The water must stay above the marked line.",
      "If too much water spills, the participant must restart.",
      "Each team member can take a turn.",
      "The challenge is complete when the team successfully carries the water to the finish line."
    ] },
    { title: "Extra Challenge", items: ["Ask participants to walk with the cup using one hand only."] },
    { title: "Option 2: Pin-Drop Silence Challenge" },
    { title: "Objective", items: ["Remain completely silent while others try to distract you."] },
    { title: "Materials Needed", items: ["Open space", "Timer"] },
    { title: "Instructions", ordered: true, items: [
      "Four to six participants sit in a circle.",
      "Once the game begins, no one in the circle is allowed to speak, laugh loudly, or make noise.",
      "Other volunteers or team members stand around them and try to distract them in a safe and respectful way.",
      "They may make funny faces, say light jokes, or try to make them laugh.",
      "The participants sitting in the circle must remain calm, silent, and focused.",
      "If someone speaks, laughs loudly, or reacts too much, they are out.",
      "The participant who remains silent the longest wins."
    ] },
    { title: "Rules", items: [
      "No touching, shouting in someone’s ear, or saying anything disrespectful.",
      "Distractions should be fun, clean, and safe."
    ] }
  ],
  "niyam-dharma": [
    { title: "Balance Box Challenge" },
    { title: "Objective", items: ["Balance balloons on a tray while staying inside the marked boundary."] },
    { title: "Materials Needed", items: ["Tray or cardboard board", "Balloons", "Tape to mark a square on the floor"] },
    { title: "Instructions", ordered: true, items: [
      "Mark a square boundary on the floor using tape.",
      "Two team members stand inside the square and hold the tray together.",
      "Other team members gently toss balloons onto the tray.",
      "The two players must balance the tray and keep the balloons from falling.",
      "Players holding the tray must stay inside the square at all times.",
      "They cannot step outside the boundary.",
      "They cannot grab the balloons with their hands.",
      "The goal is to keep as many balloons as possible on the tray for a set time."
    ] },
    { title: "Rules", items: [
      "Hands can only hold the tray.",
      "Players must remain inside the boundary.",
      "If a balloon falls, it cannot be picked up again."
    ] }
  ]
};

const quizData = {
  samp: {
    heading: "સંપ",
    note: "ઝેર ખાઈને પણ સંપ રાખવો પડશે. - (પ્રમુખસ્વામી મહારાજ)",
    activityText: "",
    activityDetails: activityInfo.samp,
    questions: [
      {
        number: "1",
        question: "“અમે સૌ સ્વામીના બાળક, જીવીશું સ્વામીને માટે” - આ કીર્તનના રચયિતા કોણ છે?",
        options: ["પરમ ભગવદીય શંકરભાઈ", "મોતીભાઈ", "મહાપુરુષદાસ", "નારાયણ ભગત"],
        correct: 1,
        prasang: [
          "“અમે સૌ સ્વામીના બાળક, જીવીશું સ્વામીને માટે” - આ કીર્તનના રચયિતા મોતીભાઈ (મોતીભાઈ ભગવાનદાસ પટેલ) છે.",
          "મોતીભાઈમાં ખેતીની નિષ્ણાતતા અને વ્યવહાર કુશળતા ઉપરાંત સુંદર કવિની પ્રતિભા પણ હતી. ‘અમે સૌ સ્વામીના બાળક મરીશું શ્રીજીને માટે...’ આદિ ઘણાં કીર્તનોની રચના તેમણે કરી હતી.",
          "આણંદના મોતીભાઈ ભગવાનદાસ પટેલ શાસ્ત્રીજી મહારાજના અનન્ય ભક્ત હતા. તેમણે આ કીર્તન દ્વારા અક્ષર-પુરુષોત્તમ સિદ્ધાંત પ્રત્યેની શૂરવીરતા અને સમર્પણ ભાવ વ્યક્ત કર્યો છે. મહંત સ્વામી મહારાજ પણ આ કીર્તનના કેફ અને મહિમાની વારંવાર સ્મૃતિ કરે છે."
        ]
      },
      {
        number: "2",
        question: "શાસ્ત્રીજી મહારાજ જ્યારે વરતાલથી નીકળ્યા, ત્યારે તેમની સાથે કેટલા સંતો હતા?",
        options: ["ત્રણ", "પાંચ", "સાત", "આઠ"],
        correct: 1,
        prasang: [
          "શાસ્ત્રીજી મહારાજ જ્યારે સંવત 1962ના કાર્તિક સુદ 2 ના રોજ વરતાલથી નીકળ્યા, ત્યારે તેમની સાથે નીચે મુજબના પાંચ સાધુઓ હતા: 1. સાધુ રામરતનદાસ, 2. સાધુ ભક્તિજીવનદાસ, 3. સાધુ જ્ઞાનપ્રિયદાસ, 4. સાધુ રત્નજીવનદાસ, 5. સાધુ નીલકંઠદાસ.",
          "“શાસ્ત્રીજી મહારાજ વરતાલથી નીકળ્યા ત્યારે તેઓની સાથે પાંચ સાધુ હતા, પણ સંપ હતો તો પાંચસોને ડોલાવ્યા... એક રુચિવાળા બે જ હોય તે લાખ બરાબર છે.”",
          "આ પાંચ સાધુઓ અને શાસ્ત્રીજી મહારાજ એમ કુલ 6 સંતોનું મંડળ વરતાલથી નીકળ્યું હતું. “વડતાલથી નીકળ્યા ત્યારે 6 જ સાધુ હતા. તેમાંય ઉપાસનાનો ઝંડો ચાલુ જ રાખ્યો.”",
          "નીકળતી વખતે શાસ્ત્રીજી મહારાજે હરિકૃષ્ણ મહારાજ પાસે પ્રાર્થના કરી હતી કે, “મહારાજ! અમારે જુદું પડવાનો જરાય સંકલ્પ નથી, પણ જે આપની ઈચ્છાથી જુદા પડતા હોઈએ તો આપ અમારી સહાયમાં રહેજો અને અખંડ ભેગા રહેજો.”"
        ]
      }
    ]
  },
  "das-bhav": {
    heading: "દાસભાવ",
    note: "દાસ થઈને સેવા કરે તેનાથી વિઘ્ન બધાં ડરીને દૂર ભાગે છે. દાસાનુદાસ થઈને જે ભક્તની સેવા કરે તે સેવાથી જેવા ભગવાન પ્રસન્ન થાય છે તેવા બીજા કોઈ સાધનથી પ્રસન્ન થતા નથી. (પુરુષોત્તમ બોલ્યા પ્રીતે: 13/4)",
    activityText: "",
    activityDetails: activityInfo["das-bhav"],
    questions: []
  },
  "agna-upasana": {
    heading: "આજ્ઞા & ઉપાસના",
    note: "જેને ભગવાન ભજવા હોય તેનાથી બધાયની મરજી રાખી શકાય નહીં, તેનાથી તો ભગવાનની મરજી સચવાય. (સ્વામીની વાત: 5/59)",
    activityText: "",
    activityDetails: activityInfo["agna-upasana"],
    questions: [
      {
        number: "1",
        question: "“આ મૂંડાવ્યું છે તે પણ અક્ષર-પુરુષોત્તમ સારુ જ મૂંડાવ્યું છે.” આ મહાવાક્ય શાસ્ત્રીજી મહારાજે કયા મંદિર નિર્માણ વખતે કહ્યું હતું?",
        options: ["સારંગપુર", "બોચાસણ", "વઢવાણ", "ગોંડલ", "ગઢડા"],
        correct: 0,
        prasang: [
          "શાસ્ત્રીજી મહારાજે આ વાક્ય સારંગપુર મંદિરના નિર્માણ વખતે કહ્યું હતું.",
          "“ઠાકોર સાહેબ! આ દેહે જે કષ્ટ સહન કર્યા છે, તે મહાપ્રભુ શ્રીસહજાનંદ સ્વામી અને ગુણાતીતાનંદ સ્વામી સારું જ સહ્યાં છે અને આ મૂંડાવ્યું છે તે પણ અક્ષર-પુરુષોત્તમ સારુ જ મૂંડાવ્યું છે. માટે બાપુ! અમારા ઈષ્ટદેવ તો શ્રીસહજાનંદ સ્વામી અને ગુણાતીતાનંદ સ્વામી જ છે, અને તેમની જ મૂર્તિઓ મધ્ય મંદિરમાં બેસશે.”",
          "સારંગપુર મંદિરની પ્રતિષ્ઠા પૂર્વે જ્યારે લીમડીના ઠાકોર સાહેબે વિરોધીઓની ભંભેરણીથી પ્રેરાઈને મધ્ય મંદિરમાં રાધા-કૃષ્ણની મૂર્તિઓ પધરાવવાનો આગ્રહ કર્યો, ત્યારે શાસ્ત્રીજી મહારાજે અત્યંત ખુમારી અને નિડરતાથી આ શબ્દો કહ્યા હતા. તેમણે સ્પષ્ટ કર્યું હતું કે તેમનું સમગ્ર જીવન અને સાધુતા કેવળ અક્ષર-પુરુષોત્તમની ઉપાસનાના પ્રવર્તન માટે જ છે."
        ]
      },
      {
        number: "2",
        question: "શાસ્ત્રીજી મહારાજે વડતાલથી મહાપ્રસ્થાન ક્યારે કર્યું?",
        options: ["સંવત 1962 કાર્તિક વદ પૂર્ણિમા", "સંવત 1962 કાર્તિક સુદ પૂર્ણિમા", "સંવત 1962 કાર્તિક સુદ પાંચમ", "સંવત 1962 કાર્તિક સુદ બીજ"],
        correct: 3,
        prasang: [
          "શાસ્ત્રીજી મહારાજે વડતાલથી મહાપ્રસ્થાન સંવત 1962 કાર્તિક સુદ બીજ (કારતક સુદ 2) ના રોજ કર્યું હતું.",
          "“સંવત 1962, કાર્તિક સુદ 2 ના રોજ શાસ્ત્રીજી મહારાજ વડતાલથી નીકળ્યા.”",
          "આ ઐતિહાસિક પ્રસ્થાન અક્ષર-પુરુષોત્તમ ઉપાસનાના શુદ્ધ સિદ્ધાંતના પ્રવર્તન માટે હતું. વરતાલમાં વિરોધીઓ દ્વારા થતી હેરાનગતિ અને ઝેર આપવાના પ્રયત્નો છતાં, શાસ્ત્રીજી મહારાજ શ્રીજીમહારાજની આજ્ઞા અને ભગતજી મહારાજના વચનને માન આપીને અંતે વરતાલથી અલગ થયા હતા."
        ]
      },
      {
        number: "3",
        question: "“તમારા શિષ્યો ભવિષ્યમાં તમારી સોનાની મૂર્તિ પધરાવશે” - આ વાક્ય કોણે કહ્યું હતું?",
        options: ["કૃપાશંકર પંડ્યા", "પ્રભાશંકર જોશી", "દોલતરામભાઈ પંડ્યા", "કૃષ્ણરામ શાસ્ત્રી"],
        correct: 2,
        prasang: [
          "“તમારા શિષ્યો ભવિષ્યમાં તમારી સોનાની મૂર્તિ સ્થાપશે” - આ વાક્ય દોલતરામભાઈ પંડ્યાએ કહ્યું હતું.",
          "નડિયાદના સાક્ષર અને વરતાલ મંદિરના ટ્રસ્ટી દોલતરામભાઈ પંડ્યાએ જ્યારે શાસ્ત્રીજી મહારાજ પાસેથી વચનામૃતના આધારે અક્ષર-પુરુષોત્તમ ઉપાસનાની સ્પષ્ટતા સાંભળી, ત્યારે તેઓ અત્યંત પ્રભાવિત થયા હતા. તેમણે અનુભવ્યું કે શાસ્ત્રીજી મહારાજે જે કાર્ય કર્યું છે તે અદ્વિતીય છે, તેથી ભવિષ્યમાં તેમના શિષ્યો તેમની સુવર્ણ મૂર્તિ પધરાવશે તેવી ભવિષ્યવાણી કરી હતી.",
          "સને 1914માં જ્યારે શાસ્ત્રીજી મહારાજ નડિયાદ પધાર્યા, ત્યારે દોલતરામભાઈએ તેમને પોતાના ઘરે પધરામણી માટે નિમંત્રણ આપ્યું. પધરામણી દરમિયાન દોલતરામભાઈએ સ્વામીશ્રીને મનમાં ઘોળાતા પ્રશ્નો પૂછ્યા. શાસ્ત્રીજી મહારાજે વચનામૃતના આધારે અઢી કલાક સુધી અસ્ખલિત ધારામાં અક્ષર-પુરુષોત્તમ ઉપાસનાનો શુદ્ધ સિદ્ધાંત સમજાવ્યો.",
          "સ્વામીશ્રીની વાતો સાંભળી દોલતરામભાઈના હૈયાના કમાડ ખૂલી ગયા અને પૂર્વગ્રહો ઓગળી ગયા. તેઓ અત્યંત પ્રભાવિત થઈને બોલી ઊઠ્યા: “સ્વામી! આ તો જે કાર્ય કરવા મહારાજને અવતાર ધરી ફરીથી આવવું પડે, તે કાર્ય આપે કર્યું છે. આપની મહત્તા અપાર છે. આજે તો આપે મહારાજ અને ગુણાતીતાનંદ સ્વામીની ધાતુની મૂર્તિયું પધરાવી છે. પણ ભવિષ્યમાં તમારા શિષ્યો, તમારી સુવર્ણની મૂર્તિઓ પધરાવશે! એવી આપની મોટપ વધી જશે.”",
          "આ વાતના 35 વર્ષ પછી, 1949માં અટલાદરા ખાતે શાસ્ત્રીજી મહારાજના 85મા જન્મજયંતિ મહોત્સવે તેમની ભવ્ય સુવર્ણતુલા કરવામાં આવી. 1981માં સારંગપુર ખાતે સ્મૃતિ મંદિર તૈયાર થયું ત્યારે દોલતરામ પંડ્યાની આ વાતની પૂર્તિ યાદ કરાઈ."
        ]
      },
      {
        number: "5",
        question: "સોમા ભગતે શાસ્ત્રીજી મહારાજની આજ્ઞાથી કયા મંદિર નિર્માણમાં દોરડા બાંધવાની સેવા કરી?",
        options: ["ગઢડા", "બોચાસણ", "સારંગપુર", "વડતાલ"],
        correct: 2,
        prasang: [
          "સોમા ભગતે શાસ્ત્રીજી મહારાજની આજ્ઞાથી સારંગપુર મંદિર નિર્માણમાં દોરડા (રાંઢવા) બાંધવાની સેવા કરી હતી.",
          "“ઠાકોરજીના વચલા મંદિરનો તરઘટનો પથ્થર આશરે 150 મણનો, જાડા રાંઢવાના સાત બંધથી બાંધેલો ઉપર ચઢતો હતો... સ્વામીશ્રીએ... સોમા ભગત તરફ ફરીને તેમને કહ્યું: ‘પથ્થર ઉપર ચઢીને તૂટેલાં રાંઢવાં બાંધી દ્યો.’”",
          "સારંગપુર મંદિરના નિર્માણ સમયે 150 મણનો પથ્થર જ્યારે સાતમાંથી છ દોરડા તૂટી જવાથી એક જ દોરડા પર લટકી રહ્યો હતો, ત્યારે શાસ્ત્રીજી મહારાજની આજ્ઞાથી સોમા ભગતે પોતાના જીવના જોખમે તે લટકતા પથ્થર પર ચઢીને તૂટેલા દોરડા ફરીથી બાંધ્યા હતા."
        ]
      },
      {
        number: "6",
        question: "શાસ્ત્રીજી મહારાજે વડતાલથી મહાપ્રસ્થાન કેમ કર્યું?",
        options: ["સુખથી ભજન કરવા", "જાનનું જોખમ", "હરિભક્તનો આગ્રહ", "અક્ષરપુરુષોત્તમ જ્ઞાનનું પ્રવર્તન કરવા માટે"],
        correct: 3,
        prasang: [
          "શાસ્ત્રીજી મહારાજે વડતાલથી મહાપ્રસ્થાન અક્ષરપુરુષોત્તમ જ્ઞાનનું પ્રવર્તન કરવા માટે કર્યું હતું.",
          "“શાસ્ત્રીજી મહારાજનું વરતાલથી આ મહાપ્રસ્થાન શ્રીજીના સંકલ્પોની પૂર્તિ માટે હતું, અક્ષરપુરુષોત્તમની શુદ્ધ અને સર્વોપરી ઉપાસનાનાં મંદિરોની સ્થાપના માટેનું હતું.”",
          "શાસ્ત્રીજી મહારાજને વરતાલમાં જાનનું જોખમ હતું અને હરિભક્તોનો આગ્રહ પણ હતો, પરંતુ તેમનું મુખ્ય લક્ષ્ય ભગવાન સ્વામિનારાયણનો હૃદ્ગત સિદ્ધાંત—અક્ષરપુરુષોત્તમ ઉપાસના—વિશ્વમાં પ્રવર્તાવવાનું હતું. તેમણે અનુભવ્યું કે વરતાલમાં રહીને આ શુદ્ધ ઉપાસનાનું કાર્ય કરવું અસંભવ છે, તેથી તેમણે સંસ્થાની જાહોજલાલી છોડીને આ કઠિન માર્ગ પસંદ કર્યો."
        ]
      }
    ]
  },
  sahan: {
    heading: "સહન",
    note: "સહન કરવું એ સંતનો માર્ગ છે. જે સહન ન કરે તે અસુરનો માર્ગ છે. તમને સહન કરાવવું અને પાકા કરવા તેમાં અમારી પ્રસન્નતા છે. (મહંતસ્વામી મહારાજ)",
    activityText: "",
    activityDetails: activityInfo.sahan,
    questions: [
      {
        number: "1",
        question: "BAPS સંસ્થાનું સૌપ્રથમ મંદિર શાસ્ત્રીજી મહારાજે ક્યાં બનાવ્યું?",
        options: ["આણંદ", "મહેળાવ", "બોચાસણ", "વઢવાણ"],
        correct: 2,
        prasang: [
          "બોચાસણ મંદિર એ શાસ્ત્રીજી મહારાજ દ્વારા નિર્મિત BAPS સંસ્થાનું સૌપ્રથમ શિખરબદ્ધ મંદિર છે, જે ભગવાન સ્વામિનારાયણના સંકલ્પ અને વચનને સાકાર કરવા માટે બાંધવામાં આવ્યું હતું.",
          "ભગવાન સ્વામિનારાયણે બોચાસણના ભક્ત કાશીદાસ મોટાને વચન આપ્યું હતું કે, “તમારે ત્યાં અમારે મંદિર કરવું છે... અમે અહીં ધામ સહિત બિરાજીશું.” આ વચનને પૂર્ણ કરવા શાસ્ત્રીજી મહારાજે બોચાસણની પસંદગી કરી હતી.",
          "માગશર વદ 1, સંવત 1963ના રોજ પાયા ખોદવાનું શરૂ થયું અને માત્ર 193 દિવસમાં મંદિર તૈયાર થઈ ગયું. સંવત 1963, વૈશાખ સુદ 15 (5 જૂન, 1907) ના રોજ શાસ્ત્રીજી મહારાજે મધ્ય મંદિરમાં શ્રી અક્ષર-પુરુષોત્તમ મહારાજની મૂર્તિઓ પધરાવી હતી.",
          "મંદિરના પાયા ખોદતી વખતે સોનાના સિક્કા ભરેલા ચરુ નીકળ્યા હતા, પરંતુ શાસ્ત્રીજી મહારાજે તેને અડક્યા વિના દટાવી દીધા અને કહ્યું કે, “આપણે તો અહીં મૂર્તિમાન લક્ષ્મી બેસાડીશું, એટલે બ્રહ્માંડની લક્ષ્મી તણાઈને આવશે.”"
        ]
      },
      {
        number: "2",
        question: "“આ મુંડાવ્યું છે તે અક્ષરપુરુષોત્તમ માટે મુંડાવ્યું છે.” - આ વાક્ય આપણને શું સમજાવે છે?",
        options: ["સંસ્થાના વિકાસ માટે સહન કરેલી તકલીફો", "અક્ષરપુરુષોત્તમનો સિદ્ધાંત", "સત્પુરુષ માટે હોમાઈ જવાનો ભાવ", "ઉપરના તમામ"],
        correct: 3,
        prasang: []
      }
    ]
  },
  dhiraj: {
    heading: "ધીરજ",
    note: "નિર્માનીપણું, ધીરજ અને ક્ષમા હોય, તે ત્રણ ગુણથી પાર થઈ ચૂક્યો. (મહંતસ્વામી મહારાજ)",
    activityText: "",
    activityDetails: activityInfo.dhiraj,
    questions: [
      {
        number: "1",
        question: "સારંગપુરમાં સુવર્ણ જડિત મંદિરના દર્શન શાસ્ત્રીજી મહારાજે કોને કરાવ્યા?",
        options: ["પરમ ભગવદીય આશાભાઈ", "પરમ ભગવદીય ઈશ્વરભાઈ", "પરમ ભગવદીય છગનભાઈ", "પરમ ભગવદીય રણછોડભગત"],
        correct: 2,
        prasang: [
          "સારંગપુરમાં છગનલાલ ગગાભાઈ ખત્રી સાથે જોડાયેલો મુખ્ય પ્રસંગ મંદિરની લખણી વખતે થયો હતો, જેમાં શાસ્ત્રીજી મહારાજે તેમને મંદિરનું દિવ્ય દર્શન કરાવ્યું હતું.",
          "સારંગપુરમાં પીઠા ખાચરના ઓરડામાં સભા ભરાઈ હતી ત્યારે શાસ્ત્રીજી મહારાજે છગનભાઈને મંદિરની લખણીમાં પહેલ કરવા કહ્યું. છગનભાઈએ નમ્રતાથી પોતાની અસમર્થતા દર્શાવી, છતાં સ્વામીશ્રીની મરજીથી તેમણે રૂ. 35ની સેવા લખાવી. છગનભાઈને મનમાં આશ્ચર્ય થયું કે આટલી નાની રકમમાં લાખો રૂપિયાનું મંદિર કેવી રીતે પૂરું થશે?",
          "“તમારા જેવા નિષ્ઠાવાન, મુક્તોનો એક રૂપિયો, એક કરોડ રૂપિયા બરાબર છે અને એમાં જ આ મંદિર પૂરું થવાનું છે.” એમ કહીને સ્વામીશ્રીએ હાથ લાંબો કર્યો. એટલામાં તો છગનભાઈને સુવર્ણ અને રત્નજડિત ત્રણ શિખરનું ગગનની સ્પર્ધા કરે એવું, મહામોટું મણિમય મંદિર અતિશય પ્રકાશે યુક્ત દેખાયું.",
          "આ દિવ્ય દર્શનમાંથી જાગ્રત થયા પછી છગનભાઈ સ્વામીશ્રીના ચરણોમાં નમી પડ્યા અને તેમના ઐશ્વર્યની સ્તુતિ કરવા લાગ્યા. તેમણે સ્વીકાર્યું કે સ્વામીશ્રી સાક્ષાત્ ઈશ્વરમૂર્તિ છે અને તેમના સંકલ્પમાં જ બધું સમાયેલું છે."
        ]
      },
      {
        number: "2",
        question: "ખાનદેશમાં અક્ષરપુરુષોત્તમ સત્સંગના પ્રવર્તનમાં સિંહફાળો કોનો રહ્યો છે?",
        options: ["સાધુ બાલમુકુન્દદાસ", "સાધુ વિજ્ઞાનદાસ", "સાધુ મહાપુરુષદાસ", "સાધુ નિર્ગુણદાસ"],
        correct: 3,
        prasang: [
          "ખાનદેશમાં અક્ષરપુરુષોત્તમ સત્સંગના પ્રવર્તનમાં સિંહફાળો સાધુ નિર્ગુણદાસનો રહ્યો છે.",
          "“આ બધો નિર્ગુણદાસ સ્વામીનો પ્રતાપ છે, તે ખાનદેશી હરિભક્તો સારી રીતે જાણતા હતા. નિર્ગુણદાસ સ્વામી ખાનદેશમાં દર વર્ષે પધારતા અને તેમને સૌને કથાવાર્તા કરી, સત્સંગ તાજો રાખતા.”",
          "નિર્ગુણદાસ સ્વામીએ ખાનદેશના હરિભક્તોને શાસ્ત્રીજી મહારાજનો મહિમા સમજાવીને દૃઢ નિષ્ઠા કરાવી હતી. તેમના જ ઉત્સાહથી સંવત 1975માં ખાનદેશમાં પ્રથમ વસંત પંચમીનો સમૈયો યોજાયો હતો. પ્રારંભિક બીજ રોપવાનું કાર્ય સાધુ વિજ્ઞાનદાસજીએ કર્યું હતું, પરંતુ તેને વ્યાપક બનાવીને ટકાવી રાખવાનું મુખ્ય કાર્ય નિર્ગુણદાસ સ્વામીએ કર્યું હતું."
        ]
      },
      {
        number: "3",
        question: "શાસ્ત્રીજી મહારાજે સતત 10 કલાક સુધી અક્ષરપુરુષોત્તમના મહિમાની વાતો કોને કરી?",
        options: ["જેઠાભાઈ", "ઉત્તમભાઈ", "બાલકૃષ્ણભાઈ", "આશાભાઈ"],
        correct: 0,
        prasang: [
          "શાસ્ત્રીજી મહારાજે સતત 10 કલાક સુધી અક્ષરપુરુષોત્તમના મહિમાની વાતો જેઠાભાઈને કરી હતી. તેઓ પાછળથી નિર્ગુણદાસ સ્વામી તરીકે ઓળખાયા.",
          "“એક દિવસે મંદિરની પ્રદક્ષિણામાં સાંજના 6 વાગ્યાથી સવારના 4 વાગ્યા સુધી શાસ્ત્રીજી મહારાજે તેમને અક્ષરપુરુષોત્તમના સિદ્ધાંતની અને ભગતજી મહારાજના મહિમાની વાતો કરી. દશ કલાકમાં શાસ્ત્રીજી મહારાજે તેમનું અંતર ભેદી નાખ્યું.”",
          "વડોદરાના સ્વામિનારાયણ મંદિરમાં જ્યારે જેઠાભાઈ અભ્યાસ કરતા હતા, ત્યારે શાસ્ત્રીજી મહારાજે તેમને વચનામૃત અને અન્ય શાસ્ત્રોના આધારે અક્ષર-પુરુષોત્તમ ઉપાસનાનો સિદ્ધાંત સમજાવ્યો હતો. આ 10 કલાકની અવિરત વાતોથી જેઠાભાઈને પૂર્વનું જ્ઞાન ઉદય થયું અને તેમની નિષ્ઠા દૃઢ થઈ ગઈ હતી."
        ]
      }
    ]
  },
  "niyam-dharma": {
    heading: "નિયમ-ધર્મ",
    note: "ધર્મ-નિયમ પાળવાથી જીવન ઉન્નત થાય છે અને અન્યને પણ સદાચાર પાળવાની પ્રેરણા મળે છે. (સત્સંગદીક્ષા: 274)",
    activityText: "",
    activityDetails: activityInfo["niyam-dharma"],
    questions: [
      {
        number: "1",
        question: "“શાસ્ત્રી યજ્ઞપુરુષદાસ જેવો સ્ત્રી-ધનનો ત્યાગી હજુ સુધી દીઠો નથી.” ઉપરોક્ત વાક્ય કોણે કહ્યું છે?",
        options: ["ઉલ્લાસ રામદાસભાઈ", "કોઠારી ગોરધનભાઈ", "કોઠારી બેચરભાઈ", "આચાર્ય લક્ષ્મીપ્રસાદ"],
        correct: 1,
        prasang: [
          "“શાસ્ત્રી યજ્ઞપુરુષદાસ જેવો સ્ત્રી-ધનનો ત્યાગી હજુ સુધી દીઠો નથી” આ વાક્ય વરતાલ મંદિરના કોઠારી ગોવર્ધનભાઈએ કહ્યું છે.",
          "“બે હજાર સાધુઓમાં શાસ્ત્રી યજ્ઞપુરુષદાસજી જેવો સર્વ પ્રકારે ધન-સ્ત્રીનો ત્યાગી મેં હજુ સુધી કોઈ દીઠો નથી. તેની વાતો મને સાકરના કટકા જેવી લાગે છે એટલે અહીં આવું છું.”",
          "કોઠારી ગોવર્ધનભાઈ જ્યારે શાસ્ત્રીજી મહારાજની કથા સાંભળવા જતા, ત્યારે અન્ય સાધુઓએ તેમને રોકવાનો પ્રયત્ન કર્યો હતો. તેના જવાબમાં ગોવર્ધનભાઈએ શાસ્ત્રીજી મહારાજની શુદ્ધ ત્યાગની મર્યાદા અને વિદ્વત્તાના વખાણ કરતા આ શબ્દો કહ્યા હતા."
        ]
      },
      {
        number: "2",
        question: "અક્ષરપુરુષોત્તમ ઉપાસનામાં સર્વોપરી, સર્વકર્તા, સાકાર તથા કઈ ચોથી બાબત સમજવાની છે?",
        options: ["સમજણ", "સત્પુરુષ", "સંત", "પ્રગટ"],
        correct: 3,
        prasang: [
          "અક્ષરપુરુષોત્તમ ઉપાસનામાં ચોથી બાબત પ્રગટ છે.",
          "“ઉપાસનામાં 4 વાત કરે છે ને! કર્તા, સાકાર, સર્વોપરી અને પ્રગટ! જો ‘પ્રગટ’ ના હોય તો એક અંગ જ ઊડી જાય 3 જ રહે.”",
          "BAPS સ્વામિનારાયણ સંસ્થાના સિદ્ધાંત મુજબ ઉપાસનાના મુખ્ય ચાર સ્તંભો છે: 1. સર્વકર્તાહર્તા: ભગવાન જ સર્વના કર્તા છે. 2. સાકાર: ભગવાન હંમેશા દિવ્ય સાકાર મૂર્તિમાન છે. 3. સર્વોપરી: ભગવાન સ્વામિનારાયણ સર્વ અવતારોના અવતારી અને સર્વોપરી છે. 4. પ્રગટ: ભગવાન હંમેશા ગુણાતીત સત્પુરુષ દ્વારા પૃથ્વી પર પ્રગટ રહે છે.",
          "યોગીજી મહારાજ પણ ઉપાસનાની વ્યાખ્યામાં આ બાબત સ્પષ્ટ કરતા કહે છે: “ઉપાસના શું? મહારાજ સર્વકર્તા, સાકાર, સર્વોપરી ને પ્રગટ. અક્ષરધામમાં છે તેવા જ અહીં છે. રહેવાનું ધામ તે ગુણાતીત. સંત મોક્ષનું દ્વાર.”"
        ]
      }
    ]
  }
};
