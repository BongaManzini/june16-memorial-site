// src/data/heroesData.js
// Historical biographies and roles of key figures in the June 16, 1976 Soweto Uprising
import assets from "../assets";

export const heroes = [
  {
    id: "hector-pieterson",
    name: "Hector Pieterson",
    age: "12 years old (1964–1976)",
    role: "The Immortal Symbol of Student Martyrdom",
    school: "Tshabalala Higher Primary School, Soweto",
    image: assets.hectorSamNzima,
    quote: "\"He was just a playful 12-year-old boy. He followed me that morning because he loved his sister.\" — Antoinette Sithole",
    biography: "Hector Pieterson was born on 19 August 1964. On the morning of June 16, 1976, the 12-year-old followed his elder sister Antoinette to Orlando West, curious to see the high school students' gathering. When police opened fire with live ammunition near the corner of Moema and Vilakazi streets, Hector was struck in the chest. He was carried down the street by fellow student Mbuyisa Makhubo, captured in Sam Nzima's world-famous photograph. Hector was pronounced dead on arrival at the nearby Phefeni Clinic, becoming the global symbol of South African youth resistance.",
    fate: "Martyred on 16 June 1976. The Hector Pieterson Memorial and Museum stands yards from where he fell.",
    keyFacts: [
      "Hector was only 12 years old, in Grade 6 (Standard 4).",
      "His birth surname was spelled 'Pietersen', but the press spelled it 'Pieterson', which the family later adopted.",
      "His sacrifice is commemorated annually on June 16 as national Youth Day."
    ]
  },
  {
    id: "hastings-ndlovu",
    name: "Hastings Ndlovu",
    age: "15 years old (1961–1976)",
    role: "Student Leader & The First Fallen Martyr",
    school: "Orlando North Secondary School",
    image: assets.AL2446_0127,
    quote: "\"Hastings Ndlovu was shot before Hector. But there were no cameras near the bridge. His name must never be forgotten.\" — Soweto Historians",
    biography: "Hastings Ndlovu was a dynamic 15-year-old student leader and president of the student representative council at Orlando North Secondary School. On June 16, 1976, he was leading his school contingent across the Klipspruit Bridge into Orlando West when police opened fire. Hastings was shot in the head. He was rushed by teachers and residents to Baragwanath Hospital, where he tragically passed away shortly after arrival.",
    fate: "Died of gunshot wounds on 16 June 1976. The bridge on Klipspruit Road in Orlando West was officially renamed the Hastings Ndlovu Bridge in his honor.",
    keyFacts: [
      "Historians and the TRC confirm Hastings was shot moments before or simultaneously with Hector Pieterson.",
      "Because no photographer was present at the exact bridge location, his martyrdom initially received less international media coverage.",
      "Today, Hastings Ndlovu is honored alongside Hector Pieterson at the memorial in Soweto."
    ]
  },
  {
    id: "tsietsi-mashinini",
    name: "Tsietsi Mashinini",
    age: "19 years old (1957–1990)",
    role: "President of the Soweto Students' Representative Council (SSRC)",
    school: "Morris Isaacson High School, Central Western Jabavu",
    image: assets.img1,
    quote: "\"We are not fighting with stones; our cause is our weapon. March peacefully, walk with dignity, and say NO to the oppressor's language.\" — Tsietsi Mashinini",
    biography: "Tepo Tsietsi Mashinini was a charismatic, brilliant 19-year-old student at Morris Isaacson High School. Head of the school debating society and deeply versed in Black Consciousness, Mashinini was chosen on 13 June 1976 to lead the Action Committee coordinating the demonstration. On the morning of June 16, he delivered an impassioned speech to thousands of students, calling for a strictly peaceful, disciplined protest. Following the police shootings, Mashinini organized the SSRC and coordinated general worker stayaways.",
    fate: "Targeted by the apartheid security police with a massive bounty, he fled South Africa into exile in August 1976. He lived in Botswana, London, the US, and Guinea, where he died under mysterious circumstances in 1990 at the age of 33.",
    keyFacts: [
      "Elected leader of over 20,000 students at age 19.",
      "His speech at Morris Isaacson High School on June 16 is legendary in township folklore.",
      "Posthumously awarded the Order of Luthuli in Silver by the South African Government for his heroic leadership."
    ]
  },
  {
    id: "mbuyisa-makhubo",
    name: "Mbuyisa Makhubo",
    age: "18 years old in 1976",
    role: "The Courageous Student Who Carried Hector Pieterson",
    school: "Orlando West High School / Soweto Student",
    image: assets.hectorSamNzima,
    quote: "\"Mbuyisa saw this dying child on the ground and didn't think about his own safety. He picked him up and ran for help.\" — Antoinette Sithole",
    biography: "Mbuyisa Makhubo was an 18-year-old student when the gunfire started on Moema Street. While others fled the live bullets, Mbuyisa rushed toward the fallen Hector Pieterson, lifted him into his arms, and ran desperately down the road seeking medical help, flanked by Hector's sister Antoinette. His compassionate and heroic act was immortalized in Sam Nzima's photograph, instantly making him a prime target of the apartheid security police.",
    fate: "Harassed by the security police who raided his mother's home repeatedly, Mbuyisa fled South Africa into Botswana in late 1976. He later traveled to Nigeria and reportedly to Canada. He vanished without a trace in 1979. His mother, Mama Nombulelo Makhubo, passed away in 2004 without ever knowing what became of her son.",
    keyFacts: [
      "His heroic image was beamed to millions of homes across the globe on 17 June 1976.",
      "The Truth and Reconciliation Commission attempted an extensive investigation to locate Mbuyisa, but his disappearance remains an unresolved mystery.",
      "Remembered as the ultimate symbol of courage, empathy, and sacrifice under fire."
    ]
  },
  {
    id: "antoinette-sithole",
    name: "Antoinette Sithole",
    age: "17 years old in 1976",
    role: "Hector's Sister & Lifelong Memorial Educator",
    school: "Belle Higher Primary School, Soweto",
    image: assets.obamaMemorial,
    quote: "\"I promised myself that as long as I live, I will tell the true story of June 16, so that the sacrifice of my brother and all those children is never erased.\" — Antoinette Sithole",
    biography: "Antoinette Sithole (née Pieterson) was 17 years old on June 16, 1976. She was a student at Belle Higher Primary and joined the student demonstration. When the police opened fire, she hid in a nearby yard, only to step out and witness Mbuyisa Makhubo carrying her mortally wounded brother. Her anguish and terror captured in the photo echoed the grief of millions of Black mothers and sisters. Today, Antoinette is an internationally respected speaker and senior educator at the Hector Pieterson Memorial Museum.",
    fate: "Lives in Soweto and actively educates youth, visiting schools, universities, and international delegations including heads of state (Nelson Mandela, Barack Obama).",
    keyFacts: [
      "The young girl running alongside Mbuyisa in Sam Nzima's photograph.",
      "Helped found and design the Hector Pieterson Memorial and Museum in Orlando West.",
      "Has dedicated over 40 years to promoting peaceful student activism and educational access."
    ]
  },
  {
    id: "sam-nzima",
    name: "Sam Nzima",
    age: "42 years old (1934–2018)",
    role: "The Courageous Photojournalist of 'The World'",
    school: "Self-taught photojournalist from Lilydale, Mpumalanga",
    image: assets.samCoffin,
    quote: "\"I knew the police would kill me for this film. So I took the cassette out and stuffed it down inside my sock. That photo changed the course of history.\" — Sam Nzima",
    biography: "Sam Nzima was born in 1934 in Bushbuckridge. Working for The World, South Africa's premier Black newspaper, Nzima arrived in Orlando West on June 16 with reporter Sophie Tema. When police opened fire, Nzima courageously kept his camera clicking, capturing six decisive frames of Mbuyisa carrying Hector. Anticipating that police would seize his equipment, Nzima secretly rewound the exposed film and hid it inside his sock. His photograph was printed across the globe, forcing the world to confront apartheid's brutality.",
    fate: "Subjected to constant death threats and harassment by the Special Branch, Nzima was forced to leave Johannesburg and retire to Mpumalanga. In 2011, he was awarded the National Order of Ikhamanga in Bronze by President Jacob Zuma. He passed away peacefully in 2018.",
    keyFacts: [
      "Time Magazine ranked Nzima's photograph among the '100 Most Influential Images in History'.",
      "Endured decades of copyright disputes before finally securing legal ownership of his historic negative in 1998.",
      "A hero of independent, fearless photojournalism."
    ]
  },
  {
    id: "seth-mazibuko",
    name: "Seth Mazibuko",
    age: "16 years old in 1976",
    role: "Deputy President of SSRC / Youngest Robben Island Prisoner",
    school: "Phefeni Junior Secondary School, Soweto",
    image: assets.img2,
    quote: "\"They sentenced me to Robben Island at 16. But stone walls could not stop what had been started in the hearts of Soweto's youth.\" — Seth Mazibuko",
    biography: "At just 16 years old, Seth Mazibuko was elected Deputy President of the Soweto Students' Representative Council under Tsietsi Mashinini. He helped coordinate student marshals and class boycotts. Following the crackdown, he was arrested by security police in July 1976, brutally tortured at John Vorster Square, and subsequently sentenced to seven years' imprisonment on Robben Island, making him the youngest political prisoner on the island at the time.",
    fate: "Served his sentence on Robben Island, continued anti-apartheid work, and today runs the June 16 Foundation, mentoring township youth and preserving history.",
    keyFacts: [
      "Youngest executive member of the 1976 Soweto Action Committee.",
      "Spent his formative youth alongside Nelson Mandela, Walter Sisulu, and Govan Mbeki on Robben Island.",
      "Active community leader and educational advocate in Soweto today."
    ]
  },
  {
    id: "murphy-morobe",
    name: "Murphy Morobe",
    age: "19 years old in 1976",
    role: "SSRC Executive Organizer & Anti-Apartheid Stalwart",
    school: "Morris Isaacson High School, Soweto",
    image: assets.img3,
    quote: "\"The defiance of 1976 was the spark that ignited the Mass Democratic Movement of the 1980s.\" — Murphy Morobe",
    biography: "Murphy Morobe was a key leader of SASM and an executive member of the SSRC during the 1976 uprising. He was instrumental in organizing the transition from school strikes to economic worker stayaways. Arrested in 1977, he was convicted in the historic 'Soweto 11' trial and imprisoned on Robben Island. Upon release, Morobe became a foremost leader of the United Democratic Front (UDF) in the 1980s and later served in South Africa's post-apartheid government.",
    fate: "Played a major leadership role in negotiating South Africa's transition to democracy, later serving as Head of Communications in the Presidency.",
    keyFacts: [
      "Key organizer of the student-worker stayaways in August and September 1976.",
      "Famous leader of the 1988 Johannesburg diplomatic consulate escape.",
      "Respected national statesman and civil society leader."
    ]
  },
  {
    id: "steve-biko",
    name: "Bantu Stephen Biko",
    age: "30 years old (1946–1977)",
    role: "Father of Black Consciousness & Philosophical Inspiration",
    school: "Lovedale College, St. Francis College, University of Natal",
    image: assets.AL2446_1955,
    quote: "\"Black Consciousness is an attitude of mind and a way of life... Merely by describing ourselves as Black, we have started on a road towards emancipation.\" — Steve Biko",
    biography: "Steve Biko was the towering intellectual and charismatic leader who founded the South African Students' Organisation (SASO) and authored the foundational texts of Black Consciousness. His message of psychological liberation, racial pride, and self-determination gave the youth of Soweto the inner courage to stand up against the apartheid machine without fear. In September 1977, Biko was arrested and brutally murdered in police custody.",
    fate: "Assassinated by apartheid security police in detention on 12 September 1977. His death sparked global outrage and an immediate UN mandatory arms embargo.",
    keyFacts: [
      "Authored the influential essays compiled in 'I Write What I Like'.",
      "His ideas were the intellectual catalyst that inspired high school leaders like Tsietsi Mashinini.",
      "Globally recognized as one of the greatest freedom fighters of the 20th century."
    ]
  }
];

export default heroes;
