// src/data/timelineData.js
// Comprehensive, historically verified chronology of the 1976 Soweto Uprising
import assets from "../assets";

export const timelinePhases = [
  { id: "all", label: "Full Chronology" },
  { id: "seeds", label: "1. Roots & Oppression (1953–1974)" },
  { id: "buildup", label: "2. The Build-up & Strikes (Jan–June 15, 1976)" },
  { id: "june16", label: "3. June 16, 1976 (Hour-by-Hour)" },
  { id: "spread", label: "4. Nationwide Revolt (June 17–Dec 1976)" },
  { id: "legacy", label: "5. Martyrdom & Legacy (1977–Present)" }
];

export const timelineEvents = [
  {
    id: "bantu-education-1953",
    year: "1953",
    date: "1953",
    phase: "seeds",
    title: "Bantu Education Act (Act No. 47)",
    subtitle: "The Legal Foundation of Educational Oppression",
    summary: "The apartheid government passes the Bantu Education Act, engineered by Dr. Hendrik Verwoerd to deliberately restrict Black education to manual labor and perpetuate white minority supremacy.",
    location: "Parliament of South Africa, Cape Town",
    keyFigure: "Dr. Hendrik F. Verwoerd (Minister of Native Affairs)",
    impact: "Created separate, vastly underfunded racial schooling where per-capita spending on white children was up to 15 times higher than on Black children.",
    keyQuote: "\"There is no place for the Bantu in the European community above the level of certain forms of labour... What is the use of teaching the Bantu child mathematics when it cannot use it in practice in education?\" — Dr. H.F. Verwoerd",
    details: [
      "Schooling was removed from provincial and missionary oversight and placed under the Department of Bantu Education.",
      "Per capita spending: In 1975, the state spent approximately R644 per year on each white student, compared to just R42 on a Black student.",
      "Classrooms in Soweto regularly exceeded 60 to 80 students per teacher, with shortages of desks, basic books, and laboratory equipment."
    ],
    slides: [
      {
        image: assets.witsArchive0235,
        title: "Bantu Education Schoolroom",
        caption: "Overcrowded Black township classroom under the Bantu Education system. Desks and textbooks were scarce, and schools were designed to train children for servitude.",
        credit: "Wits Historical Papers Research Archive"
      },
      {
        image: assets.AL2446_1955,
        title: "The Architecture of Segregation",
        caption: "Apartheid legislation codified racial inequality into every sphere of youth life, from residency passes to school curricula.",
        credit: "Historical Papers Research Archive / AL2446"
      },
      {
        image: assets.witsArchive0127,
        title: "Defiance in the Townships",
        caption: "Communities consistently resisted school apartheid from its inception, laying the groundwork for student activism.",
        credit: "Wits University Archive"
      }
    ]
  },
  {
    id: "black-consciousness-1968",
    year: "December 1968",
    date: "December 1968",
    phase: "seeds",
    title: "Rise of Black Consciousness & SASO",
    subtitle: "Psychological Liberation Among the Youth",
    summary: "Steve Biko, Barney Pityana, and fellow Black university students break from the multiracial NUSAS to form the South African Students' Organisation (SASO), sparking the Black Consciousness Movement (BCM).",
    location: "Marianhill, Natal",
    keyFigure: "Steve Biko & Barney Pityana",
    impact: "Empowered a generation of young Black South Africans to reject feelings of racial inferiority, proclaim 'Black is Beautiful', and take control of their own liberation.",
    keyQuote: "\"The most potent weapon in the hands of the oppressor is the mind of the oppressed.\" — Steve Biko",
    details: [
      "SASO argued that Black South Africans needed psychological liberation before political liberation could succeed.",
      "Black Consciousness ideology rapidly permeated Soweto high schools through student debates, poetry, drama, and youth leadership workshops.",
      "Inspired youth to view themselves not as victims of apartheid, but as the vanguard of resistance."
    ],
    slides: [
      {
        image: assets.img1,
        title: "The Vanguard of Consciousness",
        caption: "Students discussing Black Consciousness philosophy and organizing youth networks across Soweto.",
        credit: "South African History Online Archive"
      },
      {
        image: assets.AL2446_1955,
        title: "Steve Biko's Enduring Vision",
        caption: "Black Consciousness taught students to cast off internalized oppression and organize independently.",
        credit: "Historical Papers Research Archive"
      }
    ]
  },
  {
    id: "sasm-formation-1972",
    year: "1971–1972",
    date: "March 1972",
    phase: "seeds",
    title: "High School Mobilization: Formation of SASM",
    subtitle: "High School Students Build an Underground Network",
    summary: "The South African Students Movement (SASM) expands across Soweto high schools, including Morris Isaacson, Naledi High, and Orlando West, creating an organized network of student activists.",
    location: "Soweto, Johannesburg",
    keyFigure: "Tsietsi Mashinini, Murphy Morobe, Seth Mazibuko",
    impact: "Established the organizational backbone that later planned and coordinated the June 16 demonstration.",
    keyQuote: "\"We felt the dignity of our people had been trampled for too long. We in high school decided it was our turn to stand up.\" — Murphy Morobe",
    details: [
      "SASM focused on student grievances: lack of textbooks, excessive exam fees, corporal punishment, and poor infrastructure.",
      "Student leaders were heavily influenced by banned liberation literature and Black theology.",
      "Regular weekend workshops were held at Donaldson Orlando Community Centre (DOCC) in Orlando."
    ],
    slides: [
      {
        image: assets.img3,
        title: "High School Student Leadership",
        caption: "SASM student leaders debating school conditions and organizing student representative bodies in 1974-1975.",
        credit: "Soweto Archive Collections"
      },
      {
        image: assets.witsArchive0235,
        title: "Youth Discussions at DOCC",
        caption: "The Donaldson Orlando Community Centre served as a vital intellectual sanctuary for student planning.",
        credit: "Wits Historical Papers"
      }
    ]
  },
  {
    id: "afrikaans-decree-1974",
    year: "1974",
    date: "1974",
    phase: "seeds",
    title: "The Afrikaans Medium Decree",
    subtitle: "Northern Transvaal Regional Circular No. 2 of 1974",
    summary: "Regional Director J.G. Erasmus issues a government circular decreeing that Afrikaans must be used on a 50/50 basis with English in secondary schools for Black students, specifically enforcing it for Mathematics, Physical Science, and Social Studies.",
    location: "Pretoria & Southern Transvaal Region",
    keyFigure: "M.C. Botha (Minister of Bantu Education), Andries Treurnicht (Deputy Minister)",
    impact: "Afrikaans was universally recognized as the language of the police, prison wardens, and apartheid rulers. Forcing children to write exams in a language they barely understood led to catastrophic failure rates.",
    keyQuote: "\"A Black inhabitant of South Africa who learns to pronounce words in English or Afrikaans must realize that they are the language of his country... No, I have not consulted the Black people... why should I consult them?\" — Punt Janson, Deputy Minister of Bantu Education",
    details: [
      "The decree stipulated: English for General Science and practical subjects; Afrikaans for Mathematics, Geography, and History; indigenous African languages only for Religion and Music.",
      "Teachers themselves were not fluent in Afrikaans and struggled to deliver lessons in the language.",
      "Both teachers and school boards warned the Department of Bantu Education that enforcing the circular would cause a massive rebellion."
    ],
    slides: [
      {
        image: assets.imgMain,
        title: "The Language of the Oppressor",
        caption: "Students holding protest banners: 'If we must do Afrikaans, Vorster must do Zulu' and 'Afrikaans Stinks'.",
        credit: "The World Newspaper Archive"
      },
      {
        image: assets.march1976,
        title: "Rejecting the Circular",
        caption: "Soweto students taking to the streets to demand the total repeal of Circular No. 2 of 1974.",
        credit: "Peter Magubane / Historical Archive"
      }
    ]
  },
  {
    id: "meadowlands-defiance-1976",
    year: "Feb–March 1976",
    date: "February 1976",
    phase: "buildup",
    title: "Meadowlands School Board Dismissals",
    subtitle: "Community and Teacher Resistance Crushed by the State",
    summary: "The Meadowlands Tswana School Board in Soweto formally refuses to enforce the 50/50 Afrikaans instruction decree. In response, the apartheid government summarily dismisses the entire board and replaces it with compliant appointees.",
    location: "Meadowlands, Soweto",
    keyFigure: "Meadowlands School Board members & Parents",
    impact: "Showed students and parents that constitutional and administrative appeals were futile against the apartheid state.",
    keyQuote: "\"We told the circuit inspector our children did not understand Afrikaans. He said: 'It is the law. Comply or resign.' So they sacked us.\" — Meadowlands Board Member",
    details: [
      "Two school principals in Meadowlands resigned in protest against the forced implementation.",
      "Chief Ministers of several homelands, including Hudson Ntsanwisi and Gatsha Buthelezi, warned Pretoria of impending unrest.",
      "Students realized that parents had exhausted diplomatic channels, leaving direct action as the only recourse."
    ],
    slides: [
      {
        image: assets.AL2446_0127,
        title: "Township Meeting of Defiance",
        caption: "Parents and community elders meeting in Soweto in early 1976 to discuss the crisis in township schools.",
        credit: "Wits Historical Papers"
      },
      {
        image: assets.img2,
        title: "Solidarity Across Schools",
        caption: "Student delegates from Meadowlands contacting counterparts in Orlando and Morris Isaacson.",
        credit: "Soweto Student Archive"
      }
    ]
  },
  {
    id: "orlando-west-strikes-may1976",
    year: "17 May 1976",
    date: "17 May 1976",
    phase: "buildup",
    title: "The School Boycott Wave Begins",
    subtitle: "Orlando West Junior Secondary Students Walk Out",
    summary: "Students at Orlando West Junior Secondary School go on full strike, refusing to enter classrooms or write mid-year exams in Afrikaans. The boycott rapidly spreads to Belle Higher Primary, Emthonjeni, and Thabane schools.",
    location: "Orlando West & Phefeni, Soweto",
    keyFigure: "Orlando West Junior Secondary Students",
    impact: "Over 500 students were actively boycotting classes by late May. Police intervened with tear gas and arrests, but students refused to return.",
    keyQuote: "\"We stayed out of class because writing an exam in Afrikaans meant failing before we even wrote a single word.\" — Striking student",
    details: [
      "On 17 May 1976, students locked school gates and sang freedom songs outside.",
      "On 24 May, students at Belle Higher Primary joined the boycott.",
      "The Special Branch (security police) began questioning student leaders and visiting headmasters' offices."
    ],
    slides: [
      {
        image: assets.sowetoProtestsWebp,
        title: "Students Walk Out",
        caption: "Orlando West and Belle Higher Primary students rallying outside school premises in May 1976.",
        credit: "Archival Press Photo"
      },
      {
        image: assets.img3,
        title: "Defiant Assembly",
        caption: "High school boycotters holding emergency gatherings to coordinate strike actions across schools.",
        credit: "Historical Papers Archive"
      }
    ]
  },
  {
    id: "tutu-warning-june1976",
    year: "11 June 1976",
    date: "11 June 1976",
    phase: "buildup",
    title: "Desmond Tutu's Urgent Warning to Vorster",
    subtitle: "\"A Bloodbath Is Inevitable Unless Grievances Are Heard\"",
    summary: "The Anglican Dean of Johannesburg, Desmond Tutu, writes a poignant and urgent personal letter to Prime Minister B.J. Vorster, pleading for immediate dialogue and warning that township anger had reached boiling point.",
    location: "St Mary's Cathedral, Johannesburg",
    keyFigure: "Archbishop Desmond Tutu & Prime Minister B.J. Vorster",
    impact: "Vorster completely dismissed the warning as communist propaganda, refusing to meet or reconsider the Afrikaans decree.",
    keyQuote: "\"I write to you, sir, because our people are growing increasingly desperate... I am writing to you, sir, to plead with you before it is too late, because a bloodbath is inevitable unless something drastic is done.\" — Desmond Tutu",
    details: [
      "Tutu warned that Black youths felt they had nothing left to lose.",
      "Vorster's private secretary replied coldly that the Prime Minister saw no reason to intervene in school administration.",
      "Five days later, Tutu's tragic prophecy came true."
    ],
    slides: [
      {
        image: assets.reutersArchive,
        title: "Tension Across Johannesburg",
        caption: "By early June 1976, police presence around Soweto had visibly increased amid growing rumors of student protest.",
        credit: "Reuters Archive"
      },
      {
        image: assets.AL2446_0127,
        title: "Township in Waiting",
        caption: "The simmering tension in Soweto's dusty streets days before the fateful march.",
        credit: "Wits Historical Papers"
      }
    ]
  },
  {
    id: "docc-meeting-june13",
    year: "13 June 1976",
    date: "13 June 1976",
    phase: "buildup",
    title: "The Historic DOCC SASM Meeting",
    subtitle: "Formation of the Action Committee & Planning the Peaceful March",
    summary: "Over 300 to 400 student delegates from all high and secondary schools in Soweto assemble at the Donaldson Orlando Community Centre (DOCC). They establish the Action Committee (later the SSRC) and elect 19-year-old Tsietsi Mashinini to coordinate a mass peaceful march on Wednesday, 16 June.",
    location: "Donaldson Orlando Community Centre (DOCC), Orlando",
    keyFigure: "Tsietsi Mashinini (Morris Isaacson), Murphy Morobe, Seth Mazibuko",
    impact: "Set the exact date, assembly points, route, and strict rules of non-violence for the June 16 demonstration.",
    keyQuote: "\"We must march peacefully. No stones, no weapons, no destruction. We are students exercising our moral right to say NO to Afrikaans.\" — Tsietsi Mashinini",
    details: [
      "Two delegates were selected from each Soweto secondary school to form the central Action Committee.",
      "The plan: students would march in synchronized columns from north, south, and central Soweto and converge at Orlando Stadium for a mass rally.",
      "Strict instructions were given to avoid initiating conflict with police."
    ],
    slides: [
      {
        image: assets.witsArchive0235,
        title: "The DOCC Hall",
        caption: "Interior of Donaldson Orlando Community Centre, where hundreds of student delegates voted on the June 16 march.",
        credit: "Wits Historical Papers Archive"
      },
      {
        image: assets.img1,
        title: "Student Leadership Strategy",
        caption: "Tsietsi Mashinini and fellow student leaders mapped out routes from Naledi, Morris Isaacson, and Orlando West.",
        credit: "Historical Records Collection"
      }
    ]
  },
  {
    id: "june16-0700",
    year: "June 16, 1976",
    date: "16 June 1976 — 07:00",
    phase: "june16",
    title: "07:00 AM — School Assemblies & Cardboard Placards",
    subtitle: "Students Gather Across Soweto with Singing & Banners",
    summary: "At 07:00 AM on a crisp winter Wednesday, thousands of students assemble in their school uniforms at Morris Isaacson, Naledi High, Phefeni, Sekano Ntoane, and Belle Higher Primary. They produce placards painted on cardboard boxes and slate.",
    location: "Schools across Soweto",
    keyFigure: "Students of Morris Isaacson, Naledi High & Phefeni",
    impact: "An estimated 15,000 to 20,000 school children joined the march, spanning ages from 10 to 20.",
    keyQuote: "\"We woke up early. We put on our clean school uniforms. We took cardboard from grocery boxes and wrote: 'Away with Afrikaans' and 'Black Education Stinks'.\" — Antoinette Sithole",
    details: [
      "At Morris Isaacson High, Principal Lekgau Mathabathe looked on with quiet sympathy as Tsietsi Mashinini addressed the morning assembly.",
      "Students began marching through township streets, calling out classmates from adjacent schools: 'Join the march! Come out!'.",
      "Songs of peaceful dignity echoed through the streets: 'Morena Boloka Sechaba sa Heso' and 'Nkosi Sikelel' iAfrika'."
    ],
    slides: [
      {
        image: assets.march1976,
        title: "Students Taking the Streets",
        caption: "Students leaving their school gates in orderly columns, carrying handmade cardboard placards.",
        credit: "Peter Magubane / Bailey's African History Archives"
      },
      {
        image: assets.imgMain,
        title: "Placards of Freedom",
        caption: "Cardboard slogans captured the student sentiment: 'Afrikaans is the language of our oppressors'.",
        credit: "The World Newspaper Archive"
      }
    ]
  },
  {
    id: "june16-0830",
    year: "June 16, 1976",
    date: "16 June 1976 — 08:30",
    phase: "june16",
    title: "08:30 AM — Convergence at Vilakazi & Moema Streets",
    subtitle: "Over 15,000 Students Unite Heading for Orlando Stadium",
    summary: "The separate marching columns from Western, Central, and Eastern Soweto converge into a disciplined sea of youth along Vilakazi and Moema streets in Orlando West, proceeding toward their destination at Orlando Stadium.",
    location: "Vilakazi Street & Moema Street, Orlando West",
    keyFigure: "Tsietsi Mashinini, Student Marshals",
    impact: "Demonstrated unprecedented youth unity, solidarity, and self-organization in the face of the apartheid state.",
    keyQuote: "\"It was a beautiful, disciplined sight. Thousands of children with school ties and blazers, smiling, holding hands, singing. There were no stones in our hands.\" — Dan Montsisi",
    details: [
      "Student marshals walked along the flanks of the march to keep traffic clear and prevent hotheaded youths from provoking bystanders.",
      "Township residents, nurses from Baragwanath Hospital, and taxi drivers waved and raised clenched fist salutes in support.",
      "The planned destination was Orlando Stadium, where a mass prayer and rally were scheduled."
    ],
    slides: [
      {
        image: assets.sowetoProtestsWebp,
        title: "The Converging Column",
        caption: "Thousands of students marching four to five abreast through Orlando West toward the stadium.",
        credit: "AP / Archival Press"
      },
      {
        image: assets.img1,
        title: "Unity of Soweto High Schools",
        caption: "Students from different ethnic backgrounds (Zulu, Sotho, Tswana, Xhosa) marching together against apartheid divide-and-rule.",
        credit: "Historical Papers Archive"
      }
    ]
  },
  {
    id: "june16-0900",
    year: "June 16, 1976",
    date: "16 June 1976 — 09:00",
    phase: "june16",
    title: "09:00 AM — The Police Confrontation & Attack Dogs",
    subtitle: "Police Barricade the Route Near Orlando West High School",
    summary: "A convoy of South African Police vehicles led by Colonel Johannes Kleingeld blocks the student march route near Orlando West High School. Armed officers form a line across the street with automatic rifles, sidearms, and police attack dogs.",
    location: "Near Orlando West High School & Klipspruit Bridge",
    keyFigure: "Colonel Johannes Kleingeld (South African Police)",
    impact: "Instead of dialoguing or negotiating safe passage to the stadium, police unleashed vicious patrol dogs and launched tear gas into the densely packed crowd of children.",
    keyQuote: "\"They didn't tell us to turn back. They just got out of their vans with guns and dogs. Then they let the dogs loose on us.\" — Witness testimony at the TRC",
    details: [
      "Students stopped about 40 meters from the police line, raised their hands in peace, and began singing.",
      "Police released their patrol dogs into the crowd; one dog attacked a young student, prompting students to throw stones in self-defense, killing the dog.",
      "Police officers threw tear gas canisters; students unfamiliar with tear gas were choked and blinded."
    ],
    slides: [
      {
        image: assets.policeDogs,
        title: "Security Forces with Attack Dogs",
        caption: "South African police units using German Shepherd attack dogs to intimidate student crowds.",
        credit: "Historical Photo Archive"
      },
      {
        image: assets.bbcArchive,
        title: "The Standoff on Moema Street",
        caption: "Police vehicles forming a blockade across the street as students gathered in peaceful protest.",
        credit: "BBC Archive / Archival Footage"
      }
    ]
  },
  {
    id: "june16-0930",
    year: "June 16, 1976",
    date: "16 June 1976 — 09:30",
    phase: "june16",
    title: "09:30 AM — Police Open Fire: The Fatal Shots",
    subtitle: "Live Ammunition Fired into Unarmed Children; Hastings Ndlovu & Hector Pieterson Shot",
    summary: "Without firing warning shots into the air, Colonel Kleingeld and his officers draw revolvers and rifles, opening fire with live rounds directly into the unarmed crowd of school children. 15-year-old Hastings Ndlovu and 12-year-old Hector Pieterson are fatally wounded.",
    location: "Intersection of Moema & Vilakazi Streets, Orlando West",
    keyFigure: "Hastings Ndlovu (15), Hector Pieterson (12), Col. Kleingeld",
    impact: "Hastings Ndlovu was shot first near the bridge. Hector Pieterson was struck in the chest yards away. The massacre triggered nationwide revolt.",
    keyQuote: "\"I heard a loud bang. I thought it was tear gas. Then I saw Hector fall backwards, clutching his chest, with blood coming from his mouth.\" — Antoinette Sithole",
    details: [
      "The Cillié Commission later confirmed that police fired hundreds of rounds of live .38 revolver and .303 rifle ammunition into the crowd.",
      "Hastings Ndlovu, head of the student SRC at Orlando North Secondary, was shot in the head and rushed to Baragwanath Hospital where he died.",
      "Hector Pieterson, just 12 years old, had followed his sister Antoinette from school and was killed instantly."
    ],
    slides: [
      {
        image: assets.hectorSamNzima,
        title: "The Tragic Aftermath",
        caption: "Moments after police opened fire, students scrambled to rescue fallen children along Moema Street.",
        credit: "Sam Nzima / The World"
      },
      {
        image: assets.AL2446_0127,
        title: "Shell Casings and Chaos",
        caption: "Smoke, tear gas, and live ammunition transformed a peaceful demonstration into a war zone.",
        credit: "Wits Historical Papers"
      }
    ]
  },
  {
    id: "june16-0945",
    year: "June 16, 1976",
    date: "16 June 1976 — 09:45",
    phase: "june16",
    title: "09:45 AM — The Iconic Sam Nzima Photograph",
    subtitle: "Mbuyisa Makhubo Carries Hector Pieterson; The World Learns the Truth",
    summary: "18-year-old student Mbuyisa Makhubo scoops up the dying 12-year-old Hector Pieterson and runs desperately down Moema Street, accompanied by Hector's weeping sister Antoinette. Photojournalist Sam Nzima captures the six decisive frames that shocked the conscience of the world.",
    location: "Moema Street, Orlando West, Soweto",
    keyFigure: "Mbuyisa Makhubo, Hector Pieterson, Antoinette Sithole, Sam Nzima",
    impact: "The photograph shattered the apartheid state's international propaganda, becoming the defining symbol of the anti-apartheid struggle.",
    keyQuote: "\"I saw this boy pick up Hector. I ran alongside them, taking six shots on my Pentax. I knew the police would kill me for this film, so I pulled the roll out and stuffed it down my sock.\" — Sam Nzima",
    details: [
      "Sophie Tema, a reporter for The World, drove Mbuyisa and Antoinette in her press car to Phefeni Clinic, where Hector was officially declared dead on arrival.",
      "Sam Nzima's editor Percy Qoboza published the photograph on the front page of The World the next morning under the headline 'GOD HELP US'.",
      "Mbuyisa Makhubo was relentlessly hunted by the Special Branch, forced into exile in Botswana and Nigeria, and vanished without a trace in 1979."
    ],
    slides: [
      {
        image: assets.hectorSamNzima,
        title: "The Iconic Photograph",
        caption: "Mbuyisa Makhubo carrying 12-year-old Hector Pieterson, with Hector's sister Antoinette running alongside in grief. Photographed by Sam Nzima on 16 June 1976.",
        credit: "Sam Nzima / The World / AP"
      },
      {
        image: assets.samCoffin,
        title: "Sam Nzima's Historic Legacy",
        caption: "Sam Nzima risked his life to smuggle the film roll in his sock past police checkpoints.",
        credit: "Tribute Archive / Sowetan"
      },
      {
        image: assets.obamaMemorial,
        title: "Global Pilgrimage",
        caption: "Barack Obama and world leaders visiting the Hector Pieterson Memorial in Soweto alongside Antoinette Sithole.",
        credit: "Official White House Photo / Pete Souza"
      }
    ]
  },
  {
    id: "june16-afternoon",
    year: "June 16, 1976",
    date: "16 June 1976 — Afternoon & Night",
    phase: "june16",
    title: "Afternoon & Night — The Township Erupts in Revolt",
    subtitle: "Apartheid State Offices Torched; Soweto Placed Under Military Lockdown",
    summary: "Enraged by the murder of children, tens of thousands of residents join the students in open rebellion. Government beer halls, West Rand Administration Board (WRAB) offices, and state vehicles are set ablaze. Paramilitary police seal off Soweto.",
    location: "Across all 26 townships of Soweto",
    keyFigure: "Soweto Community, Minister of Police Jimmy Kruger",
    impact: "Apartheid administrative authority in Soweto collapsed completely within hours. Police were ordered to shoot on sight.",
    keyQuote: "\"By afternoon, the smoke from burning government offices darkened the sky. We were no longer afraid. The fear had died with the children.\" — Soweto youth activist",
    details: [
      "Over 22 government buildings, 20 beer halls (seen as tools of state social control), and dozens of police vehicles were destroyed.",
      "Two white officials were killed in the crowd's fury, including Dr. Melville Edelstein, a sympathetic sociologist caught in the crossfire.",
      "By 18:00, heavily armed paramilitary riot police in Hippos (armored vehicles) mounted with machine guns cordoned off every entrance into Soweto."
    ],
    slides: [
      {
        image: assets.reutersArchive,
        title: "Soweto in Flames",
        caption: "Burning administration board buildings and vehicles as township youth retaliated against state violence.",
        credit: "Reuters Historical Archive"
      },
      {
        image: assets.AL2446_0235,
        title: "Township Under Siege",
        caption: "Armored police Hippos patrolling township streets enforcing a shoot-to-kill curfew.",
        credit: "Wits Historical Papers"
      }
    ]
  },
  {
    id: "revolt-spreads-june17",
    year: "June 17–18, 1976",
    date: "17–18 June 1976",
    phase: "spread",
    title: "The Revolt Spreads to Alexandra & East Rand",
    subtitle: "Heavy Paramilitary Crackdown Across the Witwatersrand",
    summary: "High school students in Alexandra township, Kagiso, and across the East Rand launch sympathy strikes and protests. White university students at Wits University march down Jan Smuts Avenue in solidarity and are attacked by white vigilantes.",
    location: "Alexandra, Kagiso, Krugersdorp, Wits University",
    keyFigure: "Alexandra Student Leaders & Wits Solidarity Students",
    impact: "Proved that the Soweto uprising was not an isolated disturbance, but the start of a nationwide insurrection.",
    keyQuote: "\"We could not sit in class while our brothers and sisters were being shot like dogs in Soweto.\" — Alexandra student demonstrator",
    details: [
      "Police killed at least 11 people in Alexandra township on June 17 as youths attacked administration buildings.",
      "Wits University students organized a protest down Jan Smuts Avenue carrying placards: 'Do not shoot our children'.",
      "Police Minister Jimmy Kruger told Parliament that the protests were an orchestrated communist plot."
    ],
    slides: [
      {
        image: assets.policeDogs,
        title: "Paramilitary Response in Alexandra",
        caption: "Heavily armed police units deployed across the Witwatersrand townships to suppress student solidarity protests.",
        credit: "Historical Archive"
      },
      {
        image: assets.AL2446_1955,
        title: "The Rising Generation",
        caption: "Youth in Alexandra and surrounding townships standing unified against police harassment.",
        credit: "Historical Papers Research Archive"
      }
    ]
  },
  {
    id: "un-resolution-392",
    year: "19 June 1976",
    date: "19 June 1976",
    phase: "spread",
    title: "UN Security Council Adopts Resolution 392",
    subtitle: "Global Outrage Condemns the Apartheid Regime",
    summary: "The United Nations Security Council convenes in an emergency session and unanimously passes Resolution 392, strongly condemning the South African racist regime for its resort to massive violence and killings against school children.",
    location: "United Nations Headquarters, New York",
    keyFigure: "UN Security Council Delegates",
    impact: "Marked a decisive turning point in international diplomacy, accelerating global calls for total sanctions and arms embargoes against South Africa.",
    keyQuote: "\"The Security Council strongly condemns the South African Government for its resort to massive violence against and killings of the African people including schoolchildren and students opposing racial discrimination.\" — UN Resolution 392",
    details: [
      "The resolution recognized the legitimacy of the South African people's struggle for the elimination of apartheid.",
      "Mass demonstrations were held outside South African embassies in London, Washington, Stockholm, and Paris.",
      "Multinational corporate boycotts and sporting sanctions gained massive international momentum."
    ],
    slides: [
      {
        image: assets.reutersArchive,
        title: "Front Pages Across the Globe",
        caption: "Sam Nzima's photograph featured on front pages from London to Tokyo, destroying Pretoria's international PR.",
        credit: "Reuters / International Press Archive"
      },
      {
        image: assets.witsArchive0127,
        title: "International Solidarity",
        caption: "Anti-Apartheid Movement (AAM) chapters around the globe picketing South African embassies.",
        credit: "Wits Historical Papers"
      }
    ]
  },
  {
    id: "stayaways-august1976",
    year: "Aug–Dec 1976",
    date: "August 1976",
    phase: "spread",
    title: "National Strikes & The Cape Town Revolt",
    subtitle: "Student-Worker Alliance Shuts Down Johannesburg Economy",
    summary: "The Soweto Students' Representative Council (SSRC) calls for nationwide worker stayaways ('Azikhwelwa'). Over 75% of Black workers heed the call, paralyzing Johannesburg's economy. Protests erupt across Cape Town (Langa, Nyanga, Gugulethu) and the Eastern Cape.",
    location: "Cape Town, Port Elizabeth, Durban, Johannesburg",
    keyFigure: "SSRC & Township Trade Unionists",
    impact: "Proved that students and workers acting together possessed the power to halt the national economy.",
    keyQuote: "\"We asked our parents to stay at home from work to stand with their children. And they did. The trains were empty.\" — SSRC organizer",
    details: [
      "Three massive stayaways were held between August and November 1976, each with over 200,000 workers staying away.",
      "In Cape Town, student protests at UWC and secondary schools in Langa and Gugulethu were met with deadly birdshot and live rounds.",
      "The uprising spread to over 160 Black townships across every province of South Africa."
    ],
    slides: [
      {
        image: assets.funeralCrowd,
        title: "Mass Funerals Turn into Resistance Rallies",
        caption: "Funerals of slain students drew hundreds of thousands of mourners, becoming defiance rallies against the police.",
        credit: "Alf Kumalo / Historical Archive"
      },
      {
        image: assets.AL2446_0235,
        title: "The Industrial Heart Paralyzed",
        caption: "Empty railway platforms as workers joined the student strike call across Gauteng.",
        credit: "Wits Historical Papers"
      }
    ]
  },
  {
    id: "exodus-mk-1976",
    year: "Late 1976",
    date: "Late 1976",
    phase: "spread",
    title: "The Great Exodus: The 'June 16 Detachment'",
    subtitle: "Over 12,000 Students Flee into Exile to Join Liberation Armies",
    summary: "Facing relentless security police manhunts, torture, and detention without trial, over 12,000 youth secretly cross borders into Botswana, Swaziland, and Mozambique to join ANC/MK and PAC training camps, forming the famous 'June 16 Detachment'.",
    location: "Botswana, Swaziland, Mozambique, Angola, Tanzania",
    keyFigure: "Tsietsi Mashinini, Murphy Morobe, MK Youth Recruits",
    impact: "Reinvigorated the armed liberation struggle with thousands of educated, motivated young cadres, fundamentally changing the balance of military resistance inside South Africa.",
    keyQuote: "\"We left not because we wanted to leave our homes, but because we knew the only way back was with the tools to overthrow this system.\" — Former MK combatant",
    details: [
      "Underground ratlines run by Winnie Madikizela-Mandela and religious leaders smuggled student leaders across borders.",
      "Tsietsi Mashinini fled to Botswana, later living in London, the United States, and Guinea until his untimely death in 1990.",
      "The influx of youth transformed Umkhonto we Sizwe into an active urban sabotage and guerrilla force."
    ],
    slides: [
      {
        image: assets.img1,
        title: "Youth in Liberation Training",
        caption: "Young recruits of the June 16 Detachment undergoing military and political training in exile camps.",
        credit: "ANC Historical Archives / Mayibuye Centre"
      },
      {
        image: assets.AL2446_1955,
        title: "The Underground Network",
        caption: "Activists who coordinated border crossings and safe houses across Southern Africa.",
        credit: "Historical Papers Research Archive"
      }
    ]
  },
  {
    id: "biko-martyrdom-1977",
    year: "Sept–Oct 1977",
    date: "12 September 1977",
    phase: "legacy",
    title: "Murder of Steve Biko & State Banning of 17 Organizations",
    subtitle: "Apartheid State Murders Black Consciousness Leader and Bans The World",
    summary: "Steve Biko is beaten to death in police custody in Pretoria. In October 1977, the apartheid government bans 17 Black Consciousness organizations, the SSRC, and shuts down The World newspaper, detaining editor Percy Qoboza.",
    location: "Pretoria Central Prison & Johannesburg",
    keyFigure: "Steve Biko, Percy Qoboza, Donald Woods",
    impact: "Triggered universal international condemnation and led the UN to impose a mandatory arms embargo against South Africa (Resolution 418).",
    keyQuote: "\"It is better to die for an idea that will live, than to live for an idea that will die.\" — Steve Biko",
    details: [
      "Biko suffered massive brain damage during interrogation in Port Elizabeth and was transported 1,200 km naked in the back of a police Land Rover to Pretoria.",
      "On 19 October 1977 ('Black Wednesday'), the regime banned SASO, SASM, SSRC, Black People's Convention, and the Christian Institute.",
      "The World newspaper was permanently banned and its offices padlocked."
    ],
    slides: [
      {
        image: assets.funeralCrowd,
        title: "Steve Biko's Funeral in King William's Town",
        caption: "Over 20,000 mourners and international diplomats attend Steve Biko's funeral, singing freedom songs in defiance of police roadblocks.",
        credit: "Peter Magubane / Historical Archive"
      },
      {
        image: assets.samCoffin,
        title: "Black Wednesday: Silencing the Press",
        caption: "Tributes and memorial banners marking the state crackdown of October 1977.",
        credit: "Historical Archive Collection"
      }
    ]
  },
  {
    id: "democracy-youth-day-1994",
    year: "1994",
    date: "16 June 1994",
    phase: "legacy",
    title: "1994: June 16 Proclaimed National Youth Day",
    subtitle: "A Free Democratic South Africa Honors Its Student Martyrs",
    summary: "Following South Africa's historic first democratic elections in April 1994, President Nelson Mandela proclaims June 16 as an official national public holiday — **Youth Day** — commemorating the heroic sacrifice of the 1976 generation.",
    location: "Union Buildings, Pretoria & Soweto",
    keyFigure: "President Nelson Mandela",
    impact: "Permanently enshrined the memory of Hector Pieterson, Hastings Ndlovu, and all fallen students in South Africa's national consciousness.",
    keyQuote: "\"The youth of 1976 fought for a democratic, non-racial South Africa. Today we honor their memory not with mere words, but with a renewed commitment to give every child quality education and dignity.\" — Nelson Mandela",
    details: [
      "Youth Day serves as an annual reminder of the power of young people to drive transformational social change.",
      "In 2002, President Thabo Mbeki opened the Hector Pieterson Memorial and Museum in Orlando West, yards from where Hector was shot.",
      "The museum stands on Vilakazi Street, which is also famous as the only street in the world where two Nobel Peace Prize laureates (Nelson Mandela and Desmond Tutu) lived."
    ],
    slides: [
      {
        image: assets.obamaMemorial,
        title: "Hector Pieterson Memorial & Museum",
        caption: "The Hector Pieterson Memorial in Orlando West, Soweto. A national monument of reflection, truth, and educational justice.",
        credit: "Hector Pieterson Museum Archive"
      },
      {
        image: assets.sowetoProtestsWebp,
        title: "The Living Legacy of 1976",
        caption: "Generations of South Africans gather annually in Soweto to retrace the march route and celebrate Youth Day.",
        credit: "South African Tourism / Archive"
      }
    ]
  },
  {
    id: "contemporary-legacy",
    year: "Present Day",
    date: "Present",
    phase: "legacy",
    title: "The Torch of Student Activism Continues",
    subtitle: "From #FeesMustFall to Decolonized Education",
    summary: "The courageous spirit of the 1976 Soweto youth continues to inspire modern student movements across South Africa and the globe, from the nationwide #FeesMustFall protests in 2015 to ongoing battles for digital access and educational equality.",
    location: "Universities & Schools Across South Africa",
    keyFigure: "Modern South African Student Activists",
    impact: "Proves that the fight for equitable, dignified, and accessible education remains an ongoing multi-generational responsibility.",
    keyQuote: "\"We stand on the shoulders of the giants of 1976. When we marched for #FeesMustFall, we walked with the spirit of Hector Pieterson and Tsietsi Mashinini in our hearts.\" — Student activist",
    details: [
      "In 2015-2016, the #FeesMustFall movement successfully halted university tuition fee increases and secured billions in student funding.",
      "Modern challenges persist: digital divide, youth unemployment, decaying township school infrastructure, and dropout rates.",
      "Youth Day calls on each generation to take up the mantle of civic leadership and educational justice."
    ],
    slides: [
      {
        image: assets.reutersArchive,
        title: "A New Generation of Voices",
        caption: "University students during the #FeesMustFall protests carrying placards echoing the historic 1976 slogans.",
        credit: "Reuters Archive / Siphiwe Sibeko"
      },
      {
        image: assets.march1976,
        title: "Remembering Why We Stood",
        caption: "The immortal courage of the 1976 school children lives on in the hearts of all who struggle for human dignity.",
        credit: "Memorial Archive"
      }
    ]
  }
];

export default timelineEvents;
