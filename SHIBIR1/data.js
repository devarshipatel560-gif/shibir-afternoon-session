const pages = [
  { key: "upasana", title: "ઉપાસના", file: "upasana.html" },
  { key: "purusharth", title: "પુરુષાર્થ", file: "purusharth.html", image: "PURUSHARTH.png" },
  { key: "sahan", title: "શૂરવીરતા / સહન", file: "sahan.html", image: "SAHAN.png", images: ["SAHAN.png", "SAHAN-2.png"] },
  { key: "mandir", title: "મંદિર", file: "mandir.html" },
  { key: "dhiraj", title: "ધીરજ", file: "dhiraj.html", image: "DHIRAJ.png", images: ["DHIRAJ.png", "DHIRAJ-2.png"] },
  { key: "samp", title: "સંપ", file: "samp.html", image: "SAMP.png", images: ["SAMP.png", "SAMP-2.png"] },
  { key: "kirtan", title: "કીર્તન", file: "kirtan.html", image: "KIRTAN.png" },
  { key: "agna-upasana", title: "આજ્ઞા", file: "agna-upasana.html", image: "AGNA.png" },
  { key: "niyam-dharma", title: "નિયમ-ધર્મ", file: "niyam-dharma.html", image: "NIYAM-DHARMA.png" },
  { key: "das-bhav", title: "દાસભાવ", file: "das-bhav.html", image: "DAS-BHAV.png" },
  { key: "mahima", title: "મહિમા", file: "mahima.html", image: "MAHIMA.png" }
];

const activityInfo = {
  purusharth: [
    { title: "Apple Bobbing Challenge" },
    { title: "Objective", items: ["Retrieve an apple from the water using only your mouth."] },
    { title: "Materials Needed", items: ["Large tub or bucket", "Clean water", "Apples", "Towels"] },
    { title: "Instructions", ordered: true, items: [
      "Fill a tub or bucket with clean water.",
      "Place a few apples in the water.",
      "One participant goes at a time.",
      "The participant must keep both hands behind their back.",
      "They must try to bite and lift an apple using only their mouth.",
      "Once the apple is lifted out of the water, the challenge is complete.",
      "If the participant is unable to get the apple, another teammate may try."
    ] },
    { title: "Safety Note", items: ["Use clean water and fresh apples. Replace the water when needed. Make sure participants do not push their face too deep into the water."] }
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
    { title: "Option 2: Limbu Chamchi Challenge" },
    { title: "Objective", items: ["Balance the lemon on the spoon and cross the finish line without dropping it. The goal is not to finish first, but to stay steady, calm, and focused."] },
    { title: "Materials Needed", items: ["Lemons", "Spoons", "Tape or markers for start and finish lines", "Open space"] },
    { title: "Instructions", ordered: true, items: [
      "Mark a clear start line and finish line.",
      "Five to six participants stand at the start line.",
      "Give each participant one spoon and one lemon.",
      "Each participant places the spoon handle in their mouth.",
      "The lemon must be balanced on the spoon.",
      "When the game begins, participants walk carefully from the start line to the finish line.",
      "Participants may not use their hands to hold the spoon or lemon during the challenge.",
      "If the lemon falls, the participant must return to the start line and begin again.",
      "The challenge is complete when a participant crosses the finish line with the lemon still balanced on the spoon.",
      "The winner is the participant who completes the challenge with balance and control, not the one who rushes."
    ] },
    { title: "Rules", items: [
      "Do not run or push others.",
      "Hands cannot touch the spoon or lemon during the challenge.",
      "Participants must stay in their own lane or path.",
      "If the lemon falls, the participant must restart from the start line.",
      "Focus on balance, patience, and steadiness."
    ] },
    { title: "Reflection Message", items: ["In life, speed is not always the most important thing. Sometimes, patience, balance, and focus help us reach the goal safely and successfully."] }
  ],
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
  kirtan: [
    { title: "Kirtan Musical Chair Challenge" },
    { title: "Objective", items: ["Play musical chairs using kirtan as the music and learn the importance of staying connected to satsang."] },
    { title: "Materials Needed", items: ["Chairs", "Speaker", "Phone or laptop", "Kirtan playlist"] },
    { title: "Setup", ordered: true, items: [
      "Place the chairs in a straight line.",
      "Chairs should face alternating directions.",
      "Example: first chair faces left, second chair faces right, third chair faces left, and so on.",
      "Keep one chair fewer than the number of participants.",
      "Example: If 10 people are playing, place 9 chairs.",
      "Ask participants to stand in a line near the chairs."
    ] },
    { title: "Instructions", ordered: true, items: [
      "When the kirtan starts, participants walk around the straight line of chairs.",
      "Everyone should keep moving in the same direction.",
      "When they reach the end of the chair line, they turn around and continue walking around the chairs.",
      "When the kirtan stops, everyone must quickly sit on a chair.",
      "The person left without a chair is out for that round.",
      "Remove one chair after every round.",
      "Start the kirtan again and continue the game.",
      "Keep playing until one final participant remains.",
      "The last person sitting is the winner."
    ] },
    { title: "Rules", items: [
      "No pushing, pulling, or blocking others.",
      "Do not sit before the kirtan stops.",
      "Walk calmly and safely.",
      "Chairs should have enough space around them.",
      "Use clean and uplifting kirtans only."
    ] }
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
  mahima: [
    { title: "Gun Darshan Ball Pass Challenge" },
    { title: "Objective", items: ["Recognize and share one good quality, gun, of someone in the group."] },
    { title: "Materials Needed", items: ["1 soft ball", "Speaker", "Kirtan or music", "Open space"] },
    { title: "Setup", ordered: true, items: [
      "Make one group of 8 to 10 participants.",
      "Ask everyone to sit or stand in a circle.",
      "Give one soft ball to the group.",
      "Start playing kirtan or music."
    ] },
    { title: "Instructions", ordered: true, items: [
      "When the music starts, participants pass the ball around the group.",
      "Everyone must keep passing the ball until the music stops.",
      "When the music stops, the person holding the ball stays in their place.",
      "That person chooses anyone in the group and says one good quality about them.",
      "After they share, start the music again.",
      "Continue for multiple rounds so different people get a chance."
    ] },
    { title: "Rules", items: [
      "The quality must be respectful and positive.",
      "Do not repeat the same quality too many times.",
      "Try to be specific.",
      "No teasing or comments that may hurt someone.",
      "If someone cannot think of a quality, the group can help them."
    ] }
  ]
};

const quizData = {
  upasana: {
    heading: "ઉપાસના",
    note: "",
    activityDetails: [],
    questions: [
      {
        number: "1",
        question: "અક્ષરપુરુષોત્તમ દયાળુ પ્રભુ અક્ષરપુરુષોત્તમ આ કીર્તનના રચયિતા કોણ છે?",
        options: ["સાધુ બાલમુકુન્દદાસ", "છગન ભગત", "સાધુ મહાપુરુષદાસ", "શંકરદાસ"],
        correct: 2
      },
      {
        number: "2",
        question: "અક્ષરપુરુષોત્તમ ઉપાસનામાં સર્વોપરી, સર્વકર્તા, સાકાર તથા કઈ ચોથી બાબત સમજવાની છે?",
        options: ["સમજણ", "સત્પુરુષ", "સંત", "પ્રગટ"],
        correct: 3,
        prasang: [
          "અક્ષરપુરુષોત્તમ ઉપાસનામાં ચોથી બાબત પ્રગટ છે.",
          "“ઉપાસનામાં ૪ વાત કરે છે ને! કર્તા, સાકાર, સર્વોપરી અને પ્રગટ! જો ‘પ્રગટ’ ના હોય તો એક અંગ જ ઊડી જાય ૩ જ રહે.”",
          "BAPS સ્વામિનારાયણ સંસ્થાના સિદ્ધાંત મુજબ ઉપાસનાના મુખ્ય ચાર સ્તંભો છે: ૧. સર્વકર્તાહર્તા: ભગવાન જ સર્વના કર્તા છે. ૨. સાકાર: ભગવાન હંમેશા દિવ્ય સાકાર મૂર્તિમાન છે. ૩. સર્વોપરી: ભગવાન સ્વામિનારાયણ સર્વ અવતારોના અવતારી અને સર્વોપરી છે. ૪. પ્રગટ: ભગવાન હંમેશા ગુણાતીત સત્પુરુષ દ્વારા પૃથ્વી પર પ્રગટ રહે છે.",
          "યોગીજી મહારાજ પણ ઉપાસનાની વ્યાખ્યામાં આ બાબત સ્પષ્ટ કરતા કહે છે: “ઉપાસના શું ? મહારાજ સર્વકર્તા, સાકાર, સર્વોપરી ને પ્રગટ. અક્ષરધામમાં છે તેવા જ અહીં છે. રહેવાનું ધામ તે ગુણાતીત. સંત મોક્ષનું દ્વાર.”"
        ]
      },
      {
        number: "3",
        question: "મગનભાઈ કઈ સેવા કરીને શાસ્ત્રીજી મહારાજની માળાના મનકા બની ગયા?",
        options: ["હરિભક્તોને નિત્ય જમાડવાની", "આફ્રિકામાં મંદિર બનાવવાની", "ઉપાસના પ્રવર્તનની", "આર્થિક સેવા"],
        correct: 2,
        prasang: [
          "મગનભાઈ ઉપાસના પ્રવર્તનની સેવા કરીને શાસ્ત્રીજી મહારાજની માળાના મણકા બની ગયા હતા.",
          "મગનભાઈ આફ્રિકામાં રેલવે સ્ટેશન માસ્તર તરીકે નોકરી કરતા હોવા છતાં, તેમનું મુખ્ય લક્ષ્ય અક્ષરપુરુષોત્તમ ઉપાસનાનો પ્રચાર કરવાનું હતું. તેઓ કલાકો સુધી કથાવાર્તા કરતા અને તાર દ્વારા પણ અન્ય સ્ટેશનો પરના ભક્તોને સત્સંગનો મહિમા સમજાવતા હતા. તેમની આ અવિરત ઉપાસના પ્રવર્તનની સેવા જોઈને શાસ્ત્રીજી મહારાજે તેમને પોતાની 'માળાના મણકા' કહ્યા હતા."
        ]
      },
      {
        number: "4",
        question: "શ્રીજી મહારાજે ______ રહેવા સારું છ ભવ્ય શિખરબદ્ધ મંદિરોનું નિર્માણ કર્યું હતું.",
        options: ["ભક્તિ", "સંપ્રદાય", "ઉપાસના", "પરંપરા"],
        correct: 2,
        prasang: [
          "શ્રીજી મહારાજે ઉપાસના રહેવા સારું છ ભવ્ય શિખરબદ્ધ મંદિરોનું નિર્માણ કર્યું હતું.",
          "“શ્રીજીમહારાજે વચનામૃતમાં મંદિરોનો હેતુ જણાવ્યો છે કે ‘ઉપાસના માટે મંદિરો બાંધ્યાં છે’.”",
          "“એ સ્વરૂપોની ઉપાસનામાં રહેવા સારુ જ મહારાજે ત્યાગનો પક્ષ મોળો કરીને ભગવાનનાં મંદિર કરાવ્યાં છે. ઉપાસનાનો નાશ થઈ જાય તો પાછળથી અંધપરંપરા ચાલે.”",
          "ભગવાન સ્વામિનારાયણે પોતાના સર્વોપરી સ્વરૂપની શુદ્ધ ઉપાસના સદાકાળ જળવાઈ રહે તે હેતુથી અમદાવાદ, ભુજ, વરતાલ, ધોલેરા, જૂનાગઢ અને ગઢડામાં શિખરબદ્ધ મંદિરોનું નિર્માણ કર્યું હતું."
        ]
      },
      {
        number: "5",
        question: "ભગવાન સ્વામિનારાયણે મૂળ અક્ષર તરીકે કોની ઓળખાણ કરાવી હતી?",
        options: ["ગોપાળાનંદ સ્વામી", "ગુણાતીતાનંદ સ્વામી", "મુક્તાનંદ સ્વામી", "રામાનંદ સ્વામી"],
        correct: 1,
        prasang: [
          "ભગવાન સ્વામિનારાયણે મૂળ અક્ષર તરીકે ગુણાતીતાનંદ સ્વામીની ઓળખાણ કરાવી હતી.",
          "“મહારાજે ભાદરાના વશરામભાઈ વગેરે હરિભક્તો સમક્ષ ‘મૂળજી શર્મા (ગુણાતીતાનંદ સ્વામી) એ અક્ષરબ્રહ્મનો અવતાર છે’ એ મહિમા કહ્યો.”",
          "“શ્રીહરિ કહે : ‘સાંભળો, સ્વામી, એવા સદ્‌ગુરુ તો આ ગુણાતીતાનંદ સ્વામી છે ! એ તો મારે રહેવાનું અક્ષરધામ છે ! ને અમે તો સાક્ષાત્‌ પુરુષોત્તમ નારાયણ છીએ !!’”",
          "ભગવાન સ્વામિનારાયણે ભાદરા, સારંગપુર અને ડભાણ જેવા અનેક સ્થળોએ સ્પષ્ટ કર્યું હતું કે ગુણાતીતાનંદ સ્વામી (મૂળજી શર્મા) એ તેમનું મૂર્તિમાન અક્ષરધામ અને અનાદિ અક્ષરબ્રહ્મ છે."
        ]
      },
      {
        number: "6",
        question: "ગુણાતીતાનંદ સ્વામીનાં દીક્ષા પ્રસંગે મહારાજે તેઓની અક્ષરબ્રહ્મ તરીકે કરાવેલી ઓળખાણની વાત કયા સંપ્રદાયિક ગ્રંથમાં નોંધાયેલી છે?",
        options: ["વચનામૃત", "હરિલીલામૃત", "હરિલીલાકલ્પતરુ", "હરિવાક્યસુધાસિંધુ"],
        correct: 2,
        prasang: [
          "ગુણાતીતાનંદ સ્વામીનાં દીક્ષા પ્રસંગે મહારાજે તેઓની અક્ષરબ્રહ્મ તરીકે કરાવેલી ઓળખાણની વાત હરિલીલાકલ્પતરુ ગ્રંથમાં નોંધાયેલી છે.",
          "“આ મૂળજી શર્મા કે જે મારું મૂર્તિમાન અક્ષરબ્રહ્મધામ છે તેને આજે દીક્ષા આપતાં મને ખૂબ જ આનંદ થાય છે. તે મૂળ અક્ષર અધો-ઊર્ધ્વ પ્રમાણે રહિત એવું મારું ધામ છે, જેમાં હું મારા અનંત મુક્તો સાથે રહું છું.”",
          "સંવત ૧૮૬૬ના પોષ સુદ પૂનમના રોજ ડભાણ મુકામે મહાવિષ્ણુયાગ દરમિયાન શ્રીજી મહારાજે મૂળજી શર્માને દીક્ષા આપી 'ગુણાતીતાનંદ સ્વામી' નામ પાડ્યું હતું. આ પ્રસંગે મહારાજે તેઓને પોતાનું 'અક્ષરધામ' કહીને ઓળખાવ્યા હતા, જેનો સ્પષ્ટ ઉલ્લેખ અચિંત્યાનંદ બ્રહ્મચારી રચિત 'શ્રીહરિલીલાકલ્પતરુ' ગ્રંથના ૭મા સ્કંધના ૧૭મા અધ્યાયમાં જોવા મળે છે."
        ]
      }
    ]
  },
  purusharth: {
    heading: "પુરુષાર્થ",
    note: "",
    activityDetails: activityInfo.purusharth,
    questions: [
      {
        number: "1",
        question: "BAPS સંસ્થાનું સૌપ્રથમ મંદિર શાસ્ત્રીજી મહારાજે ક્યાં બનાવ્યું?",
        options: ["આણંદ", "મહેળાવ", "બોચાસણ", "વઢવાણ"],
        correct: 2,
        prasang: [
          "બોચાસણ મંદિર એ શાસ્ત્રીજી મહારાજ દ્વારા નિર્મિત BAPS સંસ્થાનું સૌપ્રથમ શિખરબદ્ધ મંદિર છે, જે ભગવાન સ્વામિનારાયણના સંકલ્પ અને વચનને સાકાર કરવા માટે બાંધવામાં આવ્યું હતું.",
          "ભગવાન સ્વામિનારાયણે બોચાસણના ભક્ત કાશીદાસ મોટાને વચન આપ્યું હતું કે, “તમારે ત્યાં અમારે મંદિર કરવું છે... અમે અહીં ધામ સહિત બિરાજીશું.” આ વચનને પૂર્ણ કરવા શાસ્ત્રીજી મહારાજે બોચાસણની પસંદગી કરી હતી.",
          "માગશર વદ ૧, સંવત ૧૯૬૩ના રોજ પાયા ખોદવાનું શરૂ થયું અને માત્ર ૧૯૩ દિવસમાં મંદિર તૈયાર થઈ ગયું હતું. સંવત ૧૯૬૩, વૈશાખ સુદ ૧૫ (૫ જૂન, ૧૯૦૭) ના રોજ શાસ્ત્રીજી મહારાજે મધ્ય મંદિરમાં શ્રી અક્ષર-પુરુષોત્તમ મહારાજની મૂર્તિઓ પધરાવી હતી.",
          "મંદિરના પાયા ખોદતી વખતે સોનાના સિક્કા ભરેલા ચરુ નીકળ્યા હતા, પરંતુ શાસ્ત્રીજી મહારાજે તેને અડક્યા વિના દટાવી દીધા અને કહ્યું કે, “આપણે તો અહીં મૂર્તિમાન લક્ષ્મી બેસાડીશું, એટલે બ્રહ્માંડની લક્ષ્મી તણાઈને આવશે.”"
        ]
      },
      {
        number: "2",
        question: "સારંગપુરમાં સુવર્ણ જડિત મંદિરના દર્શન શાસ્ત્રીજી મહારાજે કોને કરાવ્યા?",
        options: ["પરમ ભગવદીય આશાભાઈ", "પરમ ભગવદીય ઈશ્વરભાઈ", "પરમ ભગવદીય છગનભાઈ", "પરમ ભગવદીય રણછોડભગત"],
        correct: 2,
        prasang: [
          "સારંગપુરમાં છગનલાલ ગગાભાઈ ખત્રી સાથે જોડાયેલો મુખ્ય પ્રસંગ મંદિરની લખણી વખતે થયો હતો, જેમાં શાસ્ત્રીજી મહારાજે તેમને મંદિરનું દિવ્ય દર્શન કરાવ્યું હતું.",
          "સારંગપુરમાં પીઠા ખાચરના ઓરડામાં સભા ભરાઈ હતી ત્યારે શાસ્ત્રીજી મહારાજે છગનભાઈને મંદિરની લખણીમાં પહેલ કરવા કહ્યું. છગનભાઈએ નમ્રતાથી પોતાની અસમર્થતા દર્શાવી, છતાં સ્વામીશ્રીની મરજીથી તેમણે રૂ. ૩૫ની સેવા લખાવી.",
          "“તમારા જેવા નિષ્ઠાવાન, મુક્તોનો એક રૂપિયો, એક કરોડ રૂપિયા બરાબર છે અને એમાં જ આ મંદિર પૂરું થવાનું છે.” એમ કહીને સ્વામીશ્રીએ હાથ લાંબો કર્યો. એટલામાં તો છગનભાઈને સુવર્ણ અને રત્નજડિત ત્રણ શિખરનું ગગનની સ્પર્ધા કરે એવું, મહામોટું મણિમય મંદિર અતિશય પ્રકાશે યુક્ત દેખાયું.",
          "આ દિવ્ય દર્શનમાંથી જાગ્રત થયા પછી છગનભાઈ સ્વામીશ્રીના ચરણોમાં નમી પડ્યા અને તેમના ઐશ્વર્યની સ્તુતિ કરવા લાગ્યા."
        ]
      },
      {
        number: "3",
        question: "બોચાસણ બાદ બીજું શિખરબદ્ધ મંદિર ક્યાં બનાવ્યું?",
        options: ["સારંગપુર", "ગોંડલ", "અટલાદરા", "ગઢડા"],
        correct: 0,
        prasang: [
          "સારંગપુર મંદિર એ શાસ્ત્રીજી મહારાજ દ્વારા નિર્મિત બીજું શિખરબદ્ધ મંદિર છે, જે શ્રીજી મહારાજના સંકલ્પ અને ગુણાતીતાનંદ સ્વામીની ભવિષ્યવાણીને સાકાર કરવા માટે બાંધવામાં આવ્યું હતું.",
          "“બોચાસણ પછીના ટૂંકા જ સમયગાળામાં સ્વામીશ્રીએ સારંગપુર મંદિર ઊભું કરી દીધું.”",
          "“બ્રહ્મસ્વરૂપ શાસ્ત્રીજી મહારાજે આ જ સ્થાને મહારાજના સંકલ્પ અનુસાર ઈ. સ. ૧૯૧૬માં ત્રણ માળનું ભવ્ય મંદિર રચીને ધામ, ધામી અને મુક્ત પધરાવ્યા હતા.”",
          "શાસ્ત્રીજી મહારાજે લીમડી દરબાર પાસેથી ૨૪ એકર પ્રસાદીની જમીન મેળવી હતી અને સંવત ૧૯૭૨, વૈશાખ સુદ ૬ (૨૩ મે, ૧૯૧૬) ના રોજ મધ્ય મંદિરમાં અક્ષર-પુરુષોત્તમ મહારાજ અને ગોપાળાનંદ સ્વામીની મૂર્તિઓની પ્રતિષ્ઠા કરી હતી."
        ]
      }
    ]
  },
  sahan: {
    heading: "શૂરવીરતા / સહન",
    note: "",
    activityDetails: activityInfo.sahan,
    questions: [
      {
        number: "1",
        question: "“આ મૂંડાવ્યું છે તે પણ અક્ષર-પુરુષોત્તમ સારુ જ મૂંડાવ્યું છે.” આ મહાવાક્ય શાસ્ત્રીજી મહારાજે કયા મંદિર નિર્માણ વખતે કહ્યું હતું?",
        options: ["સારંગપુર", "બોચાસણ", "વઢવાણ", "ગોંડલ", "ગઢડા"],
        correct: 0,
        prasang: [
          "શાસ્ત્રીજી મહારાજે આ વાક્ય સારંગપુર મંદિરના નિર્માણ વખતે કહ્યું હતું.",
          "“ઠાકોર સાહેબ ! આ દેહે જે કષ્ટ સહન કર્યા છે, તે મહાપ્રભુ શ્રીસહજાનંદ સ્વામી અને ગુણાતીતાનંદ સ્વામી સારું જ સહ્યાં છે અને આ મૂંડાવ્યું છે તે પણ અક્ષર-પુરુષોત્તમ સારુ જ મૂંડાવ્યું છે. માટે બાપુ ! અમારા ઈષ્ટદેવ તો શ્રીસહજાનંદ સ્વામી અને ગુણાતીતાનંદ સ્વામી જ છે, અને તેમની જ મૂર્તિઓ મધ્ય મંદિરમાં બેસશે.”",
          "સારંગપુર મંદિરની પ્રતિષ્ઠા પૂર્વે જ્યારે લીમડીના ઠાકોર સાહેબે વિરોધીઓની ભંભેરણીથી પ્રેરાઈને મધ્ય મંદિરમાં રાધા-કૃષ્ણની મૂર્તિઓ પધરાવવાનો આગ્રહ કર્યો, ત્યારે શાસ્ત્રીજી મહારાજે અત્યંત ખુમારી અને નિડરતાથી આ શબ્દો કહ્યા હતા."
        ]
      },
      {
        number: "2",
        question: "શાસ્ત્રીજી મહારાજે વડતાલથી મહાપ્રસ્થાન ક્યારે કર્યું?",
        options: ["સંવત 1962 કાર્તિક વદ પૂર્ણિમા", "સંવત 1962 કાર્તિક સુદ પૂર્ણિમા", "સંવત 1962 કાર્તિક સુદ પાંચમ", "સંવત 1962 કાર્તિક સુદ બીજ"],
        correct: 3,
        prasang: [
          "શાસ્ત્રીજી મહારાજે વડતાલથી મહાપ્રસ્થાન સંવત 1962 કાર્તિક સુદ બીજના રોજ કર્યું હતું.",
          "“સંવત ૧૯૬૨, કાર્તિક સુદ ૨ ના રોજ શાસ્ત્રીજી મહારાજ વડતાલથી નીકળ્યા.”",
          "આ ઐતિહાસિક પ્રસ્થાન અક્ષર-પુરુષોત્તમ ઉપાસનાના શુદ્ધ સિદ્ધાંતના પ્રવર્તન માટે હતું."
        ]
      },
      {
        number: "3",
        question: "સોમા ભગતે શાસ્ત્રીજી મહારાજની આજ્ઞાથી કયા મંદિર નિર્માણમાં દોરડા બાંધવાની સેવા કરી?",
        options: ["ગઢડા", "બોચાસણ", "સારંગપુર", "વડતાલ"],
        correct: 2,
        prasang: [
          "સોમા ભગતે શાસ્ત્રીજી મહારાજની આજ્ઞાથી સારંગપુર મંદિર નિર્માણમાં દોરડા બાંધવાની સેવા કરી હતી.",
          "“ઠાકોરજીના વચલા મંદિરનો તરઘટનો પથ્થર આશરે 150 મણનો, જાડા રાંઢવાના સાત બંધથી બાંધેલો ઉપર ચઢતો હતો... સ્વામીશ્રીએ... સોમા ભગત તરફ ફરીને તેમને કહ્યું : ‘પથ્થર ઉપર ચઢીને તૂટેલાં રાંઢવાં બાંધી દ્યો.’”",
          "સારંગપુર મંદિરના નિર્માણ સમયે ૧૫૦ મણનો પથ્થર જ્યારે સાતમાંથી છ દોરડા તૂટી જવાથી એક જ દોરડા પર લટકી રહ્યો હતો, ત્યારે શાસ્ત્રીજી મહારાજની આજ્ઞાથી સોમા ભગતે પોતાના જીવના જોખમે તે લટકતા પથ્થર પર ચઢીને તૂટેલા દોરડા ફરીથી બાંધ્યા હતા."
        ]
      },
      {
        number: "4",
        question: "“આ મુંડાવ્યું છે તે અક્ષરપુરુષોત્તમ માટે મુંડાવ્યું છે.” – આ વાક્ય આપણને શું સમજાવે છે?",
        options: ["સંસ્થાના વિકાસ માટે સહન કરેલી તકલીફો", "અક્ષરપુરુષોત્તમનો સિદ્ધાંત", "સત્પુરુષ માટે હોમાઈ જવાનો ભાવ", "ઉપરના તમામ"],
        correct: 3
      },
      {
        number: "5",
        question: "શાસ્ત્રીજી મહારાજે વડતાલથી મહાપ્રસ્થાન કેમ કર્યું?",
        options: ["સુખથી ભજન કરવા", "જાનનું જોખમ", "હરિભક્તનો આગ્રહ", "અક્ષરપુરુષોત્તમ જ્ઞાનનું પ્રવર્તન કરવા માટે"],
        correct: 3,
        prasang: [
          "શાસ્ત્રીજી મહારાજે વડતાલથી મહાપ્રસ્થાન અક્ષરપુરુષોત્તમ જ્ઞાનનું પ્રવર્તન કરવા માટે કર્યું હતું.",
          "“શાસ્ત્રીજી મહારાજનું વરતાલથી આ મહાપ્રસ્થાન શ્રીજીના સંકલ્પોની પૂર્તિ માટે હતું, અક્ષરપુરુષોત્તમની શુદ્ધ અને સર્વોપરી ઉપાસનાનાં મંદિરોની સ્થાપના માટેનું હતું.”",
          "શાસ્ત્રીજી મહારાજને વરતાલમાં જાનનું જોખમ હતું અને હરિભક્તોનો આગ્રહ પણ હતો, પરંતુ તેમનું મુખ્ય લક્ષ્ય ભગવાન સ્વામિનારાયણનો હૃદ્ગત સિદ્ધાંત અક્ષરપુરુષોત્તમ ઉપાસના વિશ્વમાં પ્રવર્તાવવાનું હતું."
        ]
      }
    ]
  },
  mandir: {
    heading: "મંદિર",
    note: "",
    activityDetails: [],
    questions: [
      {
        number: "1",
        question: "ઈમેજ સ્ક્રીન પર બતાવેલ મંદિર ઓળખો (અટલાદરા મંદિર): આ કયું મંદિર છે?",
        options: ["ગઢડા", "સારંગપુર", "બોચાસણ", "અટલાદરા", "ગોંડલ"],
        correct: 3,
        prasang: [
          "BAPS અટલાદરા (વડોદરા) મંદિર એ બ્રહ્મસ્વરૂપ શાસ્ત્રીજી મહારાજ દ્વારા નિર્મિત ચોથું શિખરબદ્ધ મંદિર છે. આ મંદિર કાનમ-વાકળ પ્રદેશના હરિભક્તોની શ્રદ્ધા અને શાસ્ત્રીજી મહારાજના દિવ્ય સંકલ્પનું પ્રતીક છે.",
          "અટલાદરાના મથુરભાઈ પટેલ અને રણછોડ ભક્તની વિનંતીથી શાસ્ત્રીજી મહારાજે અહીં મંદિર કરવાનું સ્વીકાર્યું. આ જમીન પર શ્રીજી મહારાજના સમયમાં મૂળુ મેતર અને કૃષ્ણ માળીના ખેતર હતા, જ્યાં મહારાજ પધાર્યા હતા.",
          "મંદિરનું ખાતમુહૂર્ત સંવત ૧૯૯૬, વૈશાખ સુદ ૩ (૧૦-૫-૧૯૪૦) ના રોજ થયું હતું. મૂર્તિ પ્રતિષ્ઠા સંવત ૨૦૦૧, અષાઢ સુદ ૩ (૧૨-૭-૧૯૪૫) ના રોજ શાસ્ત્રીજી મહારાજના હસ્તે અત્યંત ધામધૂમથી કરવામાં આવી હતી.",
          "આ મંદિર ઉત્તરાભિમુખ છે અને તેમાં પાંચ ગર્ભગૃહ પર ત્રણ શિખરો આવેલા છે. મધ્ય ગર્ભગૃહમાં શ્રી અક્ષરપુરુષોત્તમ મહારાજ તથા ગોપાળાનંદ સ્વામીની ધાતુની મૂર્તિઓ બિરાજમાન છે.",
          "પ્રમુખસ્વામી મહારાજે, ત્યારે સાધુ નારાયણસ્વરૂપદાસ, આ મંદિરના નિર્માણમાં પથ્થરો ઉતારવાની, ચૂનાની અને પાલખ પર ચઢીને અનેક શારીરિક સેવાઓ કરી હતી."
        ]
      },
      {
        number: "2",
        question: "નોર્થ અમેરિકામાં સૌપ્રથમ શિખરબદ્ધ મંદિર ક્યાં બન્યું?",
        options: ["શિકાગો", "હ્યુસ્ટન", "એટલાન્ટા", "ટોરોન્ટો"],
        correct: 1
      },
      {
        number: "3",
        question: "રોબિન્સવિલ અક્ષરધામનું લોકાર્પણ ક્યારે થયું?",
        options: ["8 October 2023", "8 November 2023", "10 October 2023", "11 November 2023"],
        correct: 0
      },
      {
        number: "4",
        question: "મહંત સ્વામી મહારાજે હમણાં છેલ્લે કયા શિખરબદ્ધ મંદિરની મૂર્તિ પ્રતિષ્ઠા કરી?",
        options: ["અબુધાબી", "સિડની", "નાસિક", "જોધપુર"],
        correct: 3
      },
      {
        number: "5",
        question: "મહંત સ્વામી મહારાજ સપ્ટેમ્બર 2026માં કયા નૂતન મંદિરનું લોકાર્પણ કરશે?",
        options: ["કણાદ, સુરત", "પેરિસ, ફ્રાન્સ", "જોહાનિસબર્ગ, આફ્રિકા", "મેલબર્ન, ઓસ્ટ્રેલિયા"],
        correct: 1
      },
      {
        number: "6",
        question: "વર્ષ 2026 / અત્યારસુધીમાં સંસ્થામાં કુલ કેટલા શિખરબદ્ધ મંદિરો થયા?",
        options: ["114", "44", "51", "71"],
        correct: 2,
        prasang: [
          "શાસ્ત્રીજી મહારાજ: 5",
          "યોગીજી મહારાજ: 2",
          "પ્રમુખસ્વામી મહારાજ: 37",
          "મહંત સ્વામી મહારાજ: 7"
        ]
      }
    ]
  },
  dhiraj: {
    heading: "ધીરજ",
    note: "",
    activityDetails: activityInfo.dhiraj,
    questions: [
      {
        number: "1",
        question: "ખાનદેશમાં અક્ષરપુરુષોત્તમ સત્સંગના પ્રવર્તનમાં સિંહફાળો કોનો રહ્યો છે?",
        options: ["સાધુ બાલમુકુન્દદાસ", "સાધુ વિજ્ઞાનદાસ", "સાધુ મહાપુરુષદાસ", "સાધુ નિર્ગુણદાસ"],
        correct: 3,
        prasang: [
          "ખાનદેશમાં અક્ષરપુરુષોત્તમ સત્સંગના પ્રવર્તનમાં સિંહફાળો સાધુ નિર્ગુણદાસનો રહ્યો છે.",
          "“આ બધો નિર્ગુણદાસ સ્વામીનો પ્રતાપ છે, તે ખાનદેશી હરિભક્તો સારી રીતે જાણતા હતા. નિર્ગુણદાસ સ્વામી ખાનદેશમાં દર વર્ષે પધારતા અને તેમને સૌને કથાવાર્તા કરી, સત્સંગ તાજો રાખતા.”",
          "નિર્ગુણદાસ સ્વામીએ ખાનદેશના હરિભક્તોને શાસ્ત્રીજી મહારાજનો મહિમા સમજાવીને દૃઢ નિષ્ઠા કરાવી હતી. તેમના જ ઉત્સાહથી સંવત ૧૯૭૫માં ખાનદેશમાં પ્રથમ વસંત પંચમીનો સમૈયો યોજાયો હતો. પ્રારંભિક બીજ રોપવાનું કાર્ય સાધુ વિજ્ઞાનદાસજીએ કર્યું હતું, પરંતુ તેને વ્યાપક બનાવીને ટકાવી રાખવાનું મુખ્ય કાર્ય નિર્ગુણદાસ સ્વામીએ કર્યું હતું."
        ]
      },
      {
        number: "2",
        question: "શાસ્ત્રીજી મહારાજે સતત 10 કલાક સુધી અક્ષરપુરુષોત્તમના મહિમાની વાતો કોને કરી?",
        options: ["જેઠાભાઈ", "ઉત્તમભાઈ", "બાલકૃષ્ણભાઈ", "આશાભાઈ"],
        correct: 0,
        prasang: [
          "શાસ્ત્રીજી મહારાજે સતત ૧૦ કલાક સુધી અક્ષરપુરુષોત્તમના મહિમાની વાતો જેઠાભાઈને કરી હતી. તેઓ પાછળથી નિર્ગુણદાસ સ્વામી તરીકે ઓળખાયા.",
          "“એક દિવસે મંદિરની પ્રદક્ષિણામાં સાંજના ૬ વાગ્યાથી સવારના ૪ વાગ્યા સુધી શાસ્ત્રીજી મહારાજે તેમને અક્ષરપુરુષોત્તમના સિદ્ધાંતની અને ભગતજી મહારાજના મહિમાની વાતો કરી. દશ કલાકમાં શાસ્ત્રીજી મહારાજે તેમનું અંતર ભેદી નાખ્યું.”",
          "વડોદરાના સ્વામિનારાયણ મંદિરમાં જ્યારે જેઠાભાઈ અભ્યાસ કરતા હતા, ત્યારે શાસ્ત્રીજી મહારાજે તેમને વચનામૃત અને અન્ય શાસ્ત્રોના આધારે અક્ષર-પુરુષોત્તમ ઉપાસનાનો સિદ્ધાંત સમજાવ્યો હતો. આ ૧૦ કલાકની અવિરત વાતોથી જેઠાભાઈને પૂર્વનું જ્ઞાન ઉદય થયું અને તેમની નિષ્ઠા દૃઢ થઈ ગઈ હતી."
        ]
      }
    ]
  },
  samp: {
    heading: "સંપ",
    note: "",
    activityDetails: activityInfo.samp,
    questions: [
      {
        number: "1",
        question: "શાસ્ત્રીજી મહારાજ જ્યારે વરતાલથી નીકળ્યા, ત્યારે તેમની સાથે કેટલા સંતો હતા?",
        options: ["ત્રણ", "પાંચ", "સાત", "આઠ"],
        correct: 1,
        prasang: [
          "શાસ્ત્રીજી મહારાજ જ્યારે સંવત ૧૯૬૨ના કાર્તિક સુદ ૨ ના રોજ વરતાલથી નીકળ્યા, ત્યારે તેમની સાથે પાંચ સાધુઓ હતા: સાધુ રામરતનદાસ, સાધુ ભક્તિજીવનદાસ, સાધુ જ્ઞાનપ્રિયદાસ, સાધુ રત્નજીવનદાસ અને સાધુ નીલકંઠદાસ.",
          "“શાસ્ત્રીજી મહારાજ વરતાલથી નીકળ્યા ત્યારે તેઓની સાથે પાંચ સાધુ હતા, પણ સંપ હતો તો પાંચસોને ડોલાવ્યા... એક રુચિવાળા બે જ હોય તે લાખ બરાબર છે.”",
          "આ પાંચ સાધુઓ અને શાસ્ત્રીજી મહારાજ એમ કુલ ૬ સંતોનું મંડળ વરતાલથી નીકળ્યું હતું. નીકળતી વખતે શાસ્ત્રીજી મહારાજે હરિકૃષ્ણ મહારાજ પાસે પ્રાર્થના કરી હતી કે, “મહારાજ! અમારે જુદું પડવાનો જરાય સંકલ્પ નથી, પણ જે આપની ઈચ્છાથી જુદા પડતા હોઈએ તો આપ અમારી સહાયમાં રહેજો અને અખંડ ભેગા રહેજો.”"
        ]
      },
      {
        number: "2",
        question: "નૉર્થ અમેરિકાના અક્ષરધામમાં કેટલા સ્વયંસેવકો સેવામાં જોડાયા?",
        options: ["11,500", "12,400", "12,500", "11,400"],
        correct: 2
      }
    ]
  },
  kirtan: {
    heading: "કીર્તન",
    note: "",
    activityDetails: activityInfo.kirtan,
    questions: [
      {
        number: "1",
        question: "“અમે સૌ સ્વામીના બાળક, જીવીશું સ્વામીને માટે” – આ કીર્તનના રચયિતા કોણ છે?",
        options: ["પરમ ભગવદીય શંકરભાઈ", "મોતીભાઈ", "મહાપુરુષદાસ", "નારાયણ ભગત"],
        correct: 1,
        prasang: [
          "“અમે સૌ સ્વામીના બાળક, જીવીશું સ્વામીને માટે” – આ કીર્તનના રચયિતા મોતીભાઈ (મોતીભાઈ ભગવાનદાસ પટેલ) છે.",
          "“મોતીભાઈમાં ખેતીની નિષ્ણાતતા અને વ્યવહાર કુશળતા ઉપરાંત સુંદર કવિની પ્રતિભા પણ હતી. ‘અમે સૌ સ્વામીના બાળક મરીશું શ્રીજીને માટે...’ આદિ ઘણાં કીર્તનોની રચના તેમણે કરી હતી.”",
          "આણંદના મોતીભાઈ ભગવાનદાસ પટેલ શાસ્ત્રીજી મહારાજના અનન્ય ભક્ત હતા. તેમણે આ કીર્તન દ્વારા અક્ષર-પુરુષોત્તમ સિદ્ધાંત પ્રત્યેની શૂરવીરતા અને સમર્પણ ભાવ વ્યક્ત કર્યો છે."
        ]
      },
      {
        number: "2",
        question: "અક્ષરધામથી મહા એકાંતિક કીર્તનનું મ્યુઝિક પ્લે કરી કીર્તન કર્યું છે એ કયું છે?",
        options: ["શાસ્ત્રીજી મહારાજનો સંગભાઈ મને", "દયાળુ ભગવાન અક્ષરપુરુષોત્તમ", "અક્ષરધામથી મહા એકાંતિક", "નમન કરું શ્રીનાથને"],
        correct: 2
      },
      {
        number: "3",
        question: "કીર્તનનું મ્યુઝિક પ્લે કરી કીર્તન કર્યું છે એ કયું છે?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: -1
      },
      {
        number: "4",
        question: "કીર્તનનું મ્યુઝિક પ્લે કરી કીર્તન કર્યું છે એ કયું છે?",
        options: ["Option A", "Option B", "Option C", "Option D"],
        correct: -1
      }
    ]
  },
  "agna-upasana": {
    heading: "આજ્ઞા",
    note: "",
    activityDetails: activityInfo["agna-upasana"],
    questions: [
      {
        number: "1",
        question: "13 સપ્ટેમ્બર 2023ના દિવસે મહંત સ્વામી મહારાજે શું કરવાની પ્રેરણા આપી?",
        options: ["દરરોજ પંદર મિનિટ પ્રાપ્તિનો વિચાર", "ઘરસભા", "સત્સંગ દીક્ષા મુખપાઠ", "વચનામૃત વાંચન"],
        correct: 0
      },
      {
        number: "2",
        question: "4 ઑક્ટોબર 2023ના દિવસે મહંત સ્વામી મહારાજે શું કરવાની પ્રેરણા આપી?",
        options: ["દરરોજ પંદર મિનિટ ‘પ્રાપ્તિનો વિચાર’ કરવો", "અંદર અક્ષરધામ", "સત્સંગ દીક્ષા મુખપાઠ કરવો", "અંદર અક્ષરપુરુષોત્તમ"],
        correct: 1
      },
      {
        number: "3",
        question: "કેટલા બાળકોએ સત્સંગ દીક્ષા ગ્રંથનો મુખપાઠ રજૂ કરી સ્વામીશ્રીનો રાજીપો પ્રાપ્ત કર્યો?",
        options: ["12,735", "15,000", "15,454", "15,666"],
        correct: 3
      },
      {
        number: "4",
        question: "બ્રહ્મસ્વરૂપ શાસ્ત્રીજી મહારાજે વર્ષમાં _______ નિર્જળા ઉપવાસ કરવાની આજ્ઞા કરી છે.",
        options: ["9", "3", "5", "7"],
        correct: 2,
        prasang: [
          "બ્રહ્મસ્વરૂપ શાસ્ત્રીજી મહારાજે વર્ષમાં ૫ નિર્જળા ઉપવાસ કરવાની આજ્ઞા કરી છે.",
          "“શાસ્ત્રીજી મહારાજે નીચે જણાવેલ પાંચ ઉપવાસ નિર્જળા કરવાનો સૌ સંતો તથા હરિભક્તોને પણ આદેશ આપ્યો છે.”",
          "પાંચ ઉપવાસમાં આષાઢ સુદ એકાદશી, ભાદરવા સુદ એકાદશી, કાર્તિક સુદ એકાદશી, શ્રીહરિ જયંતી અને જન્માષ્ટમીનો સમાવેશ થાય છે.",
          "આ પાંચ ઉપવાસમાં શ્રીહરિ જયંતી (રામનવમી), જન્માષ્ટમી, અને ત્રણ મુખ્ય એકાદશીઓ (દેવપોઢી, જળઝીલણી, અને દેવઊઠી) નો સમાવેશ થાય છે. શાસ્ત્રીજી મહારાજના જણાવ્યા મુજબ, આ પાંચ નિર્જળા ઉપવાસ કરવાથી આખા વર્ષના વ્રતનું પુણ્ય પ્રાપ્ત થાય છે."
        ]
      }
    ]
  },
  "niyam-dharma": {
    heading: "નિયમ-ધર્મ",
    note: "",
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
        question: "સત્સંગ દીક્ષા ગ્રંથના લેખનનો પ્રારંભ મહંત સ્વામી મહારાજે ક્યાંથી કર્યો?",
        options: ["ગોંડલ", "સુરત", "નવસારી", "નેનપુર"],
        correct: 2,
        prasang: [
          "સત્સંગ દીક્ષા ગ્રંથના લેખનનો પ્રારંભ મહંત સ્વામી મહારાજે નવસારીથી કર્યો હતો.",
          "“સ્વામીશ્રીએ નવસારીમાં ૩૦ જાન્યુઆરી ૨૦૨૦, વસંત પંચમીના પવિત્ર દિવસે આ ગ્રંથનો શુભારંભ કર્યો.”",
          "મહંત સ્વામી મહારાજે ૩૦ જાન્યુઆરી ૨૦૨૦ના રોજ નવસારીમાં વસંત પંચમીના દિવસે આ ગ્રંથ લખવાની શરૂઆત કરી હતી અને ૨ એપ્રિલ ૨૦૨૦ના રોજ અમદાવાદમાં તે પૂર્ણ કર્યો હતો."
        ]
      },
      {
        number: "3",
        question: "શાસ્ત્રીજી મહારાજ મુસાફરી દરમિયાન કયો નિયમ પાળતા હતા જેનો ઉલ્લેખ યોગીજી મહારાજે પણ કર્યો છે?",
        options: ["મુસાફરીમાં ક્યારેય સૂવું નહીં.", "મુસાફરીમાં (બહારનું) કાંઈ પણ લેવું નહીં.", "હંમેશા ચાલતા જ મુસાફરી કરવી.", "ટ્રેનમાં મુસાફરી ન કરવી."],
        correct: 1
      },
      {
        number: "4",
        question: "શાસ્ત્રીજી મહારાજ કયા ગ્રંથોના અલ્પ વચનનો પણ ક્યારેય લોપ કરતા નહીં અને બીજા પાસે પણ પળાવતા?",
        options: ["શિક્ષાપત્રી, ધર્મામૃત અને નિષ્કામશુદ્ધિ", "માત્ર વચનામૃત.", "માત્ર સ્વામીની વાતો.", "રામાયણ અને મહાભારત"],
        correct: 0,
        prasang: [
          "સ્વામીશ્રી ભરૂચમાં બિરાજતા હતા. અહીં તેમને અચાનક ટાઈફોઈડ તાવ લાગુ પડ્યો. ડોક્ટરોએ બિલકુલ આરામ કરવા અને કુદરતી હાજતો પણ બધી પથારીમાં જ કરવા સૂચના કરી. પરંતુ સ્વામીશ્રી શેના માને? ડોક્ટરો કરતાં તેમને શ્રીજી મહારાજની આજ્ઞાનું વધુ મહત્વ હતું.",
          "પોતાના નિયમ મુજબ દરેક ક્રિયા સ્વામીશ્રી કરવા લાગ્યા. તાવમાં ઝાડા થયા ત્યારે જેટલી વખત શૌચ માટે જાય તેટલી વખત સ્નાન કરે જ.",
          "શ્રીજીની આજ્ઞાનું યથાર્થ પાલન એ જ તેમનું જીવન હતું. શિક્ષાપત્રી, ધર્મામૃત અને નિષ્કામશુદ્ધિનું અલ્પ વચન પણ કોઈ દિવસ લોપતા નહીં. એ વચનો ઉપર સ્વામીશ્રી બહુ જ ઝીણી દ્રષ્ટિ રાખતા. કોઈથી તે વચનનો લોપ થયો હોય તો તેને અચૂક પ્રાયશ્ચિત કરાવતા."
        ]
      }
    ]
  },
  "das-bhav": {
    heading: "દાસભાવ",
    note: "",
    activityDetails: activityInfo["das-bhav"],
    questions: [
      {
        number: "1",
        question: "“અક્ષર પુરુષોત્તમની વાતો મારા માથા પર બેસીને કરે તો પણ ઓછું છે.” – આ વાક્ય પરથી શાસ્ત્રીજી મહારાજના અંતરનો કયો ભાવ પ્રગટ થાય છે?",
        options: ["હરિભક્તોના અંતરની લાગણીની સમજ", "નાની જગ્યામાં પણ સાંકડે માકડે ચલાવી લેવાની ભાવના", "નિષ્ઠા પ્રવર્તનની સેવા કરનારનો મહિમા", "ઉપરના તમામ"],
        correct: 2,
        prasang: [
          "“અક્ષર પુરુષોત્તમની વાતો મારા માથા પર બેસીને કરે તો પણ ઓછું છે.” – આ વાક્ય પરથી શાસ્ત્રીજી મહારાજના અંતરનો નિષ્ઠા પ્રવર્તનની સેવા કરનારનો મહિમા પ્રગટ થાય છે.",
          "આ વાક્ય શાસ્ત્રીજી મહારાજની અક્ષરપુરુષોત્તમ ઉપાસના પ્રત્યેની અત્યંત નિષ્ઠા અને આ જ્ઞાનનો પ્રસાર કરનારા ભક્તો પ્રત્યેનો તેમનો અપાર મહિમા અને દાસભાવ દર્શાવે છે."
        ]
      },
      {
        number: "2",
        question: "૨૦૨૩ના વર્ષમાં નોર્થ અમેરિકા અક્ષરધામ મહોત્સવ દરમિયાન મહંત સ્વામી મહારાજે ખાલી જગ્યાની ચરણરજ માથે ચડાવી — એ કોની હતી?",
        options: ["સદ્‌ગુરુ સંતોની", "દર્શનાર્થીઓની", "સ્વયંસેવકોની", "ઉપરના તમામ"],
        correct: 2
      },
      {
        number: "3",
        question: "શાસ્ત્રીજી મહારાજના કયા વચનમાં આપણને દાસભાવના દર્શન થાય છે?",
        options: ["“અમે તો ખીચડિયા સાધુ છીએ.”", "“૪૦ વર્ષ ધોકા ખાધેલા, તે ખમવાને સ્વભાવ પડી ગયો છે...”", "“આપણે તો અક્ષરપુરુષોત્તમના બળદિયા છીએ”", "“આપણે ક્યાં નેતા છીએ? આપણે તો શાસ્ત્રી છીએ.”"],
        correct: 2
      }
    ]
  },
  mahima: {
    heading: "મહિમા",
    note: "",
    activityDetails: activityInfo.mahima,
    questions: [
      {
        number: "1",
        question: "“તમારા શિષ્યો ભવિષ્યમાં તમારી સોનાની મૂર્તિ પધરાવશે” – આ વાક્ય કોણે કહ્યું હતું?",
        options: ["કૃપાશંકર પંડ્યા", "પ્રભાશંકર જોશી", "દોલતરામભાઈ પંડ્યા", "કૃષ્ણરામ શાસ્ત્રી"],
        correct: 2,
        prasang: [
          "“તમારા શિષ્યો ભવિષ્યમાં તમારી સોનાની મૂર્તિ સ્થાપશે” – આ વાક્ય દોલતરામભાઈ પંડ્યાએ કહ્યું હતું.",
          "“ગુજરાતી સાહિત્યના સાક્ષાર દોલતરામ કૃપારામ પંડ્યાએ એમની પાસેથી શુદ્ધ ઉપાસનાનું આ રહસ્ય સમજી એમ કહ્યું હતું કે ‘તમારું કાર્ય એવું છે કે ભવિષ્યમાં તમારી સુવર્ણની મૂર્તિની પ્રતિષ્ઠા આ સંપ્રદાયમાં થશે.’”",
          "નડિયાદના સાક્ષર અને વરતાલ મંદિરના ટ્રસ્ટી દોલતરામભાઈ પંડ્યાએ જ્યારે શાસ્ત્રીજી મહારાજ પાસેથી વચનામૃતના આધારે અક્ષર-પુરુષોત્તમ ઉપાસનાની સ્પષ્ટતા સાંભળી, ત્યારે તેઓ અત્યંત પ્રભાવિત થયા હતા.",
          "સને ૧૯૧૪માં દોલતરામ પંડ્યાએ શાસ્ત્રીજી મહારાજને પોતાના ઘરે પધરામણી માટે નિમંત્રણ આપ્યું. શાસ્ત્રીજી મહારાજે વચનામૃતના આધારે અઢી કલાક સુધી અક્ષર-પુરુષોત્તમ ઉપાસનાનો શુદ્ધ સિદ્ધાંત સમજાવ્યો.",
          "સ્વામીશ્રીની વાતો સાંભળી દોલતરામભાઈના હૈયાના કમાડ ખૂલી ગયા અને પૂર્વગ્રહો ઓગળી ગયા. તેઓ બોલી ઊઠ્યા કે ભવિષ્યમાં તમારા શિષ્યો તમારી સુવર્ણની મૂર્તિઓ પધરાવશે."
        ]
      },
      {
        number: "2",
        question: "ઈશ્વરભાઈની ઈમેજ સ્ક્રીન પર બતાવવામાં આવી છે. આ છબીમાં દેખાતા ‘મુક્તરાજ’ કોણ છે?",
        options: ["આશાભાઈ", "ઈશ્વરભાઈ", "જેઠા ભગત", "જેઠાલાલ સ્વામીનારાયણ"],
        correct: 1
      },
      {
        number: "3",
        question: "____________ની ઈમેજ સ્ક્રીન પર બતાવવામાં આવી છે. આ છબીમાં દેખાતા ‘મુક્તરાજ’ કોણ છે?",
        options: ["આશાભાઈ", "ઈશ્વરભાઈ", "જેઠા ભગત", "જેઠાલાલ સ્વામીનારાયણ"],
        correct: 1
      },
      {
        number: "4",
        question: "મહંત સ્વામી મહારાજ મુજબ દાસભાવ કેળવવાનો મુખ્ય ઉપાય કયો છે?",
        options: ["વધુ પડતું કામ કરવું", "મહિમા સમજવો", "મૌન રહેવું", "ઉપવાસ કરવા"],
        correct: 1,
        prasang: [
          "કણાદ (સુરત) on 2024-02-02: આજે સ્વામીશ્રીનો દીક્ષાદિન હોવાથી કથાવાર્તાની જગ્યાએ પ્રશ્નોત્તરીનું આયોજન હતું.",
          "પ્રશ્ન: “સ્વામી, આપને દીક્ષા આપી ત્યારબાદ યોગીબાપાએ બે મુક્તો જેવા હરિભક્તોને દંડવત કરાવ્યા હતા! તો આવી રીતે અમે પણ અમારા જીવનમાં દાસભાવ કેવી રીતે વધુ દૃઢ કરી શકીએ?”",
          "“મહિમા!” સ્વામીશ્રીએ તરત જ કહ્યું: “બધાનો મહિમા સમજાય તો દાસભાવ આવે: એક-બેનો નહીં, બધ્ધાનો મહિમા સમજવો પડે.”",
          "પ્રશ્ન: “દાસભાવ અમારા જીવનમાં આવી ગયો છે તે ખબર કેવી રીતે પડે?” સ્વામીશ્રી કહે: “તમને મહિમા સમજાય, આનંદ આનંદ રહે.”"
        ]
      }
    ]
  }
};
