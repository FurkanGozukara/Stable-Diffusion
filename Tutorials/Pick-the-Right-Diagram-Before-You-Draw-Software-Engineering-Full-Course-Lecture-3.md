# Pick the Right Diagram Before You Draw | Software Engineering Full Course, Lecture 3

## Full tutorial link > https://www.youtube.com/watch?v=0zo0d3tKydU

[![Pick the Right Diagram Before You Draw | Software Engineering Full Course, Lecture 3](https://i.ytimg.com/vi_webp/0zo0d3tKydU/maxresdefault.webp)](https://www.youtube.com/watch?v=0zo0d3tKydU "Pick the Right Diagram Before You Draw | Software Engineering Full Course, Lecture 3")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Pick-the-Right-Diagram-Before-You-Draw-Software-Engineering-Full-Course-Lecture-3.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Pick-the-Right-Diagram-Before-You-Draw-Software-Engineering-Full-Course-Lecture-3.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


This is the third lecture of the Software Engineering course. Ari pressed Reserve for room C101 at Campus Rooms, a fictional booking service, and the screen says it could not confirm whether the booking was stored. One question runs through all eight interactive scenes: which model answers the question we are actually asking? A user journey, two state models, a data model, a decision table, sequences, interface states, a consistency check and four views of the same booking each answer one question.

Links:

Course materials: [ [https://github.com/FurkanGozukara/Software-Engineering-Full-Lecture-2026-2027-Fall](https://github.com/FurkanGozukara/Software-Engineering-Full-Lecture-2026-2027-Fall) ]

SECourses Patreon: [ [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses) ]

SECourses Discord: [ [https://discord.com/servers/software-engineering-courses-secourses-772774097734074388](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) ]

You will learn why a correct component diagram can miss what a person must be told, how to read a transition with its event, condition and outcome, why a timeout is missing information, when a copy is a historical snapshot, how a decision table shows every combination and gap, why similar symptoms can need different recovery, what each interface state promises, where a neat diagram contradicts a rule, and how an abstraction leaves things out on purpose.

Main topics include user journeys, request versus stored state, state machines, safety and progress, data models, identity, cardinality, referential integrity, decision tables, sequence diagrams, interface states, model consistency, abstraction, principles and sources.

Use the chapters to jump to any of the eight scenes, the models page, the principles or the sources.

Chapters:

[00:00:00](https://youtu.be/0zo0d3tKydU?t=0) One booking, five questions: which model answers which?

[00:00:37](https://youtu.be/0zo0d3tKydU?t=37) Drawing the whole system does not answer Ari's question

[00:01:15](https://youtu.be/0zo0d3tKydU?t=75) The question of this week and five questions about B-001

[00:03:03](https://youtu.be/0zo0d3tKydU?t=183) The week two register you bring into this lecture

[00:04:09](https://youtu.be/0zo0d3tKydU?t=249) The example booking and what you will be able to do

[00:05:46](https://youtu.be/0zo0d3tKydU?t=346) User journey: what Ari needs to know after pressing Reserve

[00:07:06](https://youtu.be/0zo0d3tKydU?t=426) Choose, submit, observe: following the journey step by step

[00:08:35](https://youtu.be/0zo0d3tKydU?t=515) Three possible outcomes and three different next actions

[00:09:23](https://youtu.be/0zo0d3tKydU?t=563) Why a component diagram misses what Ari must be told

[00:10:04](https://youtu.be/0zo0d3tKydU?t=604) No confirmation message: the duplicate click risk

[00:12:07](https://youtu.be/0zo0d3tKydU?t=727) Two state models: the screen's request and the stored booking

[00:12:56](https://youtu.be/0zo0d3tKydU?t=776) What Submit means: from Draft to Submitting

[00:13:49](https://youtu.be/0zo0d3tKydU?t=829) Three ways out of Submitting: rejected, accepted, lost

[00:15:07](https://youtu.be/0zo0d3tKydU?t=907) A lost response: Unknown on screen, Confirmed in the store

[00:15:48](https://youtu.be/0zo0d3tKydU?t=948) Reading one transition: event, condition and outcome

[00:16:36](https://youtu.be/0zo0d3tKydU?t=996) Cancel again: a stable repeated response, not a second change

[00:17:38](https://youtu.be/0zo0d3tKydU?t=1058) Absent arrows, safety invariants and progress properties

[00:19:03](https://youtu.be/0zo0d3tKydU?t=1143) Data model: when a room changes, which copy is right?

[00:20:43](https://youtu.be/0zo0d3tKydU?t=1243) One identity per room: reference it instead of copying

[00:21:23](https://youtu.be/0zo0d3tKydU?t=1283) Entities, identifiers and many-to-one relationships

[00:23:08](https://youtu.be/0zo0d3tKydU?t=1388) A rename: stable identifiers versus matching on names

[00:24:01](https://youtu.be/0zo0d3tKydU?t=1441) Historical snapshots and four different checks

[00:25:29](https://youtu.be/0zo0d3tKydU?t=1529) Decision table: may any signed-in member cancel any booking?

[00:26:57](https://youtu.be/0zo0d3tKydU?t=1617) R-03 row by row: allowed, denied and the repeated response

[00:28:36](https://youtu.be/0zo0d3tKydU?t=1716) The missing row and the policy boundary of R-03

[00:29:26](https://youtu.be/0zo0d3tKydU?t=1766) Change only who asks: the phrase of the rule that decides

[00:30:51](https://youtu.be/0zo0d3tKydU?t=1851) Sequence diagram: what must happen before Confirmed

[00:31:58](https://youtu.be/0zo0d3tKydU?t=1918) Six numbered messages of one successful booking

[00:34:15](https://youtu.be/0zo0d3tKydU?t=2055) A lost response: the same stored state, a different history

[00:36:05](https://youtu.be/0zo0d3tKydU?t=2165) Rejected before storage: a different recovery action

[00:37:29](https://youtu.be/0zo0d3tKydU?t=2249) Interface states: does No rooms mean the search finished?

[00:38:15](https://youtu.be/0zo0d3tKydU?t=2295) Loading, empty, validation error, unavailable and results

[00:40:29](https://youtu.be/0zo0d3tKydU?t=2429) Empty result versus failed request, with and without color

[00:42:06](https://youtu.be/0zo0d3tKydU?t=2526) Model consistency: a neat diagram that contradicts R-01

[00:43:15](https://youtu.be/0zo0d3tKydU?t=2595) Walking one request through rule, sequence and calendar

[00:44:45](https://youtu.be/0zo0d3tKydU?t=2685) Decide first: the rule, diagram and calendar agree again

[00:45:55](https://youtu.be/0zo0d3tKydU?t=2755) Four views of one booking: who owns B-001?

[00:47:35](https://youtu.be/0zo0d3tKydU?t=2855) What happened before the timeout: the sequence view

[00:48:46](https://youtu.be/0zo0d3tKydU?t=2926) The question-to-model matrix and intentional omissions

[00:49:14](https://youtu.be/0zo0d3tKydU?t=2954) A maintainer and a student need different models

[00:50:37](https://youtu.be/0zo0d3tKydU?t=3037) Five models of one booking and the notation of the week

[00:52:33](https://youtu.be/0zo0d3tKydU?t=3153) Eight principles and six checks, including a mobile note

[00:55:34](https://youtu.be/0zo0d3tKydU?t=3334) What carries forward to week four, terms and sources

This lecture is for students of the Software Engineering course and for anyone who has drawn a diagram that was correct and still answered the wrong question. Every name, number, date and incident in the lecture is a teaching example from the fictional Campus Rooms service.

Background music in the silences: Infinity, Serene View, Romantic 05, Relaxation 04, Digital Clouds, Your Breath, Stylz, Down the River, Vastness, Opalescent, Curiosity, Pilates and Yoga (Mixkit, Stock Music Free License).

For questions, updates and the rest of the course, check the links in this description, the pinned comment, Patreon, Discord and the comments below. Thank you for watching.



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=0) Greetings everyone.

- [00:00:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1) Today I am going to show you how to pick

- [00:00:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=4) the model that answers the question you are actually asking.

- [00:00:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=7) This is week 3 of the Software Engineering course, and we start with 1 booking.

- [00:00:13](https://www.youtube.com/watch?v=0zo0d3tKydU&t=13) Here is the situation.

- [00:00:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=14) Ari, user U-01, pressed Reserve for room C101, from 10:00 to 11:00.

- [00:00:20](https://www.youtube.com/watch?v=0zo0d3tKydU&t=20) And instead of a clear answer, the screen shows this message.

- [00:00:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=24) We could not confirm whether your booking was stored.

- [00:00:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=27) Check My bookings before trying again.

- [00:00:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=29) So Ari has a very real question: do I have the room, or should I press Reserve again?

- [00:00:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=36) A very common first reaction is to draw the whole system.

- [00:00:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=40) Let me do exactly that: I click Draw the

- [00:00:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=44) whole system, and the familiar picture of components appears below.

- [00:00:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=48) A browser talks to the booking service, and the

- [00:00:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=52) booking service uses policy, the room catalog, notification and storage.

- [00:00:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=56) Every box is right, and every arrow is right.

- [00:01:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=61) Now read the sentence under it.

- [00:01:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=63) None of these boxes tells Ari whether to press Reserve again.

- [00:01:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=68) The picture is correct, and it answers a different question than the one Ari is asking.

- [00:01:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=75) That is the question of this week, in the middle

- [00:01:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=78) card: which model answers the question we are actually asking?

- [00:01:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=81) There are 3 possible answers on the card.

- [00:01:25](https://www.youtube.com/watch?v=0zo0d3tKydU&t=85) Option A, 1 detailed diagram of every part.

- [00:01:28](https://www.youtube.com/watch?v=0zo0d3tKydU&t=88) Option B, a model chosen for each question.

- [00:01:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=92) Option C, the code, because it is the most precise.

- [00:01:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=96) Pick one before we continue.

- [00:01:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=100) Keep your answer, because scene 8 asks this very question twice about the same booking.

- [00:01:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=105) Now I click 5 questions about B-001, and a list appears on the right.

- [00:01:51](https://www.youtube.com/watch?v=0zo0d3tKydU&t=111) Ari asks: should I press Reserve again?

- [00:01:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=114) That question needs a user journey, which is scene 1.

- [00:01:58](https://www.youtube.com/watch?v=0zo0d3tKydU&t=118) The next one, what can happen to B-001 next, needs a state model, scene 2.

- [00:02:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=126) The room staff ask which room B-001 is for, now that C101 has a new name.

- [00:02:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=135) That is a question about identity and data, so it needs a data model, scene 3.

- [00:02:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=141) Bo asks whether Bo may cancel Ari's booking, which is a decision table in scene 4.

- [00:02:28](https://www.youtube.com/watch?v=0zo0d3tKydU&t=148) And a maintainer asks what happened before the

- [00:02:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=151) timeout, which is a sequence diagram in scene 5.

- [00:02:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=156) So this lecture builds 5 small models of 1 booking, each drawn for the question it

- [00:02:42](https://www.youtube.com/watch?v=0zo0d3tKydU&t=162) answers, and then a check that the models agree with each other and with the rules.

- [00:02:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=169) Check out the tutorial description to see the chapters, so you can jump to any scene.

- [00:02:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=174) To move between pages I use the arrow buttons at

- [00:02:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=177) the top right, and I click the next page button now.

- [00:03:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=182) Before the first scene, let me connect this to what you already know.

- [00:03:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=187) Week 2 ended with a register of requirements, and

- [00:03:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=190) the chips on this first card are their identifiers.

- [00:03:13](https://www.youtube.com/watch?v=0zo0d3tKydU&t=193) R-01, no overlapping confirmations.

- [00:03:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=196) R-02, a duration from 30 to 120 minutes.

- [00:03:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=201) R-03, who may cancel.

- [00:03:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=203) And R-04, the notification is a separate fact from the booking.

- [00:03:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=209) R-05, keyboard use with status you can perceive, and Q-01, the search response time.

- [00:03:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=215) The identifiers do not change, so R-03 in this lecture is exactly the R-03 of week 2.

- [00:03:42](https://www.youtube.com/watch?v=0zo0d3tKydU&t=222) Week 2 ended on a question: does a written rule

- [00:03:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=226) alone make the sequence of booking, cancellation and failure states understandable?

- [00:03:51](https://www.youtube.com/watch?v=0zo0d3tKydU&t=231) Hold on to that question for a moment.

- [00:03:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=235) A rule says what must hold, and it does not show how things move.

- [00:03:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=239) This week draws how the states, the data and the messages of 1

- [00:04:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=243) booking change, so each rule gets a picture you can check it against.

- [00:04:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=248) The example stays small on purpose.

- [00:04:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=250) Ari is U-01 and Bo is U-02.

- [00:04:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=254) The rooms are C101 and C202,

- [00:04:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=258) and both belong to Campus Rooms, our fictional booking service.

- [00:04:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=262) And B-001 is Ari's booking of C101, from 10:00 to 11:00, and it is confirmed.

- [00:04:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=270) You will meet that 1 booking in every scene of this lecture.

- [00:04:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=275) 1 distinction matters all lecture long.

- [00:04:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=277) A stored booking is either Confirmed or Cancelled.

- [00:04:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=281) Draft, Submitting, Rejected and Unknown outcome belong to the

- [00:04:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=285) request on the screen, not to the stored booking.

- [00:04:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=290) The drawings use a light UML style, introduced where each

- [00:04:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=294) one is first used: rounded boxes are states, an arrow carries

- [00:04:58](https://www.youtube.com/watch?v=0zo0d3tKydU&t=298) an event and its condition, and a lifeline carries numbered messages.

- [00:05:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=303) On the right, what you will be able to do by the end.

- [00:05:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=309) First, choose a model suited to a behavior, structure or interaction question.

- [00:05:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=314) Second, read a state transition with an event, condition and outcome.

- [00:05:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=319) Third, distinguish a stored booking from a transient interface or request state.

- [00:05:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=326) Fourth, explain entity identity and relationships without duplicating shared facts.

- [00:05:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=332) And fifth, locate a contradiction between a requirement, a diagram and an interface message.

- [00:05:38](https://www.youtube.com/watch?v=0zo0d3tKydU&t=338) That is the whole route, so let's open the first scene with the next page button.

- [00:05:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=346) This is the first scene, a bridge scene, and its

- [00:05:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=350) title asks what Ari needs to know after pressing Reserve.

- [00:05:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=353) The approach is in the line below: follow the person before drawing any internal box.

- [00:06:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=360) The grid has 3 steps across the top: choose

- [00:06:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=363) a room, submit the request, and observe the outcome.

- [00:06:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=366) Each step is 1 moment of Ari's booking, in the order Ari lives it.

- [00:06:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=371) Down the side are the rows: the goal, the action, what

- [00:06:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=375) the screen says, what is stored underneath, and what is still uncertain.

- [00:06:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=379) The screen row and the stored row are kept apart on purpose.

- [00:06:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=384) Before any step, the rail asks you to decide:

- [00:06:28](https://www.youtube.com/watch?v=0zo0d3tKydU&t=388) after pressing Reserve, what does Ari need to know?

- [00:06:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=392) Option A, that the request was sent.

- [00:06:34](https://www.youtube.com/watch?v=0zo0d3tKydU&t=394) Option B, whether the booking is confirmed.

- [00:06:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=397) Option C, which server handled it.

- [00:06:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=401) Pause here and choose.

- [00:06:43](https://www.youtube.com/watch?v=0zo0d3tKydU&t=403) Then think about it from Ari's side: option A only says that something left the

- [00:06:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=409) browser, and option C matters to the people who run the servers, not to Ari.

- [00:06:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=415) To move through a scene I use the Step button at the

- [00:06:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=419) top right, and the dots next to What is happening count the states.

- [00:07:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=423) I click Step to begin the journey.

- [00:07:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=426) Step 1, choose a room.

- [00:07:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=428) The goal is a free room from 10:00 to 11:00, the action is selecting C101,

- [00:07:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=434) and the screen says that C101 is free from 10:00 to 11:00.

- [00:07:20](https://www.youtube.com/watch?v=0zo0d3tKydU&t=440) Underneath, nothing is stored yet, and 1 thing is

- [00:07:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=443) still uncertain: someone else can still book it first.

- [00:07:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=447) The screen told the truth, but only about this moment.

- [00:07:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=451) I click Step.

- [00:07:34](https://www.youtube.com/watch?v=0zo0d3tKydU&t=454) Step 2, submit the request.

- [00:07:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=455) The goal is to ask for the room, the action

- [00:07:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=459) is pressing Reserve, and the screen says: Sending your request.

- [00:07:43](https://www.youtube.com/watch?v=0zo0d3tKydU&t=463) This is the moment people mix up.

- [00:07:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=466) Sending your request means request sent, and nothing has been decided yet.

- [00:07:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=470) Sent is not the same as confirmed.

- [00:07:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=473) I click Step again.

- [00:07:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=475) Step 3, observe the outcome.

- [00:07:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=477) The goal is to know whether the room is held, and this time the screen

- [00:08:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=483) says: Booking confirmed, B-001, C101, from 10:00 to 11:00.

- [00:08:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=489) Underneath, B-001 is stored as Confirmed.

- [00:08:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=492) Nothing about the room is left open; only the email may still be

- [00:08:17](https://www.youtube.com/watch?v=0zo0d3tKydU&t=497) on its way, and R-04 already says that is a separate fact.

- [00:08:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=502) So Ari needs to know whether the booking is confirmed, which was option B.

- [00:08:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=507) But step 3 does not always end like this.

- [00:08:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=511) I click Step to see every way it can end.

- [00:08:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=515) The outcome step can end 3 ways.

- [00:08:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=517) First, booking confirmed: the screen says so, B-001 is

- [00:08:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=520) stored, and Ari has nothing left to do, because the room is held.

- [00:08:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=525) Second, not available: C101 is already booked from 10:00 to 11:00, nothing

- [00:08:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=530) is stored for Ari, and the next action is to choose another time or room.

- [00:08:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=536) Third, could not determine the result.

- [00:08:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=539) The message says the booking may be stored and

- [00:09:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=542) asks Ari to check My bookings before trying again.

- [00:09:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=546) This is the Unknown outcome of this lecture.

- [00:09:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=550) 3 messages, 3 different next actions.

- [00:09:13](https://www.youtube.com/watch?v=0zo0d3tKydU&t=553) That is the real information need: after pressing Reserve,

- [00:09:17](https://www.youtube.com/watch?v=0zo0d3tKydU&t=557) Ari must learn which of these 3 situations holds.

- [00:09:20](https://www.youtube.com/watch?v=0zo0d3tKydU&t=560) I click Step.

- [00:09:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=563) Here is the same booking drawn as components:

- [00:09:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=566) browser, booking, policy, room catalog, notification and storage.

- [00:09:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=570) Correct boxes and correct arrows, exactly like the opening page.

- [00:09:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=575) Now look for the place where those 3 messages live.

- [00:09:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=579) There is none.

- [00:09:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=580) No box says what Ari must be told next.

- [00:09:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=584) The journey found that need before a single box was drawn.

- [00:09:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=588) Step.

- [00:09:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=590) The principle: a user journey exposes information

- [00:09:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=594) needs that an internal component diagram can miss.

- [00:09:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=597) In short: follow the person first, because boxes cannot show what they need.

- [00:10:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=603) Now let's change 1 condition.

- [00:10:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=605) The presets sit at the top of the rail.

- [00:10:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=609) I click No message, and the scene starts again at its first state under the new condition.

- [00:10:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=616) Same request, same stored result: B-001 is Confirmed.

- [00:10:20](https://www.youtube.com/watch?v=0zo0d3tKydU&t=620) Only 1 thing changes: the form returns to its start, with no message at all.

- [00:10:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=626) Look at the outcome column.

- [00:10:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=629) The stored row still says B-001 Confirmed, but the

- [00:10:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=633) uncertain row now says that Ari cannot tell: maybe it did not work.

- [00:10:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=639) I click Step to compare the 2 pictures.

- [00:10:42](https://www.youtube.com/watch?v=0zo0d3tKydU&t=642) 2 pictures of the same moment.

- [00:10:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=644) The system knows B-001 is Confirmed.

- [00:10:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=647) Ari, looking at an empty form, thinks: maybe it did not work.

- [00:10:51](https://www.youtube.com/watch?v=0zo0d3tKydU&t=651) Both views are reasonable, and only one is true.

- [00:10:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=655) What does a person do when a request seems to have failed?

- [00:10:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=659) They try again.

- [00:11:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=661) I click Step, and Ari presses Reserve a second time.

- [00:11:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=665) The second request is the same one: C101, from 10:00 to 11:00.

- [00:11:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=671) R-01 forbids overlapping confirmed bookings, and this request

- [00:11:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=674) overlaps B-001, so it is rejected.

- [00:11:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=678) And the screen now says: Not available, C101 is already booked from 10:00 to 11:00.

- [00:11:25](https://www.youtube.com/watch?v=0zo0d3tKydU&t=685) Every rule worked exactly as written.

- [00:11:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=687) I click Step once more.

- [00:11:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=689) Here is the consequence.

- [00:11:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=691) Ari concludes that someone else holds the room, the room Ari already holds.

- [00:11:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=696) A missing message turned a correct system into a wrong belief.

- [00:11:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=701) That is the duplicate click risk.

- [00:11:43](https://www.youtube.com/watch?v=0zo0d3tKydU&t=703) A component diagram never shows it, because every component did its job.

- [00:11:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=708) Only the journey shows what the person saw and did next.

- [00:11:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=713) Step.

- [00:11:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=715) Same principle from the other side: follow the person first.

- [00:11:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=719) Next we look at the booking itself, and at the states it can be in.

- [00:12:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=724) I click the next page button.

- [00:12:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=727) The second scene is an anchor scene, so we take our time.

- [00:12:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=732) Its title asks: the screen says Unknown, is the booking unknown too?

- [00:12:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=736) Keep that question in mind.

- [00:12:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=739) The picture has 2 state models, kept apart on purpose.

- [00:12:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=742) At the top, the request as Ari's screen sees it.

- [00:12:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=746) At the bottom, the booking as it is stored.

- [00:12:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=750) On the right, how to read it.

- [00:12:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=752) A rounded box is a state.

- [00:12:34](https://www.youtube.com/watch?v=0zo0d3tKydU&t=754) An arrow carries an event, with a condition in brackets when there is one.

- [00:12:38](https://www.youtube.com/watch?v=0zo0d3tKydU&t=758) And the yellow ring marks the current state.

- [00:12:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=761) The filled dot means start, when nothing is stored yet, and the

- [00:12:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=766) dashed arrow with a cross means a change that is absent on purpose.

- [00:12:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=772) Right now the marker sits on Draft.

- [00:12:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=775) Now decide before the reveal: Ari is in Draft and presses Submit.

- [00:13:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=780) What does Submit mean?

- [00:13:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=782) Option A, the booking now exists.

- [00:13:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=785) Option B, a request is on its way.

- [00:13:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=788) Option C, the room is held for Ari.

- [00:13:13](https://www.youtube.com/watch?v=0zo0d3tKydU&t=793) Pause and choose.

- [00:13:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=795) Options A and C both sound like good news, and both are claims about the store.

- [00:13:20](https://www.youtube.com/watch?v=0zo0d3tKydU&t=800) I click Step and watch where the marker goes.

- [00:13:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=804) Submit is an event, and the marker moves along its arrow to Submitting.

- [00:13:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=809) The request is on its way, nothing is decided, and the stored model below has no booking yet.

- [00:13:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=816) That was option B.

- [00:13:38](https://www.youtube.com/watch?v=0zo0d3tKydU&t=818) So what can happen next?

- [00:13:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=820) A request that is on its way can end in more than 1 state.

- [00:13:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=825) I click Step to show every way out of Submitting.

- [00:13:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=829) 3 events can leave Submitting.

- [00:13:51](https://www.youtube.com/watch?v=0zo0d3tKydU&t=831) Response accepted leads to Confirmed.

- [00:13:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=833) Response rejected leads to Rejected.

- [00:13:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=836) And response lost or timeout leads to Unknown outcome.

- [00:14:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=840) Each arrow is labeled with the event that triggers

- [00:14:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=844) it, and each event leads to exactly 1 state.

- [00:14:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=847) The marker can only follow an arrow that exists.

- [00:14:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=851) Let me follow them one at a time. Step.

- [00:14:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=856) First the rejected path.

- [00:14:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=858) The marker moves to Rejected, and look at the store below: nothing stored.

- [00:14:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=863) A rejected request never creates a confirmed booking.

- [00:14:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=867) That sentence is worth remembering, because many interfaces blur it.

- [00:14:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=871) A rejection is a fact about the request, not about a booking.

- [00:14:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=877) Step.

- [00:14:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=879) Now the accepted path.

- [00:14:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=881) The service decided and stored B-001, so the

- [00:14:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=886) stored model gets its first state: Confirmed, entered from the start dot.

- [00:14:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=892) The dashed line shows that the screen's Confirmed reports the stored booking.

- [00:14:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=897) 2 different facts now agree: the screen says Confirmed, and the store holds B-001.

- [00:15:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=904) Step.

- [00:15:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=907) And now the case from the opening page.

- [00:15:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=910) The response is lost on its way back, so the screen can only show Unknown outcome.

- [00:15:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=916) The upper marker sits on Unknown outcome.

- [00:15:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=919) But the lower marker has not moved: the stored booking is still Confirmed.

- [00:15:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=924) So the answer to the title is no.

- [00:15:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=927) The screen does not know about the booking; the booking itself is not unknown.

- [00:15:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=933) The note says it directly: a timeout is missing information,

- [00:15:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=936) and a UI timeout does not delete the stored booking.

- [00:15:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=940) Treating a timeout as a failure is how duplicate bookings start.

- [00:15:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=945) Step.

- [00:15:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=947) Later, Ari decides to cancel.

- [00:15:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=949) The stored model has an arrow for that, labeled Cancel, with R-03 allows in brackets.

- [00:15:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=956) The marker moves from Confirmed to Cancelled.

- [00:16:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=960) Let me read that transition aloud, because this is how every arrow is read.

- [00:16:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=965) The event is Cancel.

- [00:16:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=966) The condition is R-03 allows.

- [00:16:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=968) The outcome is Cancelled.

- [00:16:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=971) Notice that only the stored model changed.

- [00:16:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=974) The request picture above is dimmed, because a

- [00:16:17](https://www.youtube.com/watch?v=0zo0d3tKydU&t=977) cancellation is a new request with its own screen.

- [00:16:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=981) I click Step for the principle.

- [00:16:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=984) State models clarify which changes are possible, what

- [00:16:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=987) triggers them, and which facts are actually known.

- [00:16:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=990) In short: show what can change, what triggers it, and what is known.

- [00:16:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=995) Now the changed condition.

- [00:16:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=997) I click Cancel again: B-001 is already Cancelled, and

- [00:16:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1001) a second Cancel arrives, maybe from a double click or a retry.

- [00:16:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1006) Decide first: what should a second Cancel do?

- [00:16:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1009) Option A, cancel it a second time.

- [00:16:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1012) Option B, answer that it is already cancelled.

- [00:16:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1015) Option C, restore it to Confirmed.

- [00:16:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1019) Take a moment.

- [00:17:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1021) Option C sounds absurd, yet some systems toggle state on every click.

- [00:17:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1025) Option A is what an unguarded program does.

- [00:17:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1029) I click Step.

- [00:17:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1031) The defined answer is option B, a stable repeated response.

- [00:17:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1034) The violet loop means the event arrives and the state stays Cancelled.

- [00:17:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1039) The screen says: already cancelled, nothing changed.

- [00:17:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1042) The accident would be a second state change: the

- [00:17:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1046) history shows 2 cancellations and Ari receives a second notice.

- [00:17:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1049) The dashed box with the cross is that accident, and the model rules it out.

- [00:17:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1055) Step.

- [00:17:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1057) Now look for arrows that are missing on purpose.

- [00:17:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1061) Cancelled never goes back to Confirmed, and Rejected never becomes Confirmed.

- [00:17:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1066) Both are drawn dashed and crossed out.

- [00:17:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1069) An absent arrow is a decision, not an oversight.

- [00:17:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1073) A rejected request stays rejected, and a new attempt

- [00:17:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1077) is a new request that starts from Draft again.

- [00:18:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1080) Step.

- [00:18:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1083) The note asks 2 different kinds of question.

- [00:18:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1086) The first is about safety: can a forbidden state occur?

- [00:18:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1090) For example, a cancelled booking never becomes Confirmed again.

- [00:18:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1094) In this model the answer is visible: no arrow leads back.

- [00:18:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1099) That kind of statement is called a safety invariant, and the

- [00:18:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1103) code still needs its own check that it keeps the promise.

- [00:18:28](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1108) The second is about progress: will pending work eventually be resolved?

- [00:18:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1113) Every Unknown outcome should end as Confirmed or Rejected, and that takes more than arrows.

- [00:18:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1120) The arrows allow it, but they do not make it happen.

- [00:18:43](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1123) That needs a status check and a recovery path, which comes back in week 6.

- [00:18:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1128) I click Step for the principle.

- [00:18:51](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1131) Same principle, reached from a repeated event and 2 missing arrows: a

- [00:18:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1135) state model shows what can change, what triggers it, and what is known.

- [00:18:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1139) I click the next page button.

- [00:19:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1143) Scene 3 is another anchor, and it moves from states to data.

- [00:19:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1147) Its title asks: when a room changes, which copy of its facts is right?

- [00:19:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1152) Let me show you the records first.

- [00:19:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1156) At the top is room C101, with its identifier,

- [00:19:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1162) its display name, Seminar Room 1, and its capacity of 12 people.

- [00:19:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1169) Below it are 2 bookings of that room.

- [00:19:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1172) B-001 belongs to Ari, from 10:00 to 11:00.

- [00:19:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1175) B-003 belongs to Bo, from 12:00 to 13:00.

- [00:19:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1179) Look at the last line of each record: capacity copy, 12.

- [00:19:43](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1183) When each booking was made, it copied the room's capacity into its own record.

- [00:19:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1189) Now decide: the room's capacity changes from 12 to 10.

- [00:19:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1193) What do the 2 bookings say?

- [00:19:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1196) Option A, both say 10.

- [00:19:58](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1198) Option B, both still say 12.

- [00:20:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1200) Option C, only the newer one says 10.

- [00:20:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1205) Choose before I continue.

- [00:20:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1207) A copy is a separate value, so nothing updates

- [00:20:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1210) it unless someone writes code to do exactly that.

- [00:20:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1214) I click Step and change the room.

- [00:20:17](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1217) The room's capacity is now 10, and both copies still say 12, so option B.

- [00:20:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1223) 2 records now disagree with the room, and neither record knows which value is right.

- [00:20:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1229) Imagine a staff member checking whether 12 people fit for Bo's meeting.

- [00:20:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1233) The answer depends on which copy they happen to read.

- [00:20:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1237) That is the cost of copying a current fact. Step.

- [00:20:43](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1243) The fix is to give the room 1 identity, C101.

- [00:20:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1248) Each booking now keeps only the room identifier,

- [00:20:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1252) C101, and reads the capacity from the room itself.

- [00:20:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1257) Both records now show capacity read from C101: 10.

- [00:21:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1262) 1 fact, 1 place, and nothing can disagree, because there is only 1 value to read.

- [00:21:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1268) This is the core idea of the scene: decide what a fact means before deciding where it lives.

- [00:21:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1275) The capacity is a current fact about the room.

- [00:21:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1278) I click Step to draw it as a model.

- [00:21:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1282) The same idea as a data model.

- [00:21:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1286) 3 entities: User, with an identifier and a name; Room,

- [00:21:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1290) with an identifier, a display name and a capacity; and Booking.

- [00:21:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1296) A booking has its own identifier, an owner identifier,

- [00:21:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1300) a room identifier, a start, an end and a state.

- [00:21:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1304) The owner and room identifiers point at the

- [00:21:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1307) other 2 entities, instead of copying their facts.

- [00:21:51](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1311) About the notation: the identifier comes first in

- [00:21:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1314) every entity, and fields that point elsewhere are blue.

- [00:21:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1317) An entity in this picture does not have to become exactly 1 class or 1 table.

- [00:22:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1324) And not every noun deserves an entity.

- [00:22:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1327) Ask which identity, responsibility or relationship a box actually represents;

- [00:22:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1331) a room has its own identity, so it earns one.

- [00:22:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1336) I click Step.

- [00:22:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1338) Now read the lines.

- [00:22:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1339) On each line, many sits at the booking end and one sits at

- [00:22:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1344) the other end, so a booking belongs to 1 user and 1 room.

- [00:22:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1350) Read the other way, a user or a room can have many bookings over time.

- [00:22:34](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1354) The instances show it: C101 already has

- [00:22:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1357) 2 bookings, B-001 and B-003.

- [00:22:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1361) That phrase, many to one, is called cardinality.

- [00:22:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1364) It tells you how many of each side can be related,

- [00:22:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1368) and it decides where a reference field belongs: on the many side.

- [00:22:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1373) Step.

- [00:22:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1375) The principle: model identity and the meaning of a fact before deciding where to store it.

- [00:23:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1382) In short, decide what a fact means before deciding where it lives.

- [00:23:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1388) Now the changed condition.

- [00:23:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1389) I click Rename: the display name of C101 changes from Seminar

- [00:23:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1395) Room 1 to Seminar Room A, and its identifier stays C101.

- [00:23:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1401) A rename is the most ordinary change a room can have.

- [00:23:25](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1405) The question is what happens to bookings that point at the room in different ways.

- [00:23:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1410) I click Step.

- [00:23:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1413) On the left, a booking that stored the room's name.

- [00:23:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1417) After the rename it looks for a room named Seminar Room

- [00:23:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1421) 1 and finds nothing, because no room has that name anymore.

- [00:23:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1425) On the right, a booking that stored the identifier C101.

- [00:23:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1430) It still finds its room, now called Seminar Room A.

- [00:23:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1434) Matching on a name breaks, and a stable identifier does not.

- [00:23:58](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1438) Step.

- [00:24:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1441) But look at Ari's receipt for B-001.

- [00:24:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1444) It still says Seminar Room 1, and that is on

- [00:24:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1448) purpose: the receipt must show what Ari saw when booking.

- [00:24:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1452) This copy is a historical snapshot.

- [00:24:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1454) Duplication is not always wrong: it is right when the fact means what

- [00:24:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1459) was true then, and wrong when it should mean what is true now.

- [00:24:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1464) Step.

- [00:24:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1466) 1 more distinction: 4 checks that answer 4 different questions.

- [00:24:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1470) The first is identifier shape.

- [00:24:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1472) C101 and C303 are well formed, and 101-C is not.

- [00:24:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1479) The second is whether the referenced room exists.

- [00:24:42](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1482) C303 has the right shape and names no room.

- [00:24:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1486) Keeping every reference pointed at something real is called referential integrity.

- [00:24:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1492) The last 2 are separate questions again.

- [00:24:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1495) Do the booking rules allow it, such as R-01?

- [00:24:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1499) And may this person do it, such as R-03?

- [00:25:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1503) A data constraint, a domain rule and a permission are

- [00:25:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1507) 3 different checks, and each one catches a different mistake.

- [00:25:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1511) Keep them apart when you design. Step.

- [00:25:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1516) So the same principle holds under a rename: a current fact

- [00:25:20](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1520) lives in 1 place, and a historical fact is copied on purpose.

- [00:25:25](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1525) I click the next page button.

- [00:25:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1529) Scene 4 is a bridge scene about permissions.

- [00:25:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1532) Its title asks: may any signed-in member cancel any booking?

- [00:25:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1536) The rule card at the top is R-03 from week 2.

- [00:25:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1541) The situation is B-001: room C101,

- [00:25:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1545) from 10:00 to 11:00, owned by Ari and confirmed.

- [00:25:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1548) The teaching clock says 09:00, so the booking starts in 1 hour.

- [00:25:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1553) Decide: Ari and Bo are both signed in.

- [00:25:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1556) May each of them cancel B-001?

- [00:25:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1559) Option A, both.

- [00:26:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1561) Option B, only Ari, the owner, before 10:00.

- [00:26:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1564) Option C, neither, because only staff cancel.

- [00:26:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1567) Pick one before I continue.

- [00:26:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1570) Choose one.

- [00:26:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1571) A is tempting because signing in feels like

- [00:26:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1574) permission, and C is tempting because staff feel powerful.

- [00:26:17](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1577) I click Step and read the rule itself.

- [00:26:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1581) R-03: an authenticated requester may cancel their own future confirmed booking.

- [00:26:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1586) 4 conditions hide in that 1 sentence, and they are now highlighted.

- [00:26:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1592) Authenticated means signed in.

- [00:26:34](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1594) Their own means the requester is the owner.

- [00:26:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1597) Future means the start is later than now.

- [00:26:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1600) And confirmed is the state of the booking.

- [00:26:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1604) Each condition becomes a column of the table,

- [00:26:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1607) and each row is 1 combination with its decision.

- [00:26:51](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1611) Let me fill the table 1 row at a time.

- [00:26:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1614) Step.

- [00:26:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1617) Row 1: Ari, signed in, own booking, confirmed,

- [00:27:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1621) and 09:00 is before the 10:00 start.

- [00:27:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1625) Every condition holds, so the decision is allowed.

- [00:27:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1629) That is the only combination R-03 permits, and

- [00:27:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1632) you will see that nothing else gets this green chip.

- [00:27:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1636) I click Step for the next row.

- [00:27:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1639) Row 2 changes exactly 1 cell: Bo asks instead of Ari.

- [00:27:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1643) Bo is signed in, but it is not Bo's booking, so

- [00:27:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1647) the decision is denied, and the reason column says not the owner.

- [00:27:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1652) So the answer to the question is option B: only Ari, the owner, before the start.

- [00:27:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1657) Signing in says who you are; it does not decide what you may do.

- [00:27:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1661) Step.

- [00:27:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1664) 2 more rows.

- [00:27:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1665) Row 3: Ari at exactly 10:00.

- [00:27:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1667) The start is not later than now, so it is denied,

- [00:27:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1672) because a booking that has already started is not in the future.

- [00:27:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1677) Row 4: nobody signed in at all.

- [00:28:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1680) Denied, because there is no authenticated requester.

- [00:28:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1682) Notice that the own booking cell is empty;

- [00:28:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1686) without a person, ownership cannot even be checked.

- [00:28:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1689) Step.

- [00:28:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1692) Row 5: B-001 is already Cancelled.

- [00:28:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1695) The decision is neither allowed nor denied; it is the stable

- [00:28:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1699) repeated response you saw in scene 2, with no second transition.

- [00:28:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1703) The state model and this table agree about the same case,

- [00:28:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1707) which is exactly what we want from 2 models of 1 rule.

- [00:28:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1711) Now let's look for what is missing. Step.

- [00:28:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1716) A new row appears with a question mark: Ari's own

- [00:28:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1720) confirmed booking at 12:00, after it has already ended.

- [00:28:43](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1723) Nobody wrote this row before, and the table made the gap easy to see.

- [00:28:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1729) R-03 still answers it: the start is not later than now, so it is denied.

- [00:28:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1735) But you only notice such a combination when every condition has its own column.

- [00:29:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1740) Step.

- [00:29:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1743) The policy boundary at the bottom: R-03 allows 1 combination,

- [00:29:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1746) and every other row is denied or answered with the repeated response.

- [00:29:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1751) A staff override would be a new rule.

- [00:29:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1755) The principle: a decision table makes

- [00:29:17](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1757) combinations and missing cases easier to inspect.

- [00:29:20](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1760) In short, rows show every combination, and the gaps between them.

- [00:29:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1766) Now the changed condition.

- [00:29:28](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1768) I click Who asks.

- [00:29:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1770) Everything else is held fixed: signed in,

- [00:29:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1773) confirmed, 09:00 before a 10:00 start.

- [00:29:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1777) Only the second column changes.

- [00:29:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1779) This is how you test a single condition: change 1 thing and keep the rest.

- [00:29:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1784) I click Step, and the owner asks first.

- [00:29:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1787) Ari, the owner: allowed.

- [00:29:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1789) Look at the rule card; the words their own

- [00:29:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1792) are highlighted, because that is the condition deciding this column.

- [00:29:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1796) I click Step.

- [00:29:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1799) Bo: denied.

- [00:30:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1800) Same sign-in, same booking, same time; 1 cell changed, and the decision changed with it.

- [00:30:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1805) The exact rule responsible is the phrase their own. Step.

- [00:30:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1811) And the room staff, signed in, same booking: denied under R-03.

- [00:30:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1816) Staff have no hidden right to cancel every booking.

- [00:30:20](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1820) A staff override would be a new rule that

- [00:30:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1824) the stakeholders decide, not an exception hidden in code.

- [00:30:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1829) Keep that in mind for later weeks: when a rule seems

- [00:30:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1833) to need an exception, write the exception down as a rule.

- [00:30:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1836) I click Step for the principle.

- [00:30:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1839) 1 cell changed, 1 decision changed, and 1 phrase of the rule explains it.

- [00:30:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1844) That is what rows give you.

- [00:30:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1847) I click the next page button.

- [00:30:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1850) Scene 5 is an anchor scene, and its title

- [00:30:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1854) asks: what must happen before the screen may say Confirmed?

- [00:30:58](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1858) The drawing is a sequence diagram.

- [00:31:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1861) It has 4 participants, each with its own lifeline: the

- [00:31:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1865) browser, the booking service, the authoritative store, and the notification worker.

- [00:31:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1870) Time runs down the page.

- [00:31:13](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1873) The authoritative store is the one place whose

- [00:31:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1876) answer counts, and it keeps the no overlap decision.

- [00:31:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1879) Under the diagram, 3 cards track the screen, the store, and the next action.

- [00:31:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1886) Decide first: what must happen before Ari's screen may say Confirmed?

- [00:31:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1891) Option A, the request reaches the service.

- [00:31:34](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1894) Option B, the booking is decided and stored.

- [00:31:38](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1898) Option C, the confirmation email is sent.

- [00:31:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1901) Hold your answer for a moment.

- [00:31:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1905) Pick one.

- [00:31:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1906) Remember the journey: a confirmation promises that the room is held.

- [00:31:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1910) Which of these 3 events actually holds the room?

- [00:31:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1914) I click Step, 1 message at a time.

- [00:31:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1917) Message 1, submit request: the browser sends Ari's request to the booking service.

- [00:32:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1923) The screen shows Submitting, and nothing is stored yet.

- [00:32:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1927) I click Step.

- [00:32:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1929) Message 2, validate request, goes from the service to itself.

- [00:32:13](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1933) It checks the request on its own terms, such as

- [00:32:17](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1937) the duration rule R-02, before it asks the store anything.

- [00:32:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1941) Step.

- [00:32:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1944) Message 3, decide and persist atomically.

- [00:32:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1946) The authoritative store makes the no overlap decision and stores the

- [00:32:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1951) booking in 1 step, so no other request can slip in between.

- [00:32:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1957) That single step is where R-01 lives: the check and the write happen together.

- [00:32:42](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1962) Week 6 comes back to what happens when 2 requests arrive at the same moment.

- [00:32:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1967) I click Step now.

- [00:32:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1969) Message 4, stored B-001: the store answers.

- [00:32:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1973) Look at the green badge on the store's lifeline: only now does a confirmed booking exist.

- [00:33:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1980) I click Step.

- [00:33:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1982) Message 5, Confirmed, goes back to the browser, and now the

- [00:33:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1987) screen may say Confirmed, because messages 3 and 4 came first.

- [00:33:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1991) So the answer is option B.

- [00:33:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1994) A true confirmation needs the decision and the storage before the response.

- [00:33:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=1999) A screen that says Confirmed any earlier is making a promise it cannot keep.

- [00:33:25](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2005) Step.

- [00:33:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2007) Message 6, record pending notification, happens after the response.

- [00:33:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2011) It is separate work with its own state, which is

- [00:33:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2015) rule R-04: the confirmation never waits for the email.

- [00:33:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2020) And the next action card says there is nothing left

- [00:33:43](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2023) for Ari to do, since the email follows as separate work.

- [00:33:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2027) I click Step once more.

- [00:33:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2029) 1 thing about reading these diagrams: the numbers give

- [00:33:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2033) the order, and the distance between arrows is not time.

- [00:33:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2037) Message 6 may run seconds or even minutes later.

- [00:34:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2042) The principle is on the right, and the next condition shows why it matters:

- [00:34:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2048) an interaction history explains why similar symptoms can need different recovery actions.

- [00:34:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2054) Now I click Lost response.

- [00:34:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2056) Messages 1 to 4 are the same as before: B-001

- [00:34:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2061) is decided and stored, and the green badge is already on the store.

- [00:34:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2066) Only 1 thing changes in this history: message

- [00:34:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2069) 5, the Confirmed response, never arrives at the browser.

- [00:34:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2073) I click Step and send it.

- [00:34:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2075) Message 5 is lost on its way back.

- [00:34:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2079) Ari's screen can only say Unknown outcome, while the store says B-001 Confirmed.

- [00:34:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2085) The booking exists, and Ari does not know it.

- [00:34:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2089) Compare the cards below with the success: the stored state is the same, Confirmed.

- [00:34:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2094) A state model of the stored booking would show exactly the same final state in both histories.

- [00:35:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2101) I click Step.

- [00:35:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2103) So decide: both histories end with B-001 Confirmed in the store.

- [00:35:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2110) Which model shows the difference?

- [00:35:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2112) Option A, the state model.

- [00:35:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2115) Option B, the numbered sequence of messages.

- [00:35:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2118) Option C, the data model.

- [00:35:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2122) Pause and think about what each picture keeps.

- [00:35:25](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2125) The state model keeps where a booking can be, and the data model keeps what is stored.

- [00:35:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2131) Neither keeps the order of messages. Step.

- [00:35:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2135) The sequence does, option B.

- [00:35:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2137) Message 5 is exactly where the 2 histories differ.

- [00:35:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2141) And that tells you the recovery: check the

- [00:35:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2144) status of B-001 before submitting again.

- [00:35:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2149) Not a second booking.

- [00:35:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2150) A person who simply retries would get not available from R-01, exactly as in scene 1.

- [00:35:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2157) Checking the status is the right recovery, and week 6 builds it properly.

- [00:36:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2162) Step.

- [00:36:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2164) Same stored result, different history, different recovery.

- [00:36:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2167) Now for the third history, where no booking is stored at all, I click Rejected.

- [00:36:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2175) Here a request conflicts with B-001.

- [00:36:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2178) Messages 1 and 2 are as before: the request is submitted, and the service validates it.

- [00:36:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2184) I click Step.

- [00:36:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2186) Message 3, decide: conflict.

- [00:36:28](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2188) The authoritative decision finds the overlap with B-001,

- [00:36:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2192) and the badge on the store says nothing stored.

- [00:36:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2196) I click Step.

- [00:36:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2199) Message 4, Rejected, nothing stored.

- [00:36:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2201) The screen says Rejected, the store holds nothing new, and

- [00:36:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2205) the next action is to choose another time or room.

- [00:36:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2209) There is nothing to check.

- [00:36:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2212) Now compare the 2 people.

- [00:36:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2214) Both saw no confirmation, so the symptom looks similar.

- [00:36:58](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2218) But one history stored a booking and the other stored nothing, so the recovery differs.

- [00:37:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2224) Step.

- [00:37:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2227) The principle: an interaction history explains why 2

- [00:37:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2231) apparently similar user symptoms can require different recovery actions.

- [00:37:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2235) In short: same symptom, different history, different fix.

- [00:37:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2239) The next scene stays with the screen and asks what an empty results area really promises.

- [00:37:25](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2245) I click the next page button.

- [00:37:28](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2248) Scene 6 is a bridge scene about the screen itself.

- [00:37:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2252) Its title asks: the page says No rooms, is the search finished?

- [00:37:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2256) On the left is a room search screen.

- [00:37:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2260) The search asks for rooms free from 10:00 to 11:00.

- [00:37:43](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2263) Now look at the results area: it already says No rooms, while the search is still running.

- [00:37:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2270) Decide: what does No rooms mean while the search is running?

- [00:37:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2274) Option A, no room is free.

- [00:37:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2277) Option B, nothing yet, the answer is not known.

- [00:38:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2280) Option C, the service failed.

- [00:38:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2284) Pick one.

- [00:38:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2285) The honest answer can only come from what the screen actually knows at this moment.

- [00:38:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2289) I click Step, and the table on the right fills 1 state at a time.

- [00:38:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2294) The first state is Loading.

- [00:38:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2296) The screen says it is searching for rooms from 10:00 to 11:00.

- [00:38:20](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2300) What is known: the question is being answered, and nothing is known yet.

- [00:38:25](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2305) That was option B.

- [00:38:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2307) So showing No rooms here would promise something the screen does not know.

- [00:38:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2312) The next action is to wait or cancel, and keyboard focus stays on the search form.

- [00:38:38](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2318) Step.

- [00:38:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2320) Empty result: the search finished, and no room is free at that time.

- [00:38:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2324) That is a real answer, and the next action is to change the time.

- [00:38:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2328) Focus moves to the message.

- [00:38:51](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2331) Moving focus matters for people using a keyboard or a screen reader:

- [00:38:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2335) the message is where they land, so they meet the answer first.

- [00:38:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2339) That is rule R-05 in practice. Step.

- [00:39:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2344) Validation error: here the start is 11 and the end is 10.

- [00:39:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2348) Nothing was searched, because 1 field needs fixing: the

- [00:39:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2351) end time must be later than the start time.

- [00:39:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2355) The next action is to correct the end time, and

- [00:39:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2358) focus moves straight to the end time field, outlined in yellow.

- [00:39:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2362) The screen points at the one thing to fix. Step.

- [00:39:28](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2368) Service unavailable: the screen says it could not load

- [00:39:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2371) rooms, and nothing is known about free rooms yet.

- [00:39:34](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2374) The search did not complete, so the screen says nothing about rooms.

- [00:39:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2379) The next action is to try again, and focus moves to the message and its try again button.

- [00:39:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2385) Compare it with the empty result: both show no rooms, and they mean opposite things.

- [00:39:51](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2391) Step.

- [00:39:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2393) Results: 2 rooms were free from 10:00 to 11:00 when the

- [00:39:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2397) search ran, C101 and C202.

- [00:40:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2401) The next action is to choose a room, and focus moves to the results heading.

- [00:40:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2406) 5 states, 5 promises.

- [00:40:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2408) Each one says what is known and what the person

- [00:40:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2412) can do next, instead of several designs that look alike.

- [00:40:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2416) I click Step.

- [00:40:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2418) The principle: an interface should communicate what is known and what the user can do next.

- [00:40:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2424) In short, say what is known and what the person can do.

- [00:40:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2429) Now the changed condition.

- [00:40:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2430) I click Empty or failed.

- [00:40:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2432) We hold the screen fixed and change only what happened.

- [00:40:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2436) First, a valid search that found no free room.

- [00:40:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2441) The empty result panel says: no room is free from 10:00 to 11:00, try another time.

- [00:40:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2447) Its button offers the next action, change the time.

- [00:40:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2450) I click Step.

- [00:40:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2453) Now the same search after a failed request.

- [00:40:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2456) Neither panel shows a room, but the words differ.

- [00:41:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2460) One says the search finished; the other says nothing is known about free rooms yet.

- [00:41:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2466) The table below compares them row by row, starting with what is known.

- [00:41:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2471) One finished with no free room, and the other did not complete at all.

- [00:41:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2476) Step.

- [00:41:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2479) The next actions differ: change the time, versus try again.

- [00:41:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2483) And keyboard focus moves to the message in both,

- [00:41:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2486) so a keyboard user meets the answer before anything else.

- [00:41:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2491) Step.

- [00:41:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2493) Now take the color away.

- [00:41:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2495) Both panels turn gray, and they still differ by their words and

- [00:41:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2500) by their icon shape: a circle for empty, and a cross for failed.

- [00:41:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2505) That is what rule R-05 needs: status you can perceive without relying on color.

- [00:41:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2512) I click Step for the principle.

- [00:41:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2515) Same empty area, 2 promises, 2 next steps.

- [00:41:58](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2518) Next, we check whether our models agree with each other.

- [00:42:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2522) I click the next page button.

- [00:42:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2526) Scene 7 is a bridge scene, and its title is a challenge:

- [00:42:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2531) a neat diagram sends Confirmed, so where does it contradict R-01?

- [00:42:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2535) 3 panels must agree here.

- [00:42:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2538) On the left is R-01: no overlapping confirmed

- [00:42:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2542) bookings for the same room, with half-open intervals.

- [00:42:25](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2545) Below it are the 2 requests: Ari holds 10:00 to 11:00,

- [00:42:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2550) and Bo asks for 10:30 to 11:30.

- [00:42:34](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2554) In the middle is a sequence diagram with

- [00:42:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2557) Bo's browser, the booking service and the authoritative store.

- [00:42:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2561) On the right is the calendar of C101 after the interaction.

- [00:42:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2566) Decide: where does this diagram contradict R-01?

- [00:42:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2570) Option A, nowhere, every arrow is neat.

- [00:42:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2573) Option B, message 2 promises before any decision.

- [00:42:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2577) Option C, only in the calendar.

- [00:43:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2582) Choose, and then let's test the diagram the way you can

- [00:43:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2587) test any model before code exists: walk 1 concrete request through it.

- [00:43:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2592) I click Step.

- [00:43:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2594) Message 1: Bo's browser submits C101, from 10:30 to 11:30.

- [00:43:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2601) So far nothing unusual has happened. Step.

- [00:43:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2607) Message 2: Confirmed goes straight back to Bo.

- [00:43:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2610) No decision has been made yet.

- [00:43:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2613) The diagram promises before it knows, and Bo now believes the room is held.

- [00:43:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2619) Step.

- [00:43:42](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2622) Then message 3 stores booking B-004,

- [00:43:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2625) and message 4 checks availability, too late.

- [00:43:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2628) Look at the calendar: 2 confirmed bookings of C101.

- [00:43:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2634) B-001 runs from 10:00 to 11:00, and B-004 from 10:30 to 11:30.

- [00:44:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2641) The hatched band marks the overlap, from 10:30 to 11:00.

- [00:44:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2645) Step.

- [00:44:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2647) Here is the contradiction.

- [00:44:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2649) R-01 forbids that overlap, and the message order allowed

- [00:44:13](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2653) it: message 2 comes before the decision in message 4.

- [00:44:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2658) Neat, and wrong.

- [00:44:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2659) So the answer is option B.

- [00:44:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2662) The calendar only showed the damage; the cause is the order of messages.

- [00:44:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2666) A beautiful diagram can contradict the requirement it is meant to serve.

- [00:44:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2671) Step.

- [00:44:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2673) The principle: models are useful when their claims can

- [00:44:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2676) be checked against one another and against intended behavior.

- [00:44:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2680) In short, walk 1 example through every model; they must agree.

- [00:44:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2685) Now I click Decide first.

- [00:44:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2687) Same rule, same 2 requests, same calendar.

- [00:44:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2690) 1 change: the answer to Bo moves after the authoritative decision.

- [00:44:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2696) Everything else in the drawing stays the same: the

- [00:44:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2699) same size, the same style and the same 3 participants.

- [00:45:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2703) I click Step.

- [00:45:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2706) Message 1, submit, and then message 2, decide and persist atomically.

- [00:45:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2711) The store decides before anyone is told anything.

- [00:45:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2715) I click Step.

- [00:45:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2718) Message 3, conflict, overlaps B-001,

- [00:45:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2721) so message 4 is Rejected, nothing stored.

- [00:45:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2724) The calendar keeps 1 booking, and Bo is told the truth.

- [00:45:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2729) The check card agrees: rule R-01, no overlap; diagram,

- [00:45:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2733) decide then answer; calendar, 1 booking of C101.

- [00:45:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2737) All 3 panels now tell the same story. Step.

- [00:45:43](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2743) Both diagrams are equally neat, and only one agrees with R-01.

- [00:45:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2747) Next, a model is allowed to leave things out.

- [00:45:51](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2751) I click the next page button.

- [00:45:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2754) Scene 8 is the last scene, and it closes the question from the opening page.

- [00:45:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2759) 1 booking, B-001, and 4 views of it: context, sequence, state and data.

- [00:46:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2765) The view buttons work as a representation selector: each one opens the view that suits a

- [00:46:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2771) question, and the card on the right lists what that view keeps and what it leaves out.

- [00:46:17](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2777) Here is the first question, the one I promised in

- [00:46:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2781) the opening: which view answers who owns B-001?

- [00:46:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2786) Option A, context.

- [00:46:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2787) Option B, sequence.

- [00:46:28](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2788) Option C, data.

- [00:46:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2789) Take a moment and choose the one that shows an owner.

- [00:46:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2796) Decide, and then let's try the views one by one.

- [00:46:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2800) I start with the context view, and I click its button to open it.

- [00:46:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2806) The context view shows who uses Campus Rooms: Ari, Bo

- [00:46:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2810) and the room staff, plus the mail provider outside the service.

- [00:46:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2815) It keeps people, the service boundary and outside systems.

- [00:46:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2819) But it has no owner field anywhere, so it cannot

- [00:47:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2823) answer the question, and the answer line below says exactly that.

- [00:47:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2826) Now I click the Data button.

- [00:47:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2830) The data view answers it directly.

- [00:47:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2831) B-001 has an owner identifier, U-01,

- [00:47:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2835) and the arrow leads to user U-01, which is Ari.

- [00:47:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2839) So the answer is option C.

- [00:47:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2842) The data view leaves out the order of events and the screen

- [00:47:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2847) messages, and it loses nothing, because this question does not need them.

- [00:47:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2851) I click Step for the second question.

- [00:47:34](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2854) The second question: which view answers what happened before the timeout?

- [00:47:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2859) Option A, data.

- [00:47:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2861) Option B, sequence.

- [00:47:42](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2862) Option C, state.

- [00:47:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2864) You already met this question in scene 5.

- [00:47:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2869) Decide, and remember what the state model could not show in scene 5.

- [00:47:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2874) Then I open the Sequence view with its button.

- [00:47:57](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2877) The sequence view answers it, option B: B-001

- [00:48:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2881) was stored at message 4, and the response, message 5, was lost.

- [00:48:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2886) It keeps participants and the numbered order of messages.

- [00:48:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2890) It leaves out fields, ownership and the other possible histories.

- [00:48:13](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2893) No owner and no room name, because this question does not need them.

- [00:48:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2898) Now I click State.

- [00:48:21](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2901) The state view answers a third question: what can happen to B-001 next?

- [00:48:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2907) It is Confirmed now, and Cancel with R-03 allows can move it to Cancelled.

- [00:48:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2913) It keeps states, events and conditions, and it

- [00:48:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2916) leaves out who asked, the message order and timing.

- [00:48:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2919) Each view is small because it is honest about its question.

- [00:48:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2924) Step.

- [00:48:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2926) Here is the question to model matrix.

- [00:48:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2929) Context answers who uses the service.

- [00:48:51](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2931) Sequence answers what happened before the timeout.

- [00:48:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2934) State answers what can happen next.

- [00:48:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2936) Data answers who owns the booking.

- [00:49:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2941) Every row also names what the view leaves out.

- [00:49:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2944) That column is not a weakness; it is the reason each view is readable.

- [00:49:10](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2950) The principle: a useful abstraction makes its omissions intentional.

- [00:49:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2954) Now the changed condition, where the audience changes.

- [00:49:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2958) I click Maintainer.

- [00:49:20](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2960) Same booking, a different person: a maintainer investigating why Ari saw Unknown outcome.

- [00:49:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2967) The view buttons are switched off here, because

- [00:49:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2970) the question stays the same for the whole condition.

- [00:49:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2973) I click Step to see what the maintainer needs.

- [00:49:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2977) The maintainer needs the numbered messages and the stored state

- [00:49:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2980) of B-001, so the sequence view opens.

- [00:49:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2984) The room's display name and the wording on the screen can be left out.

- [00:49:49](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2989) For this person, message 5 and the stored Confirmed are the whole story.

- [00:49:55](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2995) Everything else is noise in the middle of an investigation.

- [00:49:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=2999) Step.

- [00:50:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3001) A student using the service needs something else:

- [00:50:05](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3005) the message on the screen and the next action.

- [00:50:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3009) Participants, message numbers and field names can all be left out.

- [00:50:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3014) Same booking, different useful detail.

- [00:50:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3016) The model you draw depends on the question and on who asks it.

- [00:50:20](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3020) I click Step for the principle.

- [00:50:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3023) Change the audience, and the useful model changes with it.

- [00:50:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3026) A useful abstraction preserves what matters for its question and leaves the rest out on purpose.

- [00:50:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3033) I click the next page button.

- [00:50:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3036) Let's bring the 5 models together on 1 page.

- [00:50:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3040) Each card shows 1 model of the same booking,

- [00:50:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3044) what it shows, and a small drawing of its notation.

- [00:50:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3048) The user journey shows steps, goals, what the

- [00:50:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3052) screen says, what is stored and what is uncertain.

- [00:50:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3056) The state models show states, events and conditions

- [00:51:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3060) for the request and for the stored booking.

- [00:51:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3064) The data model shows entities, identifiers and references.

- [00:51:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3068) The decision table shows 1 row per combination.

- [00:51:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3072) And the sequence diagram shows participants and numbered messages.

- [00:51:17](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3077) Now let's return to the opening page, where 5 questions waited for their models.

- [00:51:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3083) I click Show the questions, and each card gets its question in yellow.

- [00:51:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3089) The journey answers what the person needs to know next.

- [00:51:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3093) The state models answer what can happen next, and on which event.

- [00:51:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3097) The data model answers which facts exist and where each one lives.

- [00:51:42](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3102) The decision table answers which combination is allowed, and why.

- [00:51:47](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3107) The sequence answers in what order it happened, and where it stopped.

- [00:51:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3112) Now I click What does each leave out.

- [00:51:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3116) The last line of every card is what that model leaves

- [00:52:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3120) out on purpose: the journey has no components, the state models

- [00:52:04](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3124) have no message order, and the data model has no screen messages.

- [00:52:09](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3129) At the bottom is the notation used this week: rounded states, events on arrows, the current

- [00:52:16](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3136) state ring, the start dot, absent arrows, entities, many to one, and a lost message.

- [00:52:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3142) Keep this page as your reference sheet; it is also in the notes of this lecture.

- [00:52:28](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3148) Now the principles and checks.

- [00:52:29](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3149) I click the next page button.

- [00:52:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3153) 8 principles, 1 per scene, and 6 checks.

- [00:52:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3156) Principle 1: a user journey exposes information

- [00:52:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3160) needs that an internal component diagram can miss.

- [00:52:44](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3164) Principle 2: state models clarify which changes are possible,

- [00:52:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3168) what triggers them, and which facts are actually known.

- [00:52:52](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3172) Principle 3: model identity and the meaning of a fact before deciding where to store it.

- [00:53:00](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3180) Principle 4: a decision table makes

- [00:53:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3183) combinations and missing cases easier to inspect.

- [00:53:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3187) Principle 5: an interaction history explains why

- [00:53:11](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3191) similar symptoms can require different recovery actions.

- [00:53:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3195) Principle 6: an interface should communicate what is known and what the user can do next.

- [00:53:22](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3202) Principle 7: models are useful when their claims can

- [00:53:26](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3206) be checked against one another and against intended behavior.

- [00:53:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3210) Principle 8: a useful abstraction preserves what matters

- [00:53:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3213) for its question and makes its omissions intentional.

- [00:53:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3216) Now the 6 checks; decide your answer before I open each one.

- [00:53:42](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3222) Question 1: a response times out after persistence.

- [00:53:45](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3225) Is the booking necessarily absent? I click it.

- [00:53:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3228) No: the requester may not know the result even though the booking exists.

- [00:53:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3233) Question 2: why reference a room identifier instead of copying its current name everywhere?

- [00:53:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3239) Click. Identity stays stable when the displayed name

- [00:54:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3243) changes, and historical snapshots are modeled on purpose.

- [00:54:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3247) Question 3: which model best exposes combinations of ownership and status?

- [00:54:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3252) Click. A decision table, exactly like the R-03 rows of scene 4.

- [00:54:18](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3258) Question 4: how can a diagram be tested before code exists?

- [00:54:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3263) Click. Walk concrete examples through it, and compare the outcomes with

- [00:54:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3267) the requirements and with complementary models, as in scene 7.

- [00:54:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3272) Question 5: can a valid state diagram

- [00:54:35](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3275) establish that pending notification work will eventually complete?

- [00:54:38](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3278) Click. No.

- [00:54:39](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3279) Permitted states and transitions do not establish

- [00:54:42](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3282) the scheduling and recovery needed for progress.

- [00:54:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3286) Question 6 leaves room booking behind.

- [00:54:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3288) A mobile note says saved on this device while synchronization is pending.

- [00:54:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3293) Does that contradict the cloud copy being older?

- [00:54:56](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3296) Think for a moment before I open it.

- [00:55:01](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3301) Click. No.

- [00:55:02](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3302) Local persistence and remote synchronization are separate states.

- [00:55:06](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3306) Model both, and make the message say which promise has been met.

- [00:55:12](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3312) Pending synchronization still needs a defined completion or recovery path.

- [00:55:17](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3317) Notice that this is the whole lecture in 1 example: the screen's promise

- [00:55:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3323) and the stored state are 2 models, and each needs its own honest message.

- [00:55:28](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3328) The principles carry across domains.

- [00:55:30](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3330) Now the last page.

- [00:55:33](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3333) What carries forward, and where to read more.

- [00:55:37](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3337) Week 4 starts from this question: who turns these models into

- [00:55:41](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3341) working behavior, in what order, and where does that work wait?

- [00:55:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3346) 3 things are carried forward.

- [00:55:48](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3348) First, the requirement identifiers R-01 to R-05 and Q-01, unchanged.

- [00:55:53](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3353) Second, 5 models of B-001: the journey, the

- [00:55:58](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3358) states, the data model, the R-03 table and the sequences.

- [00:56:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3363) Third, the open decisions: the fairness policy, room closures until week

- [00:56:08](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3368) 14, and how an Unknown outcome gets resolved, which week 6 answers.

- [00:56:13](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3373) Open items stay visible until someone decides them.

- [00:56:17](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3377) In practice, in 2026, teams keep diagrams as text next to the code

- [00:56:24](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3384) in Mermaid or PlantUML, draw them in draw dot io, and design interface states in Figma.

- [00:56:31](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3391) The middle card lists the terms of this lecture: model, user

- [00:56:36](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3396) journey, state and event, condition, transition, safety invariant and progress property.

- [00:56:40](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3400) Each one is defined in a single sentence you can reuse.

- [00:56:46](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3406) Then entity and identifier, relationship and cardinality, referential

- [00:56:50](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3410) integrity, historical snapshot, decision table, sequence diagram and

- [00:56:54](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3414) interface state: the vocabulary of scenes 3 to 8.

- [00:56:59](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3419) On the right are the 5 sources: the Software Engineering

- [00:57:03](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3423) Body of Knowledge, the Computer Science Curricula 2023, the

- [00:57:07](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3427) C 4 model, the HTTP semantics standard, and the accessibility guidelines.

- [00:57:14](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3434) So that is lecture 3.

- [00:57:15](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3435) Before you draw anything, ask which question the drawing must answer.

- [00:57:19](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3439) Follow the person first, keep the screen's promise apart

- [00:57:23](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3443) from the stored state, and give every fact 1 home.

- [00:57:27](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3447) Write rules as rows when combinations matter, walk 1 example through every

- [00:57:32](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3452) model, and let each view leave out what its question does not need.

- [00:57:38](https://www.youtube.com/watch?v=0zo0d3tKydU&t=3458) Thank you for watching, and I will see you in week 4.
