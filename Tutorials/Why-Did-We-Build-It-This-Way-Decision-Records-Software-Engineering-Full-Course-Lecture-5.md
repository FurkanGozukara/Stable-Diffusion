# Why Did We Build It This Way? Decision Records | Software Engineering Full Course, Lecture 5

## Full tutorial link > https://www.youtube.com/watch?v=V26mbmrSUCk

[![Why Did We Build It This Way? Decision Records | Software Engineering Full Course, Lecture 5](https://i.ytimg.com/vi_webp/V26mbmrSUCk/maxresdefault.webp)](https://www.youtube.com/watch?v=V26mbmrSUCk "Why Did We Build It This Way? Decision Records | Software Engineering Full Course, Lecture 5")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Why-Did-We-Build-It-This-Way-Decision-Records-Software-Engineering-Full-Course-Lecture-5.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Why-Did-We-Build-It-This-Way-Decision-Records-Software-Engineering-Full-Course-Lecture-5.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Lecture 5 of the Software Engineering course. During exam weeks the longest booking in Campus Rooms, a fictional room-booking service, drops from 120 to 90 minutes. A text search finds two copies of that rule, misses a third written as 2 * 60 and flags a 120 that means something else. Eight interactive scenes answer one question: when one requirement changes, which parts should need to change?

Links:

SECourses Patreon: [ [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses) ]

SECourses Discord: [ [https://discord.com/servers/software-engineering-courses-secourses-772774097734074388](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) ]

You will see coupling and cohesion at work, why the server and not the browser decides, why an interface contract includes failure behavior, how dependency direction and an adapter protect a rule, how small steps and boundary examples keep a refactoring safe, when abstraction pays, and how a decision record explains why.

Topics: coupling, cohesion, contracts and preconditions, at-least-once delivery, result types, adapters, regression checks, build, reuse or buy, and decision records.

Jump to any scene, the results page, the principles or the sources.

Chapters:

[00:00:00](https://youtu.be/V26mbmrSUCk?t=0) Exam weeks need shorter bookings: how many places must change?

[00:00:35](https://youtu.be/V26mbmrSUCk?t=35) Campus Rooms today: one code line from each component

[00:01:09](https://youtu.be/V26mbmrSUCk?t=69) Search the code for 120 and inspect the matches

[00:01:31](https://youtu.be/V26mbmrSUCk?t=91) Which lines hold the rule? Two copies found, one missed

[00:02:13](https://youtu.be/V26mbmrSUCk?t=133) The week's question and the four questions this lecture answers

[00:03:14](https://youtu.be/V26mbmrSUCk?t=194) From week 4 to the seven components of Campus Rooms

[00:03:55](https://youtu.be/V26mbmrSUCk?t=235) Rules R-01 to R-04 that this lecture uses

[00:04:27](https://youtu.be/V26mbmrSUCk?t=267) Five learning outcomes for modularity and the cost of change

[00:05:10](https://youtu.be/V26mbmrSUCk?t=310) Scene 1: identical screens, which design changes more easily?

[00:05:54](https://youtu.be/V26mbmrSUCk?t=354) A screen shows behavior; the maps show the structure

[00:06:50](https://youtu.be/V26mbmrSUCk?t=410) One successful request traced through Design A and Design B

[00:07:53](https://youtu.be/V26mbmrSUCk?t=473) Limit 90 preset: which boxes must you edit?

[00:08:50](https://youtu.be/V26mbmrSUCk?t=530) Scene 2: who holds the duration rule in Design A

[00:09:56](https://youtu.be/V26mbmrSUCk?t=596) Apply the change: three edits now, three again later

[00:10:37](https://youtu.be/V26mbmrSUCk?t=637) A missed copy: one 100-minute booking gets two answers

[00:11:07](https://youtu.be/V26mbmrSUCk?t=667) Coupling: one copied decision ties three components together

[00:11:25](https://youtu.be/V26mbmrSUCk?t=685) Design B: the rule lives once, in Policy

[00:11:52](https://youtu.be/V26mbmrSUCk?t=712) Why the browser must never decide a server-side rule

[00:12:55](https://youtu.be/V26mbmrSUCk?t=775) Design A versus Design B: edits, rechecks and inconsistency

[00:13:37](https://youtu.be/V26mbmrSUCk?t=817) Replacing the email provider: where Policy does not help

[00:15:05](https://youtu.be/V26mbmrSUCk?t=905) Scene 3: a Utilities module with five unrelated tasks

[00:16:01](https://youtu.be/V26mbmrSUCk?t=961) Find each task's reason to change, then regroup

[00:16:55](https://youtu.be/V26mbmrSUCk?t=1015) One booking request in three stages, effects at the edges

[00:18:12](https://youtu.be/V26mbmrSUCk?t=1092) Cohesion: what belongs together, judged by reason to change

[00:18:34](https://youtu.be/V26mbmrSUCk?t=1114) A new message format, and splitting a module too far

[00:20:06](https://youtu.be/V26mbmrSUCk?t=1206) Scene 4: same name and parameters, does Mail B fit?

[00:20:55](https://youtu.be/V26mbmrSUCk?t=1255) The Notifier contract: five promises behind one call

[00:21:46](https://youtu.be/V26mbmrSUCk?t=1306) Mail A fails a delivery and the booking stands

[00:22:30](https://youtu.be/V26mbmrSUCk?t=1350) Mail B: matching call shape, broken failure behavior

[00:24:00](https://youtu.be/V26mbmrSUCk?t=1440) Failures reported: one changed condition restores rule R-04

[00:24:50](https://youtu.be/V26mbmrSUCk?t=1490) Confirmed, Rejected or Unavailable: three kinds of booking answer

[00:25:23](https://youtu.be/V26mbmrSUCk?t=1523) Four booking requests and the answer each one gets

[00:26:25](https://youtu.be/V26mbmrSUCk?t=1585) Shape, domain rules, permission and racing requests: four separate claims

[00:27:33](https://youtu.be/V26mbmrSUCk?t=1653) Scene 5: should the booking rule know database rows?

[00:28:49](https://youtu.be/V26mbmrSUCk?t=1729) A storage change forces an edit in the booking rule

[00:29:08](https://youtu.be/V26mbmrSUCk?t=1748) BookingRecords: an interface that hands Policy plain intervals

[00:29:37](https://youtu.be/V26mbmrSUCk?t=1777) Dependency direction: source arrows up, runtime calls down

[00:30:29](https://youtu.be/V26mbmrSUCk?t=1829) A new database product: only a new adapter changes

[00:31:31](https://youtu.be/V26mbmrSUCk?t=1891) Scene 6: refactoring the duration check under six examples

[00:32:25](https://youtu.be/V26mbmrSUCk?t=1945) Small steps, each replayed against the six examples

[00:33:34](https://youtu.be/V26mbmrSUCk?t=2014) A slip: less than or equal becomes less than

[00:34:07](https://youtu.be/V26mbmrSUCk?t=2047) The 120-minute boundary example catches the slip

[00:35:11](https://youtu.be/V26mbmrSUCk?t=2111) Scene 7: duplicated checks, one function or a rule framework

[00:36:42](https://youtu.be/V26mbmrSUCk?t=2202) Two rules and a small team: one function fits

[00:37:03](https://youtu.be/V26mbmrSUCk?t=2223) Many independent policies: when more structure pays for itself

[00:38:21](https://youtu.be/V26mbmrSUCk?t=2301) Build, reuse or buy: the Notifier contract checks remain

[00:39:58](https://youtu.be/V26mbmrSUCk?t=2398) Scene 8: a maintainer needs the reason behind the diagram

[00:40:31](https://youtu.be/V26mbmrSUCk?t=2431) Decision record DR-001: context, alternatives, decision, consequences

[00:42:23](https://youtu.be/V26mbmrSUCk?t=2543) Several campuses: the record's own revisit trigger fires

[00:43:39](https://youtu.be/V26mbmrSUCk?t=2619) Eight principles of modularity, one from each scene

[00:44:27](https://youtu.be/V26mbmrSUCk?t=2667) Six checks to answer, including a transfer to images

[00:46:37](https://youtu.be/V26mbmrSUCk?t=2797) What carries forward into week 6, terms and sources

[00:47:57](https://youtu.be/V26mbmrSUCk?t=2877) Recap: six short rules for designing for change

Every name, number and booking is a teaching example from the fictional Campus Rooms service; the code is Python-like pseudocode.

Music in the silences: Infinity, Serene View, Romantic 05, Relaxation 04, Digital Clouds, Your Breath, Stylz, Down the River, Vastness, Opalescent, Curiosity, Pilates and Yoga (Mixkit, Stock Music Free License); page-change sweeps from Mixkit.

Questions and updates: the links above, the pinned comment and the comments below. Thank you for watching.



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=V26mbmrSUCk&t=0) Greetings everyone. This is week 5 of the Software&nbsp; Engineering course, and today's question is right&nbsp;&nbsp;

- [00:00:06](https://www.youtube.com/watch?v=V26mbmrSUCk&t=6) in the title: exam weeks need shorter bookings, so&nbsp; how many places in the code must change? Here is&nbsp;&nbsp;

- [00:00:13](https://www.youtube.com/watch?v=V26mbmrSUCk&t=13) the request in detail. During exam weeks, the&nbsp; longest booking drops from 120 to 90 minutes.&nbsp;&nbsp;

- [00:00:20](https://www.youtube.com/watch?v=V26mbmrSUCk&t=20) That is rule R-02, as a temporary variant. The&nbsp; shortest booking stays 30 minutes, and after&nbsp;&nbsp;

- [00:00:27](https://www.youtube.com/watch?v=V26mbmrSUCk&t=27) the exam weeks the limit goes back to 120. So&nbsp; the change has to go in now, and come out again&nbsp;&nbsp;

- [00:00:34](https://www.youtube.com/watch?v=V26mbmrSUCk&t=34) later. Before editing anything, you need to know&nbsp; where this rule lives. Here is Campus Rooms today:&nbsp;&nbsp;

- [00:00:40](https://www.youtube.com/watch?v=V26mbmrSUCk&t=40) 1 line of code from each of its 6 components,&nbsp; written as Python-like pseudocode. The Browser&nbsp;&nbsp;

- [00:00:47](https://www.youtube.com/watch?v=V26mbmrSUCk&t=47) UI shows an error above 120 minutes. The Booking&nbsp; Handler rejects anything under 30 or over 120. And&nbsp;&nbsp;

- [00:00:55](https://www.youtube.com/watch?v=V26mbmrSUCk&t=55) the Reminder schedules a reminder for a booking&nbsp; it considers valid. Notification has a retry&nbsp;&nbsp;

- [00:01:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=62) timer. Room Catalog lists the 2 rooms, C101 and&nbsp; C202. And Storage loads the bookings of a room.&nbsp;&nbsp;

- [00:01:09](https://www.youtube.com/watch?v=V26mbmrSUCk&t=69) The quickest way most people look for a rule is&nbsp; a text search. So let's search the code for 120,&nbsp;&nbsp;

- [00:01:16](https://www.youtube.com/watch?v=V26mbmrSUCk&t=76) the old limit, and see what comes back. 3 lines&nbsp; match: the Browser UI line, the Booking Handler&nbsp;&nbsp;

- [00:01:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=82) line and the Notification line. Pause for a moment&nbsp; and ask yourself: are all 3 of these the duration&nbsp;&nbsp;

- [00:01:29](https://www.youtube.com/watch?v=V26mbmrSUCk&t=89) rule? Now the real question: which lines hold&nbsp; the rule? The 2 green lines are true copies of&nbsp;&nbsp;

- [00:01:36](https://www.youtube.com/watch?v=V26mbmrSUCk&t=96) the rule, and the search found both of them. The&nbsp; Notification line is not the rule at all. Its 120&nbsp;&nbsp;

- [00:01:44](https://www.youtube.com/watch?v=V26mbmrSUCk&t=104) means seconds before an email retry. Changing&nbsp; it would break something that has nothing to do&nbsp;&nbsp;

- [00:01:49](https://www.youtube.com/watch?v=V26mbmrSUCk&t=109) with bookings. And the red line is the dangerous&nbsp; one. The Reminder holds the same rule, written as&nbsp;&nbsp;

- [00:01:56](https://www.youtube.com/watch?v=V26mbmrSUCk&t=116) 2 * 60. The search never found it, so a find and&nbsp; replace would leave it behind. The summary below&nbsp;&nbsp;

- [00:02:03](https://www.youtube.com/watch?v=V26mbmrSUCk&t=123) says it plainly: 3 copies of one rule. The search&nbsp; found 2, missed 1, and flagged 1 line that is a&nbsp;&nbsp;

- [00:02:10](https://www.youtube.com/watch?v=V26mbmrSUCk&t=130) completely different 120. That is the question&nbsp; of this week, on the right: when one requirement&nbsp;&nbsp;

- [00:02:17](https://www.youtube.com/watch?v=V26mbmrSUCk&t=137) changes, which parts should need to change? Option&nbsp; A, every component that mentions it. Option B,&nbsp;&nbsp;

- [00:02:24](https://www.youtube.com/watch?v=V26mbmrSUCk&t=144) whatever a search finds. Option C, only the part&nbsp; that owns the decision. Pause and pick one. Keep&nbsp;&nbsp;

- [00:02:30](https://www.youtube.com/watch?v=V26mbmrSUCk&t=150) your answer, because scenes 1 and 2 test it.&nbsp; Below are the four questions this lecture answers.&nbsp;&nbsp;

- [00:02:37](https://www.youtube.com/watch?v=V26mbmrSUCk&t=157) First, can two identical screens hide different&nbsp; costs of change? That is scenes 1 and 2. Second,&nbsp;&nbsp;

- [00:02:45](https://www.youtube.com/watch?v=V26mbmrSUCk&t=165) what belongs together in one module? That is scene&nbsp; 3. Third, what must a replacement keep, besides&nbsp;&nbsp;

- [00:02:50](https://www.youtube.com/watch?v=V26mbmrSUCk&t=170) its name? Scenes 4 and 5, about interfaces.&nbsp; And fourth, how do you restructure safely,&nbsp;&nbsp;

- [00:02:57](https://www.youtube.com/watch?v=V26mbmrSUCk&t=177) and how much structure is enough? That is scenes&nbsp; 6 to 8. Check out the tutorial description to see&nbsp;&nbsp;

- [00:03:03](https://www.youtube.com/watch?v=V26mbmrSUCk&t=183) the chapters. To move between pages I use the&nbsp; arrow buttons at the top right. The next page&nbsp;&nbsp;

- [00:03:09](https://www.youtube.com/watch?v=V26mbmrSUCk&t=189) connects this week to what you already know. Week&nbsp; 4 ended with 1 change to carry forward: changing&nbsp;&nbsp;

- [00:03:17](https://www.youtube.com/watch?v=V26mbmrSUCk&t=197) a booking policy without causing widespread&nbsp; edits. This week asks what such a change costs,&nbsp;&nbsp;

- [00:03:23](https://www.youtube.com/watch?v=V26mbmrSUCk&t=203) and where it lands in the code. Here are the&nbsp; components of Campus Rooms. The Browser UI is the&nbsp;&nbsp;

- [00:03:30](https://www.youtube.com/watch?v=V26mbmrSUCk&t=210) booking screens people use. The Booking Handler&nbsp; receives a booking request and answers it. The&nbsp;&nbsp;

- [00:03:36](https://www.youtube.com/watch?v=V26mbmrSUCk&t=216) Reminder reminds people before a booking starts.&nbsp; Policy owns the booking rules, but only in 1 of&nbsp;&nbsp;

- [00:03:42](https://www.youtube.com/watch?v=V26mbmrSUCk&t=222) the 2 designs you are about to meet. Room Catalog&nbsp; knows the rooms, C101 and C202. Notification sends&nbsp;&nbsp;

- [00:03:50](https://www.youtube.com/watch?v=V26mbmrSUCk&t=230) confirmations and other messages, and Storage&nbsp; keeps the bookings. 4 rules come back from earlier&nbsp;&nbsp;

- [00:03:56](https://www.youtube.com/watch?v=V26mbmrSUCk&t=236) weeks. R-01: no overlapping confirmed bookings&nbsp; in the same room, and 10:00 to 11:00 and 11:00&nbsp;&nbsp;

- [00:04:03](https://www.youtube.com/watch?v=V26mbmrSUCk&t=243) to 12:00 only touch, so they do not overlap. R-02:&nbsp; a booking lasts 30 to 120 minutes, both included.&nbsp;&nbsp;

- [00:04:11](https://www.youtube.com/watch?v=V26mbmrSUCk&t=251) That is the rule this whole lecture follows.&nbsp; R-03: you may cancel your own booking before&nbsp;&nbsp;

- [00:04:17](https://www.youtube.com/watch?v=V26mbmrSUCk&t=257) it starts. And R-04: a failed notification never&nbsp; undoes a confirmed booking. Keep that one in mind,&nbsp;&nbsp;

- [00:04:24](https://www.youtube.com/watch?v=V26mbmrSUCk&t=264) because scene 4 puts it to a hard test. By the&nbsp; end of this lecture you can do 5 things. First,&nbsp;&nbsp;

- [00:04:30](https://www.youtube.com/watch?v=V26mbmrSUCk&t=270) trace the effect of a requirement change through&nbsp; dependent components. Second, distinguish cohesive&nbsp;&nbsp;

- [00:04:38](https://www.youtube.com/watch?v=V26mbmrSUCk&t=278) responsibility from unrelated work gathered in&nbsp; one module. Third, explain how an interface can&nbsp;&nbsp;

- [00:04:44](https://www.youtube.com/watch?v=V26mbmrSUCk&t=284) hide changeable implementation details. Fourth,&nbsp; recognize why fewer lines or more abstractions do&nbsp;&nbsp;

- [00:04:51](https://www.youtube.com/watch?v=V26mbmrSUCk&t=291) not automatically mean better design. And fifth,&nbsp; explain refactoring as structural change with&nbsp;&nbsp;

- [00:04:57](https://www.youtube.com/watch?v=V26mbmrSUCk&t=297) preserved intended behavior. You will see each&nbsp; mechanism at work before it gets its formal name,&nbsp;&nbsp;

- [00:05:04](https://www.youtube.com/watch?v=V26mbmrSUCk&t=304) starting with 2 screens that look exactly alike.&nbsp; So let's open the first scene. Scene 1 asks: two&nbsp;&nbsp;

- [00:05:12](https://www.youtube.com/watch?v=V26mbmrSUCk&t=312) identical screens, which design is easier to&nbsp; change? Here are 2 versions of Campus Rooms,&nbsp;&nbsp;

- [00:05:17](https://www.youtube.com/watch?v=V26mbmrSUCk&t=317) Design A on the left and Design B on the&nbsp; right. In both, Ari books room C101 from&nbsp;&nbsp;

- [00:05:23](https://www.youtube.com/watch?v=V26mbmrSUCk&t=323) 10:00 to 11:00. Both screens show the same&nbsp; answer: confirmed, booking B-001, 60 minutes.&nbsp;&nbsp;

- [00:05:31](https://www.youtube.com/watch?v=V26mbmrSUCk&t=331) Below each screen is the structure behind it,&nbsp; still covered. Before anything is revealed,&nbsp;&nbsp;

- [00:05:36](https://www.youtube.com/watch?v=V26mbmrSUCk&t=336) decide: can you tell from the screens which&nbsp; design will be easier to change? Option A, no,&nbsp;&nbsp;

- [00:05:43](https://www.youtube.com/watch?v=V26mbmrSUCk&t=343) a screen shows behavior, not structure. Option&nbsp; B, yes, the cleaner looking screen. Option C,&nbsp;&nbsp;

- [00:05:49](https://www.youtube.com/watch?v=V26mbmrSUCk&t=349) yes, whichever one answered first. Take a&nbsp; moment before the reveal. The answer is A:&nbsp;&nbsp;

- [00:05:55](https://www.youtube.com/watch?v=V26mbmrSUCk&t=355) a screen shows what the software does, not how&nbsp; its parts are arranged. To see the arrangement,&nbsp;&nbsp;

- [00:06:01](https://www.youtube.com/watch?v=V26mbmrSUCk&t=361) the Step button at the top right moves a scene&nbsp; forward, one state at a time. Now the covers are&nbsp;&nbsp;

- [00:06:07](https://www.youtube.com/watch?v=V26mbmrSUCk&t=367) gone. In Design A, 3 components carry the duration&nbsp; rule themselves: the Browser UI, the Booking&nbsp;&nbsp;

- [00:06:13](https://www.youtube.com/watch?v=V26mbmrSUCk&t=373) Handler and the Reminder. Each box says duration&nbsp; rule, 120. In Design B, the rule lives in 1 Policy&nbsp;&nbsp;

- [00:06:21](https://www.youtube.com/watch?v=V26mbmrSUCk&t=381) component. The Browser UI only reads the limits&nbsp; from Policy, so it can warn people early, but it&nbsp;&nbsp;

- [00:06:27](https://www.youtube.com/watch?v=V26mbmrSUCk&t=387) never decides. Every arrow means depends on: it&nbsp; starts at the component that needs another one.&nbsp;&nbsp;

- [00:06:33](https://www.youtube.com/watch?v=V26mbmrSUCk&t=393) In both designs, the Booking Handler depends on&nbsp; Room Catalog, Storage and Notification. Why does&nbsp;&nbsp;

- [00:06:40](https://www.youtube.com/watch?v=V26mbmrSUCk&t=400) that matter? If something you depend on changes,&nbsp; you may have to change too. So these arrows show&nbsp;&nbsp;

- [00:06:46](https://www.youtube.com/watch?v=V26mbmrSUCk&t=406) the paths along which a change can travel. Now&nbsp; let's follow one successful request through&nbsp;&nbsp;

- [00:06:52](https://www.youtube.com/watch?v=V26mbmrSUCk&t=412) Design A. The Browser UI checks the duration,&nbsp; and then the Booking Handler checks it again.&nbsp;&nbsp;

- [00:06:59](https://www.youtube.com/watch?v=V26mbmrSUCk&t=419) Then the handler asks Room Catalog whether C101&nbsp; exists, asks Storage whether the time is free,&nbsp;&nbsp;

- [00:07:05](https://www.youtube.com/watch?v=V26mbmrSUCk&t=425) and finally Notification sends the confirmation.&nbsp; The same request through Design B. The Browser&nbsp;&nbsp;

- [00:07:11](https://www.youtube.com/watch?v=V26mbmrSUCk&t=431) UI asks Policy for the limits, and then the&nbsp; Booking Handler asks Policy for the decision.&nbsp;&nbsp;

- [00:07:18](https://www.youtube.com/watch?v=V26mbmrSUCk&t=438) After that come the same 3 calls: Room Catalog,&nbsp; Storage and Notification. And the screen shows&nbsp;&nbsp;

- [00:07:24](https://www.youtube.com/watch?v=V26mbmrSUCk&t=444) exactly the same confirmation as Design A. So&nbsp; here is the point of this scene: same behavior,&nbsp;&nbsp;

- [00:07:31](https://www.youtube.com/watch?v=V26mbmrSUCk&t=451) different structure. Nothing on the screen tells&nbsp; them apart. A user, a tester clicking through the&nbsp;&nbsp;

- [00:07:36](https://www.youtube.com/watch?v=V26mbmrSUCk&t=456) screens, even a demo, all see the same thing.&nbsp; Here is the principle behind this scene: design&nbsp;&nbsp;

- [00:07:42](https://www.youtube.com/watch?v=V26mbmrSUCk&t=462) quality becomes visible through the changes and&nbsp; failures a structure must accommodate. In short,&nbsp;&nbsp;

- [00:07:49](https://www.youtube.com/watch?v=V26mbmrSUCk&t=469) structure shows itself when something changes. So&nbsp; let's change something. The condition presets on&nbsp;&nbsp;

- [00:07:55](https://www.youtube.com/watch?v=V26mbmrSUCk&t=475) the right select a variant of a scene. This&nbsp; one is called Limit 90. The longest booking&nbsp;&nbsp;

- [00:08:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=482) drops from 120 to 90 minutes. The screens and&nbsp; Ari's goal stay exactly the same. Only the rule&nbsp;&nbsp;

- [00:08:08](https://www.youtube.com/watch?v=V26mbmrSUCk&t=488) changes. Before anything is marked, which boxes&nbsp; would you have to edit in each design? Option A,&nbsp;&nbsp;

- [00:08:15](https://www.youtube.com/watch?v=V26mbmrSUCk&t=495) one box in each design. Option B, every box&nbsp; in both designs. Option C, three in Design&nbsp;&nbsp;

- [00:08:21](https://www.youtube.com/watch?v=V26mbmrSUCk&t=501) A and one in Design B. Pause here, and count the&nbsp; boxes in each map yourself. Let's mark the boxes&nbsp;&nbsp;

- [00:08:29](https://www.youtube.com/watch?v=V26mbmrSUCk&t=509) that decide the duration. 3 in Design A: Browser&nbsp; UI, Booking Handler and Reminder. 1 in Design B:&nbsp;&nbsp;

- [00:08:35](https://www.youtube.com/watch?v=V26mbmrSUCk&t=515) Policy. So option C was right. Scene 2 follows&nbsp; this change into every one of those boxes,&nbsp;&nbsp;

- [00:08:41](https://www.youtube.com/watch?v=V26mbmrSUCk&t=521) and into their checks. The screens still look the&nbsp; same; the cost of the change does not. Let's watch&nbsp;&nbsp;

- [00:08:47](https://www.youtube.com/watch?v=V26mbmrSUCk&t=527) that cost appear. Scene 2: watch a single policy&nbsp; change spread. The change is the same: the longest&nbsp;&nbsp;

- [00:08:55](https://www.youtube.com/watch?v=V26mbmrSUCk&t=535) booking drops from 120 to 90 minutes, rule R-02.&nbsp; On the left is Design A as a dependency graph:&nbsp;&nbsp;

- [00:09:03](https://www.youtube.com/watch?v=V26mbmrSUCk&t=543) 7 components, and every arrow points from a&nbsp; component to the one it depends on. First,&nbsp;&nbsp;

- [00:09:09](https://www.youtube.com/watch?v=V26mbmrSUCk&t=549) predict. Which components hold that rule, and&nbsp; which only use its result? Option A, only the&nbsp;&nbsp;

- [00:09:15](https://www.youtube.com/watch?v=V26mbmrSUCk&t=555) Booking Handler. Option B, every component that&nbsp; checks a duration itself. Option C, Storage,&nbsp;&nbsp;

- [00:09:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=562) because it keeps the bookings. Pause and decide,&nbsp; because the difference between holding a rule and&nbsp;&nbsp;

- [00:09:27](https://www.youtube.com/watch?v=V26mbmrSUCk&t=567) using its result is what this whole scene is&nbsp; about. Here is where the rule lives. Inside&nbsp;&nbsp;

- [00:09:34](https://www.youtube.com/watch?v=V26mbmrSUCk&t=574) 3 boxes, a violet line says rule, at most 120&nbsp; minutes: Browser UI, Booking Handler and Reminder&nbsp;&nbsp;

- [00:09:41](https://www.youtube.com/watch?v=V26mbmrSUCk&t=581) each check it themselves. Storage never decides a&nbsp; duration. It stores whatever the handler sends it,&nbsp;&nbsp;

- [00:09:48](https://www.youtube.com/watch?v=V26mbmrSUCk&t=588) so it only uses the result of the rule. The&nbsp; same is true for Room Catalog and Notification.&nbsp;&nbsp;

- [00:09:54](https://www.youtube.com/watch?v=V26mbmrSUCk&t=594) That makes B the right answer. When the change is&nbsp; applied, every copy must be edited, so all 3 boxes&nbsp;&nbsp;

- [00:10:01](https://www.youtube.com/watch?v=V26mbmrSUCk&t=601) turn yellow and say at most 90. That is 3 edit&nbsp; locations for one rule. And remember, this variant&nbsp;&nbsp;

- [00:10:08](https://www.youtube.com/watch?v=V26mbmrSUCk&t=608) is temporary. After the exam weeks, the same 3&nbsp; boxes must be edited again, back to 120. Design A&nbsp;&nbsp;

- [00:10:14](https://www.youtube.com/watch?v=V26mbmrSUCk&t=614) pays for this change twice. Each edited component&nbsp; has its own checks, and each set must run again.&nbsp;&nbsp;

- [00:10:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=622) The small blue pills mark them: Browser UI checks,&nbsp; Booking Handler checks and Reminder checks. And&nbsp;&nbsp;

- [00:10:28](https://www.youtube.com/watch?v=V26mbmrSUCk&t=628) these 3 stay untouched: Room Catalog, Notification&nbsp; and Storage. They never held the rule, so this&nbsp;&nbsp;

- [00:10:35](https://www.youtube.com/watch?v=V26mbmrSUCk&t=635) change does not reach them. In real projects, one&nbsp; copy often gets missed, just as the search missed&nbsp;&nbsp;

- [00:10:41](https://www.youtube.com/watch?v=V26mbmrSUCk&t=641) it in the opening. Here the Reminder still says&nbsp; at most 120. So a 100-minute booking now gets 2&nbsp;&nbsp;

- [00:10:49](https://www.youtube.com/watch?v=V26mbmrSUCk&t=649) different answers. The Booking Handler rejects&nbsp; it, while the Reminder still treats it as valid.&nbsp;&nbsp;

- [00:10:56](https://www.youtube.com/watch?v=V26mbmrSUCk&t=656) The red callout states it plainly: inconsistent&nbsp; decisions inside one service. A person can get one&nbsp;&nbsp;

- [00:11:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=662) answer from the booking screen and a different&nbsp; one from a reminder. 1 copied decision ties 3&nbsp;&nbsp;

- [00:11:08](https://www.youtube.com/watch?v=V26mbmrSUCk&t=668) components together, so every change to the rule&nbsp; must reach all of them. That tie has a name:&nbsp;&nbsp;

- [00:11:14](https://www.youtube.com/watch?v=V26mbmrSUCk&t=674) coupling. Coupling is not bad by itself. Every&nbsp; useful system needs dependencies; the question is&nbsp;&nbsp;

- [00:11:21](https://www.youtube.com/watch?v=V26mbmrSUCk&t=681) which ones, and on what. So let's switch to Design&nbsp; B. Same components, same change, plus 1 more box:&nbsp;&nbsp;

- [00:11:28](https://www.youtube.com/watch?v=V26mbmrSUCk&t=688) Policy. Predict again: which components must&nbsp; change now? Option A, only Policy. Option B,&nbsp;&nbsp;

- [00:11:35](https://www.youtube.com/watch?v=V26mbmrSUCk&t=695) Policy and every component that uses it. Option&nbsp; C, all seven, as in Design A. Pause, and look&nbsp;&nbsp;

- [00:11:40](https://www.youtube.com/watch?v=V26mbmrSUCk&t=700) at the arrows that point into Policy. The rule&nbsp; now lives once, in Policy. The Booking Handler&nbsp;&nbsp;

- [00:11:47](https://www.youtube.com/watch?v=V26mbmrSUCk&t=707) and the Reminder ask Policy, and their arrows into&nbsp; it light up. The Browser UI also reads the limits&nbsp;&nbsp;

- [00:11:54](https://www.youtube.com/watch?v=V26mbmrSUCk&t=714) from Policy, but only to warn people early, while&nbsp; they choose a time. It never makes the decision;&nbsp;&nbsp;

- [00:12:00](https://www.youtube.com/watch?v=V26mbmrSUCk&t=720) the handler does, by asking Policy. This detail&nbsp; matters. A check in the browser improves feedback,&nbsp;&nbsp;

- [00:12:07](https://www.youtube.com/watch?v=V26mbmrSUCk&t=727) but anyone can send a request without that&nbsp; screen, so the browser must never be the&nbsp;&nbsp;

- [00:12:12](https://www.youtube.com/watch?v=V26mbmrSUCk&t=732) authority for a server-side rule. With the same&nbsp; change applied, only 1 box turns yellow: Policy,&nbsp;&nbsp;

- [00:12:18](https://www.youtube.com/watch?v=V26mbmrSUCk&t=738) which now says at most 90, so the answer is A. 1&nbsp; edit location instead of 3, and 1 edit back after&nbsp;&nbsp;

- [00:12:25](https://www.youtube.com/watch?v=V26mbmrSUCk&t=745) the exam weeks. But the checks do not vanish.&nbsp; Policy checks run again, the Booking Handler&nbsp;&nbsp;

- [00:12:31](https://www.youtube.com/watch?v=V26mbmrSUCk&t=751) integration check runs again, and the Browser&nbsp; UI limit display is checked too. So one module&nbsp;&nbsp;

- [00:12:38](https://www.youtube.com/watch?v=V26mbmrSUCk&t=758) does not mean one file of evidence. The decision&nbsp; sits in one place, and its arrows tell you exactly&nbsp;&nbsp;

- [00:12:43](https://www.youtube.com/watch?v=V26mbmrSUCk&t=763) which checks to run. Untouched this time: Room&nbsp; Catalog, Notification, Storage, and the Reminder's&nbsp;&nbsp;

- [00:12:50](https://www.youtube.com/watch?v=V26mbmrSUCk&t=770) own code. The Reminder asks Policy, so its logic&nbsp; stays the same. Here is the comparison. 3 edit&nbsp;&nbsp;

- [00:12:57](https://www.youtube.com/watch?v=V26mbmrSUCk&t=777) locations against 1. 3 rechecks against 3, but&nbsp; of different kinds: 1 per copy, against the rule,&nbsp;&nbsp;

- [00:13:03](https://www.youtube.com/watch?v=V26mbmrSUCk&t=783) its use and its display. And the inconsistency&nbsp; risk: a missed copy in Design A, none in Design B,&nbsp;&nbsp;

- [00:13:11](https://www.youtube.com/watch?v=V26mbmrSUCk&t=791) because there is only 1 decision point. That also&nbsp; answers the week's question from the opening. When&nbsp;&nbsp;

- [00:13:17](https://www.youtube.com/watch?v=V26mbmrSUCk&t=797) a requirement changes, only the part that owns the&nbsp; decision should need to change: option C. A text&nbsp;&nbsp;

- [00:13:23](https://www.youtube.com/watch?v=V26mbmrSUCk&t=803) search finds words, not decisions. The principle:&nbsp; useful boundaries localize decisions while keeping&nbsp;&nbsp;

- [00:13:30](https://www.youtube.com/watch?v=V26mbmrSUCk&t=810) their dependents and evidence visible. In&nbsp; short: keep each decision in one place, and&nbsp;&nbsp;

- [00:13:35](https://www.youtube.com/watch?v=V26mbmrSUCk&t=815) its users visible. But is Design B simply better&nbsp; at everything? Let's try a different change on the&nbsp;&nbsp;

- [00:13:42](https://www.youtube.com/watch?v=V26mbmrSUCk&t=822) same 2 designs: replacing the email provider.&nbsp; The graph shows Design B, and Design A has the&nbsp;&nbsp;

- [00:13:49](https://www.youtube.com/watch?v=V26mbmrSUCk&t=829) same Notification with the same single caller.&nbsp; Which design keeps this change smaller? Option A,&nbsp;&nbsp;

- [00:13:55](https://www.youtube.com/watch?v=V26mbmrSUCk&t=835) Design B, because it has Policy. Option B, Design&nbsp; A, because it has fewer components. Option C,&nbsp;&nbsp;

- [00:14:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=842) neither: only Notification changes in both.&nbsp; Pause, and think about what Policy actually owns.&nbsp;&nbsp;

- [00:14:09](https://www.youtube.com/watch?v=V26mbmrSUCk&t=849) Must edit: only Notification, which gets its new&nbsp; email provider. Nothing else changes, and Policy&nbsp;&nbsp;

- [00:14:15](https://www.youtube.com/watch?v=V26mbmrSUCk&t=855) does not help here at all. Neither design keeps&nbsp; it smaller, so C was the answer. Check again:&nbsp;&nbsp;

- [00:14:21](https://www.youtube.com/watch?v=V26mbmrSUCk&t=861) the Notification checks, and the Booking Handler&nbsp; integration check, because the handler is the one&nbsp;&nbsp;

- [00:14:27](https://www.youtube.com/watch?v=V26mbmrSUCk&t=867) that calls Notification. Untouched: Browser UI,&nbsp; Policy, Reminder, Room Catalog and Storage. Policy&nbsp;&nbsp;

- [00:14:35](https://www.youtube.com/watch?v=V26mbmrSUCk&t=875) localizes the booking rules. It does nothing for&nbsp; an email provider, which Notification already&nbsp;&nbsp;

- [00:14:40](https://www.youtube.com/watch?v=V26mbmrSUCk&t=880) localizes in both designs. So each boundary&nbsp; localizes the decisions it was drawn around.&nbsp;&nbsp;

- [00:14:47](https://www.youtube.com/watch?v=V26mbmrSUCk&t=887) Good structure is always relative to the changes&nbsp; you expect, and a boundary drawn for one change&nbsp;&nbsp;

- [00:14:52](https://www.youtube.com/watch?v=V26mbmrSUCk&t=892) can be useless for another. That raises the&nbsp; next question: what should go together inside&nbsp;&nbsp;

- [00:14:58](https://www.youtube.com/watch?v=V26mbmrSUCk&t=898) one module in the first place? Let's look at a&nbsp; module called Utilities. Scene 3: a module called&nbsp;&nbsp;

- [00:15:06](https://www.youtube.com/watch?v=V26mbmrSUCk&t=906) Utilities. Do its contents belong together? 5&nbsp; tasks live in one file, the Utilities module,&nbsp;&nbsp;

- [00:15:12](https://www.youtube.com/watch?v=V26mbmrSUCk&t=912) and every component imports it. The 5 tasks:&nbsp; check that a booking lasts 30 to 120 minutes,&nbsp;&nbsp;

- [00:15:20](https://www.youtube.com/watch?v=V26mbmrSUCk&t=920) check that it does not overlap another booking&nbsp; in the same room, and format the confirmation&nbsp;&nbsp;

- [00:15:25](https://www.youtube.com/watch?v=V26mbmrSUCk&t=925) email. Then format dates and times for display,&nbsp; and save and load bookings. 5 useful jobs. They&nbsp;&nbsp;

- [00:15:32](https://www.youtube.com/watch?v=V26mbmrSUCk&t=932) ended up here because each one felt like a small&nbsp; helper. A name like Utilities says almost nothing&nbsp;&nbsp;

- [00:15:39](https://www.youtube.com/watch?v=V26mbmrSUCk&t=939) about what changes inside it. So which of these&nbsp; five tasks change for the same reason? Option A,&nbsp;&nbsp;

- [00:15:46](https://www.youtube.com/watch?v=V26mbmrSUCk&t=946) all five, because they share one module. Option B,&nbsp; none: smaller modules are always better. Option C,&nbsp;&nbsp;

- [00:15:52](https://www.youtube.com/watch?v=V26mbmrSUCk&t=952) the two booking checks change together, and the&nbsp; others each have their own reason. Pause and&nbsp;&nbsp;

- [00:15:58](https://www.youtube.com/watch?v=V26mbmrSUCk&t=958) group them yourself. Here is a useful test. For&nbsp; each task, ask what in the world would make you&nbsp;&nbsp;

- [00:16:05](https://www.youtube.com/watch?v=V26mbmrSUCk&t=965) edit it. That is its reason to change, and it now&nbsp; appears under each card. The duration check and&nbsp;&nbsp;

- [00:16:12](https://www.youtube.com/watch?v=V26mbmrSUCk&t=972) the overlap check both change when a booking rule&nbsp; changes. The email format changes when the message&nbsp;&nbsp;

- [00:16:18](https://www.youtube.com/watch?v=V26mbmrSUCk&t=978) wording or format changes. Date display changes&nbsp; with the display conventions, and saving bookings&nbsp;&nbsp;

- [00:16:25](https://www.youtube.com/watch?v=V26mbmrSUCk&t=985) changes when the storage technology changes. 4&nbsp; different reasons, gathered in one file. Let's&nbsp;&nbsp;

- [00:16:32](https://www.youtube.com/watch?v=V26mbmrSUCk&t=992) regroup by reason to change. The 2 booking rules&nbsp; move together into Policy, and the other 3 get&nbsp;&nbsp;

- [00:16:37](https://www.youtube.com/watch?v=V26mbmrSUCk&t=997) groups of their own: Messages, Display and Storage&nbsp; access. That is answer C. Notice that Policy is&nbsp;&nbsp;

- [00:16:44](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1004) not the smallest group. It holds 2 tasks, because&nbsp; those two really do change together. The goal is&nbsp;&nbsp;

- [00:16:51](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1011) related responsibility, not the smallest possible&nbsp; module. Grouping also shapes how code is built.&nbsp;&nbsp;

- [00:16:57](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1017) Here is one booking request as pseudocode, with&nbsp; an example: Ari books C101 from 11:00 to 12:00.&nbsp;&nbsp;

- [00:17:04](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1024) The first stage validates the input. Lines 2&nbsp; to 4 check that the request is well formed:&nbsp;&nbsp;

- [00:17:10](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1030) whole minutes, with the end later than the start.&nbsp; If the request is malformed, the function stops&nbsp;&nbsp;

- [00:17:16](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1036) right there and returns Rejected, with a reason.&nbsp; Nothing else is touched, and nothing is stored.&nbsp;&nbsp;

- [00:17:23](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1043) The second stage decides the domain outcome. Lines&nbsp; 6 to 8 apply rule R-02 and the overlap rule R-01,&nbsp;&nbsp;

- [00:17:30](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1050) and they read nothing from outside. That decision&nbsp; is pure: give it the minutes and whether there is&nbsp;&nbsp;

- [00:17:37](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1057) an overlap, and it always gives the same answer.&nbsp; That makes it easy to find, and easy to check&nbsp;&nbsp;

- [00:17:42](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1062) with examples. The third stage reports an explicit&nbsp; result on line 11: Confirmed, with the booking id.&nbsp;&nbsp;

- [00:17:50](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1070) The caller never has to guess what happened. And&nbsp; the effects stay at the edges: storage on lines 5&nbsp;&nbsp;

- [00:17:56](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1076) and 9, the clock on line 9, and the confirmation&nbsp; email on line 10. So the grouping and the&nbsp;&nbsp;

- [00:18:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1082) construction support each other. The decision is&nbsp; small, pure and easy to find, which is exactly the&nbsp;&nbsp;

- [00:18:09](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1089) point of grouping by responsibility. This idea has&nbsp; a name. Cohesion is how closely the contents of&nbsp;&nbsp;

- [00:18:16](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1096) one module belong together, judged by their reason&nbsp; to change. Utilities scored low, and Policy scores&nbsp;&nbsp;

- [00:18:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1102) high. As a principle: cohesion concerns meaningful&nbsp; related responsibility, not simply making modules&nbsp;&nbsp;

- [00:18:29](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1109) small. In short: group what changes together;&nbsp; small alone is not the goal. Let's test the&nbsp;&nbsp;

- [00:18:35](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1115) grouping with a real change. The New format preset&nbsp; adds a text message format for confirmations,&nbsp;&nbsp;

- [00:18:41](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1121) while the booking rules stay the same. Where&nbsp; does the edit land, and what comes into question?&nbsp;&nbsp;

- [00:18:47](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1127) Option A, Messages, and the Notification that uses&nbsp; it. Option B, every group. Option C, Policy too,&nbsp;&nbsp;

- [00:18:54](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1134) because confirmations are about bookings. Before&nbsp; you answer, think about who imports what, and from&nbsp;&nbsp;

- [00:19:00](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1140) which file. Before the regrouping, the edit lands&nbsp; in the one Utilities file. Every component imports&nbsp;&nbsp;

- [00:19:08](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1148) that file, so every component comes into question.&nbsp; The Browser UI, the Booking Handler, the Reminder,&nbsp;&nbsp;

- [00:19:15](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1155) Notification and Storage all depend on a file that&nbsp; just changed, even though only the email wording&nbsp;&nbsp;

- [00:19:21](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1161) moved. After the regrouping, the edit lands&nbsp; in Messages. Only Notification uses Messages,&nbsp;&nbsp;

- [00:19:27](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1167) so only Notification comes into question. Policy,&nbsp; Display and Storage access stay untouched. So A&nbsp;&nbsp;

- [00:19:34](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1174) was the right choice. But a boundary can also&nbsp; go too far. Imagine the duration rule and the&nbsp;&nbsp;

- [00:19:39](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1179) overlap rule split into 2 modules, each with its&nbsp; own owner. Then every booking policy change has&nbsp;&nbsp;

- [00:19:46](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1186) to coordinate 2 modules, 2 sets of checks and&nbsp; 2 owners. Splitting tightly related behavior&nbsp;&nbsp;

- [00:19:53](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1193) creates work instead of saving it. So draw&nbsp; boundaries around what changes together. Next,&nbsp;&nbsp;

- [00:19:59](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1199) the boundary between components: an interface, and&nbsp; what a replacement behind it has to keep. Scene 4:&nbsp;&nbsp;

- [00:20:07](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1207) same name, same parameters. Does the replacement&nbsp; fit? Campus Rooms wants a new email provider,&nbsp;&nbsp;

- [00:20:12](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1212) and the new code keeps exactly the same call. The&nbsp; interface is Notifier.send, with a booking_id and&nbsp;&nbsp;

- [00:20:19](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1219) a recipient, and it returns a DeliveryStatus. Mail&nbsp; A is plugged in today, and Mail B waits beside it.&nbsp;&nbsp;

- [00:20:26](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1226) Rule R-04 sets the stakes: a failed notification&nbsp; never undoes a confirmed booking. The email is a&nbsp;&nbsp;

- [00:20:33](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1233) separate fact from the booking. Mail B has the&nbsp; same function name and the same parameters as&nbsp;&nbsp;

- [00:20:39](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1239) Mail A. Can it replace Mail A safely? Option A,&nbsp; yes, the name and parameters match. Option B,&nbsp;&nbsp;

- [00:20:46](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1246) only if it also behaves as promised. Option C,&nbsp; only if it sends emails faster. Pause and decide&nbsp;&nbsp;

- [00:20:51](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1251) what an interface really promises. The answer&nbsp; is B, only if it also behaves as promised,&nbsp;&nbsp;

- [00:20:58](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1258) because an interface promises more than a call&nbsp; shape. Here are its 5 promises, 1 per row, with&nbsp;&nbsp;

- [00:21:04](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1264) the formal name of each promise under it. First,&nbsp; the inputs, a precondition: a stored booking id&nbsp;&nbsp;

- [00:21:11](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1271) and a recipient. Second, the result, an outcome:&nbsp; a delivery status, either Queued or Failed. Third,&nbsp;&nbsp;

- [00:21:18](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1278) the error expectation: on failure it reports&nbsp; Failed and never raises into the caller. Fourth,&nbsp;&nbsp;

- [00:21:23](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1283) the confirmation never waits for the email, which&nbsp; is rule R-04. And fifth, delivery is at least&nbsp;&nbsp;

- [00:21:30](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1290) once, so a duplicate email is possible. These 5&nbsp; rows are the contract; the code behind them is&nbsp;&nbsp;

- [00:21:36](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1296) free to change. Mail A keeps all 5 promises: the&nbsp; same call, Queued or Failed, failures reported,&nbsp;&nbsp;

- [00:21:43](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1303) no waiting, and delivery at least once. Watch one&nbsp; delivery fail with Mail A. Storage already holds&nbsp;&nbsp;

- [00:21:49](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1309) B-001 as Confirmed. Then Mail A returns Failed.&nbsp; The handler records the email as pending, to retry&nbsp;&nbsp;

- [00:21:57](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1317) later. So Ari sees: booking confirmed, C101, 10:00&nbsp; to 11:00, and the confirmation email is pending.&nbsp;&nbsp;

- [00:22:04](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1324) Rule R-04 is kept: the booking stands, and the&nbsp; failed email stays visible and recoverable,&nbsp;&nbsp;

- [00:22:10](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1330) so it can be retried. One more promise matters&nbsp; here: delivery is at least once. A retry after&nbsp;&nbsp;

- [00:22:16](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1336) a lost answer can send the same email twice, and&nbsp; the contract says so openly. Because the contract&nbsp;&nbsp;

- [00:22:23](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1343) says it, callers can plan for it, for example by&nbsp; writing emails that still make sense when they&nbsp;&nbsp;

- [00:22:28](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1348) arrive twice. Time for the replacement. Mail B&nbsp; plugs into the same socket. When its delivery&nbsp;&nbsp;

- [00:22:35](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1355) fails, what happens? Option A, the failure&nbsp; escapes into the booking path. Option B, the&nbsp;&nbsp;

- [00:22:41](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1361) booking stays confirmed and the email is pending.&nbsp; Option C, nothing visible happens, because email&nbsp;&nbsp;

- [00:22:47](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1367) failures are silent. Picture Ari's screen before&nbsp; you answer. Call shape: fits. Mail B has the same&nbsp;&nbsp;

- [00:22:55](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1375) name and the same parameters, so the code runs and&nbsp; the call looks perfect. But 3 promises break. It&nbsp;&nbsp;

- [00:23:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1382) returns None, so the caller learns nothing. It&nbsp; raises an exception into the booking path. And&nbsp;&nbsp;

- [00:23:08](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1388) that exception stops the confirmation. Delivery&nbsp; also differs: exactly 1 attempt, with no retry.&nbsp;&nbsp;

- [00:23:14](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1394) That is not wrong in itself, but it is not what&nbsp; the callers were promised. Here is the same failed&nbsp;&nbsp;

- [00:23:21](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1401) delivery. Storage holds B-001 as Confirmed. Mail B&nbsp; raises an exception, and the handler stops before&nbsp;&nbsp;

- [00:23:27](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1407) it answers. So Ari reads: something went wrong,&nbsp; please try again. But the booking is stored. The&nbsp;&nbsp;

- [00:23:34](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1414) screen and the stored state now disagree. Here&nbsp; is what happens next. Ari tries again, and rule&nbsp;&nbsp;

- [00:23:40](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1420) R-01 rejects the request: it overlaps B-001,&nbsp; Ari's own stored booking. That was option A:&nbsp;&nbsp;

- [00:23:48](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1428) the failure escaped into the booking path. Rule&nbsp; R-04 is broken: the booking is stored, but Ari&nbsp;&nbsp;

- [00:23:53](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1433) was told it failed. A matching name and parameter&nbsp; list did not protect the user's promise. Change&nbsp;&nbsp;

- [00:24:00](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1440) only 1 condition: Mail B's failure behavior. With&nbsp; failures reported, Mail B returns Failed instead&nbsp;&nbsp;

- [00:24:06](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1446) of raising an exception. The failure row and the&nbsp; confirmation row now fit. 2 rows still differ:&nbsp;&nbsp;

- [00:24:13](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1453) it returns None on success, and it makes 1&nbsp; attempt, so the caller keeps the retry. The same&nbsp;&nbsp;

- [00:24:19](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1459) failed delivery: Mail B returns Failed, and the&nbsp; handler records the email as pending. Ari keeps&nbsp;&nbsp;

- [00:24:25](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1465) the booking, and rule R-04 holds again. So an&nbsp; interface contract includes behavior and failure&nbsp;&nbsp;

- [00:24:32](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1472) semantics, not just matching names or parameter&nbsp; lists. In short: matching names are not matching&nbsp;&nbsp;

- [00:24:38](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1478) behavior. Every value a call returns is part of a&nbsp; contract too. The next page looks at the answer to&nbsp;&nbsp;

- [00:24:45](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1485) a booking request, and the separate questions&nbsp; hidden behind it. One booking request, three&nbsp;&nbsp;

- [00:24:52](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1492) kinds of answer. The booking function returns&nbsp; Confirmed, Rejected or Unavailable, and each one&nbsp;&nbsp;

- [00:24:58](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1498) tells the caller something different. Confirmed&nbsp; means the booking decision was made and stored,&nbsp;&nbsp;

- [00:25:04](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1504) and it carries the booking id. Rejected means a&nbsp; domain rule said no; trying again unchanged gives&nbsp;&nbsp;

- [00:25:10](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1510) the same answer. Unavailable means the decision&nbsp; could not be made right now. Nothing was decided,&nbsp;&nbsp;

- [00:25:17](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1517) and it tells you when to try again. For the person&nbsp; waiting, that difference matters. Here are 4&nbsp;&nbsp;

- [00:25:24](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1524) requests. Before each answer appears, decide which&nbsp; of the 3 it gets. First: Ari, C101, from 11:00 to&nbsp;&nbsp;

- [00:25:31](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1531) 12:00. Let's see the answer: Confirmed. 60 minutes&nbsp; is valid, and 11:00 only touches the end of B-001,&nbsp;&nbsp;

- [00:25:40](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1540) so the two are adjacent, not overlapping. Second:&nbsp; Bo asks for C101, from 10:30 to 11:30. Rejected:&nbsp;&nbsp;

- [00:25:48](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1548) it overlaps B-001 between 10:30 and 11:00, so&nbsp; rule R-01 says no. Third: Ari asks for C202,&nbsp;&nbsp;

- [00:25:57](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1557) from 10:00 to 12:30. That is 150 minutes. Rejected&nbsp; again, this time by rule R-02, the duration limit.&nbsp;&nbsp;

- [00:26:05](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1565) Fourth: a similar request while storage is&nbsp; down. Unavailable: the stored bookings could&nbsp;&nbsp;

- [00:26:10](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1570) not be read, so no decision was made, and Ari can&nbsp; simply try again later. Rejected and Unavailable&nbsp;&nbsp;

- [00:26:17](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1577) look alike on a careless screen, but they ask&nbsp; for opposite reactions: change the request,&nbsp;&nbsp;

- [00:26:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1582) or keep it and try again. Now a deeper point.&nbsp; A value can have the right shape and still be&nbsp;&nbsp;

- [00:26:29](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1589) wrong in other ways. On the right are 4 separate&nbsp; questions you can ask about any result. First:&nbsp;&nbsp;

- [00:26:35](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1595) does the value have the right shape? The evidence&nbsp; is the type annotation, checked by a type checker.&nbsp;&nbsp;

- [00:26:41](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1601) For example, Confirmed always carries a booking&nbsp; id. Second: does the booking obey the domain&nbsp;&nbsp;

- [00:26:48](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1608) rules? That needs the policy checks for R-01&nbsp; and R-02. A well shaped request for 150 minutes&nbsp;&nbsp;

- [00:26:55](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1615) still breaks R-02. Third: may the requester&nbsp; do this? That needs a permission check, rule&nbsp;&nbsp;

- [00:27:01](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1621) R-03. Bo's well shaped request to cancel B-001&nbsp; is denied, because Bo is not the owner. Fourth:&nbsp;&nbsp;

- [00:27:09](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1629) does the decision hold when requests race?&nbsp; 2 overlapping requests can each pass a check&nbsp;&nbsp;

- [00:27:14](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1634) before either is stored. Storage must enforce&nbsp; one atomic decision, and week 6 goes into that.&nbsp;&nbsp;

- [00:27:21](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1641) So shape is one claim. Domain rules, permission&nbsp; and racing requests each need their own check,&nbsp;&nbsp;

- [00:27:27](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1647) even when the returned value looks right. Next:&nbsp; who should know about storage? Scene 5: should the&nbsp;&nbsp;

- [00:27:34](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1654) booking rule know how the database stores rows?&nbsp; The overlap rule needs the booked intervals of&nbsp;&nbsp;

- [00:27:40](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1660) a room, and it has to get them from storage.&nbsp; On the left is the source code view, where an&nbsp;&nbsp;

- [00:27:46](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1666) arrow means depends on. Right now Policy depends&nbsp; directly on the database client. And on the right&nbsp;&nbsp;

- [00:27:53](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1673) is the rule itself. It sends a query text to the&nbsp; database, then reads the start and the end of each&nbsp;&nbsp;

- [00:27:59](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1679) row by position. Should the booking rule depend&nbsp; on the database client's row shape? Option A,&nbsp;&nbsp;

- [00:28:06](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1686) yes, the rule needs the data. Option B, it does&nbsp; not matter while it works. Option C, no: it needs&nbsp;&nbsp;

- [00:28:12](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1692) intervals, not rows. Think about what the rule&nbsp; actually uses. Look at what the rule now knows:&nbsp;&nbsp;

- [00:28:20](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1700) the query text, the table and column names, and&nbsp; the position of each value in a row. None of that&nbsp;&nbsp;

- [00:28:26](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1706) is about booking, so C is the answer. Here is the&nbsp; second view, drawn separately: the runtime view,&nbsp;&nbsp;

- [00:28:32](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1712) where an arrow means calls. Policy calls the&nbsp; client, and the client calls the database.&nbsp;&nbsp;

- [00:28:39](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1719) In this design both views point the same way.&nbsp; Keep the 2 kinds of arrows apart in your head,&nbsp;&nbsp;

- [00:28:45](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1725) because in a moment they point in different&nbsp; directions. Then the storage changes: the bookings&nbsp;&nbsp;

- [00:28:51](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1731) move to a different database product. Policy must&nbsp; change, although no booking rule changed at all.&nbsp;&nbsp;

- [00:28:57](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1737) That is the cost of this dependency. A storage&nbsp; decision now forces an edit in the very place&nbsp;&nbsp;

- [00:29:03](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1743) that holds the booking rule, and every check of&nbsp; the rule runs again. So let's turn it around. In&nbsp;&nbsp;

- [00:29:10](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1750) the Interface preset, Policy depends on a small&nbsp; interface that it owns, called BookingRecords:&nbsp;&nbsp;

- [00:29:15](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1755) intervals in, nothing about rows. BookingRecords&nbsp; has 1 operation: give me the intervals of a room,&nbsp;&nbsp;

- [00:29:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1762) as start and end pairs. The overlap rule then&nbsp; loops over those pairs and nothing else. The&nbsp;&nbsp;

- [00:29:29](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1769) SQL adapter implements BookingRecords. Look&nbsp; at its arrow: in the source code, the adapter&nbsp;&nbsp;

- [00:29:34](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1774) points up to the interface. Back to the runtime&nbsp; view. At runtime the call still flows down:&nbsp;&nbsp;

- [00:29:40](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1780) Policy calls the adapter, the adapter calls the&nbsp; client, and the client calls the database. So the&nbsp;&nbsp;

- [00:29:47](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1787) source arrow and the runtime arrow now point in&nbsp; opposite directions. That is dependency direction:&nbsp;&nbsp;

- [00:29:52](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1792) who knows about whom, which is not the same as&nbsp; who calls whom. Where did the row shape go? Into&nbsp;&nbsp;

- [00:29:59](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1799) the adapter. Its code holds the query and the row&nbsp; positions, and it hands Policy plain intervals.&nbsp;&nbsp;

- [00:30:07](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1807) Keeping a changeable detail inside one part&nbsp; has a name: encapsulation. And a small part&nbsp;&nbsp;

- [00:30:13](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1813) that converts one interface into another is&nbsp; called an Adapter. The principle: depend on&nbsp;&nbsp;

- [00:30:20](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1820) the behavior a responsibility needs, and isolate&nbsp; details that change for other reasons. In short:&nbsp;&nbsp;

- [00:30:26](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1826) depend on what you need, not on how it is stored.&nbsp; Let's test it. With the interface in place,&nbsp;&nbsp;

- [00:30:32](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1832) the bookings move to a different database product.&nbsp; Which code must know now? Option A, Policy and the&nbsp;&nbsp;

- [00:30:38](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1838) adapter. Option B, only a new adapter. Option&nbsp; C, every component that books. Pause, and look&nbsp;&nbsp;

- [00:30:44](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1844) at which boxes depend on the database client. A&nbsp; new database adapter replaces the SQL adapter,&nbsp;&nbsp;

- [00:30:52](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1852) and that is the only new code, as option B said.&nbsp; Policy and BookingRecords are unchanged. But&nbsp;&nbsp;

- [00:30:58](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1858) isolating a detail does not remove the checks.&nbsp; 2 things still need verifying. First, the new&nbsp;&nbsp;

- [00:31:04](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1864) adapter returns the same intervals for the same&nbsp; stored bookings. Second, 2 overlapping requests&nbsp;&nbsp;

- [00:31:11](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1871) that race still cannot both be confirmed. The new&nbsp; storage must keep that atomic booking decision,&nbsp;&nbsp;

- [00:31:17](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1877) whatever product it is. So isolating a detail&nbsp; moves the change; it does not remove the checks.&nbsp;&nbsp;

- [00:31:24](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1884) Next, let's change the structure itself, and make&nbsp; sure the promise does not quietly change with it.&nbsp;&nbsp;

- [00:31:31](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1891) Scene 6: change the structure without quietly&nbsp; changing the promise. On the left is the code.&nbsp;&nbsp;

- [00:31:37](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1897) On the right are 6 examples whose answers are the&nbsp; promise of rule R-02. Right now there are 2 copies&nbsp;&nbsp;

- [00:31:44](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1904) of the duration check. The Booking Handler has&nbsp; can_book, and the Reminder has worth_reminding,&nbsp;&nbsp;

- [00:31:50](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1910) with its limit written as 2 * 60. The 6 examples&nbsp; are 29, 30, 60, 119, 120 and 121 minutes.&nbsp;&nbsp;

- [00:32:00](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1920) The promise for them is no, yes, yes, yes, yes,&nbsp; no. We are going to move the duration check into&nbsp;&nbsp;

- [00:32:07](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1927) one policy function. Should any of the six answers&nbsp; change? Option A, no, the answers are the promise.&nbsp;&nbsp;

- [00:32:14](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1934) Option B, yes, cleaner code gives better answers.&nbsp; Option C, only the two boundary answers. Take a&nbsp;&nbsp;

- [00:32:20](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1940) moment: this answer is the heart of refactoring.&nbsp; First we replay the 6 examples on the code as it&nbsp;&nbsp;

- [00:32:27](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1947) is. Every answer matches the promise, and the step&nbsp; log records it: 6 of 6. Step 1: extract a function&nbsp;&nbsp;

- [00:32:35](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1955) called duration_ok, which takes the minutes, and&nbsp; let can_book call it. The new lines are marked&nbsp;&nbsp;

- [00:32:41](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1961) green. Replay: the same 6 answers, and the log&nbsp; adds a second line, 6 of 6. The structure changed,&nbsp;&nbsp;

- [00:32:48](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1968) and the behavior you can observe did not. That&nbsp; is answer A: the answers are the promise. Step 1,&nbsp;&nbsp;

- [00:32:54](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1974) finished: the Reminder calls duration_ok too, and&nbsp; the copy written 2 * 60 is gone. Replay once more:&nbsp;&nbsp;

- [00:33:01](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1981) still 6 of 6. Notice how small each step was.&nbsp; If an answer had changed, you would know exactly&nbsp;&nbsp;

- [00:33:08](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1988) which small edit caused it, because the log shows&nbsp; the replay after every one. This is refactoring:&nbsp;&nbsp;

- [00:33:14](https://www.youtube.com/watch?v=V26mbmrSUCk&t=1994) the structure changed, and the observable answers&nbsp; did not. Editors like VS VS Code and IntelliJ&nbsp;&nbsp;

- [00:33:20](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2000) IDEA can extract a function like this for you.&nbsp; Even with a tool, the 6 examples still run after&nbsp;&nbsp;

- [00:33:27](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2007) each step: the tool performs the edit, and the&nbsp; examples confirm that the promise survived it.&nbsp;&nbsp;

- [00:33:33](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2013) Real refactoring is rarely that clean. The preset&nbsp; called A slip starts from the code after step 1,&nbsp;&nbsp;

- [00:33:39](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2019) and one small edit is coming. One step retypes&nbsp; the bound as minutes less than 120. Which example&nbsp;&nbsp;

- [00:33:47](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2027) catches it? Option A, 29. Option B, 120. Option C,&nbsp; none of them. Pause, and look at the 6 examples:&nbsp;&nbsp;

- [00:33:55](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2035) which one sits exactly on the bound? Step 2:&nbsp; less than or equal became less than. It looks&nbsp;&nbsp;

- [00:34:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2042) like tidying, and the changed line is marked red&nbsp; in the code. Replay. 120 minutes now answers no,&nbsp;&nbsp;

- [00:34:10](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2050) but the promise says yes. The boundary example&nbsp; catches the slip, so B was right, and the step log&nbsp;&nbsp;

- [00:34:15](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2055) shows 5 of 6. Every other example still passes. A&nbsp; set of checks without 120 would have missed this&nbsp;&nbsp;

- [00:34:24](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2064) completely. That is why examples on the boundary&nbsp; are worth more than many in the middle. Step 3&nbsp;&nbsp;

- [00:34:31](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2071) restores less than or equal. Replay: all 6&nbsp; answers match again, and the log ends with&nbsp;&nbsp;

- [00:34:36](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2076) 6 of 6. The boundary example caught the slip.&nbsp; Checks give you evidence at the points you chose,&nbsp;&nbsp;

- [00:34:42](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2082) so put them where mistakes are likely to live: on&nbsp; the edges. That gives the principle: refactoring&nbsp;&nbsp;

- [00:34:50](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2090) should preserve intended observable behavior;&nbsp; small steps and relevant checks make deviations&nbsp;&nbsp;

- [00:34:55](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2095) easier to locate. In short: change the structure&nbsp; in small steps, and keep the answers. So far, each&nbsp;&nbsp;

- [00:35:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2102) piece of structure we added helped. But is more&nbsp; structure always better? The next scene weighs&nbsp;&nbsp;

- [00:35:08](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2108) exactly that. Scene 7: a flexible design can still&nbsp; be the wrong amount of design. 3 ways to hold the&nbsp;&nbsp;

- [00:35:16](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2116) booking rules: duplicated checks, one small policy&nbsp; function, or a generic rule framework. The small&nbsp;&nbsp;

- [00:35:24](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2124) pictures show each one: 3 copies of the limit, 3&nbsp; callers of one function called duration_ok, and&nbsp;&nbsp;

- [00:35:30](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2130) an engine that reads its rules from a registry.&nbsp; Two clear booking rules and a small team: which&nbsp;&nbsp;

- [00:35:36](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2136) structure fits best? Option A, duplicated checks.&nbsp; Option B, one small policy function. Option C,&nbsp;&nbsp;

- [00:35:42](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2142) a generic rule framework. Think about who&nbsp; must read and change these rules. These are&nbsp;&nbsp;

- [00:35:49](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2149) judgments in words, not invented numbers. First,&nbsp; setup: duplicated checks need none, one function&nbsp;&nbsp;

- [00:35:56](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2156) needs a little, and a framework needs rule&nbsp; objects, a registry and configuration. Second,&nbsp;&nbsp;

- [00:36:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2162) understanding. One copy reads easily, but finding&nbsp; every copy does not. One function is one place to&nbsp;&nbsp;

- [00:36:08](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2168) read. A framework is indirect: you follow the&nbsp; configuration to find a rule. Third, extension,&nbsp;&nbsp;

- [00:36:14](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2174) when a rule changes: edit every copy, or edit one&nbsp; function and recheck its callers, or add a rule&nbsp;&nbsp;

- [00:36:20](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2180) as data, if the framework supports its shape.&nbsp; Fourth, debugging: when an answer is wrong,&nbsp;&nbsp;

- [00:36:25](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2185) how far do you look? Copies can disagree, as in&nbsp; scene 2. One function is one decision to inspect.&nbsp;&nbsp;

- [00:36:33](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2193) In a framework, behavior spreads across the engine&nbsp; and its configuration, so finding which rule&nbsp;&nbsp;

- [00:36:38](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2198) decided takes extra work and extra tools. So for 2&nbsp; rules and a small team, the answer is B: one small&nbsp;&nbsp;

- [00:36:45](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2205) policy function fits. The copies disagree, and&nbsp; a framework is more than these 2 rules need. The&nbsp;&nbsp;

- [00:36:52](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2212) principle: abstraction should earn its complexity&nbsp; by simplifying real responsibilities or plausible&nbsp;&nbsp;

- [00:36:58](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2218) change. In short: add structure only when it pays&nbsp; for itself. But the right amount depends on the&nbsp;&nbsp;

- [00:37:05](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2225) situation. The Many policies preset imagines&nbsp; several policies that change independently.&nbsp;&nbsp;

- [00:37:11](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2231) They are hypothetical, just for this comparison.&nbsp; A shorter limit in exam weeks, longer bookings&nbsp;&nbsp;

- [00:37:17](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2237) for project rooms, and different booking hours&nbsp; per building. Does the answer move? Option A,&nbsp;&nbsp;

- [00:37:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2242) it can: look at the evidence first. Option B,&nbsp; no, the small function still wins. Option C,&nbsp;&nbsp;

- [00:37:29](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2249) yes: always build the framework. Decide before the&nbsp; table judges the 3 structures again. The same 3&nbsp;&nbsp;

- [00:37:37](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2257) structures, judged again. Copies now multiply with&nbsp; every policy, and the single function grows long&nbsp;&nbsp;

- [00:37:44](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2264) branches that start to interact. The framework's&nbsp; setup cost stays the same, but now each rule reads&nbsp;&nbsp;

- [00:37:50](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2270) as data, and a new policy becomes a new rule entry&nbsp; instead of new code. What evidence would justify&nbsp;&nbsp;

- [00:37:57](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2277) more structure? Several policies that change often&nbsp; and independently, the same rule shape repeating,&nbsp;&nbsp;

- [00:38:03](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2283) and people outside the code who must change&nbsp; rules safely. A was the answer: more structure&nbsp;&nbsp;

- [00:38:09](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2289) can now pay for itself, given this evidence. Start&nbsp; with a small policy table read by one function,&nbsp;&nbsp;

- [00:38:15](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2295) and grow toward a framework only for rule shapes&nbsp; that really repeat. The same question appears one&nbsp;&nbsp;

- [00:38:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2302) level up, for a whole capability. Sending the&nbsp; confirmation emails could be built, reused or&nbsp;&nbsp;

- [00:38:28](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2308) bought. Which choice removes the need to check the&nbsp; Notifier contract from scene 4? Option A, buying a&nbsp;&nbsp;

- [00:38:38](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2318) managed service. Option B, reusing a maintained&nbsp; library. Option C, none of them. Take a moment.&nbsp;&nbsp;

- [00:38:45](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2325) First, integration and licensing. A small adapter&nbsp; you build is written to the Notifier contract,&nbsp;&nbsp;

- [00:38:51](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2331) and it is your own code. A maintained library&nbsp; needs an adapter that keeps the contract, and&nbsp;&nbsp;

- [00:38:57](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2337) its license must fit your use. A managed service&nbsp; brings an API that changes on its own schedule,&nbsp;&nbsp;

- [00:39:03](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2343) under a subscription. Second, support and data&nbsp; portability. Your own adapter is supported by your&nbsp;&nbsp;

- [00:39:10](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2350) team, a library by its maintainers and your team,&nbsp; and a service by the provider, under its terms.&nbsp;&nbsp;

- [00:39:16](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2356) And with a managed service, check how addresses&nbsp; and delivery history can be exported, because&nbsp;&nbsp;

- [00:39:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2362) your data now lives with someone else. Third, exit&nbsp; cost: what leaving would take. Low for your own&nbsp;&nbsp;

- [00:39:29](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2369) adapter, moderate for a library behind an adapter,&nbsp; and possibly high for a service: contract,&nbsp;&nbsp;

- [00:39:34](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2374) data export and a new adapter. And still required,&nbsp; whichever you choose: the Notifier contract checks&nbsp;&nbsp;

- [00:39:41](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2381) of scene 4. Buying or reusing changes who&nbsp; does the work, not what you must check, so&nbsp;&nbsp;

- [00:39:46](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2386) the answer is C. Every one of these choices needs&nbsp; a reason that outlives the people who made it.&nbsp;&nbsp;

- [00:39:54](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2394) That is the last scene: writing the reason down.&nbsp; Scene 8: a future maintainer needs the reason,&nbsp;&nbsp;

- [00:40:01](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2401) not only the diagram. Months later, someone finds&nbsp; the Policy component and wonders why it exists.&nbsp;&nbsp;

- [00:40:07](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2407) On the left is what that maintainer sees: 1 box&nbsp; called Policy, 3 components that depend on it,&nbsp;&nbsp;

- [00:40:13](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2413) and a label: use a Policy component. What is&nbsp; missing from that label? Option A, nothing,&nbsp;&nbsp;

- [00:40:19](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2419) the diagram says it all. Option B, the name of the&nbsp; person who chose it. Option C, why it was chosen,&nbsp;&nbsp;

- [00:40:25](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2425) and when to rethink it. Decide before the record&nbsp; opens. On the right is a short decision record,&nbsp;&nbsp;

- [00:40:33](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2433) number DR-001: use a Policy component for the&nbsp; booking rules. Its status is Accepted. Let's&nbsp;&nbsp;

- [00:40:39](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2439) open it section by section. Context: the R-02&nbsp; duration rule was copied into 3 components,&nbsp;&nbsp;

- [00:40:46](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2446) a missed copy gave inconsistent decisions, and an&nbsp; exam week variant of 90 minutes is planned. Notice&nbsp;&nbsp;

- [00:40:53](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2453) that the context reuses the evidence of scenes&nbsp; 1 and 2. A decision record does not invent its&nbsp;&nbsp;

- [00:40:59](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2459) reasons; it points to what actually happened.&nbsp; Alternatives considered: keep the copies and&nbsp;&nbsp;

- [00:41:05](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2465) search before every change, rejected because&nbsp; a search for 120 missed the Reminder's copy,&nbsp;&nbsp;

- [00:41:12](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2472) written 2 * 60. And a generic rule framework,&nbsp; rejected because 2 clear rules and a small team&nbsp;&nbsp;

- [00:41:19](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2479) do not repay its setup and indirection. That is&nbsp; scene 7, written down. The decision: one Policy&nbsp;&nbsp;

- [00:41:26](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2486) component owns R-01 and R-02. The handler and the&nbsp; Reminder ask it, and the Browser UI only reads&nbsp;&nbsp;

- [00:41:32](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2492) its limits for early feedback. Consequences, good&nbsp; and costly: one place to edit a booking rule, and&nbsp;&nbsp;

- [00:41:39](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2499) Policy checks plus the handler's integration check&nbsp; on every rule change. And 3 components depend on&nbsp;&nbsp;

- [00:41:46](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2506) Policy, so its interface changes carefully.&nbsp; The scope is one set of rules for one campus;&nbsp;&nbsp;

- [00:41:51](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2511) per room rules and a rule engine are deliberately&nbsp; not covered. Finally, revisit when: campuses with&nbsp;&nbsp;

- [00:41:59](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2519) different rules, or staff who need to change rules&nbsp; without a release. These are the conditions that&nbsp;&nbsp;

- [00:42:04](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2524) would make this choice obsolete. The label lacked&nbsp; both: the why, and when to rethink it, option C.&nbsp;&nbsp;

- [00:42:11](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2531) The record also links the requirements it serves,&nbsp; R-01 and R-02. The principle: a design decision is&nbsp;&nbsp;

- [00:42:18](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2538) easier to maintain when its reasoning and limits&nbsp; are recorded. Many teams keep records like this&nbsp;&nbsp;

- [00:42:24](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2544) as short Markdown files next to the code, so the&nbsp; reason travels with the design. Now let's change&nbsp;&nbsp;

- [00:42:30](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2550) the situation. Several campuses now have different&nbsp; booking limits. Keep the decision, or revisit it?&nbsp;&nbsp;

- [00:42:37](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2557) Option A, check its revisit trigger first. Option&nbsp; B, keep it, a decision is final. Option C, start&nbsp;&nbsp;

- [00:42:44](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2564) over from scratch. Pause and decide, and look at&nbsp; the last section of the record before you answer.&nbsp;&nbsp;

- [00:42:52](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2572) The record named exactly this case: campuses with&nbsp; different rules. The trigger fires, and the status&nbsp;&nbsp;

- [00:42:58](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2578) turns to revisit due. So A was right: check the&nbsp; trigger first. Keeping it blindly would patch&nbsp;&nbsp;

- [00:43:04](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2584) each campus's exceptions into one Policy with one&nbsp; set of limits. That slowly rebuilds the copies of&nbsp;&nbsp;

- [00:43:11](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2591) scene 2, only now inside one component. Revisiting&nbsp; reopens the record: weigh per campus policy data,&nbsp;&nbsp;

- [00:43:18](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2598) 1 Policy per campus, or a policy table, against&nbsp; the same context and consequences. The record&nbsp;&nbsp;

- [00:43:24](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2604) tells you when it has expired. In short: write&nbsp; down why, and when to rethink it. That completes&nbsp;&nbsp;

- [00:43:30](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2610) the 8 scenes. The next page brings their&nbsp; principles together, with 6 checks for you&nbsp;&nbsp;

- [00:43:36](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2616) to answer. Eight principles, one per scene, and&nbsp; six checks. Starting at the top: design quality&nbsp;&nbsp;

- [00:43:44](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2624) becomes visible through the changes and failures&nbsp; a structure must accommodate. Useful boundaries&nbsp;&nbsp;

- [00:43:50](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2630) localize decisions while keeping their dependents&nbsp; and evidence visible. Cohesion concerns meaningful&nbsp;&nbsp;

- [00:43:57](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2637) related responsibility, not simply making modules&nbsp; small. An interface contract includes behavior&nbsp;&nbsp;

- [00:44:04](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2644) and failure semantics, not just matching names.&nbsp; Depend on the behavior a responsibility needs,&nbsp;&nbsp;

- [00:44:09](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2649) and isolate details that change for other&nbsp; reasons. Refactoring preserves intended&nbsp;&nbsp;

- [00:44:15](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2655) observable behavior, in small steps with relevant&nbsp; checks. Abstraction should earn its complexity.&nbsp;&nbsp;

- [00:44:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2662) And a decision is easier to maintain when its&nbsp; reasoning is recorded. Now the checks. Decide&nbsp;&nbsp;

- [00:44:28](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2668) your answer before you open each one. First: why&nbsp; is a duplicated duration rule risky? Think of the&nbsp;&nbsp;

- [00:44:34](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2674) Reminder in scene 2. The answer: copies can change&nbsp; inconsistently and create conflicting decisions,&nbsp;&nbsp;

- [00:44:43](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2683) exactly like the 100-minute booking&nbsp; that got 2 different answers. Second:&nbsp;&nbsp;

- [00:44:48](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2688) does a centralized rule mean only one check is&nbsp; needed? Remember what still ran again in Design B.&nbsp;&nbsp;

- [00:44:56](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2696) The answer is no. Different checks should still&nbsp; independently examine its important behavior&nbsp;&nbsp;

- [00:45:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2702) and its integration, like the Policy checks&nbsp; and the handler's integration check. Third:&nbsp;&nbsp;

- [00:45:08](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2708) why did the replacement notifier break the design&nbsp; despite matching parameters? Think of what Ari&nbsp;&nbsp;

- [00:45:14](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2714) read on the screen. It violated the expected&nbsp; failure behavior and affected the confirmation:&nbsp;&nbsp;

- [00:45:21](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2721) the exception escaped into the booking path, and&nbsp; rule R-04 broke. Fourth: what should a design&nbsp;&nbsp;

- [00:45:28](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2728) decision record preserve? You saw its sections&nbsp; open one by one in scene 8. Context, alternatives,&nbsp;&nbsp;

- [00:45:36](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2736) the choice, its consequences, and the assumptions&nbsp; or triggers that warrant revisiting it,&nbsp;&nbsp;

- [00:45:42](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2742) like campuses with different rules. Fifth: does&nbsp; a well typed result prove that a cancellation is&nbsp;&nbsp;

- [00:45:48](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2748) authorized? Think of Bo's request on the results&nbsp; page. No. Shape, domain validity and permission&nbsp;&nbsp;

- [00:45:56](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2756) are separate claims with separate evidence.&nbsp; A perfectly shaped request from Bo is still&nbsp;&nbsp;

- [00:46:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2762) denied. The last check leaves room booking behind.&nbsp; An image library changes its file decoder while&nbsp;&nbsp;

- [00:46:09](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2769) keeping the same function name. What does a caller&nbsp; still need to check? Check the accepted inputs,&nbsp;&nbsp;

- [00:46:17](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2777) the pixel and color meaning, the error results&nbsp; and the side effects the interface promises.&nbsp;&nbsp;

- [00:46:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2782) A matching name or type shape does not settle&nbsp; behavioral compatibility. That is the Notifier&nbsp;&nbsp;

- [00:46:29](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2789) lesson again, in a completely different kind of&nbsp; program. The last page shows what carries forward&nbsp;&nbsp;

- [00:46:34](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2794) into week 6. What carries forward, and where&nbsp; to read more. Week 6 starts from this question:&nbsp;&nbsp;

- [00:46:42](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2802) what changes when a dependency becomes slow,&nbsp; unavailable, or uncertain? Carried forward:&nbsp;&nbsp;

- [00:46:48](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2808) the module responsibilities of Booking Handler,&nbsp; Policy, Room Catalog, Notification and Storage,&nbsp;&nbsp;

- [00:46:54](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2814) and the contracts, Notifier.send with its failure&nbsp; behavior and the 3 kinds of booking result.&nbsp;&nbsp;

- [00:47:02](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2822) And a decision record, DR-001, with its revisit&nbsp; triggers. Next week, these responsibilities cross&nbsp;&nbsp;

- [00:47:08](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2828) process, network and data consistency boundaries.&nbsp; In practice, in 2026: editors such as VS Code and&nbsp;&nbsp;

- [00:47:15](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2835) IntelliJ IDEA automate small refactorings, and&nbsp; many teams keep decision records as short Markdown&nbsp;&nbsp;

- [00:47:22](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2842) files next to the code. The middle card lists&nbsp; the terms of this lecture: design, dependency,&nbsp;&nbsp;

- [00:47:28](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2848) coupling, cohesion, responsibility,&nbsp; interface, contract and precondition.&nbsp;&nbsp;

- [00:47:34](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2854) Then encapsulation, dependency direction,&nbsp; adapter, refactoring, regression, abstraction&nbsp;&nbsp;

- [00:47:39](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2859) and the decision record, each with a one-line&nbsp; definition. On the right are the 4 sources:&nbsp;&nbsp;

- [00:47:47](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2867) the Software Engineering Body of Knowledge, the&nbsp; Computer Science Curricula 2023, Google's code&nbsp;&nbsp;

- [00:47:53](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2873) review guide, and Software Engineering at Google.&nbsp; So that is lecture 5. Keep each decision in one&nbsp;&nbsp;

- [00:48:00](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2880) place, and its users visible. Group what changes&nbsp; together, and remember that matching names are&nbsp;&nbsp;

- [00:48:06](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2886) not matching behavior. Depend on what you need,&nbsp; change structure in small steps, add structure&nbsp;&nbsp;

- [00:48:13](https://www.youtube.com/watch?v=V26mbmrSUCk&t=2893) only when it pays, and write down why. Thank&nbsp; you for watching, and I will see you in week 6.
