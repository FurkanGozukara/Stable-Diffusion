# C# Programming (Intermediate) - Lecture 9: Unique Constraints in Databases, Entity Framework Sorting

## Full tutorial link > https://www.youtube.com/watch?v=Tb-w0b7Lf0A

[![C# Programming (Intermediate) - Lecture 9: Unique Constraints in Databases, Entity Framework Sorting](https://i.ytimg.com/vi_webp/Tb-w0b7Lf0A/maxresdefault.webp)](https://www.youtube.com/watch?v=Tb-w0b7Lf0A "C# Programming (Intermediate) - Lecture 9: Unique Constraints in Databases, Entity Framework Sorting")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/C-Programming-Intermediate-Lecture-9-Unique-Constraints-in-Databases-Entity-Framework-Sorting.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/C-Programming-Intermediate-Lecture-9-Unique-Constraints-in-Databases-Entity-Framework-Sorting.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


C# Programming (Advanced/Intermediate) Lectures (9/14) will teach you #CSharp #programming from beginner to intermediate/expert level. This course is an excellent source to learn advanced concepts in C# #coding. If you are a beginner to C#, watch our previous course lectures. The playlist link of the previous course is below.

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

In Lecture 9:

* How to hide and display a tab according to the authority of the logged-in user

* How to load a ready CSV dataset into the database with Entity Framework

* How to utilize task.factory to prevent user interface freeze

* How to update label from sub-threads, sub-tasks with dispatcher

* How to add uniqueness constraint to a database table with defining a unique index

* How to achieve unique adding to the database when using entity framework

* How to add sorting feature to your datagrid display when using entity framework for automatic display, insert, update, delete

* How to bind all elements of an enumeration to a combobox

* How to display description of enum items in the combobox

* How to get selected enumeration of itemssource bound combobox

Introduction

In software development, it is essential to have a good grasp of various techniques and tools that can help us in developing robust and efficient applications. This article will cover various topics related to software development, such as hiding and displaying a tab, loading a CSV dataset into a database, utilizing Task.Factory, updating a label from sub-threads, adding uniqueness constraints to a database table, achieving unique adding to a database when using Entity Framework, adding sorting feature to datagrid display, binding all elements of an enumeration to a combobox, displaying descriptions of enum items in a combobox, and getting the selected enumeration of items source-bound combobox.

How to Hide and Display a Tab According to the Authority of the Logged-in User

In software development, it is essential to manage user privileges to ensure that users can only access features that they are authorized to use. In WPF, we can use the IsEnabled and Visibility properties to hide or display a tab based on the authority of the logged-in user. We can define the authority of the user in the database, and based on that, we can enable or disable the tab as required. This technique helps to prevent unauthorized access to sensitive data and functionality.

How to Load a Ready CSV Dataset into the Database with Entity Framework

CSV (Comma Separated Values) is a popular format for storing data in a tabular format. In software development, we often need to load CSV data into a database for further analysis or processing. Entity Framework is a popular Object-Relational Mapping (ORM) tool that allows us to work with databases using C# code. We can use Entity Framework to load a ready CSV dataset into the database by creating a model that maps the CSV data to the database table, and then using the DbContext class to add the data to the table.

How to Utilize Task.Factory to Prevent User Interface Freeze

In software development, it is essential to ensure that the user interface remains responsive even when the application is performing heavy processing tasks. We can use Task.Factory to run time-consuming tasks asynchronously and prevent the user interface from freezing. Task.Factory allows us to run tasks on a separate thread and then update the user interface when the task is complete. This technique helps to provide a better user experience and improves the overall performance of the application.

How to Update Label from Sub-Threads, Sub-Tasks with Dispatcher

In WPF, we can use the Dispatcher class to update the user interface from sub-threads or sub-tasks. When a task or thread that is not the UI thread attempts to update the user interface, an exception is thrown. We can use the Dispatcher.BeginInvoke



### Video Transcription


- [00:00:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2) Hello dear students, welcome to the lecture 9 of introduction to programming 2 AKA Advanced

- [00:00:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7) programming. So today, today we will continue from our previous lecture. I will start with

- [00:00:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=14) a cloning our lecture 8 code, as usual

- [00:00:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=36) And meanwhile, it's also open our secret managers.

- [00:00:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=39) Server management Studio.

- [00:00:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=53) So if you are remembering Weaver's building, a patient management system and at the previous

- [00:01:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=63) lectures, we had built how an interface to update delete or insert drugs.

- [00:01:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=74) With using a fully autonomous Entity Framework.

- [00:01:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=82) Okay.

- [00:01:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=84) So, let's rename this to lecture 9.

- [00:01:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=97) If you have any questions regarding to our course lectures, please ask them to me Discord

- [00:01:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=106) channel so that I can answer them in the lecture video or in the Disco Channel. You don't have

- [00:01:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=115) to be necessarily taking my course. You don't have to be a student of our University, you

- [00:02:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=122) can ask me as you want.

- [00:02:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=127) You can ask them through our score Channel. Also your feedback could help me to improve

- [00:02:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=133) our lectures videos. Okay. So PMS system in the POS system. What do we have? We have diseases,

- [00:02:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=144) drugs, login try, prescriptions treatments, users and user types. So so far, I think we

- [00:02:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=151) have only coded

- [00:02:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=156) Drugs and login and user and user types. So, let's run our application to verify that.

- [00:02:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=172) Okay, so we have registered for we have user types, we have log in and we have drugs. Okay,

- [00:03:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=187) first we are going to enable drugs C clean for only let's say medical doctors. And I

- [00:03:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=198) want it fully hit it, not only be visible, but not clickable so let's change its

- [00:03:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=208) Statues. How am I going to do that in the app in it?

- [00:03:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=217) I am going to set. Okay, this is not here so maybe here.

- [00:03:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=227) Okay, let's check our methods.

- [00:03:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=237) Okay, here we have top, login, top, register and BTN login. I'm going to write a method

- [00:04:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=247) here as

- [00:04:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=254) Set the Rocks panel.

- [00:04:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=261) And this panel will do this. Let me show you. So, where do we keep our loaded in statues?

- [00:04:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=278) Okay.

- [00:04:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=285) Logging operations Global metals.

- [00:04:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=291) Global methods.

- [00:04:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=294) No, not here.

- [00:04:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=298) In here. No, we have login. Try. No not this one.

- [00:05:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=309) Okay, let's look from our method. So we have log in. Try logging click.

- [00:05:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=318) Okay here. So this is inside login operations and logging operations is here. So I think

- [00:05:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=328) I'm will move these two. Here's

- [00:05:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=335) Global methods and

- [00:05:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=340) We have login. Try. No, no. This is a user generated class.

- [00:05:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=348) Yeah, okay. And

- [00:05:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=355) In the logging operations, we keep logged in user here.

- [00:06:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=362) So what am I going to do? Is I am going to set drugs pain on status with if login

- [00:06:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=376) Operations dots TBL or logged in user is not equal null, okay? Until I can do this with

- [00:06:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=384) a new check like this dots.

- [00:06:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=387) He and I should have used the type. Okay, so in user types, what do we have?

- [00:06:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=404) We have user type ID and user type name, right? So if it is not actually

- [00:06:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=414) Yeah, not equal to.

- [00:07:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=422) Medical doctors. Okay too.

- [00:07:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=426) Because this is already making. If I remember correctly.

- [00:07:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=432) User type is is here. Yes. You see, as you see, it is ID matching. So if it is not equal

- [00:07:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=440) to we will set

- [00:07:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=450) Main dots until we are top drugs. Visibility equal even

- [00:07:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=457) James.

- [00:07:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=461) Him.

- [00:07:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=466) Else.

- [00:07:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=470) We are going to set it as

- [00:07:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=472) wisdom.

- [00:07:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=475) And I also need to call this in two separate cases. Actually, three separate cases. Where

- [00:08:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=484) do I need to set it change? I need to set it change in the, in it up.

- [00:08:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=496) Yes.

- [00:08:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=497) Okay, so this is up in it CSI actually. This is also a custom cluster for. I will put it

- [00:08:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=509) here.

- [00:08:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=510) Okay, this is when we ask Global method starts.

- [00:08:33](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=513) Change set rocks panel.

- [00:08:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=517) Actually let's rename this to a better name like cetera, explain invisibility, yeah, now

- [00:08:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=522) it will ask me to rename wherever it is linked and it's only linked in here so far.

- [00:08:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=531) okay, it's ultimately named it as you seem and you are going to set it in log in operations,

- [00:08:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=538) login, try,

- [00:08:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=539) Actually change, login strategy, s, we can put it here.

- [00:09:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=552) Yeah, now we should work. Let's read try to see whether it is working or not.

- [00:09:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=568) So, we will call that method when the application first run to hide that window. Yes, it is

- [00:09:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=576) hidden. And now we will change it. Also login. So let's try as patient one.

- [00:09:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=585) Okay, patient on email. It's patient one at gmail.com, whatever our swords will be 1 and

- [00:09:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=597) user type. You'll be patients, register it and then, okay, we are not automatically logged

- [00:10:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=603) in, we should automatically login user after registration, okay? So we are going to

- [00:10:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=613) Call our logging operations, login, try logging operations and okay. It is inside custom closet.

- [00:10:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=625) So that said that using lecture 6 custom classes, you see lecture 6 is not changed. I mean,

- [00:10:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=634) the namespace. I could change that easily but I won't touch it right now.

- [00:10:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=639) All week, I can show you just need to control. F namespace lecture 6 or actually lecture

- [00:10:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=647) 6 because we don't have anything else as that name to lecture 8. If I do that with entire

- [00:10:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=655) solution, everything will become lecture 8, simply however, it may break or application,

- [00:11:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=663) I'm not sure. We will see.

- [00:11:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=667) I hope that it's phones page.

- [00:11:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=670) Because I didn't take any backup.

- [00:11:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=676) So it says it is not accessible.

- [00:11:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=681) Intellisense should update it.

- [00:11:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=688) Okay, it says there is no

- [00:11:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=692) yeah, it is might have

- [00:11:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=698) Broken or something.

- [00:11:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=701) You may be actual, this is lecture nine. Why did we change it to lecture 6? Let's change

- [00:11:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=711) it to lecture 9.

- [00:11:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=714) And see what happens.

- [00:11:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=718) Okay, that could be.

- [00:12:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=725) Namespace name in here here.

- [00:12:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=728) Okay, everything looks for it.

- [00:12:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=732) Let's check the properties.

- [00:12:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=735) Okay, this lecture, 9 lecture 9.

- [00:12:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=739) Yeah, everything looks section 9.

- [00:12:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=743) Maybe check the properties. Here's

- [00:12:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=747) Okay, let your night, okay? Default namespace. I have to change that as well.

- [00:12:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=755) And then, let's see what happens.

- [00:12:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=762) Okay, so we have one and Lauren, okay? Other learners

- [00:12:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=772) Okay, so the problem is here you see Microsoft benefits targets and probably there is something

- [00:13:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=783) else.

- [00:13:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=785) C lectures.

- [00:13:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=790) That must be a reference to.

- [00:13:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=794) Move.

- [00:13:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=795) it says that lecture 8 like, oh I see

- [00:13:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=810) It says lion 200. Okay so we can't see lines image. So let's first enable that.

- [00:13:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=821) And it is in the text editor and in here, general of all languages. OK here words, ra

- [00:13:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=830) and line numbers and in the lines.

- [00:13:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=835) Okay, it does not here.

- [00:13:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=839) He just doesn't alternate auto-generated coach.

- [00:14:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=850) Okay, so we have a lecture naming problem and Vash where it is positional lecture 9

- [00:14:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=862) maybe window.

- [00:14:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=863) Everything looks correct.

- [00:14:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=866) Maybe we just need to reboot.

- [00:14:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=875) Can we have a problem solvers?

- [00:14:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=877) Because I've been a fixed targets. It is inside.

- [00:14:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=890) Yeah, this is not related to that.

- [00:14:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=897) Let's open the error.

- [00:15:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=902) Okay, it says this. So it's removed. So let's copy this errors.

- [00:15:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=911) and,

- [00:15:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=913) Correct. Route namespace stuck in the project file, so, it is related to somewhere here.

- [00:15:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=919) Probably.

- [00:15:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=920) Okay. In here, we have CG proche. Let's open it.

- [00:15:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=927) Yeah, here here, I have to change that to this. You see root namespace and then now

- [00:15:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=934) it should focus wrong.

- [00:15:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=939) Okay, so you see renaming the entire space.

- [00:15:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=947) Namespace is a bit problematic. Therefore it's it may cause with some trouble. Okay,

- [00:15:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=955) we were doing registration. And then automatic login, let's continue to death,

- [00:16:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=961) Here we have added lecture, 9 custom classes and now we will call our login operations

- [00:16:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=969) that login, try. You see login, try takes main window.

- [00:16:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=975) man and therefore I need something else here not normally this is reading the value is

- [00:16:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=985) that is coming from the extreme login email text and

- [00:16:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=991) Dan, the password of the text box, okay? So before I do that, I need to set main window

- [00:16:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1001) values as main Dot txt Login, email equal to

- [00:16:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1008) Okay, before I reset them.

- [00:16:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1014) Me and that you Exeter email.

- [00:16:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1018) Text.

- [00:17:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1021) And then I need to set password as well. So the password.

- [00:17:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1028) Here.

- [00:17:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1030) Jermaine that txt.

- [00:17:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1034) Login, password equal to this.

- [00:17:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1041) I can't say it like that but maybe this can work, I'm not sure. Yeah, then I will just

- [00:17:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1050) pass the maid here.

- [00:17:33](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1053) Okay. Now let's retry.

- [00:17:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1057) To register and see if it is automatically logged in or not.

- [00:17:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1065) By the way, this operation will be done. After the playing user user has been successfully

- [00:17:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1071) registered.

- [00:17:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1074) Okay. And here is Patient to Patient to Patient Gmail call, 110 and patients register. Okay.

- [00:18:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1088) You see until I click? OK. The application is not continuing. So this is the application

- [00:18:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1096) blocking event and when I click OK, it will continue. Okay, now we are you have successfully

- [00:18:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1103) logged it.

- [00:18:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1104) But we don't have any other C cream. Therefore, even though we are logged in we don't see

- [00:18:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1112) our trucks pain right now as we are supposed to. Also we didn't clear the text or other

- [00:18:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1121) things of the registers. Let's also clear them as

- [00:18:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1125) T main dots. Password tasty.

- [00:18:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1135) okay, pv1

- [00:18:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1139) Equal to nothing.

- [00:19:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1140) Or maybe there's clears. I don't know. Let's check it out. No, there is no clears. Okay,

- [00:19:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1148) let's change this to and

- [00:19:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1157) 16 last night. Actually, you should also set an identifier to make them

- [00:19:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1168) Displaying as a registration. I what I mean is that me show you

- [00:19:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1180) So in here, I will rename them and I am hoping that it will automatically name everywhere,

- [00:19:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1186) txt first name, or let's say registers first name.

- [00:19:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1194) Okay, it is renamed here but I don't know if the references are renamed as well.

- [00:20:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1201) No, no, it didn't see name. So this didn't work.

- [00:20:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1214) So if I renamed here, Village tell me to rename any way, that would be a more appropriate

- [00:20:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1224) name. So I won't spend time with that right now. You can do that, however, it wouldn't

- [00:20:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1230) take too much signed by the way. Okay, so we are now able to register and when we register,

- [00:20:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1238) As a patient, we don't see the drug stop.

- [00:20:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1244) So, let's register with the doctors Authority.

- [00:20:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1248) Okay, so dr. Vaughn

- [00:20:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1254) Dr. Vaughn doctor on edge. She may not go 1-1 and talk to, you just stir. Okay, registered.

- [00:21:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1267) Okay. All fields are reset.

- [00:21:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1272) And now I can click drug stop. When I click refresh, it brings some drugs and that's at

- [00:21:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1281) the drug.

- [00:21:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1283) Suns 5.

- [00:21:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1285) Nine. So you see when I click somewhere else, it will tell me if there is anyone, but they

- [00:21:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1291) are not saved. Yet the save

- [00:21:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1302) Oh, I see, I shouldn't set truck ID because it is set as an identity if I see it correctly.

- [00:22:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1324) Therefore I need to disable editing of track ID in the window so that user cannot enter

- [00:22:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1333) or change the drug ID, okay? So let's see if it is the case.

- [00:22:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1339) Yes, it is identity. Therefore I have to disable edit of drug ID.

- [00:22:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1347) And how am I going to do that? I am going to do that simply with here. So the header

- [00:22:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1359) of the drug ID will be equal to Simply drug ID.

- [00:22:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1368) Okay.

- [00:22:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1369) and it will, I will set it as

- [00:22:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1377) edits change.

- [00:23:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1380) Okay, let's see. How do we do that?

- [00:23:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1392) sir style, perhaps

- [00:23:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1396) no.

- [00:23:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1397) Can use earlier the resize Clipper, content binding.

- [00:23:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1404) Other styles.

- [00:23:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1406) Okay. That is he's with only and I'm going to set it as true. So it will be only readable

- [00:23:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1415) but not editable. Let's try again.

- [00:23:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1431) Look, I will login as a doctor to let's see.

- [00:24:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1441) Users.

- [00:24:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1442) You have successfully logged in, I can log-in

- [00:24:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1453) parameters, we didn't reset them yet so they are here and drugs. Refresh. Okay, so you

- [00:24:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1461) see, I am not able to click or change or enter anything that I have to write it here, okay?

- [00:24:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1466) It's got us, 0, default value but I think it will be ignored.

- [00:24:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1475) it's

- [00:24:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1478) And then say, okay, now I'm going to save it and when I refresh you see are here as

- [00:24:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1486) expected and it is working great.

- [00:24:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1489) Okay, so now we can

- [00:24:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1495) Okay, after I log out. Let's see if this drug thing of disappeared.

- [00:25:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1501) Yes, it is disappeared but we are still on that window. So we need to change back to

- [00:25:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1508) login window.

- [00:25:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1510) Okay, let's go to our logout button.

- [00:25:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1516) It is here after that. Actually, I will just

- [00:25:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1521) Okay, set it here, man.

- [00:25:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1527) How can we do that? Yeah, I should do it here. Global Metals dots.

- [00:25:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1542) Bandits.

- [00:25:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1543) Okay, login.

- [00:25:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1545) Top login, select it true. And once the log user is logged out, we also need to check

- [00:26:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1566) some other things. I mean

- [00:26:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1574) in our application, currently usual can change values. If the even if they are looked at

- [00:26:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1582) because we are not doing a server-side or background check in are loaded in operations,

- [00:26:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1590) JV chassis last movie to custom classes as well. Okay. So in here, I need to make a check

- [00:26:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1604) I need to check first is user profile, log it in as a doctor.

- [00:26:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1611) so, what I need to do is simply

- [00:26:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1617) this okay, public static.

- [00:27:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1625) Bull is doctors.

- [00:27:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1629) No good in. Okay. What is this going to do it? It will just check this if it is user

- [00:27:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1643) type, not to return false.

- [00:27:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1646) Okay, actually I need to check if it is equal to 2.

- [00:27:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1654) If it is equal to 2 because that can be other user types as well, we just need to allow

- [00:27:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1663) for to. It would return true else it would return false

- [00:27:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1671) And I need to check that.

- [00:27:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1674) If is a doctor look in equal to false, it's from the hidden as it will be true. You see?

- [00:28:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1682) I am doing a method.

- [00:28:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1687) Using approach and never a duplicate code. You also need to follow this practice and

- [00:28:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1697) in are logged in operation. First, I need to check that if a doctor is you logged in

- [00:28:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1702) or not. So in global methods is a doctor locked in if it's equal false return. So I bought

- [00:28:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1711) a lot of none other than dr. User to

- [00:28:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1718) able to weave refresh or

- [00:28:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1726) Save changes. So I will not allow them to a direct page or save the name of data.

- [00:28:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1737) Okay, order delete data. Okay, so for each of these method, I am checking is a doctor

- [00:29:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1748) logoed in, okay?

- [00:29:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1753) So that's really try and see.

- [00:29:33](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1773) You can, let's login.

- [00:29:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1780) Okay, now I can click, I can refresh, I can change anything and I can say the flash on,

- [00:29:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1793) it's not safe. I need to click change the flash. Okay, so milligram okay you see. It

- [00:30:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1800) is showing an error displaying, why? Because we did set this as a small integers if I remember

- [00:30:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1808) correctly.

- [00:30:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1810) And small integer can be maximum 32k, so if I make it like this. Yes. Now working great.

- [00:30:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1819) And then I log out now, that's a green is gone. And if I log in as a different user,

- [00:30:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1826) we who is not a doctor, who is a patient

- [00:30:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1832) I won't have that.

- [00:30:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1834) Drugs, Pana drugs, paid on to see it and I can now go. Okay. Okay. Everything is working

- [00:30:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1847) as we want. However,

- [00:30:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1850) Assume that there are hundreds of thousands of trucks. What can we do in that case?

- [00:30:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1859) Okay, so in your project, I also want you to build your database

- [00:31:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1865) With synthetic data so that you can shop all of your futures first. Let's insert some synthetic

- [00:31:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1879) data into our database to do that.

- [00:31:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1884) Actually, I'm going to find a drug list.

- [00:31:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1889) Medical drug list. Txt some real data day database.

- [00:31:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1901) Okay, there are some

- [00:31:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1904) data. Here's submissions products. May be here. That's it.

- [00:31:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1910) okay, there is a product, no, but

- [00:32:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1922) That is no.

- [00:32:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1932) Marketing name for happiness, marketing students, know that. Let's see some missions. No.

- [00:32:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1945) What part of no.

- [00:32:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1950) Okay. There's another okay. There's farmer downloadable data.

- [00:32:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1958) I could also generate some random names and milligrams.

- [00:32:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1962) But let's have some real data because it is easy to find, I believe some part of more

- [00:32:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1972) logical form of logical names.

- [00:32:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1979) Okay, there is a c SV.

- [00:33:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1991) Data.

- [00:33:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1993) I think I can open this.

- [00:33:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=1997) Most pets plus plus it would be faster.

- [00:33:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2006) So let's extract it

- [00:33:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2022) to here.

- [00:33:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2023) Anxiety is causing too much time.

- [00:33:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2026) Okay.

- [00:33:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2027) Okay, so that is somebody is milligram capsules.

- [00:33:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2032) Okay, for my kid. Okay. So maybe this is the name.

- [00:34:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2041) Yes, so you see they are ending with their milligrams. I think, but no, not all of them.

- [00:34:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2052) Okay, so that is the milligrams are hidden in here. Okay, so I need to parse this data

- [00:34:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2061) and add them to my database. Okay. There is also room for example capsule.

- [00:34:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2072) Stop imitating. Okay, so I think I can extract data from this one easily.

- [00:34:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2080) Yeah. Yeah, this looks nice. So, let's add some data to our database from this file,

- [00:34:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2093) How am I going to do that? If you wanders.

- [00:35:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2100) In my drugs panel, there are some columns automatically generated which I learnt once.

- [00:35:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2116) you see when you're working like this, you can accidentally generate

- [00:35:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2124) Let's add a bottle to here.

- [00:35:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2137) I will call it as Lord.

- [00:35:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2143) Data into a database.

- [00:35:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2151) Can we turn more data?

- [00:35:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2152) Okay.

- [00:35:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2153) It's a lot of data.

- [00:36:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2165) Let's compose The Click event.

- [00:36:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2171) Okay, it is ready.

- [00:36:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2176) Smile, as beta.

- [00:36:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2179) And it will tell me to compose a new method and

- [00:36:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2192) I will do it.

- [00:36:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2195) Here's its internal. Yeah, fine. And that is our data located, let's add this. So it

- [00:36:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2203) is 70 megabytes, right? Display the beak.

- [00:36:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2208) But if I add it to my project, it should be able to login to GitHub repository so it's

- [00:36:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2218) fine. Let's add that

- [00:37:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2220) data into another folder, as

- [00:37:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2225) Static data.

- [00:37:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2226) Here's and I will add an existing item.

- [00:37:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2234) On documents or files.

- [00:37:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2239) Here.

- [00:37:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2241) Okay, I need to copy this data to debug folders, otherwise it wouldn't work. So I'm going to

- [00:37:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2250) set it as copy if new verse

- [00:37:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2255) It's type willed action. Will be

- [00:37:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2260) Let's say that said it says non and let's Round Up station to see if it is copied as

- [00:37:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2266) expected or not.

- [00:37:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2272) That weird action makes whole lot of difference about how that will be treated.

- [00:38:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2281) And to be seen it here.

- [00:38:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2287) Type. No.

- [00:38:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2290) Okay, let's recheck.

- [00:38:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2293) Yes, it is not copy yet. Therefore, I need to change.

- [00:38:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2300) good action to not known, but

- [00:38:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2305) I think content? Yeah, no, let's start again.

- [00:38:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2316) Okay. Now I see, static data here, it's copy it. All right, actually, I didn't check this

- [00:38:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2329) folder was existing or not.

- [00:38:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2332) Oh, we also have some problem in Earth.

- [00:38:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2336) Yeah, I had I need to change this.

- [00:39:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2342) Pete. We made two column with previously. I don't remember.

- [00:39:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2352) 19.

- [00:39:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2353) One moment I need to take a copy of this bottom first done.

- [00:39:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2363) I can control Z.

- [00:39:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2365) And as soon. Yeah, now it is working. So that wasn't an unnecessary, that wasn't unnecessary.

- [00:39:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2378) And then in drug stop, we are going to add our bottle at

- [00:39:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2389) Bother the police.

- [00:39:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2393) Okay. Okay, so we can know Court, what we are going to do is we're going to simply delete

- [00:40:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2406) values in this CSV file. So it will be under static data for each. I need to add using

- [00:40:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2420) System. Iowa.

- [00:40:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2422) Put output operations.

- [00:40:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2426) Here and we would read wild R38 lines. You don't need to read all of them at one star

- [00:40:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2440) far.

- [00:40:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2441) You should Bond and we are lying. Okay, so what is the formats? One, two, three.

- [00:40:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2450) Four five.

- [00:40:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2452) Seven, eight, nine, ten. Okay. The tenth item is the drug name and that's all I need. So

- [00:41:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2468) equal to VR line that split

- [00:41:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2475) and,

- [00:41:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2476) The tenth item and then I am going to get its milligram. How am I going to do that?

- [00:41:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2486) I am going to split it.

- [00:41:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2492) In two parts.

- [00:41:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2495) And I think, I think I just need extract.

- [00:41:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2501) Double values inside it. Yeah.

- [00:41:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2506) so,

- [00:41:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2508) yeah, I think we can do it like this, so,

- [00:41:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2517) Echoes, we are line that's late.

- [00:42:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2523) North Carolina, drug name and Porsche.

- [00:42:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2530) Midnight starts count or length.

- [00:42:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2536) and if

- [00:42:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2545) Contains.

- [00:42:33](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2553) or equal to your let's say equal to

- [00:42:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2556) If it is equal to milligram, then I have the milligram as a previous value. So in here

- [00:42:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2567) I'm going to get generate an instance of TV and Rock.

- [00:42:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2574) Here drug, something like this.

- [00:42:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2579) If you are drug and TV, attractor that those milligram so are those is pet, s, small, integer

- [00:43:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2594) Darfur.

- [00:43:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2595) If it is not an integers, I would have a problem. Therefore I think I will make it like this.

- [00:43:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2606) Equal to convert inch 32. Okay, set this walls.

- [00:43:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2617) And I minus one.

- [00:43:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2630) Expecting short Darfur to in 13 and 16 and then Bridge.

- [00:43:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2638) And the drug name will be.

- [00:44:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2644) Set here.

- [00:44:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2646) Okay.

- [00:44:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2649) Okay, so for firstly insert, I will insert data for each 100 items. So for to be able

- [00:44:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2669) to do that, I will add a counter like this.

- [00:44:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2676) It will start from one and it will get increased by one. And I'm going to also add a using

- [00:44:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2686) PMX

- [00:44:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2687) PMS context, my context equal to me.

- [00:44:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2692) Context. Okay.

- [00:44:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2693) and what we are going to do is

- [00:45:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2707) you are going to edit or contest. But how if my drug

- [00:45:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2716) That those milligram not equal to 0, okay?

- [00:45:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2723) Then my context are TV and drugs thoughts at. So it will say it says, begins tracking,

- [00:45:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2732) the given entity and any others reachable entities that are not already being tracked,

- [00:45:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2739) okay?

- [00:45:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2740) So, I'm just simply at my drug.

- [00:45:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2746) Okay. And pour 100 each item.

- [00:45:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2756) okay, so if our country is equal to or less 8%,

- [00:46:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2765) Like this.

- [00:46:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2767) I will just

- [00:46:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2770) call Save changes. However, this would currently this bolt, three is my application interface

- [00:46:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2782) because we are not using any multi-threading. We are blocking the main threat and therefore

- [00:46:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2789) until this operation is completed, our screen will be frozen.

- [00:46:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2797) And let's see what happens.

- [00:46:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2801) so, let's log in as a doctor,

- [00:46:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2807) Okay, here, and let's start loading. Okay, we have a problem. Yeah, we have forgotten

- [00:47:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2824) to add static data folder name.

- [00:47:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2829) It should be like this.

- [00:47:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2834) Yeah, all my moments. I made mistake.

- [00:47:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2841) Okay. This is like make it like, yeah.

- [00:47:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2859) I think the opposite would work as well.

- [00:47:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2864) Okay.

- [00:47:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2867) okay, so there are some

- [00:47:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2872) Inputs, that doesn't match but it looks correct. Why?

- [00:47:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2879) Okay, it was not able to convert this into an integer.

- [00:48:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2888) so, I think what I'm going to do is

- [00:48:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2892) Simply like this in 36 try parts. So that won't happen. Any errors. Yeah. This is the

- [00:48:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2905) old and this is the split. Okay, so if it remains as 0,

- [00:48:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2915) Okay, why not working?

- [00:48:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2928) A property or index of may not be pastors, enough ref parameter F. So, therefore,

- [00:49:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2945) what I'm going to do is if

- [00:49:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2954) k equal to

- [00:49:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2968) If it is person successfully it done, it will be assigned to those milligram.

- [00:49:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2977) So you see, ours small end is not.

- [00:49:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2983) Precise. Yeah, I think what we need to do is we need to change our database.

- [00:49:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=2990) so, we need to change this from small integer to

- [00:50:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3002) I think they came, yes, they came out but with Precision to

- [00:50:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3008) so,

- [00:50:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3011) Yeah, I think this is going to be a better. We can save them as double as well but taken

- [00:50:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3026) Precision, to should be better.

- [00:50:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3037) You can position to.

- [00:50:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3045) Yeah, I think I will make this as let's make this as 12. I don't think shadow of such really

- [00:50:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3058) grow and maybe we can make it even tongue. Yeah.

- [00:51:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3063) The save it. And after we make say,

- [00:51:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3068) okay, we need to change our references as well, so

- [00:51:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3075) Let's reverse engineered and okay. So it will cause us some

- [00:51:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3085) other tight changes as well. So the we could have

- [00:51:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3094) Okay, not, this is not the correct database. It is from my other leg pictures. Okay. I

- [00:51:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3103) need to add a new database.

- [00:51:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3112) So, that's first moment.

- [00:51:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3117) Get the server name.

- [00:52:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3121) Okay, the it will be PMS, okay.

- [00:52:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3131) Okay, everything is here.

- [00:52:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3138) Okay.

- [00:52:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3140) Okay, this will be refreshed. Yes.

- [00:52:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3146) so, now drug milligram will be a type of

- [00:52:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3151) Let's see, where is this?

- [00:52:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3154) Let's go to the class.

- [00:52:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3169) It's been the type of day, C'Mon, yes. And you see they cover?

- [00:52:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3175) Okay, so we are going to change or try Parts into the cabin.

- [00:53:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3183) In this, make it nasty. Sits try.

- [00:53:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3189) It's a vindictive all tryparse and he sits right. Yes. Now it should work. Let's delete

- [00:53:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3199) the older data.

- [00:53:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3202) and,

- [00:53:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3204) Okay, let's try what happens.

- [00:53:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3216) now, we should be able to hold milligrams correctly supposed to be

- [00:54:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3242) The fish that is nothing less Lord and let's see. Okay. They are getting loaded as you

- [00:54:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3251) can see I'm pretty fast.

- [00:54:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3255) you see, there are also

- [00:54:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3260) Duplicate values as you can see.

- [00:54:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3264) And I think we can prevent that.

- [00:54:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3269) However,

- [00:54:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3270) how could be prevented?

- [00:54:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3282) If I add a unique index, I wonder if that would cause an airbrush.

- [00:54:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3290) Yeah, probably that much.

- [00:54:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3295) I don't know if Entity framework puts handle that or not.

- [00:55:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3304) You see so many duplicate trucks, they are duplicate.

- [00:55:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3309) Okay. It is working but we are adding duplicate values. So we want to prevent duplicate Edition

- [00:55:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3320) and to be able to do that, we can add a unique index. Okay, let's open. An instance of SQL

- [00:55:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3329) Server management.

- [00:55:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3332) If you are not able to add a new index, just open the live instance, I don't know, sometimes

- [00:55:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3338) it is getting packed or something.

- [00:55:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3350) One clustered index.

- [00:55:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3359) Okay, what we're going to do is we are going to add rough name and Drug dose. Okay? So

- [00:56:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3373) let's change the orders. The order is important, why? Because if you the, the more identifying

- [00:56:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3387) column should come fat first, so the milligram is not the most identifying one in here.

- [00:56:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3394) The most identifying thing is the name than the milligram and this will be unique, okay?

- [00:56:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3401) So when I set it unique, it will throw me an error right now because there are duplicate

- [00:56:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3405) values. Just you see let me show you see index faded because there are two picket values

- [00:56:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3413) and to prevent it, I I need to delete existing values.

- [00:57:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3421) Okay, and now it will be successful. However, now when I try to add with the usual method,

- [00:57:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3433) I think I will get errors.

- [00:57:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3437) I'm not sure if Entity framework will handle that or not.

- [00:57:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3444) So, let's see.

- [00:57:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3448) Oh, let's refresh our table, maybe it will.

- [00:57:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3461) Also take into consideration that index. I'm not sure.

- [00:57:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3465) Okay, let's make this comment out.

- [00:57:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3474) And let's go to TBI drugs.

- [00:58:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3482) Okay. There is index and it is unique. Yeah. Maybe it will consider this as well. I'm not

- [00:58:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3494) sure. But see, you see? It has indexed name of drug name. Name of tools milligram.

- [00:58:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3502) If it's handles, this can say it is also it will make our job, much easier, it will just

- [00:58:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3510) sort out duplicate values.

- [00:58:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3515) And less loads. I hope. No other. Okay, you got an address so you see we got either exception.

- [00:58:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3529) I wonder if there is an easier way.

- [00:58:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3535) okay, that's see if there is any

- [00:59:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3547) he is a very

- [00:59:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3550) Okay, there is a door updates.

- [00:59:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3565) and it says, add or update here, maybe that was for

- [00:59:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3572) Let's try that.

- [00:59:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3578) I think it may be requiring another reference, let's see.

- [01:00:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3620) it is requiring this until migrations, then I edit

- [01:00:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3625) Okay. It goes off and framework or we are using this. So,

- [01:01:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3661) It is update entity.

- [01:01:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3662) And there's ass or update.

- [01:01:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3685) Let's see if update works on marks.

- [01:01:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3694) Yeah, there is update. Okay, begins tracking the given unto the. An answer is reachable

- [01:01:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3701) from the given entity using and state modified set by default but see below for kids watching.

- [01:01:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3709) Of course.

- [01:01:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3716) Let's see, I'm not sure if this will work or not, so I will just delete the existing

- [01:02:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3721) drugs.

- [01:02:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3724) And me, try.

- [01:02:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3738) Okay, let's just run.

- [01:02:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3765) Okay.

- [01:02:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3772) Okay, so

- [01:03:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3786) Updated in Fork.

- [01:03:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3795) Yeah, put up all the hours Mass insert will not work if you follow this path.

- [01:03:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3838) What we can do is alternatively for each item.

- [01:04:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3846) Instead of the counter we can save changes at each row.

- [01:04:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3853) so,

- [01:04:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3855) Dutch Schultz.

- [01:04:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3858) Remove our problem. Because after each row, save, it will just check the database.

- [01:04:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3869) I believe. I'm not sure, let's right.

- [01:04:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3874) So if it exists, it will update, if it's not, it will insert, but this will be probably

- [01:04:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3880) slower. I am sure that can be a way to make it faster. Like we can keep the local cage

- [01:04:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3887) of all drugs and then load them later.

- [01:04:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3896) Oh, I see update is not working because it is also checking primary ID.

- [01:05:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3909) Yeah.

- [01:05:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3913) Because their primary ID is different.

- [01:05:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=3923) It didn't work. So what else we need to do.

- [01:09:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4154) It looks like that is no easier way.

- [01:09:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4158) So, we need to check that whether it exists or not.

- [01:09:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4171) Okay. Find users primary K. Therefore, I need to look for so select. Yeah.

- [01:09:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4186) There are dots.

- [01:09:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4196) equal to,

- [01:10:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4200) Okay, if there's nobody saw something.

- [01:10:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4227) Okay. Now, this will become bull.

- [01:10:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4252) Why?

- [01:11:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4263) okay, so if this is empty,

- [01:11:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4277) no, we will add and then

- [01:11:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4286) Okay, with this approach. I think

- [01:11:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4294) it should work on mushroom now.

- [01:11:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4299) Let's try.

- [01:11:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4306) So this should also use the local cage as well.

- [01:11:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4311) However, each time, it will make a database query to if it is not in the local cage.

- [01:11:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4319) I don't know how our form, how much performance it will have.

- [01:12:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4329) well, I guess I ain't trusting

- [01:12:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4346) This is interesting. Why?

- [01:12:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4363) I think we need to use bad. Not select. Yes, I know he isn't.

- [01:12:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4367) Thus and now it will return a drug. And if it is not new here,

- [01:12:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4375) Now, it should work. Fine. We're and select make difference in anticipating working here.

- [01:13:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4384) Why do we still get ever?

- [01:13:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4405) I know.

- [01:13:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4419) Because this is not checking the local cage. Probably.

- [01:13:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4433) I think I also need to check local. And and then if

- [01:13:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4438) Yeah, I'm going to make another check here, so this time, I will check local.

- [01:14:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4446) I'm not sure if this will work or not. Nice. Try

- [01:14:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4454) First, we will check database. Then we will check the local.

- [01:14:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4461) Actually I can handle local myself to yeah. It would be even faster if there's if this

- [01:14:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4469) doesn't work, I will do that.

- [01:14:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4487) It looks like working. Let's see how many drugs we have. Is it so far?

- [01:14:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4493) Okay, you see now we are adding much slower, but each one is unique. As you see we are

- [01:15:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4500) even able to add lavash milligrams like this.

- [01:15:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4506) Okay. We are adding so much Rock Spot. You see our interface is completely Frozen and

- [01:15:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4516) I'm going to show you how we can fix it. You see this is frozen. This is frozen everywhere

- [01:15:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4521) is frozen because currently This Thread is running under the main threat under the main

- [01:15:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4528) window threat. Therefore, it is blocking the entire thread until it is completed. Therefore

- [01:15:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4536) my

- [01:15:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4537) User interface is completely Frozen. Okay, so now I will show you that.

- [01:15:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4548) okay, so we are going to

- [01:15:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4551) We are going to use a task Factory to start as a new task and update our interface. We

- [01:16:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4563) have done that before but it will be good to remember again. Okay. So let's open that

- [01:16:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4575) top.

- [01:16:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4576) And that's either of you already have a label, so we can use that. And okay, here.

- [01:16:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4586) Yeah, I think I can encapsulate within a task like task that factory start new. Okay, it

- [01:16:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4602) will be so

- [01:16:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4607) Task.

- [01:16:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4609) Okay, so here are parentheses begin.

- [01:16:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4613) Here it hands, or we already, we need to move this to here. Okay. So this is south and populating

- [01:17:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4623) the task and

- [01:17:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4626) now, to be able to update our label, we also need to

- [01:17:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4640) Change how this work as weeds.

- [01:17:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4645) Like this.

- [01:17:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4646) Jay here, I need his

- [01:17:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4654) Okay, what do I need?

- [01:17:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4662) We need.

- [01:17:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4665) Okay.

- [01:17:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4667) Dispatchers. Begin invoke. Yeah, I am remember it's and me need a delegate.

- [01:18:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4682) I can't remember the exact

- [01:18:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4684) Chase.

- [01:18:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4691) I can't remember the exact sign text so I'm going to check it.

- [01:18:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4697) QB can inbox at delegate, I'm going to put

- [01:18:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4703) So, what is the Exile have examples?

- [01:18:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4724) Okay.

- [01:18:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4729) Oh, never action. Delegates here.

- [01:19:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4747) So this is the formula. I mean, assigned text.

- [01:19:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4754) You action.

- [01:19:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4758) and inside, here's

- [01:19:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4759) What do we have? We have delegates.

- [01:19:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4774) It was like this.

- [01:19:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4778) Give him the boot.

- [01:19:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4792) So action is self encapsulated like this.

- [01:19:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4798) and then actually, it is telling that this is an action and then

- [01:20:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4807) Tis.

- [01:20:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4808) Like this. Yes. Now I understand. So this is simply same as dispatcher, but here we

- [01:20:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4823) are putting this to exclusively. Tell the compiler that this is an action.

- [01:20:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4832) And it will just put this inside here. Okay, so now this will support multi-threading as

- [01:20:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4838) well to threats as well and in our task Factory, what we are going to do is we are going to

- [01:20:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4850) update the label

- [01:20:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4854) I think we can update the label as its

- [01:20:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4858) 102 changes so far inserted.

- [01:21:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4867) The Rock's count, perhaps.

- [01:21:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4876) I will make it like this soil. We won't get increase of the counter. If you are not adding

- [01:21:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4883) it and this continued with continue this Loop. Yes. Okay. And let's add.

- [01:21:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4894) Okay, now, let's see.

- [01:21:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4902) Let's delete all the existing drugs.

- [01:21:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4904) Although we increase the counter somewhere.

- [01:21:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4909) Or I have to increase it actually use.

- [01:21:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4915) Not Ash, that's stop.

- [01:21:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4919) It must make it like this.

- [01:22:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4942) Okay, that's login with users.

- [01:22:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4957) And let's go to the rocks and fish, there is nothing that's load. You see interface

- [01:22:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4965) didn't freeze and you see how fast we are inserting into database.

- [01:22:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4973) and when we select,

- [01:22:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4977) Called Soft room, TBL rocks. Let's see. Oh, this counter. And this is not matching as

- [01:23:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4986) you can see. So we have an error somewhere.

- [01:23:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4991) Where do we have a North?

- [01:23:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=4997) Simply okay. We have counters.

- [01:23:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5001) We only count.

- [01:23:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5005) Oh, I know. So if this is not null, we also need to continue. I see

- [01:23:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5017) I think I can fix this. So this is too much increasing how to fix is simply

- [01:23:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5025) let's find a bowl here.

- [01:23:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5032) False and evil said it true here.

- [01:23:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5037) and then,

- [01:23:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5038) okay, if

- [01:24:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5041) JBL edit and continue now, it should work batters. Okay, let's restart the application.

- [01:24:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5055) Okay.

- [01:24:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5058) Okay, let's login.

- [01:24:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5068) And let's start loading. Okay, so you see it is now much slower and probably totally

- [01:24:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5091) correct.

- [01:24:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5092) okay, as you can see,

- [01:24:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5096) Yes. Okay you see, there is a one difference because we have started the counter from 1

- [01:25:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5107) instead of 0. And this is how we are adding the database. This can be speed up with tuning

- [01:25:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5117) such as we also keep all drugs in the memory and we do a faster check rather than see cooled

- [01:25:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5125) checking.

- [01:25:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5127) And but it should for ready fast as well right now. Okay, so

- [01:25:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5134) I am going to stop the application now. We have so many drugs, okay. And when we lord,

- [01:25:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5145) we were limiting it to 100 as here. Because if we take 100,000 drugs, into the screen,

- [01:25:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5154) that would make our application unusable. So, when I lost refresh, you see, there are

- [01:26:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5162) so many drugs like this.

- [01:26:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5164) And yeah we can make it like this. We see their ideas, visit their milligram Doses and

- [01:26:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5176) yeah. However let's say I want to see drugs that have overs

- [01:26:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5183) Ten milligram dose. How can I do that? I need to add sorting and filtering. Okay, so how

- [01:26:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5194) am I going to do it? Meanwhile, I am doing it. I will load more data into the database.

- [01:26:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5203) Okay. So how am I going to do that? I will just delete this copy and paste this so I

- [01:26:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5215) can work.

- [01:26:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5218) and,

- [01:26:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5219) You see in your project, I am expecting same from you, you should have a lot of data in

- [01:27:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5224) your database to display your application, okay? Not just fear of data.

- [01:27:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5230) You can generate synthetic data or find a data from internet. Whatever it is fine.

- [01:27:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5239) Okay, let's close this. Okay, currently, of course, it is causing a Sloane's in my computer,

- [01:27:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5249) but it is fine. So we need to add filtering options. Let's start adding them first. We

- [01:27:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5258) should add some sorting such as sort by, let's say, sort by milligram or sort by name we

- [01:27:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5269) can do each of them.

- [01:27:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5272) So, let's edit to sorting options, okay? So we will support both of them.

- [01:27:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5279) To do that. We are going to add combo box and I will do it with, let's say values and

- [01:28:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5290) Naming. I mean I will bind it to a class list. I will show you. So let's make this like this

- [01:28:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5303) and make it's like this, okay.

- [01:28:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5307) So, I will add it into the in it.

- [01:28:33](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5313) And I think we can define a concierge or let's define that claw. Okay, we it's fine to Define

- [01:28:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5323) it here as well public class.

- [01:28:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5328) Sorting options.

- [01:28:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5329) Okay, and what it is going to have. It will have property integer or

- [01:28:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5337) Yeah, let's do it like that.

- [01:29:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5342) Okay, maybe we should make it as. Yeah. I will put a new instead of that illumination

- [01:29:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5350) and which sorting I will name it like that. So it will have sort by drug name. Ask ending.

- [01:29:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5364) Sort by Rock named standing and sort by.

- [01:29:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5375) Okay. Milligram or those rock, those are scanning sort by drag those standing. We can also add

- [01:29:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5390) the salting with ID Swords by ID scanning sort by Rock ID is Channing okay

- [01:29:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5399) Okay, and then it will have another value. So this is, this doesn't have to be inside

- [01:30:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5409) it, but let's keep it inside it. Here, it should work. It is going to have to property.

- [01:30:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5415) First one will be, which sorting is which

- [01:30:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5421) Option.

- [01:30:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5423) Or sort option.

- [01:30:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5427) And then it will have another property.

- [01:30:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5429) Okay, sit in consonance with the property. Yeah, this has to be public as well, so that

- [01:30:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5436) it can be public and then public string.

- [01:30:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5442) Hazard and home name, okay?

- [01:30:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5450) If we can't, can we give a name for this? Let's see. C. Sharp

- [01:30:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5458) I know Molly's custom names. I don't know if it is possible. What?

- [01:31:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5468) Here. Can

- [01:31:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5470) Okay, so we can try this play. Yes, it's a good idea. So here,

- [01:31:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5481) let's see why it is not working. Okay? Be at annotations.

- [01:31:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5487) okay, since we can set a numeration as well, I think you don't even need this class, and

- [01:31:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5497) this play will be poured by

- [01:31:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5500) Okay. Why do we have a problem with this?

- [01:31:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5512) Yeah, I need name equal to, which is sort by am drunk name. Questioning

- [01:32:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5523) Okay, so I'm going to be machine. Yeah, now let's set any relations to other ones.

- [01:32:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5533) Sanding.

- [01:32:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5535) And sort by the rock. Those are standing.

- [01:32:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5540) Okay, good luck. Those is chanting this enumerate. These annotations are extremely useful. You

- [01:32:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5549) can use it for simply anything.

- [01:32:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5552) And Rocco's The Shining and rock ID.

- [01:32:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5557) idea, scanning and

- [01:32:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5563) The Rock.

- [01:32:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5565) I need this channel. This video display name, okay? And we are adding rocks, but they are

- [01:32:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5579) getting Snowbird, what you are unoptimized queries. So we need to optimize our query.

- [01:33:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5589) Okay?

- [01:33:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5590) all right, and

- [01:33:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5593) Okay, so it

- [01:33:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5610) has become too slow of this who are both cage creating and database creating. I believe

- [01:33:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5618) we may be at the end of our drum memory. Yeah, pretty much.

- [01:33:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5624) Okay. Okay. I could do a lot of optimization and provide it to be like this, but that is

- [01:33:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5639) not our topic at the moment. Maybe I can do it at the end of the lecture so I will just

- [01:34:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5645) let it be like this.

- [01:34:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5648) We could have also an error thrown, so it's not working anymore, but I'm not sure.

- [01:34:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5655) Okay, let's continue. So what we are going to do is we are going to have a list of enumeration

- [01:34:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5666) and bind it to our combo box, okay? So how are we going to do that? This is okay, so

- [01:34:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5676) this first combo box will be okay. Actually. We should, I will just sort it with a single

- [01:34:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5683) option so you could also do it with me.

- [01:34:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5686) Options as well, but it is not necessary to show right now. Combo box. Okay, CMB sorting

- [01:34:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5695) Rocks. Okay, so this will have

- [01:35:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5702) okay, something like this in our application in it.

- [01:35:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5710) Means CMB shorting, drugs itemssource will be equal to NIV list.

- [01:35:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5721) I think, okay.

- [01:35:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5727) Okay, so have this.

- [01:35:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5734) Relations. So in here, we will have them like this.

- [01:35:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5745) Or yeah, let me check something.

- [01:36:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5760) Let's see if this is possible.

- [01:36:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5768) Okay, so it is possible like this, okay? And I'm getting values type of which sporting,

- [01:36:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5786) let's see, how will it be displayed?

- [01:36:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5791) Okay dance. Let's close this.

- [01:36:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5797) We have enough number of items, it's fine. So probably an error happens and since it

- [01:36:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5806) was running in the stress mode, we didn't see it.

- [01:36:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5814) Okay, so

- [01:36:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5819) here's,

- [01:37:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5822) Let's refresh and this is, okay, so currently it is displaying the value. However, I need

- [01:37:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5830) to display their display name.

- [01:37:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5834) And how can I set it?

- [01:37:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5837) okay, let's play the name of heirlooms in combobox, see

- [01:37:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5850) Someone has already asked that.

- [01:37:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5854) Volume volume description. Yeah, maybe something like this.

- [01:37:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5866) let's see, what will this generate but

- [01:37:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5875) this will be volume members.

- [01:38:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5882) It is no money of members.

- [01:38:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5910) Okay.

- [01:38:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5917) Time converters.

- [01:38:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5931) Dan.

- [01:38:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5938) Let's ask it in another way.

- [01:39:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5966) Wow, I see.

- [01:39:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5978) This looks like that.

- [01:39:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=5994) Correct way. But let's see. So this data, source and item source

- [01:40:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6028) What does no display member why? Okay there is this flame Amber path.

- [01:40:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6036) What happens if I make it as a name?

- [01:40:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6041) Because it is the name.

- [01:40:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6047) My hobby is rocks while I'm not sure if we will see.

- [01:41:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6067) Or nothing.

- [01:41:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6074) Someone has already asked.

- [01:41:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6090) Yeah, maybe I need to set the description and implementation. I see.

- [01:41:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6102) A lot of extra cords.

- [01:42:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6123) So, that is yet.

- [01:42:23](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6143) It's returns to Warrior the set.

- [01:42:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6151) Okay, on property. Change it?

- [01:43:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6182) I'm done.

- [01:43:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6201) Okay, this is what we have and done.

- [01:43:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6227) There is. I class homework.

- [01:44:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6252) Example.

- [01:44:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6257) Okay.

- [01:44:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6262) So there is an animal helper class.

- [01:44:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6271) and,

- [01:44:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6274) Oh, it is also converters.

- [01:44:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6292) kind of,

- [01:45:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6317) Is it looks better, I think.

- [01:45:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6344) It is the model and select tutorial search. Type item shows energy source types. Yeah,

- [01:45:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6358) this one.

- [01:46:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6360) Okay, let's try this implementing.

- [01:46:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6365) So, here's

- [01:46:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6368) Static innumerable, get penalty.

- [01:46:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6372) So, get movies objects.

- [01:46:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6376) I need to use this.

- [01:46:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6382) Maybe like this.

- [01:46:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6385) And it is supposed to take this.

- [01:46:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6397) Type of tea.

- [01:46:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6412) Get a room searched. I see why it is not working.

- [01:47:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6427) Maybe to least perhaps.

- [01:47:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6444) No.

- [01:47:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6448) Yeah, looks like in the converters.

- [01:48:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6480) Or we can have a temporary class to hold data of. Hello.

- [01:48:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6515) such as

- [01:48:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6517) I think that would be a simple solution.

- [01:48:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6525) But that defeats the purpose of using any Malaysian. Okay, let's see why there is no

- [01:48:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6535) cast effects time. I don't understand why there is no easy.

- [01:49:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6551) So much so much quotes.

- [01:49:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6574) Yeah, I think.

- [01:49:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6579) Instead of this.

- [01:49:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6596) I'm looking if there's an easier solution, but that doesn't seem to be.

- [01:50:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6605) Can we Define a conversion of this?

- [01:50:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6638) No, there's no conversation something like that.

- [01:51:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6672) Yeah, let's make it a different way. So let's add a public class. I will go with the easy

- [01:51:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6691) solution and sorting options. I will name it as

- [01:51:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6701) Here's it will have something option. By the way, it will have an enumeration.

- [01:51:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6707) Like this, which sort?

- [01:51:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6713) We can name it fast then it will have a public stink as Pop sting description.

- [01:52:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6731) I will make it automated. Let me show you. So here we are going to have a list of reporting

- [01:52:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6745) option.

- [01:52:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6748) Options privates void in, its sorting options and inside here.

- [01:52:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6756) We are going to get any medication, okay?

- [01:52:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6766) Okay, how do they animated?

- [01:52:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6776) Like this? Yeah.

- [01:53:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6782) So you also need please.

- [01:53:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6792) Anna Maria.

- [01:53:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6796) Okay, for this. We need reflection.

- [01:53:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6808) Component model.

- [01:53:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6815) Yeah, so here we will use description instead of name.

- [01:53:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6821) Just to not that easy, but easier to understand.

- [01:53:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6827) And here you are going to have a for each first.

- [01:53:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6835) is newbie from static or

- [01:54:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6840) five, static doesn't matter.

- [01:54:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6849) we will initialize it, it

- [01:54:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6862) Nice this. Then we will this

- [01:54:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6866) Okay, type of car soft.

- [01:54:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6875) And here's what you're going to do is we will add new elements to our list. Need sorting

- [01:54:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6885) option, item.

- [01:54:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6886) Okay, here's field. Have descriptions of the description will be string value.

- [01:54:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6894) both short and

- [01:54:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6896) Which source will be equal to.

- [01:55:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6903) I think just sort it should look like this.

- [01:55:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6909) okay, and we need to call this on our

- [01:55:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6913) In it. Application, here is

- [01:55:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6918) We will set items or sequel to our list.

- [01:55:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6928) here's,

- [01:55:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6930) And the display member path will be equal to as our description, okay? Like this.

- [01:55:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6940) I think other Solutions were harder to understand. So we just added a one helper method like

- [01:55:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6948) this. And

- [01:55:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6955) Metal like this to initialize our list automatically from Malaysian, okay?

- [01:56:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6969) Oh, it's still not working. Why

- [01:56:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6977) We just set the display remember PAD as a description.

- [01:56:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6981) Maybe I'm not working. That's rest. Hard to see.

- [01:56:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=6994) Yeah. Yeah, our methods has a problem.

- [01:56:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7008) So here we have a problem. It is looking for description attribute. We already have description.

- [01:56:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7015) So what is not working?

- [01:56:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7018) Oh, I see not this flavor, test conniption.

- [01:57:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7026) So it has to be like this.

- [01:57:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7030) Yeah, let's make it like that.

- [01:57:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7037) Okay.

- [01:57:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7042) Description equal or you're not working on t.

- [01:57:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7047) Okay, let's see. Yes. Now, working. So we will replace this

- [01:57:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7061) This.

- [01:57:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7063) We're not going to think.

- [01:57:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7074) Interesting watching.

- [01:57:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7078) Let's money on the fix it.

- [01:58:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7085) What I start?

- [01:58:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7087) I would except expect that I would, it would be easy to just bind it to description, but

- [01:58:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7096) it appears that there is no easier way.

- [01:58:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7100) So, we had to have some extra recording.

- [01:58:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7105) And now working. Okay, so now it's time to coat our sorting things.

- [01:58:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7114) Are we going to do it? We are going to do it in a logging operations and in here. So

- [01:58:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7124) you see we are going to have, we are going to call this method. But this time we will

- [01:58:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7136) take into our

- [01:58:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7139) Sorting. Okay, so we are going to have a switch and this switch will take Global dots.

- [01:59:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7157) Global method. Maine.

- [01:59:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7161) Combo box users sorting drugs. Okay, maybe it will also generate

- [01:59:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7172) That's just nice. Try to generate it with switch autocomplete, no pork. Okay, so which

- [01:59:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7185) cases we have here?

- [01:59:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7188) Actually, I need to use.

- [01:59:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7193) Selected item. And

- [01:59:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7197) Now, it should work automatically. Yeah.

- [02:00:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7203) Let's try selecteditem darts.

- [02:00:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7208) no selected item, and I have to convert it to

- [02:00:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7218) 14.

- [02:00:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7220) That was our animation name.

- [02:00:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7229) That's named as I can't change them.

- [02:00:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7232) Okay, let's make you bitch. You can see

- [02:00:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7241) Here like this.

- [02:00:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7250) Okay, to be able to use it, I am going to add using static lecture app in it, so here's

- [02:00:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7259) now that I can use it and now it should automatically generate I think switch.

- [02:01:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7267) Okay, they are automatically filled as you see. And now

- [02:01:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7274) Base it on the selected option, I will use it. So this is a default option, a scanning

- [02:01:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7284) orders, you see. Now, let's sort this Channing. Okay. This channeling here and let's sort

- [02:01:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7294) by name. So it will simply take name, ask anding? And then we are going to

- [02:01:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7306) Sort by descending.

- [02:01:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7307) And then, let's sort by those.

- [02:01:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7317) You see, it is being harder. When you use Entity framework, I could make this much easier

- [02:02:03](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7323) with traditional.

- [02:02:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7329) Database functions methods, but it also has downsides. Dissolves has downsides. So you

- [02:02:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7337) have to decide. Okay. So we also need something else for this work. What do we need?

- [02:02:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7346) When combo box is changed, we need to call our refresh method so it will be automatically

- [02:02:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7355) getting refresh it. So let's go to here. And here we are going to add an event here. So

- [02:02:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7364) let's say selection changes.

- [02:02:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7366) Where is it?

- [02:02:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7369) Here I double-click the event is simply generated and it will just simply call this method.

- [02:03:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7380) You see how it is good to write methods, instead of copy pasting code, it just reduces your

- [02:03:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7389) Cold, reduces the Need You. Denis love riding More chords.

- [02:03:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7397) Okay, let's login.

- [02:03:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7404) Let's refresh. Do we have a problem or? Okay. So we also need something. If there is nothing

- [02:03:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7417) selected it would cause error. Therefore, we are going to edit application with a selected

- [02:03:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7424) option. So 0 1, 2 3 4, the 4 is our default. Therefore we are going to set selected index

- [02:03:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7436) equal to 4, okay?

- [02:03:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7438) This will be this part selected index, it is, it will be same as the previous working.

- [02:04:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7451) Say it will be by default sort by idea, scanning, okay.

- [02:04:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7462) You see sort my eyes scanning refresh.

- [02:04:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7465) Okay, we have selected unable to cast object type sorting option.

- [02:04:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7472) Why why?

- [02:04:33](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7473) Yeah, there's which sort of oh I see I need to get this.

- [02:04:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7485) However, I am not able to get interesting selected item.

- [02:04:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7496) So, this is object.

- [02:05:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7502) oh, I know, the reason I know the reason first, I need to type this into

- [02:05:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7513) All are.

- [02:05:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7516) Glass here's which is sorting option.

- [02:05:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7521) and then I need to get

- [02:05:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7524) Okay, I need to add another parentheses here.

- [02:05:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7532) And then I need to get which source. Okay, now it will work so we will cast it first.

- [02:05:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7540) The type of the class that this list is holding which lists the lists be bound as an item

- [02:05:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7548) Source or combo box, okay? Because that list contains type of objects type of sorting option,

- [02:05:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7557) object objects.

- [02:05:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7558) Okay, let's login.

- [02:05:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7559) And refresh. Okay, they are working and sorted by I ID. Let's change sorting to drag name,

- [02:06:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7573) okay? You see Rock named is standing order and it is starting from the letter Z, let's

- [02:06:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7580) sort by those. Okay? You see there are up to eight thousand forty, four hundred milligrams

- [02:06:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7590) those and it is milk thistle.

- [02:06:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7594) Iraq. I think this is supplementarity think if I remember correctly and there is cover.

- [02:06:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7600) Ginger garlic. Yeah. Garlic is also the garlic Villeneuve.

- [02:06:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7605) Okay, so maybe you can oh this also sore spot, this is locally sorting. This is not sorting

- [02:06:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7614) the entire database. This is sorting within the results, for example, if I make it a scanning

- [02:07:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7621) I think here's you see it is going as low as zero point zero 2 milligram. It is a tinted

- [02:07:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7635) asteroid. So this is probably a really dangerous drug and let's see it. What is

- [02:07:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7648) it is

- [02:07:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7649) Okay, yeah, it's done. Hormone-related luck anyway. And so, yes, it is working great as

- [02:07:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7656) expected. We can sort them automatically within their displayed results. I will also show

- [02:07:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7664) searching filtering in the next week. So I think this is enough for this week. Let's

- [02:07:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7670) take our notes. Okay, let's open.

- [02:07:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7677) Okay, here's here.

- [02:08:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7681) Did you take a nap next weekend? Okay, yeah we did that. Nice, that's open lecture 9.

- [02:08:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7692) Context. Okay, so in lecture 9, what have we done?

- [02:08:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7701) Okay. How to hide and display tab. According

- [02:08:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7709) So, the authority of the log of a users.

- [02:08:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7727) Okay, how to?

- [02:08:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7729) Okay, lat an idiot CSV data set into the database feet and step very work.

- [02:09:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7741) Okay, how to utilize task Factory to prevent okay? Usually in terms of pace, please

- [02:09:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7767) How to?

- [02:09:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7768) Update label won't stop. That's

- [02:09:33](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7773) some tasks with.

- [02:09:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7775) Begin in Vogue or dispatcher? Yes.

- [02:09:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7781) Dispatches.

- [02:09:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7782) Okay, what us we have displayed oh how to add unique, this constraint to a database

- [02:09:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7798) table, which defining a unique index, okay?

- [02:10:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7806) and,

- [02:10:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7808) I'm sure unique adding to the database when using non-stick framework.

- [02:10:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7817) Okay, how to achieve the end? Let's say.

- [02:10:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7826) Let's say how to achieve.

- [02:10:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7829) How to add sorting features to yours.

- [02:10:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7836) These are good eats this Lehman's on using Entity framework for automatic. Display insert

- [02:10:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7848) update. Delete for example. We are doing sorting, but we can still change values. I'm going

- [02:11:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7860) to make this let's say 0 0 1 milligram. Okay.

- [02:11:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7868) So it's going to be at the top. So this is 15, 15 6 as an ID and use it as one modified.

- [02:11:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7876) Let's say. Okay, save it. Let's refresh. And you see novelties.

- [02:11:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7882) We'll finish it in the database so it is working.

- [02:11:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7885) I can also delete the ones that I want. For example, delete delete. Say, delete it and

- [02:11:33](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7893) refresh. Okay? After sorting feature,

- [02:11:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7900) How to bind all elements of an animation?

- [02:11:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7912) To a combo box box display description of any Malaysian of enemies and items in the

- [02:12:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7927) combo box.

- [02:12:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7930) Which Asians?

- [02:12:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7934) Description of any items in the combo box, okay?

- [02:12:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7949) how to get selected and liberation of

- [02:12:38](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7958) first ones combobox. Okay.

- [02:12:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7963) Okay, so we had to write this method to get the value or description of the illumination.

- [02:12:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7974) We also had to write this to add all the values of Animation dynamically. So, whatever I add

- [02:13:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7981) here, I don't need to change any other code. It will be fully automatic. Of course, I would

- [02:13:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7985) need to change the Sorting options and to be used is no, we don't use this but

- [02:13:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7992) let's remove this because it may come get you confused.

- [02:13:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=7998) Okay, let's test it again. Okay. I will also get a new backup of the database so you can

- [02:13:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8009) use it.

- [02:13:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8012) What else did we do?

- [02:13:42](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8022) Looking operations.

- [02:13:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8027) Okay, let's login.

- [02:13:54](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8034) So in searching, the database was really slow, right? So I am going to

- [02:14:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8046) Make an optimization, okay.

- [02:14:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8053) What kind of optimization I am going to make you wonder that show you. Of course, this

- [02:14:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8059) would require some extra RAM memory but it should work because our bodies are not that

- [02:14:27](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8067) much big, not that big. So let me show you the

- [02:14:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8075) Optimization first, I will loads.

- [02:14:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8080) Okay to cage. How am I going to do that?

- [02:14:49](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8089) So this will load everything into the cage.

- [02:14:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8097) I think. Yeah. Then first, I will check the cage.

- [02:15:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8104) Then I will check the database.

- [02:15:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8111) Actually, I don't need even to check database. Okay. So

- [02:15:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8116) let's remove this because we are doing a full local caging. Let's see.

- [02:15:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8131) So it should load everything into database right here. Let's see how much time it will

- [02:15:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8139) increase. I mean, they should wrote everything in the database to the ram here. Then we don't

- [02:15:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8144) even need to check the database anymore because they will be in the local or not.

- [02:15:50](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8150) So, it will be pretty fast. Of course, it would require more RAM memory. If you had

- [02:15:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8156) millions of items, you can do that.

- [02:16:00](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8160) Okay, let's see. We are at the

- [02:16:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8165) okay, 700 megabytes.

- [02:16:08](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8168) And okay, we can see, we have got 120 megabytes, okay? It didn't even increase anything, I

- [02:16:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8176) don't know if it's pork.

- [02:16:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8180) Okay, let's see. Let's go to this Parts jump.

- [02:16:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8188) And oh, it was zero. So let's go here for example.

- [02:16:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8196) Okay, so there is 200 milligram. It is probably exists in the database already.

- [02:16:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8203) Okay. It was null because it did get it from the local cage. So let's see. The speed of

- [02:16:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8212) our algorithm.

- [02:16:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8217) Okay. It is still very slow. Oh, I know the reason because it is now, first parsing, the

- [02:17:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8227) first three chords above 3000, then it will start adding them.

- [02:17:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8234) Turn it is passing, so we can actually display two indexes stood at. Okay. So let's add this

- [02:17:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8248) counters.

- [02:17:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8249) You name it and then adds process account.

- [02:17:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8260) Okay, so for process it, it will get increases each time and process like this.

- [02:17:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8271) And let's display it here as well. Okay.

- [02:18:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8281) Rocks.

- [02:18:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8285) Okay. Yeah this. So we need to change it to here.

- [02:18:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8304) But if it is not added video continue of, I see so I also need to change this.

- [02:18:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8310) Let's change this as well.

- [02:18:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8317) yes, that's you know this

- [02:18:47](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8327) Let's see how fast we will versus records.

- [02:18:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8338) Okay.

- [02:18:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8339) Let's login.

- [02:19:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8342) Let's see.

- [02:19:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8345) Okay, so we are processing with this speech.

- [02:19:17](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8357) This file has so many.

- [02:19:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8365) Okay, so

- [02:19:29](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8369) this should have happened.

- [02:19:35](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8375) Because when we edit it should get into local.

- [02:19:56](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8396) okay, how many the three interesting

- [02:20:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8415) So probably this is get not getting into local cage.

- [02:20:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8419) So I also need to add this to local church perhaps let's see if this is if it in work.

- [02:20:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8440) Can we add to local?

- [02:21:02](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8462) Okay, and send to the 0 as well.

- [02:21:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8466) Let's see what happens. I'm not sure if this will work but it should work.

- [02:21:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8472) because first we are loading everything into the memory, then we are adding them to Local

- [02:21:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8491) and

- [02:21:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8492) Meanwhile, I will look something else too.

- [02:21:34](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8494) It's open Chrome.

- [02:21:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8497) Okay, and titov.

- [02:21:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8513) Versus.

- [02:22:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8527) Okay, so

- [02:22:20](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8540) yeah, it is not working.

- [02:22:30](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8550) I wonder why?

- [02:22:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8565) Get, there are 3498 numbers test, something. Let's put a breakpoint here.

- [02:23:16](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8596) Okay.

- [02:23:21](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8601) I think I believe this to Seoul next week. So meanwhile you can work on that until next

- [02:23:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8608) week and maybe you can figure out figure it out before me, so it will be also a nice working

- [02:23:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8617) for you. So,

- [02:23:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8619) We have in the local.

- [02:23:41](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8621) okay, 3498

- [02:23:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8623) which is a the seed, local.

- [02:23:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8633) Oh, I think I may know the reason.

- [02:23:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8638) So in here, so this is its name.

- [02:24:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8647) Maybe there is case sensitivity problem.

- [02:24:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8655) Just doesn't exist yet, okay?

- [02:24:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8666) Let's continue.

- [02:24:28](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8668) But it throws an error. Why?

- [02:24:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8677) There is no such record like this.

- [02:24:51](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8691) It says that there is a duplicate key.

- [02:24:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8697) Yeah, this is related to database itself. So,

- [02:25:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8705) But we'll do a like, really to see.

- [02:25:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8725) Okay, I see it already exists like this. So there is this difference coming from

- [02:25:36](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8736) So when I look for it like this, let's see if it will come.

- [02:25:44](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8744) I copy pasted it.

- [02:25:48](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8748) It doesn't come. Do you think why why do you think

- [02:25:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8752) But when I search like this, I see it is here.

- [02:25:58](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8758) As you see?

- [02:26:06](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8766) Because this drug names are encapsulated with.

- [02:26:15](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8775) Yeah, I know the reason because we didn't remove this.

- [02:26:19](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8779) So, I need to search them like this.

- [02:26:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8782) But I thought you'd like this.

- [02:26:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8786) Yeah, it's just here.

- [02:26:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8792) And let's see the futures of this one.

- [02:26:39](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8799) Okay, let's restart.

- [02:26:45](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8805) What may be causing his ever?

- [02:27:01](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8821) In this sea.

- [02:27:13](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8833) Zero points, 125.

- [02:27:25](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8845) Do we have that?

- [02:27:33](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8853) Yes, we have it.

- [02:27:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8860) But this one has different.

- [02:27:46](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8866) So, the rock name and those.

- [02:27:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8875) Okay, and then we go here. We only have one drug edits.

- [02:28:09](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8889) Yeah.

- [02:28:10](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8890) Let me stay with you just not working.

- [02:28:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8898) Why is that happening?

- [02:28:22](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8902) We see the

- [02:28:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8904) secret. It takes truck name and dose milligram.

- [02:28:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8917) So something is not right here.

- [02:28:43](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8923) Oh, I know the reason. Okay, I have figured out figured out, the reason I will leave it

- [02:28:52](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8932) to you and I want you to find it, okay?

- [02:28:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8937) Okay.

- [02:28:59](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8939) So, let's take some notes next week show. Why?

- [02:29:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8947) Is producing and 100 errors.

- [02:29:14](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8954) And it's searching future, okay? Okay, I want you to find out. Reason I have found it, so

- [02:29:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8966) I will take a backup of the database and added to our source code as well.

- [02:29:31](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8971) So, I will be able to use it exactly as me.

- [02:29:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8977) okay, let's go to our temporary folder and

- [02:29:40](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8980) That's this one. Okay, DB folder. Here's the Cebu. KMS.

- [02:29:53](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8993) Okay.

- [02:29:55](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8995) Back up.

- [02:29:57](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=8997) Let's copy and paste this into our source code.

- [02:30:05](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=9005) Lecture 9.

- [02:30:07](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=9007) Here's okay. Let's push the

- [02:30:12](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=9012) Repository.

- [02:30:24](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=9024) Okay.

- [02:30:37](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=9037) Okay, says it is larger but it is accepted. I think.

- [02:31:04](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=9064) Let's check our repository to verify.

- [02:31:11](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=9071) Okay, let's open our repository is

- [02:31:18](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=9078) Yeah, it's updated lectures here. Lecture 9

- [02:31:26](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=9086) Inside are static data. Yes. Okay. Everything is working. And thank you very much for watching.

- [02:31:32](https://www.youtube.com/watch?v=Tb-w0b7Lf0A&t=9092) Hope we'll see you next week and of lecture 9.
