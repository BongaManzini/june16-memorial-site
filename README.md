# June 16 – South African Youth Day Digital Memorial & Historical Research Archive
### An Immersive 3D Spatial Computing & Public History Research Platform

> **Live Digital Memorial**: [https://bongamanzini.github.io/june16-memorial-site/](https://bongamanzini.github.io/june16-memorial-site/)  
> **Classification**: Public History, Digital Humanities & Spatial Computing Research Site  
> **Lead Researcher & Engineer**: Bonga Manzini (BSc Informatics, UNISA)  

---

## 🔬 Research Dossier: The 11-Point Framework

### 1. Who (Target Stakeholders & Audience)
- **Primary Audience:** Digital-native youth, high school history learners, university students, cultural heritage tourists, and educators.
- **Institutional Stakeholders:** Hector Pieterson Memorial and Museum, Soweto Heritage Trust, Department of Basic Education (DBE), South African Heritage Resources Agency (SAHRA), and UNESCO Memory of the World Programme.

### 2. Where (Geographical & Historical Scope)
- **Geographical Focus:** Soweto, Johannesburg, South Africa. Key spatial coordinates:
  - **Morris Isaacson High School** (Central Western Jabavu) — Assembly point of the march.
  - **Naledi High School** (Naledi) — Secondary student mobilization nucleus.
  - **Orlando West / Vilakazi & Moema Streets** — Site where police opened fire on marching youth.
  - **Phefeni Junior Secondary School** — Protest rally point.

### 3. Why (Systemic Motivation & Urgency)
- **The Threat of Generative & Generational Amnesia:** As decades pass since 1976, younger generations increasingly experience historical events through fragmented social media posts or dry static paragraphs in outdated textbooks.
- **Informatics Mandate:** Digital preservation of liberation heritage through **Spatial Computing (WebGL & Three.js)**. Transforming historical memory from passive reading into an interactive, spatial, and auditory journey that conveys the visceral bravery of students marching against institutional oppression.

### 4. How (Methodological & Technical Approach)
- **Methodology:** Immersive Digital Humanities & Multi-Sensory Narrative Sequencing.
  1. *Spatial 3D Reconstruction:* Rendered an interactive 3D memorial courtyard using React Three Fiber (`@react-three/fiber`) and Three.js with realistic lighting, floating particles, and reflective memorial monoliths.
  2. *Chronological Scrollytelling:* Built an interactive chronological timeline tracking the countdown from the 1974 Afrikaans Medium Decree to the dawn of June 16, 1976.
  3. *Archival Photo Curation:* Integrated high-resolution historical photojournalism with Masonry layout and full lightbox inspection.
- **Technology Stack:** React 19, Three.js, React Three Fiber, Framer Motion, Tailwind CSS, Vite.

### 5. When (Historical Timeline & Temporal Milestones)
- **1953:** Passing of the **Bantu Education Act (Act 47 of 1953)**, institutionalizing segregated, inferior curricula for Black children designed to train them solely as manual laborers.
- **1974:** Department of Bantu Education issues the **Afrikaans Medium Decree**, mandating that mathematics, arithmetic, and social studies in Black secondary schools be taught 50% in Afrikaans.
- **June 13, 1976:** Soweto Students' Representative Council (SSRC) formed at the DOCC in Orlando.
- **June 16, 1976 (07:00 – 12:00):** Over 10,000 to 20,000 unarmed students march peacefully toward Orlando Stadium. Police barricade the route and fire tear gas, followed by live ammunition, killing 12-year-old Hector Pieterson and hundreds of others.
- **1994–Present:** June 16 designated an official national public holiday (**Youth Day**).

### 6. The Problem Statement
- **Educational Disconnect:** 60% of South Africa's population was born after 1994 (the "Born-Free" generation). Traditional museum exhibits and static textbook chapters fail to communicate the political strategy, non-violent discipline, and student leadership of the 1976 uprising.
- **Preservation Crisis:** Physical museum collections in townships face resource constraints. Open-access, mobile-first WebGL memorials democratize historical memory across any smartphone or browser without admission fees.

### 7. The Data Sourced
1. **South African History Online (SAHO)**: Archival chronologies and biographical records of youth leaders (Tsietsi Mashinini, Murphy Morobe, Sibongile Mkhabela).
2. **Truth and Reconciliation Commission (TRC) Special Report (1998)**: Sworn testimonies from victims, witnesses, and police commanders present at the Orlando West shootings.
3. **Historical Papers Research Archive (University of the Witwatersrand)**: Oral histories and pamphlets issued by the Soweto Students' Representative Council (SSRC).
4. **Sam Nzima / World Newspaper Photo Archives**: Iconic historical photographic records documenting the moments following the police shootings.

### 8. Why I Chose This Data
- **Testimonial Integrity:** TRC depositions and student council pamphlets represent unvarnished primary source accounts recorded under oath.
- **Pedagogical Authority:** SAHO is South Africa's largest peer-reviewed digital history archive, ensuring scholarly accuracy.
- **Iconic Evidential Power:** Photographic evidence captured by Sam Nzima and Peter Magubane provided the indisputable visual proof that shifted global public opinion against Apartheid.

### 9. How I Worked On The Data
- Structured the events of June 16 into hour-by-hour operational phases (07:00 Assembly, 08:30 Route Convergence, 09:15 Police Interception, 10:00 The First Shots, 11:30 Nationwide Spread).
- Normalized image assets, created high-compression AVIF/WebP responsive formats to guarantee sub-2-second load times on mobile 4G networks.
- Synthesized historical narratives with 3D spatial materials and procedural lighting in Three.js.

### 10. What I Plan To Achieve From It
- **Curriculum Integration:** Provide public and township school teachers with a free interactive digital teaching aid for Grade 9 and Grade 12 history modules.
- **Cultural Tourism & Commemoration:** Serve as an interactive digital companion for visitors walking along the Hector Pieterson Memorial Precinct.
- **Informatics Innovation:** Prove that cutting-edge 3D WebGL graphics and modern web engineering can be harnessed for profound socio-historical commemoration.

### 11. Market Understanding & Cultural Landscape
- **Demographic Reality:** South Africa has one of the youngest populations globally, with over 60% aged under 35. Engaging this demographic requires digital-native platforms.
- **Heritage Digitization Gap:** While international memorials (Holocaust Memorial, 9/11 Memorial) feature world-class interactive 3D platforms, African liberation history remains largely unrepresented in spatial computing. This project bridges that gap.

---

## 🎮 Interactive Features Walkthrough

1. **3D Memorial Courtyard Viewport**: Interactive 3D scene rendered in real time. Users can rotate, orbit, and interact with the reflective stone monoliths.
2. **Hour-by-Hour Chronological Scrollytelling**: Interactive timeline presenting verified eyewitness accounts synchronized with archival photography.
3. **Masonry Historical Photo Archive**: Lightbox viewer allowing high-resolution inspection of rare historical photographs and newspaper clippings.
4. **Youth Day Impact & Redress Analyzer**: Educational briefing on the transition from the Bantu Education Act to Section 29 of the Constitution (Right to Basic Education).
