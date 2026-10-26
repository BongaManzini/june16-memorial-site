// src/data/contextData.js
// Root causes, march route schematic, historical fact-checks, and statistics

export const rootCauses = [
  {
    id: "bantu-ed",
    title: "1. Bantu Education Act (1953)",
    tag: "Structural Inequality",
    description: "Architected by Dr. H.F. Verwoerd to deliberately restrict Black education to manual labor. Per-student state expenditure on white children was up to 15 times higher than on Black children. Classes in Soweto held 60 to 80 children with no science labs, libraries, or basic textbooks.",
    stat: "15:1 spending disparity"
  },
  {
    id: "black-consciousness",
    title: "2. The Black Consciousness Spark",
    tag: "Psychological Liberation",
    description: "Spearheaded by Steve Biko and SASO, Black Consciousness taught the youth that psychological freedom preceded political liberation. Students rejected the mindset of subjugation and resolved to become the architects of their own liberation.",
    stat: "Transformed student psyche"
  },
  {
    id: "afrikaans-decree",
    title: "3. The 1974 Afrikaans Medium Decree",
    tag: "The Direct Catalyst",
    description: "Regional Circular No. 2 of 1974 decreed that Mathematics and Social Studies must be taught in Afrikaans. Neither teachers nor students were proficient. Failure rates skyrocketed, and students viewed Afrikaans as the literal language of the police and prison guards.",
    stat: "Mandatory 50/50 instruction"
  },
  {
    id: "dismissals-strikes",
    title: "4. School Strikes & Sacked Boards (1976)",
    tag: "Exhaustion of Diplomacy",
    description: "When the Meadowlands School Board refused to enforce Afrikaans, the state summarily fired them. On 17 May, Orlando West Junior Secondary students walked out on strike, followed by Belle Higher Primary. Constitutional avenues had closed; direct mass resistance remained.",
    stat: "Boycotts began May 1976"
  }
];

export const marchRouteStops = [
  {
    step: "1",
    time: "07:00 AM",
    title: "Western Assembly: Naledi High School",
    location: "Naledi, South Western Soweto",
    description: "Students gathered in school uniform at Naledi High. Student marshals distributed handcrafted cardboard placards reading 'Away with Afrikaans' and 'Black Education Stinks'.",
    students: "~3,000 students"
  },
  {
    step: "2",
    time: "07:30 AM",
    title: "Central Assembly: Morris Isaacson High School",
    location: "Central Western Jabavu, Soweto",
    description: "Tsietsi Mashinini addressed the student body at Morris Isaacson, urging strict non-violence, dignity, and solidarity. The column began marching along Old Potchefstroom Road.",
    students: "~5,000 students"
  },
  {
    step: "3",
    time: "08:15 AM",
    title: "Eastern & Northern Columns: Phefeni & Sekano Ntoane",
    location: "Phefeni & Senaoane",
    description: "Columns from Phefeni Junior Secondary and Belle Higher Primary joined the main march as it wound through the township, singing 'Morena Boloka Sechaba sa Heso'.",
    students: "~10,000 students"
  },
  {
    step: "4",
    time: "08:45 AM",
    title: "The Convergence: Vilakazi & Moema Streets",
    location: "Orlando West, Soweto",
    description: "All columns converged into a single unified column of approximately 15,000–20,000 students along Vilakazi and Moema streets, marching toward Orlando Stadium.",
    students: "15,000–20,000 students"
  },
  {
    step: "5",
    time: "09:15 AM",
    title: "Police Barricade & Fatal Shots: Orlando West High School",
    location: "Corner of Vilakazi & Moema Streets",
    description: "Police under Col. Johannes Kleingeld blocked the road with vans and attack dogs. Unprovoked, police fired tear gas and live rounds. Hastings Ndlovu and Hector Pieterson were fatally shot.",
    students: "Site of police gunfire"
  },
  {
    step: "6",
    time: "Planned Destination",
    title: "Orlando Stadium (Unreached)",
    location: "Orlando Stadium, Soweto",
    description: "The intended assembly point for a peaceful mass prayer and speeches by student leaders, which was never reached due to police opening fire.",
    students: "Planned destination"
  }
];

export const truthVsMyth = [
  {
    id: "myth-1",
    myth: "Myth: Hector Pieterson was the first person killed on June 16.",
    fact: "Historical Fact: 15-year-old Hastings Ndlovu, student council leader at Orlando North Secondary, was shot first near the Klipspruit Bridge. However, no news photographer was present at that bridge. Sam Nzima was at Moema Street just as Hector was shot moments later, making Hector the enduring international symbol.",
    category: "Casualties & Identity"
  },
  {
    id: "myth-2",
    myth: "Myth: The students were rioting and attacking police from the start.",
    fact: "Historical Fact: The march was planned with extraordinary discipline as a peaceful, unarmed student demonstration. Students had strict instructions not to carry weapons or stones. Violence only began after police unleashed attack dogs and fired live rifle rounds into the children.",
    category: "Protest Nature"
  },
  {
    id: "myth-3",
    myth: "Myth: The protest was solely about the Afrikaans language.",
    fact: "Historical Fact: The Afrikaans Medium Decree was the immediate spark, but the root cause was the entire racist architecture of the Bantu Education Act, underfunding, overcrowding, pass laws, and white minority rule. Students were demanding human dignity and equal rights.",
    category: "Causes & Ideology"
  },
  {
    id: "myth-4",
    myth: "Myth: Only a few dozen students died during the uprising.",
    fact: "Historical Fact: The apartheid government claimed only 23 died initially and later conceded 575 nationwide in the Cillié Report. However, independent investigations, hospital registers, and the Truth and Reconciliation Commission (TRC) confirmed that between 400 and over 700 people were killed in the months following June 16.",
    category: "Casualties & Statistics"
  },
  {
    id: "myth-5",
    myth: "Myth: The unrest was confined strictly to Soweto and lasted only a day.",
    fact: "Historical Fact: The uprising spread to more than 160 townships across South Africa, including Alexandra, Kagiso, Mamelodi, Langa, Gugulethu, and Port Elizabeth, sustaining intense defiance and worker stayaways for over 16 months through late 1977.",
    category: "Scope & Timeline"
  }
];

export const keyMemorialStats = [
  { value: "20,000+", label: "School Children Marched", sublabel: "Ages 10 to 20 across Soweto" },
  { value: "12 yrs", label: "Age of Hector Pieterson", sublabel: "Youngest iconic martyr" },
  { value: "700+", label: "Estimated Lives Lost", sublabel: "Killed in the 1976–1977 uprising" },
  { value: "160+", label: "Townships Rose in Defiance", sublabel: "Nationwide revolt from Cape to Transvaal" },
  { value: "12,000+", label: "Youth Joined Liberation Armies", sublabel: "The 'June 16 Detachment' in exile" },
  { value: "1994", label: "Proclaimed Youth Day", sublabel: "Commemorated annually on June 16" }
];
