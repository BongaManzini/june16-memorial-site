// src/data/referencesData.js
// Comprehensive academic references, published books, contemporary 1976 news reports, and official inquiry archives

export const referenceCategories = [
  { id: "all", label: "All References" },
  { id: "books", label: "Books & Scholarly Works" },
  { id: "news", label: "1976 Contemporary News Articles" },
  { id: "documents", label: "Official Documents & Inquiries" },
  { id: "testimonies", label: "Eyewitness Testimonies & Oral Histories" }
];

export const referenceBooks = [
  {
    id: "nieftagodien-2013",
    type: "books",
    title: "The Soweto Uprisings: Counter-memories of June 1976",
    author: "Noor Nieftagodien",
    year: "2013",
    publisher: "Jacana Media / Ohio University Press",
    isbn: "978-1431408795",
    category: "Academic & Oral History",
    summary: "A rigorous, deeply researched historical account by Wits University historian Noor Nieftagodien. The book moves beyond simplified mythology to analyze the complex social, political, and generational dynamics inside Soweto classrooms and community organizations.",
    significance: "Crucial for understanding how SASM, high school debates, and local grievances laid the groundwork months before June 16.",
    keyQuote: "\"The uprising was not a spontaneous outburst born in a vacuum; it was the culmination of meticulous grassroots organizing, Black Consciousness philosophy, and intense student defiance against an educational system designed for subjugation.\"",
    link: "https://www.jacana.co.za/book-categories/history/the-soweto-uprisings-counter-memories-of-june-1976"
  },
  {
    id: "hirson-1979",
    type: "books",
    title: "Year of Fire, Year of Ash: The Soweto Revolt: Roots of a Revolution?",
    author: "Baruch Hirson",
    year: "1979",
    publisher: "Zed Press (London)",
    isbn: "978-0905762289",
    category: "Historical Political Economy",
    summary: "Written by anti-apartheid scholar Baruch Hirson shortly after the uprising, this seminal work provides an exhaustive socio-economic breakdown of Bantu Education, urban township labor structures, and the tactical choices of student leaders.",
    significance: "One of the earliest authoritative academic analyses documenting how student defiance triggered nationwide worker stayaways and fundamentally shifted the liberation struggle.",
    keyQuote: "\"In Soweto, the youth showed that the apartheid machine was not invincible. When the students struck, they struck at the soft underbelly of the regime's control of urban African labor.\"",
    link: "https://academic.oup.com/afraf/article-abstract/79/315/285/119957"
  },
  {
    id: "brooks-brickhill-1980",
    type: "books",
    title: "Whirlwind Before the Storm: The African National Congress and the Soweto Uprising",
    author: "Alan Brooks and Jeremy Brickhill",
    year: "1980",
    publisher: "International Defence and Aid Fund (IDAF), London",
    isbn: "978-0904759372",
    category: "Historical Documentation",
    summary: "Commissioned by the International Defence and Aid Fund, this book presents meticulous chronological evidence, underground documents, and eyewitness statements detailing the state's military repression and student coordination.",
    significance: "Provides essential documentary evidence used in international anti-apartheid trials and United Nations inquiries.",
    keyQuote: "\"The massacre of 16 June converted an entire generation into revolutionaries. From that morning onward, there could be no return to normalcy in South Africa.\"",
    link: "https://www.sahistory.org.za/archive/whirlwind-storm-african-national-congress-and-soweto-uprising"
  },
  {
    id: "biko-1978",
    type: "books",
    title: "I Write What I Like: Selected Writings",
    author: "Steve Biko",
    year: "1978 (Posthumous)",
    publisher: "Heinemann / Bowerdean Press",
    isbn: "978-0226048970",
    category: "Philosophy & Liberation Theory",
    summary: "A foundational compilation of Steve Biko's writings and speeches from 1969 until his assassination by security police in September 1977. Explains the core philosophy of Black Consciousness that inspired the Soweto student generation.",
    significance: "The intellectual manifesto behind SASO, SASM, and the psychological refusal of township students to accept Afrikaans and white paternalism.",
    keyQuote: "\"We have set out on a quest for true humanity, and somewhere on the distant horizon we can see the glittering prize. Let us march ahead with courage and determination, drawing strength from our common plight.\"",
    link: "https://www.sahistory.org.za/archive/i-write-what-i-like-steve-biko"
  },
  {
    id: "sepamla-1977",
    type: "books",
    title: "The Soweto I Love",
    author: "Sipho Sepamla",
    year: "1977",
    publisher: "Rex Collings / David Philip",
    isbn: "978-0901720886",
    category: "Literature & Poetry of Resistance",
    summary: "A powerful, raw collection of poems penned in the immediate shock and grief of the Soweto Uprising by acclaimed poet Sipho Sepamla. The book was banned by the South African Publications Board immediately upon release.",
    significance: "Captured the authentic emotional trauma, rage, and resilient soul of Soweto parents and children during the bullets and tear gas.",
    keyQuote: "\"To be a mother in Soweto / Is to carry grief in your apron strings / And listen at night / For the knock of the Hippo at your door.\"",
    link: "https://www.sahistory.org.za/people/sipho-sydney-sepamla"
  },
  {
    id: "magubane-1979",
    type: "books",
    title: "Soweto: The Fruit of Fear",
    author: "Peter Magubane",
    year: "1979",
    publisher: "Africa World Press / Nelson",
    isbn: "978-0865430402",
    category: "Photojournalism & Visual History",
    summary: "Legendary South African photojournalist Peter Magubane risked his life and endured brutal police beatings, solitary confinement, and banning orders to visually chronicle the Soweto uprising, youth funerals, and township resistance.",
    significance: "One of the most profound photographic visual archives of 1976 South Africa ever assembled.",
    keyQuote: "\"A camera is a weapon in the fight for freedom. Every picture I took was evidence that the world could not deny.\"",
    link: "https://www.sahistory.org.za/people/peter-sexford-magubane"
  },
  {
    id: "schuster-2004",
    type: "books",
    title: "A Burning Hunger: One Family's Struggle Against Apartheid (The Story of Tsietsi Mashinini)",
    author: "Lynda Schuster",
    year: "2004",
    publisher: "Jonathan Ball Publishers / Free Press",
    isbn: "978-0684871400",
    category: "Biography & Political Memoir",
    summary: "An intimate, investigative biography tracing the life of Tsietsi Mashinini and his family. Details his rise as head of Morris Isaacson's debating society, his election as leader of the June 16 march, his exile across continents, and his tragic early death.",
    significance: "Provides essential personal and political context on the teenager who stood at the eye of the 1976 hurricane.",
    keyQuote: "\"Tsietsi was 19, razor-sharp, with a voice that could electrify a crowded hall. He told them: 'We will not march with violence; our cause is our weapon.'\"",
    link: "https://www.jonathanball.co.za/"
  },
  {
    id: "sadet-vol2",
    type: "books",
    title: "The Road to Democracy in South Africa, Volume 2 (1970–1980)",
    author: "South African Democratic Education Trust (SADET)",
    year: "2006",
    publisher: "Unisa Press",
    isbn: "978-1868884063",
    category: "Definitive National History",
    summary: "The official, definitive multi-volume research project commissioned by Nelson Mandela's government. Volume 2 covers the entire 1970s, including chapters devoted exclusively to the Soweto Uprisings, school committees, and student undergrounds.",
    significance: "The most comprehensive scholarly reference work on the period, compiling state archives, TRC depositions, and student testimonies.",
    keyQuote: "\"The 1976 Soweto Uprising represented the critical threshold where the initiative permanently passed from the apartheid regime to the democratic mass movement.\"",
    link: "https://www.unisa.ac.za/sites/corporate/default/Research-&-Innovation/SADET"
  }
];

export const referenceArticles = [
  {
    id: "the-world-june17",
    type: "news",
    publication: "The World (Johannesburg)",
    date: "17 June 1976",
    headline: "GOD HELP US: 6 DEAD, SCORES HURT AS POLICE OPEN FIRE ON SCHOOL DEMO",
    byline: "Percy Qoboza (Editor) & Sophie Tema (Reporter)",
    location: "Johannesburg, South Africa",
    archivalExcerpt: "\"Our hearts bleed today for Soweto. We weep for the children whose young blood stains our streets. What began as a peaceful demonstration by school children exercising their God-given right to reject Afrikaans was turned into a bloodbath by the bullets of the South African Police...\"",
    impact: "Percy Qoboza's brave front-page editorial and Sam Nzima's photograph shook the nation. In October 1977, the apartheid government retaliated by banning The World permanently and detaining Qoboza without charge.",
    significance: "The foremost primary contemporary Black South African newspaper account of June 16."
  },
  {
    id: "rand-daily-mail-june17",
    type: "news",
    publication: "The Rand Daily Mail",
    date: "17 June 1976",
    headline: "SOWETO IN FLAMES: POLICE SHOOT AS 10,000 STUDENTS MARCH",
    byline: "Nat Serache & Patrick Laurence",
    location: "Johannesburg, South Africa",
    archivalExcerpt: "\"Fierce rioting swept through Soweto yesterday after armed police fired on thousands of marching pupils protesting against Afrikaans in schools. Black leaders warned that township anger had been simmering for months over the Department of Bantu Education's intransigence...\"",
    impact: "Broke through white censorship and exposed the extent of state brutality to white liberal South Africa and international embassies.",
    significance: "Critical front-page report documenting student discipline before police opened fire."
  },
  {
    id: "nyt-june17",
    type: "news",
    publication: "The New York Times",
    date: "17 June 1976",
    headline: "RIOTS IN SOUTH AFRICA: SOWETO ERUPTS AS POLICE FIRE ON BLACK STUDENTS",
    byline: "John F. Burns (Special to The New York Times)",
    location: "Johannesburg / New York",
    archivalExcerpt: "\"JOHANNESBURG, South Africa — Massive rioting broke out today in the Black township of Soweto outside Johannesburg when police opened fire with live ammunition into a march of at least 10,000 high school students demonstrating against compulsory Afrikaans instruction...\"",
    impact: "Put the Soweto massacre on the front page of America's newspaper of record, leading to immediate congressional inquiries and protests outside South African consulates across the United States.",
    significance: "The primary international news report that mobilized Western anti-apartheid campaigns."
  },
  {
    id: "guardian-june17",
    type: "news",
    publication: "The Guardian (London)",
    date: "17 June 1976",
    headline: "SCORES DEAD AS SOUTH AFRICAN POLICE FIRE ON MARCHING PUPILS",
    byline: "David Beresford & Patrick Laurence",
    location: "London & Johannesburg",
    archivalExcerpt: "\"South Africa was plunged into its worst racial crisis since Sharpeville yesterday as police opened fire on a peaceful demonstration of school children in Soweto. Eyewitnesses describe horrifying scenes of children in school uniforms carrying cardboard placards being mowed down by rifle fire...\"",
    impact: "Spurred intense debates in the British House of Commons, accelerating calls for UK arms sanctions and sports boycotts against South Africa.",
    significance: "Established the international comparison between Soweto 1976 and the 1960 Sharpeville Massacre."
  },
  {
    id: "time-june28",
    type: "news",
    publication: "Time Magazine",
    date: "28 June 1976",
    headline: "SOUTH AFRICA: THE FIRE NEXT TIME",
    byline: "World Section Cover Story",
    location: "New York / International",
    archivalExcerpt: "\"It was a school day in Soweto that turned into a massacre. What began with cardboard placards — 'Afrikaans stinks' and 'To hell with Bantu Education' — ended with armored vehicles, helicopter gunships, and hundreds of wounded children in township clinics. The myth of apartheid stability has been shattered forever.\"",
    impact: "Read by millions worldwide, framing the uprising not as a local disturbance, but as the beginning of the end of white minority rule in Southern Africa.",
    significance: "Influential global news magazine analysis documenting the generational revolt."
  },
  {
    id: "sunday-times-june20",
    type: "news",
    publication: "The Sunday Times (South Africa)",
    date: "20 June 1976",
    headline: "THE DAY OF THE GUN: SOWETO'S AGONY AND THE ANGER OF A GENERATION",
    byline: "Editorial Board & Township Correspondents",
    location: "Johannesburg, South Africa",
    archivalExcerpt: "\"No one who witnessed the grief of Soweto mothers searching the mortuaries for their children can believe that relations between Black and white in this country can ever be the same again. The trigger was Afrikaans, but the ammunition was 28 years of indignity and humiliation.\"",
    impact: "Documented the desperate search of families visiting Baragwanath Hospital and government mortuaries, where bodies of children were piled without identification.",
    significance: "A poignant retrospective of the first four days following the June 16 shootings."
  }
];

export const referenceDocuments = [
  {
    id: "un-res-392",
    type: "documents",
    title: "United Nations Security Council Resolution 392 (1976)",
    issuingBody: "UN Security Council (Adopted unanimously at the 1930th meeting)",
    date: "19 June 1976",
    documentRef: "S/RES/392 (1976)",
    summary: "Adopted unanimously by the Security Council in response to the Soweto killings. Strongly condemned the South African government for resorting to massive violence against and killings of the African people, including schoolchildren and students.",
    keyPoints: [
      "Reaffirmed that apartheid is a crime against the conscience and dignity of mankind.",
      "Recognized the legitimacy of the struggle of the South African people for human rights and democracy.",
      "Called upon the South African racist regime urgently to end violence against Black people and eliminate apartheid.",
      "Paved the way for Resolution 418 (Nov 1977), which imposed a mandatory global arms embargo."
    ],
    link: "https://digitallibrary.un.org/record/6837"
  },
  {
    id: "cillie-commission",
    type: "documents",
    title: "Report of the Commission of Inquiry into the Riots at Soweto and Elsewhere (Cillié Commission)",
    issuingBody: "Republic of South Africa (Chaired by Justice Petrus Malan Cillié)",
    date: "1980",
    documentRef: "RP 55/1980 (Two Volumes, 1,000+ pages)",
    summary: "The official judicial inquiry established by the apartheid government to investigate the causes and police actions of the 1976-1977 unrest.",
    keyPoints: [
      "Officially acknowledged that 575 people died (including 451 from police gunfire) and 3,907 were injured across the country between June 1976 and February 1977.",
      "Admitted that the forced introduction of Afrikaans as a medium of instruction was the direct spark that ignited the uprising.",
      "Revealed that police fired over 16,000 rounds of live ammunition and were wholly unprepared for peaceful crowd management.",
      "Independent historians and the TRC later demonstrated that the Cillié report significantly underestimated the actual death toll, which exceeded 700."
    ],
    link: "https://www.sahistory.org.za/archive/cillie-commission-report"
  },
  {
    id: "circular-2-1974",
    type: "documents",
    title: "Southern Transvaal Regional Circular No. 2 of 1974 (The Afrikaans Medium Decree)",
    issuingBody: "Department of Bantu Education, Regional Director J.G. Erasmus",
    date: "17 October 1974",
    documentRef: "File 6/8/3, Circular No. 2",
    summary: "The administrative circular mandating the strict 50/50 language policy in Black secondary schools.",
    keyPoints: [
      "Enforced that English and Afrikaans must be used on an equal basis as media of instruction in standards 5 through 10.",
      "Specifically decreed: Mathematics, Arithmetic, and Social Studies (History and Geography) MUST be taught in Afrikaans.",
      "Overruled previous exemptions granted to schools with non-Afrikaans-speaking staff.",
      "Became the focal rallying point of student grievances in early 1976."
    ],
    link: "https://www.sahistory.org.za/article/june-16-soweto-youth-uprising"
  },
  {
    id: "trc-report-1998",
    type: "documents",
    title: "Truth and Reconciliation Commission (TRC) Final Report: Soweto Findings",
    issuingBody: "Truth and Reconciliation Commission of South Africa (Chaired by Archbishop Desmond Tutu)",
    date: "1998",
    documentRef: "TRC Final Report, Vol. 2 (Chapter 3) & Vol. 3 (Chapter 6)",
    summary: "The definitive democratic truth inquiry into gross human rights violations committed during the Soweto Uprising.",
    keyPoints: [
      "Concluded that the South African Police used excessive, unlawful, and lethal force against unarmed student demonstrators.",
      "Documented police perjury, fabrication of 'rioting' justifications, and the systematic cover-up of child deaths.",
      "Recorded extensive evidence on the forced exile, torture in detention, and death of student organizers.",
      "Honored the memory of Hastings Ndlovu, Hector Pieterson, and hundreds of unnamed youth."
    ],
    link: "https://www.justice.gov.za/trc/report/"
  },
  {
    id: "tutu-letter-vorster",
    type: "documents",
    title: "Dean Desmond Tutu's Warning Letter to Prime Minister B.J. Vorster",
    issuingBody: "Very Rev. Desmond M. Tutu, Dean of St Mary's Cathedral, Johannesburg",
    date: "11 June 1976",
    documentRef: "Historic Open Letter",
    summary: "A heartfelt moral plea sent directly to Prime Minister John Vorster five days before the June 16 tragedy, warning that the youth of Soweto were on the verge of explosive rebellion.",
    keyPoints: [
      "Warned Vorster that Black desperation had reached unprecedented levels.",
      "Urged the immediate dismantling of the pass laws, Bantu education inequalities, and the convening of a national conference.",
      "Vorster rejected the letter, calling it politically motivated agitation.",
      "Stands today as one of the most chillingly accurate moral warnings in South African political history."
    ],
    link: "https://www.sahistory.org.za/people/archbishop-emeritus-desmond-mpilo-tutu"
  }
];

export const referenceTestimonies = [
  {
    id: "testimony-antoinette",
    type: "testimonies",
    name: "Antoinette Sithole",
    role: "Sister of 12-year-old Hector Pieterson (Witness & Educator)",
    headline: "\"I saw this young man running with Hector... I wanted to ask him: Is he dead?\"",
    testimony: "\"On the morning of June 16, I was a student at Belle Higher Primary. I walked towards Orlando West High School where we were supposed to meet other schools. Suddenly we saw police vans approaching. We heard shooting. I hid in a yard behind a corrugated iron gate. After a few minutes, when the gunfire paused, I stepped out into the street. That was when I saw Mbuyisa carrying my brother Hector. Hector was bleeding from his mouth. I ran up to Mbuyisa, crying and screaming: 'Who are you? Is he dead?'. Sam Nzima was taking pictures as we ran. Mbuyisa told me: 'He is alive, but barely. We must get him to a clinic.' We put him into Sophie Tema's car and drove to Phefeni Clinic, but it was already too late. My brother was gone.\"",
    source: "Recorded at the Hector Pieterson Memorial Museum & TRC Testimonies"
  },
  {
    id: "testimony-sam-nzima",
    type: "testimonies",
    name: "Sam Nzima",
    role: "Photojournalist, The World Newspaper",
    headline: "\"I took six frames that changed the history of South Africa\"",
    testimony: "\"I was in the press car with our reporter Sophie Tema. The students were singing and carrying their placards. Then the police Colonel fired a shot into the crowd, and all hell broke loose. The police just fired straight into the children. Through my camera lens, I saw Mbuyisa pick up this limp little body in a school uniform. I started shooting continuously with my Pentax camera. I took six frames as they ran towards our car. I knew immediately what this photograph meant. I knew the security police would kill me or destroy the camera. So right there in the backseat, I rewound the film, took the cassette out, and stuffed it down inside my sock. When the police searched our car down the road, they seized my spare rolls, but they never searched my socks. That photo flew around the globe the next morning.\"",
    source: "South African History Online & National Press Club Archive"
  },
  {
    id: "testimony-dan-montsisi",
    type: "testimonies",
    name: "Dan Montsisi",
    role: "SSRC Leader (Soweto Students' Representative Council)",
    headline: "\"We knew our cause was just, and we were no longer afraid\"",
    testimony: "\"Before June 16, our parents lived in terror of the police and the pass laws. The Black Consciousness philosophy gave us our self-respect back. At Morris Isaacson, Tsietsi Mashinini taught us that we were human beings endowed with dignity. When the police fired on us on June 16, they thought we would scatter and run back home forever. But the opposite happened. The fear died. When Hector was shot, thousands of children picked up stones and fought back. We realized we would rather die on our feet than live on our knees in Verwoerd's schools.\"",
    source: "Voices from the Underground / TRC Deposition"
  },
  {
    id: "testimony-seth-mazibuko",
    type: "testimonies",
    name: "Seth Mazibuko",
    role: "Deputy President of SASM/SSRC (16 years old in 1976)",
    headline: "\"I was only 16 years old when they locked me on Robben Island\"",
    testimony: "\"I was the youngest member of the Action Committee that planned the June 16 march. I was 16 years old. When the police unleashed those German Shepherd dogs on us, I remember thinking: 'These are our rulers. They treat school children worse than animals.' After June 16, I was arrested by the Special Branch, interrogated in John Vorster Square, beaten until I was unconscious, and sentenced to seven years on Robben Island. But even on the Island, surrounded by the ocean, we knew that 16 June had cracked the spine of apartheid. The students had shown the world the true face of the beast.\"",
    source: "Hector Pieterson Memorial Foundation Archive"
  }
];

export const allReferences = [
  ...referenceBooks,
  ...referenceArticles,
  ...referenceDocuments,
  ...referenceTestimonies
];

export default allReferences;
