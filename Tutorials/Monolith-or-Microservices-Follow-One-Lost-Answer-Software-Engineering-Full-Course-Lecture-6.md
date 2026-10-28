# Monolith or Microservices? Follow One Lost Answer | Software Engineering Full Course, Lecture 6

## Full tutorial link > https://www.youtube.com/watch?v=r3lQevA-vtY

[![Monolith or Microservices? Follow One Lost Answer | Software Engineering Full Course, Lecture 6](https://i.ytimg.com/vi_webp/r3lQevA-vtY/maxresdefault.webp)](https://www.youtube.com/watch?v=r3lQevA-vtY "Monolith or Microservices? Follow One Lost Answer | Software Engineering Full Course, Lecture 6")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Monolith-or-Microservices-Follow-One-Lost-Answer-Software-Engineering-Full-Course-Lecture-6.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Monolith-or-Microservices-Follow-One-Lost-Answer-Software-Engineering-Full-Course-Lecture-6.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Lecture 6 of the Software Engineering course. Ari presses Book in Campus Rooms, a fictional room-booking service, and the screen says the request timed out, yet the database already holds booking B-001. Eight interactive scenes follow that lost answer through the whole system.

Links:

SECourses Patreon: [ [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses) ]

SECourses Discord: [ [https://discord.com/servers/software-engineering-courses-secourses-772774097734074388](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) ]

You will see C4 views, a traced request, a modular application against separate services, a check-then-write race with one authoritative decision per room, idempotent retries, the four answers a caller can get, a transactional outbox, API contracts and an architecture decision record.

Topics: software architecture, C4 model, synchronous and asynchronous interactions, timeouts and unknown outcomes, microservices, race conditions, idempotency keys, eventual consistency, transactional outbox, API contracts, architecture decision records.

Jump to any scene, the questions, the principles or the sources.

Chapters:

[00:00:00](https://youtu.be/r3lQevA-vtY?t=0) A booking gets no answer: was the room booked?

[00:00:43](https://youtu.be/r3lQevA-vtY?t=43) Ari presses Book and the request times out

[00:01:04](https://youtu.be/r3lQevA-vtY?t=64) Predict: is room C101 booked for Ari?

[00:01:24](https://youtu.be/r3lQevA-vtY?t=84) Look inside: B-001 was stored, the answer was lost

[00:02:06](https://youtu.be/r3lQevA-vtY?t=126) The week's question and the five steps of this lecture

[00:03:11](https://youtu.be/r3lQevA-vtY?t=191) From week 5 modules to programs that fail separately

[00:03:33](https://youtu.be/r3lQevA-vtY?t=213) The components of Campus Rooms and two outside systems

[00:03:56](https://youtu.be/r3lQevA-vtY?t=236) Rules R-01, R-02 and R-04 under pressure this week

[00:04:28](https://youtu.be/r3lQevA-vtY?t=268) Five learning outcomes for architecture and distributed failure

[00:05:07](https://youtu.be/r3lQevA-vtY?t=307) Scene 1: what does a box labeled Booking stand for?

[00:05:49](https://youtu.be/r3lQevA-vtY?t=349) Level 1, system context: who the system deals with

[00:06:21](https://youtu.be/r3lQevA-vtY?t=381) Level 2, containers: applications and data stores, not Docker

[00:07:14](https://youtu.be/r3lQevA-vtY?t=434) Level 3, components: five modules inside one process

[00:07:36](https://youtu.be/r3lQevA-vtY?t=456) Trace Ari's request: three function calls, four network hops

[00:08:51](https://youtu.be/r3lQevA-vtY?t=531) Separate worker preset: Notification moves into its own process

[00:09:56](https://youtu.be/r3lQevA-vtY?t=596) What changed: how the system runs, not what it does

[00:10:40](https://youtu.be/r3lQevA-vtY?t=640) Scene 2: follow request REQ-17 across real boundaries

[00:11:25](https://youtu.be/r3lQevA-vtY?t=685) Steps 1 to 5: Ari waits 125 illustrative milliseconds

[00:12:31](https://youtu.be/r3lQevA-vtY?t=751) Synchronous calls versus asynchronous work, and what each costs

[00:13:24](https://youtu.be/r3lQevA-vtY?t=804) Mail down, email first: an outage reaches the booking answer

[00:14:35](https://youtu.be/r3lQevA-vtY?t=875) Principle: what you wait for decides which failures reach you

[00:14:46](https://youtu.be/r3lQevA-vtY?t=886) Mail down, pending: Confirmed now, the email waits

[00:16:12](https://youtu.be/r3lQevA-vtY?t=972) Scene 3: what would separate services buy a small team?

[00:17:04](https://youtu.be/r3lQevA-vtY?t=1024) Six rows: release, scaling, calls, contracts, data, operations

[00:18:22](https://youtu.be/r3lQevA-vtY?t=1102) Steady load: no universal winner, only a fit to conditions

[00:18:45](https://youtu.be/r3lQevA-vtY?t=1125) Notifications grow: which split targets the growing workload?

[00:20:12](https://youtu.be/r3lQevA-vtY?t=1212) Scene 4: two sensible requests, one broken booking rule

[00:20:51](https://youtu.be/r3lQevA-vtY?t=1251) Check then write: both reads say available, both confirm

[00:21:50](https://youtu.be/r3lQevA-vtY?t=1310) Invariants and races: the gap between a read and a write

[00:22:11](https://youtu.be/r3lQevA-vtY?t=1331) In a transaction at read committed: still two bookings

[00:23:21](https://youtu.be/r3lQevA-vtY?t=1401) Unique room plus start: different keys, overlapping times

[00:24:12](https://youtu.be/r3lQevA-vtY?t=1452) One atomic decision per room: Bo gets a conflict

[00:25:47](https://youtu.be/r3lQevA-vtY?t=1547) Scene 5: does a timeout tell you the write happened?

[00:26:37](https://youtu.be/r3lQevA-vtY?t=1597) A plain retry: a conflict with Ari's own booking

[00:27:25](https://youtu.be/r3lQevA-vtY?t=1645) Operation key K1: a retry returns the original result

[00:29:11](https://youtu.be/r3lQevA-vtY?t=1751) Same key, new request: an explicit conflict, nothing stored

[00:30:51](https://youtu.be/r3lQevA-vtY?t=1851) Four answers to one booking: stored, not stored or unknown?

[00:32:24](https://youtu.be/r3lQevA-vtY?t=1944) Timeout, failure and unknown outcome: three observations named

[00:32:56](https://youtu.be/r3lQevA-vtY?t=1976) Scene 6: a confirmed booking and a pending email

[00:33:49](https://youtu.be/r3lQevA-vtY?t=2029) Mail outage: the booking stays confirmed, the email arrives late

[00:34:52](https://youtu.be/r3lQevA-vtY?t=2092) Eventual consistency: fine for an email, never for overlaps

[00:35:04](https://youtu.be/r3lQevA-vtY?t=2104) Duplicate attempt: a handler that checks before it sends

[00:36:14](https://youtu.be/r3lQevA-vtY?t=2174) A crash between two writes: the silently missing email

[00:36:58](https://youtu.be/r3lQevA-vtY?t=2218) Transactional outbox: booking and pending email committed together

[00:38:26](https://youtu.be/r3lQevA-vtY?t=2306) Scene 7: the booking contract between Booking and its callers

[00:39:53](https://youtu.be/r3lQevA-vtY?t=2393) What OpenAPI describes, and what it cannot establish

[00:40:16](https://youtu.be/r3lQevA-vtY?t=2416) Three consumers: web app, door display and nightly export

[00:40:38](https://youtu.be/r3lQevA-vtY?t=2438) Add a field: the strict nightly export fails

[00:41:30](https://youtu.be/r3lQevA-vtY?t=2490) Same field, new meaning: every consumer silently wrong

[00:42:29](https://youtu.be/r3lQevA-vtY?t=2549) New status values: an abrupt change versus a transition

[00:43:41](https://youtu.be/r3lQevA-vtY?t=2621) Compatibility matrix: each change against each real consumer

[00:44:27](https://youtu.be/r3lQevA-vtY?t=2667) Scene 8: which structure protects the promises? Decision record DR-002

[00:45:38](https://youtu.be/r3lQevA-vtY?t=2738) Quality scenarios QS-1 to QS-3 and what protects each

[00:47:17](https://youtu.be/r3lQevA-vtY?t=2837) Several campuses: a revisit trigger fires and reopens DR-002

[00:48:44](https://youtu.be/r3lQevA-vtY?t=2924) Eight principles of this lecture, one from each scene

[00:49:28](https://youtu.be/r3lQevA-vtY?t=2968) Six checks, including a batch importer that crashes

[00:51:28](https://youtu.be/r3lQevA-vtY?t=3088) What carries forward to week 7, terms and sources

[00:52:31](https://youtu.be/r3lQevA-vtY?t=3151) Recap: one lost answer followed through a whole system

Every name, number and booking is a teaching example from the fictional Campus Rooms service.

Questions and updates: the links above and the comments below. Thank you for watching.



### Video Transcription


- [00:00:08](https://www.youtube.com/watch?v=r3lQevA-vtY&t=8) Greetings everyone. This is week 6 of the&nbsp; Software Engineering course. Today's question&nbsp;&nbsp;

- [00:00:13](https://www.youtube.com/watch?v=r3lQevA-vtY&t=13) starts with a booking that gets no answer:&nbsp; Ari presses Book, and nothing comes back.&nbsp;&nbsp;

- [00:00:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=19) Here is the setup. Ari, user U-01, books room&nbsp; C101 from 10:00 to 11:00 in Campus Rooms,&nbsp;&nbsp;

- [00:00:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=26) the fictional booking service we follow throughout&nbsp; this course. On the left is Ari's booking screen,&nbsp;&nbsp;

- [00:00:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=32) with the room and the time filled in. Below it&nbsp; is the path of the request: Ari's browser, and&nbsp;&nbsp;

- [00:00:38](https://www.youtube.com/watch?v=r3lQevA-vtY&t=38) the inside of Campus Rooms, covered, because Ari&nbsp; cannot see in there. Let's press Book and see what&nbsp;&nbsp;

- [00:00:45](https://www.youtube.com/watch?v=r3lQevA-vtY&t=45) reaches Ari's screen. The request goes out, no&nbsp; answer comes back in time, and the browser reports&nbsp;&nbsp;

- [00:00:51](https://www.youtube.com/watch?v=r3lQevA-vtY&t=51) that the request timed out. Look at the path&nbsp; below. The request arrow went in, and then nothing&nbsp;&nbsp;

- [00:00:58](https://www.youtube.com/watch?v=r3lQevA-vtY&t=58) came back before the browser gave up waiting.&nbsp; From where Ari sits, that is all there is to see.&nbsp;&nbsp;

- [00:01:04](https://www.youtube.com/watch?v=r3lQevA-vtY&t=64) So decide before we look inside. Ari sees no&nbsp; answer. Is room C101 booked for Ari? Option A, no:&nbsp;&nbsp;

- [00:01:11](https://www.youtube.com/watch?v=r3lQevA-vtY&t=71) an error means the booking is not there. Option&nbsp; B, yes: Campus Rooms always saves first. Option C,&nbsp;&nbsp;

- [00:01:17](https://www.youtube.com/watch?v=r3lQevA-vtY&t=77) Ari cannot tell from this screen. Pause the&nbsp; video for a moment and choose your answer.&nbsp;&nbsp;

- [00:01:24](https://www.youtube.com/watch?v=r3lQevA-vtY&t=84) Now let's look inside Campus Rooms, the view&nbsp; Ari never gets. The request did reach Booking,&nbsp;&nbsp;

- [00:01:29](https://www.youtube.com/watch?v=r3lQevA-vtY&t=89) the part of Campus Rooms that decides bookings.&nbsp; Booking checked the rules and stored the booking:&nbsp;&nbsp;

- [00:01:36](https://www.youtube.com/watch?v=r3lQevA-vtY&t=96) B-001, Ari, room C101, 10:00 to 11:00, confirmed.&nbsp; It is in the booking database right now.&nbsp;&nbsp;

- [00:01:45](https://www.youtube.com/watch?v=r3lQevA-vtY&t=105) But the answer was lost on its way back, at&nbsp; the red cross. So Ari's screen says timed out,&nbsp;&nbsp;

- [00:01:50](https://www.youtube.com/watch?v=r3lQevA-vtY&t=110) while the room is in fact booked for Ari. The&nbsp; right answer was C. The whole lesson of today&nbsp;&nbsp;

- [00:01:57](https://www.youtube.com/watch?v=r3lQevA-vtY&t=117) fits in 1 picture. The write happened, the answer&nbsp; was lost, and the timeout told Ari only 1 thing:&nbsp;&nbsp;

- [00:02:04](https://www.youtube.com/watch?v=r3lQevA-vtY&t=124) the waiting was over. And Ari's next move matters.&nbsp; If Ari simply books again, or gives the room up,&nbsp;&nbsp;

- [00:02:11](https://www.youtube.com/watch?v=r3lQevA-vtY&t=131) a lost answer turns into a real problem. You&nbsp; will see both of those cases in this lecture.&nbsp;&nbsp;

- [00:02:17](https://www.youtube.com/watch?v=r3lQevA-vtY&t=137) So here is the question of this week: what&nbsp; changes when a dependency becomes slow,&nbsp;&nbsp;

- [00:02:21](https://www.youtube.com/watch?v=r3lQevA-vtY&t=141) unavailable, or uncertain? This&nbsp; lecture answers it in 5 steps.&nbsp;&nbsp;

- [00:02:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=146) First, what does a box on an architecture&nbsp; diagram stand for? That is scene one. Second,&nbsp;&nbsp;

- [00:02:31](https://www.youtube.com/watch?v=r3lQevA-vtY&t=151) which dependency does a request wait for, and&nbsp; which failures reach the user? Scenes 2 and 3.&nbsp;&nbsp;

- [00:02:38](https://www.youtube.com/watch?v=r3lQevA-vtY&t=158) Then, how can 2 reasonable bookings break&nbsp; 1 shared rule? That is scene 4. Next,&nbsp;&nbsp;

- [00:02:44](https://www.youtube.com/watch?v=r3lQevA-vtY&t=164) what do you know after a timeout, and how do&nbsp; you retry safely? Those are scenes 5 and 6.&nbsp;&nbsp;

- [00:02:50](https://www.youtube.com/watch?v=r3lQevA-vtY&t=170) And finally, how do contracts and decisions keep&nbsp; these promises over time? That is scenes 7 and&nbsp;&nbsp;

- [00:02:57](https://www.youtube.com/watch?v=r3lQevA-vtY&t=177) 8. Check out the tutorial description to see the&nbsp; chapters. To move between pages, I use the arrow&nbsp;&nbsp;

- [00:03:03](https://www.youtube.com/watch?v=r3lQevA-vtY&t=183) buttons at the top right of the deck. The next&nbsp; page connects this week to what you already know.&nbsp;&nbsp;

- [00:03:11](https://www.youtube.com/watch?v=r3lQevA-vtY&t=191) Week 5 drew boundaries inside the code:&nbsp; modules with 1 responsibility each,&nbsp;&nbsp;

- [00:03:15](https://www.youtube.com/watch?v=r3lQevA-vtY&t=195) contracts that include failure behavior, and a&nbsp; decision record, which lists its revisit triggers.&nbsp;&nbsp;

- [00:03:22](https://www.youtube.com/watch?v=r3lQevA-vtY&t=202) This week, those same parts run as programs.&nbsp; They wait for each other over networks,&nbsp;&nbsp;

- [00:03:27](https://www.youtube.com/watch?v=r3lQevA-vtY&t=207) and they can fail separately. That&nbsp; changes what a design has to protect.&nbsp;&nbsp;

- [00:03:33](https://www.youtube.com/watch?v=r3lQevA-vtY&t=213) Here are the components of Campus Rooms. Booking&nbsp; receives a booking request and answers it. Policy&nbsp;&nbsp;

- [00:03:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=219) owns the booking rules, and Room Catalog knows&nbsp; the rooms. Notification sends confirmations,&nbsp;&nbsp;

- [00:03:45](https://www.youtube.com/watch?v=r3lQevA-vtY&t=225) and Storage reads and writes the booking&nbsp; database. 2 outside systems complete the picture:&nbsp;&nbsp;

- [00:03:50](https://www.youtube.com/watch?v=r3lQevA-vtY&t=230) Identity signs people in, and a mail provider&nbsp; delivers email. 3 rules come back this week. R-01:&nbsp;&nbsp;

- [00:03:58](https://www.youtube.com/watch?v=r3lQevA-vtY&t=238) no overlapping confirmed bookings for the same&nbsp; room. 10:00 to 11:00 and 11 to 12 only touch,&nbsp;&nbsp;

- [00:04:04](https://www.youtube.com/watch?v=r3lQevA-vtY&t=244) so both may exist. R-02: a booking lasts 30 to&nbsp; 120 minutes, both limits included. And R-04:&nbsp;&nbsp;

- [00:04:14](https://www.youtube.com/watch?v=r3lQevA-vtY&t=254) a failed notification never cancels a confirmed&nbsp; booking. R-04 also says that pending email stays&nbsp;&nbsp;

- [00:04:21](https://www.youtube.com/watch?v=r3lQevA-vtY&t=261) visible and recoverable. Keep that rule in mind,&nbsp; because scenes 2 and 6 put it under real pressure.&nbsp;&nbsp;

- [00:04:28](https://www.youtube.com/watch?v=r3lQevA-vtY&t=268) By the end of this lecture you can do 5 things.&nbsp; First, distinguish a module boundary from a&nbsp;&nbsp;

- [00:04:33](https://www.youtube.com/watch?v=r3lQevA-vtY&t=273) process or deployment boundary. Second, read&nbsp; context, component and runtime views at an&nbsp;&nbsp;

- [00:04:40](https://www.youtube.com/watch?v=r3lQevA-vtY&t=280) appropriate level. Third, explain how a concurrent&nbsp; check then write can violate a shared invariant.&nbsp;&nbsp;

- [00:04:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=287) Next, distinguish timeout, failure and unknown&nbsp; outcome. And finally, compare synchronous and&nbsp;&nbsp;

- [00:04:53](https://www.youtube.com/watch?v=r3lQevA-vtY&t=293) asynchronous interactions, including their costs.&nbsp; Each idea appears first as a mechanism you can&nbsp;&nbsp;

- [00:04:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=299) watch, and only then gets its formal name. So&nbsp; let's start with a question about a single box.&nbsp;&nbsp;

- [00:05:07](https://www.youtube.com/watch?v=r3lQevA-vtY&t=307) Scene 1 asks a simple question: what does a box&nbsp; labeled Booking stand for? Architecture diagrams&nbsp;&nbsp;

- [00:05:13](https://www.youtube.com/watch?v=r3lQevA-vtY&t=313) are full of boxes like this one, with a single&nbsp; word and no context. Before anything changes,&nbsp;&nbsp;

- [00:05:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=319) decide what you would point at if someone wants&nbsp; to know about this box. Option A, it depends&nbsp;&nbsp;

- [00:05:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=325) on the view: each view must say which level it&nbsp; belongs to. Option B, a module of code. Option C,&nbsp;&nbsp;

- [00:05:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=332) a server. Take a moment and choose, because&nbsp; all 3 answers sound reasonable in a meeting.&nbsp;&nbsp;

- [00:05:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=339) To find out, I use the Step button at&nbsp; the top right. It moves a scene forward&nbsp;&nbsp;

- [00:05:43](https://www.youtube.com/watch?v=r3lQevA-vtY&t=343) one state at a time, and the tabs above&nbsp; the diagram show which level we are on.&nbsp;&nbsp;

- [00:05:49](https://www.youtube.com/watch?v=r3lQevA-vtY&t=349) Level 1 is the system context. Here&nbsp; Booking means the whole booking system,&nbsp;&nbsp;

- [00:05:54](https://www.youtube.com/watch?v=r3lQevA-vtY&t=354) Campus Rooms, seen from outside, with the&nbsp; people who use it and what it depends on.&nbsp;&nbsp;

- [00:05:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=359) Ari and Bo book rooms. Campus Rooms asks Identity&nbsp; who is asking, and it sends email through a mail&nbsp;&nbsp;

- [00:06:05](https://www.youtube.com/watch?v=r3lQevA-vtY&t=365) provider. Both are outside systems that someone&nbsp; else runs. Notice what this view leaves out on&nbsp;&nbsp;

- [00:06:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=372) purpose: nothing about programs, databases or&nbsp; modules. A context view answers 1 question:&nbsp;&nbsp;

- [00:06:17](https://www.youtube.com/watch?v=r3lQevA-vtY&t=377) who and what surrounds this system? Now let's&nbsp; zoom in. Level 2 shows containers: the separately&nbsp;&nbsp;

- [00:06:24](https://www.youtube.com/watch?v=r3lQevA-vtY&t=384) running applications and data stores inside Campus&nbsp; Rooms. This vocabulary comes from the C4 model.&nbsp;&nbsp;

- [00:06:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=392) There are 3 of them. A browser app runs in&nbsp; the browser, 1 server application decides&nbsp;&nbsp;

- [00:06:37](https://www.youtube.com/watch?v=r3lQevA-vtY&t=397) and records bookings, and a booking database keeps&nbsp; the authoritative record. Here Booking means that&nbsp;&nbsp;

- [00:06:44](https://www.youtube.com/watch?v=r3lQevA-vtY&t=404) running application: 1 process you deploy, start&nbsp; and restart. If it stops, every booking stops,&nbsp;&nbsp;

- [00:06:50](https://www.youtube.com/watch?v=r3lQevA-vtY&t=410) whatever its code looks like inside. 1 warning&nbsp; about the word container. In the C4 model,&nbsp;&nbsp;

- [00:06:57](https://www.youtube.com/watch?v=r3lQevA-vtY&t=417) a container is an application or a data store.&nbsp; It is not necessarily a Docker container.&nbsp;&nbsp;

- [00:07:03](https://www.youtube.com/watch?v=r3lQevA-vtY&t=423) Docker images are a packaging format. This&nbsp; application could run from a Docker image,&nbsp;&nbsp;

- [00:07:07](https://www.youtube.com/watch?v=r3lQevA-vtY&t=427) as a plain process on a server, or on a cloud&nbsp; platform, and the view would not change at all.&nbsp;&nbsp;

- [00:07:14](https://www.youtube.com/watch?v=r3lQevA-vtY&t=434) Now we zoom in once more. Level 3 shows&nbsp; components, the modules inside 1 application.&nbsp;&nbsp;

- [00:07:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=439) Booking, Policy, Room Catalog, Notification and&nbsp; Storage all run in this one process. So here&nbsp;&nbsp;

- [00:07:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=446) Booking means 1 module with 1 responsibility:&nbsp; it receives a booking request and answers it.&nbsp;&nbsp;

- [00:07:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=452) 3 views, 3 meanings of the same word. Let's trace&nbsp; Ari's request through this view. The numbers&nbsp;&nbsp;

- [00:07:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=459) follow the request, the green arrows are function&nbsp; calls inside the process, and the dashed blue&nbsp;&nbsp;

- [00:07:45](https://www.youtube.com/watch?v=r3lQevA-vtY&t=465) arrows are network connections. One, the request&nbsp; arrives from the browser over the network. 2,&nbsp;&nbsp;

- [00:07:51](https://www.youtube.com/watch?v=r3lQevA-vtY&t=471) Booking asks Identity who is asking, also over the&nbsp; network, because Identity is an outside system.&nbsp;&nbsp;

- [00:07:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=479) 3, Booking asks Policy about the rules, and 4, it&nbsp; asks Storage to decide and store. Both are plain&nbsp;&nbsp;

- [00:08:05](https://www.youtube.com/watch?v=r3lQevA-vtY&t=485) function calls inside 1 process. 5, Storage writes&nbsp; to the booking database, across the network again.&nbsp;&nbsp;

- [00:08:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=492) 6, Booking hands the email to Notification,&nbsp; and 7, Notification calls the mail provider.&nbsp;&nbsp;

- [00:08:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=499) Count them: 3 function calls inside 1 process,&nbsp; and 4 network connections to the outside. Room&nbsp;&nbsp;

- [00:08:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=505) Catalog plays no part in this request at all.&nbsp; So 5 logical components do not mean 5 servers.&nbsp;&nbsp;

- [00:08:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=512) Module boundaries are drawn in the code, and&nbsp; network boundaries are drawn by how you deploy it.&nbsp;&nbsp;

- [00:08:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=519) Here is the principle: architecture views should&nbsp; state their level, and logical separation does&nbsp;&nbsp;

- [00:08:44](https://www.youtube.com/watch?v=r3lQevA-vtY&t=524) not automatically imply network separation.&nbsp; In short, say which level a box lives on.&nbsp;&nbsp;

- [00:08:50](https://www.youtube.com/watch?v=r3lQevA-vtY&t=530) Now let's change 1 condition. The presets on the&nbsp; right select a variant of the scene. This one is&nbsp;&nbsp;

- [00:08:56](https://www.youtube.com/watch?v=r3lQevA-vtY&t=536) called Separate worker: Notification moves into&nbsp; its own process. Today all 5 components still run&nbsp;&nbsp;

- [00:09:04](https://www.youtube.com/watch?v=r3lQevA-vtY&t=544) inside 1 application. Before the change is shown,&nbsp; decide: what changes for Booking and Policy?&nbsp;&nbsp;

- [00:09:10](https://www.youtube.com/watch?v=r3lQevA-vtY&t=550) Option A, each now needs its own server.&nbsp; Option B, their logic stays the same,&nbsp;&nbsp;

- [00:09:15](https://www.youtube.com/watch?v=r3lQevA-vtY&t=555) and only where Notification runs changes. Option&nbsp; C, every booking now waits for the worker.&nbsp;&nbsp;

- [00:09:23](https://www.youtube.com/watch?v=r3lQevA-vtY&t=563) First the container view. A second process&nbsp; appears, the Notification worker. Booking&nbsp;&nbsp;

- [00:09:28](https://www.youtube.com/watch?v=r3lQevA-vtY&t=568) records a pending notification in the booking&nbsp; database, and the worker reads it and delivers it.&nbsp;&nbsp;

- [00:09:34](https://www.youtube.com/watch?v=r3lQevA-vtY&t=574) Now the component view: the same 5&nbsp; responsibilities, and Notification has simply&nbsp;&nbsp;

- [00:09:40](https://www.youtube.com/watch?v=r3lQevA-vtY&t=580) left the application. Booking and Policy have not&nbsp; changed at all, so the answer is B. Look at hop&nbsp;&nbsp;

- [00:09:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=587) 6. It used to be a function call; now the worker&nbsp; reads the pending email from the database, across&nbsp;&nbsp;

- [00:09:53](https://www.youtube.com/watch?v=r3lQevA-vtY&t=593) a network. That handoff is new. What changed is&nbsp; how the system runs. There are 2 server processes&nbsp;&nbsp;

- [00:09:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=599) to deploy and watch instead of one, and the worker&nbsp; restarts and scales without touching bookings.&nbsp;&nbsp;

- [00:10:07](https://www.youtube.com/watch?v=r3lQevA-vtY&t=607) A handoff through the database replaces a function&nbsp; call. And there is a new failure: the worker can&nbsp;&nbsp;

- [00:10:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=612) be down while bookings still confirm, so pending&nbsp; work must stay visible. What stayed the same is&nbsp;&nbsp;

- [00:10:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=619) what the system does: the same 5 responsibilities,&nbsp; the same rules, and Booking still decides.&nbsp;&nbsp;

- [00:10:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=626) Ari still gets Confirmed. Operations changed, and&nbsp; the logic did not. That is the same principle,&nbsp;&nbsp;

- [00:10:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=632) seen from the other side. Next, let's follow&nbsp; 1 request through these parts, step by step.&nbsp;&nbsp;

- [00:10:40](https://www.youtube.com/watch?v=r3lQevA-vtY&t=640) Scene 2 follows 1 request across real&nbsp; boundaries. Ari books C101 from 10:00&nbsp;&nbsp;

- [00:10:45](https://www.youtube.com/watch?v=r3lQevA-vtY&t=645) to 11:00, and the request carries a&nbsp; label, REQ-17, so we can track it.&nbsp;&nbsp;

- [00:10:51](https://www.youtube.com/watch?v=r3lQevA-vtY&t=651) Across the top are the 7 parts it visits: the&nbsp; browser, Booking, Identity, Policy, Storage,&nbsp;&nbsp;

- [00:10:56](https://www.youtube.com/watch?v=r3lQevA-vtY&t=656) Notification and the mail provider. Time runs from&nbsp; top to bottom. Solid arrows are calls that hold&nbsp;&nbsp;

- [00:11:04](https://www.youtube.com/watch?v=r3lQevA-vtY&t=664) up the answer, and dashed arrows are work that&nbsp; continues after it. Now decide: which steps must&nbsp;&nbsp;

- [00:11:10](https://www.youtube.com/watch?v=r3lQevA-vtY&t=670) finish before Ari sees Confirmed? Option A, only&nbsp; Storage, because it keeps the booking. Option B,&nbsp;&nbsp;

- [00:11:17](https://www.youtube.com/watch?v=r3lQevA-vtY&t=677) every step, including the email. Option C,&nbsp; Identity, Policy and Storage, then the answer.&nbsp;&nbsp;

- [00:11:24](https://www.youtube.com/watch?v=r3lQevA-vtY&t=684) Let's follow it. Step one: Ari's browser&nbsp; submits REQ-17 to Booking. From this moment&nbsp;&nbsp;

- [00:11:30](https://www.youtube.com/watch?v=r3lQevA-vtY&t=690) Ari is waiting, and the bar on the browser's line&nbsp; shows that wait. Step 2: Booking asks Identity&nbsp;&nbsp;

- [00:11:37](https://www.youtube.com/watch?v=r3lQevA-vtY&t=697) whether the signed in person is really Ari. In&nbsp; this illustration that is a 40-millisecond step,&nbsp;&nbsp;

- [00:11:43](https://www.youtube.com/watch?v=r3lQevA-vtY&t=703) and Ari waits the whole time. Step 3: Policy&nbsp; checks the duration and the interval rules,&nbsp;&nbsp;

- [00:11:49](https://www.youtube.com/watch?v=r3lQevA-vtY&t=709) a 5-millisecond step. Policy runs inside the same&nbsp; application, so this is a fast function call.&nbsp;&nbsp;

- [00:11:56](https://www.youtube.com/watch?v=r3lQevA-vtY&t=716) Step 4 is the important one. Here Storage makes&nbsp; the authoritative decision: nothing overlaps,&nbsp;&nbsp;

- [00:12:03](https://www.youtube.com/watch?v=r3lQevA-vtY&t=723) so it stores B-001 as confirmed, in a&nbsp; 60-millisecond write to the database.&nbsp;&nbsp;

- [00:12:09](https://www.youtube.com/watch?v=r3lQevA-vtY&t=729) Step 5: the answer, Confirmed, travels back&nbsp; to Ari. Ari's whole wait is a 125-millisecond&nbsp;&nbsp;

- [00:12:16](https://www.youtube.com/watch?v=r3lQevA-vtY&t=736) round trip. Each of those numbers is only an&nbsp; illustration. The dotted green line marks the&nbsp;&nbsp;

- [00:12:22](https://www.youtube.com/watch?v=r3lQevA-vtY&t=742) moment Ari has the answer. Steps 1 to 5 held&nbsp; it up, and Ari waited for each of those parts,&nbsp;&nbsp;

- [00:12:28](https://www.youtube.com/watch?v=r3lQevA-vtY&t=748) one after the other. These 2 kinds of steps have&nbsp; names. A call the caller waits for is synchronous,&nbsp;&nbsp;

- [00:12:35](https://www.youtube.com/watch?v=r3lQevA-vtY&t=755) like steps 1 to 5. Work that is recorded&nbsp; now and finished later is asynchronous.&nbsp;&nbsp;

- [00:12:42](https://www.youtube.com/watch?v=r3lQevA-vtY&t=762) Step 6 happens after the answer. Booking&nbsp; records the email as pending notification N-001,&nbsp;&nbsp;

- [00:12:48](https://www.youtube.com/watch?v=r3lQevA-vtY&t=768) and Ari is not waiting for this step at&nbsp; all. And step 7: Notification hands N-001&nbsp;&nbsp;

- [00:12:55](https://www.youtube.com/watch?v=r3lQevA-vtY&t=775) to the mail provider, which delivers it later.&nbsp; Ari's screen said Confirmed long before that.&nbsp;&nbsp;

- [00:13:02](https://www.youtube.com/watch?v=r3lQevA-vtY&t=782) So steps 1 to 5 hold up the answer, and steps 6&nbsp; and 7 continue after it. That makes C the right&nbsp;&nbsp;

- [00:13:08](https://www.youtube.com/watch?v=r3lQevA-vtY&t=788) answer: Identity, Policy and Storage, then the&nbsp; answer. Each kind has a cost. Synchronous calls&nbsp;&nbsp;

- [00:13:15](https://www.youtube.com/watch?v=r3lQevA-vtY&t=795) add up: every part you wait for adds its time and&nbsp; its failures. Asynchronous work needs tracking,&nbsp;&nbsp;

- [00:13:21](https://www.youtube.com/watch?v=r3lQevA-vtY&t=801) so nothing pending is forgotten. Why does this&nbsp; matter? Every part Ari waits for is also a&nbsp;&nbsp;

- [00:13:27](https://www.youtube.com/watch?v=r3lQevA-vtY&t=807) part whose failure Ari will feel. So let's&nbsp; make one of them fail: the mail provider.&nbsp;&nbsp;

- [00:13:34](https://www.youtube.com/watch?v=r3lQevA-vtY&t=814) In the preset Mail down, email first, the mail&nbsp; provider is unavailable, and this design sends the&nbsp;&nbsp;

- [00:13:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=819) email before it answers Ari. Everything else stays&nbsp; the same. Decide what Ari sees now. Option A, no&nbsp;&nbsp;

- [00:13:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=827) answer: an unknown outcome. Option B, Confirmed,&nbsp; a little later. Option C, a clear Rejected.&nbsp;&nbsp;

- [00:13:54](https://www.youtube.com/watch?v=r3lQevA-vtY&t=834) Steps 1 to 4 still succeed. Identity, Policy&nbsp; and Storage all answer, so B-001 is stored as&nbsp;&nbsp;

- [00:14:02](https://www.youtube.com/watch?v=r3lQevA-vtY&t=842) confirmed, exactly as on a normal day. But&nbsp; now Booking sends the email first and waits&nbsp;&nbsp;

- [00:14:08](https://www.youtube.com/watch?v=r3lQevA-vtY&t=848) for it. The mail provider never answers,&nbsp; so Booking keeps waiting, and so does Ari.&nbsp;&nbsp;

- [00:14:14](https://www.youtube.com/watch?v=r3lQevA-vtY&t=854) At some point Ari's browser stops waiting. The&nbsp; screen says unknown outcome, while the database&nbsp;&nbsp;

- [00:14:20](https://www.youtube.com/watch?v=r3lQevA-vtY&t=860) says B-001 is confirmed. The right answer was A.&nbsp; So an email outage reached the booking answer.&nbsp;&nbsp;

- [00:14:28](https://www.youtube.com/watch?v=r3lQevA-vtY&t=868) Ari cannot tell whether C101 is booked, and may&nbsp; try again, or give the room away. Here is the&nbsp;&nbsp;

- [00:14:35](https://www.youtube.com/watch?v=r3lQevA-vtY&t=875) principle: interaction structure determines which&nbsp; failures affect which user promises. In short,&nbsp;&nbsp;

- [00:14:41](https://www.youtube.com/watch?v=r3lQevA-vtY&t=881) what you wait for decides which failures reach&nbsp; you. Now the same failure with the other design,&nbsp;&nbsp;

- [00:14:48](https://www.youtube.com/watch?v=r3lQevA-vtY&t=888) Mail down, pending. Here Booking answers first&nbsp; and records the email as pending work for later.&nbsp;&nbsp;

- [00:14:54](https://www.youtube.com/watch?v=r3lQevA-vtY&t=894) Decide again. Option A, no answer, an&nbsp; unknown outcome. Option B, Confirmed,&nbsp;&nbsp;

- [00:14:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=899) with the email still pending. Option C,&nbsp; Rejected until the mail provider returns.&nbsp;&nbsp;

- [00:15:06](https://www.youtube.com/watch?v=r3lQevA-vtY&t=906) Steps 1 to 5 run as usual, so Ari sees Confirmed,&nbsp; B-001, after the same 125 milliseconds. The mail&nbsp;&nbsp;

- [00:15:15](https://www.youtube.com/watch?v=r3lQevA-vtY&t=915) provider had no part in that answer. Step&nbsp; 6 records N-001 as pending notification,&nbsp;&nbsp;

- [00:15:22](https://www.youtube.com/watch?v=r3lQevA-vtY&t=922) after the answer. Ari is not waiting for&nbsp; it, so this step cannot delay the booking.&nbsp;&nbsp;

- [00:15:28](https://www.youtube.com/watch?v=r3lQevA-vtY&t=928) Step 7 tries to deliver it, and the mail&nbsp; provider is unavailable. N-001 stays pending,&nbsp;&nbsp;

- [00:15:35](https://www.youtube.com/watch?v=r3lQevA-vtY&t=935) with its failed attempt, and a retry is scheduled.&nbsp;&nbsp;

- [00:15:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=939) This design takes on an extra responsibility.&nbsp; Pending delivery must be observable and&nbsp;&nbsp;

- [00:15:44](https://www.youtube.com/watch?v=r3lQevA-vtY&t=944) recoverable, not merely forgotten. Support can&nbsp; see N-001, with its failed attempt on display.&nbsp;&nbsp;

- [00:15:52](https://www.youtube.com/watch?v=r3lQevA-vtY&t=952) So the same failure meets 2 designs. One breaks&nbsp; the booking promise, the other only delays the&nbsp;&nbsp;

- [00:15:58](https://www.youtube.com/watch?v=r3lQevA-vtY&t=958) email, and the right answer this time was B.&nbsp; Keep this picture in mind: a design decides which&nbsp;&nbsp;

- [00:16:04](https://www.youtube.com/watch?v=r3lQevA-vtY&t=964) failures reach the user. Next, let's ask whether&nbsp; those parts should be separate services at all.&nbsp;&nbsp;

- [00:16:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=972) Scene 3 asks what separate services would buy a&nbsp; small team. 1 team builds and runs Campus Rooms,&nbsp;&nbsp;

- [00:16:18](https://www.youtube.com/watch?v=r3lQevA-vtY&t=978) and the same components can run in 2&nbsp; ways. On the left, a modular application:&nbsp;&nbsp;

- [00:16:24](https://www.youtube.com/watch?v=r3lQevA-vtY&t=984) 1 deployable with 5 modules inside and 1&nbsp; booking database. It is not an undivided blob;&nbsp;&nbsp;

- [00:16:29](https://www.youtube.com/watch?v=r3lQevA-vtY&t=989) its modules keep their boundaries. On the right,&nbsp; every component a service. Booking, Policy, Room&nbsp;&nbsp;

- [00:16:36](https://www.youtube.com/watch?v=r3lQevA-vtY&t=996) Catalog and Notification each deploy on their own,&nbsp; and Booking and Room Catalog each own their data.&nbsp;&nbsp;

- [00:16:43](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1003) Before the comparison appears, decide: for 1&nbsp; small team under steady load, what would separate&nbsp;&nbsp;

- [00:16:49](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1009) services buy? Option A, loose coupling, for free.&nbsp; Option B, independent release and scaling, paid&nbsp;&nbsp;

- [00:16:56](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1016) for with network and coordination work. Option C,&nbsp; less to deploy and watch. Pause and choose one.&nbsp;&nbsp;

- [00:17:03](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1023) Row one: independent release. With the modular&nbsp; application, every change ships as 1 release&nbsp;&nbsp;

- [00:17:09](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1029) of the whole thing. A service can ship on its&nbsp; own, while its contracts stay compatible. Row 2:&nbsp;&nbsp;

- [00:17:16](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1036) independent scaling. The modular application&nbsp; scales as 1 unit, while 1 busy service can scale&nbsp;&nbsp;

- [00:17:21](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1041) on its own. That is a real benefit, when a need&nbsp; asks for it. Row 3, and this is the price: calls&nbsp;&nbsp;

- [00:17:28](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1048) between parts. Inside 1 process they are function&nbsp; calls. Between services they are network calls,&nbsp;&nbsp;

- [00:17:33](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1053) which can be slow, fail, or end in an unknown&nbsp; outcome. That last part should sound familiar.&nbsp;&nbsp;

- [00:17:41](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1061) Every network call now needs a timeout and a retry&nbsp; rule, which are exactly the problems of Ari's lost&nbsp;&nbsp;

- [00:17:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1067) answer in the opening. Row 4: contract changes. In&nbsp; 1 application, a changed function and its callers&nbsp;&nbsp;

- [00:17:54](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1074) change in 1 commit. Between services, a changed&nbsp; API needs a transition plan across releases.&nbsp;&nbsp;

- [00:18:01](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1081) Row 5: data ownership. 1 database holds&nbsp; the one no overlap decision. With services,&nbsp;&nbsp;

- [00:18:06](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1086) each owns its data, and a rule that spans services&nbsp; needs coordination. Row 6: operational work.&nbsp;&nbsp;

- [00:18:14](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1094) 1 deployment to build, run and watch, against&nbsp; 4 deployments, their logs and alerts, and the&nbsp;&nbsp;

- [00:18:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1099) network between them. So the answer is B. For 1&nbsp; small team under steady load, the extra boundaries&nbsp;&nbsp;

- [00:18:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1106) answer no need that has appeared yet. There is no&nbsp; universal winner here, only a fit to conditions.&nbsp;&nbsp;

- [00:18:34](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1114) Loose coupling, option A, does not come&nbsp; for free with services. 2 services that&nbsp;&nbsp;

- [00:18:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1119) must change together are still coupled, now with a&nbsp; network between them. So let's change 1 condition.&nbsp;&nbsp;

- [00:18:46](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1126) In Notifications grow, notification volume grows&nbsp; on its own, while booking writes stay the same.&nbsp;&nbsp;

- [00:18:53](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1133) The left side now shows a modular application&nbsp; with a separate Notification worker. Which split&nbsp;&nbsp;

- [00:18:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1139) targets the need? Option A, split every component&nbsp; into a service. Option B, split Policy out. Option&nbsp;&nbsp;

- [00:19:06](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1146) C, move only Notification into its own worker.&nbsp; Decide which change answers the growing workload,&nbsp;&nbsp;

- [00:19:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1152) and nothing more. First, the growing workload.&nbsp; Both alternatives let notification work scale&nbsp;&nbsp;

- [00:19:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1159) and fail on its own: the worker on the left,&nbsp; and the Notification service on the right.&nbsp;&nbsp;

- [00:19:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1165) Second, the boundaries added. The worker adds&nbsp; 1 handoff, through pending notifications in&nbsp;&nbsp;

- [00:19:30](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1170) the database. Splitting everything adds network&nbsp; calls between all 4 services, and split data.&nbsp;&nbsp;

- [00:19:38](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1178) Next, the booking route. With the worker it&nbsp; does not change: 1 process decides and stores.&nbsp;&nbsp;

- [00:19:43](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1183) With services, every booking now crosses&nbsp; the network to Policy and Room Catalog.&nbsp;&nbsp;

- [00:19:49](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1189) So C is the targeted answer: separate the&nbsp; one workload that grew. The principle:&nbsp;&nbsp;

- [00:19:54](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1194) choose deployment boundaries for&nbsp; demonstrated needs. Modularity and&nbsp;&nbsp;

- [00:19:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1199) distribution are different decisions. In short,&nbsp; split a process only when a real need asks. Now,&nbsp;&nbsp;

- [00:20:05](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1205) what happens when 2 people book the same&nbsp; room at the same moment? That is scene 4.&nbsp;&nbsp;

- [00:20:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1212) Scene 4. 2 reasonable bookings, 1 broken rule.&nbsp; Ari asks for C101 from 10:00 to 11:00. Bo,&nbsp;&nbsp;

- [00:20:18](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1218) at almost the same moment, wants 10:30 to 11:30.&nbsp; The calendar shows the clash: the half hour from&nbsp;&nbsp;

- [00:20:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1225) 10:30 to 11 belongs to both requests. R-01,&nbsp; at the top right, allows only one of them.&nbsp;&nbsp;

- [00:20:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1232) Below is the order of events: Ari's request on&nbsp; the top lane, Bo's on the bottom lane, and time&nbsp;&nbsp;

- [00:20:38](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1238) running from left to right. Both requests run the&nbsp; same code, at the bottom left. Read the bookings&nbsp;&nbsp;

- [00:20:44](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1244) of the room, decide whether the new booking&nbsp; overlaps one of them, and write it if it does not.&nbsp;&nbsp;

- [00:20:51](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1251) Time one: Ari's request reads the bookings&nbsp; of C101. Nothing overlaps 10:00 to 11:00,&nbsp;&nbsp;

- [00:20:56](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1256) so the result is available. Time 2:&nbsp; Bo's request reads the same calendar&nbsp;&nbsp;

- [00:21:01](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1261) before Ari's write has landed. It also finds&nbsp; nothing in the way, so it reads available too.&nbsp;&nbsp;

- [00:21:08](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1268) Both reads said available. Now decide&nbsp; what each request will do. Option A,&nbsp;&nbsp;

- [00:21:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1272) both confirm. Option B, Ari confirms and Bo&nbsp; is rejected. Option C, both are rejected.&nbsp;&nbsp;

- [00:21:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1279) Time 3: Ari's request writes Confirmed,&nbsp; and B-001 is stored. R-01 still holds,&nbsp;&nbsp;

- [00:21:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1286) because there is only 1 booking. Time 4: Bo's&nbsp; request writes too. Its decision came from&nbsp;&nbsp;

- [00:21:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1292) the old read, so it stores B-002. The half&nbsp; hour from 10:30 to 11 is now booked twice.&nbsp;&nbsp;

- [00:21:41](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1301) R-01 is broken, and both people get Confirmed&nbsp; as their answer. So the answer is A. Each&nbsp;&nbsp;

- [00:21:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1307) decision made sense on its own. This is&nbsp; the heart of the scene. The order of the&nbsp;&nbsp;

- [00:21:52](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1312) clicks does not matter: the rule broke&nbsp; in the gap between a read and a write.&nbsp;&nbsp;

- [00:22:00](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1320) R-01 is an invariant: a rule that must hold&nbsp; in every state. When 2 operations run at the&nbsp;&nbsp;

- [00:22:05](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1325) same time, their steps interleave, and a&nbsp; race in that gap can break the invariant.&nbsp;&nbsp;

- [00:22:11](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1331) A common first fix is to wrap&nbsp; the code in a transaction.&nbsp;&nbsp;

- [00:22:15](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1335) The preset In a transaction does exactly that, at&nbsp; read committed, the default level of PostgreSQL.&nbsp;&nbsp;

- [00:22:21](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1341) Does that stop the overlap? Option A, yes: a&nbsp; transaction prevents double booking. Option B,&nbsp;&nbsp;

- [00:22:27](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1347) no: both still read available first.&nbsp; Option C, only if 1 request is slower.&nbsp;&nbsp;

- [00:22:33](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1353) Time one: Ari's transaction begins&nbsp; and reads available. Time 2:&nbsp;&nbsp;

- [00:22:38](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1358) Bo's transaction begins and reads available&nbsp; too, because Ari has not committed anything yet.&nbsp;&nbsp;

- [00:22:44](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1364) And nothing was locked. There is&nbsp; no row for the free half hour yet,&nbsp;&nbsp;

- [00:22:48](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1368) so there is nothing to lock. Each transaction&nbsp; only looks at the bookings already there.&nbsp;&nbsp;

- [00:22:54](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1374) Time 3: Ari's transaction writes and commits&nbsp; B-001. Time 4: the second transaction, from Bo,&nbsp;&nbsp;

- [00:23:01](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1381) writes and commits B-002. That makes 2&nbsp; confirmations again, so the answer is B.&nbsp;&nbsp;

- [00:23:07](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1387) A transaction label is not a rule. The strictest&nbsp; isolation level would catch this pattern:&nbsp;&nbsp;

- [00:23:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1392) 1 transaction fails, and the code must run&nbsp; it again. That strategy is a choice you make,&nbsp;&nbsp;

- [00:23:18](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1398) not a default you get for free. Another tempting&nbsp; fix is a uniqueness rule in storage. The preset&nbsp;&nbsp;

- [00:23:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1405) Unique room plus start refuses a second booking&nbsp; with the same room and the same start time.&nbsp;&nbsp;

- [00:23:31](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1411) Does that stop this overlap? Option A, yes:&nbsp; the second booking is refused. Option B, yes,&nbsp;&nbsp;

- [00:23:37](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1417) as long as both start on the hour. Option&nbsp; C, no: 10 and 10:30 are different keys.&nbsp;&nbsp;

- [00:23:44](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1424) The reads go exactly as before, available for&nbsp; Ari and then available for Bo. The uniqueness&nbsp;&nbsp;

- [00:23:50](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1430) rule only acts when a booking is written. Ari's&nbsp; write uses the key C101 at 10, which is accepted.&nbsp;&nbsp;

- [00:23:57](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1437) Bo's write uses C101 at 10:30, a different key,&nbsp; so it is accepted too. The times still overlap,&nbsp;&nbsp;

- [00:24:05](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1445) so the answer is C. The key protects same room,&nbsp; same start, which is a smaller rule than R-01.&nbsp;&nbsp;

- [00:24:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1452) Here is what does work. In 1 atomic decision, the&nbsp; check and the write happen as 1 step per room,&nbsp;&nbsp;

- [00:24:18](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1458) so nothing can happen between them. What happens&nbsp; to the same 2 requests now? Option A, one confirms&nbsp;&nbsp;

- [00:24:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1465) and the other gets a conflict. Option B, both&nbsp; confirm. Option C, neither booking goes through.&nbsp;&nbsp;

- [00:24:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1472) Ari's request goes first: it checks and writes in&nbsp; 1 step, and B-001 is confirmed. Line 2 of the code&nbsp;&nbsp;

- [00:24:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1479) makes each room's calendar take one decision at a&nbsp; time. Then Bo's request gets its turn. It checks,&nbsp;&nbsp;

- [00:24:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1487) finds B-001 in the way, and writes nothing.&nbsp; It returns a booking conflict instead. Bo sees&nbsp;&nbsp;

- [00:24:54](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1494) Rejected: C101 is taken from 10:00 to 11:00, and&nbsp; Bo can choose another time. R-01 remains true,&nbsp;&nbsp;

- [00:25:00](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1500) so the answer is A. There are several ways to get&nbsp; 1 decision like this. An exclusion constraint on&nbsp;&nbsp;

- [00:25:06](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1506) room and time range, as in PostgreSQL, makes&nbsp; the database itself refuse overlapping rows.&nbsp;&nbsp;

- [00:25:13](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1513) Transactions at the strictest isolation level&nbsp; work too, if the code runs the failed one again.&nbsp;&nbsp;

- [00:25:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1519) Or a lock on the room's calendar, rather than on a&nbsp; row that is still missing. Here is the principle:&nbsp;&nbsp;

- [00:25:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1526) an invariant shared by concurrent operations needs&nbsp; enforcement that survives their interleavings.&nbsp;&nbsp;

- [00:25:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1532) In short, a shared rule needs 1 guard that races&nbsp; cannot slip past. Now back to the lost answer&nbsp;&nbsp;

- [00:25:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1539) from the opening. What should Ari's browser do&nbsp; after a timeout? Scene 5 answers that question.&nbsp;&nbsp;

- [00:25:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1547) Scene 5: a timeout does not tell you whether&nbsp; the write happened. On the left are 3 parts:&nbsp;&nbsp;

- [00:25:53](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1553) Ari's browser, Booking and the booking database.&nbsp; Ari's request carries only the booking itself:&nbsp;&nbsp;

- [00:26:01](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1561) C101, 10:00 to 11:00. Nothing in it says&nbsp; which attempt this is. Booking stores&nbsp;&nbsp;

- [00:26:08](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1568) B-001 as confirmed, exactly as in the opening.&nbsp; The booking database now holds Ari's booking.&nbsp;&nbsp;

- [00:26:16](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1576) And again the answer is lost on the way back.&nbsp; Ari's screen says unknown outcome. Should the&nbsp;&nbsp;

- [00:26:22](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1582) browser simply send the booking again? Option A,&nbsp; yes: an error means nothing was saved. Option B,&nbsp;&nbsp;

- [00:26:29](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1589) not blindly: the write may have happened. Option&nbsp; C, no: tell Ari it failed. Pause and choose.&nbsp;&nbsp;

- [00:26:37](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1597) Let's see what a plain retry does. The&nbsp; browser sends the same booking again,&nbsp;&nbsp;

- [00:26:41](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1601) with no key. To Booking, this looks like a brand&nbsp; new request. So Booking checks R-01 and finds&nbsp;&nbsp;

- [00:26:48](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1608) that 10:00 to 11:00 overlaps B-001. The answer is&nbsp; Rejected, with a booking conflict as the reason.&nbsp;&nbsp;

- [00:26:56](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1616) Ari is told the room is taken, by Ari's own&nbsp; booking. From Ari's side, 2 attempts have&nbsp;&nbsp;

- [00:27:01](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1621) now failed, even though the room was booked the&nbsp; first time. So Ari does what any person would do&nbsp;&nbsp;

- [00:27:08](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1628) and books another room: C202, 10:00 to 11:00,&nbsp; confirmed. Now Ari holds 2 bookings for 1 meeting.&nbsp;&nbsp;

- [00:27:16](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1636) And C101 is held for nobody who needs it. Booking&nbsp; could not tell a retry from a new request,&nbsp;&nbsp;

- [00:27:22](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1642) and the right answer was B: not blindly. The fix&nbsp; is to give the operation an identity. In Key K1,&nbsp;&nbsp;

- [00:27:28](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1648) same request, the browser sends an operation&nbsp; key, K1, with the first attempt and repeats it&nbsp;&nbsp;

- [00:27:34](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1654) on every retry. The key belongs to Ari and to&nbsp; this one booking. What should a retry with K1&nbsp;&nbsp;

- [00:27:40](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1660) return? Option A, create a second booking.&nbsp; Option B, a conflict with B-001. Option C,&nbsp;&nbsp;

- [00:27:48](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1668) the original result: B-001, confirmed. Pause&nbsp; and think about what Ari actually wants here.&nbsp;&nbsp;

- [00:27:56](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1676) Booking stores B-001, and in the same commit it&nbsp; records the key. K1 belongs to Ari, for C101 at&nbsp;&nbsp;

- [00:28:03](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1683) 10, with the result: B-001 is confirmed for Ari.&nbsp; Storing the key in the same commit matters. There&nbsp;&nbsp;

- [00:28:10](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1690) is no moment when the booking exists but the key&nbsp; does not, so a retry can never slip through a gap.&nbsp;&nbsp;

- [00:28:17](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1697) The answer is lost again, and Ari sees unknown&nbsp; outcome. This time the browser keeps K1,&nbsp;&nbsp;

- [00:28:23](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1703) ready for the retry. The retry carries K1&nbsp; and the same request. Booking looks up K1,&nbsp;&nbsp;

- [00:28:29](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1709) finds the original result and returns it:&nbsp; B-001, confirmed. No second booking is made.&nbsp;&nbsp;

- [00:28:36](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1716) On the right is the code that answers a request&nbsp; with a key. Lines 3 to 6 find the key of this&nbsp;&nbsp;

- [00:28:42](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1722) requester, compare the request and return&nbsp; the stored result. The right answer was C.&nbsp;&nbsp;

- [00:28:48](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1728) 1 more point about the web itself. HTTP defines&nbsp; GET, PUT and DELETE as idempotent methods,&nbsp;&nbsp;

- [00:28:54](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1734) and POST as not. A key like K1 is an application&nbsp; rule that makes this POST safe to repeat.&nbsp;&nbsp;

- [00:29:00](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1740) Idempotent means that repeating an operation has&nbsp; the same effect as doing it once. Exactly once&nbsp;&nbsp;

- [00:29:06](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1746) does not appear by itself: you design it, with&nbsp; keys like this one. But what if a retry reuses&nbsp;&nbsp;

- [00:29:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1752) the key for a different request? In Same key,&nbsp; new request, the retry still says K1, but asks&nbsp;&nbsp;

- [00:29:18](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1758) for 10:30 to 11:30. K1 already holds a result for&nbsp; 10:00 to 11:00. So what should happen? Option A,&nbsp;&nbsp;

- [00:29:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1765) an explicit conflict. Option B, move B-001&nbsp; to 10:30. Option C, a new booking for 10:30.&nbsp;&nbsp;

- [00:29:34](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1774) Booking looks up K1, sees that it was used&nbsp; for 10:00 to 11:00, and refuses: conflict,&nbsp;&nbsp;

- [00:29:40](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1780) key reused with a different payload. Nothing&nbsp; is stored, and nothing else changes at all.&nbsp;&nbsp;

- [00:29:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1787) Silently treating the changed request as the old&nbsp; one would hide a real mistake. So the right answer&nbsp;&nbsp;

- [00:29:53](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1793) is A, an explicit conflict, which code lines 3,&nbsp; 4 and 7 produce. The table shows the same handler&nbsp;&nbsp;

- [00:30:00](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1800) on 4 requests, with results checked by running&nbsp; it. Ari with K1 and the same request gets the&nbsp;&nbsp;

- [00:30:07](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1807) original result back. Ari with K1 and a different&nbsp; request gets the conflict. But Bo, using the same&nbsp;&nbsp;

- [00:30:14](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1814) text K1, starts a new operation, because a key&nbsp; belongs to a requester and 1 intended action.&nbsp;&nbsp;

- [00:30:20](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1820) And with nothing stored yet, K1 simply starts a&nbsp; new operation. After that, R-01 decides about the&nbsp;&nbsp;

- [00:30:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1826) booking itself, as usual. Here is the principle:&nbsp; retries need defined semantics for identity,&nbsp;&nbsp;

- [00:30:34](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1834) repeated effects, and uncertain outcomes.&nbsp; In short, give each operation an identity,&nbsp;&nbsp;

- [00:30:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1839) so a retry cannot double it. Before&nbsp; the next scene, 1 page sorts out the&nbsp;&nbsp;

- [00:30:45](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1845) answers a requester can get, because&nbsp; an error message is not always a no.&nbsp;&nbsp;

- [00:30:51](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1851) Ari asked for C101 from 10:00 to 11:00. Here&nbsp; are 4 answers Ari could get, and each one says&nbsp;&nbsp;

- [00:30:57](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1857) something different about the write. 3 come&nbsp; from Booking, and 1 only from Ari's clock.&nbsp;&nbsp;

- [00:31:03](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1863) For each one, ask 2 questions before&nbsp; you open it: was the booking stored,&nbsp;&nbsp;

- [00:31:08](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1868) and what should happen next? The first&nbsp; answer is Rejected, booking conflict.&nbsp;&nbsp;

- [00:31:14](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1874) This is a response from Booking, and it&nbsp; is a decision. No booking was stored:&nbsp;&nbsp;

- [00:31:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1879) Booking checked R-01 and the answer is no.&nbsp; The same request would get the same answer.&nbsp;&nbsp;

- [00:31:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1886) Second: service unavailable. It is also a response&nbsp; from Booking, and our contract sends it only&nbsp;&nbsp;

- [00:31:31](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1891) before any decision. So nothing was stored,&nbsp; and a later retry with the same key is safe.&nbsp;&nbsp;

- [00:31:38](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1898) Notice where that certainty came from:&nbsp; the contract. Without that promise,&nbsp;&nbsp;

- [00:31:42](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1902) service unavailable would leave you&nbsp; guessing. Next, an unexpected server error.&nbsp;&nbsp;

- [00:31:49](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1909) This is a response, but not a decision. The&nbsp; failure may have happened after the write,&nbsp;&nbsp;

- [00:31:53](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1913) so nobody knows whether B-001 is in the&nbsp; database. For now, the outcome is unknown.&nbsp;&nbsp;

- [00:32:01](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1921) And the last one: no answer before the timeout.&nbsp; This one comes only from Ari's clock. The request&nbsp;&nbsp;

- [00:32:06](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1926) may be lost, still running, or stored with&nbsp; its answer lost, just like in the opening.&nbsp;&nbsp;

- [00:32:13](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1933) So 2 of the 4 leave the write unknown. For those,&nbsp; the safe next step is to ask, or to retry with the&nbsp;&nbsp;

- [00:32:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1939) same key, never to assume that nothing happened.&nbsp; Now let's give the 3 observations their names.&nbsp;&nbsp;

- [00:32:27](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1947) A timeout is when the waiting side stops waiting.&nbsp; It is an observation at 1 boundary, nothing more.&nbsp;&nbsp;

- [00:32:33](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1953) A failure is a response that reports a problem,&nbsp; and it says only what its contract promises.&nbsp;&nbsp;

- [00:32:40](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1960) An unknown outcome means the requester cannot tell&nbsp; whether the write happened. So an error message&nbsp;&nbsp;

- [00:32:46](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1966) is not always a no, and an operation key turns&nbsp; an unknown outcome into a safe question. Next,&nbsp;&nbsp;

- [00:32:52](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1972) the email that follows every booking. Scene 6:&nbsp; a confirmed booking and a pending email can both&nbsp;&nbsp;

- [00:32:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1979) be true. B-001 and its confirmation email,&nbsp; N-001, are 2 separate facts on 2 timelines.&nbsp;&nbsp;

- [00:33:08](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1988) Right now B-001 is confirmed, and N-001 has not&nbsp; been delivered. Did the booking fail? Option A,&nbsp;&nbsp;

- [00:33:15](https://www.youtube.com/watch?v=r3lQevA-vtY&t=1995) yes: no email means no booking. Option B, no:&nbsp; the booking and the email are separate facts.&nbsp;&nbsp;

- [00:33:21](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2001) Option C, only if the email bounces. Think&nbsp; about what Ari can rely on at this moment.&nbsp;&nbsp;

- [00:33:29](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2009) The booking timeline says confirmed, and the&nbsp; notification timeline says pending. Ari is told:&nbsp;&nbsp;

- [00:33:35](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2015) your booking is confirmed, and the email is on its&nbsp; way. Support sees N-001 waiting for delivery. Both&nbsp;&nbsp;

- [00:33:43](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2023) views are honest, and neither hides the other.&nbsp; That is rule R-04 at work. Now attempt 1 fails,&nbsp;&nbsp;

- [00:33:51](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2031) because the mail provider is unavailable. The&nbsp; booking line does not move at all, and Ari is&nbsp;&nbsp;

- [00:33:56](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2036) told the booking is confirmed and the email is&nbsp; late. Support sees the failure: N-001 failed once,&nbsp;&nbsp;

- [00:34:04](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2044) and a retry comes later. Pending work that&nbsp; failed stays visible, so someone can act on it.&nbsp;&nbsp;

- [00:34:10](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2050) The second attempt is delivered. Now both records&nbsp; are complete, and Ari's inbox finally shows the&nbsp;&nbsp;

- [00:34:16](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2056) confirmation email. The table lists what each&nbsp; combination means. Confirmed with pending: the&nbsp;&nbsp;

- [00:34:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2065) booking is confirmed and the email is on its way.&nbsp; Confirmed with failed delivery: confirmed, and the&nbsp;&nbsp;

- [00:34:31](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2071) email is late. Booking confirmed, email delivered:&nbsp; everything is done. And a rejected request creates&nbsp;&nbsp;

- [00:34:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2079) no notification, because no booking was made at&nbsp; all. So the answer was B. Confirmation depends on&nbsp;&nbsp;

- [00:34:46](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2086) the booking decision; the email may finish&nbsp; later, and it stays visible until it does.&nbsp;&nbsp;

- [00:34:52](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2092) This is sometimes called eventual consistency: the&nbsp; email catches up with the booking a little later.&nbsp;&nbsp;

- [00:34:58](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2098) That is fine for an email, but never&nbsp; for the no overlap decision itself.&nbsp;&nbsp;

- [00:35:03](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2103) Delayed work brings a new question: what&nbsp; if the same email is attempted twice? In&nbsp;&nbsp;

- [00:35:08](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2108) Duplicate attempt, N-001 is sent a second&nbsp; time, and the booking does not change.&nbsp;&nbsp;

- [00:35:15](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2115) 2 handlers stand side by side. What should&nbsp; the second attempt do? Option A, send again,&nbsp;&nbsp;

- [00:35:21](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2121) because duplicates are harmless. Option B,&nbsp; cancel the booking. Option C, nothing new,&nbsp;&nbsp;

- [00:35:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2126) because N-001 is already delivered.&nbsp; Decide before the second attempt comes in.&nbsp;&nbsp;

- [00:35:34](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2134) The first attempt goes through the same&nbsp; way in both handlers: each delivers N-001,&nbsp;&nbsp;

- [00:35:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2139) and Ari gets exactly 1 email so far. Then attempt&nbsp; 2 arrives. The first handler checks first, finds&nbsp;&nbsp;

- [00:35:46](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2146) N-001 already delivered, and does nothing. The&nbsp; second handler always sends, so it sends again.&nbsp;&nbsp;

- [00:35:54](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2154) The result: 1 email on the left, but on the&nbsp; right a second email to Ari and 2 sends in&nbsp;&nbsp;

- [00:35:58](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2158) the log. So the answer was C: nothing new to do.&nbsp; B-001 stays confirmed in both handlers. Only the&nbsp;&nbsp;

- [00:36:06](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2166) handler decides whether repeat work is harmless,&nbsp; so write handlers that check first and act after.&nbsp;&nbsp;

- [00:36:13](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2173) 1 more danger is a crash. In Crashes&nbsp; and the outbox, a process crashes at 3&nbsp;&nbsp;

- [00:36:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2179) different moments. On the left, the email&nbsp; is written separately from the booking.&nbsp;&nbsp;

- [00:36:24](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2184) Booking writes B-001 and commits. Then it writes&nbsp; the pending email in a second write. What survives&nbsp;&nbsp;

- [00:36:31](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2191) if the process crashes in between? Option A, B-001&nbsp; only. Option B, both of them survive. Option C,&nbsp;&nbsp;

- [00:36:38](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2198) neither survives. Decide using what you already&nbsp; know about what a commit makes permanent.&nbsp;&nbsp;

- [00:36:46](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2206) The crash lands between the 2 writes. B-001 is&nbsp; committed, and the notification was never written.&nbsp;&nbsp;

- [00:36:53](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2213) The email is never attempted, and&nbsp; nothing shows that it is missing.&nbsp;&nbsp;

- [00:36:57](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2217) That is the worst kind of failure,&nbsp; a silent one, and the answer was A.&nbsp;&nbsp;

- [00:37:02](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2222) Now the design on the right,&nbsp; called a transactional outbox.&nbsp;&nbsp;

- [00:37:07](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2227) The booking B-001 and the pending notification&nbsp; N-001 are committed together, in 1 transaction.&nbsp;&nbsp;

- [00:37:15](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2235) A worker delivers the notification later. Crash&nbsp; after the commit, before delivery: both B-001 and&nbsp;&nbsp;

- [00:37:22](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2242) the pending N-001 survive. After the restart, the&nbsp; worker finds N-001 and delivers it. A crash after&nbsp;&nbsp;

- [00:37:30](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2250) sending, but before N-001 is marked delivered?&nbsp; The worker comes back up and sends it again:&nbsp;&nbsp;

- [00:37:37](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2257) delivery attempt number 2. So the outbox keeps&nbsp; the work discoverable, and the email goes out&nbsp;&nbsp;

- [00:37:43](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2263) at least once, sometimes twice. The handler still&nbsp; has to tolerate a repeat, as you saw a moment ago.&nbsp;&nbsp;

- [00:37:50](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2270) In practice, work waiting in a queue commonly&nbsp; runs on RabbitMQ or Kafka. The queue moves the&nbsp;&nbsp;

- [00:37:56](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2276) work, but it does not decide what a repeat&nbsp; should do. That stays your design decision.&nbsp;&nbsp;

- [00:38:02](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2282) Here is the principle: asynchronous work&nbsp; changes the timing and failure contract;&nbsp;&nbsp;

- [00:38:07](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2287) it does not remove responsibility for completion.&nbsp; In short, later work is still your work:&nbsp;&nbsp;

- [00:38:13](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2293) track it until done. So far, everything happened&nbsp; inside 1 contract between the browser and Booking.&nbsp;&nbsp;

- [00:38:21](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2301) Let's look at that contract, and&nbsp; at what happens when it changes.&nbsp;&nbsp;

- [00:38:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2306) Scene 7: an added field and a changed meaning&nbsp; are not equivalent. On the left is the booking&nbsp;&nbsp;

- [00:38:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2312) contract between Booking and everything that&nbsp; calls it. Every booking request is a POST to&nbsp;&nbsp;

- [00:38:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2319) /bookings. Let's make the contract concrete, one&nbsp; part at a time, starting with what a caller sends.&nbsp;&nbsp;

- [00:38:46](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2326) The request has 4 fields: room_id, C101; start&nbsp; and end, 10:00 and 11:00; and the operation_key,&nbsp;&nbsp;

- [00:38:51](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2331) K1. That key is the retry identity from scene 5.&nbsp; Identity is not a field. The signed in requester&nbsp;&nbsp;

- [00:38:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2339) comes from Identity, never from a field the&nbsp; browser fills in. Otherwise anyone could type&nbsp;&nbsp;

- [00:39:05](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2345) someone else's name. The response has 2 fields:&nbsp; booking_id, B-001, and outcome, Confirmed. The&nbsp;&nbsp;

- [00:39:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2352) panel at the top right shows the response exactly&nbsp; as Booking sends it. Then come 4 error meanings,&nbsp;&nbsp;

- [00:39:20](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2360) each with a defined when. Invalid request, when&nbsp; a field is missing or the times are malformed.&nbsp;&nbsp;

- [00:39:27](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2367) Not permitted, when the requester may not do this.&nbsp; Booking conflict, when R-01 or R-02 says no. And&nbsp;&nbsp;

- [00:39:34](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2374) service unavailable, which is sent only before any&nbsp; decision. The answers page relied on that promise.&nbsp;&nbsp;

- [00:39:41](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2381) Finally, the retry rule: repeat the same&nbsp; operation key with the same request to get&nbsp;&nbsp;

- [00:39:46](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2386) the original result. The same key with a different&nbsp; request counts as a conflict, never as a retry.&nbsp;&nbsp;

- [00:39:53](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2393) In practice, HTTP contracts like this one are&nbsp; often described in OpenAPI. An OpenAPI description&nbsp;&nbsp;

- [00:39:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2399) captures the operation, its fields, their types&nbsp; and the error responses. But it does not establish&nbsp;&nbsp;

- [00:40:06](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2406) who owns the booking, that bookings never overlap,&nbsp; or that a retry is safe. A schema describes shape,&nbsp;&nbsp;

- [00:40:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2412) and behavior needs checks of its own.&nbsp; 3 consumers read these answers, each in&nbsp;&nbsp;

- [00:40:18](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2418) its own way. The booking web app reads booking ID&nbsp; and outcome, and ignores fields it does not know.&nbsp;&nbsp;

- [00:40:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2425) The room door display reads only outcome,&nbsp; and shows a room as booked when outcome is&nbsp;&nbsp;

- [00:40:30](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2430) Confirmed. The nightly export reads every field,&nbsp; and rejects any field or value it does not know.&nbsp;&nbsp;

- [00:40:38](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2438) Today all 3 of them work. Now the first change.&nbsp; In Add a field, the response gains 1 more field,&nbsp;&nbsp;

- [00:40:43](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2443) called room_name. Which consumers keep working?&nbsp; Option A, all 3: adding is always safe. Option B,&nbsp;&nbsp;

- [00:40:51](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2451) the web app and the door display, while the&nbsp; strict export rejects it. Option C, none of them.&nbsp;&nbsp;

- [00:40:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2459) The producer adds room_name, with the value Room&nbsp; C101. Nothing else changes: the old fields keep&nbsp;&nbsp;

- [00:41:05](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2465) their names and their meanings. The booking web&nbsp; app was released together with the producer,&nbsp;&nbsp;

- [00:41:11](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2471) and shows the room name. The door display&nbsp; never reads room_name, so it works too.&nbsp;&nbsp;

- [00:41:18](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2478) But the nightly export rejects the unknown field,&nbsp; and the whole export fails. So the answer is B:&nbsp;&nbsp;

- [00:41:24](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2484) adding a field is safe only for consumers&nbsp; that ignore what they do not know.&nbsp;&nbsp;

- [00:41:30](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2490) Now a sneakier change. In Same field,&nbsp; new meaning, the bytes stay identical,&nbsp;&nbsp;

- [00:41:35](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2495) but outcome Confirmed is now sent as soon as&nbsp; a request arrives, before R-01 is checked.&nbsp;&nbsp;

- [00:41:41](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2501) What breaks? Option A, nothing, because&nbsp; the response looks the same. Option B,&nbsp;&nbsp;

- [00:41:46](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2506) only the export. Option C, every&nbsp; consumer, and every check still passes.&nbsp;&nbsp;

- [00:41:53](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2513) The response looks exactly as before: outcome,&nbsp; Confirmed. But it now arrives before the decision,&nbsp;&nbsp;

- [00:41:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2519) so Bo's overlapping request also gets Confirmed&nbsp; as its answer. Every consumer still parses it,&nbsp;&nbsp;

- [00:42:06](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2526) and every one is wrong. The web app&nbsp; tells Bo that the request went through,&nbsp;&nbsp;

- [00:42:10](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2530) the door display shows a booking that R-01 later&nbsp; rejects, and the export lists rejected requests.&nbsp;&nbsp;

- [00:42:18](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2538) So the answer is C. A changed&nbsp; meaning passes every shape check,&nbsp;&nbsp;

- [00:42:22](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2542) an OpenAPI description included, which makes&nbsp; it far more dangerous than an added field.&nbsp;&nbsp;

- [00:42:28](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2548) The next change is a new spelling of the status.&nbsp; In New status values, outcome Confirmed becomes&nbsp;&nbsp;

- [00:42:35](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2555) outcome CONFIRMED, in capital letters, in a single&nbsp; release. What does the door display do? Option A,&nbsp;&nbsp;

- [00:42:42](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2562) it shows the room as free, silently. Option B,&nbsp; it fails loudly. Option C, it keeps working.&nbsp;&nbsp;

- [00:42:50](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2570) In the abrupt change, the web app works&nbsp; because it was released together with the&nbsp;&nbsp;

- [00:42:55](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2575) producer. The door display compares outcome with&nbsp; Confirmed, finds no match, and shows C101 as free.&nbsp;&nbsp;

- [00:43:03](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2583) That is answer A: silently wrong, the worst&nbsp; kind of wrong. The nightly export at least&nbsp;&nbsp;

- [00:43:08](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2588) fails loudly, rejecting the unknown value. Now the&nbsp; same change as a transition, in 4 steps. Step one:&nbsp;&nbsp;

- [00:43:15](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2595) the export learns the new field and its&nbsp; value first, before anyone sends them.&nbsp;&nbsp;

- [00:43:21](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2601) Step 2: the producer sends a new field, status,&nbsp; beside outcome. Old readers still find outcome,&nbsp;&nbsp;

- [00:43:27](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2607) and the new status field says CONFIRMED. Step 3:&nbsp; each consumer moves to status in its own release.&nbsp;&nbsp;

- [00:43:35](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2615) Step 4: outcome is removed once no consumer reads&nbsp; it. No consumer broke along the way. Here is the&nbsp;&nbsp;

- [00:43:42](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2622) whole picture: each change, each consumer, and the&nbsp; assumption behind each cell. The assumptions sit&nbsp;&nbsp;

- [00:43:48](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2628) under the consumer names: ignore unknown fields,&nbsp; or reject them. Read the rows. An added field&nbsp;&nbsp;

- [00:43:55](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2635) works for 2 consumers and fails for the export.&nbsp; A new meaning is silently wrong everywhere.&nbsp;&nbsp;

- [00:44:00](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2640) The abrupt status change works, fails silently and&nbsp; fails loudly. The transition works everywhere. The&nbsp;&nbsp;

- [00:44:07](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2647) principle: compatibility is a relationship between&nbsp; actual producers and consumers, not a label on a&nbsp;&nbsp;

- [00:44:13](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2653) release. In short, ask who reads a field before&nbsp; you change it. 1 question remains: which structure&nbsp;&nbsp;

- [00:44:20](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2660) should Campus Rooms have, and how do you write&nbsp; that choice down? That is the last scene.&nbsp;&nbsp;

- [00:44:27](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2667) Scene 8: which structure protects the promises?&nbsp; On the right is decision record DR-002:&nbsp;&nbsp;

- [00:44:34](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2674) 1 modular application, an authoritative booking&nbsp; store and recoverable notification work.&nbsp;&nbsp;

- [00:44:40](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2680) It protects R-01 and R-04, and safe retries&nbsp; after a lost response. The diagram at the bottom&nbsp;&nbsp;

- [00:44:46](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2686) left shows the structure it chose. A diagram&nbsp; shows what was chosen; the record says why.&nbsp;&nbsp;

- [00:44:53](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2693) So which evidence supports this architecture?&nbsp; Option A, it is the most modern style. Option B,&nbsp;&nbsp;

- [00:44:58](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2698) it has the fewest boxes. Option&nbsp; C, the requirements it protects,&nbsp;&nbsp;

- [00:45:03](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2703) written as testable scenarios. Take a&nbsp; moment to choose before we open the record.&nbsp;&nbsp;

- [00:45:11](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2711) First, the context. 1 campus and 1 small&nbsp; team. Bookings must never overlap, even when&nbsp;&nbsp;

- [00:45:16](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2716) requests race. A failed email must never undo&nbsp; a booking, and a lost response must not create&nbsp;&nbsp;

- [00:45:22](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2722) a second booking. Then the decision. 1 modular&nbsp; application decides every booking in 1 database,&nbsp;&nbsp;

- [00:45:29](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2729) with an atomic interval rule. Each booking&nbsp; commits a pending notification beside it,&nbsp;&nbsp;

- [00:45:34](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2734) and requests carry operation keys. Now the most&nbsp; useful part, the quality scenarios. Each promise&nbsp;&nbsp;

- [00:45:41](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2741) becomes a situation you can test. QS-1: 2 people&nbsp; book overlapping times at once, and exactly 1 is&nbsp;&nbsp;

- [00:45:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2747) confirmed. QS-2: the mail provider is down for an&nbsp; hour, and bookings keep confirming while emails&nbsp;&nbsp;

- [00:45:55](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2755) wait. QS-3: a lost response and a retry return&nbsp; the original result. Each scenario names what&nbsp;&nbsp;

- [00:46:02](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2762) protects it: 1 atomic decision, notifications&nbsp; committed with the booking, and operation keys.&nbsp;&nbsp;

- [00:46:08](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2768) That is why the answer is C. The trade-offs come&nbsp; next. 1 deployable is simple to release and watch,&nbsp;&nbsp;

- [00:46:14](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2774) but it scales as 1 unit. The database is 1 shared&nbsp; dependency: while it is down, no booking is&nbsp;&nbsp;

- [00:46:20](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2780) decided. And Notification can move into its own&nbsp; worker later without changing the booking logic,&nbsp;&nbsp;

- [00:46:27](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2787) as in scene one. Ownership is clear: 1 team owns&nbsp; the application and the booking data. Next, what&nbsp;&nbsp;

- [00:46:34](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2794) happens when parts fail, decided in advance. Mail&nbsp; provider down: confirm, keep N-001 pending, and&nbsp;&nbsp;

- [00:46:41](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2801) retry. Database down: answer service unavailable&nbsp; and decide nothing. And a lost response:&nbsp;&nbsp;

- [00:46:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2807) the browser retries with the same key. These are&nbsp; the answers you built up in scenes 2, 5 and 6.&nbsp;&nbsp;

- [00:46:54](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2814) Last, revisit when: the changes that would reopen&nbsp; this decision. Notification volume growing on its&nbsp;&nbsp;

- [00:47:00](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2820) own, several independently operated campuses,&nbsp; or another team releasing on its own schedule.&nbsp;&nbsp;

- [00:47:07](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2827) The record also says what it is not: a teaching&nbsp; baseline for this case, not a prescription for&nbsp;&nbsp;

- [00:47:13](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2833) every system. Now let's see one of its triggers&nbsp; in action. In Several campuses, Campus Rooms now&nbsp;&nbsp;

- [00:47:20](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2840) serves several independently operated campuses,&nbsp; each with its own rooms, staff and operations.&nbsp;&nbsp;

- [00:47:26](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2846) What should happen to DR-002? Option A, keep it,&nbsp; since it has worked so far. Option B, reopen it,&nbsp;&nbsp;

- [00:47:33](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2853) because one of its revisit triggers fired.&nbsp; Option C, replace it with services everywhere.&nbsp;&nbsp;

- [00:47:40](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2860) The trigger, several independently operated&nbsp; campuses, fires, and the status turns to&nbsp;&nbsp;

- [00:47:45](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2865) Revisit due. The record told us in advance&nbsp; when to come back to it. The answer is B.&nbsp;&nbsp;

- [00:47:51](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2871) Reopening it means reconsidering 4 questions. Who&nbsp; owns each campus's booking data? And where is the&nbsp;&nbsp;

- [00:47:57](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2877) authoritative no overlap decision made for each&nbsp; room? What does a booking mean while 2 campuses&nbsp;&nbsp;

- [00:48:04](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2884) cannot reach each other? And which contracts&nbsp; does each campus offer, and who may change them?&nbsp;&nbsp;

- [00:48:11](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2891) Consistency across distant sites is not solved&nbsp; in this lecture. The record names the questions&nbsp;&nbsp;

- [00:48:17](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2897) and keeps the decision open, and that honesty is&nbsp; part of a good record. The principle: architecture&nbsp;&nbsp;

- [00:48:23](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2903) decisions should explain which requirements&nbsp; they protect and which assumptions would change&nbsp;&nbsp;

- [00:48:29](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2909) the choice. In short, write down what a choice&nbsp; protects and what would change it. That completes&nbsp;&nbsp;

- [00:48:36](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2916) the 8 scenes. The next page collects their&nbsp; principles, with 6 questions to check yourself.&nbsp;&nbsp;

- [00:48:44](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2924) Here are the 8 principles of this lecture,&nbsp; one per scene. One: architecture views should&nbsp;&nbsp;

- [00:48:49](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2929) state their level, because a box on its&nbsp; own says nothing about where it runs. 2:&nbsp;&nbsp;

- [00:48:55](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2935) interaction structure decides which failures reach&nbsp; which promises. 3: choose deployment boundaries&nbsp;&nbsp;

- [00:49:01](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2941) for needs you can demonstrate. 4: a shared rule&nbsp; needs enforcement that survives interleavings. 5:&nbsp;&nbsp;

- [00:49:09](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2949) retries need an identity, defined repeat effects,&nbsp; and a plan for uncertain outcomes. 6: asynchronous&nbsp;&nbsp;

- [00:49:17](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2957) work stays your responsibility until it completes.&nbsp; 7: compatibility depends on real consumers. 8:&nbsp;&nbsp;

- [00:49:24](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2964) a decision record says what it protects and&nbsp; what would change it. Now 6 checks. Decide&nbsp;&nbsp;

- [00:49:30](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2970) your answer before each one opens. Check one:&nbsp; why can 2 availability checks both return true?&nbsp;&nbsp;

- [00:49:37](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2977) Because they can observe the same earlier state&nbsp; before either write has been enforced. That was&nbsp;&nbsp;

- [00:49:43](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2983) the race you saw in scene 4, between Ari and&nbsp; Bo. Check 2: why not block confirmation on&nbsp;&nbsp;

- [00:49:50](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2990) every notification attempt? Because it couples&nbsp; the booking promise to an outside dependency&nbsp;&nbsp;

- [00:49:55](https://www.youtube.com/watch?v=r3lQevA-vtY&t=2995) without need, under R-04. Separate work still&nbsp; needs reliable tracking, as the pending email&nbsp;&nbsp;

- [00:50:02](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3002) showed. Check 3: what should happen when an&nbsp; operation key is reused with a different payload?&nbsp;&nbsp;

- [00:50:11](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3011) A defined conflict or rejection, never silently&nbsp; treating the altered request as the original&nbsp;&nbsp;

- [00:50:17](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3017) operation. Check 4: is a C4 container always&nbsp; a Docker container? It is not. In that model,&nbsp;&nbsp;

- [00:50:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3025) a container is an application or a data&nbsp; store boundary, not a specific packaging&nbsp;&nbsp;

- [00:50:29](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3029) format. Check 5: what survives a crash after an&nbsp; atomic booking and pending notification commit?&nbsp;&nbsp;

- [00:50:38](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3038) The booking and the pending work both stay&nbsp; recorded. Delivery still needs recovery,&nbsp;&nbsp;

- [00:50:43](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3043) and a later retry can repeat a delivery attempt.&nbsp;&nbsp;

- [00:50:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3047) And the last check leaves room booking behind.&nbsp; A batch importer crashes after storing an entry,&nbsp;&nbsp;

- [00:50:53](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3053) but before marking its input&nbsp; complete. What makes a restart safe?&nbsp;&nbsp;

- [00:50:59](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3059) Give the intended operation a stable identity,&nbsp; and tie its effect to durable completion evidence,&nbsp;&nbsp;

- [00:51:05](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3065) or make a replay produce the same outcome again.&nbsp; A crash does not show that no write happened,&nbsp;&nbsp;

- [00:51:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3072) and reusing an identity for changed input needs&nbsp; an explicit policy. It is the lesson of scene 5,&nbsp;&nbsp;

- [00:51:18](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3078) in a new setting. The last page lists what carries&nbsp; forward to next week, the terms of this lecture,&nbsp;&nbsp;

- [00:51:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3085) and where to read more. Week 7 begins with this&nbsp; question: how can several people change 1 system&nbsp;&nbsp;

- [00:51:32](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3092) without losing intent or trust? 3 things carry&nbsp; forward: the booking contract with its retry rule,&nbsp;&nbsp;

- [00:51:39](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3099) decision record DR-002 with its revisit triggers,&nbsp; and 1 atomic decision per room for R-01.&nbsp;&nbsp;

- [00:51:47](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3107) In practice, as of 2026: HTTP contracts are&nbsp; often described in OpenAPI, and PostgreSQL&nbsp;&nbsp;

- [00:51:54](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3114) can enforce no overlap for time ranges with an&nbsp; exclusion constraint. Work in a queue commonly&nbsp;&nbsp;

- [00:52:01](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3121) runs on RabbitMQ or Kafka, and services&nbsp; ship as Docker images, a packaging format,&nbsp;&nbsp;

- [00:52:06](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3126) not the containers of the C4 model. In the middle&nbsp; are the terms of this week, from architecture&nbsp;&nbsp;

- [00:52:12](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3132) view and system context to idempotent,&nbsp; operation key and transactional outbox.&nbsp;&nbsp;

- [00:52:19](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3139) And on the right are the sources: the C4 model&nbsp; by Simon Brown, the HTTP semantics standard,&nbsp;&nbsp;

- [00:52:25](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3145) the PostgreSQL documentation on transaction&nbsp; isolation, and the OpenAPI specification.&nbsp;&nbsp;

- [00:52:31](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3151) So today you followed 1 lost answer&nbsp; through a whole system: what a box means,&nbsp;&nbsp;

- [00:52:35](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3155) what a request waits for, how a race breaks&nbsp; a rule, and how a key makes a retry safe.&nbsp;&nbsp;

- [00:52:41](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3161) And you saw how pending work, contracts and&nbsp; decision records keep these promises over&nbsp;&nbsp;

- [00:52:46](https://www.youtube.com/watch?v=r3lQevA-vtY&t=3166) time. Thank you for watching,&nbsp; and I will see you in week 7.
