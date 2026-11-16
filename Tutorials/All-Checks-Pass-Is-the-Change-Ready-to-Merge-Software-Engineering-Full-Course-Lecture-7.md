# All Checks Pass. Is the Change Ready to Merge? | Software Engineering Full Course, Lecture 7

## Full tutorial link > https://www.youtube.com/watch?v=6aCc7uEiLO0

[![All Checks Pass. Is the Change Ready to Merge? | Software Engineering Full Course, Lecture 7](https://i.ytimg.com/vi_webp/6aCc7uEiLO0/maxresdefault.webp)](https://www.youtube.com/watch?v=6aCc7uEiLO0 "All Checks Pass. Is the Change Ready to Merge? | Software Engineering Full Course, Lecture 7")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/All-Checks-Pass-Is-the-Change-Ready-to-Merge-Software-Engineering-Full-Course-Lecture-7.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/All-Checks-Pass-Is-the-Change-Ready-to-Merge-Software-Engineering-Full-Course-Lecture-7.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Lecture 7 of the Software Engineering course. Two edits to Campus Rooms, a fictional room-booking service, merge cleanly, yet Ari's 100-minute booking is rejected: the message still offers 30 to 120 minutes while the temporary rule says 90. Interactive scenes follow that change through version history, review and integration.

Links:

SECourses Patreon: [ [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses) ]

SECourses Discord: [ [https://discord.com/servers/software-engineering-courses-secourses-772774097734074388](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) ]

You will read a commit graph, tell a textual conflict from a semantic one, resolve a conflict without losing intent, review a change with its claim and checks, integrate early behind a feature flag, record build inputs, bisect a history and decide when a change is ready.

Topics: version control, branches and merges, merge and semantic conflicts, code review, continuous integration, feature flags, reproducible builds, lockfiles, decision records, git bisect.

Jump to any scene, the questions, the principles or the sources.

Chapters:

[00:00:00](https://youtu.be/6aCc7uEiLO0?t=0) A green merge: which limit should you believe?

[00:00:48](https://youtu.be/6aCc7uEiLO0?t=48) Combine Ari's and Bo's edits: the text merges cleanly

[00:01:09](https://youtu.be/6aCc7uEiLO0?t=69) Predict: is the combined behavior ready for 100 minutes?

[00:01:31](https://youtu.be/6aCc7uEiLO0?t=91) Rejected by R-02: the message and the rule disagree

[00:02:23](https://youtu.be/6aCc7uEiLO0?t=143) From Week 6 contracts to promises several people change

[00:02:35](https://youtu.be/6aCc7uEiLO0?t=155) The promises we keep: R-01, R-02 and R-03

[00:03:09](https://youtu.be/6aCc7uEiLO0?t=189) The question of this lecture and five learning outcomes

[00:04:03](https://youtu.be/6aCc7uEiLO0?t=243) One edit, four places: saved, selected, committed, shared

[00:04:47](https://youtu.be/6aCc7uEiLO0?t=287) Record locally: commit c3 and the moving branch name

[00:05:09](https://youtu.be/6aCc7uEiLO0?t=309) Share the commit: the remote-tracking reference catches up

[00:05:51](https://youtu.be/6aCc7uEiLO0?t=351) Scene 1: a branch name moves, a commit stays put

[00:06:18](https://youtu.be/6aCc7uEiLO0?t=378) Predict: what is a branch name?

[00:06:34](https://youtu.be/6aCc7uEiLO0?t=394) Grow the commit graph one change at a time

[00:07:04](https://youtu.be/6aCc7uEiLO0?t=424) Diverged work: policy-90 and limit-message grow from c2

[00:07:33](https://youtu.be/6aCc7uEiLO0?t=453) Merge commit c5: two parents, one contradictory promise

[00:07:53](https://youtu.be/6aCc7uEiLO0?t=473) c6 restores 120 minutes and main moves forward

[00:08:26](https://youtu.be/6aCc7uEiLO0?t=506) No divergence: how can main include the change?

[00:08:56](https://youtu.be/6aCc7uEiLO0?t=536) Fast-forward: main moves without a merge commit

[00:09:36](https://youtu.be/6aCc7uEiLO0?t=576) Scene 2: one function, two edits from a shared ancestor

[00:10:24](https://youtu.be/6aCc7uEiLO0?t=624) Predict: which version should the resolution keep?

[00:10:41](https://youtu.be/6aCc7uEiLO0?t=641) Text fixed, rule lost: the upper bound disappears

[00:11:46](https://youtu.be/6aCc7uEiLO0?t=706) Intent preserved: which evidence tells the resolutions apart?

[00:12:19](https://youtu.be/6aCc7uEiLO0?t=739) The good resolution keeps both intentions and the boundary

[00:13:13](https://youtu.be/6aCc7uEiLO0?t=793) Scene 3: different files can disagree about one promise

[00:13:45](https://youtu.be/6aCc7uEiLO0?t=825) Predict: what does a clean textual merge establish?

[00:14:06](https://youtu.be/6aCc7uEiLO0?t=846) Clean merge, wrong behavior: 90 enforced, 120 announced

[00:15:05](https://youtu.be/6aCc7uEiLO0?t=905) One policy source: which value should supply the message?

[00:15:35](https://youtu.be/6aCc7uEiLO0?t=935) The message imports its limits from the policy

[00:16:20](https://youtu.be/6aCc7uEiLO0?t=980) Scene 4: a diff needs a claim you can check

[00:17:02](https://youtu.be/6aCc7uEiLO0?t=1022) Predict: what can you decide from the diff alone?

[00:17:21](https://youtu.be/6aCc7uEiLO0?t=1041) What the reviewer needs: purpose, constraint, alternatives

[00:17:50](https://youtu.be/6aCc7uEiLO0?t=1070) Checks and review comments, each with its reason

[00:19:02](https://youtu.be/6aCc7uEiLO0?t=1142) Evidence resolves the concerns and the decision is recorded

[00:20:10](https://youtu.be/6aCc7uEiLO0?t=1210) A focused change: what gets easier for the reviewer?

[00:21:18](https://youtu.be/6aCc7uEiLO0?t=1278) An assistant draft says fix stuff: what changes?

[00:22:31](https://youtu.be/6aCc7uEiLO0?t=1351) Scene 5: when does an incompatible assumption become visible?

[00:23:03](https://youtu.be/6aCc7uEiLO0?t=1383) Predict: which line of work learns about the change sooner?

[00:23:26](https://youtu.be/6aCc7uEiLO0?t=1406) Small integrations find the changed contract at C

[00:24:06](https://youtu.be/6aCc7uEiLO0?t=1446) A feature flag keeps unfinished behavior unavailable

[00:24:33](https://youtu.be/6aCc7uEiLO0?t=1473) Control case: the contract stays the same

[00:25:35](https://youtu.be/6aCc7uEiLO0?t=1535) Scene 6: the same source gives a different answer

[00:26:10](https://youtu.be/6aCc7uEiLO0?t=1570) Predict: which inputs could explain the different answer?

[00:26:33](https://youtu.be/6aCc7uEiLO0?t=1593) Dependency drift: teaching-range 1.1 excludes the endpoint

[00:27:18](https://youtu.be/6aCc7uEiLO0?t=1638) Lockfiles record resolved versions, not allowed ranges

[00:27:51](https://youtu.be/6aCc7uEiLO0?t=1671) Config drift: MAX_MINUTES 90 rejects the same request

[00:28:50](https://youtu.be/6aCc7uEiLO0?t=1730) Secrets: keep the reference, not the value

[00:29:12](https://youtu.be/6aCc7uEiLO0?t=1752) Scene 7: will fix stuff explain this change later?

[00:29:44](https://youtu.be/6aCc7uEiLO0?t=1784) Predict: what will a future maintainer learn?

[00:30:04](https://youtu.be/6aCc7uEiLO0?t=1804) Build decision record DR-07 step by step

[00:31:13](https://youtu.be/6aCc7uEiLO0?t=1873) The author is unavailable: where is the reason now?

[00:32:18](https://youtu.be/6aCc7uEiLO0?t=1938) Bisection: which change first broke the boundary?

[00:32:51](https://youtu.be/6aCc7uEiLO0?t=1971) Check h4, h6 and h5: h5 removed the upper bound

[00:34:00](https://youtu.be/6aCc7uEiLO0?t=2040) Scene 8: which missing evidence blocks this change?

[00:34:46](https://youtu.be/6aCc7uEiLO0?t=2086) Predict: what must happen before the change is ready?

[00:35:06](https://youtu.be/6aCc7uEiLO0?t=2106) Resolve the authorization concern, then integrate

[00:35:38](https://youtu.be/6aCc7uEiLO0?t=2138) The trial ends: the 30 to 120 minute baseline returns

[00:36:11](https://youtu.be/6aCc7uEiLO0?t=2171) Approved but failing: repair the integration and rerun

[00:37:25](https://youtu.be/6aCc7uEiLO0?t=2245) Eight principles of collaboration and version history

[00:38:13](https://youtu.be/6aCc7uEiLO0?t=2293) Six checks with answers, and a library transfer question

[00:39:59](https://youtu.be/6aCc7uEiLO0?t=2399) What carries forward to Week 8, terms and sources

Music: A Caring Friend by Bad Snacks, No Rush by Dyalla, Sunny Days by Anno Domini Beats, Mediterranean View by Everet Almond, Golden Hour by Telecasted.

Every name, number and booking is a teaching example from the fictional Campus Rooms service.

Questions and updates: the links above and the comments below. Thank you for watching.



### Video Transcription


- [00:00:08](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=8) Greetings everyone. This is week 7 of the Software&nbsp; Engineering course. Today starts with a merge that&nbsp;&nbsp;

- [00:00:14](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=14) went green, and 1 question: which limit should&nbsp; you believe? Ari changes the booking rule in&nbsp;&nbsp;

- [00:00:21](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=21) Campus Rooms, the fictional booking service of&nbsp; this course. Bo adds a message for the booking&nbsp;&nbsp;

- [00:00:26](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=26) screen. They edit 2 different files. Ari's edit&nbsp; lowers the maximum duration from 120 minutes to&nbsp;&nbsp;

- [00:00:33](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=33) 90. The label says why: it is a temporary variant&nbsp; of rule R-02. Bo's message says: choose 30 to 120&nbsp;&nbsp;

- [00:00:42](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=42) minutes. That was true when Bo started, because&nbsp; the old rule allowed exactly that range. Now&nbsp;&nbsp;

- [00:00:49](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=49) let's combine the 2 edits. Both arrows join into&nbsp; 1 combined change, and the status turns green:&nbsp;&nbsp;

- [00:00:55](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=55) the text merged cleanly, with no conflict at all.&nbsp; On the right is what Ari sees. Ari asks for room&nbsp;&nbsp;

- [00:01:03](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=63) C101 for 100 minutes, and the new message promises&nbsp; 30 to 120 minutes. So decide before we ship it.&nbsp;&nbsp;

- [00:01:11](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=71) Both edits went in cleanly. Is the behavior&nbsp; ready? Ari tries 100 minutes, inside the range&nbsp;&nbsp;

- [00:01:17](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=77) the message offers, but above the new limit in&nbsp; the rule. Pause the video for a moment and decide:&nbsp;&nbsp;

- [00:01:24](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=84) once both edits combine, is the behavior ready,&nbsp; or will the system say no? Let's check this one&nbsp;&nbsp;

- [00:01:31](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=91) request. Ari presses Book, and the answer comes&nbsp; back: rejected by R-02, 100 minutes. The changed&nbsp;&nbsp;

- [00:01:38](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=98) rule wins. So the screen invites 100 minutes and&nbsp; then refuses them. The files combined cleanly, but&nbsp;&nbsp;

- [00:01:46](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=106) the message and the rule still disagree, so the&nbsp; combined behavior needs a check of its own. The&nbsp;&nbsp;

- [00:01:53](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=113) tool did its job: it combined text. It cannot know&nbsp; that 120 in a message and 90 in a rule describe&nbsp;&nbsp;

- [00:02:01](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=121) the same promise. Keep this small failure in mind.&nbsp; Every scene of this lecture comes back to it,&nbsp;&nbsp;

- [00:02:08](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=128) and the last scene restores the normal rule of 30&nbsp; to 120 minutes. To move between pages, I use the&nbsp;&nbsp;

- [00:02:15](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=135) arrow buttons at the top right of the deck. The&nbsp; next page connects this week to what you already&nbsp;&nbsp;

- [00:02:21](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=141) know. Week 6 followed requests across boundaries.&nbsp; A booking contract includes its results,&nbsp;&nbsp;

- [00:02:28](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=148) its failure meanings and its retry identity,&nbsp; and a decision record carries the reasons and&nbsp;&nbsp;

- [00:02:33](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=153) revisit triggers. This week those promises must&nbsp; survive several people changing the system. 3&nbsp;&nbsp;

- [00:02:40](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=160) of them matter today. R-01: overlapping bookings&nbsp; cannot both be confirmed for the same room. R-02:&nbsp;&nbsp;

- [00:02:48](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=168) a booking lasts 30 to 120 minutes, both limits&nbsp; included. And R-03: only the booking owner&nbsp;&nbsp;

- [00:02:55](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=175) may cancel. The 90 minute rule you just saw is a&nbsp; temporary trial of R-02. Every scene that uses it&nbsp;&nbsp;

- [00:03:02](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=182) marks it as temporary, and the approved baseline&nbsp; comes back before the lecture is over. Here is the&nbsp;&nbsp;

- [00:03:09](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=189) question of this lecture: how can several people&nbsp; change 1 system without losing intent or trust?&nbsp;&nbsp;

- [00:03:15](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=195) 5 learning outcomes lead to the answer. First,&nbsp; read a small commit graph and distinguish commits,&nbsp;&nbsp;

- [00:03:23](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=203) branch references and merges. Second, explain&nbsp; the difference between a textual conflict and an&nbsp;&nbsp;

- [00:03:28](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=208) incompatible behavioral change. Third, identify&nbsp; the context and evidence needed to review&nbsp;&nbsp;

- [00:03:34](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=214) a change. Fourth, explain how dependency and&nbsp; configuration choices affect reproducibility. And&nbsp;&nbsp;

- [00:03:41](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=221) fifth, use history and decision records to explain&nbsp; why a change was made. Check out the tutorial&nbsp;&nbsp;

- [00:03:47](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=227) description to see the chapters of the 8 scenes.&nbsp; Before the first scene, 1 practical question: when&nbsp;&nbsp;

- [00:03:54](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=234) you save a file, what exactly have you shared with&nbsp; your team? The next page follows 1 edit through 4&nbsp;&nbsp;

- [00:04:00](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=240) places. Saved on your machine is not the same as&nbsp; shared with the team. Follow Ari's policy edit,&nbsp;&nbsp;

- [00:04:08](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=248) 90 minutes, through 4 places, and watch what each&nbsp; step changes. The editor holds the proposed edit,&nbsp;&nbsp;

- [00:04:19](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=259) but nothing is saved yet. The working tree still&nbsp; says 120, and so do the selected changes. Let's&nbsp;&nbsp;

- [00:04:26](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=266) save the edit. Now the working tree, the files&nbsp; on your machine, says 90. The next commit would&nbsp;&nbsp;

- [00:04:32](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=272) still hold the old selected value, 120. Selecting&nbsp; the change prepares the next snapshot. In Git this&nbsp;&nbsp;

- [00:04:40](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=280) place is called the staging area. The selected&nbsp; content now says 90, but no commit exists so&nbsp;&nbsp;

- [00:04:46](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=286) far. Recording locally makes a commit, c3. It&nbsp; stores the prepared snapshot and its parent,&nbsp;&nbsp;

- [00:04:53](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=293) and the branch name policy-90 moves to c3 on&nbsp; your machine. Look at the bottom card. Your local&nbsp;&nbsp;

- [00:05:00](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=300) policy-90 points to c3, but origin/policy-90 still&nbsp; points to c2. Nobody else has this commit for now.&nbsp;&nbsp;

- [00:05:09](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=309) Sharing is a separate action. A push sends c3&nbsp; to the remote and asks it to update its branch.&nbsp;&nbsp;

- [00:05:14](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=314) The remote accepts, and the history on the remote&nbsp; now holds c3. And your remote-tracking reference,&nbsp;&nbsp;

- [00:05:22](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=322) origin/policy-90, now records the position you&nbsp; observed: c3. It is your local record of what the&nbsp;&nbsp;

- [00:05:29](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=329) remote reported to you. 1 note below the strip:&nbsp; an unsaved editor buffer is outside all 4 places,&nbsp;&nbsp;

- [00:05:36](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=336) and selected changes can differ from later&nbsp; edits to the working files. So a commit is a&nbsp;&nbsp;

- [00:05:42](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=342) recorded snapshot with a parent, and a branch name&nbsp; points at a commit. The next scene grows a whole&nbsp;&nbsp;

- [00:05:47](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=347) graph of them, one change at a time. Scene 1: a&nbsp; branch name moves, a recorded commit stays put.&nbsp;&nbsp;

- [00:05:55](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=355) Read the parent links, because they show which&nbsp; snapshots each change builds on. Here is how&nbsp;&nbsp;

- [00:06:00](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=360) to read the picture. A circle is a recorded&nbsp; commit, an arrow points from parent to child,&nbsp;&nbsp;

- [00:06:06](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=366) and a pill is a movable branch name. Right now&nbsp; there is 1 commit, c1, with the duration policy:&nbsp;&nbsp;

- [00:06:12](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=372) MAX_MINUTES equals 120. The branch name main&nbsp; sits on it, as a label. Decide before the reveal:&nbsp;&nbsp;

- [00:06:19](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=379) what is a branch name? Option A, 1 permanent copy&nbsp; of every file. Option B, a movable reference to a&nbsp;&nbsp;

- [00:06:25](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=385) commit. Option C, a guarantee that its changes are&nbsp; correct. Pause the video for a moment and choose&nbsp;&nbsp;

- [00:06:31](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=391) your answer. Let's grow the graph one change at a&nbsp; time. The Step button at the top right moves the&nbsp;&nbsp;

- [00:06:39](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=399) picture forward by 1 state. First, c1 records the&nbsp; duration policy. A commit represents a snapshot&nbsp;&nbsp;

- [00:06:47](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=407) and its recorded ancestry. Next comes c2, which&nbsp; adds the cancellation ownership check. Its parent&nbsp;&nbsp;

- [00:06:53](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=413) is c1. And the branch name main moves to this new&nbsp; snapshot. So the answer was B: a branch name is a&nbsp;&nbsp;

- [00:07:00](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=420) movable reference to a commit, not a copy of the&nbsp; files. Now the work divides. The branch policy-90&nbsp;&nbsp;

- [00:07:06](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=426) moves ahead with c3, which changes the maximum&nbsp; to 90 minutes, labeled as temporary. Meanwhile,&nbsp;&nbsp;

- [00:07:14](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=434) limit-message develops from c2 as well. Its commit&nbsp; c4 adds a duration message, with 120 hard-coded&nbsp;&nbsp;

- [00:07:21](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=441) into the wording. The 2 descendants share an&nbsp; ancestor, c2, but neither contains the other. This&nbsp;&nbsp;

- [00:07:28](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=448) is diverged work: 2 lines of change with 1 common&nbsp; ancestor. To combine them, c5 is a merge commit&nbsp;&nbsp;

- [00:07:35](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=455) with 2 parents, c3 and c4. Both histories now&nbsp; come together here. But look at what c5 records:&nbsp;&nbsp;

- [00:07:44](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=464) the rule says 90 and the message says 120. 2&nbsp; connected histories can still make a contradictory&nbsp;&nbsp;

- [00:07:50](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=470) promise. Finally, c6 restores the canonical&nbsp; 120 minute rule, and main moves forward along&nbsp;&nbsp;

- [00:07:58](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=478) the parent links to it. The earlier snapshots&nbsp; remain in history. The restoration is simply&nbsp;&nbsp;

- [00:08:04](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=484) another recorded change. Moving a name preserves&nbsp; the earlier commits and their parent links, so c3&nbsp;&nbsp;

- [00:08:10](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=490) and c4 are still there. That is the principle of&nbsp; this scene: history records relationships between&nbsp;&nbsp;

- [00:08:17](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=497) changes; branch names are movable references,&nbsp; not the changes themselves. In short, follow the&nbsp;&nbsp;

- [00:08:23](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=503) parents and watch the names move. Now a second&nbsp; condition. The buttons under Condition change 1&nbsp;&nbsp;

- [00:08:29](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=509) thing about the situation. No divergence means the&nbsp; current tip is already an ancestor of the other&nbsp;&nbsp;

- [00:08:35](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=515) one. Here main is at c2, and the policy branch&nbsp; is at c3. No separate change appeared on main.&nbsp;&nbsp;

- [00:08:43](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=523) How can main include the policy change? Option&nbsp; A, duplicate the files. Option B, always create&nbsp;&nbsp;

- [00:08:49](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=529) a 2-parent commit. Option C, move main to the&nbsp; descendant commit. Pause and choose. Follow the&nbsp;&nbsp;

- [00:08:57](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=537) existing parent link. Everything in main's current&nbsp; history is already inside the policy branch, so&nbsp;&nbsp;

- [00:09:03](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=543) there is nothing to reconcile here. So main simply&nbsp; moves from c2 to c3. This is a fast-forward,&nbsp;&nbsp;

- [00:09:09](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=549) and it adds no merge commit. The right answer was&nbsp; C. Compare the 2 conditions. A divergent history&nbsp;&nbsp;

- [00:09:16](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=556) needs reconciliation, like the merge commit c5. A&nbsp; fast-forward only moves a reference along existing&nbsp;&nbsp;

- [00:09:22](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=562) ancestry. Either way, the graph tells you what&nbsp; each change builds on, and nothing more. It does&nbsp;&nbsp;

- [00:09:29](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=569) not tell you whether the combined behavior&nbsp; is right. That is the next scene. Scene 2:&nbsp;&nbsp;

- [00:09:36](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=576) removing the conflict can remove the rule. The&nbsp; same validation function is edited twice, and&nbsp;&nbsp;

- [00:09:41](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=581) we ask which meaning survives the merge. On the&nbsp; left is the shared ancestor: MAX_MINUTES is 120,&nbsp;&nbsp;

- [00:09:49](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=589) and the function rejects anything under 30 or over&nbsp; the maximum. Edit A is the temporary policy. It&nbsp;&nbsp;

- [00:09:56](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=596) sets the maximum to 90, and it rewrites the upper&nbsp; check in a negated form, with the same meaning.&nbsp;&nbsp;

- [00:10:02](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=602) Edit B keeps 120, but restructures the body into&nbsp; a single return: minutes at least 30, and minutes&nbsp;&nbsp;

- [00:10:09](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=609) at most the maximum. Below them is the requirement&nbsp; for this trial: R-02, temporary variant. A booking&nbsp;&nbsp;

- [00:10:16](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=616) lasts 30 to 90 minutes, both included. Edit B&nbsp; keeps the same rule in a clearer shape, which is&nbsp;&nbsp;

- [00:10:22](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=622) useful on its own. Decide before the reveal: which&nbsp; version should the resolution keep? Option A,&nbsp;&nbsp;

- [00:10:28](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=628) the intended rule and the useful restructuring.&nbsp; Option B, the left version, as it is. Option C,&nbsp;&nbsp;

- [00:10:35](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=635) the right version, as it is. Pause the video&nbsp; for a moment and choose your answer. Both edits&nbsp;&nbsp;

- [00:10:42](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=642) rewrite the same lines, so the merge stops with&nbsp; a textual conflict. A person now has to write&nbsp;&nbsp;

- [00:10:47](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=647) the resolution, because the merge cannot pick&nbsp; 1 for them. Here is 1 resolution. It is valid&nbsp;&nbsp;

- [00:10:53](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=653) pseudocode, and the conflict markers are gone.&nbsp; It keeps MAX_MINUTES at 90, but its return value&nbsp;&nbsp;

- [00:10:59](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=659) checks only the lower bound, never the upper one.&nbsp; Let's compare its boundary results with R-02. 29&nbsp;&nbsp;

- [00:11:07](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=667) is rejected, 30 and 90 are accepted, and so far&nbsp; the resolution agrees with the rule. But 91,&nbsp;&nbsp;

- [00:11:14](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=674) 120 and 121 are all accepted, and R-02 rejects&nbsp; each of them. The temporary upper bound is gone.&nbsp;&nbsp;

- [00:11:23](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=683) So a clean file can still contain the wrong&nbsp; decision. The markers are gone, the code runs,&nbsp;&nbsp;

- [00:11:28](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=688) and the rule the trial needed has quietly slipped&nbsp; away. The principle: a merge resolution must&nbsp;&nbsp;

- [00:11:35](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=695) reconcile intent and verify the combined behavior,&nbsp; not merely remove conflict markers. In short,&nbsp;&nbsp;

- [00:11:41](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=701) keep both intentions, then check the boundary.&nbsp; Now the second condition, where the intent is&nbsp;&nbsp;

- [00:11:48](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=708) kept. This time the resolution should keep the&nbsp; temporary rule and the shorter validation function&nbsp;&nbsp;

- [00:11:55](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=715) together. Before we see it, which evidence&nbsp; distinguishes the 2 resolutions? Option A,&nbsp;&nbsp;

- [00:12:03](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=723) whether the conflict markers disappeared. Option&nbsp; B, whether the combined function enforces the&nbsp;&nbsp;

- [00:12:09](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=729) approved bounds. Option C, whether the file became&nbsp; shorter. Pause the video and decide which evidence&nbsp;&nbsp;

- [00:12:16](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=736) you would rely on. Here is the chosen resolution.&nbsp; It keeps MAX_MINUTES at 90, and its single return&nbsp;&nbsp;

- [00:12:23](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=743) checks both inclusive limits: at least 30, and&nbsp; at most the maximum. Now compare the boundaries&nbsp;&nbsp;

- [00:12:31](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=751) again. 90 is accepted, 91 and 121 are rejected,&nbsp; and every row agrees with R-02. The intended&nbsp;&nbsp;

- [00:12:39](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=759) boundary survives. So the answer is B. Both&nbsp; resolutions removed the markers, and only the&nbsp;&nbsp;

- [00:12:45](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=765) boundary results show which one kept the intended&nbsp; rule. The resolution preserves the new rule and&nbsp;&nbsp;

- [00:12:53](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=773) the structural improvement. Keep both intentions,&nbsp; then check the boundary: that is the habit to take&nbsp;&nbsp;

- [00:12:58](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=778) from this scene. Here the edits overlapped,&nbsp; so the merge stopped and asked a person. The&nbsp;&nbsp;

- [00:13:05](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=785) next scene is more dangerous: the edits never&nbsp; overlap, and the merge does not stop at all.&nbsp;&nbsp;

- [00:13:12](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=792) Scene 3: different files can still disagree&nbsp; about 1 promise. The temporary policy rejects 100&nbsp;&nbsp;

- [00:13:19](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=799) minutes. So what will the new message tell you?&nbsp; In the policy file, the lower and upper limits&nbsp;&nbsp;

- [00:13:25](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=805) are named constants, a minimum and a maximum,&nbsp; and the function accepts anything between them,&nbsp;&nbsp;

- [00:13:31](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=811) both included. In the messages file, the message&nbsp; function returns a fixed sentence: choose 30 to&nbsp;&nbsp;

- [00:13:40](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=820) 120 minutes. Its limit was typed straight into&nbsp; the sentence. Decide before the reveal: what does&nbsp;&nbsp;

- [00:13:47](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=827) a clean textual merge establish here? Option A,&nbsp; the user promise is consistent. Option B, the text&nbsp;&nbsp;

- [00:13:54](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=834) combined without an unresolved textual conflict.&nbsp; Option C, every relevant check passed. Pause the&nbsp;&nbsp;

- [00:14:01](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=841) video for a moment and choose your answer. The&nbsp; files were changed on separate lines of work, and&nbsp;&nbsp;

- [00:14:09](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=849) now they merge. Text merged cleanly: the 2 edits&nbsp; touched different files, so no line overlapped&nbsp;&nbsp;

- [00:14:16](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=856) with another. Now Ari requests 100 minutes, and&nbsp; the request is rejected by R-02, while the message&nbsp;&nbsp;

- [00:14:24](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=864) still invites durations up to 120. Between the&nbsp; files you can see why: the policy file enforces&nbsp;&nbsp;

- [00:14:31](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=871) 90, the messages file announces 120. 2 copies&nbsp; of 1 promise. So the answer was B. The merge&nbsp;&nbsp;

- [00:14:39](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=879) established only that the text combined without&nbsp; an unresolved conflict. The combined user promise&nbsp;&nbsp;

- [00:14:48](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=888) contradicts itself, in 2 places. 2 copies of the&nbsp; same decision have drifted apart. The principle:&nbsp;&nbsp;

- [00:14:55](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=895) textual integration and semantic integration are&nbsp; different kinds of evidence. Check the promise&nbsp;&nbsp;

- [00:15:01](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=901) across the combined files. So how do you stop&nbsp; the copies from drifting? The second condition,&nbsp;&nbsp;

- [00:15:08](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=908) 1 policy source, changes how the message gets its&nbsp; values, with the same request and the same rule.&nbsp;&nbsp;

- [00:15:16](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=916) Which value should supply the message? Option A,&nbsp; the approved policy used by validation. Option B,&nbsp;&nbsp;

- [00:15:22](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=922) a second constant in the messages file. Option&nbsp; C, the old message copied from main. Pause for&nbsp;&nbsp;

- [00:15:29](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=929) a moment and pick the source you would want a&nbsp; future change to follow. Now the message imports&nbsp;&nbsp;

- [00:15:36](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=936) the lower and upper limits from the policy file,&nbsp; and builds its sentence from those 2 values. It&nbsp;&nbsp;

- [00:15:43](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=943) follows the same approved numbers as validation.&nbsp; The same 100 minute request is still rejected,&nbsp;&nbsp;

- [00:15:49](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=949) and now the message says 30 to 90 minutes, which&nbsp; agrees with the decision. 1 source, 1 promise.&nbsp;&nbsp;

- [00:15:57](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=957) So the answer is A: the approved policy used by&nbsp; validation. The rejection and its explanation&nbsp;&nbsp;

- [00:16:04](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=964) now follow the same policy, and when the trial&nbsp; ends, they change together. A clean merge was&nbsp;&nbsp;

- [00:16:10](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=970) never the problem; 2 copies of 1 decision were.&nbsp; Next, a human reviewer looks at a change, and we&nbsp;&nbsp;

- [00:16:16](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=976) ask what that reviewer actually needs. Scene 4: a&nbsp; diff needs a claim you can check. Read the change&nbsp;&nbsp;

- [00:16:24](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=984) first, then reveal the purpose, constraints,&nbsp; checks and reasons behind each comment of the&nbsp;&nbsp;

- [00:16:29](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=989) review. The proposed change is by Ari, and Bo&nbsp; reviews it. The diff removes MAX_MINUTES 120&nbsp;&nbsp;

- [00:16:37](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=997) and adds MAX_MINUTES 90. The message still says 30&nbsp; to 120. And the change also includes an unrelated&nbsp;&nbsp;

- [00:16:45](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1005) helper rename. 2 different stories arrive in 1&nbsp; diff, which already makes the review harder to&nbsp;&nbsp;

- [00:16:51](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1011) follow. Below the diff is a useful boundary:&nbsp; linters and formatters handle routine style,&nbsp;&nbsp;

- [00:16:57](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1017) and human review examines correctness, security,&nbsp; design and meaning. Decide before the reveal:&nbsp;&nbsp;

- [00:17:03](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1023) what can you decide from this diff alone? Option&nbsp; A, every requirement is satisfied. Option B,&nbsp;&nbsp;

- [00:17:09](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1029) the author's confidence settles the&nbsp; question. Option C, you can see the edits,&nbsp;&nbsp;

- [00:17:14](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1034) but the purpose and the evidence are still needed.&nbsp; Pause the video and choose. Here is what the&nbsp;&nbsp;

- [00:17:21](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1041) reviewer needs. The purpose: the R-02 variant, a&nbsp; 90 minute upper limit, labeled as temporary. The&nbsp;&nbsp;

- [00:17:29](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1049) constraint: restore the approved 120 minute&nbsp; baseline afterward. And the alternatives:&nbsp;&nbsp;

- [00:17:35](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1055) copy the limit into every message, or read the&nbsp; approved limit from Policy. The answer was C. The&nbsp;&nbsp;

- [00:17:43](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1063) diff shows the edits; only this context tells the&nbsp; reviewer what the change claims and which behavior&nbsp;&nbsp;

- [00:17:49](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1069) must stay the same. Now the checks on the combined&nbsp; change. The boundary table passes: 90 is accepted,&nbsp;&nbsp;

- [00:17:55](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1075) 91 rejected. But the message check fails: it still&nbsp; says 120. And for R-03, the cancellation results&nbsp;&nbsp;

- [00:18:05](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1085) on the combined change are missing. Nobody has&nbsp; shown yet that only the owner can still cancel.&nbsp;&nbsp;

- [00:18:12](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1092) Each review comment names its reason and addresses&nbsp; the change, not the person. Correctness is&nbsp;&nbsp;

- [00:18:18](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1098) required: the message still says 120, so derive it&nbsp; from the policy value. Security is required too:&nbsp;&nbsp;

- [00:18:25](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1105) retain R-03, and show the owner and non-owner&nbsp; cancellation results. Design is required: the&nbsp;&nbsp;

- [00:18:31](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1111) helper rename is unrelated, so split it into its&nbsp; own change. Understandability is already resolved:&nbsp;&nbsp;

- [00:18:38](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1118) the change states why the variant exists and when&nbsp; it is restored. And the last one, a different name&nbsp;&nbsp;

- [00:18:45](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1125) for the constant, is only an optional preference.&nbsp; Required correctness and security concerns are not&nbsp;&nbsp;

- [00:18:53](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1133) the same as a preference. 1 concern stays open:&nbsp; the change must preserve cancellation ownership,&nbsp;&nbsp;

- [00:18:59](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1139) and its evidence is missing. Now the message is&nbsp; repaired: it derives the displayed limit from&nbsp;&nbsp;

- [00:19:05](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1145) Policy, and the message check passes, saying 90.&nbsp; The correctness comment is resolved, so its label&nbsp;&nbsp;

- [00:19:13](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1153) turns green. The authorization concern stays open&nbsp; until its missing evidence arrives. Here it is:&nbsp;&nbsp;

- [00:19:19](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1159) Ari can cancel B-001, and Bo is rejected. The&nbsp; ownership check stays in place. Both results are&nbsp;&nbsp;

- [00:19:26](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1166) linked to the change, and the approval explains&nbsp; the retained check. Ari owns the change decision;&nbsp;&nbsp;

- [00:19:33](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1173) Bo reviews the evidence. Finally, the helper&nbsp; rename moves into its own change, and the decision&nbsp;&nbsp;

- [00:19:41](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1181) is written down: read the limit from Policy, keep&nbsp; the ownership check, review the rename separately.&nbsp;&nbsp;

- [00:19:47](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1187) When context is missing, asynchronous review&nbsp; or a short call can resolve it. Keep the claim,&nbsp;&nbsp;

- [00:19:53](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1193) the checks, the decision owner and the reasons&nbsp; in the change description. The principle:&nbsp;&nbsp;

- [00:19:59](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1199) review is an evidence-based conversation about a&nbsp; change, not a vote on how convincing its author&nbsp;&nbsp;

- [00:20:06](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1206) sounds. In short, make the purpose and the checks&nbsp; visible. Now the second condition, a focused&nbsp;&nbsp;

- [00:20:12](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1212) change. The rename already has its own change, so&nbsp; the diff carries only the policy claim. What gets&nbsp;&nbsp;

- [00:20:19](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1219) easier? Option A, nothing: a small diff is safe&nbsp; by itself. Option B, following the policy claim&nbsp;&nbsp;

- [00:20:25](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1225) and its checks. Option C, skipping the checks&nbsp; of a short diff. Pause the video for a moment&nbsp;&nbsp;

- [00:20:30](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1230) and decide what a focused change really buys the&nbsp; reviewer. The answer is B. With the rename gone,&nbsp;&nbsp;

- [00:20:38](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1238) the context names 1 claim: the temporary 90 minute&nbsp; limit, and the behavior that must stay the same.&nbsp;&nbsp;

- [00:20:45](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1245) The checks and comments are the same as before,&nbsp; except design: the rename is already a separate&nbsp;&nbsp;

- [00:20:51](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1251) change. Correctness and security are still&nbsp; required here. A short diff does not skip any of&nbsp;&nbsp;

- [00:20:57](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1257) them. The message repair resolves correctness, and&nbsp; the owner and non-owner results resolve security,&nbsp;&nbsp;

- [00:21:03](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1263) exactly as before. Next, the decision is recorded&nbsp; with its reasons. A small, single-purpose change&nbsp;&nbsp;

- [00:21:12](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1272) is easier to follow, but it still needs a claim,&nbsp; checks and a decision owner. The last condition&nbsp;&nbsp;

- [00:21:18](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1278) is an assistant draft. An automated assistant&nbsp; drafted this diff, and its description says only:&nbsp;&nbsp;

- [00:21:24](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1284) “fix stuff”. The unrelated rename is in the diff&nbsp; again. What changes for the reviewer? Option A,&nbsp;&nbsp;

- [00:21:31](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1291) nothing: the requirement, checks and rationale&nbsp; are still needed. Option B, less: the assistant&nbsp;&nbsp;

- [00:21:37](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1297) checked its own change. Option C, only the style&nbsp; needs a human. Pause the video and choose. Think&nbsp;&nbsp;

- [00:21:44](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1304) about who stands behind the claim when the author&nbsp; is a tool. The answer is A. Nothing changes for&nbsp;&nbsp;

- [00:21:51](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1311) the reviewer. The claim is still R-02 at 90&nbsp; minutes, temporarily, and “fix stuff” states&nbsp;&nbsp;

- [00:21:57](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1317) none of this. The same comments apply, with the&nbsp; same reasons, and the same evidence resolves them:&nbsp;&nbsp;

- [00:22:04](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1324) the message repair, then the owner and non-owner&nbsp; results. At the end, the rename is split out and&nbsp;&nbsp;

- [00:22:11](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1331) the draft gets a real description: derive the&nbsp; duration message from the approved policy.&nbsp;&nbsp;

- [00:22:16](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1336) Now a reviewer can check that claim. Whoever&nbsp; writes a change, a person or an assistant,&nbsp;&nbsp;

- [00:22:22](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1342) the reviewer needs the same packet. Next,&nbsp; we ask when 2 lines of work discover that&nbsp;&nbsp;

- [00:22:27](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1347) their assumptions no longer agree. Scene 5: when&nbsp; will the incompatible assumption become visible?&nbsp;&nbsp;

- [00:22:35](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1355) The intended work is the same in both lines. Only&nbsp; the points where you check it against shared work&nbsp;&nbsp;

- [00:22:41](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1361) differ. In the middle is the common work. Above,&nbsp; small integrations check along the way. Below,&nbsp;&nbsp;

- [00:22:47](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1367) a long-running branch checks only at the end.&nbsp; Both start from the same shared contract at A,&nbsp;&nbsp;

- [00:22:54](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1374) where a message stores its own duration limit. The&nbsp; events B, C and D follow in order, not in measured&nbsp;&nbsp;

- [00:23:01](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1381) time. Decide before the reveal: the shared&nbsp; contract changes at B. Which line of work learns&nbsp;&nbsp;

- [00:23:07](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1387) about it sooner? Option A, the long-lived branch,&nbsp; because it has more commits to compare. Option B,&nbsp;&nbsp;

- [00:23:15](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1395) both at once, because the contract is different&nbsp; for both lines. Option C, the small integrations,&nbsp;&nbsp;

- [00:23:21](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1401) because their next check meets the new contract.&nbsp; Pause and choose. At B, the message contract&nbsp;&nbsp;

- [00:23:28](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1408) changes: from now on, a message reads the approved&nbsp; duration limit from Policy instead of storing&nbsp;&nbsp;

- [00:23:34](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1414) its own copy. At C, the next small integration&nbsp; checks the message work against the new contract,&nbsp;&nbsp;

- [00:23:40](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1420) and the old assumption is visible right away. The&nbsp; rework band runs only from B to C. The long-lived&nbsp;&nbsp;

- [00:23:47](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1427) branch keeps building on the old assumption. Only&nbsp; at D does its final integration meet the change,&nbsp;&nbsp;

- [00:23:53](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1433) after all the work from B to D. So the answer&nbsp; was C. Same intended work, same contract change,&nbsp;&nbsp;

- [00:23:59](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1439) but the small integrations met it while the work&nbsp; was small, and the long branch met it much later.&nbsp;&nbsp;

- [00:24:05](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1445) 1 more piece: frequent integration means&nbsp; unfinished work arrives early. A toggle&nbsp;&nbsp;

- [00:24:12](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1452) keeps the unfinished message code switched off,&nbsp; and each of its states needs checks. So this&nbsp;&nbsp;

- [00:24:20](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1460) switch separates integrating code from turning&nbsp; the behavior on for users. The principle: choose&nbsp;&nbsp;

- [00:24:26](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1466) a collaboration strategy that exposes incompatible&nbsp; assumptions early enough to act on them.&nbsp;&nbsp;

- [00:24:33](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1473) Now the control case: the contract stays&nbsp; the same. Will either line of work find a&nbsp;&nbsp;

- [00:24:38](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1478) mismatch? Option A, no, there is no changed&nbsp; assumption to find here. Option B, yes,&nbsp;&nbsp;

- [00:24:44](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1484) a long-lived branch always finds 1 at the end.&nbsp; Option C, yes, frequent integrations create their&nbsp;&nbsp;

- [00:24:50](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1490) own mismatches. Pause and make your choice. At B&nbsp; the contract remains the same, so no new mismatch&nbsp;&nbsp;

- [00:24:57](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1497) has been introduced. At C, the small integration&nbsp; still agrees with the contract as it is. And at D,&nbsp;&nbsp;

- [00:25:05](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1505) the later integration agrees too. So the answer&nbsp; was A. Integration frequency affects when you&nbsp;&nbsp;

- [00:25:10](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1510) discover a mismatch, not whether a mismatch&nbsp; exists. The same switch rule holds here:&nbsp;&nbsp;

- [00:25:16](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1516) unfinished behavior stays unavailable while you&nbsp; integrate. In short, meet changed assumptions&nbsp;&nbsp;

- [00:25:23](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1523) while the work is small. So far every scene&nbsp; changed a file. The next scene keeps the source&nbsp;&nbsp;

- [00:25:29](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1529) files exactly the same, and still gets a different&nbsp; answer. Scene 6: the source is the same, so why&nbsp;&nbsp;

- [00:25:37](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1537) did the answer change? We hold the source revision&nbsp; and the request fixed, and inspect what each run&nbsp;&nbsp;

- [00:25:43](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1543) actually ran on. On the left is the declared run.&nbsp; Its source revision is demo-r1, with the resolved&nbsp;&nbsp;

- [00:25:51](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1551) dependency teaching-range 1.0, teaching runtime&nbsp; 1, and MAX_MINUTES 120. It also names the data&nbsp;&nbsp;

- [00:25:59](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1559) fixture and the build artifact. The second machine&nbsp; on the right lists the same 6 inputs, and both&nbsp;&nbsp;

- [00:26:05](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1565) runs answer the same request for 120 minutes.&nbsp; Decide before the reveal: the second machine&nbsp;&nbsp;

- [00:26:12](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1572) gives a different answer. Which inputs could&nbsp; explain it? Option A, only the source revision:&nbsp;&nbsp;

- [00:26:18](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1578) the same code gives the same answer. Option B,&nbsp; resolved dependencies, runtime, configuration&nbsp;&nbsp;

- [00:26:25](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1585) or data. Option C, nothing: the same request must&nbsp; give the same answer. Pause the video and choose.&nbsp;&nbsp;

- [00:26:32](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1592) Only 1 input changes: teaching-range resolves to&nbsp; 1.1 on the second machine. The allowed constraint,&nbsp;&nbsp;

- [00:26:39](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1599) at least 1.0 and below 2, permits either version.&nbsp; Now read the dependency's comparison. Version 1.0&nbsp;&nbsp;

- [00:26:47](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1607) accepts minutes up to and including the maximum.&nbsp; Version 1.1 uses strictly less than, so a request&nbsp;&nbsp;

- [00:26:54](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1614) of exactly the maximum is refused there. So the&nbsp; same 120 minute request now gets a different&nbsp;&nbsp;

- [00:27:02](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1622) answer: accepted on the declared run, rejected on&nbsp; the second machine. The answer is B. To repair it,&nbsp;&nbsp;

- [00:27:10](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1630) restore the resolved teaching-range 1.0 and repeat&nbsp; the request. Both teaching runs agree again. A&nbsp;&nbsp;

- [00:27:18](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1638) lockfile records the selected versions, while a&nbsp; constraint such as at least 1.0, below 2, allows&nbsp;&nbsp;

- [00:27:25](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1645) more than 1 selection. So record resolved inputs,&nbsp; not only allowed version ranges. And keep 2&nbsp;&nbsp;

- [00:27:32](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1652) questions apart: reproducing a run is 1 question,&nbsp; trusting a dependency is another. The principle:&nbsp;&nbsp;

- [00:27:38](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1658) reproducibility requires control of the relevant&nbsp; inputs, not just possession of the source files.&nbsp;&nbsp;

- [00:27:45](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1665) In short, keep the inputs that explain the result,&nbsp; together with the source. The second condition,&nbsp;&nbsp;

- [00:27:52](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1672) config drifts. This time only MAX_MINUTES differs.&nbsp; What happens to the 120 minute request? Option A,&nbsp;&nbsp;

- [00:27:59](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1679) rejected: that run reads a maximum of 90.&nbsp; Option B, accepted, because the source and&nbsp;&nbsp;

- [00:28:05](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1685) dependency are unchanged. Option C, accepted,&nbsp; because configuration is not part of a run.&nbsp;&nbsp;

- [00:28:11](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1691) Pause and choose. Only MAX_MINUTES changes, from&nbsp; 120 to 90, on the second machine. The source and&nbsp;&nbsp;

- [00:28:20](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1700) the dependency stay fixed, and both runs use the&nbsp; same inclusive comparison. That comparison reads&nbsp;&nbsp;

- [00:28:29](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1709) a different configured maximum, so the request is&nbsp; accepted on the declared run and rejected on the&nbsp;&nbsp;

- [00:28:35](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1715) second machine. The right answer was A. Restore&nbsp; MAX_MINUTES 120 and the 2 runs agree again. The&nbsp;&nbsp;

- [00:28:42](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1722) source stayed at demo-r1 the whole time; the&nbsp; changed limit produced the different answer.&nbsp;&nbsp;

- [00:28:50](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1730) 1 more input belongs with configuration: the&nbsp; rooms token is a secret. Store its reference&nbsp;&nbsp;

- [00:28:55](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1735) with the configuration, and keep the secret&nbsp; value itself outside the repository. The inputs&nbsp;&nbsp;

- [00:29:02](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1742) explain the result, and the history explains&nbsp; the reason. The next scene asks whether a&nbsp;&nbsp;

- [00:29:06](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1746) short description like “fix stuff” can explain a&nbsp; change later. Scene 7: will “fix stuff” help you&nbsp;&nbsp;

- [00:29:14](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1754) understand this change later? The diff shows what&nbsp; changed. A useful record explains the problem,&nbsp;&nbsp;

- [00:29:20](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1760) the intended behavior and the constraints. On the&nbsp; left is a weak change description: “fix stuff”,&nbsp;&nbsp;

- [00:29:27](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1767) linked to nothing. Which problem? Which expected&nbsp; behavior? Which constraint? It answers none of&nbsp;&nbsp;

- [00:29:33](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1773) these. On the right is decision record DR-07.&nbsp; It links the change, message-policy-fix,&nbsp;&nbsp;

- [00:29:39](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1779) to the decision and to requirements R-02 and R-03.&nbsp; Right now the original author can still answer&nbsp;&nbsp;

- [00:29:46](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1786) questions. Decide before the reveal: what will a&nbsp; future maintainer learn from “fix stuff”? Option&nbsp;&nbsp;

- [00:29:52](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1792) A, the reason for the decision. Option B, very&nbsp; little about the problem, contract or constraint.&nbsp;&nbsp;

- [00:29:58](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1798) Option C, which alternative was rejected. Pause&nbsp; and choose. Let's build the record step by step.&nbsp;&nbsp;

- [00:30:06](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1806) First the observed problem: the temporary policy&nbsp; rejects 100 minutes while the message still offers&nbsp;&nbsp;

- [00:30:13](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1813) 120. Then the intended behavior: the message&nbsp; and the duration check use the same approved&nbsp;&nbsp;

- [00:30:20](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1820) limit. And the constraint: keep R-03 ownership&nbsp; unchanged, and restore 120 after the trial. Next,&nbsp;&nbsp;

- [00:30:29](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1829) the alternative and the reason it lost: a second&nbsp; hard-coded message was rejected, because 2 copies&nbsp;&nbsp;

- [00:30:35](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1835) drift independently. You saw exactly that drift&nbsp; in scene 3. Finally, the checks: 90 accepted,&nbsp;&nbsp;

- [00:30:42](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1842) 91 rejected, the message says 90, and Bo cannot&nbsp; cancel Ari's booking B-001. So the answer was B:&nbsp;&nbsp;

- [00:30:50](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1850) “fix stuff” tells a future maintainer very little.&nbsp; A conversation supplies context now, and keeping&nbsp;&nbsp;

- [00:30:56](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1856) its useful conclusion supplies that context to&nbsp; the next maintainer. The principle: documentation&nbsp;&nbsp;

- [00:31:02](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1862) earns its place by preserving information that&nbsp; cannot be reliably reconstructed from the code. In&nbsp;&nbsp;

- [00:31:08](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1868) short, keep the reason that the code cannot tell.&nbsp; Now the harder condition: the original author is&nbsp;&nbsp;

- [00:31:15](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1875) unavailable. The 2 records are all you have. Where&nbsp; can you still find why the message follows Policy?&nbsp;&nbsp;

- [00:31:22](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1882) Option A, in the diff of the messages file. Option&nbsp; B, in “fix stuff”, the change description. Option&nbsp;&nbsp;

- [00:31:28](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1888) C, in DR-07: its problem, constraint and&nbsp; rejected alternative. Pause the video for&nbsp;&nbsp;

- [00:31:34](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1894) a moment and choose. The record fills in the&nbsp; same way: the observed problem, the intended&nbsp;&nbsp;

- [00:31:41](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1901) behavior and the constraint. None of it depends on&nbsp; reaching the author. Then the rejected alternative&nbsp;&nbsp;

- [00:31:48](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1908) and the linked checks. So the answer was C. The&nbsp; diff shows the edit, “fix stuff” shows nothing,&nbsp;&nbsp;

- [00:31:54](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1914) and only DR-07 keeps the reason. The record still&nbsp; explains the choice. Without the author, you can&nbsp;&nbsp;

- [00:32:01](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1921) ask whether the original constraint still applies,&nbsp; and decide from the evidence. A record explains&nbsp;&nbsp;

- [00:32:07](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1927) why a change was made. But first you sometimes&nbsp; need to find which change it was. The next page&nbsp;&nbsp;

- [00:32:13](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1933) searches a history for the change that broke a&nbsp; boundary. Which change first broke the boundary?&nbsp;&nbsp;

- [00:32:20](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1940) Test a midpoint, keep the part that contains the&nbsp; failure, and repeat. This use of history is called&nbsp;&nbsp;

- [00:32:26](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1946) bisection. We need a repeatable check: does the&nbsp; 91-minute boundary check fail under the temporary&nbsp;&nbsp;

- [00:32:34](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1954) 90 minute rule? Good means 91 is rejected. Bad&nbsp; means it is accepted anyway. This is a separate,&nbsp;&nbsp;

- [00:32:41](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1961) straight history, h1 to h8, not the commit graph&nbsp; from earlier. h1 is known good, and h8 is known&nbsp;&nbsp;

- [00:32:48](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1968) bad, so those are the 2 endpoints. So the suspect&nbsp; range holds 7 changes, h2 through h8. Instead of&nbsp;&nbsp;

- [00:32:55](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1975) testing them one by one, test the middle. Let's&nbsp; check h4. h4 is good: 91 is still rejected there.&nbsp;&nbsp;

- [00:33:03](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1983) So the failure came later, and the suspect range&nbsp; narrows to 4 changes: h5 to h8, inclusive. Next,&nbsp;&nbsp;

- [00:33:11](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1991) the midpoint of what is left: check h6. It is bad,&nbsp; so the failure is at h6 or before it. 2 candidates&nbsp;&nbsp;

- [00:33:17](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=1997) remain: h5 and h6. 1 more check, h5. It is bad&nbsp; too. The suspect range is now a single change: h5&nbsp;&nbsp;

- [00:33:25](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2005) is the first failing change. Just 3 checks instead&nbsp; of 7. And the finding: h5 removed the upper bound.&nbsp;&nbsp;

- [00:33:33](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2013) The search tells you where to investigate;&nbsp; the decision record explains why. Bisection&nbsp;&nbsp;

- [00:33:38](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2018) works only under 2 conditions: the check must be&nbsp; repeatable, and the failure must persist from its&nbsp;&nbsp;

- [00:33:44](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2024) introduction all the way to the bad end of the&nbsp; range. So history helps twice: bisection finds&nbsp;&nbsp;

- [00:33:51](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2031) the change, and a record like DR-07 explains it.&nbsp; Now let's decide when a change is actually ready&nbsp;&nbsp;

- [00:33:57](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2037) for integration. Scene 8: which missing evidence&nbsp; blocks this change? Passing checks, human approval&nbsp;&nbsp;

- [00:34:05](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2045) and combined behavior answer different questions,&nbsp; so read each row on its own. Intended behavior,&nbsp;&nbsp;

- [00:34:13](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2053) satisfied: the temporary 90 minute limit, to be&nbsp; restored afterward. Boundary checks, satisfied.&nbsp;&nbsp;

- [00:34:19](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2059) Combined behavior, satisfied: the displayed limit&nbsp; agrees with Policy. But the authorization concern&nbsp;&nbsp;

- [00:34:26](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2066) is unanswered: the cancellation question has no&nbsp; owner or non-owner result yet. And human review&nbsp;&nbsp;

- [00:34:32](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2072) keeps that R-03 concern open. The integration&nbsp; check itself is satisfied: the combined change&nbsp;&nbsp;

- [00:34:39](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2079) passes its relevant checks. So the status at the&nbsp; bottom reads: evidence missing. Decide before&nbsp;&nbsp;

- [00:34:47](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2087) the reveal: the checks pass, so what needs to&nbsp; happen before this change is ready? Option A,&nbsp;&nbsp;

- [00:34:52](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2092) check the authorization behavior that is still&nbsp; open. Option B, count the green indicators. Option&nbsp;&nbsp;

- [00:34:59](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2099) C, let 1 approval settle every question.&nbsp; Pause the video for a moment and choose.&nbsp;&nbsp;

- [00:35:06](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2106) 1 question remains: can Bo cancel Ari's booking&nbsp; after this change? Now we run it. Ari can cancel&nbsp;&nbsp;

- [00:35:13](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2113) B-001; Bo's attempt is rejected under R-03. The&nbsp; concern is resolved, and human review records its&nbsp;&nbsp;

- [00:35:20](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2120) decision and rationale. So the answer was A: check&nbsp; the unresolved authorization behavior itself. Now&nbsp;&nbsp;

- [00:35:28](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2128) the intent, the review decision and the relevant&nbsp; checks all support integrating this change.&nbsp;&nbsp;

- [00:35:34](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2134) The status reads: ready to integrate, in green.&nbsp; And here the trial ends. R-02 is restored to 30 to&nbsp;&nbsp;

- [00:35:42](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2142) 120 minutes, inclusive, and the affected boundary&nbsp; and message checks run again. 120 is accepted,&nbsp;&nbsp;

- [00:35:50](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2150) 121 is rejected, the message agrees, and ownership&nbsp; stays the same. Later weeks use this canonical&nbsp;&nbsp;

- [00:35:57](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2157) baseline. The principle: integration readiness&nbsp; is a justified judgment about the change and&nbsp;&nbsp;

- [00:36:03](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2163) its context, not a single green indicator. In&nbsp; short, resolve the concern behind each indicator.&nbsp;&nbsp;

- [00:36:10](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2170) The second condition reverses the situation:&nbsp; integration fails. Here human review has approved&nbsp;&nbsp;

- [00:36:16](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2176) the change, but the combined-change check fails,&nbsp; and approval cannot repair its behavior. So what&nbsp;&nbsp;

- [00:36:23](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2183) needs to happen now? Option A, count the green&nbsp; indicators. Option B, let the approval settle the&nbsp;&nbsp;

- [00:36:29](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2189) failing check. Option C, repair the integration&nbsp; failure and run its check again. Pause the video&nbsp;&nbsp;

- [00:36:35](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2195) for a moment, and decide what an approval can&nbsp; settle, and what it can never settle alone.&nbsp;&nbsp;

- [00:36:42](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2202) Approval and a failing integration check describe&nbsp; different things. The failing behavior still needs&nbsp;&nbsp;

- [00:36:48](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2208) repair, so we repair the combined behavior and&nbsp; rerun the check. Now it passes. So the answer was&nbsp;&nbsp;

- [00:36:56](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2216) C. With the check passing and the review approved,&nbsp; the change is ready to integrate, and the trial&nbsp;&nbsp;

- [00:37:03](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2223) ends with the same restoration. Canonical baseline&nbsp; restored. Neither a green check nor an approval&nbsp;&nbsp;

- [00:37:11](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2231) alone made this change ready; each indicator&nbsp; answered its own question. That completes the 8&nbsp;&nbsp;

- [00:37:17](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2237) scenes. The next page collects their principles,&nbsp; with 6 questions to check your understanding.&nbsp;&nbsp;

- [00:37:24](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2244) Here are the 8 principles of this lecture, one per&nbsp; scene. One: history records relationships between&nbsp;&nbsp;

- [00:37:31](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2251) changes; branch names are movable references, not&nbsp; the changes themselves. 2: a merge resolution must&nbsp;&nbsp;

- [00:37:38](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2258) reconcile intent and verify the combined behavior.&nbsp; 3: textual integration and semantic integration&nbsp;&nbsp;

- [00:37:45](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2265) are different kinds of evidence. 4: review is&nbsp; an evidence-based conversation, not a vote on&nbsp;&nbsp;

- [00:37:51](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2271) how convincing its author sounds. 5: choose a&nbsp; collaboration strategy that exposes incompatible&nbsp;&nbsp;

- [00:37:57](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2277) assumptions early. 6: reproducibility requires&nbsp; control of the relevant inputs. 7: documentation&nbsp;&nbsp;

- [00:38:04](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2284) keeps the reason the code cannot tell. And 8:&nbsp; integration readiness is a justified judgment,&nbsp;&nbsp;

- [00:38:10](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2290) not a single green indicator. Now 6 checks. Decide&nbsp; your answer first, then open each one. Check 1:&nbsp;&nbsp;

- [00:38:17](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2297) what distinguishes a branch label from a commit? A&nbsp; branch label points to a commit and can move; the&nbsp;&nbsp;

- [00:38:25](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2305) recorded commit represents a particular snapshot&nbsp; and its ancestry. Check 2: can 2 changes merge&nbsp;&nbsp;

- [00:38:30](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2310) cleanly and still conflict? Yes. Their behavior&nbsp; or assumptions can contradict each other even when&nbsp;&nbsp;

- [00:38:38](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2318) the edited text does not overlap, as in the clean&nbsp; merge we saw. Next check: what information should&nbsp;&nbsp;

- [00:38:44](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2324) accompany a change to the policy? The intended&nbsp; requirement, the affected behavior, the relevant&nbsp;&nbsp;

- [00:38:50](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2330) design constraints, and checks that demonstrate&nbsp; the change. Check 4: why record dependency inputs?&nbsp;&nbsp;

- [00:38:59](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2339) Because the same source can run differently when&nbsp; its resolved dependencies or configuration differ.&nbsp;&nbsp;

- [00:39:05](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2345) Check 5: what should resolve a substantive review&nbsp; disagreement? A clear claim, the evidence needed&nbsp;&nbsp;

- [00:39:13](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2353) to decide it, and an accountable decision. And the&nbsp; durable rationale should survive the discussion.&nbsp;&nbsp;

- [00:39:21](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2361) The last check leaves room booking behind. A&nbsp; library's code and documentation merge cleanly,&nbsp;&nbsp;

- [00:39:26](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2366) but they describe different default behavior. Is&nbsp; the change ready? Not yet. Resolve the intended&nbsp;&nbsp;

- [00:39:34](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2374) contract first, then compare the implementation&nbsp; and the documentation with that contract in turn.&nbsp;&nbsp;

- [00:39:41](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2381) A textual merge detects some overlapping edits,&nbsp; but it does not reconcile meaning across different&nbsp;&nbsp;

- [00:39:47](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2387) files. That is the lesson of the opening, in a new&nbsp; setting. The last page lists what carries forward&nbsp;&nbsp;

- [00:39:53](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2393) to next week, the terms of this lecture, and where&nbsp; to read more. Week 8 starts from this question:&nbsp;&nbsp;

- [00:40:00](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2400) what makes a verification check useful,&nbsp; and what can a passing suite still fail to&nbsp;&nbsp;

- [00:40:06](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2406) establish? 3 things carry forward: the review&nbsp; packet, with a clear claim, relevant checks,&nbsp;&nbsp;

- [00:40:12](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2412) resolved concerns and lasting reasons; the&nbsp; canonical R-02 range and R-03 ownership rule;&nbsp;&nbsp;

- [00:40:19](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2419) and that question about checks. In practice, as of&nbsp; 2026: Git records history, and GitHub and GitLab&nbsp;&nbsp;

- [00:40:26](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2426) host the pull or merge requests where review&nbsp; happens. Lockfiles such as package-lock.json and&nbsp;&nbsp;

- [00:40:33](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2433) uv.lock record resolved dependencies, and tools&nbsp; like Ruff, ESLint and Prettier handle routine&nbsp;&nbsp;

- [00:40:40](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2440) linting or formatting before human review.&nbsp; In the middle are the terms of this week,&nbsp;&nbsp;

- [00:40:46](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2446) from commit and branch reference to semantic&nbsp; conflict, lockfile, feature flag, decision record&nbsp;&nbsp;

- [00:40:52](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2452) and bisection. And on the right are the sources:&nbsp; the software engineering body of knowledge, the&nbsp;&nbsp;

- [00:40:59](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2459) computing curriculum report, Pro Git on branching&nbsp; and merging, Google's code review practices, and&nbsp;&nbsp;

- [00:41:05](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2465) the docs for git bisect and lockfiles. So today&nbsp; you followed 1 small promise through shared work:&nbsp;&nbsp;

- [00:41:12](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2472) how history records changes, why a clean merge can&nbsp; still break a promise, and what a reviewer needs&nbsp;&nbsp;

- [00:41:19](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2479) to see. You also saw how recorded inputs, lasting&nbsp; reasons and real evidence keep a team's changes&nbsp;&nbsp;

- [00:41:26](https://www.youtube.com/watch?v=6aCc7uEiLO0&t=2486) trustworthy. Thank you for watching, and I will&nbsp; see you in the next lecture, week 8, on testing.
