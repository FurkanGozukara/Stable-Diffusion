# C# Programming (Intermediate) - Lecture 10: Entity Framework Search, Multithreading Synchronization

## Full tutorial link > https://www.youtube.com/watch?v=OQYZL5jH7gs

[![C# Programming (Intermediate) - Lecture 10: Entity Framework Search, Multithreading Synchronization](https://i.ytimg.com/vi_webp/OQYZL5jH7gs/maxresdefault.webp)](https://www.youtube.com/watch?v=OQYZL5jH7gs "C# Programming (Intermediate) - Lecture 10: Entity Framework Search, Multithreading Synchronization")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/C-Programming-Intermediate-Lecture-10-Entity-Framework-Search-Multithreading-Synchronization.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/C-Programming-Intermediate-Lecture-10-Entity-Framework-Search-Multithreading-Synchronization.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


C# Programming (Advanced/Intermediate) Lectures (10/14) will teach you #CSharp #programming from beginner to intermediate/expert level. This course is an excellent source to learn advanced concepts in C# #coding. If you are a beginner to C#, watch our previous course lectures. The playlist link of the previous course is below.

Full playlist of the previous course: C# For Beginners ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffskoSXySh0MdiayPJsBZ7m2o](https://www.youtube.com/playlist?list=PL_pbwdIyffskoSXySh0MdiayPJsBZ7m2o)

Discord ➡️ [https://bit.ly/SECoursesDiscord](https://bit.ly/SECoursesDiscord)

Patreon ➡️ [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Technology Playlist (30+ Tutorial / Guide / News / Review Videos) ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3](https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3)

Stable Diffusion Playlist (30+ Tutorial / Guide Videos) ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

Please join discord, mention me and ask me any questions. Thank you for like, subscribe, share and Patreon support. I am open to private consulting with Patreon subscription.

Full playlist of this course ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffslHaBdS3RUW26RKzSjkl8m4](https://www.youtube.com/playlist?list=PL_pbwdIyffslHaBdS3RUW26RKzSjkl8m4)

You can watch for free our C# Programming, ASP .NET Core MVC programming, Machine Learning and Software Engineering related courses on our playlists page ⤵️

[https://www.youtube.com/@SECourses/playlists](https://www.youtube.com/@SECourses/playlists)

GitHub code repository of this course (source codes of the lectures) ⤵️

[https://github.com/FurkanGozukara/Introduction-to-Programming-2-2021](https://github.com/FurkanGozukara/Introduction-to-Programming-2-2021)

In lecture 10:

* Decimal values get rounded if precision is not enough

* How to add searching / filtering feature to your entity framework context queries

* How to capture key press events application wide and do actions based on selected tab

* What is yield return and how to use yield return

* Yield return example

* What is data racing when working with multi-tasking

* How to prevent data racing with Synchronization between threads by using lock methodology

* How to achieve thread-safety when working with multiple threads/tasks

* How can we use Interlocked to ensure our operations on int32 or int64 variables are thread-safe

Decimal values get rounded if precision is not enough:

In computing, decimal values represent fractional numbers with a fixed number of digits after the decimal point. These digits are commonly referred to as the precision of the number. When performing calculations with decimal values, it is important to maintain the desired level of precision to avoid inaccuracies or rounding errors.

If the precision of the decimal value is not enough, it can lead to rounding errors, which can affect the accuracy of the final result. For example, if you have a decimal value of 3.14159265359 and you want to round it to two decimal places, the result would be 3.14. However, if the precision is not enough, the result could be rounded to 3.15 instead, resulting in an inaccurate value.

To avoid rounding errors, it is important to ensure that the precision of the decimal value is sufficient for the calculations being performed. This can be achieved by using a larger number of decimal places, or by using more precise data types such as decimal instead of float or double.

How to add searching / filtering feature to your entity framework context queries:

Entity Framework is a popular Object-Relational Mapping (ORM) framework used to access and manipulate data stored in a database. One of the common requirements of an application is to search and filter data based on specific criteria. Entity Framework provides a number of methods to achieve this functionality.

The most common method is to use the Where clause to filter data based on a specific condition. For example, to filter a list of customers based on their name, you can use the following code:

You can also use other methods such as Contains, StartsWith, and EndsWith to perform more advanced searches. For example, to search for customers whose name starts with "J", you can use the following code:

Another useful method is the OrderBy clause, which allows you to sort the data based on a specific column. For example, to sort the customers by their name in ascending order, you can use the following code:

How to capture key press events application wide and do actions based on selected tab:

Capturing key press events is a common requirement in many applications, especially those with a lot of user interaction. In order to capture key press events application wide, you can use the Application class in C#.

The Application class provides an event called KeyDown, which is raised when a key is pressed down. To capture this event, you can add a handler to the KeyDown event in the Application class. For example, to capture the "A" key press event, you can use the following code:

To do actions based on the selected tab, you can use the TabControl class in C#. The TabControl class provides an event called SelectedIndexChanged, which is raised when the selected tab is changed.



### Video Transcription


- [00:00:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1) Hello, dear students,

- [00:00:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3) students, welcome to the 10th

- [00:00:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3) welcome to the 10th lecture of the course "Introduction

- [00:00:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5) lecture of the course "Introduction to Programming 2 in

- [00:00:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6) to Programming 2 in C#", which is also

- [00:00:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=7) C#", which is also known as "

- [00:00:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=8) known as " Advanced

- [00:00:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=8) Advanced Programming". So,

- [00:00:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=10) Programming". So, we will continue from where we

- [00:00:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=11) we will continue from where we

- [00:00:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=13) left off in the last lecture.

- [00:00:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=14) last lecture.

- [00:00:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=18) Let's start, as always, by cloning our

- [00:00:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=19) cloning our code. Okay, if

- [00:00:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=42) code. Okay, if you remember, we had a

- [00:00:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=44) you remember, we had a problem with a certain

- [00:00:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=45) problem with a certain drug, and I

- [00:00:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=46) drug, and I hope you

- [00:00:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=47) hope you found it. Meanwhile, uh,

- [00:00:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=52) found it. Meanwhile, uh,

- [00:00:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=56) watching our video from last

- [00:00:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=57) video from last lecture. So I'll start by

- [00:01:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=61) lecture. So I'll start by showing you

- [00:01:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=63) showing you where the

- [00:01:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=64) where the error is, and then we'll

- [00:01:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=65) error is, and then we'll add

- [00:01:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=66) add search functionality to our

- [00:01:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=67) search functionality to our app. Good. So

- [00:01:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=76) app. Good. So we had a

- [00:01:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=77) we had a problem with a particular

- [00:01:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=78) problem with a particular drug and it was uh

- [00:01:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=82) drug and it was uh digoxin 0.25 mg and

- [00:01:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=89) digoxin 0.25 mg and why do you think we had a

- [00:01:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=91) why do you think we had a problem with

- [00:01:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=92) problem with that drug?

- [00:01:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=98) that drug? Okay, I

- [00:01:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=99) Okay, I used uh

- [00:01:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=100) used uh debugger to uh

- [00:01:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=103) debugger to uh

- [00:01:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=106) fix this error. But I think there is

- [00:01:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=107) error. But I think there is another way. I

- [00:01:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=109) another way. I already know what the

- [00:01:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=110) already know what the mistake was because I

- [00:01:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=112) mistake was because I figured it out quickly. But uh I'll

- [00:01:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=115) figured it out quickly. But uh I'll also try to

- [00:01:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=116) also try to explain it to you uh in another

- [00:01:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=118) explain it to you uh in another way. So, every

- [00:02:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=124) way. So, every query is executed in

- [00:02:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=125) query is executed in our database.

- [00:02:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=126) our database.

- [00:02:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=129) every query and we can intercept them

- [00:02:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=130) can intercept them using SQL Server

- [00:02:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=132) using SQL Server Profiler. Since there are no problems in

- [00:02:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=137) Profiler. Since there are no problems in our source

- [00:02:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=138) our source code,

- [00:02:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=139) code, the error must be

- [00:02:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=140) the error must be related to the

- [00:02:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=141) related to the database side. So

- [00:02:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=146) database side. So let's try to

- [00:02:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=147) let's try to catch this

- [00:02:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=148) catch this error and see

- [00:02:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=149) error and see what it is. Okay, I'm

- [00:02:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=152) what it is. Okay, I'm checking if

- [00:02:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=154) checking if standard SQL works. Good.

- [00:02:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=159) standard SQL works. Good.

- [00:02:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=159) standard SQL works. Good. And let's run

- [00:02:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=160) And let's run our

- [00:02:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=161) our software to

- [00:02:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=167) software to see which query

- [00:02:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=169) see which query uh is causing the error.

- [00:02:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=170) uh is causing the error.

- [00:02:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=178) Good. Good. The

- [00:02:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=179) The software is still

- [00:02:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=179) software is still loading.

- [00:03:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=180) loading.

- [00:03:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=183) Good. First we need to log in

- [00:03:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=184) need to log in and let's

- [00:03:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=187) and let's check our

- [00:03:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=188) check our users table

- [00:03:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=190) users table . Okay, let's

- [00:03:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=206) . Okay, let's enter as a doctor.

- [00:03:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=207) enter as a doctor.

- [00:03:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=212) Good. And I'll click " load data to

- [00:03:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=213) load data to database" and

- [00:03:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=214) database" and watch for the error.

- [00:03:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=216) watch for the error.

- [00:03:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=217) watch for the error. Good. So, these uh

- [00:03:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=219) Good. So, these uh

- [00:03:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=223) requests were fulfilled. You see that the

- [00:03:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=224) You see that the completed request is the

- [00:03:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=225) completed request is the selection of a drug.

- [00:03:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=226) selection of a drug.

- [00:03:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=229) Let's see what result it

- [00:03:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=230) what result it returns. Good. So, the

- [00:03:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=234) returns. Good. So, the executed query

- [00:03:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=235) executed query returns this, and then

- [00:03:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=236) returns this, and then we continue. Okay,

- [00:04:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=241) we continue. Okay, before

- [00:04:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=243) before the error occurred, let's

- [00:04:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=244) the error occurred, let's check what

- [00:04:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=245) check what queries were executed

- [00:04:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=246) queries were executed

- [00:04:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=258) and the error itself. Good.

- [00:04:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=270) No. Is this the request?

- [00:04:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=278) Good. Binary data.

- [00:04:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=287) Good. And let's continue.

- [00:04:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=296) Good. So this is the next query, and it

- [00:04:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=297) next query, and it

- [00:05:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=302) looks like it's on the database itself and it's a

- [00:05:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=310) database itself and it's a select query

- [00:05:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=311) select query . Select, select. Is there

- [00:05:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=314) . Select, select. Is there any

- [00:05:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=315) any insert request? Good.

- [00:05:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=343) insert request? Good. App ID Tax TV. There

- [00:05:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=348) App ID Tax TV. There are no other options. And

- [00:05:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=350) are no other options. And here is the ID. Yes, here it is

- [00:05:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=359) here is the ID. Yes, here it is . No. Yes. Okay, it should

- [00:06:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=374) . No. Yes. Okay, it should be somewhere else

- [00:06:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=375) be somewhere else , but okay, here it is

- [00:06:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=383) , but okay, here it is . So, it's here, and you

- [00:06:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=387) . So, it's here, and you see that this is a

- [00:06:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=388) see that this is a completed request, and

- [00:06:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=389) completed request, and then let's see if there

- [00:06:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=397) then let's see if there 's a message that the

- [00:06:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=398) 's a message that the request

- [00:06:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=399) request failed, PCR uh PC

- [00:06:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=404) failed, PCR uh PC completed. Okay, this is an

- [00:06:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=408) completed. Okay, this is an insert request, and

- [00:06:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=410) insert request, and it resulted in an

- [00:06:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=410) it resulted in an error. Yes, I

- [00:06:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=412) error. Yes, I found her. Okay,

- [00:06:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=414) found her. Okay, now I see. So, this is

- [00:06:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=416) now I see. So, this is the name of the program, you

- [00:06:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=418) the name of the program, you see core Microsoft SQL client

- [00:07:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=420) see core Microsoft SQL client data provider, and the others are

- [00:07:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=422) data provider, and the others are Microsoft server management studio.

- [00:07:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=423) Microsoft server management studio.

- [00:07:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=426) So we should have checked this from the

- [00:07:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=427) checked this from the beginning. I

- [00:07:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=429) beginning. I just figured this out, and

- [00:07:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=430) just figured this out, and this is exactly the query

- [00:07:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=431) this is exactly the query that our

- [00:07:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=433) that our

- [00:07:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=437) software executed. So let's run this

- [00:07:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=438) let's run this in, uh, SQL Server Management Studio

- [00:07:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=442) in, uh, SQL Server Management Studio and see what

- [00:07:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=443) and see what happens. Okay,

- [00:07:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=446) happens. Okay, it says: it is impossible

- [00:07:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=448) it says: it is impossible to insert a duplicate

- [00:07:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=449) to insert a duplicate key. And why do you

- [00:07:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=450) key. And why do you think it is

- [00:07:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=451) think it is duplicated? Because there

- [00:07:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=453) duplicated? Because there 's something here that caught

- [00:07:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=455) 's something here that caught my eye, and I

- [00:07:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=456) my eye, and I hope it

- [00:07:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=457) hope it catches yours too. Here is 025 mg.

- [00:07:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=463) catches yours too. Here is 025 mg.

- [00:07:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=463) catches yours too. Here is 025 mg. However, the value here is 0.13

- [00:07:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=466) However, the value here is 0.13 . Why do you think so?

- [00:07:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=469) . Why do you think so?

- [00:07:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=470) . Why do you think so? Because in our

- [00:07:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=471) Because in our medication table, we didn't

- [00:07:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=475) medication table, we didn't set the decimal

- [00:07:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=476) set the decimal precision to 2. We

- [00:08:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=480) precision to 2. We have to set it to

- [00:08:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=481) have to set it to at least three, because in

- [00:08:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=483) at least three, because in our database here

- [00:08:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=484) our database here it turns out that there are

- [00:08:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=485) it turns out that there are also, uh, three decimal places

- [00:08:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=486) also, uh, three decimal places for

- [00:08:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=487) for milligrams. I don't know

- [00:08:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=490) milligrams. I don't know if there are also four

- [00:08:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=490) if there are also four precision marks for

- [00:08:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=492) precision marks for milligrams. So to

- [00:08:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=493) milligrams. So to be sure,

- [00:08:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=494) be sure, you can

- [00:08:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=495) you can also set four

- [00:08:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=496) also set four precision marks. So let's

- [00:08:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=497) precision marks. So let's change that to four

- [00:08:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=498) change that to four digits of precision. And

- [00:08:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=502) digits of precision. And let's update our, uh,

- [00:08:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=503) let's update our, uh,

- [00:08:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=510) database, uh, classes, I mean

- [00:08:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=512) I mean PMS classes, using, uh

- [00:08:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=514) PMS classes, using, uh , EF Power Tools. OK. PMS

- [00:08:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=523) , EF Power Tools. OK. PMS

- [00:08:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=525) selected.

- [00:08:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=536) patient management system. OK.

- [00:09:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=549) OK. Accuracy increased to

- [00:09:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=549) increased to four. We

- [00:09:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=551) four. We can see it too.

- [00:09:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=552) can see it too. Let me show you.

- [00:09:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=553) Let me show you. So you see 10 over 4.

- [00:09:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=559) So you see 10 over 4.

- [00:09:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=562) Now we shouldn't have this error and

- [00:09:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=572) have this error and of course, uh, let's insert

- [00:09:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=574) of course, uh, let's insert more drugs into our

- [00:09:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=575) more drugs into our table. OK.

- [00:09:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=580) table. OK.

- [00:10:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=607) Let's see how

- [00:10:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=624) the number increases. Okay, still the same. So,

- [00:10:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=627) still the same. So, obviously there are a lot of

- [00:10:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=628) obviously there are a lot of duplicate medications

- [00:10:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=629) duplicate medications

- [00:10:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=634) or we have an error in the code. Let's check

- [00:10:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=636) an error in the code. Let's check our code. It seems to have been

- [00:10:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=641) our code. It seems to have been inside the

- [00:10:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=642) inside the

- [00:10:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=647) loading operations. And where is the conversion? here.

- [00:10:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=652) the conversion? here. Now both

- [00:10:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=653) Now both look good.

- [00:10:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=654) look good.

- [00:11:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=665) OK. You see, every, uh, drug is almost

- [00:11:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=666) uh, drug is almost duplicated. So they

- [00:11:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=672) duplicated. So they don't get inserted. We still

- [00:11:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=674) don't get inserted. We still only inserted

- [00:11:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=676) only inserted one drug. Oh,

- [00:11:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=685) one drug. Oh, well, there are over 200,000

- [00:11:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=687) well, there are over 200,000 drugs, but you see,

- [00:11:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=691) drugs, but you see, they're all duplicated.

- [00:11:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=693) they're all duplicated. What value

- [00:11:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=694) What value is changing? The

- [00:11:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=695) is changing? The value changes look like

- [00:11:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=696) value changes look like this. I don't know what they

- [00:11:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=698) this. I don't know what they mean. Okay,

- [00:11:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=701) mean. Okay, now there are three of them.

- [00:11:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=702) now there are three of them. Let's check the

- [00:11:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=703) Let's check the database to see if

- [00:11:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=704) database to see if the number has increased. Yes, it

- [00:11:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=705) the number has increased. Yes, it increased by two,

- [00:11:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=707) increased by two, as expected.

- [00:11:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=708) as expected.

- [00:11:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=711) Okay, we fixed the error. We don't

- [00:11:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=713) the error. We don't need to wait for them

- [00:11:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=714) need to wait for them all

- [00:11:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=715) all to load into the

- [00:11:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=716) to load into the database. However, it

- [00:11:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=719) database. However, it works quite fast

- [00:12:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=721) works quite fast also because we

- [00:12:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=722) also because we use a

- [00:12:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=723) use a local cache and yes,

- [00:12:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=727) local cache and yes, that's it. We have now

- [00:12:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=729) that's it. We have now fixed the error.

- [00:12:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=730) fixed the error.

- [00:12:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=733) Okay, now it's time to add a

- [00:12:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=734) to add a search function. You see, in

- [00:12:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=738) search function. You see, in your application, I

- [00:12:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=739) your application, I also expect that in

- [00:12:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=740) also expect that in your

- [00:12:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=742) your homework, in your

- [00:12:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=743) homework, in your term project

- [00:12:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=744) term project , there will be a search function,

- [00:12:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=746) , there will be a search function, search for a book, search for

- [00:12:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=747) search for a book, search for books or something like that.

- [00:12:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=748) books or something like that.

- [00:12:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=753) Good. To be able to search,

- [00:12:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=754) able to search,

- [00:12:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=758) let's add a text field.

- [00:12:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=773) Good. And, let's say, we ask

- [00:12:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=774) we ask the user to enter

- [00:12:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=775) the user to enter search terms. Okay

- [00:13:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=785) search terms. Okay . search and add a

- [00:13:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=789) . search and add a search button.

- [00:13:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=790) search button.

- [00:13:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=805) Good. Search name. Good. Search

- [00:13:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=809) Good. Search

- [00:13:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=815) correctly. Good. Good. So, it's going to be a

- [00:13:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=816) Good. So, it's going to be a search by name and

- [00:13:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=819) search by name and

- [00:13:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=826) well, it looks pretty good. Let's add a

- [00:13:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=828) pretty good. Let's add a click event. And this

- [00:13:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=831) click event. And this click event

- [00:13:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=832) click event will simply refresh the

- [00:13:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=833) will simply refresh the data grid. I'll also add an

- [00:13:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=839) data grid. I'll also add an

- [00:14:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=843) Enter key event for this. So,

- [00:14:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=847) let's also edit the

- [00:14:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=849) edit the C# click event above. Let's say

- [00:14:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=871) C# click event above. Let's say , Oh my God. I think the way

- [00:15:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=905) , Oh my God. I think the way would be to

- [00:15:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=906) would be to intercept

- [00:15:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=907) intercept keypress events.

- [00:15:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=908) keypress events.

- [00:15:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=915) So, yeah, let's select our form here and

- [00:15:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=916) our form here and get

- [00:15:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=917) get keypress events.

- [00:15:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=919) keypress events.

- [00:15:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=926) I wonder if this is possible with the tab element's keypress event

- [00:15:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=927) with the tab element's keypress event

- [00:15:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=931) . So, this will only apply to

- [00:15:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=932) only apply to that. I hope so

- [00:15:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=935) that. I hope so . Yes, there is a

- [00:15:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=936) . Yes, there is a keystroke. Good. And this is the

- [00:15:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=939) keystroke. Good. And this is the keystroke

- [00:15:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=940) keystroke for the medication panel. This is

- [00:15:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=942) for the medication panel. This is the sender. Got it.

- [00:15:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=944) the sender. Got it.

- [00:15:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=946) So, it is not tied to a

- [00:15:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=947) tied to a

- [00:15:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=951) specific element . It looks normal,

- [00:15:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=953) . It looks normal, but I'm not sure.

- [00:15:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=954) but I'm not sure.

- [00:15:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=959) So, here we need to check

- [00:16:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=960) need to check

- [00:16:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=963) which key

- [00:16:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1006) was sent. Okay, it looks like this. If the

- [00:16:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1009) looks like this. If the key data is Enter,

- [00:16:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1011) key data is Enter,

- [00:16:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1014) but there is no key data for key events.

- [00:16:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1015) no key data for key events.

- [00:17:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1028) Good. that, perhaps,

- [00:17:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1034) the key perhaps, like this is equal to the

- [00:17:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1039) equal to the Enter key. Good. And now we're

- [00:17:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1044) Enter key. Good. And now we're going to simulate

- [00:17:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1046) going to simulate

- [00:17:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1050) that. Good. So Enter will also perform

- [00:17:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1051) will also perform the update. Perfectly.

- [00:17:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1054) the update. Perfectly.

- [00:17:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1056) But I don't want it to work in

- [00:17:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1057) work in other panels. So

- [00:17:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1060) other panels. So let's see if

- [00:17:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1061) let's see if we can

- [00:17:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1062) we can achieve that. This should be

- [00:17:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1066) achieve that. This should be bound to the

- [00:17:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1068) bound to the Enter event only in the

- [00:17:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1073) Enter event only in the medicine panel. Good.

- [00:17:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1075) medicine panel. Good. Medication tab. And in other

- [00:17:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1076) Medication tab. And in other panels, when I

- [00:17:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1077) panels, when I press Enter, it's fine.

- [00:17:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1079) press Enter, it's fine. Nothing is

- [00:17:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1079) Nothing is happening. And

- [00:18:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1081) happening. And nothing

- [00:18:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1082) nothing happens here.

- [00:18:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1083) happens here. Normally we should

- [00:18:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1084) Normally we should tie this to

- [00:18:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1085) tie this to login, but

- [00:18:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1086) login, but we haven't done that yet

- [00:18:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1087) we haven't done that yet . And I

- [00:18:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1089) . And I will do it for you too. So

- [00:18:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1096) will do it for you too. So when I press Enter,

- [00:18:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1097) when I press Enter, nothing

- [00:18:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1097) nothing happens.

- [00:18:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1098) happens. Let's

- [00:18:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1099) Let's tie this in too. Good.

- [00:18:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1103) tie this in too. Good.

- [00:18:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1105) in the login panel here. Let's add a

- [00:18:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1110) here. Let's add a down key event

- [00:18:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1114) down key event where it is here. Good. And

- [00:18:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1127) where it is here. Good. And that will just trigger the

- [00:18:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1128) that will just trigger the login. Click where it is

- [00:18:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1130) login. Click where it is located. He is here.

- [00:18:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1132) located. He is here.

- [00:18:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1137) And let's also add a binding to

- [00:18:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1139) add a binding to the registration here

- [00:19:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1142) the registration here selected

- [00:19:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1143) selected control. Yes. And there is a

- [00:19:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1148) control. Yes. And there is a

- [00:19:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1153) keypress event. Good. So you see, in the XML file we

- [00:19:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1155) see, in the XML file we get the

- [00:19:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1156) get the keypress event, like this

- [00:19:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1157) keypress event, like this . So it

- [00:19:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1159) . So it should only apply to

- [00:19:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1161) should only apply to this tab and not

- [00:19:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1162) this tab and not others. And this will simply

- [00:19:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1166) others. And this will simply be triggered by registration.

- [00:19:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1171) be triggered by registration. Actually, I wonder if

- [00:19:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1173) Actually, I wonder if I can just introduce a

- [00:19:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1174) I can just introduce a

- [00:19:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1184) registration event.

- [00:19:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1189) So I mean, right

- [00:19:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1191) here, let's go to the input um

- [00:19:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1195) go to the input um , where is this can I

- [00:20:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1202) , where is this can I do it like this, and will this

- [00:20:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1203) do it like this, and will this work, will this

- [00:20:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1210) work, will this shorten our

- [00:20:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1211) shorten our code behind. Um, I'll

- [00:20:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1219) code behind. Um, I'll launch the login button

- [00:20:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1220) launch the login button directly with the

- [00:20:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1222) directly with the Enter key.

- [00:20:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1222) Enter key.

- [00:20:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1231) Let's see. I'll just press Enter. Good. Oh,

- [00:20:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1237) press Enter. Good. Oh, I have to put a

- [00:20:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1238) I have to put a stop here. Okay,

- [00:20:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1243) stop here. Okay, that works. So, we

- [00:20:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1245) that works. So, we don't even need

- [00:20:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1246) don't even need this extra

- [00:20:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1247) this extra unnecessary code. Yeah,

- [00:20:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1255) unnecessary code. Yeah, with Enter I just...Oh, but

- [00:20:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1257) with Enter I just...Oh, but that would be...No, no, no.

- [00:20:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1259) that would be...No, no, no.

- [00:21:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1262) We can't do it like this. Yes, we

- [00:21:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1267) it like this. Yes, we need a separate

- [00:21:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1268) need a separate method because this

- [00:21:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1269) method because this will be called

- [00:21:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1270) will be called every time a key is pressed

- [00:21:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1271) every time a key is pressed . However, I

- [00:21:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1274) . However, I

- [00:21:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1277) only need to call it if it's the Enter key. Okay, like this

- [00:21:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1278) Enter key. Okay, like this

- [00:21:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1287) . And that will be good. We don't have

- [00:21:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1288) good. We don't have this KeyDown for the

- [00:21:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1289) this KeyDown for the top

- [00:21:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1290) top control. Good. Yes,

- [00:21:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1298) control. Good. Yes, we don't need KeyDown

- [00:21:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1299) we don't need KeyDown for the top

- [00:21:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1300) for the top control.

- [00:21:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1301) control.

- [00:21:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1307) You see, you should avoid any

- [00:21:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1307) any unnecessary code.

- [00:21:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1309) unnecessary code.

- [00:21:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1312) Good. So, this is the registration key. And

- [00:22:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1320) registration key. And in the registers, this is the method

- [00:22:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1324) in the registers, this is the method we're going to

- [00:22:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1326) we're going to call. Good.

- [00:22:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1328) call. Good.

- [00:22:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1328) call. Good. OK. Now it should

- [00:22:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1330) OK. Now it should work. Let's

- [00:22:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1331) work. Let's try. Good.

- [00:22:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1358) try. Good. Now I'll press Enter.

- [00:22:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1359) Now I'll press Enter. Yes, it works.

- [00:22:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1361) Yes, it works. Error. Please

- [00:22:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1362) Error. Please select a

- [00:22:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1363) select a user role first.

- [00:22:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1364) user role first.

- [00:22:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1365) user role first. Press Enter. Yes,

- [00:22:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1368) Press Enter. Yes, there was an error.

- [00:22:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1369) there was an error.

- [00:22:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1373) Okay, so test Gmail exists. Okay,

- [00:22:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1376) Gmail exists. Okay, registered and logged in

- [00:22:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1378) registered and logged in . However,

- [00:23:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1380) . However, since we

- [00:23:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1381) since we don't have a patient top menu yet

- [00:23:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1383) don't have a patient top menu yet , it's still

- [00:23:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1384) , it's still here. Let's log out

- [00:23:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1386) here. Let's log out and try

- [00:23:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1387) and try Enter. Okay, this doesn't

- [00:23:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1391) Enter. Okay, this doesn't work for the top

- [00:23:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1392) work for the top login menu yet. So, the

- [00:23:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1395) login menu yet. So, the

- [00:23:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1399) top entrance, we did n't add it here. This is the

- [00:23:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1402) n't add it here. This is the top register, and

- [00:23:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1407) top register, and

- [00:23:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1411) this is the top input, and we have a KeyDown, let's

- [00:23:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1416) we have a KeyDown, let's see if

- [00:23:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1417) see if it fires. No,

- [00:23:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1421) it fires. No, registration

- [00:23:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1421) registration works, but login does

- [00:23:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1427) works, but login does n't. Why doesn't it

- [00:23:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1433) n't. Why doesn't it work? Good.

- [00:23:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1439) work? Good. So, KeyDown for the

- [00:24:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1440) So, KeyDown for the top element

- [00:24:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1442) top element fires, but the

- [00:24:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1448) fires, but the

- [00:24:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1452) top input. Oh, it works now. Interesting.

- [00:24:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1454) works now. Interesting.

- [00:24:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1461) It really works. One

- [00:24:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1465) works. One second. OK. When

- [00:24:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1469) second. OK. When I press Enter like this

- [00:24:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1470) I press Enter like this , it works. But

- [00:24:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1472) , it works. But if I click somewhere

- [00:24:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1473) if I click somewhere else, it doesn't

- [00:24:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1474) else, it doesn't work. I

- [00:24:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1476) work. I need to be either here

- [00:24:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1479) need to be either here or inside this.

- [00:24:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1481) or inside this.

- [00:24:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1484) So when I click on an empty area, it doesn't

- [00:24:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1485) empty area, it doesn't work. The event is

- [00:24:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1488) work. The event is not raised. So the

- [00:24:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1491) not raised. So the cursor should be either

- [00:24:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1492) cursor should be either here or here. I think I

- [00:24:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1498) here or here. I think I can fix that too

- [00:24:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1499) can fix that too . So

- [00:25:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1501) . So instead of

- [00:25:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1502) instead of writing for each one

- [00:25:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1503) writing for each one individually, I'm going to

- [00:25:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1504) individually, I'm going to intercept all

- [00:25:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1505) intercept all click events. Okay

- [00:25:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1508) click events. Okay . So, I click on the

- [00:25:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1511) . So, I click on the main window, the

- [00:25:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1512) main window, the lecture window, and here I

- [00:25:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1513) lecture window, and here I create a keypress event

- [00:25:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1514) create a keypress event

- [00:25:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1516) for the main window.

- [00:25:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1520) And if the Enter key is pressed, then I'm

- [00:25:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1521) the Enter key is pressed, then I'm going to use a

- [00:25:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1525) going to use a switch case construct,

- [00:25:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1527) switch case construct,

- [00:25:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1531) but no, I can't use switch, I

- [00:25:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1533) use switch, I have to use if and

- [00:25:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1534) have to use if and else if. Okay, what

- [00:25:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1536) else if. Okay, what tabs do we have? We

- [00:25:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1538) tabs do we have? We have selected the tab "

- [00:25:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1539) have selected the tab " drugs". We're

- [00:25:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1544) drugs". We're going to trigger

- [00:25:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1546) going to trigger an update for this

- [00:25:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1547) an update for this tab. Good. Then,

- [00:25:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1554) tab. Good. Then, if the "login" tab

- [00:25:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1557) if the "login" tab is selected, we

- [00:25:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1558) is selected, we 're going to call the

- [00:25:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1559) 're going to call the login like this. And if the

- [00:26:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1565) login like this. And if the

- [00:26:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1568) registration tab is selected, we will call this. This will

- [00:26:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1572) will call this. This will reduce the number of

- [00:26:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1573) reduce the number of our methods, which I think is

- [00:26:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1575) our methods, which I think is even better.

- [00:26:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1576) even better.

- [00:26:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1584) Now let's remove the keypress events

- [00:26:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1585) keypress events here, since

- [00:26:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1586) here, since we've already removed their

- [00:26:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1587) we've already removed their methods. Good. And

- [00:26:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1597) methods. Good. And

- [00:26:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1605) Okay. And and Good. Let's run the program. I'll

- [00:27:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1630) Let's run the program. I'll click somewhere in the

- [00:27:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1631) click somewhere in the blank space and

- [00:27:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1632) blank space and press Enter. Yes, it

- [00:27:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1634) press Enter. Yes, it works. Let's click

- [00:27:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1635) works. Let's click here. I click on the

- [00:27:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1637) here. I click on the empty space. Enter.

- [00:27:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1639) empty space. Enter.

- [00:27:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1642) Yes, it works. Okay, let's log out. I

- [00:27:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1643) let's log out. I click on the empty

- [00:27:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1645) click on the empty space. Enter. No, it still does

- [00:27:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1648) space. Enter. No, it still does n't work. Interesting. So

- [00:27:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1652) n't work. Interesting. So if I make the changes like this

- [00:27:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1653) if I make the changes like this , now it

- [00:27:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1655) , now it works. I see

- [00:27:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1659) works. I see the reason: I can't

- [00:27:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1660) the reason: I can't click on the empty

- [00:27:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1662) click on the empty space because this tab is

- [00:27:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1663) space because this tab is manually selected. But

- [00:27:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1668) manually selected. But when it

- [00:27:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1668) when it is selected

- [00:27:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1669) is selected automatically, it is not

- [00:27:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1670) automatically, it is not recognized as the

- [00:27:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1671) recognized as the selected tab. Therefore

- [00:27:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1674) selected tab. Therefore , when it is selected

- [00:27:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1675) , when it is selected manually, everything works.

- [00:27:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1676) manually, everything works. However, if it is

- [00:27:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1678) However, if it is selected automatically, no

- [00:27:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1679) selected automatically, no . So,

- [00:28:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1680) . So, no problems. Everything works as

- [00:28:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1682) no problems. Everything works as expected. Now let's

- [00:28:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1684) expected. Now let's go inside. Enter. Perfectly.

- [00:28:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1687) go inside. Enter. Perfectly.

- [00:28:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1687) go inside. Enter. Perfectly. Let's go to the

- [00:28:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1689) Let's go to the "drugs" tab and

- [00:28:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1690) "drugs" tab and press Enter. Yes,

- [00:28:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1692) press Enter. Yes, it has been updated. Okay

- [00:28:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1694) it has been updated. Okay . So, our

- [00:28:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1696) . So, our key event is now working.

- [00:28:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1697) key event is now working.

- [00:28:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1701) By the way, the answer is tied to this

- [00:28:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1702) tied to this element. I could

- [00:28:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1705) element. I could bind it to

- [00:28:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1706) bind it to this or that and it would

- [00:28:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1707) this or that and it would still work

- [00:28:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1708) still work when clicking manually.

- [00:28:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1709) when clicking manually.

- [00:28:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1713) Now I need to enter a search. OK.

- [00:28:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1715) enter a search. OK. So, for this

- [00:28:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1716) So, for this text box,

- [00:28:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1717) text box,

- [00:28:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1721) I wonder if they added a

- [00:28:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1726) placeholder feature. C# placeholders for

- [00:28:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1727) placeholders for text fields.

- [00:28:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1728) text fields.

- [00:28:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1731) Let's see if they added it. This did

- [00:28:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1734) they added it. This did n't happen before, but it may

- [00:28:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1735) n't happen before, but it may have. No, it seems there is

- [00:29:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1742) have. No, it seems there is still no

- [00:29:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1743) still no

- [00:29:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1746) easier way.

- [00:29:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1780) Okay, but there's an XML path that defines

- [00:29:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1782) path that defines

- [00:29:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1786) alignment and other things. So, it has a

- [00:29:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1788) things. So, it has a text block, and the

- [00:29:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1791) text block, and the text block becomes

- [00:29:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1793) text block becomes

- [00:29:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1797) code. I think I'll use this so you

- [00:29:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1799) use this so you can learn too.

- [00:30:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1800) can learn too.

- [00:30:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1803) So, on the " drugs" tab, okay,

- [00:30:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1811) drugs" tab, okay, let's move on to the

- [00:30:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1812) let's move on to the text field. So

- [00:30:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1814) text field. So , inside this

- [00:30:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1815) , inside this text, under this box,

- [00:30:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1817) text, under this box, let's edit

- [00:30:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1818) let's edit -- okay, it's here.

- [00:30:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1819) -- okay, it's here.

- [00:30:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1823) So, this will be called

- [00:30:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1831) uh oh, we don't have a name yet, so that's good.

- [00:30:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1833) don't have a name yet, so that's good.

- [00:30:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1841) Let's move this here.

- [00:30:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1847) Oh, it's just a text field and a

- [00:30:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1851) field and a placeholder like this, I

- [00:30:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1855) placeholder like this, I think. Good. Yes,

- [00:30:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1859) think. Good. Yes, it looks good. And

- [00:31:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1861) it looks good. And let's add the name

- [00:31:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1864) let's add the name as a txt search term search by

- [00:31:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1872) as a txt search term search by name. Good. And

- [00:31:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1875) name. Good. And let's run

- [00:31:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1876) let's run the application to

- [00:31:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1877) the application to check. You see,

- [00:31:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1880) check. You see, someone else

- [00:31:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1881) someone else has already asked our

- [00:31:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1882) has already asked our question exactly the way

- [00:31:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1883) question exactly the way we wanted. This is why

- [00:31:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1889) we wanted. This is why search is so important.

- [00:31:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1890) search is so important.

- [00:31:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1894) Some of your friends asked me what to do

- [00:31:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1896) asked me what to do if you can't

- [00:31:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1897) if you can't

- [00:31:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1903) continue. The method is the search for answers.

- [00:31:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1905) is the search for answers.

- [00:31:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1909) However, I don't see a placeholder. Interesting.

- [00:31:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1911) placeholder. Interesting. Why? Okay, there's a

- [00:31:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1916) Why? Okay, there's a text box there.

- [00:31:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1917) text box there.

- [00:31:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1918) text box there. Enter your search

- [00:31:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1919) Enter your search query here and specify the

- [00:32:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1922) query here and specify the target type—text

- [00:32:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1924) target type—text block

- [00:32:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1926) block anchor element. Oh, you see,

- [00:32:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1928) anchor element. Oh, you see, there's the element name.

- [00:32:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1929) there's the element name. So, it is bound

- [00:32:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1931) So, it is bound to the element. Since

- [00:32:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1934) to the element. Since we changed the name of

- [00:32:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1935) we changed the name of the text field, we

- [00:32:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1936) the text field, we need to change the name of the

- [00:32:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1937) need to change the name of the anchor element

- [00:32:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1938) anchor element here as well. You see the name of

- [00:32:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1941) here as well. You see the name of the element here. It should

- [00:32:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1943) the element here. It should work now. Okay,

- [00:32:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1966) work now. Okay, now it's visible, and when I

- [00:32:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1968) now it's visible, and when I click, it should be

- [00:32:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1969) click, it should be when I click something.

- [00:32:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1971) when I click something.

- [00:32:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1974) Yes, it is being cleaned. It

- [00:32:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1975) Yes, it is being cleaned. It works exactly as we

- [00:32:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1976) works exactly as we wanted. Press Enter.

- [00:32:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1978) wanted. Press Enter.

- [00:33:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1981) Okay, now it's time to implement our

- [00:33:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1982) to implement our search functions. Search

- [00:33:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1986) search functions. Search by drug name.

- [00:33:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=1988) by drug name.

- [00:33:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2001) Okay, let's also change the size to a

- [00:33:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2002) change the size to a little smaller. That's it.

- [00:33:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2010) little smaller. That's it.

- [00:33:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2011) little smaller. That's it. Let's put it in the

- [00:33:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2012) Let's put it in the center. Good. So in

- [00:33:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2018) center. Good. So in our

- [00:33:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2018) our update method we

- [00:33:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2019) update method we are going to also

- [00:33:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2020) are going to also include the title and how are

- [00:33:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2028) include the title and how are we going to

- [00:33:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2029) we going to do that. Good. So

- [00:33:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2034) do that. Good. So let's see how we

- [00:33:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2035) let's see how we do it. There is a

- [00:33:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2037) do it. There is a

- [00:34:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2043) local binding list here and that's fine.

- [00:34:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2044) binding list here and that's fine.

- [00:34:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2045) binding list here and that's fine. So this is the way

- [00:34:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2046) So this is the way we download and we

- [00:34:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2052) we download and we need to add the

- [00:34:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2055) need to add the

- [00:34:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2065) search extension. Good. And how can we do that?

- [00:34:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2066) can we do that? We need to add

- [00:34:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2068) We need to add something like V.

- [00:34:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2069) something like V.

- [00:34:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2077) Okay. and PR. here is

- [00:34:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2086) the name of the drug and how we can

- [00:34:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2087) how we can do it, maybe GG is

- [00:34:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2092) do it, maybe GG is good, does it work,

- [00:34:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2094) good, does it work, or let's see how it is

- [00:34:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2098) or let's see how it is possible with Entity Framework, the

- [00:35:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2100) possible with Entity Framework, the

- [00:35:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2111) like operator in the framework. How do we

- [00:35:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2113) framework. How do we do it? Oh, I see, that

- [00:35:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2122) do it? Oh, I see, that looks like a request. Yes, that's what

- [00:35:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2124) looks like a request. Yes, that's what we need

- [00:35:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2126) we need . So contains, okay and

- [00:35:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2133) . So contains, okay and here we're going to

- [00:35:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2138) here we're going to add a line. So this is an

- [00:35:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2141) add a line. So this is an empty symbol. So

- [00:35:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2143) empty symbol. So everything should contain that. And

- [00:35:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2147) everything should contain that. And

- [00:35:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2153) let's see if it works. Let's add to

- [00:35:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2156) it works. Let's add to the standard or

- [00:36:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2163) the standard or let's add to

- [00:36:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2164) let's add to everything here, as if it

- [00:36:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2165) everything here, as if it works. I have an idea.

- [00:36:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2168) works. I have an idea.

- [00:36:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2171) So, this is a dot sort. Good. And

- [00:36:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2174) dot sort. Good. And

- [00:36:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2179) this will be an addition like this . it. So,

- [00:36:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2186) . it. So, first it will

- [00:36:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2187) first it will organize. I think we

- [00:36:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2189) organize. I think we need to add a

- [00:36:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2190) need to add a query first, that would be more

- [00:36:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2191) query first, that would be more logical, and then

- [00:36:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2192) logical, and then sort. Yes, that's

- [00:36:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2196) sort. Yes, that's it. Good. I don't know if

- [00:36:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2203) it. Good. I don't know if this will work but

- [00:36:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2204) this will work but we'll see since it's an

- [00:36:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2206) we'll see since it's an empty string and not

- [00:36:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2212) empty string and not sure if it

- [00:36:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2213) sure if it will work or not.

- [00:36:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2215) will work or not.

- [00:37:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2230) However, this can also cause

- [00:37:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2231) cause performance issues.

- [00:37:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2232) performance issues.

- [00:37:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2237) Okay, so it works. Perfectly. So what

- [00:37:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2241) works. Perfectly. So what we're going to

- [00:37:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2241) we're going to do is, okay, the

- [00:37:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2250) do is, okay, the SR search term is going to be

- [00:37:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2251) SR search term is going to be like this, it can't

- [00:37:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2252) like this, it can't contain null, I'm not going to

- [00:37:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2254) contain null, I'm not going to do that. Okay, it

- [00:37:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2266) do that. Okay, it seems to still

- [00:37:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2267) seems to still work. I'm not

- [00:37:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2269) work. I'm not sure. Let's

- [00:37:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2271) sure. Let's try this too.

- [00:37:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2272) try this too. Maybe this will

- [00:37:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2273) Maybe this will optimize the database better.

- [00:37:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2274) optimize the database better.

- [00:38:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2309) Oh, null doesn't work.

- [00:38:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2310) Oh, null doesn't work. Let's see

- [00:38:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2312) Let's see what query it

- [00:38:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2313) what query it generates. I was thinking about that too

- [00:38:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2314) generates. I was thinking about that too . So,

- [00:38:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2318) . So, let's open the SQL Server Provider.

- [00:38:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2320) let's open the SQL Server Provider.

- [00:38:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2332) And we'll sort it like this . Good. So, it is

- [00:38:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2336) . Good. So, it is being done. OK.

- [00:38:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2339) being done. OK. It says it's of type null.

- [00:39:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2341) It says it's of type null.

- [00:39:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2345) Good. And so it essentially checks whether the

- [00:39:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2347) essentially checks whether the drug name is null or not

- [00:39:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2348) drug name is null or not . And that's why it doesn't

- [00:39:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2351) . And that's why it doesn't work. So we'll

- [00:39:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2353) work. So we'll do it like this. And

- [00:39:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2354) do it like this. And if the text, by the way,

- [00:39:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2359) if the text, by the way, comes from this for the

- [00:39:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2360) comes from this for the main. Have we

- [00:39:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2369) main. Have we assigned this to something

- [00:39:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2370) assigned this to something global? Yes.

- [00:39:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2373) global? Yes.

- [00:39:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2391) actually greater than zero we'll assign it

- [00:39:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2394) zero we'll assign it here. Good. And then

- [00:40:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2400) here. Good. And then here. OK. Let's

- [00:40:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2406) here. OK. Let's do another search

- [00:40:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2407) do another search . So, we

- [00:40:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2409) . So, we use

- [00:40:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2410) use cascading. However,

- [00:40:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2413) cascading. However, in reality, if we

- [00:40:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2415) in reality, if we don't have any

- [00:40:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2419) don't have any name searches, we shouldn't

- [00:40:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2420) name searches, we shouldn't

- [00:40:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2421) use cascading. We would have to, uh,

- [00:40:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2423) cascading. We would have to, uh, we would have to

- [00:40:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2431) we would have to program another

- [00:40:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2432) program another script and

- [00:40:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2437) script and only add this if

- [00:40:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2438) only add this if the value is greater.

- [00:40:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2439) the value is greater.

- [00:40:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2443) I wonder if that's possible.

- [00:41:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2465) Yes. OK. And update . Good. It works.

- [00:41:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2467) . Good. It works.

- [00:41:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2467) . Good. It works. OK. Let's look at

- [00:41:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2469) OK. Let's look at the request. So, the request is

- [00:41:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2471) the request. So, the request is normal. So he

- [00:41:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2472) normal. So he looks like this. I think

- [00:41:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2477) looks like this. I think SQL Server would have an

- [00:41:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2477) SQL Server would have an optimization for

- [00:41:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2479) optimization for this because when we

- [00:41:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2480) this because when we search so well,

- [00:41:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2485) search so well, so it has an OR, so

- [00:41:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2490) so it has an OR, so let's see

- [00:41:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2491) let's see how it performs with the

- [00:41:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2493) how it performs with the

- [00:41:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2497) execution plan. So it performs a

- [00:41:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2498) it performs a clustered index

- [00:41:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2499) clustered index scan. That is, it

- [00:41:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2504) scan. That is, it scans the entire index, which is

- [00:41:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2505) scans the entire index, which is very bad

- [00:41:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2506) very bad

- [00:41:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2510) because it will take a lot of time. So what

- [00:41:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2514) a lot of time. So what we need to do

- [00:41:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2515) we need to do is we need to

- [00:41:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2518) is we need to create an index as

- [00:42:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2523) create an index as

- [00:42:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2526) well, let's open another

- [00:42:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2527) open another instance to add

- [00:42:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2528) instance to add the index and the conditional ver.

- [00:42:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2559) the index and the conditional ver.

- [00:42:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2562) So I wonder if it's possible, it would improve

- [00:42:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2563) possible, it would improve our

- [00:42:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2567) productivity.

- [00:42:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2577) Good. So we can define the query like this

- [00:42:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2578) define the query like this , and then we can

- [00:43:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2583) , and then we can execute the query. Yes.

- [00:43:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2595) execute the query. Yes. Let's try

- [00:43:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2596) Let's try this approach. So, he

- [00:43:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2601) this approach. So, he expects a lot,

- [00:43:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2603) expects a lot, yes. So what we're

- [00:43:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2608) yes. So what we're going to do

- [00:43:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2610) going to do is we're not going to

- [00:43:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2613) is we're not going to trigger the

- [00:43:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2614) trigger the load right away,

- [00:43:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2615) load right away, and if we add it like this

- [00:43:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2624) and if we add it like this . Good. And

- [00:43:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2631) . Good. And then we'll load the uh.

- [00:43:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2632) then we'll load the uh.

- [00:43:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2639) Let's call the load here. Not

- [00:44:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2647) the load here. Not sure if it would

- [00:44:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2648) sure if it would work, but I don't think it would

- [00:44:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2649) work, but I don't think it would . Yes,

- [00:44:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2657) . Yes, let's try.

- [00:44:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2659) let's try. So, let's delete this.

- [00:44:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2660) So, let's delete this.

- [00:44:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2663) I hope it works because it will provide

- [00:44:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2665) because it will provide better performance

- [00:44:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2666) better performance . Okay, let's

- [00:44:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2676) . Okay, let's delete that too.

- [00:44:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2678) delete that too.

- [00:44:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2685) Okay, let's try.

- [00:44:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2688) So here we add another predicate to

- [00:44:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2690) another predicate to ours but it doesn't

- [00:44:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2696) ours but it doesn't look like a query, I'm not

- [00:45:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2700) look like a query, I'm not sure if it will

- [00:45:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2701) sure if it will work. Okay,

- [00:45:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2720) work. Okay, let's sort by them.

- [00:45:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2722) let's sort by them.

- [00:45:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2731) Yes, it doesn't work. So how do we set up a

- [00:45:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2732) we set up a query and execute it

- [00:45:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2733) query and execute it ? We use

- [00:45:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2742) ? We use context, right?

- [00:45:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2743) context, right?

- [00:46:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2761) Good. So here is a request.

- [00:46:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2781) No, that's not the answer we're looking for.

- [00:46:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2782) we're looking for.

- [00:48:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2922) Good. Since we are using a

- [00:48:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2923) are using a local cache and

- [00:48:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2924) local cache and binding it to the

- [00:48:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2925) binding it to the

- [00:48:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2930) data table, it seems like this is not possible. All

- [00:48:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2933) this is not possible. All this code just returns

- [00:48:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2935) this code just returns data. They are not

- [00:48:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2938) data. They are not linkable or

- [00:48:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2939) linkable or editable in

- [00:49:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2940) editable in the data table. So, uh

- [00:49:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2944) the data table. So, uh , they're not what we

- [00:49:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2948) , they're not what we wanted. Good. So it wo

- [00:49:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2962) wanted. Good. So it wo n't work that way.

- [00:49:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2963) n't work that way. Yes. Good.

- [00:49:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2966) Yes. Good. Let's go back to the

- [00:49:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2967) Let's go back to the old version. And

- [00:49:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2976) old version. And here we will add a

- [00:49:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2977) here we will add a search term and an

- [00:49:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2978) search term and an index to

- [00:49:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2979) index to optimize queries

- [00:49:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2980) optimize queries to the database. I could

- [00:49:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2988) to the database. I could write different

- [00:49:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2989) write different switch and case statements,

- [00:49:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2991) switch and case statements, like default or case

- [00:49:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2992) like default or case when value is

- [00:49:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2993) when value is greater, let me

- [00:49:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2994) greater, let me show you. If

- [00:49:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=2999) show you. If the search term

- [00:50:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3001) the search term

- [00:50:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3003) is valid, if the

- [00:50:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3010) search term is null, like this,

- [00:50:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3011) is null, like this, otherwise like this. So

- [00:50:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3014) otherwise like this. So if it's null, it

- [00:50:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3020) if it's null, it just won't

- [00:50:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3021) just won't contain it, and if it's not

- [00:50:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3022) contain it, and if it's not null, it will. This is another

- [00:50:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3026) null, it will. This is another way to optimize

- [00:50:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3028) way to optimize your queries. Although the code

- [00:50:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3030) your queries. Although the code becomes more

- [00:50:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3031) becomes more cumbersome, it can be

- [00:50:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3035) cumbersome, it can be optimized

- [00:50:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3036) optimized anyway, in the end. And I will

- [00:50:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3045) anyway, in the end. And I will also add an index

- [00:50:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3046) also add an index to improve

- [00:50:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3047) to improve performance. How do I

- [00:50:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3051) performance. How do I do that? Before

- [00:50:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3054) do that? Before creating the index,

- [00:50:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3055) creating the index, let's look at

- [00:50:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3056) let's look at performance.

- [00:50:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3057) performance.

- [00:51:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3060) Okay, here it is.

- [00:51:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3063) It is shown that the approximate number of

- [00:51:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3065) approximate number of rows is 3500, as well as

- [00:51:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3070) rows is 3500, as well as the estimated CPU cost

- [00:51:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3071) the estimated CPU cost and so on. Now let's add

- [00:51:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3076) and so on. Now let's add an index so that instead of

- [00:51:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3077) an index so that instead of scanning the index, we do a

- [00:51:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3078) scanning the index, we do a seek. Good.

- [00:51:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3082) seek. Good.

- [00:51:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3083) seek. Good. We don't want to do

- [00:51:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3084) We don't want to do scans.

- [00:51:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3085) scans. Scanning means

- [00:51:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3086) Scanning means looking through the entire

- [00:51:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3087) looking through the entire index. We need a

- [00:51:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3089) index. We need a search. OK. Here in

- [00:51:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3094) search. OK. Here in TBR_drugs, indexes, a new

- [00:51:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3096) TBR_drugs, indexes, a new non-clustered

- [00:51:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3097) non-clustered index. So, what

- [00:51:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3103) index. So, what meaning are we looking for?

- [00:51:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3107) meaning are we looking for? We are looking for the name of

- [00:51:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3109) We are looking for the name of the drug. So it

- [00:51:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3113) the drug. So it comes first, then

- [00:51:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3114) comes first, then sorting, the

- [00:51:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3115) sorting, the drug ID is added

- [00:51:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3116) drug ID is added automatically, and this

- [00:51:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3117) automatically, and this index is not

- [00:51:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3118) index is not unique. Although we

- [00:52:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3123) unique. Although we can make it

- [00:52:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3125) can make it unique. I think

- [00:52:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3126) unique. I think

- [00:52:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3133) the name of the drug is... we already have it as an index

- [00:52:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3134) we already have it as an index , actually. Let's see.

- [00:52:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3137) , actually. Let's see.

- [00:52:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3141) Oh, since we're making a "like" request, it should

- [00:52:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3143) "like" request, it should come. Yes, there is no

- [00:52:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3145) come. Yes, there is no other way for,

- [00:52:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3147) other way for, say, an

- [00:52:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3147) say, an

- [00:52:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3152) optimizer to do something different. So he

- [00:52:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3156) something different. So he has to do

- [00:52:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3157) has to do a scan, and we

- [00:52:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3158) a scan, and we already have the name of the medication and the

- [00:52:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3159) already have the name of the medication and the medication, and so he

- [00:52:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3163) medication, and so he does a scan of the

- [00:52:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3164) does a scan of the entire table. Okay,

- [00:52:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3168) entire table. Okay, let's test

- [00:52:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3169) let's test our software and see

- [00:52:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3171) our software and see if the search works.

- [00:52:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3172) if the search works.

- [00:53:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3180) Okay, let's update and search for this "proxy

- [00:53:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3181) search for this "proxy " or something like that. Okay,

- [00:53:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3187) " or something like that. Okay, now we see all the

- [00:53:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3189) now we see all the

- [00:53:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3193) proxies. I don't know how to read that. And then, um

- [00:53:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3197) read that. And then, um , you see, one

- [00:53:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3201) , you see, one ends in TA,

- [00:53:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3203) ends in TA, one in CA. I think we

- [00:53:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3204) one in CA. I think we can sort by this

- [00:53:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3206) can sort by this . Yes, it

- [00:53:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3209) . Yes, it works. Perfectly.

- [00:53:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3210) works. Perfectly. Let's open this.

- [00:53:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3212) Let's open this. Introduction. Let's

- [00:53:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3213) Introduction. Let's search for "milk". Okay

- [00:53:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3215) search for "milk". Okay . Since our

- [00:53:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3218) . Since our database is, I believe, case

- [00:53:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3219) database is, I believe, case insensitive, it

- [00:53:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3221) insensitive, it should find that too. So

- [00:53:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3224) should find that too. So this is "milk", and they are also

- [00:53:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3225) this is "milk", and they are also sorted by

- [00:53:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3226) sorted by attribute. We

- [00:53:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3228) attribute. We display

- [00:53:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3229) display four digits here as a

- [00:53:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3230) four digits here as a position. So let's

- [00:53:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3235) position. So let's name by attribute, or

- [00:53:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3236) name by attribute, or ID by descending or

- [00:53:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3238) ID by descending or ascending, as you wish

- [00:53:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3239) ascending, as you wish . Yes, it works exactly as

- [00:54:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3242) . Yes, it works exactly as we wanted.

- [00:54:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3244) we wanted.

- [00:54:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3250) OK. Good. Let's make

- [00:54:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3251) Let's make notes about what we

- [00:54:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3252) notes about what we have at the moment

- [00:54:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3253) have at the moment . And before that, I want to

- [00:54:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3255) . And before that, I want to rename this to

- [00:54:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3256) rename this to lecture 10. Okay. Okay

- [00:54:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3273) lecture 10. Okay. Okay . So, And how to add

- [00:55:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3315) . So, And how to add search to the context of

- [00:55:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3319) search to the context of previous work.

- [00:55:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3320) previous work.

- [00:55:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3330) Good. How to capture key events throughout the

- [00:55:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3331) key events throughout the application and

- [00:55:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3332) application and

- [00:55:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3340) well. Um, perform actions depending on the

- [00:55:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3341) actions depending on the

- [00:55:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3344) selected tab.

- [00:55:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3349) Good. I think so now.

- [00:56:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3380) Good. text queries. Yes. Good. And do

- [00:56:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3392) queries. Yes. Good. And do we have anything else? I think

- [00:56:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3397) we have anything else? I think

- [00:56:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3407) key documents or keystrokes.

- [00:56:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3408) keystrokes.

- [00:56:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3416) Good. So now we have search,

- [00:56:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3417) we have search, filtering,

- [00:56:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3418) filtering, editing, and everything

- [00:56:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3419) editing, and everything we want. And after

- [00:57:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3425) we want. And after logging in, I will automatically make

- [00:57:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3426) logging in, I will automatically make

- [00:57:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3428) the app go to the medication tab if

- [00:57:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3429) medication tab if it is a doctor. So let's add

- [00:57:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3436) it is a doctor. So let's add this, and it'll be

- [00:57:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3437) this, and it'll be inside our

- [00:57:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3438) inside our login operations, and you

- [00:57:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3439) login operations, and you see, we're

- [00:57:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3439) see, we're setting up the

- [00:57:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3441) setting up the user's login. Okay,

- [00:57:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3447) user's login. Okay, before we

- [00:57:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3448) before we do that, if we

- [00:57:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3455) do that, if we can log in

- [00:57:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3456) can log in a user and the user type is

- [00:57:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3462) a user and the user type is

- [00:57:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3465) , then what was the type? The

- [00:57:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3469) user type

- [00:57:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3478) is set here, and the doctor is two. We

- [00:58:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3481) doctor is two. We will set the

- [00:58:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3489) will set the medication tab selected as

- [00:58:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3492) medication tab selected as true. Good. So

- [00:58:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3494) true. Good. So let's go in. You

- [00:58:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3502) let's go in. You see, it's worth

- [00:58:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3503) see, it's worth trying to make

- [00:58:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3504) trying to make the app as

- [00:58:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3505) the app as easy to

- [00:58:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3506) easy to use as possible for

- [00:58:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3507) use as possible for your customers or

- [00:58:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3508) your customers or users. This should

- [00:58:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3513) users. This should be your goal in

- [00:58:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3515) be your goal in every case.

- [00:58:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3516) every case.

- [00:58:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3525) Good. And now it works. Good. So,

- [00:58:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3528) works. Good. So, what other screen

- [00:58:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3529) what other screen could we possibly need? We

- [00:58:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3536) could we possibly need? We can have prescriptions,

- [00:58:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3537) can have prescriptions, treatments, and other

- [00:58:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3539) treatments, and other things according to

- [00:59:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3540) things according to our needs. However, uh

- [00:59:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3546) our needs. However, uh I don't think we

- [00:59:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3549) I don't think we need to

- [00:59:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3550) need to program these

- [00:59:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3551) program these screens because they

- [00:59:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3552) screens because they will be similar. Our

- [00:59:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3555) will be similar. Our goal here is to learn

- [00:59:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3556) goal here is to learn as many

- [00:59:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3557) as many necessary functions as possible.

- [00:59:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3559) necessary functions as possible.

- [00:59:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3563) So today I'm also going to show you what it is

- [00:59:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3565) show you what it is and how it's

- [00:59:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3565) and how it's used, uh

- [00:59:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3567) used, uh

- [00:59:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3572) yield return. Okay. So, what is yield return and how is it

- [00:59:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3573) is yield return and how is it used?

- [00:59:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3575) used? So let's

- [00:59:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3576) So let's get an idea

- [00:59:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3577) get an idea of ​​ what yield return is

- [00:59:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3579) of ​​what yield return is . Of course, if you have any

- [00:59:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3591) . Of course, if you have any questions, ask me

- [00:59:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3592) questions, ask me via Discord so I can

- [00:59:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3594) via Discord so I can answer your

- [00:59:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3595) answer your question or

- [00:59:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3596) question or explain more

- [00:59:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3597) explain more things in the next

- [00:59:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3598) things in the next video lecture. Okay,

- [01:00:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3602) video lecture. Okay, don't forget about it.

- [01:00:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3604) don't forget about it.

- [01:00:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3604) don't forget about it. Okay, so understanding

- [01:00:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3606) Okay, so understanding yield return in C#. Once

- [01:00:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3616) yield return in C#. Once you understand

- [01:00:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3617) you understand the use of yield return

- [01:00:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3618) the use of yield return in C# code, you can't help but

- [01:00:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3619) in C# code, you can't help but

- [01:00:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3620) wonder what kind of return form this is or the

- [01:00:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3622) return form this is or the special mechanism

- [01:00:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3623) special mechanism for handling it. In

- [01:00:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3624) for handling it. In the article below, we

- [01:00:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3625) the article below, we will explore some

- [01:00:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3627) will explore some programming techniques that

- [01:00:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3628) programming techniques that involve the

- [01:00:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3629) involve the yield return keywords in C#.

- [01:00:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3630) yield return keywords in C#. Quote from MSDN: The

- [01:00:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3632) Quote from MSDN: The yield keyword signals

- [01:00:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3633) yield keyword signals to the compiler that the method

- [01:00:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3635) to the compiler that the method in which it

- [01:00:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3636) in which it appears is an

- [01:00:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3637) appears is an iterator block.

- [01:00:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3638) iterator block.

- [01:00:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3638) iterator block. The compiler generates a

- [01:00:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3640) The compiler generates a class to implement

- [01:00:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3641) class to implement the behavior expressed

- [01:00:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3642) the behavior expressed in the iterator block. In an

- [01:00:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3644) in the iterator block. In an iterator block, the

- [01:00:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3645) iterator block, the yield keyword

- [01:00:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3646) yield keyword is used

- [01:00:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3647) is used together with the

- [01:00:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3648) together with the return keyword to

- [01:00:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3649) return keyword to return a value to an

- [01:00:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3650) return a value to an

- [01:00:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3652) enumeration object. This is the value that

- [01:00:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3653) the value that is returned,

- [01:00:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3654) is returned, for example, in each

- [01:00:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3655) for example, in each loop of a foreach statement. The

- [01:00:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3657) loop of a foreach statement. The yield keyword

- [01:00:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3658) yield keyword

- [01:00:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3659) is also used with break to signal the

- [01:01:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3661) signal the end of iteration.

- [01:01:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3662) end of iteration.

- [01:01:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3664) Okay, let's continue. Iteration,

- [01:01:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3667) continue. Iteration, one of the yield methods

- [01:01:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3668) one of the yield methods

- [01:01:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3670) combined with the return mechanism,

- [01:01:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3671) return mechanism, allows creation.

- [01:01:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3672) allows creation. The function returns

- [01:01:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3674) The function returns a value that

- [01:01:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3674) a value that processes certain

- [01:01:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3675) processes certain information in a loop and

- [01:01:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3677) information in a loop and completes certain conditions

- [01:01:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3678) completes certain conditions before it. This

- [01:01:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3679) before it. This contradicts the case of a

- [01:01:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3681) contradicts the case of a regular return. I

- [01:01:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3682) regular return. I get the return value of

- [01:01:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3683) get the return value of

- [01:01:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3685) the function, which will return and

- [01:01:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3685) will return and terminate the function at

- [01:01:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3686) terminate the function at that point. But here

- [01:01:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3688) that point. But here the function is called

- [01:01:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3689) the function is called again in the loop

- [01:01:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3690) again in the loop containing the yield

- [01:01:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3691) containing the yield return function that just

- [01:01:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3692) return function that just completed. From here

- [01:01:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3693) completed. From here we can imagine an action

- [01:01:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3694) we can imagine an action that is quite

- [01:01:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3695) that is quite abstract but can

- [01:01:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3696) abstract but can be useful in

- [01:01:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3697) be useful in some cases to

- [01:01:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3698) some cases to help make the

- [01:01:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3699) help make the code concise and

- [01:01:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3700) code concise and compact. Two,

- [01:01:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3701) compact. Two, some requirements for

- [01:01:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3702) some requirements for using yield return.

- [01:01:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3704) using yield return. Do not place yield in an

- [01:01:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3705) Do not place yield in an unsafe block. Do not

- [01:01:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3707) unsafe block. Do not use the

- [01:01:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3708) use the ref or

- [01:01:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3709) ref or out keywords with

- [01:01:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3710) out keywords with method, operator, or

- [01:01:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3712) method, operator, or getter/setter accessor parameters. Yield

- [01:01:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3714) getter/setter accessor parameters. Yield return can be placed

- [01:01:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3715) return can be placed in a try block only if it

- [01:01:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3717) in a try block only if it is followed by a finally block.

- [01:01:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3718) is followed by a finally block.

- [01:01:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3719) is followed by a finally block. Yield break can be

- [01:02:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3720) Yield break can be placed in a try

- [01:02:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3721) placed in a try and catch block, but cannot be

- [01:02:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3722) and catch block, but cannot be placed in a

- [01:02:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3724) placed in a finally block. Do not

- [01:02:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3726) finally block. Do not use yield in an

- [01:02:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3727) use yield in an anonymous method.

- [01:02:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3728) anonymous method.

- [01:02:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3730) Three, an example of using yield return.

- [01:02:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3732) using yield return.

- [01:02:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3734) To use yield return, simply

- [01:02:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3736) yield return, simply create a method with an

- [01:02:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3737) create a method with an

- [01:02:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3739) IEnumerable return type; Arrays and collections in .NET

- [01:02:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3740) collections in .NET implement the

- [01:02:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3742) implement the IEnumerable interface using a

- [01:02:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3743) IEnumerable interface using a loop and yield return to

- [01:02:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3744) loop and yield return to return values ​​ in the

- [01:02:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3746) return values ​​in the loop body. Here is an

- [01:02:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3748) loop body. Here is an example of a function with

- [01:02:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3749) example of a function with two arguments, int

- [01:02:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3751) two arguments, int start and int number, that

- [01:02:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3752) start and int number, that creates even numbers

- [01:02:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3753) creates even numbers starting from a given

- [01:02:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3754) starting from a given value. Below

- [01:02:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3756) value. Below is the code

- [01:02:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3757) is the code written in the usual

- [01:02:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3758) written in the usual way, where

- [01:02:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3759) way, where the result

- [01:02:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3760) the result is returned as an

- [01:02:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3761) is returned as an array, and then we

- [01:02:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3762) array, and then we use the array

- [01:02:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3763) use the array to retrieve

- [01:02:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3764) to retrieve the result.

- [01:02:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3764) the result. Instead, we can

- [01:02:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3766) Instead, we can use yield return

- [01:02:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3767) use yield return to simplify the code,

- [01:02:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3768) to simplify the code, speed up the work,

- [01:02:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3769) speed up the work, and reduce the cost

- [01:02:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3770) and reduce the cost of intermediate

- [01:02:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3771) of intermediate structures. This

- [01:02:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3771) structures. This makes it easier to check for

- [01:02:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3773) makes it easier to check for errors in the code when

- [01:02:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3773) errors in the code when working with large

- [01:02:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3774) working with large amounts of data.

- [01:02:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3775) amounts of data. OK. So, we have a

- [01:02:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3777) OK. So, we have a few

- [01:02:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3778) few code snippets. Let's

- [01:02:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3779) code snippets. Let's create our example

- [01:03:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3780) create our example from scratch to better

- [01:03:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3782) from scratch to better understand everything. I'll create an

- [01:03:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3787) understand everything. I'll create an additional, uh,

- [01:03:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3788) additional, uh,

- [01:03:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3795) console project. We will make an example of

- [01:03:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3796) make an example of using yield return

- [01:03:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3798) using yield return to better

- [01:03:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3803) to better understand it. Okay, I'm

- [01:03:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3814) understand it. Okay, I'm choosing a console

- [01:03:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3816) choosing a console application. This is .NET Core.

- [01:03:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3818) application. This is .NET Core.

- [01:03:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3821) Further. So, let's name it, let's name it as

- [01:03:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3825) it, let's name it as

- [01:03:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3836) we choose the folder for the lectures, Lectures10_cmd, and

- [01:03:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3837) lectures, Lectures10_cmd, and let's name it like this,

- [01:03:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3839) let's name it like this, next. You see, .NET 5,

- [01:04:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3847) next. You see, .NET 5, the latest .NET Core.

- [01:04:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3849) the latest .NET Core.

- [01:04:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3853) OK. So the function here essentially does

- [01:04:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3855) here essentially does an addition, or let's

- [01:04:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3860) an addition, or let's see what it

- [01:04:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3861) see what it does? There is an array that

- [01:04:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3864) does? There is an array that has a length of 10, and there is

- [01:04:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3868) has a length of 10, and there is a function that adds the

- [01:04:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3870) a function that adds the start value and other

- [01:04:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3876) start value and other things. Let's

- [01:04:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3878) things. Let's write it. So,

- [01:04:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3881) write it. So, let's create our array as

- [01:04:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3883) let's create our array as int a, like this. The

- [01:04:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3888) int a, like this. The

- [01:04:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3893) integer array a is equal to a new

- [01:04:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3894) is equal to a new integer array

- [01:04:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3895) integer array of size 10. Now

- [01:05:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3901) of size 10. Now we have a function

- [01:05:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3903) we have a function like public static

- [01:05:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3908) like public static integer array, myFunction,

- [01:05:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3911) integer array, myFunction, or whatever name,

- [01:05:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3913) or whatever name,

- [01:05:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3918) method. So, this method takes start and number. And,

- [01:05:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3937) takes start and number. And, actually, it

- [01:05:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3938) actually, it initializes a new

- [01:05:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3939) initializes a new temporary array like this

- [01:05:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3941) temporary array like this . OK.

- [01:05:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3951) . OK. Integers, size 10.

- [01:05:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3953) Integers, size 10.

- [01:05:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3953) Integers, size 10. Where does this

- [01:05:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3954) Where does this number 10 come from? It

- [01:05:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3956) number 10 come from? It comes from above. Oh,

- [01:05:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3957) comes from above. Oh, this is an array declaration

- [01:05:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3959) this is an array declaration with

- [01:06:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3960) with number elements, not 10.

- [01:06:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3961) number elements, not 10.

- [01:06:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3964) And using a for loop, starting from zero

- [01:06:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3968) for loop, starting from zero to number, it assigns

- [01:06:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3975) to number, it assigns the value to the array like this

- [01:06:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3977) the value to the array like this : i is equal to start

- [01:06:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3981) : i is equal to start

- [01:06:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3989) plus 2 times i, and then it returns this

- [01:06:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=3991) and then it returns this array. OK. And then

- [01:06:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4005) array. OK. And then we'll write a line,

- [01:06:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4006) we'll write a line, right? Of course.

- [01:06:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4008) right? Of course. Of course. So,

- [01:06:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4010) Of course. So, let's assign a the result of

- [01:06:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4011) let's assign a the result of executing myMethod with

- [01:06:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4014) executing myMethod with arguments 2 and 10, and

- [01:06:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4019) arguments 2 and 10, and then we can

- [01:07:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4020) then we can use a foreach loop

- [01:07:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4021) use a foreach loop

- [01:07:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4026) on the array and Console.WriteLine, printing

- [01:07:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4032) Console.WriteLine, printing item. Let's see what this

- [01:07:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4035) item. Let's see what this will print, because this is a very

- [01:07:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4036) will print, because this is a very basic function, it will

- [01:07:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4037) basic function, it will print the numbers

- [01:07:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4038) print the numbers assigned to the array.

- [01:07:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4040) assigned to the array.

- [01:07:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4048) Good. 2, 4, 6, 8, 10, 12, 14, 16, 18 and 20. Yes. since

- [01:07:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4058) 18 and 20. Yes. since we are adding zero, we

- [01:07:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4060) we are adding zero, we start with two: 2 + 0,

- [01:07:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4062) start with two: 2 + 0, then 2 + 2, then 2 + 4, 2 +

- [01:07:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4064) then 2 + 2, then 2 + 4, 2 + 6, and so on. So,

- [01:07:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4072) 6, and so on. So, now

- [01:07:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4074) now we will

- [01:07:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4074) we will use yield

- [01:07:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4076) use yield return instead. Okay, how

- [01:07:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4079) return instead. Okay, how can we do this? Yield

- [01:08:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4084) can we do this? Yield return returns a

- [01:08:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4085) return returns a value during

- [01:08:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4087) value during each iteration.

- [01:08:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4088) each iteration.

- [01:08:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4089) each iteration. Of course. So

- [01:08:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4093) Of course. So basically we're going to change

- [01:08:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4094) basically we're going to change this code like this: for

- [01:08:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4099) this code like this: for each one we're going to create

- [01:08:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4101) each one we're going to create another method. This

- [01:08:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4105) another method. This method will return

- [01:08:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4106) method will return integers and

- [01:08:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4110) integers and

- [01:08:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4114) in fact it should return yes, it

- [01:08:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4119) return yes, it should also return an

- [01:08:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4120) should also return an enumerator

- [01:08:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4122) enumerator . And this will be the yield method.

- [01:08:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4129) . And this will be the yield method.

- [01:08:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4130) . And this will be the yield method. Good. So, essentially,

- [01:08:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4133) Good. So, essentially,

- [01:08:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4138) instead of an array here, we'll have something like

- [01:08:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4139) we'll have something like this. Yield return.

- [01:09:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4143) this. Yield return.

- [01:09:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4151) OK. And it should pay off. Good.

- [01:09:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4153) pay off. Good. They say, so this is a different

- [01:09:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4156) They say, so this is a different type of iterator.

- [01:09:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4157) type of iterator.

- [01:09:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4158) type of iterator. Let's do it as

- [01:09:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4164) Let's do it as integers. Okay, this is

- [01:09:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4170) integers. Okay, this is n't a type of enumerator either.

- [01:09:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4172) enumerator either.

- [01:09:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4175) Got it. So, it simply returns an

- [01:09:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4176) simply returns an IEnumerable, not any

- [01:09:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4178) IEnumerable, not any

- [01:09:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4188) specific type. Okay , I needed to

- [01:09:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4189) , I needed to add system

- [01:09:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4190) add system collections. So

- [01:09:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4194) collections. So instead of

- [01:09:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4195) instead of assigning it like that,

- [01:09:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4196) assigning it like that, now I just

- [01:09:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4197) now I just need to call "

- [01:09:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4199) need to call " 2 to 10" and output

- [01:10:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4208) 2 to 10" and output another loop from 2 to 10.

- [01:10:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4210) another loop from 2 to 10.

- [01:10:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4214) foreach, and I'll call yield return and it'll take 2 and 10

- [01:10:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4220) return and it'll take 2 and 10

- [01:10:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4226) and then console.writeline item.

- [01:10:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4231) You can see how much simpler and

- [01:10:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4232) simpler and easier the code becomes. Let's also

- [01:10:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4238) easier the code becomes. Let's also put a

- [01:10:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4239) put a stop here. And here too.

- [01:10:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4244) stop here. And here too.

- [01:10:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4247) Okay, let's do it. A step, and

- [01:10:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4249) do it. A step, and we see

- [01:10:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4250) we see a two on the screen. The two

- [01:10:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4252) a two on the screen. The two are removed. We do it.

- [01:10:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4254) are removed. We do it.

- [01:11:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4261) Oh, this... I don't know why this error occurs,

- [01:11:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4263) this error occurs, but it does occur on my

- [01:11:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4263) but it does occur on my computer

- [01:11:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4264) computer . When

- [01:11:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4267) . When I iterate with

- [01:11:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4268) I iterate with debugging, this

- [01:11:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4269) debugging, this happens. So,

- [01:11:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4270) happens. So, you see, it prints the same thing

- [01:11:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4271) you see, it prints the same thing . However, this is not

- [01:11:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4275) . However, this is not returned directly

- [01:11:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4276) returned directly from the foreach loop method.

- [01:11:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4277) from the foreach loop method.

- [01:11:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4280) It returns the value and continues the

- [01:11:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4281) the value and continues the loop. So this

- [01:11:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4283) loop. So this value comes

- [01:11:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4284) value comes in here, and then we

- [01:11:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4285) in here, and then we use it like this

- [01:11:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4286) use it like this . Of course.

- [01:11:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4288) . Of course. This is what yield return is.

- [01:11:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4290) This is what yield return is. If you do

- [01:11:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4291) If you do another example

- [01:11:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4292) another example yourself, you will

- [01:11:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4293) yourself, you will be able to understand this better

- [01:11:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4294) be able to understand this better . I am

- [01:11:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4295) . I am sure of this. This

- [01:11:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4297) sure of this. This can be very

- [01:11:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4297) can be very useful in various

- [01:11:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4299) useful in various cases. So, that's all

- [01:11:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4305) cases. So, that's all . I think this is a much

- [01:11:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4307) . I think this is a much better option,

- [01:11:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4308) better option, easier to understand,

- [01:11:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4309) easier to understand, and probably more

- [01:11:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4310) and probably more effective. Now

- [01:11:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4314) effective. Now we've gotten rid of the

- [01:11:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4315) we've gotten rid of the array definition

- [01:11:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4316) array definition here or the

- [01:11:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4317) here or the array definition here, and so on.

- [01:12:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4321) array definition here, and so on.

- [01:12:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4325) Good. So, what topic should we

- [01:12:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4326) topic should we continue with? Let me

- [01:12:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4328) continue with? Let me think about it. Okay,

- [01:12:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4335) think about it. Okay, let's continue

- [01:12:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4336) let's continue working with

- [01:12:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4337) working with multithreading

- [01:12:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4338) multithreading to understand it better

- [01:12:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4339) to understand it better . So after that,

- [01:12:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4345) . So after that, I'll clean the screen.

- [01:12:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4346) I'll clean the screen.

- [01:12:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4353) Good. Command console dot

- [01:12:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4359) clear. Good. So, with multithreading, a

- [01:12:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4361) multithreading, a

- [01:12:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4367) race condition arises. Okay. Therefore, to effectively

- [01:12:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4368) to effectively use

- [01:12:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4369) use multithreading,

- [01:12:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4370) multithreading, you need to

- [01:12:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4371) you need to synchronize the

- [01:12:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4372) synchronize the threads. What does this mean?

- [01:12:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4376) threads. What does this mean? Let me show you.

- [01:12:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4378) Let me show you.

- [01:13:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4381) Let's say I have a number of type double. The

- [01:13:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4384) number of type double. The double type is not atomic.

- [01:13:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4385) double type is not atomic. So this should be

- [01:13:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4387) So this should be fine. Example:

- [01:13:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4388) fine. Example: DBL count. Okay. And

- [01:13:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4396) DBL count. Okay. And let's say I have a

- [01:13:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4397) let's say I have a method like this

- [01:13:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4398) method like this that increments a number. And

- [01:13:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4411) that increments a number. And it just loops,

- [01:13:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4413) it just loops, let's say, up to 10,000,

- [01:13:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4414) let's say, up to 10,000, increments the counter

- [01:13:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4415) increments the counter by one. So, we'll

- [01:13:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4420) by one. So, we'll get we'll do it like this

- [01:13:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4424) get we'll do it like this . Yes. Okay. This

- [01:13:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4428) . Yes. Okay. This will give us, by the way, this

- [01:13:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4429) will give us, by the way, this should also be

- [01:13:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4430) should also be static. Okay. So that would

- [01:13:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4439) static. Okay. So that would give us 10,000,

- [01:14:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4441) give us 10,000, right? And if I

- [01:14:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4442) right? And if I call it twice, what

- [01:14:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4444) call it twice, what happens? That's right

- [01:14:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4448) happens? That's right , it'll be 20,000,

- [01:14:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4449) , it'll be 20,000, right. So

- [01:14:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4453) right. So let's do some

- [01:14:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4458) let's do some console output too.

- [01:14:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4459) console output too.

- [01:14:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4466) Okay. The expected value is 20,000.

- [01:14:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4467) value is 20,000.

- [01:14:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4470) The value we got is: okay. and a

- [01:14:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4476) got is: okay. and a line with the

- [01:14:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4477) line with the counter value and zero.

- [01:14:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4481) counter value and zero.

- [01:14:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4485) Okay, let's see if it shows up like this

- [01:14:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4486) it shows up like this . So, the expected

- [01:14:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4490) . So, the expected value is 20,000, and the

- [01:14:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4492) value is 20,000, and the received value is 10,000. What

- [01:14:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4496) received value is 10,000. What if I call these

- [01:14:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4497) if I call these numbers at the same time? How to

- [01:14:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4499) numbers at the same time? How to do it? I can

- [01:15:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4500) do it? I can do this

- [01:15:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4501) do this using task.factory.

- [01:15:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4502) using task.factory. factory and to

- [01:15:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4507) factory and to use it,

- [01:15:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4508) use it, you need to add a

- [01:15:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4509) you need to add a reference to threading tasks

- [01:15:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4511) reference to threading tasks start new. Okay, it

- [01:15:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4514) start new. Okay, it looks like this.

- [01:15:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4515) looks like this.

- [01:15:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4521) Okay, I'll run two separate tasks here like this

- [01:15:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4522) two separate tasks here like this and paste them in here

- [01:15:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4527) and paste them in here . I can even

- [01:15:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4529) . I can even run multiple

- [01:15:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4530) run multiple tasks. Let's run

- [01:15:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4532) tasks. Let's run four tasks. That's

- [01:15:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4536) four tasks. That's it. Okay. So what would

- [01:15:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4540) it. Okay. So what would the expected

- [01:15:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4541) the expected value be now?

- [01:15:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4542) value be now?

- [01:15:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4543) value be now? The expected value

- [01:15:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4545) The expected value would be 60,000. Right? And

- [01:15:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4547) would be 60,000. Right? And let's see what

- [01:15:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4548) let's see what value we

- [01:15:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4549) value we get. By the way, this

- [01:15:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4550) get. By the way, this will use

- [01:15:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4552) will use four cores

- [01:15:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4552) four cores at once. So I

- [01:15:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4554) at once. So I expect full

- [01:15:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4555) expect full

- [01:15:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4559) CPU usage. Okay.

- [01:16:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4562) However, we received 50,000 . Why exactly 10 thousand

- [01:16:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4573) . Why exactly 10 thousand less? Let's

- [01:16:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4581) less? Let's see when we

- [01:16:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4582) see when we comment it out and

- [01:16:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4583) comment it out and do it like this. You

- [01:16:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4594) do it like this. You see, we get

- [01:16:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4596) see, we get 60,000. However, when we

- [01:16:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4599) 60,000. However, when we run the task, we

- [01:16:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4600) run the task, we get 50,000. It

- [01:16:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4603) get 50,000. It could be even

- [01:16:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4604) could be even less or a different number.

- [01:16:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4605) less or a different number.

- [01:16:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4613) So, essentially, a race condition arises. Let

- [01:16:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4614) race condition arises. Let

- [01:16:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4614) race condition arises. Let 's run it without

- [01:16:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4615) 's run it without debugging. You see,

- [01:16:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4618) debugging. You see, this time we

- [01:16:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4619) this time we got 30,000. So the

- [01:17:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4625) got 30,000. So the same threads, or

- [01:17:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4626) same threads, or let's say different threads,

- [01:17:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4628) let's say different threads, are trying to change

- [01:17:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4629) are trying to change the number at the same time, and a

- [01:17:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4630) the number at the same time, and a

- [01:17:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4637) race condition occurs. What was it called? call

- [01:17:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4640) called? call it a database change

- [01:17:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4641) it a database change

- [01:17:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4645) if I remember correctly. Okay, so

- [01:17:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4652) remember correctly. Okay, so this is the state of the

- [01:17:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4653) this is the state of the stream race. Okay,

- [01:17:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4658) stream race. Okay, let's actually

- [01:17:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4660) let's actually read this.

- [01:17:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4667) read this. Race conditions in

- [01:17:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4668) Race conditions in multithreading C.

- [01:17:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4670) multithreading C. Good.

- [01:17:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4676) Introduction. A race condition occurs when two or

- [01:17:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4678) occurs when two or more threads

- [01:17:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4679) more threads access

- [01:18:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4680) access shared data and

- [01:18:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4681) shared data and attempt to modify

- [01:18:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4682) attempt to modify it at the same time.

- [01:18:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4683) it at the same time.

- [01:18:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4684) it at the same time. Since the

- [01:18:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4685) Since the thread scheduling algorithm

- [01:18:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4686) thread scheduling algorithm can switch

- [01:18:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4687) can switch between them at any

- [01:18:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4688) between them at any moment, we cannot

- [01:18:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4689) moment, we cannot know the order of

- [01:18:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4690) know the order of access to shared

- [01:18:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4691) access to shared data. Therefore, the result of

- [01:18:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4694) data. Therefore, the result of changing data depends

- [01:18:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4695) changing data depends on the

- [01:18:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4696) on the scheduling algorithm, i.e.

- [01:18:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4697) scheduling algorithm, i.e. threads compete for

- [01:18:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4698) threads compete for access to data or

- [01:18:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4699) access to data or its modification. The reason

- [01:18:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4702) its modification. The reason why race conditions

- [01:18:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4703) why race conditions occur more often in

- [01:18:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4704) occur more often in threads than in

- [01:18:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4705) threads than in processes is

- [01:18:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4706) processes is that threads

- [01:18:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4707) that threads share shared

- [01:18:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4707) share shared memory, while processes do not

- [01:18:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4709) memory, while processes do not . For example,

- [01:18:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4712) . For example, suppose we have

- [01:18:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4714) suppose we have two threads T1 and T2

- [01:18:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4715) two threads T1 and T2 accessing a

- [01:18:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4716) accessing a common variable X.

- [01:18:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4718) common variable X. They read data and

- [01:18:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4719) They read data and then try

- [01:18:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4721) then try to write it

- [01:18:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4721) to write it simultaneously. They

- [01:18:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4724) simultaneously. They compete to see

- [01:18:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4725) compete to see which thread writes the

- [01:18:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4726) which thread writes the value last. In

- [01:18:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4728) value last. In this case,

- [01:18:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4729) this case, the last recorded value will be saved

- [01:18:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4730) the last recorded value will be saved . As

- [01:18:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4733) . As another example,

- [01:18:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4734) another example, consider a situation

- [01:18:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4735) consider a situation where threads T1 and T2

- [01:18:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4736) where threads T1 and T2 perform opposite

- [01:18:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4738) perform opposite operations on this

- [01:18:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4739) operations on this variable. Let thread

- [01:19:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4741) variable. Let thread T1 increase the value

- [01:19:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4743) T1 increase the value of the variable, and thread T2

- [01:19:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4744) of the variable, and thread T2 decrease it at the

- [01:19:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4746) decrease it at the same point in time.

- [01:19:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4747) same point in time.

- [01:19:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4749) What is the result?

- [01:19:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4750) What is the result? The value will remain

- [01:19:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4751) The value will remain unchanged. Good. You

- [01:19:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4755) unchanged. Good. You see the problem,

- [01:19:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4756) see the problem, let me explain.

- [01:19:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4757) let me explain.

- [01:19:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4765) OK. Let's say we have , uh, stream A. Uh,

- [01:19:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4767) , uh, stream A. Uh, okay. Let me

- [01:19:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4770) okay. Let me write this down. So,

- [01:19:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4772) write this down. So, suppose thread A

- [01:19:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4775) suppose thread A

- [01:19:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4784) or thread one reads a variable as 200, increments it

- [01:19:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4785) variable as 200, increments it by one, and stores

- [01:19:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4787) by one, and stores . So, at the same

- [01:19:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4793) . So, at the same moment, let thread

- [01:19:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4797) moment, let thread two access the

- [01:19:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4798) two access the variable, read it as

- [01:20:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4802) variable, read it as 200, increment it by

- [01:20:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4803) 200, increment it by one, and store it.

- [01:20:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4805) one, and store it.

- [01:20:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4811) So, uh, thread one saves first, and the

- [01:20:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4812) saves first, and the value becomes 2001, but

- [01:20:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4814) value becomes 2001, but at the same moment

- [01:20:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4822) at the same moment thread two saves, and

- [01:20:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4824) thread two saves, and it becomes 2001 again,

- [01:20:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4826) it becomes 2001 again, instead of 2002. So how do we

- [01:20:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4831) instead of 2002. So how do we prevent that? We

- [01:20:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4837) prevent that? We need to

- [01:20:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4838) need to use

- [01:20:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4839) use lock. With

- [01:20:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4841) lock. With locking, only

- [01:20:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4842) locking, only one thread can

- [01:20:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4843) one thread can access an

- [01:20:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4844) access an element at a given

- [01:20:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4845) element at a given time. Good. So

- [01:20:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4859) time. Good. So how do we do it?

- [01:21:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4860) how do we do it?

- [01:21:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4861) how do we do it? Let me show you.

- [01:21:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4862) Let me show you.

- [01:21:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4865) First, I'll set the value of our

- [01:21:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4866) the value of our variable to zero here.

- [01:21:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4867) variable to zero here.

- [01:21:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4875) Good. Then I will use another

- [01:21:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4876) use another method with blocking,

- [01:21:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4877) method with blocking,

- [01:21:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4884) increasing numbers with synchronization.

- [01:21:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4885) synchronization.

- [01:21:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4890) Okay, let me check the

- [01:21:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4891) check the

- [01:21:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4898) spelling. Oh, I spelled that correctly.

- [01:21:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4899) spelled that correctly. Wow. Good. And for this

- [01:21:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4903) Wow. Good. And for this to work, we

- [01:21:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4904) to work, we need another object

- [01:21:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4906) need another object or we can just

- [01:21:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4907) or we can just call log. But I

- [01:21:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4909) call log. But I will show you the

- [01:21:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4909) will show you the right way. This

- [01:21:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4913) right way. This may look like ` lock

- [01:21:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4915) may look like ` lock b count`, or no, it

- [01:21:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4917) b count`, or no, it cannot be locked because

- [01:21:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4919) cannot be locked because it is not a reference type.

- [01:22:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4921) it is not a reference type.

- [01:22:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4924) Therefore, we need a link. Okay, private

- [01:22:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4926) link. Okay, private static object. We

- [01:22:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4930) static object. We use object

- [01:22:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4931) use object because it is

- [01:22:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4932) because it is the smallest

- [01:22:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4932) the smallest reference type to

- [01:22:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4933) reference type to lock double and we

- [01:22:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4938) lock double and we need to

- [01:22:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4939) need to initialize it

- [01:22:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4940) initialize it as a new object. Good. And we

- [01:22:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4944) as a new object. Good. And we will block it. We

- [01:22:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4945) will block it. We will block the double

- [01:22:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4947) will block the double every time

- [01:22:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4947) every time we are going to increment

- [01:22:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4949) we are going to increment its value. Good.

- [01:22:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4950) its value. Good.

- [01:22:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4951) its value. Good. And we can do

- [01:22:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4952) And we can do it like this. Good. And

- [01:22:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4957) it like this. Good. And now I'll use the

- [01:22:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4958) now I'll use the part with

- [01:22:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4959) part with synchronization.

- [01:22:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4960) synchronization.

- [01:22:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4970) Good. This time we call

- [01:22:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4971) call synchronization. Good.

- [01:23:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4982) synchronization. Good.

- [01:23:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4985) synchronization, which has methods

- [01:23:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4985) methods using lock and

- [01:23:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4992) using lock and this time I'll even

- [01:23:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4994) this time I'll even call more

- [01:23:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4995) call more threads at the same time, and

- [01:23:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4996) threads at the same time, and let's see what we

- [01:23:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=4997) let's see what we get, well, the

- [01:23:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5003) get, well, the expected value of

- [01:23:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5005) expected value of 80,000, and what we got,

- [01:23:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5006) 80,000, and what we got, what we're going to

- [01:23:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5007) what we're going to get is actually,

- [01:23:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5009) get is actually, of course, locking

- [01:23:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5010) of course, locking is, uh, a resource-intensive

- [01:23:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5015) is, uh, a resource-intensive process. I mean it

- [01:23:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5016) process. I mean it consumes

- [01:23:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5018) consumes resources. So this

- [01:23:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5020) resources. So this slows down your

- [01:23:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5021) slows down your program a little bit. Okay,

- [01:23:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5022) program a little bit. Okay, this time we

- [01:23:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5023) this time we got zero and why is that

- [01:23:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5029) got zero and why is that

- [01:24:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5041) interesting. This is definitely not something I've seen before

- [01:24:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5042) I've seen before . Okay, let's take

- [01:24:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5055) . Okay, let's take a look. Oh, I know the

- [01:24:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5072) a look. Oh, I know the reason. I know the

- [01:24:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5073) reason. I know the reason. Good. Oh,

- [01:24:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5075) reason. Good. Oh, what was the reason? Do

- [01:24:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5078) what was the reason? Do you think we

- [01:24:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5079) you think we made the same

- [01:24:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5080) made the same mistake here? These

- [01:24:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5083) mistake here? These tasks are performed

- [01:24:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5084) tasks are performed immediately. So when we

- [01:24:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5087) immediately. So when we read the values

- [01:24:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5088) read the values here, they are still

- [01:24:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5089) here, they are still being executed. So,

- [01:24:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5092) being executed. So, I also need to

- [01:24:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5093) I also need to wait for the running

- [01:24:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5094) wait for the running tasks. And how will I

- [01:24:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5096) tasks. And how will I do that? I'm going to

- [01:24:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5097) do that? I'm going to do this

- [01:24:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5098) do this with Okay,

- [01:25:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5100) with Okay, let's write it

- [01:25:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5101) let's write it here. Okay, when we

- [01:25:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5106) here. Okay, when we read data here, the

- [01:25:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5107) read data here, the tasks are still

- [01:25:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5108) tasks are still running. Therefore, we do

- [01:25:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5115) running. Therefore, we do not get the

- [01:25:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5116) not get the final volume. So,

- [01:25:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5120) final volume. So,

- [01:25:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5124) therefore, we need to make sure that the

- [01:25:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5125) make sure that the tasks are completed. And

- [01:25:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5128) tasks are completed. And how are we going to

- [01:25:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5129) how are we going to do that? We're

- [01:25:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5130) do that? We're going to do

- [01:25:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5131) going to do this using a

- [01:25:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5132) this using a list. By the way, to

- [01:25:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5135) list. By the way, to be able to

- [01:25:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5136) be able to use

- [01:25:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5137) use the list, I need to

- [01:25:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5138) the list, I need to add another

- [01:25:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5139) add another reference, namely

- [01:25:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5140) reference, namely collections generic tasks

- [01:25:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5146) collections generic tasks and LST started tasks equals

- [01:25:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5148) and LST started tasks equals new tasks. Okay, what I'm

- [01:25:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5154) new tasks. Okay, what I'm going to do

- [01:25:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5156) going to do is task. When you

- [01:25:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5157) is task. When you run a task

- [01:25:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5159) run a task with start name, it

- [01:25:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5159) with start name, it returns the expected

- [01:26:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5161) returns the expected task. And I'll just

- [01:26:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5163) task. And I'll just add this task

- [01:26:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5164) add this task here. Task. Good. Then

- [01:26:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5171) here. Task. Good. Then I'm going to call

- [01:26:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5173) I'm going to call LST tasks and then wait all I

- [01:26:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5186) LST tasks and then wait all I think to be

- [01:26:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5187) think to be able to

- [01:26:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5188) able to do that we had

- [01:26:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5189) do that we had something else, a collection

- [01:26:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5191) something else, a collection or I think. Good. How do

- [01:26:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5211) or I think. Good. How do I do this?

- [01:26:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5212) I do this?

- [01:27:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5221) Let's find it. Let's take a look. Okay,

- [01:27:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5233) a look. Okay, yes, task wait all. Okay,

- [01:27:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5235) yes, task wait all. Okay, now I remember. So

- [01:27:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5239) now I remember. So we use task

- [01:27:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5241) we use task dot wait all, and wait all

- [01:27:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5242) dot wait all, and wait all takes, you see, an

- [01:27:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5243) takes, you see, an array of tasks, which is

- [01:27:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5245) array of tasks, which is our ls started tasks, and we

- [01:27:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5246) our ls started tasks, and we need to convert

- [01:27:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5248) need to convert it into an array. Okay,

- [01:27:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5253) it into an array. Okay, now the program

- [01:27:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5258) now the program will wait for

- [01:27:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5259) will wait for all tasks to complete

- [01:27:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5260) all tasks to complete . But that

- [01:27:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5268) . But that still doesn't prevent the

- [01:27:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5269) still doesn't prevent the database. Good. And

- [01:27:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5274) database. Good. And now we need to

- [01:27:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5275) now we need to do the same for

- [01:27:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5276) do the same for other tasks. So we'll

- [01:28:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5280) other tasks. So we'll add that here too. Okay

- [01:28:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5287) add that here too. Okay . And then we

- [01:28:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5289) . And then we call the same thing

- [01:28:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5290) call the same thing

- [01:28:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5294) when the previous tasks are complete.

- [01:28:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5295) tasks are complete.

- [01:28:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5298) So, using the same

- [01:28:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5300) list won't affect our productivity

- [01:28:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5301) our productivity or anything else. And

- [01:28:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5305) or anything else. And let's look

- [01:28:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5306) let's look at the results. Okay

- [01:28:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5308) at the results. Okay , this time we

- [01:28:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5309) , this time we got 60,000, and the

- [01:28:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5314) got 60,000, and the data race condition didn't

- [01:28:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5316) data race condition didn't occur with the double type.

- [01:28:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5317) occur with the double type.

- [01:28:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5320) Actually, this is somewhat unexpected. Maybe

- [01:28:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5323) unexpected. Maybe we should run

- [01:28:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5324) we should run this without debugging.

- [01:28:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5326) this without debugging.

- [01:28:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5326) this without debugging. Yes. So, during

- [01:28:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5329) Yes. So, during debugging, it

- [01:28:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5330) debugging, it ran

- [01:28:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5331) ran slow enough to

- [01:28:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5332) slow enough to increment all

- [01:28:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5333) increment all values ​​ independently.

- [01:28:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5334) values ​​independently.

- [01:28:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5337) However, when we run the program

- [01:28:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5338) run the program without debugging, you

- [01:29:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5340) without debugging, you see that it becomes

- [01:29:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5341) see that it becomes faster, but still not

- [01:29:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5342) faster, but still not

- [01:29:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5345) accurate. So let's increase the number of

- [01:29:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5347) increase the number of our tasks.

- [01:29:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5347) our tasks.

- [01:29:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5353) number of tasks and see what we

- [01:29:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5354) see what we get. Oh, we have to

- [01:29:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5356) get. Oh, we have to get 100,000 right

- [01:29:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5358) get 100,000 right now. And what do we

- [01:29:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5361) now. And what do we get? Okay,

- [01:29:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5363) get? Okay, now there are more tasks

- [01:29:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5364) now there are more tasks than he can handle

- [01:29:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5366) than he can handle . So we

- [01:29:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5368) . So we only get this. However,

- [01:29:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5370) only get this. However, using

- [01:29:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5371) using blocking, we always

- [01:29:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5373) blocking, we always get 80,000. We

- [01:29:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5378) get 80,000. We can even

- [01:29:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5379) can even increase the number of

- [01:29:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5380) increase the number of tasks to something

- [01:29:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5382) tasks to something really high, like 20, and

- [01:29:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5383) really high, like 20, and we should get

- [01:29:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5385) we should get 200,000, here we'll do 20, and we

- [01:29:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5386) 200,000, here we'll do 20, and we should get 200,000.

- [01:29:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5387) should get 200,000.

- [01:29:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5394) Of course, this will make the program consume

- [01:29:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5395) the program consume more CPU

- [01:29:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5397) more CPU time, but it

- [01:30:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5407) time, but it still computes

- [01:30:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5408) still computes too fast. Oho. Oh

- [01:30:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5410) too fast. Oho. Oh , we still get

- [01:30:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5412) , we still get everything. So let's

- [01:30:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5413) everything. So let's run it without

- [01:30:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5414) run it without debugging. Good.

- [01:30:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5416) debugging. Good. And we got it. But

- [01:30:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5418) And we got it. But every time we will always

- [01:30:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5419) every time we will always receive 200,000.

- [01:30:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5421) receive 200,000.

- [01:30:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5424) Got it? So, when you're

- [01:30:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5425) you're multitasking, you

- [01:30:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5426) multitasking, you always have to uh,

- [01:30:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5430) always have to uh,

- [01:30:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5432) synchronize the threads with each other. You

- [01:30:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5434) threads with each other. You should always have

- [01:30:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5435) should always have synchronization between

- [01:30:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5436) synchronization between threads. Okay, this is a

- [01:30:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5437) threads. Okay, this is a very important rule.

- [01:30:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5439) very important rule.

- [01:30:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5443) Never forget that without synchronization

- [01:30:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5444) that without synchronization between threads, you will not

- [01:30:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5445) between threads, you will not get

- [01:30:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5445) get deterministic

- [01:30:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5446) deterministic results. Good.

- [01:30:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5449) results. Good.

- [01:30:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5455) if it were, there's another way too, and

- [01:30:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5457) another way too, and if it wasn't a double, but

- [01:30:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5458) if it wasn't a double, but let's say a static long

- [01:31:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5460) let's say a static long , and a long like this zero,

- [01:31:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5468) , and a long like this zero, I could

- [01:31:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5468) I could synchronize it

- [01:31:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5469) synchronize it without any

- [01:31:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5470) without any blocking. How could I

- [01:31:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5474) blocking. How could I do that? I could

- [01:31:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5477) do that? I could do this

- [01:31:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5478) do this with Interlocked.

- [01:31:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5479) with Interlocked.

- [01:31:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5485) Good. By the way, Interlocked also requires threading,

- [01:31:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5490) also requires threading, like this. We added

- [01:31:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5495) like this. We added threading, as you can see, and

- [01:31:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5497) threading, as you can see, and Interlocked, and then increment.

- [01:31:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5498) Interlocked, and then increment.

- [01:31:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5502) So this is a thread-safe

- [01:31:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5503) thread-safe operation, and as long as you

- [01:31:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5504) operation, and as long as you use

- [01:31:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5505) use Interlocked for everything, it

- [01:31:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5506) Interlocked for everything, it will be thread-safe

- [01:31:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5508) will be thread-safe . It provides atomic

- [01:31:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5511) . It provides atomic operations on variables

- [01:31:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5512) operations on variables that are shared across

- [01:31:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5513) that are shared across multiple threads.

- [01:31:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5514) multiple threads.

- [01:31:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5517) Atomic means it will happen

- [01:31:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5518) it will happen

- [01:32:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5521) in a single cycle. Good. So what does an

- [01:32:03](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5523) So what does an atomic operation mean? This

- [01:32:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5532) atomic operation mean? This means it

- [01:32:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5533) means it will happen in

- [01:32:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5535) will happen in one processor

- [01:32:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5536) one processor cycle, if I

- [01:32:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5536) cycle, if I remember correctly.

- [01:32:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5538) remember correctly.

- [01:32:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5548) The atom is indivisible.

- [01:32:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5549) The atom is indivisible. Atomic operations

- [01:32:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5550) Atomic operations are indivisible

- [01:32:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5551) are indivisible operations that

- [01:32:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5552) operations that cannot be divided.

- [01:32:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5553) cannot be divided.

- [01:32:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5555) Example: Interrupted microprocessors do not

- [01:32:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5557) microprocessors do not execute

- [01:32:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5557) execute sequentially, that is,

- [01:32:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5558) sequentially, that is, instruction by

- [01:32:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5559) instruction by instruction, as

- [01:32:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5560) instruction, as written in the program.

- [01:32:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5561) written in the program.

- [01:32:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5564) There are external objects that can

- [01:32:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5565) objects that can change the course of

- [01:32:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5566) change the course of execution. A good

- [01:32:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5568) execution. A good example is

- [01:32:49](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5569) example is interruption. So, you

- [01:32:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5571) interruption. So, you may know the

- [01:32:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5572) may know the instruction set that is

- [01:32:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5573) instruction set that is available on almost

- [01:32:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5574) available on almost all processors.

- [01:32:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5575) all processors.

- [01:32:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5576) all processors. Imagine it

- [01:32:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5577) Imagine it being executed by a

- [01:32:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5578) being executed by a processor. A 32-bit

- [01:33:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5580) processor. A 32-bit value

- [01:33:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5581) value is moved into a 32-

- [01:33:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5582) is moved into a 32- bit register. Now

- [01:33:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5584) bit register. Now , after shifting 16

- [01:33:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5586) , after shifting 16 bits, an interrupt request occurs

- [01:33:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5587) bits, an interrupt request occurs . The

- [01:33:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5588) . The

- [01:33:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5591) atomic instruction will not stop, but

- [01:33:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5592) will not stop, but will execute to the end,

- [01:33:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5593) will execute to the end, and only then will the processor

- [01:33:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5594) and only then will the processor handle the interrupt

- [01:33:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5596) handle the interrupt . A non-

- [01:33:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5598) . A non- atomic instruction will be

- [01:33:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5599) atomic instruction will be immediately stopped and an

- [01:33:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5600) immediately stopped and an

- [01:33:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5602) interrupt will be executed.

- [01:33:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5603) interrupt will be executed. The problem is that

- [01:33:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5604) The problem is that if the interrupt

- [01:33:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5605) if the interrupt accesses

- [01:33:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5606) accesses the register that

- [01:33:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5607) the register that the data was written to,

- [01:33:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5608) the data was written to, the result will be

- [01:33:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5609) the result will be unclear

- [01:33:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5610) unclear because the operation is

- [01:33:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5611) because the operation is only

- [01:33:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5612) only half complete. Typically,

- [01:33:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5614) half complete. Typically, on conventional

- [01:33:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5615) on conventional processors, operations

- [01:33:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5616) processors, operations with processor word size

- [01:33:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5617) with processor word size are

- [01:33:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5618) are atomic. If the

- [01:33:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5620) atomic. If the processor word is

- [01:33:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5621) processor word is 16 bits wide, a 16-bit

- [01:33:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5623) 16 bits wide, a 16-bit instruction will be

- [01:33:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5624) instruction will be atomic. However, a 32-

- [01:33:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5627) atomic. However, a 32- bit operation

- [01:33:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5628) bit operation will not be atomic. Such a

- [01:33:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5633) will not be atomic. Such a non-atomic

- [01:33:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5633) non-atomic instruction

- [01:33:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5635) instruction is usually provided not by an

- [01:33:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5636) is usually provided not by an instruction set, but by a

- [01:33:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5637) instruction set, but by a high-level language like C,

- [01:33:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5639) high-level language like C, where operations like long

- [01:34:00](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5640) where operations like long long or long do not

- [01:34:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5641) long or long do not guarantee

- [01:34:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5642) guarantee atomicity. OK.

- [01:34:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5645) atomicity. OK.

- [01:34:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5646) atomicity. OK. So you understand

- [01:34:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5647) So you understand the problem, since we

- [01:34:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5649) the problem, since we are incrementing a

- [01:34:10](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5650) are incrementing a double precision number

- [01:34:12](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5652) double precision number , which is 64

- [01:34:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5653) , which is 64 bits if I

- [01:34:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5654) bits if I remember correctly.

- [01:34:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5655) remember correctly.

- [01:34:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5658) Let's check the size of a double or,

- [01:34:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5660) the size of a double or, say, the size of a C#double.

- [01:34:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5661) say, the size of a C#double.

- [01:34:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5666) Oh, it's eight bytes, which means it has

- [01:34:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5669) which means it has 64 bits. Yes. Therefore, in a 32-

- [01:34:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5674) 64 bits. Yes. Therefore, in a 32- bit program, this would

- [01:34:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5675) bit program, this would take two operations.

- [01:34:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5677) take two operations.

- [01:34:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5680) OK. And it will never be atomic.

- [01:34:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5681) be atomic.

- [01:34:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5685) To be sure that your operation is

- [01:34:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5686) that your operation is atomic, you must

- [01:34:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5687) atomic, you must use

- [01:34:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5688) use increment. This will make

- [01:34:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5695) increment. This will make it atomic

- [01:34:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5696) it atomic programmatically; it can

- [01:34:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5698) programmatically; it can take ref as well as

- [01:34:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5699) take ref as well as long or int 32. Now it

- [01:35:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5705) long or int 32. Now it will increment the value

- [01:35:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5706) will increment the value by one. You

- [01:35:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5707) by one. You can also set how

- [01:35:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5711) can also set how much

- [01:35:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5711) much to increment.

- [01:35:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5713) to increment.

- [01:35:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5716) In fact, it all increments by

- [01:35:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5717) increments by one. There is also add or

- [01:35:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5720) one. There is also add or other functions that you

- [01:35:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5722) other functions that you see like add.

- [01:35:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5724) see like add. With add you

- [01:35:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5725) With add you can add

- [01:35:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5727) can add any value you

- [01:35:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5728) any value you want and it will be

- [01:35:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5729) want and it will be atomic. OK. So

- [01:35:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5732) atomic. OK. So let's put

- [01:35:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5733) let's put this in here and see

- [01:35:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5734) this in here and see what value we

- [01:35:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5735) what value we get. So we'll

- [01:35:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5738) get. So we'll get 10,000, 20,000 and

- [01:35:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5741) get 10,000, 20,000 and okay, let's

- [01:35:47](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5747) okay, let's write that down here.

- [01:35:48](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5748) write that down here.

- [01:35:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5750) The expected value for a long with atomicity,

- [01:35:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5756) for a long with atomicity, when I say auto or

- [01:35:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5757) when I say auto or interlock, okay, and the

- [01:36:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5765) interlock, okay, and the value we

- [01:36:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5766) value we get is a long,

- [01:36:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5767) get is a long, let's see

- [01:36:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5768) let's see what that is. So even

- [01:36:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5773) what that is. So even if we don't do

- [01:36:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5774) if we don't do any synchronization

- [01:36:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5776) any synchronization with lock, it should always

- [01:36:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5777) with lock, it should always be 200k, which is

- [01:36:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5781) be 200k, which is 220,000, and yes, that's exactly right.

- [01:36:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5783) 220,000, and yes, that's exactly right.

- [01:36:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5786) You see, double doesn't work like that, but interlock does

- [01:36:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5788) that, but interlock does . So this is

- [01:36:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5791) . So this is another way, if you

- [01:36:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5792) another way, if you are working with

- [01:36:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5794) are working with integers or long,

- [01:36:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5795) integers or long, use

- [01:36:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5796) use interlocked. This can be

- [01:36:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5797) interlocked. This can be used for

- [01:36:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5798) used for reading or many

- [01:36:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5800) reading or many other things. Let

- [01:36:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5800) other things. Let 's take a look. So, it

- [01:36:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5802) 's take a look. So, it supports addition,

- [01:36:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5803) supports addition, increment, swap, or

- [01:36:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5805) increment, swap, or decrement. Okay, with

- [01:36:52](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5812) decrement. Okay, with addition you can

- [01:36:53](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5813) addition you can also use

- [01:36:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5814) use subtraction with

- [01:36:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5815) subtraction with negative

- [01:36:55](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5815) negative values, and exchange

- [01:36:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5816) values, and exchange means it

- [01:36:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5817) means it sets the value of

- [01:36:59](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5819) sets the value of something. OK. So it's

- [01:37:04](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5824) something. OK. So it's thread-safe.

- [01:37:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5826) thread-safe.

- [01:37:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5834) OK. So let's write that down too.

- [01:37:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5835) write that down too.

- [01:37:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5841) OK. What is yield return and how to

- [01:37:22](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5842) return and how to use it?

- [01:37:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5843) use it?

- [01:37:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5849) OK. Example return.

- [01:37:33](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5853) OK. What is the chase state when

- [01:37:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5856) chase state when

- [01:37:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5860) you are multitasking?

- [01:37:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5862) multitasking?

- [01:37:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5870) OK. How to prevent a race condition

- [01:37:51](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5871) race condition with mm

- [01:37:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5874) with mm

- [01:38:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5881) synchronization by using a

- [01:38:02](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5882) using a

- [01:38:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5889) blocking methodology. OK.

- [01:38:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5896) How can we use

- [01:38:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5897) use

- [01:38:23](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5903) interlock to ensure that our

- [01:38:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5905) ensure that our operations on

- [01:38:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5906) operations on int32 or long

- [01:38:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5908) int32 or long int64 variables are

- [01:38:35](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5915) int64 variables are

- [01:38:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5918) thread-safe.

- [01:38:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5919) thread-safe. OK. How to achieve

- [01:38:54](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5934) OK. How to achieve security when working with

- [01:38:56](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5936) security when working with many threads.

- [01:38:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5937) many threads.

- [01:39:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5946) OK. And what else do we have related to

- [01:39:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5947) related to

- [01:39:24](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5964) this, okay? So in this case,

- [01:39:25](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5965) this case, no error occurs.

- [01:39:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5966) no error occurs.

- [01:39:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5976) However, if we were working with

- [01:39:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5977) were working with lists, such as

- [01:39:38](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5978) lists, such as appending to lists

- [01:39:39](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5979) appending to lists or enumerating

- [01:39:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5980) or enumerating them, while simultaneously

- [01:39:41](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5981) them, while simultaneously doing something else in

- [01:39:42](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5982) doing something else in another thread, it

- [01:39:43](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5983) another thread, it could cause

- [01:39:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5985) could cause the program to crash due to

- [01:39:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=5986) the program to crash due to an error. Or so it is,

- [01:40:01](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6001) an error. Or so it is,

- [01:40:05](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6005) okay. Next semester, of course, we'll

- [01:40:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6006) semester, of course, we'll cover more

- [01:40:07](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6007) cover more topics related to

- [01:40:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6008) topics related to multithreading and

- [01:40:09](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6009) multithreading and more. If you have

- [01:40:13](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6013) more. If you have specific questions or

- [01:40:14](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6014) specific questions or topics you would like to

- [01:40:15](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6015) topics you would like to see covered, please

- [01:40:17](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6017) see covered, please contact me

- [01:40:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6018) contact me or leave a comment

- [01:40:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6019) or leave a comment below the video so

- [01:40:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6020) below the video so I

- [01:40:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6021) I can cover it in the next lecture. In the

- [01:40:26](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6026) can cover it in the next lecture. In the next lecture, I

- [01:40:27](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6027) next lecture, I plan to write a

- [01:40:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6028) plan to write a crawler, a simple web

- [01:40:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6029) crawler, a simple web crawler, to do

- [01:40:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6031) crawler, to do more multitasking and

- [01:40:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6032) multitasking and other operations. And

- [01:40:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6036) other operations. And

- [01:40:44](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6044) okay, so we're almost done; we

- [01:40:45](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6045) done; we showed a lot of

- [01:40:46](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6046) showed a lot of things, okay? And

- [01:40:50](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6050) things, okay? And

- [01:40:57](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6057) okay, I think we'll finish this week

- [01:40:58](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6058) we'll finish this week . And okay,

- [01:41:06](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6066) . And okay, let's upload

- [01:41:08](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6068) let's upload our source code to

- [01:41:11](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6071) our source code to

- [01:41:16](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6076) GitHub. I didn't do the other

- [01:41:19](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6079) patient management system screens because they would be the same as the

- [01:41:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6080) they would be the same as the medication panel. You

- [01:41:28](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6088) medication panel. You could

- [01:41:29](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6089) could use other

- [01:41:30](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6090) use other elements like

- [01:41:31](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6091) elements like combo boxes, text

- [01:41:32](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6092) combo boxes, text fields, you already know them

- [01:41:34](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6094) fields, you already know them . These fields all work

- [01:41:36](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6096) . These fields all work on the same

- [01:41:37](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6097) on the same methodology. OK.

- [01:41:40](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6100) methodology. OK.

- [01:42:18](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6138) OK. OK. End of the 10th lecture.

- [01:42:20](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6140) End of the 10th lecture. Hope to see

- [01:42:21](https://www.youtube.com/watch?v=OQYZL5jH7gs&t=6141) Hope to see you next week.
