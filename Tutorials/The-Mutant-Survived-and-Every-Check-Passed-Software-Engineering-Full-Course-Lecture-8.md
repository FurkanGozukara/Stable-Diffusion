# The Mutant Survived and Every Check Passed | Software Engineering Full Course, Lecture 8

## Full tutorial link > https://www.youtube.com/watch?v=F6rv0ZSmmbs

[![The Mutant Survived and Every Check Passed | Software Engineering Full Course, Lecture 8](https://i.ytimg.com/vi_webp/F6rv0ZSmmbs/maxresdefault.webp)](https://www.youtube.com/watch?v=F6rv0ZSmmbs "The Mutant Survived and Every Check Passed | Software Engineering Full Course, Lecture 8")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/The-Mutant-Survived-and-Every-Check-Passed-Software-Engineering-Full-Course-Lecture-8.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/The-Mutant-Survived-and-Every-Check-Passed-Software-Engineering-Full-Course-Lecture-8.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Lecture 8 of the Software Engineering course. The booking rule of Campus Rooms, a fictional room-booking service, allows 30 through 120 minutes. Its one check passes and every line runs, yet Ari's 120-minute booking is refused. Interactive scenes show which checks challenge your assumptions and which merely repeat them.

Links:

SECourses Patreon: [ [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses) ]

SECourses Discord: [ [https://discord.com/servers/software-engineering-courses-secourses-772774097734074388](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) ]

You will derive ordinary, boundary and invalid cases from a rule, choose a test scope and say what it leaves open, tell executing code from asserting a result, write an independent oracle, state properties and shrink a failure, read coverage and mutation results, control a clock and judge evidence.

Topics: software testing, boundary value analysis, equivalence partitioning, unit, component and contract tests, test doubles, exploratory testing, test oracles, property-based testing, fuzzing, code coverage, mutation testing, flaky tests, test-first development.

Jump to any scene, the questions, the principles or the sources.

Chapters:

[00:00:00](https://youtu.be/F6rv0ZSmmbs?t=0) A green check: why was Ari's booking refused?

[00:00:41](https://youtu.be/F6rv0ZSmmbs?t=41) Run the check: every line executed, nothing looks wrong

[00:01:03](https://youtu.be/F6rv0ZSmmbs?t=63) Predict: will the 120-minute booking go through?

[00:01:14](https://youtu.be/F6rv0ZSmmbs?t=74) Ari presses Book: rejected, and the screen offered it

[00:01:54](https://youtu.be/F6rv0ZSmmbs?t=114) From requirements to the checks themselves

[00:02:31](https://youtu.be/F6rv0ZSmmbs?t=151) The four rules under test today

[00:02:59](https://youtu.be/F6rv0ZSmmbs?t=179) How to read an assertion and half-open intervals

[00:03:34](https://youtu.be/F6rv0ZSmmbs?t=214) Scene 1: sixty minutes passes, is the rule right?

[00:04:07](https://youtu.be/F6rv0ZSmmbs?t=247) Predict: does one passing example settle it?

[00:04:32](https://youtu.be/F6rv0ZSmmbs?t=272) A second comparison also accepts 60

[00:04:53](https://youtu.be/F6rv0ZSmmbs?t=293) Walk the lower edge, then 119

[00:05:12](https://youtu.be/F6rv0ZSmmbs?t=312) Predict: what does the code answer at 120?

[00:05:35](https://youtu.be/F6rv0ZSmmbs?t=335) The reveal: one character refuses 120

[00:06:23](https://youtu.be/F6rv0ZSmmbs?t=383) Inclusive fix: which two cases prove the limit survived?

[00:07:22](https://youtu.be/F6rv0ZSmmbs?t=442) No upper limit: why 120 alone is not enough

[00:08:19](https://youtu.be/F6rv0ZSmmbs?t=499) Scene 2: do you have to test every minute?

[00:08:54](https://youtu.be/F6rv0ZSmmbs?t=534) Three groups, one expected answer each

[00:09:06](https://youtu.be/F6rv0ZSmmbs?t=546) One value per group still misses the defect

[00:09:30](https://youtu.be/F6rv0ZSmmbs?t=570) The two edges where the answer changes

[00:09:49](https://youtu.be/F6rv0ZSmmbs?t=589) Shape and order are separate concerns

[00:10:34](https://youtu.be/F6rv0ZSmmbs?t=634) A labeled 90-minute trial: which cases keep their job?

[00:11:49](https://youtu.be/F6rv0ZSmmbs?t=709) Scene 3: can two people still get one room?

[00:12:35](https://youtu.be/F6rv0ZSmmbs?t=755) Unit check: exact arithmetic, nothing about storage

[00:13:00](https://youtu.be/F6rv0ZSmmbs?t=780) Component check, one request at a time

[00:13:13](https://youtu.be/F6rv0ZSmmbs?t=793) Concurrent check: two confirmations, and the unit check stays green

[00:13:46](https://youtu.be/F6rv0ZSmmbs?t=826) Journey check: the whole path, slowly

[00:14:21](https://youtu.be/F6rv0ZSmmbs?t=861) Test double: what you gain and what stays unknown

[00:15:21](https://youtu.be/F6rv0ZSmmbs?t=921) Contract mismatch: the provider raises into booking

[00:16:27](https://youtu.be/F6rv0ZSmmbs?t=987) Exploring the journey: how do you recover from a lost response?

[00:16:58](https://youtu.be/F6rv0ZSmmbs?t=1018) Reopen the booking: stored Confirmed, screen says Submitting

[00:17:31](https://youtu.be/F6rv0ZSmmbs?t=1051) Keep the discovery as a regression check

[00:17:42](https://youtu.be/F6rv0ZSmmbs?t=1062) Scripted checks, exploration and usability studies

[00:18:20](https://youtu.be/F6rv0ZSmmbs?t=1100) Scene 4: who checked the expected answer?

[00:19:05](https://youtu.be/F6rv0ZSmmbs?t=1145) Follow the 119 through two cards

[00:19:26](https://youtu.be/F6rv0ZSmmbs?t=1166) Derive the expected answer from R-02, and by hand

[00:19:57](https://youtu.be/F6rv0ZSmmbs?t=1197) The test oracle

[00:20:17](https://youtu.be/F6rv0ZSmmbs?t=1217) The helper changes: one check always passes

[00:21:16](https://youtu.be/F6rv0ZSmmbs?t=1276) One assistant drafted the code and the tests

[00:22:15](https://youtu.be/F6rv0ZSmmbs?t=1335) Scene 5: what must stay true after any accepted booking?

[00:22:57](https://youtu.be/F6rv0ZSmmbs?t=1377) Four candidates and two properties

[00:24:01](https://youtu.be/F6rv0ZSmmbs?t=1441) Rejects adjacency: P1 holds, P2 fails

[00:24:57](https://youtu.be/F6rv0ZSmmbs?t=1497) Six generated bookings shrink to the smallest failure

[00:25:52](https://youtu.be/F6rv0ZSmmbs?t=1552) Fuzzing: malformed text and a crash

[00:27:01](https://youtu.be/F6rv0ZSmmbs?t=1621) Scene 6: the line ran, did anything check its answer?

[00:27:41](https://youtu.be/F6rv0ZSmmbs?t=1661) Two of two lines, and nobody looked at the answer

[00:28:04](https://youtu.be/F6rv0ZSmmbs?t=1684) One assertion: same coverage, a failing run

[00:28:30](https://youtu.be/F6rv0ZSmmbs?t=1710) Mutation: the mutant survives without a 120 case

[00:29:27](https://youtu.be/F6rv0ZSmmbs?t=1767) Add one case: mutant detected

[00:30:13](https://youtu.be/F6rv0ZSmmbs?t=1813) An equivalent mutant and the score

[00:31:12](https://youtu.be/F6rv0ZSmmbs?t=1872) Scene 7: same code, same check, different result

[00:31:58](https://youtu.be/F6rv0ZSmmbs?t=1918) The wall clock crosses the start

[00:32:48](https://youtu.be/F6rv0ZSmmbs?t=1968) A fixed clock: five identical runs

[00:33:35](https://youtu.be/F6rv0ZSmmbs?t=2015) Waiting and hoping against an injected failure

[00:35:00](https://youtu.be/F6rv0ZSmmbs?t=2100) Scene 8: what should happen before you fix the bug?

[00:35:32](https://youtu.be/F6rv0ZSmmbs?t=2132) Reproduce, shrink, one hypothesis, confirm

[00:36:15](https://youtu.be/F6rv0ZSmmbs?t=2175) A focused failing check and the smallest change

[00:36:57](https://youtu.be/F6rv0ZSmmbs?t=2217) Check first: test-first development

[00:37:47](https://youtu.be/F6rv0ZSmmbs?t=2267) Refactor under the checks, and what stays open

[00:38:47](https://youtu.be/F6rv0ZSmmbs?t=2327) Review, static analysis and a dynamic check

[00:39:30](https://youtu.be/F6rv0ZSmmbs?t=2370) A contract answers to the requirement

[00:39:56](https://youtu.be/F6rv0ZSmmbs?t=2396) Claim, evidence and what stays open

[00:41:01](https://youtu.be/F6rv0ZSmmbs?t=2461) The eight principles

[00:41:39](https://youtu.be/F6rv0ZSmmbs?t=2499) Six checks with answers

[00:42:43](https://youtu.be/F6rv0ZSmmbs?t=2563) Outside room booking: a file converter that checks itself

[00:43:26](https://youtu.be/F6rv0ZSmmbs?t=2606) Next: what if the input cannot be trusted?

[00:43:52](https://youtu.be/F6rv0ZSmmbs?t=2632) Tools in practice, terms and sources

[00:44:44](https://youtu.be/F6rv0ZSmmbs?t=2684) What you can do now

Music: Stellar Wind by Unicorn Heads, The Engagement by Silent Partner, Night Run Away by An Jone, Chicago by Joe Bagale, Call The Shots by Slynk, Phase Three by Huma-Huma, World Map by Jason Farnham, Bright Future by Silent Partner.

Every name, number and booking is a teaching example from the fictional Campus Rooms service.

Questions and updates: the links above and the comments below. Thank you for watching.



### Video Transcription


- [00:00:08](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=8) Greetings everyone. This is week 8 of the Software&nbsp; Engineering course. Today I am going to show you&nbsp;&nbsp;

- [00:00:14](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=14) why a green check can still hide a broken rule,&nbsp; and how to find the checks that challenge you.&nbsp;&nbsp;

- [00:00:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=20) Here is the rule, R-02, from Campus Rooms,&nbsp; the fictional booking service of this course.&nbsp;&nbsp;

- [00:00:26](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=26) A booking lasts 30 through 120 minutes, including&nbsp; both limits. The code shipped with 1 check. It&nbsp;&nbsp;

- [00:00:33](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=33) asks duration_ok about 60 minutes and expects&nbsp; true. You will read many checks like this one&nbsp;&nbsp;

- [00:00:40](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=40) today. Let's run it. One of 1 checks passed,&nbsp; and the report says every line of the function&nbsp;&nbsp;

- [00:00:45](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=45) executed. Nothing here looks wrong, and many teams&nbsp; would stop right here. Now look at what Ari sees.&nbsp;&nbsp;

- [00:00:53](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=53) Ari wants room C101 from 10:00 to 12:00, which is&nbsp; 120 minutes, and the screen itself says: choose&nbsp;&nbsp;

- [00:01:00](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=60) 30 to 120 minutes. So decide before the reveal.&nbsp; The check is green. Will Ari's 120 minute booking&nbsp;&nbsp;

- [00:01:08](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=68) go through? Pause the video for a moment and make&nbsp; your prediction. Let's send it. Ari presses Book,&nbsp;&nbsp;

- [00:01:16](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=76) and the answer comes back: rejected, 120 minutes.&nbsp; The screen offers that duration, and the code says&nbsp;&nbsp;

- [00:01:23](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=83) no. The check told the truth, and only about 60&nbsp; minutes. Nobody asked it about 120, the one value&nbsp;&nbsp;

- [00:01:31](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=91) where this code goes wrong. That leads to the&nbsp; question for today. Which checks would challenge&nbsp;&nbsp;

- [00:01:37](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=97) our assumptions, rather than merely repeat them?&nbsp; Every scene of this lecture answers 1 piece of&nbsp;&nbsp;

- [00:01:43](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=103) that question. The arrow buttons at the top right&nbsp; of the deck move between pages. The next page&nbsp;&nbsp;

- [00:01:49](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=109) shows where this week fits with what you already&nbsp; know. Week 2 linked requirements to checks,&nbsp;&nbsp;

- [00:01:56](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=116) and week 7 had reviewers read those checks. This&nbsp; week the checks themselves are under examination,&nbsp;&nbsp;

- [00:02:03](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=123) because a link to a weak check gives you very&nbsp; little. By the end you will derive ordinary,&nbsp;&nbsp;

- [00:02:09](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=129) boundary and invalid cases from a stated rule, and&nbsp; you will choose a suitable scope for a check and&nbsp;&nbsp;

- [00:02:15](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=135) say what it leaves open. You will tell executing&nbsp; code apart from asserting the intended result,&nbsp;&nbsp;

- [00:02:22](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=142) explain a property and a small mutation&nbsp; challenge, and recognize shared assumptions,&nbsp;&nbsp;

- [00:02:27](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=147) uncontrolled inputs and flaky observations.&nbsp; These are the rules you will test. R-01:&nbsp;&nbsp;

- [00:02:34](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=154) no overlapping confirmed bookings in 1 room,&nbsp; and adjacent bookings are allowed. R-02 is&nbsp;&nbsp;

- [00:02:40](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=160) the duration rule you just saw. R-03: you can&nbsp; cancel your own future confirmed booking. R-04:&nbsp;&nbsp;

- [00:02:49](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=169) a failed notification leaves a confirmed&nbsp; booking confirmed. Each one gets challenged&nbsp;&nbsp;

- [00:02:55](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=175) in a different way today. A check is written&nbsp; as an assertion. Read this one in plain words:&nbsp;&nbsp;

- [00:03:02](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=182) call the function with 60, and the answer must&nbsp; be true. If it is anything else, the check fails.&nbsp;&nbsp;

- [00:03:09](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=189) And the bracket notation you will see on intervals&nbsp; means the start is included and the end is not,&nbsp;&nbsp;

- [00:03:14](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=194) the half open intervals from week 1. So 10:00&nbsp; to 11:00 and 11:00 to 12:00 do not overlap at&nbsp;&nbsp;

- [00:03:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=200) all. Keep the question of this lecture in front of&nbsp; you: which checks would challenge our assumptions,&nbsp;&nbsp;

- [00:03:27](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=207) rather than merely repeat them? Let's start with&nbsp; the friendliest example you can imagine. Scene 1:&nbsp;&nbsp;

- [00:03:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=215) 60 minutes passes. Is the rule right? You will&nbsp; send duration cards through the comparison,&nbsp;&nbsp;

- [00:03:39](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=219) one at a time, and hold each answer against&nbsp; R-02. The cards wait on the left. In the middle&nbsp;&nbsp;

- [00:03:46](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=226) is the code under test, 30 less than or equal to&nbsp; minutes, less than 120. On the right, each card&nbsp;&nbsp;

- [00:03:53](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=233) lands in accepted or rejected, and stays there.&nbsp; The table below records what R-02 requires and&nbsp;&nbsp;

- [00:04:00](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=240) what this code answers. Decide first: a 60 minute&nbsp; request passes. Is the rule implemented correctly?&nbsp;&nbsp;

- [00:04:07](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=247) Option A, yes, the check is green. Option B,&nbsp; not known yet, because one example leaves the&nbsp;&nbsp;

- [00:04:13](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=253) other durations open. Option C, no, 60 should&nbsp; be refused. Pause the video and choose one.&nbsp;&nbsp;

- [00:04:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=260) Let's run 60. The Step button at the top right&nbsp; moves the demonstration forward by 1 state. 60&nbsp;&nbsp;

- [00:04:26](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=266) goes through the comparison and lands in accepted,&nbsp; and R-02 agrees. Now bring in a second comparison,&nbsp;&nbsp;

- [00:04:34](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=274) the one that ends in less than or equal to 120.&nbsp; It accepts 60 as well. This one example cannot&nbsp;&nbsp;

- [00:04:40](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=280) tell the 2 apart by itself. So the answer is B.&nbsp; A passing example tells you about that example.&nbsp;&nbsp;

- [00:04:47](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=287) To learn more, you need cases that could&nbsp; tell right from nearly right, on purpose.&nbsp;&nbsp;

- [00:04:52](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=292) Walk the lower edge. 29 is rejected, 30 and 31 are&nbsp; accepted, and every answer still agrees with R-02.&nbsp;&nbsp;

- [00:05:01](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=301) 119 is accepted too. Still no disagreement&nbsp; anywhere, and the upper limit is 1 minute&nbsp;&nbsp;

- [00:05:07](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=307) away. A lot of test suites stop around here.&nbsp; The next card is 120, the last value the rule&nbsp;&nbsp;

- [00:05:15](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=315) allows. The code under test uses less than 120.&nbsp; What does it answer here? Option A, accepted,&nbsp;&nbsp;

- [00:05:23](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=323) because R-02 includes 120. Option B, it depends&nbsp; on the room. Option C, rejected, because the&nbsp;&nbsp;

- [00:05:30](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=330) comparison leaves 120 out. Pause and choose. 120&nbsp; is rejected, and R-02 says accepted. So the right&nbsp;&nbsp;

- [00:05:39](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=339) answer was C. 1 character, less than instead of&nbsp; less than or equal, refuses the longest booking&nbsp;&nbsp;

- [00:05:45](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=345) the rule allows. Look at the second comparison in&nbsp; the same row: it accepts 120. For the first time,&nbsp;&nbsp;

- [00:05:52](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=352) the 2 comparisons give different answers, and 60&nbsp; could never have shown you that. 121 is rejected,&nbsp;&nbsp;

- [00:06:01](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=361) and that part is right. 1 row disagrees, and only&nbsp; a case at the edge could find it. That gives you&nbsp;&nbsp;

- [00:06:07](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=367) the principle of this scene. Test cases should&nbsp; distinguish plausible incorrect behavior from the&nbsp;&nbsp;

- [00:06:14](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=374) intended behavior. In short, pick the case that&nbsp; can tell right from nearly right. 60 is friendly.&nbsp;&nbsp;

- [00:06:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=380) 120 is useful. Now change 1 condition. The&nbsp; buttons under Condition switch the demonstration&nbsp;&nbsp;

- [00:06:28](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=388) to another case. Inclusive fix changes 1 character&nbsp; and keeps everything else. With less than or equal&nbsp;&nbsp;

- [00:06:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=395) in place, which 2 cases show the fix kept the&nbsp; upper limit? Option A, 120 and 121. Option B,&nbsp;&nbsp;

- [00:06:42](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=402) 60 and 119. Option C, 29 and 30. Pause here&nbsp; and pick the pair that could expose a fix&nbsp;&nbsp;

- [00:06:50](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=410) gone wrong. Run the same cards. Everything&nbsp; below the edge answers as it did before,&nbsp;&nbsp;

- [00:06:57](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=417) so those cards tell you nothing new about this&nbsp; fix. 120 is accepted now, and the disagreement is&nbsp;&nbsp;

- [00:07:04](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=424) gone. That is half of the answer, because a fix&nbsp; can repair one end and damage the other. 121 is&nbsp;&nbsp;

- [00:07:11](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=431) still rejected. The fix restored the endpoint and&nbsp; kept the limit. So the answer is A: 120 and 121,&nbsp;&nbsp;

- [00:07:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=440) read together. To see why both cases matter, take&nbsp; the last condition. Someone repairs the bug by&nbsp;&nbsp;

- [00:07:27](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=447) deleting the upper comparison altogether. Will the&nbsp; 120 card catch this? Option A, yes, it is the card&nbsp;&nbsp;

- [00:07:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=455) that failed before. Option B, no, it is accepted&nbsp; either way, so only 121 can catch this. Option C,&nbsp;&nbsp;

- [00:07:43](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=463) yes, any failing card will catch it. Take a moment&nbsp; and decide before the cards run. The cards below&nbsp;&nbsp;

- [00:07:50](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=470) the edge behave as before, and 120 is accepted.&nbsp; Seen alone, this version looks fixed, and that&nbsp;&nbsp;

- [00:07:57](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=477) is exactly the danger. 121 is accepted, and R-02&nbsp; says rejected. So B was the right answer. These 2&nbsp;&nbsp;

- [00:08:05](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=485) cases together separate an inclusive limit from no&nbsp; limit at all. You just found those cases by hand,&nbsp;&nbsp;

- [00:08:12](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=492) by walking every card. Next, a way to find them&nbsp; on purpose, without walking every value. Scene 2:&nbsp;&nbsp;

- [00:08:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=500) do you have to test every minute? Group the&nbsp; inputs that share 1 expected answer, then&nbsp;&nbsp;

- [00:08:25](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=505) look hardest where 1 answer becomes another. Here&nbsp; is a number line of durations in minutes, empty&nbsp;&nbsp;

- [00:08:32](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=512) for now. Checking every whole minute from 1 to 180&nbsp; takes 180 checks. What could replace most of them?&nbsp;&nbsp;

- [00:08:40](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=520) Option A, values chosen at random until 1 fails.&nbsp; Option B, the durations people pick most often.&nbsp;&nbsp;

- [00:08:46](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=526) Option C, 1 value per group of shared answers,&nbsp; plus the edges of each group. Pause and choose.&nbsp;&nbsp;

- [00:08:54](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=534) 3 groups appear, with 1 expected answer each. Too&nbsp; short is rejected, allowed is accepted, and too&nbsp;&nbsp;

- [00:09:00](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=540) long is rejected. Inside a group, the rule treats&nbsp; every value the same way. Take 1 value from each&nbsp;&nbsp;

- [00:09:07](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=547) group: 10, 60 and 150. all three agree with R-02.&nbsp; Now look at the last column: the code that leaves&nbsp;&nbsp;

- [00:09:14](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=554) out 120 passes all three. So one value per group&nbsp; is a good start, and it still misses the defect&nbsp;&nbsp;

- [00:09:21](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=561) from scene 1. The group tells you what to expect.&nbsp; It has no opinion about where the group ends. The&nbsp;&nbsp;

- [00:09:30](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=570) decision changes at 2 edges: 29 to 30, and 120&nbsp; to 121. A plausible mistake lives exactly there.&nbsp;&nbsp;

- [00:09:39](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=579) Add 31 and 119, just inside each edge, and you&nbsp; have the 6 edge cases of the first scene. So the&nbsp;&nbsp;

- [00:09:46](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=586) answer is C: groups, plus their edges. Not every&nbsp; bad request is a bad duration. The table adds a&nbsp;&nbsp;

- [00:09:52](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=592) second question: is this a valid request at all?&nbsp; Time order and shape are separate concerns. With&nbsp;&nbsp;

- [00:09:58](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=598) start before end, the duration decides: rejected,&nbsp; accepted, rejected. With end before start,&nbsp;&nbsp;

- [00:10:04](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=604) there is no duration to judge, so the reason is&nbsp; the order. A value like 45.5, or the word soon,&nbsp;&nbsp;

- [00:10:11](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=611) or nothing at all, is not a whole number of&nbsp; minutes. It is refused for a different reason,&nbsp;&nbsp;

- [00:10:17](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=617) so it needs its own case. Each group keeps its&nbsp; own expected answer and its reason. Partitions&nbsp;&nbsp;

- [00:10:24](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=624) organize expectations, and boundaries expose&nbsp; where 1 expectation becomes another. In short,&nbsp;&nbsp;

- [00:10:29](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=629) group the same answers, then test the edges.&nbsp; Now the rule itself moves. Trial at 90 lowers&nbsp;&nbsp;

- [00:10:36](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=636) the upper limit for a labeled, temporary trial.&nbsp; Only that limit changes. Which cases keep their&nbsp;&nbsp;

- [00:10:43](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=643) old job, and which ones change? Option A, 29, 30&nbsp; and 31, at the lower edge. Option B, all 6, as&nbsp;&nbsp;

- [00:10:50](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=650) they are. Option C, none, because a new rule needs&nbsp; all new cases. Stop here and choose. The allowed&nbsp;&nbsp;

- [00:10:58](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=658) group shrinks to 30 through 90, and the upper&nbsp; edge moves to 90 and 91. Look at the lower edge:&nbsp;&nbsp;

- [00:11:05](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=665) it stays exactly where it was. The table compares&nbsp; each case under both rules. The lower 3 keep their&nbsp;&nbsp;

- [00:11:11](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=671) answers and their job, so the right answer is A.&nbsp; 91, 119 and 120 change their answer. 89, 90 and&nbsp;&nbsp;

- [00:11:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=680) 91 become the new edge cases. A check written with&nbsp; the old limit would now fail, for a good reason.&nbsp;&nbsp;

- [00:11:28](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=688) The trial ends and 120 returns. The baseline cases&nbsp; and their answers come back exactly as they were,&nbsp;&nbsp;

- [00:11:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=695) and every later scene uses the rule as written.&nbsp; Groups and edges tell you which inputs to try.&nbsp;&nbsp;

- [00:11:42](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=702) They say nothing about where in the system to&nbsp; try them. That is the next question. Scene 3: the&nbsp;&nbsp;

- [00:11:50](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=710) overlap function passes. Can 2 people still get 1&nbsp; room? Every check observes part of the system, so&nbsp;&nbsp;

- [00:11:57](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=717) match what you want to know with where you should&nbsp; be looking. Here is the system: Ari's browser,&nbsp;&nbsp;

- [00:12:02](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=722) the booking handler, Policy with its pure&nbsp; functions, Storage, and the notification provider.&nbsp;&nbsp;

- [00:12:08](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=728) This window shows what a check can see, and your 1&nbsp; green check sees only Policy. The overlap function&nbsp;&nbsp;

- [00:12:15](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=735) passes every check. Can 2 concurrent requests&nbsp; still double book room C101? Option A, no,&nbsp;&nbsp;

- [00:12:22](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=742) the arithmetic is correct. Option B, no, the&nbsp; function runs on the server. Option C, yes,&nbsp;&nbsp;

- [00:12:28](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=748) this check never touches storage. Pause the video&nbsp; and decide what the green check lets you claim.&nbsp;&nbsp;

- [00:12:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=755) Start with the unit check. It asks the overlap&nbsp; function about 10:00 to 11:00 and 10:30 to 11:30,&nbsp;&nbsp;

- [00:12:41](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=761) and the answer is true. It is fast and exact&nbsp; about the arithmetic. Read its row. The claim&nbsp;&nbsp;

- [00:12:47](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=767) is that the interval predicate is correct, the&nbsp; scope is 1 pure function, and it says nothing&nbsp;&nbsp;

- [00:12:53](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=773) about storage under 2 requests at once. Every row&nbsp; in this table names what it leaves open. Widen&nbsp;&nbsp;

- [00:13:00](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=780) the window. A component check runs the handler and&nbsp; Policy with a real store, one request at a time. A&nbsp;&nbsp;

- [00:13:07](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=787) conflicting request is rejected, the check passes,&nbsp; and 2 requests never interleave at the same time.&nbsp;&nbsp;

- [00:13:13](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=793) Now look only at storage, and run two requests at&nbsp; the same moment. With the check then write from&nbsp;&nbsp;

- [00:13:19](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=799) week 6, both are confirmed. 2 confirmations for&nbsp; 1 overlapping time. And the unit check is still&nbsp;&nbsp;

- [00:13:25](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=805) green. So the answer is C. Correct arithmetic&nbsp; leaves the rule exposed to 2 operations at once,&nbsp;&nbsp;

- [00:13:32](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=812) and only this window can show you. This concurrent&nbsp; check covers the interleavings it tried,&nbsp;&nbsp;

- [00:13:38](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=818) and you can read that limit in its row. Week 6's&nbsp; atomic decision is the repair, and this check is&nbsp;&nbsp;

- [00:13:44](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=824) what keeps it in place. The widest window is&nbsp; the journey. Ari books by keyboard and reads&nbsp;&nbsp;

- [00:13:50](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=830) the status, and the whole route is observed.&nbsp; That is valuable and slow, so it covers only&nbsp;&nbsp;

- [00:13:55](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=835) a few cases. The last row is a claim about the&nbsp; notification boundary. Each row pairs a claim with&nbsp;&nbsp;

- [00:14:02](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=842) the place it can be observed, and names what stays&nbsp; open. Choose from the claim and the risk of being&nbsp;&nbsp;

- [00:14:09](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=849) wrong. That is the principle: the appropriate test&nbsp; scope follows the claim and failure risk, not the&nbsp;&nbsp;

- [00:14:15](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=855) prestige of a test label. Choose the check by what&nbsp; you need to know. Test double changes 1 condition:&nbsp;&nbsp;

- [00:14:22](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=862) the notification call now goes to a stand-in&nbsp; that the check controls. The real provider drops&nbsp;&nbsp;

- [00:14:28](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=868) out of the picture. What do you gain? Option A,&nbsp; fast, repeatable isolation of booking. Option B,&nbsp;&nbsp;

- [00:14:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=875) evidence that the real provider works. Option&nbsp; C, nothing, because a double only hides&nbsp;&nbsp;

- [00:14:40](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=880) problems. Pause and choose. The double fails on&nbsp; request, so you can test R-04 whenever you like:&nbsp;&nbsp;

- [00:14:49](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=889) the booking stays confirmed and the notification&nbsp; is marked failed. That is the gain, and the right&nbsp;&nbsp;

- [00:14:55](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=895) answer is A. That result holds under the double's&nbsp; assumption: a notification failure stays separate&nbsp;&nbsp;

- [00:15:02](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=902) from the booking outcome. The check wrote that&nbsp; assumption down, and nothing here looked any&nbsp;&nbsp;

- [00:15:07](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=907) further. The real provider never ran. A double&nbsp; returning the answer you wanted tells you how&nbsp;&nbsp;

- [00:15:13](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=913) booking behaves if the provider behaves that way.&nbsp; Its actual failures stay out of view. Now the&nbsp;&nbsp;

- [00:15:21](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=921) uncomfortable case. The double based check stays&nbsp; green, while the real provider raises its failure&nbsp;&nbsp;

- [00:15:27](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=927) into the booking flow. Which check can see that?&nbsp; Option A, the duration check. Option B, a rerun&nbsp;&nbsp;

- [00:15:34](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=934) of the double based check. Option C, a contract&nbsp; check against the real provider. Pause and make&nbsp;&nbsp;

- [00:15:40](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=940) your choice. Booking states what it expects,&nbsp; in a form the provider can be checked against:&nbsp;&nbsp;

- [00:15:47](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=947) a notification failure remains separate from&nbsp; the booking outcome. That expectation is the&nbsp;&nbsp;

- [00:15:53](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=953) contract between the 2. The contract check fails.&nbsp; The actual provider raises into the booking flow,&nbsp;&nbsp;

- [00:16:00](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=960) and the double never did, so only this check could&nbsp; show it. The answer is C. Repair the boundary,&nbsp;&nbsp;

- [00:16:06](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=966) and keep 1 journey check too: the booking stays&nbsp; confirmed and the failed notification stays&nbsp;&nbsp;

- [00:16:12](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=972) visible. Neither side can observe that alone.&nbsp; All of these checks start from something you&nbsp;&nbsp;

- [00:16:19](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=979) already suspect. What about the problem nobody&nbsp; has imagined yet? For that, you explore with&nbsp;&nbsp;

- [00:16:25](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=985) no script at all. Exploration starts from 1&nbsp; question rather than a script. Here it is:&nbsp;&nbsp;

- [00:16:31](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=991) how does someone recover from a lost response?&nbsp; Let each observation choose your next move. This&nbsp;&nbsp;

- [00:16:37](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=997) is the same keyboard journey as the last scene.&nbsp; Ari has filled in room C101, and the form is&nbsp;&nbsp;

- [00:16:44](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1004) ready. The screen says draft, and nothing has been&nbsp; read back yet. Submit by keyboard. The screen says&nbsp;&nbsp;

- [00:16:50](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1010) submitting, and then the response never arrives.&nbsp; So the next question chooses itself: what can&nbsp;&nbsp;

- [00:16:56](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1016) Ari do now? The obvious thing is to reopen the&nbsp; booking. The stored booking comes back confirmed,&nbsp;&nbsp;

- [00:17:03](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1023) and the screen still says submitting. That is&nbsp; a mismatch nobody scripted a check for. Now&nbsp;&nbsp;

- [00:17:09](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1029) your next check is about the screen, not about&nbsp; storage. Is the mismatch in storage, or in what&nbsp;&nbsp;

- [00:17:15](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1035) the interface shows? Storage is fine as it is.&nbsp; After the correction, reopening shows confirmed,&nbsp;&nbsp;

- [00:17:22](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1042) on the screen and in storage. You found 1 defect&nbsp; by following a question, and you did not know it&nbsp;&nbsp;

- [00:17:28](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1048) was there when you began. Then you keep it. Reopen&nbsp; the booking, and assert that the screen shows&nbsp;&nbsp;

- [00:17:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1055) confirmed. The discovery is now a repeatable&nbsp; regression check that guards this behavior&nbsp;&nbsp;

- [00:17:40](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1060) from now on. These 3 activities answer different&nbsp; questions. A scripted check keeps an expectation&nbsp;&nbsp;

- [00:17:47](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1067) you already know. Exploration is guided&nbsp; investigation with recorded observations, and it&nbsp;&nbsp;

- [00:17:53](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1073) finds the next expectation. A usability study is&nbsp; a separate question for representative people: can&nbsp;&nbsp;

- [00:18:00](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1080) someone complete recovery and explain the outcome?&nbsp; Campus Rooms is a simulated example here, so no&nbsp;&nbsp;

- [00:18:06](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1086) such study took place. You have now seen many&nbsp; checks agree with their expected values. The next&nbsp;&nbsp;

- [00:18:12](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1092) scene asks a simpler and more awkward question:&nbsp; where did those expected values come from?&nbsp;&nbsp;

- [00:18:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1100) Scene 4: who checked the expected answer? The&nbsp; check agrees with the code, so follow where each&nbsp;&nbsp;

- [00:18:26](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1106) expected result comes from. Start at the top.&nbsp; A helper called longest_allowed returns 119,&nbsp;&nbsp;

- [00:18:33](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1113) and the duration function compares against it.&nbsp; Now read the check below. The check computes its&nbsp;&nbsp;

- [00:18:40](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1120) expected value with the helper: is 120 within the&nbsp; longest_allowed? Then it asserts that duration_ok&nbsp;&nbsp;

- [00:18:46](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1126) gives that same answer. And it passes. How much&nbsp; does this agreement tell you? Option A, quite a&nbsp;&nbsp;

- [00:18:53](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1133) lot, because 2 calculations matched. Option B,&nbsp; everything, because the check passed. Option C,&nbsp;&nbsp;

- [00:18:59](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1139) little, because both answers share 1 helper.&nbsp; Pause and choose. Follow the 119. Someone&nbsp;&nbsp;

- [00:19:07](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1147) read up to 120 as under 120, and that one number&nbsp; flows into the code and into the expected value.&nbsp;&nbsp;

- [00:19:16](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1156) The check passes. The code refuses 120, and&nbsp; the expected value says it should. They agree&nbsp;&nbsp;

- [00:19:22](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1162) because they share a source, so the answer is&nbsp; C. Now derive the expected answer from R-02&nbsp;&nbsp;

- [00:19:29](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1169) itself. Both ends are included, so 120 must be&nbsp; accepted, and 121 must be rejected. Notice that&nbsp;&nbsp;

- [00:19:36](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1176) this needed no code at all. Check it by hand as&nbsp; well. 10:00 to 11:00 is 60 minutes, then 60 more,&nbsp;&nbsp;

- [00:19:44](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1184) so 120 minutes, and R-02 accepts that.&nbsp; The independent check fails and exposes&nbsp;&nbsp;

- [00:19:50](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1190) the defect. Same code, same green check a moment&nbsp; ago, and the only change is where the expected&nbsp;&nbsp;

- [00:19:55](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1195) answer came from. The basis for an expected&nbsp; result is called a test oracle. A test oracle,&nbsp;&nbsp;

- [00:20:01](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1201) the basis for the expected result, must not simply&nbsp; repeat the defect under examination. In short,&nbsp;&nbsp;

- [00:20:08](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1208) get the expected answer from the requirement,&nbsp; not from the code. For any check you read,&nbsp;&nbsp;

- [00:20:13](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1213) ask where its expected value came from. Now change&nbsp; the helper and leave the requirement alone. A&nbsp;&nbsp;

- [00:20:21](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1221) later cleanup makes it return 90, while R-02 still&nbsp; says 120. What do the 2 checks do? Option A, the&nbsp;&nbsp;

- [00:20:29](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1229) self confirming check passes and the independent&nbsp; check fails. Option B, both checks fail. Option C,&nbsp;&nbsp;

- [00:20:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1235) both checks pass. Pause and think it through.&nbsp; Helper at 90: the self confirming check passes,&nbsp;&nbsp;

- [00:20:42](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1242) and the independent check fails, so the right&nbsp; answer was A. The code just lost 30 minutes of&nbsp;&nbsp;

- [00:20:48](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1248) allowed bookings, and 1 check stayed green. Helper&nbsp; at 150: the same result. The self confirming check&nbsp;&nbsp;

- [00:20:56](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1256) passes again, whatever the number is. A check&nbsp; that passes for every value tells you little&nbsp;&nbsp;

- [00:21:02](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1262) about any of them. Helper at 120: now both pass.&nbsp; Only the independent check could tell this value&nbsp;&nbsp;

- [00:21:09](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1269) from the others, because it is the only 1 that&nbsp; knows the requirement as written. This same loop&nbsp;&nbsp;

- [00:21:16](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1276) appears with code assistants. In this condition,&nbsp; 1 assistant drafted the helper and the tests from&nbsp;&nbsp;

- [00:21:22](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1282) 1 reading of R-02, and all 5 generated tests pass.&nbsp; What have they shown? Option A, R-02 is satisfied,&nbsp;&nbsp;

- [00:21:30](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1290) 5 out of 5. Option B, the code matches 1 reading&nbsp; of R-02. Option C, the assistant checked itself,&nbsp;&nbsp;

- [00:21:37](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1297) so review can stop. Make your choice before the&nbsp; reveal. Read the row for 120: the test expects&nbsp;&nbsp;

- [00:21:45](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1305) false. It carries the same misreading as the code,&nbsp; so the 2 agree, and B is the right answer. An&nbsp;&nbsp;

- [00:21:52](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1312) independent check, derived from R-02 as written,&nbsp; expects 120 to be accepted. Against this candidate&nbsp;&nbsp;

- [00:21:59](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1319) it fails. Week 13 returns to this loop in detail.&nbsp; An independent oracle strengthens a single check.&nbsp;&nbsp;

- [00:22:06](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1326) One example at a time is still slow, though. The&nbsp; next scene states a rule that speaks for many&nbsp;&nbsp;

- [00:22:12](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1332) examples at once. Scene 5: what must stay true&nbsp; after any accepted booking? Write the rule as a&nbsp;&nbsp;

- [00:22:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1340) statement about every sequence of bookings, then&nbsp; feed it candidates. 2 properties sit at the top,&nbsp;&nbsp;

- [00:22:26](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1346) and they have no result yet. The calendar&nbsp; below shows 2 rooms from 09:00 to 15:00,&nbsp;&nbsp;

- [00:22:30](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1350) and the table will record each candidate as it&nbsp; runs. An example checks 1 case, and a property&nbsp;&nbsp;

- [00:22:37](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1357) speaks for all of them. What should remain&nbsp; true after any accepted booking? Option A, no&nbsp;&nbsp;

- [00:22:43](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1363) 2 confirmed bookings overlap in a room. Option B,&nbsp; every request ends up accepted. Option C, exactly&nbsp;&nbsp;

- [00:22:50](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1370) 1 booking exists per room. Pause the video and&nbsp; choose the statement you would want to be true.&nbsp;&nbsp;

- [00:22:57](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1377) 10:00 to 11:00 in room C101 is accepted. P1 holds,&nbsp; because 1 booking cannot overlap anything. So the&nbsp;&nbsp;

- [00:23:04](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1384) answer is A, and that statement is R-01. 10:30&nbsp; to 11:30 overlaps it and is rejected, in the&nbsp;&nbsp;

- [00:23:10](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1390) lower half of the lane. P1 still holds, because&nbsp; the refusal is what protects the rule. 11:00 to&nbsp;&nbsp;

- [00:23:17](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1397) 12:00 touches the first booking at 11. Half open&nbsp; intervals allow that, so it is accepted, and P2&nbsp;&nbsp;

- [00:23:23](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1403) holds: a valid adjacent booking is accepted as&nbsp; well. 10:30 to 11:30 in room C202 is accepted. It&nbsp;&nbsp;

- [00:23:32](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1412) is the same time as the rejected one, in another&nbsp; room, so there is no conflict here. A property&nbsp;&nbsp;

- [00:23:37](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1417) based tool generates many sequences like this and&nbsp; tests these same statements. These 4 are fixed,&nbsp;&nbsp;

- [00:23:44](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1424) so you can replay them, and the next conditions&nbsp; show what such a tool adds. Properties expose&nbsp;&nbsp;

- [00:23:51](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1431) classes of behavior, but the properties themselves&nbsp; must express the intended rule. In short, state&nbsp;&nbsp;

- [00:23:57](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1437) what must always hold, and check the statement&nbsp; too. Now change the predicate. Rejects adjacency&nbsp;&nbsp;

- [00:24:04](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1444) makes the comparison less than or equal to on both&nbsp; sides. It now refuses 11:00 to 12:00 after 10:00&nbsp;&nbsp;

- [00:24:10](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1450) to 11:00. Which property notices? Option A, P1,&nbsp; no overlapping confirmed bookings. Option B, P2,&nbsp;&nbsp;

- [00:24:18](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1458) a valid adjacent booking is accepted. Option C,&nbsp; neither, because both still hold. Decide before&nbsp;&nbsp;

- [00:24:24](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1464) the next move. 10:00 to 11:00 is accepted, as&nbsp; before. Now replay the next candidate, 11:00 to&nbsp;&nbsp;

- [00:24:31](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1471) 12:00, the one that only touches the end of the&nbsp; first one. The comparison calls it an overlap&nbsp;&nbsp;

- [00:24:37](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1477) and refuses it, while the rule calls it adjacent.&nbsp; P1 still holds, and P2 fails, so B is the right&nbsp;&nbsp;

- [00:24:43](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1483) answer. Think about what that means. A service&nbsp; that refuses everything satisfies P1. You need&nbsp;&nbsp;

- [00:24:50](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1490) P2 as well, because the properties have to say the&nbsp; whole rule. Real failures rarely look this tidy.&nbsp;&nbsp;

- [00:24:59](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1499) Smallest failure shows 6 generated bookings with&nbsp; the same comparison, and P2 has failed somewhere&nbsp;&nbsp;

- [00:25:06](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1506) among them. What would help you the most here?&nbsp; Option A, the smallest sequence that still fails.&nbsp;&nbsp;

- [00:25:12](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1512) Option B, rerunning it until it passes. Option&nbsp; C, a longer sequence with more bookings. Take&nbsp;&nbsp;

- [00:25:17](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1517) a moment and choose. Remove the bookings that&nbsp; touch nothing. 3 bookings remain, and P2 still&nbsp;&nbsp;

- [00:25:25](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1525) fails. The answer is A: every removal that keeps&nbsp; the failure throws away 1 more distraction. Remove&nbsp;&nbsp;

- [00:25:32](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1532) another one. 2 bookings remain, and P2 still&nbsp; fails, with 1 valid booking refused. You are close&nbsp;&nbsp;

- [00:25:39](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1539) to the cause now. Simpler times still fail. This&nbsp; is the smallest counterexample: 10:00 to 11:00,&nbsp;&nbsp;

- [00:25:46](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1546) then 11:00 to 12:00. Property based tools call&nbsp; this reduction shrinking, and they do it for you.&nbsp;&nbsp;

- [00:25:52](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1552) The same idea works on input nobody expected. The&nbsp; next condition feeds the parser strange generated&nbsp;&nbsp;

- [00:25:58](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1558) text. What does a fuzzer need in order to report&nbsp; a failure? Option A, 1 fixed expected output for&nbsp;&nbsp;

- [00:26:04](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1564) every input. Option B, a property any input must&nbsp; meet: a clear answer and no crash. Option C,&nbsp;&nbsp;

- [00:26:11](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1571) the source code of the handler. Hold the video and&nbsp; pick one. 3 generated inputs run. A number written&nbsp;&nbsp;

- [00:26:18](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1578) as text and a plain word both get a clear answer,&nbsp; and 3 spaces crash the parser. That property is&nbsp;&nbsp;

- [00:26:24](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1584) all it needed, so the answer is B. Reduce the&nbsp; failing input: 3 spaces, 1 space, then empty&nbsp;&nbsp;

- [00:26:30](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1590) text. All of them still crash, and empty text is&nbsp; the smallest. Feeding generated input like this&nbsp;&nbsp;

- [00:26:36](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1596) is called fuzzing. After the correction, nothing&nbsp; crashes. Blank text gets a clear answer: rejected,&nbsp;&nbsp;

- [00:26:44](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1604) enter a whole number of minutes. Reduced inputs&nbsp; like this one make excellent regression cases. You&nbsp;&nbsp;

- [00:26:51](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1611) have now seen checks that speak for many inputs.&nbsp; How do you know your suite is really looking at&nbsp;&nbsp;

- [00:26:57](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1617) what it runs? That is the next scene. Scene 6: the&nbsp; line ran. Did anything check its answer? Coverage&nbsp;&nbsp;

- [00:27:04](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1624) reports what executed, and a mutation asks whether&nbsp; the suite would notice a change in the behavior.&nbsp;&nbsp;

- [00:27:11](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1631) This is the code as shipped, with the less than,&nbsp; and a suite that calls it twice. The 3 boxes at&nbsp;&nbsp;

- [00:27:17](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1637) the top will report the run as it happens. Every&nbsp; line shows as executed, and the run is green.&nbsp;&nbsp;

- [00:27:24](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1644) What does that tell you? Option A, the lines ran,&nbsp; and whether any answer was right is still open.&nbsp;&nbsp;

- [00:27:30](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1650) Option B, R-02 is implemented correctly. Option&nbsp; C, both boundaries are checked. Pause the video&nbsp;&nbsp;

- [00:27:36](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1656) and make your choice before the report appears.&nbsp; Lines executed: 2 of 2. Coverage marks each line&nbsp;&nbsp;

- [00:27:44](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1664) that ran during the suite, so this report is&nbsp; accurate. It measures that a line was reached,&nbsp;&nbsp;

- [00:27:49](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1669) and nothing about its answer. Now read the suite.&nbsp; It even calls duration_ok with 120, the exact&nbsp;&nbsp;

- [00:27:57](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1677) case that fails. The answer comes back false, and&nbsp; nothing compares it with anything. So the answer&nbsp;&nbsp;

- [00:28:02](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1682) is A. Add 1 assertion. Coverage stays at 2 of 2,&nbsp; and the run now fails. The same lines ran, and the&nbsp;&nbsp;

- [00:28:10](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1690) evidence is different, because this time an answer&nbsp; was compared with R-02. Coverage and mutation&nbsp;&nbsp;

- [00:28:17](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1697) results are diagnostic signals about evidence, not&nbsp; substitutes for requirements. Keep that sentence&nbsp;&nbsp;

- [00:28:23](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1703) for the rest of the scene, because the next tool&nbsp; looks at the checks themselves. Mutation turns&nbsp;&nbsp;

- [00:28:30](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1710) the question around. The code is correct now.&nbsp; Change less than or equal to less than on purpose,&nbsp;&nbsp;

- [00:28:36](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1716) and ask whether the suite notices. That deliberate&nbsp; change is a mutation. The suite has no 120 case.&nbsp;&nbsp;

- [00:28:43](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1723) What happens when the mutated code runs?&nbsp; Option A, the suite fails at once. Option B,&nbsp;&nbsp;

- [00:28:48](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1728) some lines stop executing. Option C, every check&nbsp; passes, and nothing notices. On the correct code,&nbsp;&nbsp;

- [00:28:55](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1735) all 4 checks pass, as you would expect. 29, 30,&nbsp; 60 and 121 each give the answer R-02 requires.&nbsp;&nbsp;

- [00:29:04](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1744) Apply the mutation: less than or equal to 120&nbsp; becomes less than 120. Execution looks the same,&nbsp;&nbsp;

- [00:29:10](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1750) because the same lines run, as the 2 bars show.&nbsp; All 4 checks still pass. The mutant survived,&nbsp;&nbsp;

- [00:29:19](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1759) so C is the right answer. This suite has no case&nbsp; where the 2 versions answer differently, and that&nbsp;&nbsp;

- [00:29:25](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1765) is a precise finding. Keep the same mutation and&nbsp; add 1 case: 120 must be accepted. What changes?&nbsp;&nbsp;

- [00:29:32](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1772) Option A, line coverage goes higher. Option B, the&nbsp; mutant is now detected. Option C, nothing, because&nbsp;&nbsp;

- [00:29:39](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1779) the same lines run. Pause the video and make your&nbsp; choice before the new case runs. The suite now has&nbsp;&nbsp;

- [00:29:46](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1786) 5 checks, and coverage is still 2 of 2. So the new&nbsp; case added nothing to coverage, and it may be the&nbsp;&nbsp;

- [00:29:52](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1792) most useful line of them all. On the mutant,&nbsp; 120 returns false and the check fails. Mutant&nbsp;&nbsp;

- [00:29:59](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1799) detected, and the answer is B. You have learned&nbsp; something limited and useful: this suite notices&nbsp;&nbsp;

- [00:30:06](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1806) this boundary change. R-02 still decides what is&nbsp; right, and a different mutation could still slip&nbsp;&nbsp;

- [00:30:12](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1812) through. A tool also tries another mutation: less&nbsp; than or equal to 120 becomes less than 121. No&nbsp;&nbsp;

- [00:30:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1820) whole minute case can tell these 2 apart at all.&nbsp; What does its survival call for? Option A, more&nbsp;&nbsp;

- [00:30:27](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1827) test cases until it dies. Option B, a bug report&nbsp; against the code. Option C, your judgment, because&nbsp;&nbsp;

- [00:30:33](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1833) the 2 behave the same. Stop for a moment and&nbsp; choose. Every check gives the same answer on both&nbsp;&nbsp;

- [00:30:40](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1840) versions. It survives, and no new whole minute&nbsp; case could change that. This is an equivalent&nbsp;&nbsp;

- [00:30:46](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1846) mutant, so C is the right answer. 2 mutants tried&nbsp; and 1 caught: detected divided by valid is 1 over&nbsp;&nbsp;

- [00:30:52](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1852) 2, 50 percent. The score points at places to&nbsp; look, and one of these 2 needs no new case at&nbsp;&nbsp;

- [00:30:58](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1858) all. Mutation tools let you mark such a change, so&nbsp; it stops counting against the score. In short, use&nbsp;&nbsp;

- [00:31:05](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1865) both signals to find weak checks. Next, a check&nbsp; that fails for no good reason at all. Scene 7:&nbsp;&nbsp;

- [00:31:13](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1873) same code, same check. Why does it pass and then&nbsp; fail? A check also reads inputs you did not list,&nbsp;&nbsp;

- [00:31:19](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1879) like the clock, and you can bring them under&nbsp; control. R-03 says you can cancel your own future&nbsp;&nbsp;

- [00:31:25](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1885) booking, and future means its start is later than&nbsp; the current time. Booking B-001 starts at 10 in&nbsp;&nbsp;

- [00:31:32](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1892) the morning. The check says Ari can cancel. Its&nbsp; first line reads the time from the wall clock. The&nbsp;&nbsp;

- [00:31:38](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1898) same check passes in one run and fails in a later&nbsp; one, with no code change. So what is different&nbsp;&nbsp;

- [00:31:44](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1904) now? Option A, the rule changed overnight. Option&nbsp; B, the wall clock crossed the booking's start.&nbsp;&nbsp;

- [00:31:51](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1911) Option C, nothing, so rerun it until it passes.&nbsp; Pause and pick the likely cause. Run 1, at 09:58:&nbsp;&nbsp;

- [00:32:00](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1920) the marker sits in the allowed zone, cancelling&nbsp; is allowed, and the check passes. Run 2, at 09:59:&nbsp;&nbsp;

- [00:32:08](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1928) it passes again. If you ran this check only in&nbsp; the morning, you would believe it forever. Run 3,&nbsp;&nbsp;

- [00:32:15](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1935) at 10 o'clock: cancelling is denied, because the&nbsp; booking has started. The check fails, with no code&nbsp;&nbsp;

- [00:32:21](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1941) changed. The marker has reached the line, and&nbsp; B is the right answer. Run 4, 1 minute past 10:&nbsp;&nbsp;

- [00:32:28](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1948) it fails again. R-03 was right in all 4 runs.&nbsp; The clock is an input this check never controlled&nbsp;&nbsp;

- [00:32:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1955) at all. A red run here is about the time of day,&nbsp; and it teaches people to ignore red runs. Control&nbsp;&nbsp;

- [00:32:42](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1962) irrelevant variation, so a failing check tells you&nbsp; something about the behavior under examination.&nbsp;&nbsp;

- [00:32:48](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1968) The repair is to pass the clock into the check.&nbsp; Fixed clock sets it to 9 o'clock. What happens&nbsp;&nbsp;

- [00:32:54](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1974) across 5 runs? Option A, 5 identical passes, at&nbsp; any time of day. Option B, passes before 10 and&nbsp;&nbsp;

- [00:33:01](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1981) failures after. Option C, random results, as&nbsp; before. Pause the video and make your choice.&nbsp;&nbsp;

- [00:33:08](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1988) 9 o'clock, 5 runs, 5 passes. The time of day when&nbsp; you run the check no longer matters, so A is the&nbsp;&nbsp;

- [00:33:15](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=1995) right answer. And 10 o'clock, the exact start, is&nbsp; now a case of its own. 5 runs, denied every time,&nbsp;&nbsp;

- [00:33:21](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2001) as R-03 says. A boundary you could only hit by&nbsp; luck is now a line in the check itself. A red run&nbsp;&nbsp;

- [00:33:27](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2007) now means the behavior changed. In short, fix what&nbsp; should not matter, so a failure means something.&nbsp;&nbsp;

- [00:33:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2015) The clock is 1 hidden input, and message timing&nbsp; is another. Injected failure shows 2 ways to&nbsp;&nbsp;

- [00:33:42](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2022) check how a notification failure is handled,&nbsp; against R-04. The notification check fails now&nbsp;&nbsp;

- [00:33:49](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2029) and then. Which version tells you something about&nbsp; the behavior? Option A, wait longer and rerun it&nbsp;&nbsp;

- [00:33:55](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2035) until it is green. Option B, inject 1 failure from&nbsp; a controlled provider and check R-04. Option C,&nbsp;&nbsp;

- [00:34:03](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2043) remove the check. Pause here and choose the one&nbsp; you would trust on a busy day. The waiting check&nbsp;&nbsp;

- [00:34:10](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2050) sleeps 2 seconds and hopes. 1.2 seconds passes,&nbsp; 2.6 fails, 1.7 passes. The result follows the&nbsp;&nbsp;

- [00:34:17](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2057) delay of each run and says nothing about R-04.&nbsp; The injected failure is different. A controlled&nbsp;&nbsp;

- [00:34:24](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2064) provider fails on request, and all 5 runs fail&nbsp; the same way: the failed notification undid the&nbsp;&nbsp;

- [00:34:31](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2071) booking. That message points at a defect, and the&nbsp; right answer is B. Repair the handler. 5 runs,&nbsp;&nbsp;

- [00:34:38](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2078) 5 passes: the booking stays confirmed, and the&nbsp; notification is failed, visible and ready to&nbsp;&nbsp;

- [00:34:45](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2085) retry. That is R-04, checked the same way every&nbsp; time. You now have checks worth trusting. So what&nbsp;&nbsp;

- [00:34:52](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2092) do you do when one of them fails, or when Ari's&nbsp; refused booking lands on your desk? That is the&nbsp;&nbsp;

- [00:34:58](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2098) last scene. Scene 8: what should happen before you&nbsp; fix the bug? Back to Ari's refused booking. Find&nbsp;&nbsp;

- [00:35:05](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2105) the cause in 4 small moves, then let 1 check guide&nbsp; the change. Ari's 120 minute booking is refused,&nbsp;&nbsp;

- [00:35:14](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2114) and you have a suspicion about the code. What&nbsp; comes first? Option A, rewrite the validation&nbsp;&nbsp;

- [00:35:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2120) function. Option B, wrap the request in a retry.&nbsp; Option C, reproduce the failure with the 120&nbsp;&nbsp;

- [00:35:27](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2127) minute case. Pause the video and pick your first&nbsp; move. Reproduce. Ari books C101, 10:00 to 12:00,&nbsp;&nbsp;

- [00:35:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2135) and the answer is rejected, every time. Now you&nbsp; have something you can run, and the right answer&nbsp;&nbsp;

- [00:35:40](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2140) is C. Shrink. Room and time make no difference,&nbsp; so take them away. duration_ok with 120, alone,&nbsp;&nbsp;

- [00:35:48](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2148) returns false. That is the smallest failure.&nbsp; 1 hypothesis: the upper comparison leaves out&nbsp;&nbsp;

- [00:35:54](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2154) its own endpoint. One idea at a time, so the&nbsp; next result can settle it. Several changes at&nbsp;&nbsp;

- [00:36:00](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2160) once would tell you nothing. Confirm it with 1&nbsp; targeted look: 119 returns true, and 120 returns&nbsp;&nbsp;

- [00:36:08](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2168) false. The change is exactly at the upper bound,&nbsp; just where the hypothesis points. Now turn the&nbsp;&nbsp;

- [00:36:16](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2176) smallest failure into 1 precise check: assert&nbsp; that duration_ok of 120 is true. It fails,&nbsp;&nbsp;

- [00:36:23](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2183) for the reason you expect. That is the second&nbsp; box in the diagram. Make the smallest change:&nbsp;&nbsp;

- [00:36:28](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2188) 1 character, less than becomes less than or equal.&nbsp; Resist the urge to tidy up anything else while&nbsp;&nbsp;

- [00:36:34](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2194) the check is still failing. Rerun. All 6 boundary&nbsp; cases pass, and that check stays behind to guard&nbsp;&nbsp;

- [00:36:41](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2201) the meaning of the rule. The loop closes, and&nbsp; the next change begins from a safer place. So,&nbsp;&nbsp;

- [00:36:47](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2207) tests are feedback instruments whose value depends&nbsp; on the claims, observations and assumptions they&nbsp;&nbsp;

- [00:36:53](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2213) preserve. In short, a check is only as good as&nbsp; what it holds on to. Same rule, a different order:&nbsp;&nbsp;

- [00:36:59](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2219) check first. You write the check before the&nbsp; code. What does that give you? Option A,&nbsp;&nbsp;

- [00:37:04](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2224) the expected behavior is explicit before any&nbsp; code changes. Option B, a correct requirement,&nbsp;&nbsp;

- [00:37:10](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2230) automatically. Option C, no further need&nbsp; for review. Pause the video and choose.&nbsp;&nbsp;

- [00:37:16](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2236) The check states the expected behavior, and it&nbsp; fails because the behavior does not exist yet.&nbsp;&nbsp;

- [00:37:22](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2242) That is the explicit statement you were after,&nbsp; so A is the right answer. Write just enough code&nbsp;&nbsp;

- [00:37:28](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2248) to make it pass. This order is called test first&nbsp; development. It makes the target visible before&nbsp;&nbsp;

- [00:37:34](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2254) you touch anything. The check is as right as&nbsp; the requirement it came from. If the requirement&nbsp;&nbsp;

- [00:37:40](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2260) itself said under 120, a check written first would&nbsp; carry that mistake faithfully. The fix is in.&nbsp;&nbsp;

- [00:37:48](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2268) Refactor restructures the code with named limits.&nbsp; What should the checks tell you after this? Option&nbsp;&nbsp;

- [00:37:54](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2274) A, new answers, since the code moved on. Option B,&nbsp; the same answers on every case. Option C, nothing,&nbsp;&nbsp;

- [00:38:02](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2282) because refactoring needs no checks. Take a moment&nbsp; and choose. The structure changes: the limits now&nbsp;&nbsp;

- [00:38:09](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2289) have names. The decision is meant to stay the&nbsp; same, and this is where the checks earn their&nbsp;&nbsp;

- [00:38:14](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2294) place. All 6 cases give the same answers, so the&nbsp; right answer is B. The checks held the meaning&nbsp;&nbsp;

- [00:38:21](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2301) still while the code moved around them. Say what&nbsp; this leaves open as well. A duration that arrives&nbsp;&nbsp;

- [00:38:28](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2308) as text, 2 requests at the same moment, and the&nbsp; keyboard journey were never exercised here. Higher&nbsp;&nbsp;

- [00:38:35](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2315) level checks still have their own work to do. So&nbsp; many kinds of evidence, each with its own limit.&nbsp;&nbsp;

- [00:38:41](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2321) Let's line them all up on 1 page, and see what&nbsp; each one lets you claim. Reading, analyzing and&nbsp;&nbsp;

- [00:38:49](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2329) running answer different questions. Some evidence&nbsp; arrives before the code ever runs, so let's begin&nbsp;&nbsp;

- [00:38:55](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2335) there, with the same shipped comparison. Review:&nbsp; a person compares less than with both included&nbsp;&nbsp;

- [00:39:01](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2341) in R-02. The operator contradicts the rule, and&nbsp; no code had to run to see that. Static analysis:&nbsp;&nbsp;

- [00:39:08](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2348) a tool reads every route without running the&nbsp; service. It reports that the minutes value&nbsp;&nbsp;

- [00:39:14](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2354) from the request can be none at this comparison,&nbsp; a case the checks have not tried so far. A dynamic&nbsp;&nbsp;

- [00:39:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2360) check runs the code. 1 execution with 1 input:&nbsp; duration_ok of 120 returns false. It is concrete,&nbsp;&nbsp;

- [00:39:27](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2367) and it tells you about that execution. You can&nbsp; also state a contract. A precondition: minutes&nbsp;&nbsp;

- [00:39:33](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2373) is a whole number. A postcondition: true exactly&nbsp; when minutes is from 30 through 120. An invariant:&nbsp;&nbsp;

- [00:39:41](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2381) no 2 confirmed bookings overlap in 1 room. Look&nbsp; under each one: it is justified by a requirement,&nbsp;&nbsp;

- [00:39:47](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2387) R-02 or R-01. A contract written without that&nbsp; link would only restate what the code happens&nbsp;&nbsp;

- [00:39:54](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2394) to do. Now line up the evidence. Each row keeps 3&nbsp; things together: the claim, the evidence for it,&nbsp;&nbsp;

- [00:40:01](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2401) and what stays open. 120 is accepted and&nbsp; 121 is rejected: the boundary table and a&nbsp;&nbsp;

- [00:40:10](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2410) detected mutant support that. Parsing the value&nbsp; at the request boundary stays open. Concurrent&nbsp;&nbsp;

- [00:40:16](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2416) requests cannot confirm an overlap: a concurrent&nbsp; check at the storage boundary supports that,&nbsp;&nbsp;

- [00:40:23](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2423) for the interleavings it exercised. A failed&nbsp; notification leaves the booking confirmed:&nbsp;&nbsp;

- [00:40:29](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2429) a double and a contract check support that,&nbsp; until the provider changes. And reopening&nbsp;&nbsp;

- [00:40:36](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2436) after a lost response shows confirmed, from the&nbsp; regression example exploration found. Whether&nbsp;&nbsp;

- [00:40:42](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2442) people understand that status is a separate&nbsp; study. A passing suite is evidence with an edge,&nbsp;&nbsp;

- [00:40:48](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2448) and now you can say where the edge is. Let's&nbsp; collect the 8 principles of this lecture, and then&nbsp;&nbsp;

- [00:40:54](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2454) you can test yourself on 6 questions, with the&nbsp; answers 1 click away. Here are the 8 principles,&nbsp;&nbsp;

- [00:41:02](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2462) one per scene, and each card links back to its&nbsp; scene. Decide your answer to each question first,&nbsp;&nbsp;

- [00:41:08](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2468) before you open the answer. The first 4 say this.&nbsp; Pick cases that can tell right from nearly right.&nbsp;&nbsp;

- [00:41:14](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2474) Group the same answers, then test the edges.&nbsp; Choose the check by what you need to know.&nbsp;&nbsp;

- [00:41:20](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2480) Get the expected answer from the requirement,&nbsp; never from the implementation you are testing.&nbsp;&nbsp;

- [00:41:25](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2485) And the second 4. State what must always hold,&nbsp; and check the statement too. Use coverage and&nbsp;&nbsp;

- [00:41:31](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2491) mutation to find weak checks. Fix what should not&nbsp; matter. And remember that a check is only as good&nbsp;&nbsp;

- [00:41:37](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2497) as what it holds on to. First question: which 2&nbsp; cases distinguish an inclusive 120 minute limit&nbsp;&nbsp;

- [00:41:44](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2504) from no upper limit? Decide first, and then open&nbsp; the answer. 120 must be accepted and 121 rejected,&nbsp;&nbsp;

- [00:41:54](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2514) under otherwise valid conditions. Either case&nbsp; alone leaves a wrong version standing. Second:&nbsp;&nbsp;

- [00:42:00](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2520) do adjacent intervals overlap under the course&nbsp; rule? The answer is no. The end of 1 may equal&nbsp;&nbsp;

- [00:42:06](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2526) the start of the next, because the intervals&nbsp; are half open. Question 3: why test the storage&nbsp;&nbsp;

- [00:42:13](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2533) boundary as well as the overlap function? Correct&nbsp; local arithmetic alone leaves the rule unprotected&nbsp;&nbsp;

- [00:42:19](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2539) against concurrent operations. Question 4: why can&nbsp; the code and its test agree while both are wrong?&nbsp;&nbsp;

- [00:42:26](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2546) They may share the same mistaken assumption, or&nbsp; calculate the expected result using the defective&nbsp;&nbsp;

- [00:42:31](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2551) logic. Question 5: does a test double establish&nbsp; that the real provider honors its contract? The&nbsp;&nbsp;

- [00:42:37](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2557) answer is no. It isolates a claim, and you still&nbsp; need evidence at the real boundary. The last check&nbsp;&nbsp;

- [00:42:44](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2564) leaves room booking behind. A file converter&nbsp; passes a test whose expected output is produced&nbsp;&nbsp;

- [00:42:51](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2571) by the same conversion function. What would make&nbsp; this test stronger? Use an independently derived&nbsp;&nbsp;

- [00:42:58](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2578) small example, and a property justified by the&nbsp; format's meaning, including a relevant boundary.&nbsp;&nbsp;

- [00:43:05](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2585) If round trip conversion is promised, check it&nbsp; too. A shared defect can make both directions&nbsp;&nbsp;

- [00:43:11](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2591) agree while still producing the wrong result.&nbsp; That is the oracle scene in a new setting. 1&nbsp;&nbsp;

- [00:43:18](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2598) page is left: what carries forward to next&nbsp; week, the terms of this lecture, and where&nbsp;&nbsp;

- [00:43:23](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2603) to read more. Week 9 starts from this question:&nbsp; what must remain true when a request, dependency&nbsp;&nbsp;

- [00:43:31](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2611) or assumption cannot be trusted? Correctness now&nbsp; includes whether an action is permitted at all.&nbsp;&nbsp;

- [00:43:37](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2617) 3 things carry forward: expected results derived&nbsp; from the requirement, explicit invariants written&nbsp;&nbsp;

- [00:43:45](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2625) as properties you can check, and controlled clocks&nbsp; and doubles, so that a red check means something.&nbsp;&nbsp;

- [00:43:52](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2632) In practice, as of 2026: pytest and JUnit run&nbsp; example checks, Hypothesis generates property&nbsp;&nbsp;

- [00:43:59](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2639) based cases, and Stryker and mutmut run mutation&nbsp; analysis. coverage.py measures executed lines,&nbsp;&nbsp;

- [00:44:06](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2646) Playwright drives complete browser journeys, and&nbsp; Pact checks a consumer's expectations against a&nbsp;&nbsp;

- [00:44:12](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2652) provider. These are examples, and the reasoning&nbsp; works with any of them. In the middle are the&nbsp;&nbsp;

- [00:44:18](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2658) terms of this week, from test case and boundary&nbsp; case to test oracle, shrinking, mutation and flaky&nbsp;&nbsp;

- [00:44:25](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2665) check. On the right are the sources, starting&nbsp; with the software engineering body of knowledge.&nbsp;&nbsp;

- [00:44:31](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2671) The rest are the computing curricula final report,&nbsp; the Hypothesis and Stryker documentation, Software&nbsp;&nbsp;

- [00:44:37](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2677) Engineering at Google on testing, the exploratory&nbsp; testing syllabus, and Pact on contract testing.&nbsp;&nbsp;

- [00:44:44](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2684) So today a green check lost its authority. You&nbsp; found cases that can tell right from nearly right,&nbsp;&nbsp;

- [00:44:50](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2690) and you matched each check to what it can observe&nbsp; and to an expected answer it did not copy.&nbsp;&nbsp;

- [00:44:56](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2696) You stated properties, tested your tests with&nbsp; mutations, and brought the clock under control.&nbsp;&nbsp;

- [00:45:02](https://www.youtube.com/watch?v=F6rv0ZSmmbs&t=2702) Thank you for watching, and I will see you in the&nbsp; next lecture, week 9, on security and privacy.
