# C# Programming (Intermediate) - Lecture 4: How to Prevent SQL Injection with Parameterized Queries

## Full tutorial link > https://www.youtube.com/watch?v=4nax86sau6k

[![C# Programming (Intermediate) - Lecture 4: How to Prevent SQL Injection with Parameterized Queries](https://i.ytimg.com/vi_webp/4nax86sau6k/maxresdefault.webp)](https://www.youtube.com/watch?v=4nax86sau6k "C# Programming (Intermediate) - Lecture 4: How to Prevent SQL Injection with Parameterized Queries")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/C-Programming-Intermediate-Lecture-4-How-to-Prevent-SQL-Injection-with-Parameterized-Queries.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/C-Programming-Intermediate-Lecture-4-How-to-Prevent-SQL-Injection-with-Parameterized-Queries.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


C# Programming (Advanced/Intermediate) Lectures (4/14) will teach you #CSharp #programming from beginner to intermediate/expert level. This course is an excellent source to learn advanced concepts in C# #coding. If you are a beginner to C#, watch our previous course lectures. The playlist link of the previous course is below.

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

The topics that have been covered in Lecture 4:

* How to use Task Factory to start new Tasks for multi-threaded programming and responsive user interface (UI) design

* How to access elements of different threads such as accessing textbox from sub-thread started as a task by using Dispatcher BeginInvoke

* How to properly convert code blocks into methods to prevent duplicate and copy-paste code programming

* When does fields, properties, classes of static classes are initialized

* How to call a constructor of a static class and when it is initialized

* What is SQL injection and how to prevent it with parameterized queries

* How to write parameterized queries in C# for MS-SQL server

* How to properly construct a database class to handle all database operations with both raw queries and parameterized queries

* When to and how to use using statement code blocks

Introduction

Multi-threaded programming has become an essential part of modern software development, especially when it comes to responsive user interface (UI) design. One of the most popular tools for multi-threaded programming in C# is Task Factory. With Task Factory, developers can easily create new tasks and run them concurrently, allowing for improved performance and a more responsive UI. However, using Task Factory can be tricky, especially when it comes to accessing elements of different threads, preventing code duplication, initializing static classes, and preventing SQL injection.

In this article, we will explore the ins and outs of using Task Factory for multi-threaded programming and responsive UI design. We will also discuss how to access elements of different threads using Dispatcher BeginInvoke, convert code blocks into methods to prevent duplication and copy-paste programming, initialize static classes, prevent SQL injection using parameterized queries, write parameterized queries in C# for MS-SQL server, construct a database class to handle all database operations with both raw queries and parameterized queries, and use using statement code blocks properly.

How to use Task Factory to start new Tasks for multi-threaded programming and responsive UI design

Task Factory is a powerful tool for multi-threaded programming and responsive UI design. With Task Factory, developers can create new tasks and run them concurrently, improving performance and ensuring a responsive UI. The following steps outline how to use Task Factory to start new tasks for multi-threaded programming and responsive UI design:

Step 1: Create a new Task Factory object.

Step 2: Create a new task using the Task Factory object and pass in a delegate that represents the code to be executed by the new task.

Step 3: Optionally, pass in a CancellationToken to cancel the task if needed.

Step 4: Optionally, configure the task with a TaskCreationOptions object to specify additional options for the task, such as setting the task to run on a specific thread or specifying a long-running task.

Step 5: Start the task using the Start() method of the Task object.

Step 6: Wait for the task to complete using the Wait() method of the Task object, or use the ContinueWith() method to specify a callback that will be called when the task completes.

How to access elements of different threads using Dispatcher BeginInvoke

When working with multi-threaded programming, it's common to need to access elements of different threads, such as accessing a textbox from a sub-thread started as a task. To do this, developers can use Dispatcher BeginInvoke.



### Video Transcription


- [00:00:01](https://www.youtube.com/watch?v=4nax86sau6k&t=1) Hello dear students.

- [00:00:02](https://www.youtube.com/watch?v=4nax86sau6k&t=2) Welcome to the lecture 4 of Advanced Programming with C-Sharp course.

- [00:00:07](https://www.youtube.com/watch?v=4nax86sau6k&t=7) So today, we will continue from where we have left.

- [00:00:10](https://www.youtube.com/watch?v=4nax86sau6k&t=10) I will start with copy and pasting our previous lecture and we will continue from that source

- [00:00:19](https://www.youtube.com/watch?v=4nax86sau6k&t=19) code.

- [00:00:20](https://www.youtube.com/watch?v=4nax86sau6k&t=20) So here you know all of them already exist in our GitHub repository.

- [00:00:31](https://www.youtube.com/watch?v=4nax86sau6k&t=31) So today we are going to see how to prevent SQL injection attacks.

- [00:00:48](https://www.youtube.com/watch?v=4nax86sau6k&t=48) I had taken some other notes as well.

- [00:01:13](https://www.youtube.com/watch?v=4nax86sau6k&t=73) And how to prevent UI freezing when adding new records.

- [00:01:19](https://www.youtube.com/watch?v=4nax86sau6k&t=79) So let's start with renaming our lectures.

- [00:01:31](https://www.youtube.com/watch?v=4nax86sau6k&t=91) This is not a complete rename, but it will at least change some of the names.

- [00:01:48](https://www.youtube.com/watch?v=4nax86sau6k&t=108) The namespace is still lecture 3.

- [00:01:53](https://www.youtube.com/watch?v=4nax86sau6k&t=113) I wonder if we can change the namespace.

- [00:01:57](https://www.youtube.com/watch?v=4nax86sau6k&t=117) Let's look for it.

- [00:02:03](https://www.youtube.com/watch?v=4nax86sau6k&t=123) Here project properties.

- [00:02:10](https://www.youtube.com/watch?v=4nax86sau6k&t=130) Here debug properties perhaps.

- [00:02:20](https://www.youtube.com/watch?v=4nax86sau6k&t=140) Can we change this?

- [00:02:24](https://www.youtube.com/watch?v=4nax86sau6k&t=144) Probably no.

- [00:02:25](https://www.youtube.com/watch?v=4nax86sau6k&t=145) Anyway it is not that much important.

- [00:02:32](https://www.youtube.com/watch?v=4nax86sau6k&t=152) Let's run our application and remember what we have seen previous week.

- [00:02:45](https://www.youtube.com/watch?v=4nax86sau6k&t=165) If you remember that when we were adding records to our database as a batch.

- [00:02:51](https://www.youtube.com/watch?v=4nax86sau6k&t=171) It was freezing our UI.

- [00:02:56](https://www.youtube.com/watch?v=4nax86sau6k&t=176) For example: when I click, you see UI is frozen.

- [00:03:00](https://www.youtube.com/watch?v=4nax86sau6k&t=180) Therefore, I am not able to see or do anything until the operation is completed.

- [00:03:11](https://www.youtube.com/watch?v=4nax86sau6k&t=191) And how can I fix that?

- [00:03:14](https://www.youtube.com/watch?v=4nax86sau6k&t=194) Fixing it is rather easy with tasking.

- [00:03:21](https://www.youtube.com/watch?v=4nax86sau6k&t=201) We will use tasks to start subtasks and prevent running in the main thread.

- [00:03:32](https://www.youtube.com/watch?v=4nax86sau6k&t=212) Currently all of our code is running under main window class under the main window UI

- [00:03:43](https://www.youtube.com/watch?v=4nax86sau6k&t=223) thread.

- [00:03:44](https://www.youtube.com/watch?v=4nax86sau6k&t=224) Therefore it is blocking our screen when running.

- [00:03:53](https://www.youtube.com/watch?v=4nax86sau6k&t=233) How can we know that?

- [00:03:55](https://www.youtube.com/watch?v=4nax86sau6k&t=235) Let me show you.

- [00:03:58](https://www.youtube.com/watch?v=4nax86sau6k&t=238) Here I will show print thread name.

- [00:04:07](https://www.youtube.com/watch?v=4nax86sau6k&t=247) Get torrent.ip this is deprecated.

- [00:04:18](https://www.youtube.com/watch?v=4nax86sau6k&t=258) Perhaps this one.

- [00:04:24](https://www.youtube.com/watch?v=4nax86sau6k&t=264) Equal to this.

- [00:04:48](https://www.youtube.com/watch?v=4nax86sau6k&t=288) It says that use managed thread id.

- [00:04:56](https://www.youtube.com/watch?v=4nax86sau6k&t=296) This is the proper way of getting thread id.

- [00:05:05](https://www.youtube.com/watch?v=4nax86sau6k&t=305) To be able to use it I have to add system threading.

- [00:05:09](https://www.youtube.com/watch?v=4nax86sau6k&t=309) Now we can get the thread id.

- [00:05:14](https://www.youtube.com/watch?v=4nax86sau6k&t=314) I

- [00:05:24](https://www.youtube.com/watch?v=4nax86sau6k&t=324) think I will write another method to lock threads.

- [00:05:31](https://www.youtube.com/watch?v=4nax86sau6k&t=331) Let's add a static class to do our extra things.

- [00:05:40](https://www.youtube.com/watch?v=4nax86sau6k&t=340) Global functions.

- [00:05:48](https://www.youtube.com/watch?v=4nax86sau6k&t=348) Here public static void lockThread() and can we get the calling method name?

- [00:06:12](https://www.youtube.com/watch?v=4nax86sau6k&t=372) Let's test this.

- [00:06:50](https://www.youtube.com/watch?v=4nax86sau6k&t=410) Using some runtime compiler services.

- [00:06:57](https://www.youtube.com/watch?v=4nax86sau6k&t=417) What else we need?

- [00:06:58](https://www.youtube.com/watch?v=4nax86sau6k&t=418) We need slingsr message.

- [00:07:02](https://www.youtube.com/watch?v=4nax86sau6k&t=422) Perhaps if we want to.

- [00:07:06](https://www.youtube.com/watch?v=4nax86sau6k&t=426) But probably we don't need.

- [00:07:08](https://www.youtube.com/watch?v=4nax86sau6k&t=428) Here we will do lock from multiple threads.

- [00:07:16](https://www.youtube.com/watch?v=4nax86sau6k&t=436) Concurrently I will use a static streamwriter.

- [00:07:24](https://www.youtube.com/watch?v=4nax86sau6k&t=444) And to be able to use it probably we need some IO.

- [00:07:41](https://www.youtube.com/watch?v=4nax86sau6k&t=461) Let's give it a name locks txt and we will make it.

- [00:07:47](https://www.youtube.com/watch?v=4nax86sau6k&t=467) Utf-8 and I need it to be appending perhaps.

- [00:07:54](https://www.youtube.com/watch?v=4nax86sau6k&t=474) There is bool append so it will be true.

- [00:08:17](https://www.youtube.com/watch?v=4nax86sau6k&t=497) I will also assign auto flush and to do that I need to have a constructor for this class.

- [00:08:27](https://www.youtube.com/watch?v=4nax86sau6k&t=507) You see static classes are not initialized to use.

- [00:08:34](https://www.youtube.com/watch?v=4nax86sau6k&t=514) But at some point they have to get initialized, which is when they are first called.

- [00:08:42](https://www.youtube.com/watch?v=4nax86sau6k&t=522) When you first time call a static method from a static class.

- [00:08:49](https://www.youtube.com/watch?v=4nax86sau6k&t=529) It will get initialized.

- [00:08:52](https://www.youtube.com/watch?v=4nax86sau6k&t=532) I will show you that as well.

- [00:08:54](https://www.youtube.com/watch?v=4nax86sau6k&t=534) The initialization of static methods are same as other classes.

- [00:09:06](https://www.youtube.com/watch?v=4nax86sau6k&t=546) This will be the constructor.

- [00:09:11](https://www.youtube.com/watch?v=4nax86sau6k&t=551) This is the constructor of the static class.

- [00:09:19](https://www.youtube.com/watch?v=4nax86sau6k&t=559) It will be called when the first time this class is referenced in the application during

- [00:09:37](https://www.youtube.com/watch?v=4nax86sau6k&t=577) runtime.

- [00:09:38](https://www.youtube.com/watch?v=4nax86sau6k&t=578) So here what I am going to do is: I will set flush as auto flush.

- [00:09:52](https://www.youtube.com/watch?v=4nax86sau6k&t=592) And here I will just lock the thread id such as write line.

- [00:10:00](https://www.youtube.com/watch?v=4nax86sau6k&t=600) So let's add a datetime now plus double top and the thread id to get the thread id.

- [00:10:26](https://www.youtube.com/watch?v=4nax86sau6k&t=626) You see I can add this or I can type the full path such as this both works.

- [00:10:34](https://www.youtube.com/watch?v=4nax86sau6k&t=634) And calling method equal to member name.

- [00:10:39](https://www.youtube.com/watch?v=4nax86sau6k&t=639) I am not sure if this will work or not.

- [00:10:42](https://www.youtube.com/watch?v=4nax86sau6k&t=642) So to show you when do these get initialized, I am putting a breakpoint here here and here.

- [00:10:51](https://www.youtube.com/watch?v=4nax86sau6k&t=651) I will call lock thread.

- [00:11:06](https://www.youtube.com/watch?v=4nax86sau6k&t=666) Let's run our application to see in which order the static methods are getting initialized.

- [00:11:15](https://www.youtube.com/watch?v=4nax86sau6k&t=675) So you see none of these breakpoints have yet reached because this static class is not

- [00:11:25](https://www.youtube.com/watch?v=4nax86sau6k&t=685) initialized until you use a method a variable something from that in your application.

- [00:11:34](https://www.youtube.com/watch?v=4nax86sau6k&t=694) So they are not basically getting initialized as soon as you run your application.

- [00:11:39](https://www.youtube.com/watch?v=4nax86sau6k&t=699) They are getting initialized.

- [00:11:41](https://www.youtube.com/watch?v=4nax86sau6k&t=701) As soon as you make a reference, you make a call to that class.

- [00:11:46](https://www.youtube.com/watch?v=4nax86sau6k&t=706) OK.

- [00:11:47](https://www.youtube.com/watch?v=4nax86sau6k&t=707) So when I click this you will see it is starting with declaration of the static members.

- [00:11:56](https://www.youtube.com/watch?v=4nax86sau6k&t=716) Actually this is being a field and then it will get into the constructor.

- [00:12:06](https://www.youtube.com/watch?v=4nax86sau6k&t=726) Here you see now it is inside the constructor and then it will get into the method call

- [00:12:12](https://www.youtube.com/watch?v=4nax86sau6k&t=732) that I have just did.

- [00:12:14](https://www.youtube.com/watch?v=4nax86sau6k&t=734) But these two will not be get re called again.

- [00:12:19](https://www.youtube.com/watch?v=4nax86sau6k&t=739) OK.

- [00:12:20](https://www.youtube.com/watch?v=4nax86sau6k&t=740) These are one time things when the first time the class is the static class is getting initialized.

- [00:12:26](https://www.youtube.com/watch?v=4nax86sau6k&t=746) OK.

- [00:12:27](https://www.youtube.com/watch?v=4nax86sau6k&t=747) So let's get the thread id.

- [00:12:29](https://www.youtube.com/watch?v=4nax86sau6k&t=749) The thread id is one and then we write locks.

- [00:12:35](https://www.youtube.com/watch?v=4nax86sau6k&t=755) Does this.

- [00:12:37](https://www.youtube.com/watch?v=4nax86sau6k&t=757) it is showing a setor.

- [00:12:38](https://www.youtube.com/watch?v=4nax86sau6k&t=758) OK.

- [00:12:39](https://www.youtube.com/watch?v=4nax86sau6k&t=759) So This is not what I wanted.

- [00:12:41](https://www.youtube.com/watch?v=4nax86sau6k&t=761) I need to get the method name.

- [00:12:44](https://www.youtube.com/watch?v=4nax86sau6k&t=764) It is OK.

- [00:12:46](https://www.youtube.com/watch?v=4nax86sau6k&t=766) This wasn't the thing I think we can get it from stack frame probably.

- [00:12:57](https://www.youtube.com/watch?v=4nax86sau6k&t=777) Yeah.

- [00:12:58](https://www.youtube.com/watch?v=4nax86sau6k&t=778) So this is not the thing we wanted.

- [00:13:03](https://www.youtube.com/watch?v=4nax86sau6k&t=783) So here stack trace.

- [00:13:06](https://www.youtube.com/watch?v=4nax86sau6k&t=786) Yes.

- [00:13:07](https://www.youtube.com/watch?v=4nax86sau6k&t=787) Get the call stack and to get it diagnostics.

- [00:13:11](https://www.youtube.com/watch?v=4nax86sau6k&t=791) So we can delete this.

- [00:13:14](https://www.youtube.com/watch?v=4nax86sau6k&t=794) It is not being used anymore.

- [00:13:17](https://www.youtube.com/watch?v=4nax86sau6k&t=797) Method info is from reflection.

- [00:13:20](https://www.youtube.com/watch?v=4nax86sau6k&t=800) Yeah it makes more sense.

- [00:13:23](https://www.youtube.com/watch?v=4nax86sau6k&t=803) And calling method OK.

- [00:13:26](https://www.youtube.com/watch?v=4nax86sau6k&t=806) Explicit cast.

- [00:13:30](https://www.youtube.com/watch?v=4nax86sau6k&t=810) Yeah let's do it.

- [00:13:34](https://www.youtube.com/watch?v=4nax86sau6k&t=814) And then the method name.

- [00:13:37](https://www.youtube.com/watch?v=4nax86sau6k&t=817) Yeah.

- [00:13:40](https://www.youtube.com/watch?v=4nax86sau6k&t=820) Let's try this way.

- [00:13:50](https://www.youtube.com/watch?v=4nax86sau6k&t=830) OK.

- [00:13:53](https://www.youtube.com/watch?v=4nax86sau6k&t=833) OK.

- [00:13:56](https://www.youtube.com/watch?v=4nax86sau6k&t=836) So it says that we cannot type it.

- [00:14:00](https://www.youtube.com/watch?v=4nax86sau6k&t=840) So let's check the stack frames and see what are they.

- [00:14:04](https://www.youtube.com/watch?v=4nax86sau6k&t=844) OK.

- [00:14:05](https://www.youtube.com/watch?v=4nax86sau6k&t=845) Lock thread file unknown.

- [00:14:07](https://www.youtube.com/watch?v=4nax86sau6k&t=847) Yeah actually we need the first one.

- [00:14:10](https://www.youtube.com/watch?v=4nax86sau6k&t=850) Lock thread.

- [00:14:11](https://www.youtube.com/watch?v=4nax86sau6k&t=851) This is our calling method name.

- [00:14:13](https://www.youtube.com/watch?v=4nax86sau6k&t=853) So it will be this.

- [00:14:21](https://www.youtube.com/watch?v=4nax86sau6k&t=861) And from this stack frames I think we can get the name easily.

- [00:14:25](https://www.youtube.com/watch?v=4nax86sau6k&t=865) Yeah.

- [00:14:26](https://www.youtube.com/watch?v=4nax86sau6k&t=866) The method is lock thread.

- [00:14:36](https://www.youtube.com/watch?v=4nax86sau6k&t=876) OK.

- [00:14:37](https://www.youtube.com/watch?v=4nax86sau6k&t=877) So this is the method that has called our method.

- [00:14:42](https://www.youtube.com/watch?v=4nax86sau6k&t=882) Oh no, not this one actually.

- [00:14:45](https://www.youtube.com/watch?v=4nax86sau6k&t=885) Yeah.

- [00:14:46](https://www.youtube.com/watch?v=4nax86sau6k&t=886) Lock thread is the method that being called.

- [00:14:49](https://www.youtube.com/watch?v=4nax86sau6k&t=889) We need the method who called it.

- [00:14:54](https://www.youtube.com/watch?v=4nax86sau6k&t=894) So we need a parent of this method called.

- [00:14:58](https://www.youtube.com/watch?v=4nax86sau6k&t=898) And let's see if it is available somewhere here.

- [00:15:17](https://www.youtube.com/watch?v=4nax86sau6k&t=917) Here it is.

- [00:15:42](https://www.youtube.com/watch?v=4nax86sau6k&t=942) OK.

- [00:15:50](https://www.youtube.com/watch?v=4nax86sau6k&t=950) It says that it should give you but.

- [00:15:53](https://www.youtube.com/watch?v=4nax86sau6k&t=953) Didn't work.

- [00:15:55](https://www.youtube.com/watch?v=4nax86sau6k&t=955) Let's try again.

- [00:15:59](https://www.youtube.com/watch?v=4nax86sau6k&t=959) OK.

- [00:16:00](https://www.youtube.com/watch?v=4nax86sau6k&t=960) So here is that you have to add explicit class and.

- [00:16:08](https://www.youtube.com/watch?v=4nax86sau6k&t=968) We cannot get it.

- [00:16:12](https://www.youtube.com/watch?v=4nax86sau6k&t=972) Oh it says when you when you only use this in debug.

- [00:16:53](https://www.youtube.com/watch?v=4nax86sau6k&t=1013) It will work well.

- [00:16:57](https://www.youtube.com/watch?v=4nax86sau6k&t=1017) Oh there is caller info but it is not working.

- [00:17:02](https://www.youtube.com/watch?v=4nax86sau6k&t=1022) Why in C sharp five.

- [00:17:12](https://www.youtube.com/watch?v=4nax86sau6k&t=1032) It is available in that method.

- [00:17:17](https://www.youtube.com/watch?v=4nax86sau6k&t=1037) I see yeah, it is not working anymore.

- [00:17:33](https://www.youtube.com/watch?v=4nax86sau6k&t=1053) That is why.

- [00:18:13](https://www.youtube.com/watch?v=4nax86sau6k&t=1093) Let's try this.

- [00:18:14](https://www.youtube.com/watch?v=4nax86sau6k&t=1094) Actually this is not important but.

- [00:18:16](https://www.youtube.com/watch?v=4nax86sau6k&t=1096) Anyway we are just doing it.

- [00:18:18](https://www.youtube.com/watch?v=4nax86sau6k&t=1098) So let's see if this is working.

- [00:18:23](https://www.youtube.com/watch?v=4nax86sau6k&t=1103) OK we

- [00:18:34](https://www.youtube.com/watch?v=4nax86sau6k&t=1114) are getting on the seat or because the behavior has changed in that net core.

- [00:18:49](https://www.youtube.com/watch?v=4nax86sau6k&t=1129) Yeah we need a recent answer to get that it is not working anymore.

- [00:19:03](https://www.youtube.com/watch?v=4nax86sau6k&t=1143) Yeah it is not the way it works now.

- [00:19:13](https://www.youtube.com/watch?v=4nax86sau6k&t=1153) It is not working either.

- [00:19:21](https://www.youtube.com/watch?v=4nax86sau6k&t=1161) OK this is something new but.

- [00:19:26](https://www.youtube.com/watch?v=4nax86sau6k&t=1166) I will show you another method if none of this works.

- [00:19:34](https://www.youtube.com/watch?v=4nax86sau6k&t=1174) It will be.

- [00:19:36](https://www.youtube.com/watch?v=4nax86sau6k&t=1176) I wanted to make it automatically but it looks like not working.

- [00:19:44](https://www.youtube.com/watch?v=4nax86sau6k&t=1184) We need to do more research.

- [00:19:49](https://www.youtube.com/watch?v=4nax86sau6k&t=1189) Yeah it is different.

- [00:19:54](https://www.youtube.com/watch?v=4nax86sau6k&t=1194) Therefore we will just use traditional way which is.

- [00:20:07](https://www.youtube.com/watch?v=4nax86sau6k&t=1207) This one.

- [00:20:13](https://www.youtube.com/watch?v=4nax86sau6k&t=1213) OK so here we will just pass our method name main window method.

- [00:20:25](https://www.youtube.com/watch?v=4nax86sau6k&t=1225) And then let's edit to.

- [00:20:32](https://www.youtube.com/watch?v=4nax86sau6k&t=1232) Here in search random students as well.

- [00:20:40](https://www.youtube.com/watch?v=4nax86sau6k&t=1240) Let's also open our.

- [00:20:48](https://www.youtube.com/watch?v=4nax86sau6k&t=1248) Debug folders.

- [00:20:51](https://www.youtube.com/watch?v=4nax86sau6k&t=1251) OK first time initialization they are called and our method is called.

- [00:20:59](https://www.youtube.com/watch?v=4nax86sau6k&t=1259) Program started and let's open our debug folder.

- [00:21:03](https://www.youtube.com/watch?v=4nax86sau6k&t=1263) And here we have logs.

- [00:21:07](https://www.youtube.com/watch?v=4nax86sau6k&t=1267) And we can see the log here.

- [00:21:10](https://www.youtube.com/watch?v=4nax86sau6k&t=1270) Thread ID is one.

- [00:21:12](https://www.youtube.com/watch?v=4nax86sau6k&t=1272) Then when I click this.

- [00:21:17](https://www.youtube.com/watch?v=4nax86sau6k&t=1277) We will see.

- [00:21:22](https://www.youtube.com/watch?v=4nax86sau6k&t=1282) OK when we reload.

- [00:21:23](https://www.youtube.com/watch?v=4nax86sau6k&t=1283) Now our method names are being written and you see they are running under the same.

- [00:21:31](https://www.youtube.com/watch?v=4nax86sau6k&t=1291) Managed threat therefore, when we click insert.

- [00:21:38](https://www.youtube.com/watch?v=4nax86sau6k&t=1298) Our interface is getting frozen until that method call is completed.

- [00:21:45](https://www.youtube.com/watch?v=4nax86sau6k&t=1305) So how are we going to prevent the freeze.

- [00:21:52](https://www.youtube.com/watch?v=4nax86sau6k&t=1312) It is easy.

- [00:21:54](https://www.youtube.com/watch?v=4nax86sau6k&t=1314) We are going to.

- [00:21:55](https://www.youtube.com/watch?v=4nax86sau6k&t=1315) Move this method into a new method method inside of that method.

- [00:22:06](https://www.youtube.com/watch?v=4nax86sau6k&t=1326) OK and simply we will call tasks factory start new.

- [00:22:13](https://www.youtube.com/watch?v=4nax86sau6k&t=1333) OK to self.

- [00:22:15](https://www.youtube.com/watch?v=4nax86sau6k&t=1335) Say this was.

- [00:22:19](https://www.youtube.com/watch?v=4nax86sau6k&t=1339) Self method.

- [00:22:25](https://www.youtube.com/watch?v=4nax86sau6k&t=1345) Self function calling.

- [00:22:27](https://www.youtube.com/watch?v=4nax86sau6k&t=1347) And here we open.

- [00:22:28](https://www.youtube.com/watch?v=4nax86sau6k&t=1348) We open color brackets.

- [00:22:35](https://www.youtube.com/watch?v=4nax86sau6k&t=1355) And inside here.

- [00:22:37](https://www.youtube.com/watch?v=4nax86sau6k&t=1357) We will just call our method.

- [00:22:41](https://www.youtube.com/watch?v=4nax86sau6k&t=1361) OK.

- [00:22:43](https://www.youtube.com/watch?v=4nax86sau6k&t=1363) Now they will be running on the different threats.

- [00:22:47](https://www.youtube.com/watch?v=4nax86sau6k&t=1367) We will see that.

- [00:22:50](https://www.youtube.com/watch?v=4nax86sau6k&t=1370) By the way if you have noticed that.

- [00:22:55](https://www.youtube.com/watch?v=4nax86sau6k&t=1375) After the first time initialization, these are not executed again.

- [00:23:03](https://www.youtube.com/watch?v=4nax86sau6k&t=1383) This is this is the first time initialization.

- [00:23:08](https://www.youtube.com/watch?v=4nax86sau6k&t=1388) And then when we click another button you see they are not called anymore.

- [00:23:15](https://www.youtube.com/watch?v=4nax86sau6k&t=1395) However they are written on here.

- [00:23:19](https://www.youtube.com/watch?v=4nax86sau6k&t=1399) So you see now the threat ID is different.

- [00:23:24](https://www.youtube.com/watch?v=4nax86sau6k&t=1404) They are not running in the same manager thread anymore.

- [00:23:27](https://www.youtube.com/watch?v=4nax86sau6k&t=1407) Therefore meanwhile, this threat is working.

- [00:23:31](https://www.youtube.com/watch?v=4nax86sau6k&t=1411) Threat ID 6.

- [00:23:32](https://www.youtube.com/watch?v=4nax86sau6k&t=1412) Threat 1 is still available to work.

- [00:23:36](https://www.youtube.com/watch?v=4nax86sau6k&t=1416) I can start another instance of this so there will be multiple.

- [00:23:41](https://www.youtube.com/watch?v=4nax86sau6k&t=1421) Random students click running.

- [00:23:46](https://www.youtube.com/watch?v=4nax86sau6k&t=1426) When I click you will see.

- [00:23:48](https://www.youtube.com/watch?v=4nax86sau6k&t=1428) Now it is under another threat.

- [00:23:51](https://www.youtube.com/watch?v=4nax86sau6k&t=1431) 11.

- [00:23:52](https://www.youtube.com/watch?v=4nax86sau6k&t=1432) And they are running at the same time.

- [00:23:56](https://www.youtube.com/watch?v=4nax86sau6k&t=1436) And we can see how much CPU.

- [00:23:59](https://www.youtube.com/watch?v=4nax86sau6k&t=1439) You see.

- [00:24:00](https://www.youtube.com/watch?v=4nax86sau6k&t=1440) A lot of CPU is being used by the SQL server.

- [00:24:06](https://www.youtube.com/watch?v=4nax86sau6k&t=1446) Visual Studio as well.

- [00:24:09](https://www.youtube.com/watch?v=4nax86sau6k&t=1449) OK.

- [00:24:11](https://www.youtube.com/watch?v=4nax86sau6k&t=1451) And each one will be completed at the background.

- [00:24:16](https://www.youtube.com/watch?v=4nax86sau6k&t=1456) And we can also add a label to display as a counter of completed.

- [00:24:23](https://www.youtube.com/watch?v=4nax86sau6k&t=1463) Operations.

- [00:24:25](https://www.youtube.com/watch?v=4nax86sau6k&t=1465) I will stop the application.

- [00:24:35](https://www.youtube.com/watch?v=4nax86sau6k&t=1475) OK.

- [00:24:38](https://www.youtube.com/watch?v=4nax86sau6k&t=1478) So here let's add a label.

- [00:24:51](https://www.youtube.com/watch?v=4nax86sau6k&t=1491) So this will be our counter.

- [00:24:56](https://www.youtube.com/watch?v=4nax86sau6k&t=1496) Let's name it as.

- [00:24:59](https://www.youtube.com/watch?v=4nax86sau6k&t=1499) Counter and.

- [00:25:03](https://www.youtube.com/watch?v=4nax86sau6k&t=1503) All right.

- [00:25:07](https://www.youtube.com/watch?v=4nax86sau6k&t=1507) So in here we will display.

- [00:25:15](https://www.youtube.com/watch?v=4nax86sau6k&t=1515) The number of added records with.

- [00:25:19](https://www.youtube.com/watch?v=4nax86sau6k&t=1519) Contact equals I to string or let's say we can make it as.

- [00:25:29](https://www.youtube.com/watch?v=4nax86sau6k&t=1529) If the K.

- [00:25:42](https://www.youtube.com/watch?v=4nax86sau6k&t=1542) However if we do this, it may be too fast.

- [00:25:58](https://www.youtube.com/watch?v=4nax86sau6k&t=1558) Therefore we can.

- [00:26:00](https://www.youtube.com/watch?v=4nax86sau6k&t=1560) Go with.

- [00:26:01](https://www.youtube.com/watch?v=4nax86sau6k&t=1561) One hundred equals one.

- [00:26:05](https://www.youtube.com/watch?v=4nax86sau6k&t=1565) So it will be displayed once per one hundred records is added.

- [00:26:12](https://www.youtube.com/watch?v=4nax86sau6k&t=1572) Here we can show us.

- [00:26:18](https://www.youtube.com/watch?v=4nax86sau6k&t=1578) Like this.

- [00:26:20](https://www.youtube.com/watch?v=4nax86sau6k&t=1580) However this will not work.

- [00:26:24](https://www.youtube.com/watch?v=4nax86sau6k&t=1584) Do you know why.

- [00:26:26](https://www.youtube.com/watch?v=4nax86sau6k&t=1586) Because this liberal counter exists on.

- [00:26:31](https://www.youtube.com/watch?v=4nax86sau6k&t=1591) Main window threat.

- [00:26:33](https://www.youtube.com/watch?v=4nax86sau6k&t=1593) Therefore we cannot access it from sub threats like this.

- [00:26:38](https://www.youtube.com/watch?v=4nax86sau6k&t=1598) When I run it.

- [00:26:39](https://www.youtube.com/watch?v=4nax86sau6k&t=1599) You will understand what I mean.

- [00:26:50](https://www.youtube.com/watch?v=4nax86sau6k&t=1610) You can't access all other threats.

- [00:26:55](https://www.youtube.com/watch?v=4nax86sau6k&t=1615) Objects.

- [00:26:58](https://www.youtube.com/watch?v=4nax86sau6k&t=1618) From different threats.

- [00:27:00](https://www.youtube.com/watch?v=4nax86sau6k&t=1620) OK you see.

- [00:27:02](https://www.youtube.com/watch?v=4nax86sau6k&t=1622) System invalid operation exception the calling threat.

- [00:27:07](https://www.youtube.com/watch?v=4nax86sau6k&t=1627) Cannot access this object because a different threat owns it.

- [00:27:13](https://www.youtube.com/watch?v=4nax86sau6k&t=1633) So how do we fix this problem.

- [00:27:17](https://www.youtube.com/watch?v=4nax86sau6k&t=1637) We can fix this problem with.

- [00:27:20](https://www.youtube.com/watch?v=4nax86sau6k&t=1640) These dots.

- [00:27:23](https://www.youtube.com/watch?v=4nax86sau6k&t=1643) What was it dispatchers.

- [00:27:30](https://www.youtube.com/watch?v=4nax86sau6k&t=1650) Begin invoke by the way, there is begin, invoke and invoke.

- [00:27:33](https://www.youtube.com/watch?v=4nax86sau6k&t=1653) When we use begin, invoke, it is.

- [00:27:36](https://www.youtube.com/watch?v=4nax86sau6k&t=1656) Asynchronous so it won't be blocking the threat run.

- [00:27:43](https://www.youtube.com/watch?v=4nax86sau6k&t=1663) I can't remember the exact sign text, but it was requiring a delegate like this.

- [00:27:53](https://www.youtube.com/watch?v=4nax86sau6k&t=1673) Let me: find an example.

- [00:28:03](https://www.youtube.com/watch?v=4nax86sau6k&t=1683) So it requires something like this.

- [00:28:11](https://www.youtube.com/watch?v=4nax86sau6k&t=1691) OK here we will just move this to be here.

- [00:28:28](https://www.youtube.com/watch?v=4nax86sau6k&t=1708) OK and here.

- [00:28:35](https://www.youtube.com/watch?v=4nax86sau6k&t=1715) By the way you see: I am writing dispatchers multiple times.

- [00:28:40](https://www.youtube.com/watch?v=4nax86sau6k&t=1720) And.

- [00:28:41](https://www.youtube.com/watch?v=4nax86sau6k&t=1721) We can prevent that happening.

- [00:28:45](https://www.youtube.com/watch?v=4nax86sau6k&t=1725) How.

- [00:28:46](https://www.youtube.com/watch?v=4nax86sau6k&t=1726) We can write a method here and let's say.

- [00:28:53](https://www.youtube.com/watch?v=4nax86sau6k&t=1733) Private void update label.

- [00:29:00](https://www.youtube.com/watch?v=4nax86sau6k&t=1740) OK.

- [00:29:02](https://www.youtube.com/watch?v=4nax86sau6k&t=1742) Message.

- [00:29:05](https://www.youtube.com/watch?v=4nax86sau6k&t=1745) And inside here we can simply.

- [00:29:11](https://www.youtube.com/watch?v=4nax86sau6k&t=1751) Do it like this.

- [00:29:16](https://www.youtube.com/watch?v=4nax86sau6k&t=1756) When you are writing code.

- [00:29:19](https://www.youtube.com/watch?v=4nax86sau6k&t=1759) You should convert everything into method calls so that you won't be doing duplicate

- [00:29:30](https://www.youtube.com/watch?v=4nax86sau6k&t=1770) coding.

- [00:29:32](https://www.youtube.com/watch?v=4nax86sau6k&t=1772) OK.

- [00:29:33](https://www.youtube.com/watch?v=4nax86sau6k&t=1773) And here the content will be equal to message.

- [00:29:41](https://www.youtube.com/watch?v=4nax86sau6k&t=1781) All right.

- [00:29:45](https://www.youtube.com/watch?v=4nax86sau6k&t=1785) It will be simply like this.

- [00:29:51](https://www.youtube.com/watch?v=4nax86sau6k&t=1791) OK.

- [00:29:52](https://www.youtube.com/watch?v=4nax86sau6k&t=1792) Now when we run the application, the screen will not freeze anymore.

- [00:29:57](https://www.youtube.com/watch?v=4nax86sau6k&t=1797) And dispatcher will handle.

- [00:30:00](https://www.youtube.com/watch?v=4nax86sau6k&t=1800) Even multiple threats try to access that label.

- [00:30:04](https://www.youtube.com/watch?v=4nax86sau6k&t=1804) It will handle both of them.

- [00:30:07](https://www.youtube.com/watch?v=4nax86sau6k&t=1807) So when I start the first one, you see it running.

- [00:30:10](https://www.youtube.com/watch?v=4nax86sau6k&t=1810) And then I start another one.

- [00:30:11](https://www.youtube.com/watch?v=4nax86sau6k&t=1811) You see now they are competing each other.

- [00:30:14](https://www.youtube.com/watch?v=4nax86sau6k&t=1814) And I can start another one.

- [00:30:15](https://www.youtube.com/watch?v=4nax86sau6k&t=1815) Now three different methods are competing.

- [00:30:21](https://www.youtube.com/watch?v=4nax86sau6k&t=1821) And you see now each one of them is writing on the display differently.

- [00:30:27](https://www.youtube.com/watch?v=4nax86sau6k&t=1827) And when we see the threat, ID is 1, 4, 11, 6, 12.

- [00:30:32](https://www.youtube.com/watch?v=4nax86sau6k&t=1832) Each one is starting as differently.

- [00:30:35](https://www.youtube.com/watch?v=4nax86sau6k&t=1835) And all of them is getting handled by the SQL server.

- [00:30:42](https://www.youtube.com/watch?v=4nax86sau6k&t=1842) So when we check the CPU usage.

- [00:30:45](https://www.youtube.com/watch?v=4nax86sau6k&t=1845) We can see that SQL server is running high.

- [00:30:49](https://www.youtube.com/watch?v=4nax86sau6k&t=1849) Our application is running high on CPU.

- [00:30:53](https://www.youtube.com/watch?v=4nax86sau6k&t=1853) OK.

- [00:30:55](https://www.youtube.com/watch?v=4nax86sau6k&t=1855) OK.

- [00:30:57](https://www.youtube.com/watch?v=4nax86sau6k&t=1857) So now you understand the logic behind using tasks to run application run methods under

- [00:31:11](https://www.youtube.com/watch?v=4nax86sau6k&t=1871) different threats.

- [00:31:12](https://www.youtube.com/watch?v=4nax86sau6k&t=1872) OK.

- [00:31:13](https://www.youtube.com/watch?v=4nax86sau6k&t=1873) However our code is now at the moment vulnerable to SQL attacks.

- [00:31:22](https://www.youtube.com/watch?v=4nax86sau6k&t=1882) SQL injection, which is the most common way of hacking applications, application servers,

- [00:31:34](https://www.youtube.com/watch?v=4nax86sau6k&t=1894) and databases.

- [00:31:35](https://www.youtube.com/watch?v=4nax86sau6k&t=1895) So what is SQL injection.

- [00:31:41](https://www.youtube.com/watch?v=4nax86sau6k&t=1901) And how to prevent it I will show you.

- [00:31:44](https://www.youtube.com/watch?v=4nax86sau6k&t=1904) OK.

- [00:31:45](https://www.youtube.com/watch?v=4nax86sau6k&t=1905) So let me find you a good description of SQL injection.

- [00:31:52](https://www.youtube.com/watch?v=4nax86sau6k&t=1912) OK.

- [00:31:54](https://www.youtube.com/watch?v=4nax86sau6k&t=1914) This looks like a good example.

- [00:32:03](https://www.youtube.com/watch?v=4nax86sau6k&t=1923) SQL injection.

- [00:32:06](https://www.youtube.com/watch?v=4nax86sau6k&t=1926) So let's see the SQL injection.

- [00:32:20](https://www.youtube.com/watch?v=4nax86sau6k&t=1940) OK.

- [00:32:24](https://www.youtube.com/watch?v=4nax86sau6k&t=1944) So let's assume that you have a database and you allow user to

- [00:32:40](https://www.youtube.com/watch?v=4nax86sau6k&t=1960) query products with the name as a category as gifts.

- [00:32:48](https://www.youtube.com/watch?v=4nax86sau6k&t=1968) You see the query is here.

- [00:32:52](https://www.youtube.com/watch?v=4nax86sau6k&t=1972) And actually I will show you this from our database as well.

- [00:33:00](https://www.youtube.com/watch?v=4nax86sau6k&t=1980) So let me open the SQL manager studio.

- [00:33:03](https://www.youtube.com/watch?v=4nax86sau6k&t=1983) OK.

- [00:33:04](https://www.youtube.com/watch?v=4nax86sau6k&t=1984) So let's continue.

- [00:33:05](https://www.youtube.com/watch?v=4nax86sau6k&t=1985) I will show you what it is and how can it be done.

- [00:33:09](https://www.youtube.com/watch?v=4nax86sau6k&t=1989) What is SQL injection SQL.

- [00:33:11](https://www.youtube.com/watch?v=4nax86sau6k&t=1991) SQL injection is a web security vulnerability

- [00:33:20](https://www.youtube.com/watch?v=4nax86sau6k&t=2000) that allows an attacker to interfere with the queries that an application makes to its

- [00:33:25](https://www.youtube.com/watch?v=4nax86sau6k&t=2005) database.

- [00:33:26](https://www.youtube.com/watch?v=4nax86sau6k&t=2006) It generally allows an attacker to view data that they are not normally able to retrieve.

- [00:33:31](https://www.youtube.com/watch?v=4nax86sau6k&t=2011) This might include data belonging to other users or any other data that the application

- [00:33:36](https://www.youtube.com/watch?v=4nax86sau6k&t=2016) itself is able to access.

- [00:33:38](https://www.youtube.com/watch?v=4nax86sau6k&t=2018) In many cases an attacker can modify or delete this data, causing persistent changes to the

- [00:33:44](https://www.youtube.com/watch?v=4nax86sau6k&t=2024) application's content or behavior.

- [00:33:47](https://www.youtube.com/watch?v=4nax86sau6k&t=2027) So you see, it is not only allowing attackers to see, but they can also modify or delete

- [00:33:52](https://www.youtube.com/watch?v=4nax86sau6k&t=2032) the data.

- [00:33:53](https://www.youtube.com/watch?v=4nax86sau6k&t=2033) It is extremely dangerous vulnerability and it is the most common vulnerability that not

- [00:34:02](https://www.youtube.com/watch?v=4nax86sau6k&t=2042) professional programmers engineers are doing.

- [00:34:06](https://www.youtube.com/watch?v=4nax86sau6k&t=2046) In some situations an attacker can escalate and SQL injection attack to compromise the

- [00:34:11](https://www.youtube.com/watch?v=4nax86sau6k&t=2051) underlying server or other back end infrastructure or perform a denial of service attack.

- [00:34:18](https://www.youtube.com/watch?v=4nax86sau6k&t=2058) OK.

- [00:34:20](https://www.youtube.com/watch?v=4nax86sau6k&t=2060) What is the impact of a successful SQL injection attack.

- [00:34:26](https://www.youtube.com/watch?v=4nax86sau6k&t=2066) A successful SQL injection attack can result in unauthorized access to sensitive data such

- [00:34:35](https://www.youtube.com/watch?v=4nax86sau6k&t=2075) as passwords, credit card details, or personal user information.

- [00:34:40](https://www.youtube.com/watch?v=4nax86sau6k&t=2080) Many high profile data breaches in recent years have been the result of SQL injection

- [00:34:45](https://www.youtube.com/watch?v=4nax86sau6k&t=2085) attacks leading to reputational damage and regulatory fines.

- [00:34:49](https://www.youtube.com/watch?v=4nax86sau6k&t=2089) In some cases an attacker can obtain a persistent backdoor into an organization systems, leading

- [00:34:55](https://www.youtube.com/watch?v=4nax86sau6k&t=2095) to a long term compromise that can go unnoticed for an extended period.

- [00:35:00](https://www.youtube.com/watch?v=4nax86sau6k&t=2100) OK so currently our application is vulnerable to SQL injection attack.

- [00:35:10](https://www.youtube.com/watch?v=4nax86sau6k&t=2110) You see, we are allowing users to write queries from our interface on here and it is extremely

- [00:35:24](https://www.youtube.com/watch?v=4nax86sau6k&t=2124) bad of course.

- [00:35:27](https://www.youtube.com/watch?v=4nax86sau6k&t=2127) But not that only usually normally you wouldn't allow that.

- [00:35:32](https://www.youtube.com/watch?v=4nax86sau6k&t=2132) But let's add a simple interface to do something else.

- [00:35:36](https://www.youtube.com/watch?v=4nax86sau6k&t=2136) So let's open our table.

- [00:35:50](https://www.youtube.com/watch?v=4nax86sau6k&t=2150) OK assume that we are allowing users to search at least students by name.

- [00:35:59](https://www.youtube.com/watch?v=4nax86sau6k&t=2159) OK and I will add another top item to show that screen which will be SQL injection label.

- [00:36:20](https://www.youtube.com/watch?v=4nax86sau6k&t=2180) And let's call the header as SQL injection.

- [00:36:26](https://www.youtube.com/watch?v=4nax86sau6k&t=2186) OK let's add a text box here.

- [00:36:30](https://www.youtube.com/watch?v=4nax86sau6k&t=2190) Normally this is what would the non professional programmers students would do.

- [00:36:38](https://www.youtube.com/watch?v=4nax86sau6k&t=2198) So the text box is taking entire space.

- [00:36:43](https://www.youtube.com/watch?v=4nax86sau6k&t=2203) Let's make it smaller.

- [00:36:54](https://www.youtube.com/watch?v=4nax86sau6k&t=2214) If you don't define manual heads or width, then if you set it as text margin, it may

- [00:37:07](https://www.youtube.com/watch?v=4nax86sau6k&t=2227) change according to your screen size.

- [00:37:12](https://www.youtube.com/watch?v=4nax86sau6k&t=2232) The design of the interface is something different and I am not getting into that right now.

- [00:37:23](https://www.youtube.com/watch?v=4nax86sau6k&t=2243) OK so let's say this is the user name text box.

- [00:37:29](https://www.youtube.com/watch?v=4nax86sau6k&t=2249) And here let's add a label enters let's say student name for searching.

- [00:37:47](https://www.youtube.com/watch?v=4nax86sau6k&t=2267) OK so let's name this as name student name.

- [00:37:59](https://www.youtube.com/watch?v=4nax86sau6k&t=2279) And search or let's say list students.

- [00:38:05](https://www.youtube.com/watch?v=4nax86sau6k&t=2285) OK ETL list students and let's add another.

- [00:38:26](https://www.youtube.com/watch?v=4nax86sau6k&t=2306) I think we have the same name students by name.

- [00:38:30](https://www.youtube.com/watch?v=4nax86sau6k&t=2310) We should not give any error.

- [00:38:34](https://www.youtube.com/watch?v=4nax86sau6k&t=2314) I will copy and paste.

- [00:38:36](https://www.youtube.com/watch?v=4nax86sau6k&t=2316) OK list box here.

- [00:38:39](https://www.youtube.com/watch?v=4nax86sau6k&t=2319) Copy come here, paste it.

- [00:38:43](https://www.youtube.com/watch?v=4nax86sau6k&t=2323) Oh it's taking the full space so let's add our own list box then.

- [00:38:59](https://www.youtube.com/watch?v=4nax86sau6k&t=2339) We have got some unnecessary code here I think.

- [00:39:15](https://www.youtube.com/watch?v=4nax86sau6k&t=2355) We have tab control tab item 1, tab item 2 tab item 3.

- [00:39:22](https://www.youtube.com/watch?v=4nax86sau6k&t=2362) Yeah OK and here we have a list box with OK I will just copy and paste this as list box

- [00:39:39](https://www.youtube.com/watch?v=4nax86sau6k&t=2379) 3 OK.

- [00:39:43](https://www.youtube.com/watch?v=4nax86sau6k&t=2383) We have removed this.

- [00:39:46](https://www.youtube.com/watch?v=4nax86sau6k&t=2386) OK now looking good and here we will do the listing with searching.

- [00:39:55](https://www.youtube.com/watch?v=4nax86sau6k&t=2395) So how would you write a query to retrieve students by name which would be something

- [00:40:04](https://www.youtube.com/watch?v=4nax86sau6k&t=2404) like this.

- [00:40:05](https://www.youtube.com/watch?v=4nax86sau6k&t=2405) Select all it is star from TBL students where student name equal to such as let's say this.

- [00:40:19](https://www.youtube.com/watch?v=4nax86sau6k&t=2419) OK and then we write it.

- [00:40:22](https://www.youtube.com/watch?v=4nax86sau6k&t=2422) It will bring us that student or we can also write it as something like this.

- [00:40:30](https://www.youtube.com/watch?v=4nax86sau6k&t=2430) It will be a like query so it will bring all the students.

- [00:40:35](https://www.youtube.com/watch?v=4nax86sau6k&t=2435) That starts with like.

- [00:40:40](https://www.youtube.com/watch?v=4nax86sau6k&t=2440) Contains a word.

- [00:40:43](https://www.youtube.com/watch?v=4nax86sau6k&t=2443) OK so now let's do it.

- [00:40:49](https://www.youtube.com/watch?v=4nax86sau6k&t=2449) We will get a data set, results from db connection and select data set and our query.

- [00:41:06](https://www.youtube.com/watch?v=4nax86sau6k&t=2466) And here we will use the txt student name.

- [00:41:15](https://www.youtube.com/watch?v=4nax86sau6k&t=2475) OK this is normally what you would write right.

- [00:41:26](https://www.youtube.com/watch?v=4nax86sau6k&t=2486) So let's take it to here for better readability.

- [00:41:36](https://www.youtube.com/watch?v=4nax86sau6k&t=2496) Then we will do a for each to add the course into.

- [00:41:44](https://www.youtube.com/watch?v=4nax86sau6k&t=2504) OK we are selecting data set so we will select data table.

- [00:42:11](https://www.youtube.com/watch?v=4nax86sau6k&t=2531) By the way if your query has syntax error this would be null.

- [00:42:17](https://www.youtube.com/watch?v=4nax86sau6k&t=2537) Therefore you will get an error and to prevent it if.

- [00:42:22](https://www.youtube.com/watch?v=4nax86sau6k&t=2542) Not equal to null you can add some precaution like this and here we will access this box

- [00:42:31](https://www.youtube.com/watch?v=4nax86sau6k&t=2551) tree.

- [00:42:32](https://www.youtube.com/watch?v=4nax86sau6k&t=2552) Add and let's add.

- [00:42:37](https://www.youtube.com/watch?v=4nax86sau6k&t=2557) I think we can use the same code here.

- [00:42:43](https://www.youtube.com/watch?v=4nax86sau6k&t=2563) So you see I will be doing copy paste.

- [00:42:45](https://www.youtube.com/watch?v=4nax86sau6k&t=2565) How can I fix it.

- [00:42:46](https://www.youtube.com/watch?v=4nax86sau6k&t=2566) Do you think we can fix it like this private void.

- [00:42:53](https://www.youtube.com/watch?v=4nax86sau6k&t=2573) It's record to this box.

- [00:42:57](https://www.youtube.com/watch?v=4nax86sau6k&t=2577) And what it will take.

- [00:42:59](https://www.youtube.com/watch?v=4nax86sau6k&t=2579) It will take a data row.

- [00:43:02](https://www.youtube.com/watch?v=4nax86sau6k&t=2582) And then it will take the reference of this box.

- [00:43:07](https://www.youtube.com/watch?v=4nax86sau6k&t=2587) OK it is simple as this one.

- [00:43:11](https://www.youtube.com/watch?v=4nax86sau6k&t=2591) This much.

- [00:43:13](https://www.youtube.com/watch?v=4nax86sau6k&t=2593) And here we will copy and paste this here and here we will provide the list box.

- [00:43:27](https://www.youtube.com/watch?v=4nax86sau6k&t=2607) We also need to provide the data sets.

- [00:43:43](https://www.youtube.com/watch?v=4nax86sau6k&t=2623) And here it will take the course.

- [00:43:51](https://www.youtube.com/watch?v=4nax86sau6k&t=2631) However we have used data table here, therefore it will be different.

- [00:43:56](https://www.youtube.com/watch?v=4nax86sau6k&t=2636) So let's use data sets instead of data table.

- [00:44:03](https://www.youtube.com/watch?v=4nax86sau6k&t=2643) Or we can make this over loaded such as.

- [00:44:08](https://www.youtube.com/watch?v=4nax86sau6k&t=2648) Equal to null and data table equal to null.

- [00:44:19](https://www.youtube.com/watch?v=4nax86sau6k&t=2659) So if this is null.

- [00:44:22](https://www.youtube.com/watch?v=4nax86sau6k&t=2662) Equal to null then we will do new.

- [00:44:30](https://www.youtube.com/watch?v=4nax86sau6k&t=2670) Data sets and then DS tables at data.

- [00:44:44](https://www.youtube.com/watch?v=4nax86sau6k&t=2684) OK I think it should work now.

- [00:44:49](https://www.youtube.com/watch?v=4nax86sau6k&t=2689) So now we can use this method.

- [00:44:59](https://www.youtube.com/watch?v=4nax86sau6k&t=2699) And we will just call our method.

- [00:45:19](https://www.youtube.com/watch?v=4nax86sau6k&t=2719) OK now they can take null values by default.

- [00:45:27](https://www.youtube.com/watch?v=4nax86sau6k&t=2727) So therefore I will provide the.

- [00:45:34](https://www.youtube.com/watch?v=4nax86sau6k&t=2734) So when I provide this data of this one and this one like this, what happens do you think.

- [00:45:42](https://www.youtube.com/watch?v=4nax86sau6k&t=2742) So this is a local variable and it is an object class type.

- [00:45:46](https://www.youtube.com/watch?v=4nax86sau6k&t=2746) Therefore, its reference will be provided.

- [00:45:49](https://www.youtube.com/watch?v=4nax86sau6k&t=2749) And this one is field of the main window.

- [00:45:53](https://www.youtube.com/watch?v=4nax86sau6k&t=2753) Therefore its reference will be provided.

- [00:45:56](https://www.youtube.com/watch?v=4nax86sau6k&t=2756) And this one is a local variable, therefore its reference will be provided.

- [00:46:01](https://www.youtube.com/watch?v=4nax86sau6k&t=2761) OK so it is not like we are copying and generating different instances or of these objects.

- [00:46:11](https://www.youtube.com/watch?v=4nax86sau6k&t=2771) It is just we are sending their reference their address to our method.

- [00:46:17](https://www.youtube.com/watch?v=4nax86sau6k&t=2777) Therefore the changes that I make to these records in here would be reflected here as

- [00:46:25](https://www.youtube.com/watch?v=4nax86sau6k&t=2785) well or anywhere.

- [00:46:27](https://www.youtube.com/watch?v=4nax86sau6k&t=2787) It is a topic at I think let's say a few weeks later.

- [00:46:32](https://www.youtube.com/watch?v=4nax86sau6k&t=2792) So I will not enter.

- [00:46:36](https://www.youtube.com/watch?v=4nax86sau6k&t=2796) I will not explain it in detail, but we are just providing their references.

- [00:46:41](https://www.youtube.com/watch?v=4nax86sau6k&t=2801) And reference are.

- [00:46:51](https://www.youtube.com/watch?v=4nax86sau6k&t=2811) Address of the values, we can say that.

- [00:47:05](https://www.youtube.com/watch?v=4nax86sau6k&t=2825) OK now we will do the same call here.

- [00:47:10](https://www.youtube.com/watch?v=4nax86sau6k&t=2830) However this time we will provide DT.

- [00:47:15](https://www.youtube.com/watch?v=4nax86sau6k&t=2835) And we will provide this one.

- [00:47:18](https://www.youtube.com/watch?v=4nax86sau6k&t=2838) OK.

- [00:47:19](https://www.youtube.com/watch?v=4nax86sau6k&t=2839) So let's run our application and see if it is working or not.

- [00:47:23](https://www.youtube.com/watch?v=4nax86sau6k&t=2843) Let's look for.

- [00:47:25](https://www.youtube.com/watch?v=4nax86sau6k&t=2845) Who the records.

- [00:47:29](https://www.youtube.com/watch?v=4nax86sau6k&t=2849) Yeah you see there are so many students.

- [00:47:33](https://www.youtube.com/watch?v=4nax86sau6k&t=2853) That has student name which includes 2D word.

- [00:47:56](https://www.youtube.com/watch?v=4nax86sau6k&t=2876) Since we have sent the reference of the DT table.

- [00:48:01](https://www.youtube.com/watch?v=4nax86sau6k&t=2881) Therefore it is.

- [00:48:04](https://www.youtube.com/watch?v=4nax86sau6k&t=2884) Wrong and error.

- [00:48:06](https://www.youtube.com/watch?v=4nax86sau6k&t=2886) How can we fix it.

- [00:48:08](https://www.youtube.com/watch?v=4nax86sau6k&t=2888) Not a column connection data table columns.

- [00:48:10](https://www.youtube.com/watch?v=4nax86sau6k&t=2890) OK we can fix it like this.

- [00:48:15](https://www.youtube.com/watch?v=4nax86sau6k&t=2895) Not a table.

- [00:48:25](https://www.youtube.com/watch?v=4nax86sau6k&t=2905) Connection data table columns.

- [00:48:39](https://www.youtube.com/watch?v=4nax86sau6k&t=2919) Data column.

- [00:48:46](https://www.youtube.com/watch?v=4nax86sau6k&t=2926) OK.

- [00:48:49](https://www.youtube.com/watch?v=4nax86sau6k&t=2929) I think we can make it like this.

- [00:49:11](https://www.youtube.com/watch?v=4nax86sau6k&t=2951) And here.

- [00:49:18](https://www.youtube.com/watch?v=4nax86sau6k&t=2958) OK.

- [00:49:24](https://www.youtube.com/watch?v=4nax86sau6k&t=2964) OK now it should work.

- [00:49:58](https://www.youtube.com/watch?v=4nax86sau6k&t=2998) By the way we are not doing any null checks of DS and DT.

- [00:50:01](https://www.youtube.com/watch?v=4nax86sau6k&t=3001) What I mean is we are expecting that this method will take at least DS or DT.

- [00:50:10](https://www.youtube.com/watch?v=4nax86sau6k&t=3010) So it is not the best way of programming, but it should work.

- [00:50:16](https://www.youtube.com/watch?v=4nax86sau6k&t=3016) OK and here.

- [00:50:18](https://www.youtube.com/watch?v=4nax86sau6k&t=3018) OK and here.

- [00:50:21](https://www.youtube.com/watch?v=4nax86sau6k&t=3021) OK something is not right.

- [00:50:23](https://www.youtube.com/watch?v=4nax86sau6k&t=3023) So what may it be.

- [00:50:28](https://www.youtube.com/watch?v=4nax86sau6k&t=3028) OK this thing we are providing the incorrect ListBox reference we will provide ListBox

- [00:50:41](https://www.youtube.com/watch?v=4nax86sau6k&t=3041) 3.

- [00:50:47](https://www.youtube.com/watch?v=4nax86sau6k&t=3047) OK.

- [00:50:54](https://www.youtube.com/watch?v=4nax86sau6k&t=3054) Yeah we have to change the ListBox name here.

- [00:51:09](https://www.youtube.com/watch?v=4nax86sau6k&t=3069) OK.

- [00:51:15](https://www.youtube.com/watch?v=4nax86sau6k&t=3075) You see, we have avoided writing duplicate code.

- [00:51:18](https://www.youtube.com/watch?v=4nax86sau6k&t=3078) We have converted our code into a method called which can support multiple methods.

- [00:51:25](https://www.youtube.com/watch?v=4nax86sau6k&t=3085) OK now it's working.

- [00:51:28](https://www.youtube.com/watch?v=4nax86sau6k&t=3088) However this is open to SQL injection.

- [00:51:33](https://www.youtube.com/watch?v=4nax86sau6k&t=3093) How do you think.

- [00:51:36](https://www.youtube.com/watch?v=4nax86sau6k&t=3096) For example: let's make an example of this.

- [00:51:41](https://www.youtube.com/watch?v=4nax86sau6k&t=3101) So our query is something like this, right.

- [00:51:45](https://www.youtube.com/watch?v=4nax86sau6k&t=3105) What I can do is I can add the previous query with this.

- [00:51:50](https://www.youtube.com/watch?v=4nax86sau6k&t=3110) And then for example, I will change the student name of ID 8757.

- [00:51:57](https://www.youtube.com/watch?v=4nax86sau6k&t=3117) OK.

- [00:51:59](https://www.youtube.com/watch?v=4nax86sau6k&t=3119) How am I going to do that.

- [00:52:00](https://www.youtube.com/watch?v=4nax86sau6k&t=3120) I'm going to do is it's something like this.

- [00:52:03](https://www.youtube.com/watch?v=4nax86sau6k&t=3123) Update and TBR students.

- [00:52:09](https://www.youtube.com/watch?v=4nax86sau6k&t=3129) By the way to be able to use it, you have to know the table name in this case.

- [00:52:18](https://www.youtube.com/watch?v=4nax86sau6k&t=3138) And there are also other methods to let's say, find out table names.

- [00:52:26](https://www.youtube.com/watch?v=4nax86sau6k&t=3146) If your application is vulnerable to SQL injection.

- [00:52:31](https://www.youtube.com/watch?v=4nax86sau6k&t=3151) Set the student name equal to let's say Toros University.

- [00:52:39](https://www.youtube.com/watch?v=4nax86sau6k&t=3159) Where the student ID.

- [00:52:45](https://www.youtube.com/watch?v=4nax86sau6k&t=3165) Equal to this one.

- [00:52:48](https://www.youtube.com/watch?v=4nax86sau6k&t=3168) OK.

- [00:52:50](https://www.youtube.com/watch?v=4nax86sau6k&t=3170) This will probably list nothing.

- [00:52:58](https://www.youtube.com/watch?v=4nax86sau6k&t=3178) Now I can look for Toros University as a student.

- [00:53:03](https://www.youtube.com/watch?v=4nax86sau6k&t=3183) And let's try it.

- [00:53:09](https://www.youtube.com/watch?v=4nax86sau6k&t=3189) OK.

- [00:53:11](https://www.youtube.com/watch?v=4nax86sau6k&t=3191) Let's see if our query is working.

- [00:53:26](https://www.youtube.com/watch?v=4nax86sau6k&t=3206) OK.

- [00:53:32](https://www.youtube.com/watch?v=4nax86sau6k&t=3212) Why it didn't work.

- [00:54:00](https://www.youtube.com/watch?v=4nax86sau6k&t=3240) OK.

- [00:54:07](https://www.youtube.com/watch?v=4nax86sau6k&t=3247) So this is not the thing.

- [00:54:10](https://www.youtube.com/watch?v=4nax86sau6k&t=3250) We need to add.

- [00:54:15](https://www.youtube.com/watch?v=4nax86sau6k&t=3255) OK.

- [00:54:18](https://www.youtube.com/watch?v=4nax86sau6k&t=3258) This means that the rest of the query is treated as command.

- [00:54:28](https://www.youtube.com/watch?v=4nax86sau6k&t=3268) I think there was a specific keyword and a query.

- [00:54:58](https://www.youtube.com/watch?v=4nax86sau6k&t=3298) Maybe something like this.

- [00:55:09](https://www.youtube.com/watch?v=4nax86sau6k&t=3309) Yeah I think this should work better.

- [00:55:14](https://www.youtube.com/watch?v=4nax86sau6k&t=3314) Let's try this.

- [00:55:16](https://www.youtube.com/watch?v=4nax86sau6k&t=3316) So this will tell that the query ends here.

- [00:55:19](https://www.youtube.com/watch?v=4nax86sau6k&t=3319) The first query will give an error, however, the second should run fine.

- [00:55:34](https://www.youtube.com/watch?v=4nax86sau6k&t=3334) First query is throwing an error so let's try it like this.

- [00:55:39](https://www.youtube.com/watch?v=4nax86sau6k&t=3339) Fix and then here.

- [00:55:43](https://www.youtube.com/watch?v=4nax86sau6k&t=3343) We are doing something.

- [00:55:50](https://www.youtube.com/watch?v=4nax86sau6k&t=3350) Let me check the code.

- [00:55:55](https://www.youtube.com/watch?v=4nax86sau6k&t=3355) Oh this is select query.

- [00:55:59](https://www.youtube.com/watch?v=4nax86sau6k&t=3359) Therefore, I think it should work.

- [00:56:04](https://www.youtube.com/watch?v=4nax86sau6k&t=3364) Let's click the link.

- [00:56:08](https://www.youtube.com/watch?v=4nax86sau6k&t=3368) So our query did become something like this.

- [00:56:16](https://www.youtube.com/watch?v=4nax86sau6k&t=3376) OK.

- [00:56:19](https://www.youtube.com/watch?v=4nax86sau6k&t=3379) Here.

- [00:56:22](https://www.youtube.com/watch?v=4nax86sau6k&t=3382) OK.

- [00:56:25](https://www.youtube.com/watch?v=4nax86sau6k&t=3385) So currently we are not writing it correctly to fix it.

- [00:56:34](https://www.youtube.com/watch?v=4nax86sau6k&t=3394) I think I need to add something like this.

- [00:56:44](https://www.youtube.com/watch?v=4nax86sau6k&t=3404) Yeah.

- [00:56:46](https://www.youtube.com/watch?v=4nax86sau6k&t=3406) I also need to remove this string.

- [00:56:51](https://www.youtube.com/watch?v=4nax86sau6k&t=3411) So how can I remove it.

- [00:56:55](https://www.youtube.com/watch?v=4nax86sau6k&t=3415) I think I can remove it like this.

- [00:57:00](https://www.youtube.com/watch?v=4nax86sau6k&t=3420) Yep.

- [00:57:01](https://www.youtube.com/watch?v=4nax86sau6k&t=3421) Now it would work.

- [00:57:02](https://www.youtube.com/watch?v=4nax86sau6k&t=3422) OK.

- [00:57:03](https://www.youtube.com/watch?v=4nax86sau6k&t=3423) So we need some other modification to our query such as.

- [00:57:08](https://www.youtube.com/watch?v=4nax86sau6k&t=3428) OK.

- [00:57:10](https://www.youtube.com/watch?v=4nax86sau6k&t=3430) Here.

- [00:57:12](https://www.youtube.com/watch?v=4nax86sau6k&t=3432) Because it is expecting a string.

- [00:57:14](https://www.youtube.com/watch?v=4nax86sau6k&t=3434) It will add that string and after our new query, we will set the rest as a command.

- [00:57:24](https://www.youtube.com/watch?v=4nax86sau6k&t=3444) And now when we run.

- [00:57:27](https://www.youtube.com/watch?v=4nax86sau6k&t=3447) Yes you see all of the student ID 7857 set as Toros University.

- [00:57:36](https://www.youtube.com/watch?v=4nax86sau6k&t=3456) So I have basically hijacked the application.

- [00:57:39](https://www.youtube.com/watch?v=4nax86sau6k&t=3459) I did an SQL SQL injection and once you execute your queries naked such as this one.

- [00:57:52](https://www.youtube.com/watch?v=4nax86sau6k&t=3472) Attackers can exploit your system.

- [00:57:53](https://www.youtube.com/watch?v=4nax86sau6k&t=3473) So here I am ending the first query like this.

- [00:57:58](https://www.youtube.com/watch?v=4nax86sau6k&t=3478) Then I am appending the malicious code here and then I am ending the rest of the query

- [00:58:04](https://www.youtube.com/watch?v=4nax86sau6k&t=3484) with this keyword.

- [00:58:06](https://www.youtube.com/watch?v=4nax86sau6k&t=3486) With this special command in SQL.

- [00:58:11](https://www.youtube.com/watch?v=4nax86sau6k&t=3491) So you see now I am hijacking my database result.

- [00:58:16](https://www.youtube.com/watch?v=4nax86sau6k&t=3496) I can even delete all of the records in database.

- [00:58:20](https://www.youtube.com/watch?v=4nax86sau6k&t=3500) So to do that I would simply just need to.

- [00:58:26](https://www.youtube.com/watch?v=4nax86sau6k&t=3506) I can even drop the table, but I won't do that.

- [00:58:31](https://www.youtube.com/watch?v=4nax86sau6k&t=3511) Delete from students.

- [00:58:36](https://www.youtube.com/watch?v=4nax86sau6k&t=3516) I can even delete all the tables in that database without even knowing their name because we

- [00:58:42](https://www.youtube.com/watch?v=4nax86sau6k&t=3522) are executing the query with school database.

- [00:58:46](https://www.youtube.com/watch?v=4nax86sau6k&t=3526) And then I click list.

- [00:58:47](https://www.youtube.com/watch?v=4nax86sau6k&t=3527) Now it is deleting all the records and they are deleted.

- [00:58:51](https://www.youtube.com/watch?v=4nax86sau6k&t=3531) Now when I select, you see empty.

- [00:58:54](https://www.youtube.com/watch?v=4nax86sau6k&t=3534) All records are deleted.

- [00:58:57](https://www.youtube.com/watch?v=4nax86sau6k&t=3537) So imagine that on your production servers, you leave your code vulnerable to SQL injection

- [00:59:04](https://www.youtube.com/watch?v=4nax86sau6k&t=3544) attack.

- [00:59:06](https://www.youtube.com/watch?v=4nax86sau6k&t=3546) And one day when you wake up, you see that your entire database is deleted.

- [00:59:12](https://www.youtube.com/watch?v=4nax86sau6k&t=3552) Everything is gone.

- [00:59:14](https://www.youtube.com/watch?v=4nax86sau6k&t=3554) Imagine that.

- [00:59:16](https://www.youtube.com/watch?v=4nax86sau6k&t=3556) It is a disaster.

- [00:59:19](https://www.youtube.com/watch?v=4nax86sau6k&t=3559) By the way we also should clear items.

- [00:59:28](https://www.youtube.com/watch?v=4nax86sau6k&t=3568) Like we do here.

- [00:59:33](https://www.youtube.com/watch?v=4nax86sau6k&t=3573) So how we can prevent SQL injection.

- [00:59:40](https://www.youtube.com/watch?v=4nax86sau6k&t=3580) Prevention of SQL injection is made with parameterized queries in C sharp.

- [00:59:57](https://www.youtube.com/watch?v=4nax86sau6k&t=3597) So what we are going to do is we will convert our methods of database operations into parameterized

- [01:00:05](https://www.youtube.com/watch?v=4nax86sau6k&t=3605) queries.

- [01:00:08](https://www.youtube.com/watch?v=4nax86sau6k&t=3608) Ok so how do we write parameterized queries.

- [01:00:11](https://www.youtube.com/watch?v=4nax86sau6k&t=3611) I think I will start from a simple query and then I will turn that into a method.

- [01:00:18](https://www.youtube.com/watch?v=4nax86sau6k&t=3618) Just our existing select data table method or select data set method or our update method

- [01:00:25](https://www.youtube.com/watch?v=4nax86sau6k&t=3625) which we have seen so far here.

- [01:00:29](https://www.youtube.com/watch?v=4nax86sau6k&t=3629) Select data table, update, delete, insert and select data set.

- [01:00:35](https://www.youtube.com/watch?v=4nax86sau6k&t=3635) All of these methods so far we have written directly executes the query.

- [01:00:43](https://www.youtube.com/watch?v=4nax86sau6k&t=3643) Therefore all of them are vulnerable to SQL injection attack.

- [01:00:49](https://www.youtube.com/watch?v=4nax86sau6k&t=3649) Ok so what we are going to do is we are going to turn this method into a secure method.

- [01:01:00](https://www.youtube.com/watch?v=4nax86sau6k&t=3660) Ok so let's copy paste this into here.

- [01:01:24](https://www.youtube.com/watch?v=4nax86sau6k&t=3684) Ok SQL.

- [01:01:25](https://www.youtube.com/watch?v=4nax86sau6k&t=3685) Then we will have another version which will have parameterized.

- [01:01:45](https://www.youtube.com/watch?v=4nax86sau6k&t=3705) So what will be the difference.

- [01:01:50](https://www.youtube.com/watch?v=4nax86sau6k&t=3710) I will start from simple example and here we will use SQL command.

- [01:01:59](https://www.youtube.com/watch?v=4nax86sau6k&t=3719) And we will write our command as previously but with different parameterizing.

- [01:02:09](https://www.youtube.com/watch?v=4nax86sau6k&t=3729) So it will be like this.

- [01:02:14](https://www.youtube.com/watch?v=4nax86sau6k&t=3734) Ok select everything.

- [01:02:16](https://www.youtube.com/watch?v=4nax86sau6k&t=3736) Start from TBS students versus student name like and here it will get a parameter.

- [01:02:24](https://www.youtube.com/watch?v=4nax86sau6k&t=3744) Ok the parameters are defined with add character in front of them and it will be something

- [01:02:31](https://www.youtube.com/watch?v=4nax86sau6k&t=3751) like this.

- [01:02:32](https://www.youtube.com/watch?v=4nax86sau6k&t=3752) And I will call it as parameter name here and this will be our SQL command.

- [01:02:51](https://www.youtube.com/watch?v=4nax86sau6k&t=3771) SQL command also takes SQL connection and let's get the connection from our connection

- [01:03:00](https://www.youtube.com/watch?v=4nax86sau6k&t=3780) code from here.

- [01:03:03](https://www.youtube.com/watch?v=4nax86sau6k&t=3783) Ok and to do that, let's write it like this.

- [01:03:13](https://www.youtube.com/watch?v=4nax86sau6k&t=3793) Connection is opened, the connection is provided.

- [01:03:19](https://www.youtube.com/watch?v=4nax86sau6k&t=3799) We are not done yet.

- [01:03:20](https://www.youtube.com/watch?v=4nax86sau6k&t=3800) So our SQL command is ready SQL command object.

- [01:03:25](https://www.youtube.com/watch?v=4nax86sau6k&t=3805) So you see this is a class in data SQL client and therefore our object of SQL command is

- [01:03:34](https://www.youtube.com/watch?v=4nax86sau6k&t=3814) ready with having our query like this.

- [01:03:38](https://www.youtube.com/watch?v=4nax86sau6k&t=3818) We could also do something like this I believe.

- [01:03:42](https://www.youtube.com/watch?v=4nax86sau6k&t=3822) Command dot command text equal to I think let's do that way first this then command

- [01:03:53](https://www.youtube.com/watch?v=4nax86sau6k&t=3833) dot connection is equal to connection.

- [01:04:00](https://www.youtube.com/watch?v=4nax86sau6k&t=3840) You see, you know that we should always use using class if it is supporting.

- [01:04:07](https://www.youtube.com/watch?v=4nax86sau6k&t=3847) So let's check that whether command is supporting using or not.

- [01:04:13](https://www.youtube.com/watch?v=4nax86sau6k&t=3853) And yes, it is supporting using.

- [01:04:15](https://www.youtube.com/watch?v=4nax86sau6k&t=3855) Therefore we will be doing using class.

- [01:04:21](https://www.youtube.com/watch?v=4nax86sau6k&t=3861) Ok and then what else there is what else and then we will add the parameters with their

- [01:04:28](https://www.youtube.com/watch?v=4nax86sau6k&t=3868) names.

- [01:04:29](https://www.youtube.com/watch?v=4nax86sau6k&t=3869) Ok so command dot parameters add with value.

- [01:04:34](https://www.youtube.com/watch?v=4nax86sau6k&t=3874) Ok there is add with value and here you see there is parameter name and object value.

- [01:04:42](https://www.youtube.com/watch?v=4nax86sau6k&t=3882) The parameter name is here.

- [01:04:45](https://www.youtube.com/watch?v=4nax86sau6k&t=3885) Let's give it a name as student name.

- [01:04:48](https://www.youtube.com/watch?v=4nax86sau6k&t=3888) So this add character is a special character in Microsoft's SQL Server.

- [01:04:57](https://www.youtube.com/watch?v=4nax86sau6k&t=3897) I think it is also it may be also same in MySQL.

- [01:05:01](https://www.youtube.com/watch?v=4nax86sau6k&t=3901) I am not sure but probably and also in other TSQL related database management systems as

- [01:05:07](https://www.youtube.com/watch?v=4nax86sau6k&t=3907) well probably.

- [01:05:10](https://www.youtube.com/watch?v=4nax86sau6k&t=3910) So here the add student name is our parameter name.

- [01:05:18](https://www.youtube.com/watch?v=4nax86sau6k&t=3918) Therefore first we provide it and then we provide the value.

- [01:05:23](https://www.youtube.com/watch?v=4nax86sau6k&t=3923) So what is the value in our example.

- [01:05:26](https://www.youtube.com/watch?v=4nax86sau6k&t=3926) It is the user this student name text that we are getting from user.

- [01:05:33](https://www.youtube.com/watch?v=4nax86sau6k&t=3933) Ok everything is now ready because we have only one parameter here.

- [01:05:40](https://www.youtube.com/watch?v=4nax86sau6k&t=3940) And let's see what else there is.

- [01:05:48](https://www.youtube.com/watch?v=4nax86sau6k&t=3948) Ok so there is another.

- [01:05:50](https://www.youtube.com/watch?v=4nax86sau6k&t=3950) Oh you could also define the parameter type and the value itself like this.

- [01:05:58](https://www.youtube.com/watch?v=4nax86sau6k&t=3958) I think yeah, let's use this method.

- [01:06:02](https://www.youtube.com/watch?v=4nax86sau6k&t=3962) Both works.

- [01:06:03](https://www.youtube.com/watch?v=4nax86sau6k&t=3963) This works and this also works.

- [01:06:06](https://www.youtube.com/watch?v=4nax86sau6k&t=3966) I think you can also use this method as well.

- [01:06:10](https://www.youtube.com/watch?v=4nax86sau6k&t=3970) So they are same but here we are providing the data type of parameters.

- [01:06:17](https://www.youtube.com/watch?v=4nax86sau6k&t=3977) Currently this is string.

- [01:06:21](https://www.youtube.com/watch?v=4nax86sau6k&t=3981) Therefore it can automatically understand when executing on SQL Server.

- [01:06:29](https://www.youtube.com/watch?v=4nax86sau6k&t=3989) However if you have if you are using a special object then you can also define values like

- [01:06:38](https://www.youtube.com/watch?v=4nax86sau6k&t=3998) this.

- [01:06:39](https://www.youtube.com/watch?v=4nax86sau6k&t=3999) Ok then however, if you do it like this, it is becoming more generic.

- [01:06:49](https://www.youtube.com/watch?v=4nax86sau6k&t=4009) I can say.

- [01:06:50](https://www.youtube.com/watch?v=4nax86sau6k&t=4010) But yeah I think we can do either way.

- [01:06:55](https://www.youtube.com/watch?v=4nax86sau6k&t=4015) I think let's do this type.

- [01:07:14](https://www.youtube.com/watch?v=4nax86sau6k&t=4034) Let's see if I have written the name correctly.

- [01:07:22](https://www.youtube.com/watch?v=4nax86sau6k&t=4042) Ok and finally what we are going to do is executing the parameterized query.

- [01:07:36](https://www.youtube.com/watch?v=4nax86sau6k&t=4056) It is like this.

- [01:07:41](https://www.youtube.com/watch?v=4nax86sau6k&t=4061) Ok SQLAdapter you see we are using SQLDataAdapter I think you can call it as SQLAdapter.

- [01:07:52](https://www.youtube.com/watch?v=4nax86sau6k&t=4072) Ok and it is taking command.

- [01:07:56](https://www.youtube.com/watch?v=4nax86sau6k&t=4076) Let's see if this does support using.

- [01:07:59](https://www.youtube.com/watch?v=4nax86sau6k&t=4079) I am not sure if it is supporting then you should use it.

- [01:08:04](https://www.youtube.com/watch?v=4nax86sau6k&t=4084) Yes so SQLAdapter class is also supporting using and not every class supports it.

- [01:08:17](https://www.youtube.com/watch?v=4nax86sau6k&t=4097) And then we will use data table.

- [01:08:19](https://www.youtube.com/watch?v=4nax86sau6k&t=4099) Ok we could also use I think data set and let's see.

- [01:08:26](https://www.youtube.com/watch?v=4nax86sau6k&t=4106) Yeah you can fill data table or data set.

- [01:08:30](https://www.youtube.com/watch?v=4nax86sau6k&t=4110) Data set means that you will be selecting multiple tables from the SQL Server.

- [01:08:38](https://www.youtube.com/watch?v=4nax86sau6k&t=4118) But if you do data table then you will be selecting single table.

- [01:08:42](https://www.youtube.com/watch?v=4nax86sau6k&t=4122) And currently we are doing single table select.

- [01:08:48](https://www.youtube.com/watch?v=4nax86sau6k&t=4128) Ok now we have our data table but I have to define data table outside of this scope to

- [01:08:59](https://www.youtube.com/watch?v=4nax86sau6k&t=4139) use it like here.

- [01:09:01](https://www.youtube.com/watch?v=4nax86sau6k&t=4141) Let me show.

- [01:09:02](https://www.youtube.com/watch?v=4nax86sau6k&t=4142) Ok if you want to use your data table outside of the using scope, then you have to define

- [01:09:13](https://www.youtube.com/watch?v=4nax86sau6k&t=4153) it somewhere else.

- [01:09:14](https://www.youtube.com/watch?v=4nax86sau6k&t=4154) Because you see this data table will be disposed of once our software exit from this using

- [01:09:22](https://www.youtube.com/watch?v=4nax86sau6k&t=4162) statement.

- [01:09:24](https://www.youtube.com/watch?v=4nax86sau6k&t=4164) Whatever inside using statement is disposed of, closed and such after you leave the using

- [01:09:32](https://www.youtube.com/watch?v=4nax86sau6k&t=4172) statement.

- [01:09:33](https://www.youtube.com/watch?v=4nax86sau6k&t=4173) Using code block.

- [01:09:35](https://www.youtube.com/watch?v=4nax86sau6k&t=4175) Ok code region or.

- [01:09:38](https://www.youtube.com/watch?v=4nax86sau6k&t=4178) So let's move this to the top of our code and now we can use it.

- [01:09:46](https://www.youtube.com/watch?v=4nax86sau6k&t=4186) And since we are defining it with leave data table I think it won't be null ever.

- [01:09:54](https://www.youtube.com/watch?v=4nax86sau6k&t=4194) So it is fine, but we can leave it.

- [01:09:58](https://www.youtube.com/watch?v=4nax86sau6k&t=4198) Ok now this is the secure way of doing queries.

- [01:10:04](https://www.youtube.com/watch?v=4nax86sau6k&t=4204) Now let's try our methods and try to delete students from table like we did from vulnerable

- [01:10:20](https://www.youtube.com/watch?v=4nax86sau6k&t=4220) code.

- [01:10:23](https://www.youtube.com/watch?v=4nax86sau6k&t=4223) And you know the var char is the character which is used for string.

- [01:10:31](https://www.youtube.com/watch?v=4nax86sau6k&t=4231) Ok before we do that, we need to add some records.

- [01:10:34](https://www.youtube.com/watch?v=4nax86sau6k&t=4234) Now we are adding records to our database.

- [01:10:40](https://www.youtube.com/watch?v=4nax86sau6k&t=4240) You see, because of the label size, we can't see the entire code.

- [01:10:50](https://www.youtube.com/watch?v=4nax86sau6k&t=4250) So let's make this label bigger.

- [01:11:04](https://www.youtube.com/watch?v=4nax86sau6k&t=4264) Ok.

- [01:11:09](https://www.youtube.com/watch?v=4nax86sau6k&t=4269) Ok so let's insert.

- [01:11:11](https://www.youtube.com/watch?v=4nax86sau6k&t=4271) Ok insertion started.

- [01:11:13](https://www.youtube.com/watch?v=4nax86sau6k&t=4273) Ok meanwhile, this code is working.

- [01:11:18](https://www.youtube.com/watch?v=4nax86sau6k&t=4278) We can work here.

- [01:11:20](https://www.youtube.com/watch?v=4nax86sau6k&t=4280) So let's list the students.

- [01:11:22](https://www.youtube.com/watch?v=4nax86sau6k&t=4282) And nothing has come and so we need to add some letter first.

- [01:11:29](https://www.youtube.com/watch?v=4nax86sau6k&t=4289) Ok still nothing is coming.

- [01:11:33](https://www.youtube.com/watch?v=4nax86sau6k&t=4293) So we may have a problem at somewhere.

- [01:11:43](https://www.youtube.com/watch?v=4nax86sau6k&t=4303) I think we have to remove n because now that we are using parameterized query.

- [01:12:03](https://www.youtube.com/watch?v=4nax86sau6k&t=4323) There is still some problem when we are writing like query.

- [01:12:13](https://www.youtube.com/watch?v=4nax86sau6k&t=4333) How was it?

- [01:12:17](https://www.youtube.com/watch?v=4nax86sau6k&t=4337) Ok let's check it out.

- [01:12:22](https://www.youtube.com/watch?v=4nax86sau6k&t=4342) SQL parameterized like query.

- [01:12:26](https://www.youtube.com/watch?v=4nax86sau6k&t=4346) Like queries are somewhat different.

- [01:12:32](https://www.youtube.com/watch?v=4nax86sau6k&t=4352) Yeah this is what we are doing right now.

- [01:12:41](https://www.youtube.com/watch?v=4nax86sau6k&t=4361) So it should work.

- [01:12:44](https://www.youtube.com/watch?v=4nax86sau6k&t=4364) Ok student name, student name, student name.

- [01:12:50](https://www.youtube.com/watch?v=4nax86sau6k&t=4370) Ok so where is our mistake?

- [01:12:57](https://www.youtube.com/watch?v=4nax86sau6k&t=4377) So you see when you are executing parameterized query to see that you can use tools, SQL profiler.

- [01:13:12](https://www.youtube.com/watch?v=4nax86sau6k&t=4392) And here let's start tuning and execute our query.

- [01:13:22](https://www.youtube.com/watch?v=4nax86sau6k&t=4402) And then we can see the query executed here.

- [01:13:25](https://www.youtube.com/watch?v=4nax86sau6k&t=4405) Ok like student names and student name, var character 2, student name equal to this.

- [01:13:36](https://www.youtube.com/watch?v=4nax86sau6k&t=4416) So let's see where is our error.

- [01:13:39](https://www.youtube.com/watch?v=4nax86sau6k&t=4419) Ok so there is no error.

- [01:13:45](https://www.youtube.com/watch?v=4nax86sau6k&t=4425) So let's, maybe there is no such student as da.

- [01:13:55](https://www.youtube.com/watch?v=4nax86sau6k&t=4435) Yeah let's try 10a or 1080.

- [01:14:02](https://www.youtube.com/watch?v=4nax86sau6k&t=4442) Yeah let's try this.

- [01:14:05](https://www.youtube.com/watch?v=4nax86sau6k&t=4445) Interesting.

- [01:14:07](https://www.youtube.com/watch?v=4nax86sau6k&t=4447) So may it be because we have extra here?

- [01:14:14](https://www.youtube.com/watch?v=4nax86sau6k&t=4454) No.

- [01:14:15](https://www.youtube.com/watch?v=4nax86sau6k&t=4455) Ok maybe something like this.

- [01:14:20](https://www.youtube.com/watch?v=4nax86sau6k&t=4460) So now giving error.

- [01:14:25](https://www.youtube.com/watch?v=4nax86sau6k&t=4465) So this is the query getting executed.

- [01:14:32](https://www.youtube.com/watch?v=4nax86sau6k&t=4472) Maybe this is extra, I don't know.

- [01:14:45](https://www.youtube.com/watch?v=4nax86sau6k&t=4485) If we remove one, ok.

- [01:14:47](https://www.youtube.com/watch?v=4nax86sau6k&t=4487) Ok we are using like.

- [01:14:50](https://www.youtube.com/watch?v=4nax86sau6k&t=4490) Ok this is

- [01:15:05](https://www.youtube.com/watch?v=4nax86sau6k&t=4505) working but this is not working.

- [01:15:08](https://www.youtube.com/watch?v=4nax86sau6k&t=4508) Why?

- [01:15:09](https://www.youtube.com/watch?v=4nax86sau6k&t=4509) Execution plan table scan as expected.

- [01:15:18](https://www.youtube.com/watch?v=4nax86sau6k&t=4518) Student name, var character 2, yeah everything is looking correct.

- [01:15:38](https://www.youtube.com/watch?v=4nax86sau6k&t=4538) May it be because we are using the same name as.

- [01:15:44](https://www.youtube.com/watch?v=4nax86sau6k&t=4544) No it should not matter, but let's verify, yeah it's not.

- [01:16:03](https://www.youtube.com/watch?v=4nax86sau6k&t=4563) Interesting, this is really interesting.

- [01:16:13](https://www.youtube.com/watch?v=4nax86sau6k&t=4573) Ah now I remember the reason, ok.

- [01:16:21](https://www.youtube.com/watch?v=4nax86sau6k&t=4581) So when you are using these percentages, you have to provide that inside your string, so

- [01:16:29](https://www.youtube.com/watch?v=4nax86sau6k&t=4589) it will be like this.

- [01:16:33](https://www.youtube.com/watch?v=4nax86sau6k&t=4593) Plus, this is the way doing like based query.

- [01:16:40](https://www.youtube.com/watch?v=4nax86sau6k&t=4600) As I said this means that any number of characters, any characters and any number of characters,

- [01:16:46](https://www.youtube.com/watch?v=4nax86sau6k&t=4606) any characters.

- [01:16:47](https://www.youtube.com/watch?v=4nax86sau6k&t=4607) It's a wildcard search.

- [01:16:48](https://www.youtube.com/watch?v=4nax86sau6k&t=4608) Now it should work.

- [01:16:59](https://www.youtube.com/watch?v=4nax86sau6k&t=4619) Ok.

- [01:17:05](https://www.youtube.com/watch?v=4nax86sau6k&t=4625) Zero.

- [01:17:10](https://www.youtube.com/watch?v=4nax86sau6k&t=4630) Oh and now since that we have edited, we don't need this anymore because you see we use it

- [01:17:22](https://www.youtube.com/watch?v=4nax86sau6k&t=4642) to define a string.

- [01:17:25](https://www.youtube.com/watch?v=4nax86sau6k&t=4645) Now when you are using, when you are doing a parameterized query, you don't need to put

- [01:17:32](https://www.youtube.com/watch?v=4nax86sau6k&t=4652) that string because the SQL server is handling that part.

- [01:17:38](https://www.youtube.com/watch?v=4nax86sau6k&t=4658) So the query is becoming like this.

- [01:17:41](https://www.youtube.com/watch?v=4nax86sau6k&t=4661) And a zero.

- [01:17:44](https://www.youtube.com/watch?v=4nax86sau6k&t=4664) Ok now we can see, now we can try our SQL injection like delete from EBL students and

- [01:17:59](https://www.youtube.com/watch?v=4nax86sau6k&t=4679) this.

- [01:18:00](https://www.youtube.com/watch?v=4nax86sau6k&t=4680) And when I run it, nothing will happen because now we are doing a parameterized query and

- [01:18:09](https://www.youtube.com/watch?v=4nax86sau6k&t=4689) as you can see, it has failed it.

- [01:18:18](https://www.youtube.com/watch?v=4nax86sau6k&t=4698) To delete from TBL students.

- [01:18:22](https://www.youtube.com/watch?v=4nax86sau6k&t=4702) And now when I run the same query on my unsecure listing, it will delete it.

- [01:18:28](https://www.youtube.com/watch?v=4nax86sau6k&t=4708) So let's add another button to see, to test it.

- [01:18:34](https://www.youtube.com/watch?v=4nax86sau6k&t=4714) Ok SQL injection, list students by name, save.

- [01:18:43](https://www.youtube.com/watch?v=4nax86sau6k&t=4723) And then.

- [01:18:45](https://www.youtube.com/watch?v=4nax86sau6k&t=4725) Copy paste it.

- [01:18:50](https://www.youtube.com/watch?v=4nax86sau6k&t=4730) Ok list students insecure.

- [01:18:57](https://www.youtube.com/watch?v=4nax86sau6k&t=4737) And this can be named as secure.

- [01:19:08](https://www.youtube.com/watch?v=4nax86sau6k&t=4748) And here we will delete the click event and compose another one.

- [01:19:18](https://www.youtube.com/watch?v=4nax86sau6k&t=4758) Click new event handler.

- [01:19:23](https://www.youtube.com/watch?v=4nax86sau6k&t=4763) Ok.

- [01:19:24](https://www.youtube.com/watch?v=4nax86sau6k&t=4764) And what we are going to do is simply we will take it and put it here.

- [01:19:32](https://www.youtube.com/watch?v=4nax86sau6k&t=4772) Ok.

- [01:19:33](https://www.youtube.com/watch?v=4nax86sau6k&t=4773) So now let's rerun.

- [01:19:36](https://www.youtube.com/watch?v=4nax86sau6k&t=4776) Oh we have forgotten to reset this box.

- [01:19:51](https://www.youtube.com/watch?v=4nax86sau6k&t=4791) Ok let's add them to here.

- [01:20:05](https://www.youtube.com/watch?v=4nax86sau6k&t=4805) Ok so let's try.

- [01:20:07](https://www.youtube.com/watch?v=4nax86sau6k&t=4807) So I will first try to secure one.

- [01:20:11](https://www.youtube.com/watch?v=4nax86sau6k&t=4811) List students secure working and delete from TBL students.

- [01:20:20](https://www.youtube.com/watch?v=4nax86sau6k&t=4820) And comment.

- [01:20:23](https://www.youtube.com/watch?v=4nax86sau6k&t=4823) Ok so it is working.

- [01:20:26](https://www.youtube.com/watch?v=4nax86sau6k&t=4826) And when we remove.

- [01:20:28](https://www.youtube.com/watch?v=4nax86sau6k&t=4828) I think you can guess.

- [01:20:30](https://www.youtube.com/watch?v=4nax86sau6k&t=4830) Yes.

- [01:20:31](https://www.youtube.com/watch?v=4nax86sau6k&t=4831) So when we check the SQL profiler, let's see how it is being executed.

- [01:20:40](https://www.youtube.com/watch?v=4nax86sau6k&t=4840) Here.

- [01:20:42](https://www.youtube.com/watch?v=4nax86sau6k&t=4842) So.

- [01:20:44](https://www.youtube.com/watch?v=4nax86sau6k&t=4844) Ok so what is the key point here?

- [01:20:47](https://www.youtube.com/watch?v=4nax86sau6k&t=4847) As you can see, this is the query that we have provided as a text here.

- [01:20:53](https://www.youtube.com/watch?v=4nax86sau6k&t=4853) This is the query.

- [01:20:55](https://www.youtube.com/watch?v=4nax86sau6k&t=4855) And when SQL Server executes this query, it treats this text as a string, nothing else.

- [01:21:06](https://www.youtube.com/watch?v=4nax86sau6k&t=4866) You see this have a special delete command here and special command here as well.

- [01:21:15](https://www.youtube.com/watch?v=4nax86sau6k&t=4875) All of them are treated as text.

- [01:21:17](https://www.youtube.com/watch?v=4nax86sau6k&t=4877) Therefore, they are not executed as a command of SQL Server.

- [01:21:22](https://www.youtube.com/watch?v=4nax86sau6k&t=4882) However, now I will execute the same command with insecure.

- [01:21:29](https://www.youtube.com/watch?v=4nax86sau6k&t=4889) Ok executed.

- [01:21:30](https://www.youtube.com/watch?v=4nax86sau6k&t=4890) Now here the executed command.

- [01:21:35](https://www.youtube.com/watch?v=4nax86sau6k&t=4895) And you see.

- [01:21:36](https://www.youtube.com/watch?v=4nax86sau6k&t=4896) Will it delete now?

- [01:21:38](https://www.youtube.com/watch?v=4nax86sau6k&t=4898) No, it won't delete because we didn't finish the previous query here.

- [01:21:46](https://www.youtube.com/watch?v=4nax86sau6k&t=4906) So we have to modify our query a bit more.

- [01:21:50](https://www.youtube.com/watch?v=4nax86sau6k&t=4910) Ok let's try with secure.

- [01:21:52](https://www.youtube.com/watch?v=4nax86sau6k&t=4912) And let's see if it is working.

- [01:21:55](https://www.youtube.com/watch?v=4nax86sau6k&t=4915) Yes, secure didn't delete any and now insecure.

- [01:21:59](https://www.youtube.com/watch?v=4nax86sau6k&t=4919) And let's see the insecure command.

- [01:22:02](https://www.youtube.com/watch?v=4nax86sau6k&t=4922) Ok here.

- [01:22:04](https://www.youtube.com/watch?v=4nax86sau6k&t=4924) And this is the executed command and it has deleted all the records.

- [01:22:09](https://www.youtube.com/watch?v=4nax86sau6k&t=4929) Now when I select, as usual, you see nothing.

- [01:22:15](https://www.youtube.com/watch?v=4nax86sau6k&t=4935) Let's insert some random.

- [01:22:17](https://www.youtube.com/watch?v=4nax86sau6k&t=4937) And when I execute this, you see this is a select command.

- [01:22:20](https://www.youtube.com/watch?v=4nax86sau6k&t=4940) However, it is getting ended here.

- [01:22:23](https://www.youtube.com/watch?v=4nax86sau6k&t=4943) Now the second command starts and it deletes all the students.

- [01:22:27](https://www.youtube.com/watch?v=4nax86sau6k&t=4947) When I run, you see it has executed and all records are deleted.

- [01:22:35](https://www.youtube.com/watch?v=4nax86sau6k&t=4955) You see 11,442 rows affected, deleted.

- [01:22:39](https://www.youtube.com/watch?v=4nax86sau6k&t=4959) We are still adding new records.

- [01:22:43](https://www.youtube.com/watch?v=4nax86sau6k&t=4963) However, when it is executed as on.

- [01:22:48](https://www.youtube.com/watch?v=4nax86sau6k&t=4968) Let's do it.

- [01:22:53](https://www.youtube.com/watch?v=4nax86sau6k&t=4973) Ok.

- [01:22:56](https://www.youtube.com/watch?v=4nax86sau6k&t=4976) Ok secure.

- [01:23:02](https://www.youtube.com/watch?v=4nax86sau6k&t=4982) Ok and it will come here.

- [01:23:05](https://www.youtube.com/watch?v=4nax86sau6k&t=4985) Oh, currently our insertion is getting executed and listed on here.

- [01:23:14](https://www.youtube.com/watch?v=4nax86sau6k&t=4994) Ok now it is ended.

- [01:23:16](https://www.youtube.com/watch?v=4nax86sau6k&t=4996) It has.

- [01:23:17](https://www.youtube.com/watch?v=4nax86sau6k&t=4997) Ok now we can find.

- [01:23:20](https://www.youtube.com/watch?v=4nax86sau6k&t=5000) Here.

- [01:23:21](https://www.youtube.com/watch?v=4nax86sau6k&t=5001) However, when we execute the query like this, this is the secure way of execution.

- [01:23:28](https://www.youtube.com/watch?v=4nax86sau6k&t=5008) You see it uses execute SQL and it is same at the other one.

- [01:23:37](https://www.youtube.com/watch?v=4nax86sau6k&t=5017) I don't know.

- [01:23:38](https://www.youtube.com/watch?v=4nax86sau6k&t=5018) Anyway, when I execute it, when I click messages, you see nothing.

- [01:23:41](https://www.youtube.com/watch?v=4nax86sau6k&t=5021) No rows affected.

- [01:23:42](https://www.youtube.com/watch?v=4nax86sau6k&t=5022) However, when we execute the other one, which is insecure command.

- [01:23:50](https://www.youtube.com/watch?v=4nax86sau6k&t=5030) Therefore open to SQL injection attacks.

- [01:23:53](https://www.youtube.com/watch?v=4nax86sau6k&t=5033) You see all rows are deleted.

- [01:23:57](https://www.youtube.com/watch?v=4nax86sau6k&t=5037) So this is what about what is about being parameterized queries and not.

- [01:24:03](https://www.youtube.com/watch?v=4nax86sau6k&t=5043) Now, of course, it would be extremely inefficient.

- [01:24:10](https://www.youtube.com/watch?v=4nax86sau6k&t=5050) Incorrect to write everywhere where we are going to do queries like this.

- [01:24:16](https://www.youtube.com/watch?v=4nax86sau6k&t=5056) You can also imagine that.

- [01:24:19](https://www.youtube.com/watch?v=4nax86sau6k&t=5059) So we have to convert this into a method call like we did.

- [01:24:26](https://www.youtube.com/watch?v=4nax86sau6k&t=5066) Now it is the time to do that.

- [01:24:30](https://www.youtube.com/watch?v=4nax86sau6k&t=5070) Convert shin.

- [01:24:31](https://www.youtube.com/watch?v=4nax86sau6k&t=5071) So let's start with select data table.

- [01:24:35](https://www.youtube.com/watch?v=4nax86sau6k&t=5075) OK, here.

- [01:24:37](https://www.youtube.com/watch?v=4nax86sau6k&t=5077) However, there will be a difference.

- [01:24:42](https://www.youtube.com/watch?v=4nax86sau6k&t=5082) What will be the difference?

- [01:24:44](https://www.youtube.com/watch?v=4nax86sau6k&t=5084) It will be this time.

- [01:24:48](https://www.youtube.com/watch?v=4nax86sau6k&t=5088) DB select.

- [01:24:49](https://www.youtube.com/watch?v=4nax86sau6k&t=5089) Let's name as.

- [01:24:51](https://www.youtube.com/watch?v=4nax86sau6k&t=5091) DB parameterized.

- [01:24:52](https://www.youtube.com/watch?v=4nax86sau6k&t=5092) OK, let's call it as parameterized select.

- [01:24:57](https://www.youtube.com/watch?v=4nax86sau6k&t=5097) Now, obviously, we cannot execute this with just query and commit self.

- [01:25:06](https://www.youtube.com/watch?v=4nax86sau6k&t=5106) False.

- [01:25:07](https://www.youtube.com/watch?v=4nax86sau6k&t=5107) By the way, what is commit?

- [01:25:08](https://www.youtube.com/watch?v=4nax86sau6k&t=5108) If you wonder, this means that select everything without locking the table.

- [01:25:17](https://www.youtube.com/watch?v=4nax86sau6k&t=5117) So this is about extra performance.

- [01:25:20](https://www.youtube.com/watch?v=4nax86sau6k&t=5120) You don't need to think about that, but you can search at home.

- [01:25:28](https://www.youtube.com/watch?v=4nax86sau6k&t=5128) This is used.

- [01:25:29](https://www.youtube.com/watch?v=4nax86sau6k&t=5129) I use this to select tables that don't change or the data update is not important.

- [01:25:37](https://www.youtube.com/watch?v=4nax86sau6k&t=5137) So don't get confused with that.

- [01:25:39](https://www.youtube.com/watch?v=4nax86sau6k&t=5139) I am just leaving it.

- [01:25:40](https://www.youtube.com/watch?v=4nax86sau6k&t=5140) You can search for it at the home.

- [01:25:43](https://www.youtube.com/watch?v=4nax86sau6k&t=5143) OK, so what else we need?

- [01:25:46](https://www.youtube.com/watch?v=4nax86sau6k&t=5146) We need to provide our objects and their parameter names.

- [01:25:52](https://www.youtube.com/watch?v=4nax86sau6k&t=5152) OK, so to do that, I will compose a public class.

- [01:26:00](https://www.youtube.com/watch?v=4nax86sau6k&t=5160) Parameterize it.

- [01:26:03](https://www.youtube.com/watch?v=4nax86sau6k&t=5163) Query something like this.

- [01:26:08](https://www.youtube.com/watch?v=4nax86sau6k&t=5168) Inside that we will have some properties.

- [01:26:11](https://www.youtube.com/watch?v=4nax86sau6k&t=5171) OK, what kind of properties we are going to need or what we are going to hold?

- [01:26:24](https://www.youtube.com/watch?v=4nax86sau6k&t=5184) We will have the parameter name, the parameter database type, and the parameter value.

- [01:26:32](https://www.youtube.com/watch?v=4nax86sau6k&t=5192) OK, so we will have three objects.

- [01:26:36](https://www.youtube.com/watch?v=4nax86sau6k&t=5196) OK, so parameterized query object, let's call this something like this.

- [01:26:42](https://www.youtube.com/watch?v=4nax86sau6k&t=5202) And the first one will be the parameter name.

- [01:26:47](https://www.youtube.com/watch?v=4nax86sau6k&t=5207) OK, string.

- [01:26:50](https://www.youtube.com/watch?v=4nax86sau6k&t=5210) OK, the second one will be the database type, so it will be SQL DB type.

- [01:27:03](https://www.youtube.com/watch?v=4nax86sau6k&t=5223) You see specified SQL server specific data type, field, property, whatever.

- [01:27:12](https://www.youtube.com/watch?v=4nax86sau6k&t=5232) Let's say type of parameter.

- [01:27:16](https://www.youtube.com/watch?v=4nax86sau6k&t=5236) OK, and I wonder if we can make this as like this.

- [01:27:25](https://www.youtube.com/watch?v=4nax86sau6k&t=5245) Yeah, it also supports as a property.

- [01:27:29](https://www.youtube.com/watch?v=4nax86sau6k&t=5249) Then we will have object.

- [01:27:32](https://www.youtube.com/watch?v=4nax86sau6k&t=5252) And the value of parameter.

- [01:27:40](https://www.youtube.com/watch?v=4nax86sau6k&t=5260) OK, now we will take query or we can also make it something like.

- [01:27:55](https://www.youtube.com/watch?v=4nax86sau6k&t=5275) A single class, so let's make it a single class public class.

- [01:28:02](https://www.youtube.com/watch?v=4nax86sau6k&t=5282) Parameterized query.

- [01:28:06](https://www.youtube.com/watch?v=4nax86sau6k&t=5286) And it will have public list.

- [01:28:12](https://www.youtube.com/watch?v=4nax86sau6k&t=5292) Parameterized query objects.

- [01:28:26](https://www.youtube.com/watch?v=4nax86sau6k&t=5306) And it will have string as our query.

- [01:28:31](https://www.youtube.com/watch?v=4nax86sau6k&t=5311) OK, so we will just get a parameter parameterized query instance.

- [01:28:39](https://www.youtube.com/watch?v=4nax86sau6k&t=5319) Let's say query object, whatever the name you want.

- [01:28:44](https://www.youtube.com/watch?v=4nax86sau6k&t=5324) OK, now now we are going to move this code into the other code.

- [01:28:52](https://www.youtube.com/watch?v=4nax86sau6k&t=5332) OK, we are going to use a data table because we will return a data table.

- [01:28:58](https://www.youtube.com/watch?v=4nax86sau6k&t=5338) We will open connection.

- [01:29:00](https://www.youtube.com/watch?v=4nax86sau6k&t=5340) We will use command.

- [01:29:02](https://www.youtube.com/watch?v=4nax86sau6k&t=5342) OK, now we are going to add command parameters.

- [01:29:05](https://www.youtube.com/watch?v=4nax86sau6k&t=5345) How?

- [01:29:06](https://www.youtube.com/watch?v=4nax86sau6k&t=5346) The command text will be the query here.

- [01:29:15](https://www.youtube.com/watch?v=4nax86sau6k&t=5355) Connection will be set like this.

- [01:29:18](https://www.youtube.com/watch?v=4nax86sau6k&t=5358) And now we will do a for each iteration.

- [01:29:22](https://www.youtube.com/watch?v=4nax86sau6k&t=5362) And guess what?

- [01:29:24](https://www.youtube.com/watch?v=4nax86sau6k&t=5364) It will be in the list inside query object here.

- [01:29:29](https://www.youtube.com/watch?v=4nax86sau6k&t=5369) List of parameters and each will be.

- [01:29:33](https://www.youtube.com/watch?v=4nax86sau6k&t=5373) OK.

- [01:29:34](https://www.youtube.com/watch?v=4nax86sau6k&t=5374) Your object, it is fine.

- [01:29:39](https://www.youtube.com/watch?v=4nax86sau6k&t=5379) And here we will use the same.

- [01:29:42](https://www.youtube.com/watch?v=4nax86sau6k&t=5382) So the parameters name will be.

- [01:29:47](https://www.youtube.com/watch?v=4nax86sau6k&t=5387) We are object dot parameter name.

- [01:29:51](https://www.youtube.com/watch?v=4nax86sau6k&t=5391) And then the type, we are object dot type of parameter.

- [01:29:57](https://www.youtube.com/watch?v=4nax86sau6k&t=5397) And the value will be equal to your object dot value of parameter.

- [01:30:04](https://www.youtube.com/watch?v=4nax86sau6k&t=5404) OK, and we will build the adapter and return to results.

- [01:30:14](https://www.youtube.com/watch?v=4nax86sau6k&t=5414) We should also put this inside a try catch block because when you are working with data.

- [01:30:21](https://www.youtube.com/watch?v=4nax86sau6k&t=5421) Base connections, there can be always some errors that you may not catch.

- [01:30:30](https://www.youtube.com/watch?v=4nax86sau6k&t=5430) And here we will return.

- [01:30:35](https://www.youtube.com/watch?v=4nax86sau6k&t=5435) And here we will just look whatever you want.

- [01:30:38](https://www.youtube.com/watch?v=4nax86sau6k&t=5438) OK, so our parameterized query is ready now.

- [01:30:45](https://www.youtube.com/watch?v=4nax86sau6k&t=5445) I will write this method with lesser code.

- [01:30:51](https://www.youtube.com/watch?v=4nax86sau6k&t=5451) Let's name this as improved or version two.

- [01:30:56](https://www.youtube.com/watch?v=4nax86sau6k&t=5456) OK, now you will see how much simpler it will be.

- [01:31:02](https://www.youtube.com/watch?v=4nax86sau6k&t=5462) So we will compose an instance of parameterized query.

- [01:31:08](https://www.youtube.com/watch?v=4nax86sau6k&t=5468) Paramquery equal to new paramquery.

- [01:31:14](https://www.youtube.com/watch?v=4nax86sau6k&t=5474) And how many parameters we have?

- [01:31:17](https://www.youtube.com/watch?v=4nax86sau6k&t=5477) We have only one parameter.

- [01:31:21](https://www.youtube.com/watch?v=4nax86sau6k&t=5481) So paramquery and the query will be here.

- [01:31:29](https://www.youtube.com/watch?v=4nax86sau6k&t=5489) And now let's compose parameters query object.

- [01:31:35](https://www.youtube.com/watch?v=4nax86sau6k&t=5495) Our object equal to new parameterized query object and here we can define them like this.

- [01:31:44](https://www.youtube.com/watch?v=4nax86sau6k&t=5504) So the first will be parameter name equal to this one.

- [01:31:49](https://www.youtube.com/watch?v=4nax86sau6k&t=5509) OK, and then type of parameter equal to.

- [01:31:56](https://www.youtube.com/watch?v=4nax86sau6k&t=5516) You see IntelliSense is automatically filling the available or most probable options.

- [01:32:05](https://www.youtube.com/watch?v=4nax86sau6k&t=5525) It will be student name is white character.

- [01:32:11](https://www.youtube.com/watch?v=4nax86sau6k&t=5531) And then value of parameter will be equal to txt student name text.

- [01:32:21](https://www.youtube.com/watch?v=4nax86sau6k&t=5541) However, plus like I mean the white character.

- [01:32:29](https://www.youtube.com/watch?v=4nax86sau6k&t=5549) And then we will add this into.

- [01:32:36](https://www.youtube.com/watch?v=4nax86sau6k&t=5556) OK, we don't put here.

- [01:32:39](https://www.youtube.com/watch?v=4nax86sau6k&t=5559) We will add this to into our paramquery here.

- [01:32:42](https://www.youtube.com/watch?v=4nax86sau6k&t=5562) And this two parameters add and we are object.

- [01:32:49](https://www.youtube.com/watch?v=4nax86sau6k&t=5569) And then we will just make this dt result equal to dv connection.

- [01:32:55](https://www.youtube.com/watch?v=4nax86sau6k&t=5575) Or let's I think we have added that as a static class reference here.

- [01:33:02](https://www.youtube.com/watch?v=4nax86sau6k&t=5582) You see.

- [01:33:03](https://www.youtube.com/watch?v=4nax86sau6k&t=5583) Therefore, I can directly access the methods and fields properties inside that.

- [01:33:11](https://www.youtube.com/watch?v=4nax86sau6k&t=5591) So it will be dv parameterized select.

- [01:33:16](https://www.youtube.com/watch?v=4nax86sau6k&t=5596) It will take only the query object.

- [01:33:20](https://www.youtube.com/watch?v=4nax86sau6k&t=5600) Nothing else, which is here.

- [01:33:25](https://www.youtube.com/watch?v=4nax86sau6k&t=5605) And OK, we are done for now.

- [01:33:33](https://www.youtube.com/watch?v=4nax86sau6k&t=5613) Our method call is ready.

- [01:33:35](https://www.youtube.com/watch?v=4nax86sau6k&t=5615) So you see how many lines of code this is.

- [01:33:38](https://www.youtube.com/watch?v=4nax86sau6k&t=5618) It is around 16 17 lines.

- [01:33:41](https://www.youtube.com/watch?v=4nax86sau6k&t=5621) And how many lines of code this is.

- [01:33:45](https://www.youtube.com/watch?v=4nax86sau6k&t=5625) And this is around 22.

- [01:33:50](https://www.youtube.com/watch?v=4nax86sau6k&t=5630) So you see there aren't that many difference.

- [01:33:53](https://www.youtube.com/watch?v=4nax86sau6k&t=5633) However, there is one great difference now that we are able to modify our database connection

- [01:34:03](https://www.youtube.com/watch?v=4nax86sau6k&t=5643) here.

- [01:34:04](https://www.youtube.com/watch?v=4nax86sau6k&t=5644) I mean the method here and it will be effective immediately at everywhere.

- [01:34:12](https://www.youtube.com/watch?v=4nax86sau6k&t=5652) However, if we were writing each time like this, then we would be changed the code everywhere

- [01:34:20](https://www.youtube.com/watch?v=4nax86sau6k&t=5660) that we have used.

- [01:34:22](https://www.youtube.com/watch?v=4nax86sau6k&t=5662) But in this case, it is much more simpler.

- [01:34:26](https://www.youtube.com/watch?v=4nax86sau6k&t=5666) Also, I could write this as a single line as well.

- [01:34:30](https://www.youtube.com/watch?v=4nax86sau6k&t=5670) It is totally possible.

- [01:34:31](https://www.youtube.com/watch?v=4nax86sau6k&t=5671) It's up to you.

- [01:34:33](https://www.youtube.com/watch?v=4nax86sau6k&t=5673) So this is the method approach methodology that you have to follow.

- [01:34:40](https://www.youtube.com/watch?v=4nax86sau6k&t=5680) In your final project, I am expecting you to write your code such as this.

- [01:34:45](https://www.youtube.com/watch?v=4nax86sau6k&t=5685) Wherever possible, write a method and prevent duplicate code, prevent copy paste of code.

- [01:34:56](https://www.youtube.com/watch?v=4nax86sau6k&t=5696) OK, so this is what you should do now.

- [01:35:00](https://www.youtube.com/watch?v=4nax86sau6k&t=5700) So instead of version one, we will call version two and see whether if it is working or not.

- [01:35:19](https://www.youtube.com/watch?v=4nax86sau6k&t=5719) OK.

- [01:35:31](https://www.youtube.com/watch?v=4nax86sau6k&t=5731) I think we have none right now.

- [01:35:35](https://www.youtube.com/watch?v=4nax86sau6k&t=5735) Let's add some records.

- [01:35:38](https://www.youtube.com/watch?v=4nax86sau6k&t=5738) There is some problem.

- [01:36:13](https://www.youtube.com/watch?v=4nax86sau6k&t=5773) Let's see what could be the problem here.

- [01:36:19](https://www.youtube.com/watch?v=4nax86sau6k&t=5779) OK.

- [01:36:23](https://www.youtube.com/watch?v=4nax86sau6k&t=5783) We have set the query.

- [01:36:25](https://www.youtube.com/watch?v=4nax86sau6k&t=5785) We have set parameter name, type of parameter, value of parameter.

- [01:36:31](https://www.youtube.com/watch?v=4nax86sau6k&t=5791) Oh, this is the incorrect text.

- [01:36:33](https://www.youtube.com/watch?v=4nax86sau6k&t=5793) We have to use the txt student name that is y.

- [01:36:52](https://www.youtube.com/watch?v=4nax86sau6k&t=5812) We had provided incorrect text box name.

- [01:36:55](https://www.youtube.com/watch?v=4nax86sau6k&t=5815) OK.

- [01:36:56](https://www.youtube.com/watch?v=4nax86sau6k&t=5816) Now it is working as expected.

- [01:37:02](https://www.youtube.com/watch?v=4nax86sau6k&t=5822) It is totally secure.

- [01:37:04](https://www.youtube.com/watch?v=4nax86sau6k&t=5824) For example, let's end it here.

- [01:37:10](https://www.youtube.com/watch?v=4nax86sau6k&t=5830) This.

- [01:37:12](https://www.youtube.com/watch?v=4nax86sau6k&t=5832) Yeah, nothing has happened.

- [01:37:15](https://www.youtube.com/watch?v=4nax86sau6k&t=5835) You can see that.

- [01:37:17](https://www.youtube.com/watch?v=4nax86sau6k&t=5837) OK.

- [01:37:18](https://www.youtube.com/watch?v=4nax86sau6k&t=5838) So we have done the select query.

- [01:37:24](https://www.youtube.com/watch?v=4nax86sau6k&t=5844) What about update?

- [01:37:29](https://www.youtube.com/watch?v=4nax86sau6k&t=5849) Updates are not much different.

- [01:37:34](https://www.youtube.com/watch?v=4nax86sau6k&t=5854) So let's compose update query as well.

- [01:37:40](https://www.youtube.com/watch?v=4nax86sau6k&t=5860) OK.

- [01:37:41](https://www.youtube.com/watch?v=4nax86sau6k&t=5861) Here I will use parameterize its update.

- [01:37:51](https://www.youtube.com/watch?v=4nax86sau6k&t=5871) OK.

- [01:37:53](https://www.youtube.com/watch?v=4nax86sau6k&t=5873) And it will take same object.

- [01:37:55](https://www.youtube.com/watch?v=4nax86sau6k&t=5875) This time we won't need data table because we won't return anything.

- [01:38:00](https://www.youtube.com/watch?v=4nax86sau6k&t=5880) And here now we will do execute non-query.

- [01:38:08](https://www.youtube.com/watch?v=4nax86sau6k&t=5888) OK.

- [01:38:09](https://www.youtube.com/watch?v=4nax86sau6k&t=5889) So there are several options.

- [01:38:11](https://www.youtube.com/watch?v=4nax86sau6k&t=5891) Execute non-query asynchronous, execute reader, execute reader asynchronous and execute secular.

- [01:38:20](https://www.youtube.com/watch?v=4nax86sau6k&t=5900) Execute the query and returns the first column of the first row in the result set returned

- [01:38:25](https://www.youtube.com/watch?v=4nax86sau6k&t=5905) by the query.

- [01:38:27](https://www.youtube.com/watch?v=4nax86sau6k&t=5907) Additional columns or rows are ignored.

- [01:38:30](https://www.youtube.com/watch?v=4nax86sau6k&t=5910) So execute the query returns the first column of the first row.

- [01:38:34](https://www.youtube.com/watch?v=4nax86sau6k&t=5914) OK.

- [01:38:35](https://www.youtube.com/watch?v=4nax86sau6k&t=5915) So this is just for returning single result of the single column.

- [01:38:40](https://www.youtube.com/watch?v=4nax86sau6k&t=5920) And also, there are some other execute options.

- [01:38:43](https://www.youtube.com/watch?v=4nax86sau6k&t=5923) So we just need execute non-query.

- [01:38:47](https://www.youtube.com/watch?v=4nax86sau6k&t=5927) And we can use this for update, delete, insert, update, delete or insert.

- [01:38:56](https://www.youtube.com/watch?v=4nax86sau6k&t=5936) So let's we can also return integers for number of affected rows.

- [01:39:06](https://www.youtube.com/watch?v=4nax86sau6k&t=5946) So it will return integers like this.

- [01:39:09](https://www.youtube.com/watch?v=4nax86sau6k&t=5949) OK.

- [01:39:10](https://www.youtube.com/watch?v=4nax86sau6k&t=5950) And if an exception occurs, return minus one.

- [01:39:15](https://www.youtube.com/watch?v=4nax86sau6k&t=5955) OK.

- [01:39:16](https://www.youtube.com/watch?v=4nax86sau6k&t=5956) So minus one is not possible.

- [01:39:18](https://www.youtube.com/watch?v=4nax86sau6k&t=5958) Why?

- [01:39:19](https://www.youtube.com/watch?v=4nax86sau6k&t=5959) Because it can be either zero, no rows affected or positive.

- [01:39:23](https://www.youtube.com/watch?v=4nax86sau6k&t=5963) So minus one means that an error occurred in our query.

- [01:39:30](https://www.youtube.com/watch?v=4nax86sau6k&t=5970) So let's add a button to update all the student names in our database here.

- [01:39:49](https://www.youtube.com/watch?v=4nax86sau6k&t=5989) OK, so let's name it as secure updates.

- [01:40:09](https://www.youtube.com/watch?v=4nax86sau6k&t=6009) OK.

- [01:40:12](https://www.youtube.com/watch?v=4nax86sau6k&t=6012) Secure updates.

- [01:40:19](https://www.youtube.com/watch?v=4nax86sau6k&t=6019) OK.

- [01:40:22](https://www.youtube.com/watch?v=4nax86sau6k&t=6022) So you see the size is different.

- [01:40:26](https://www.youtube.com/watch?v=4nax86sau6k&t=6026) So let's how can we make it.

- [01:40:42](https://www.youtube.com/watch?v=4nax86sau6k&t=6042) Edit this.

- [01:40:46](https://www.youtube.com/watch?v=4nax86sau6k&t=6046) Interesting.

- [01:40:49](https://www.youtube.com/watch?v=4nax86sau6k&t=6049) Why they are getting same time?

- [01:41:02](https://www.youtube.com/watch?v=4nax86sau6k&t=6062) Top item, top item.

- [01:41:11](https://www.youtube.com/watch?v=4nax86sau6k&t=6071) OK, top control margin.

- [01:41:14](https://www.youtube.com/watch?v=4nax86sau6k&t=6074) Yeah, that is the error.

- [01:41:16](https://www.youtube.com/watch?v=4nax86sau6k&t=6076) Let's remove it.

- [01:41:18](https://www.youtube.com/watch?v=4nax86sau6k&t=6078) OK.

- [01:41:20](https://www.youtube.com/watch?v=4nax86sau6k&t=6080) So you see you can also, when you define things with margin, they are automatically getting

- [01:41:26](https://www.youtube.com/watch?v=4nax86sau6k&t=6086) scaled according to your screen size or other objects, elements, whatever.

- [01:41:33](https://www.youtube.com/watch?v=4nax86sau6k&t=6093) OK.

- [01:41:34](https://www.youtube.com/watch?v=4nax86sau6k&t=6094) So let's move them here.

- [01:41:38](https://www.youtube.com/watch?v=4nax86sau6k&t=6098) I don't show you much about interface design because it is something that you can or let's

- [01:41:48](https://www.youtube.com/watch?v=4nax86sau6k&t=6108) say you should learn yourself.

- [01:41:50](https://www.youtube.com/watch?v=4nax86sau6k&t=6110) The design is more related to your skills and I don't have much design skills.

- [01:42:03](https://www.youtube.com/watch?v=4nax86sau6k&t=6123) So therefore, it is something that you have to work and improve yourself.

- [01:42:06](https://www.youtube.com/watch?v=4nax86sau6k&t=6126) OK, so what this button going to do is it will just simply update all the student names

- [01:42:13](https://www.youtube.com/watch?v=4nax86sau6k&t=6133) such as data where students set student name equal to.

- [01:42:20](https://www.youtube.com/watch?v=4nax86sau6k&t=6140) OK, let's say a plus student name.

- [01:42:27](https://www.youtube.com/watch?v=4nax86sau6k&t=6147) And then we can also add where query but I won't edit right now.

- [01:42:32](https://www.youtube.com/watch?v=4nax86sau6k&t=6152) Always make it something like this so we can append where query as well.

- [01:42:38](https://www.youtube.com/watch?v=4nax86sau6k&t=6158) OK.

- [01:42:40](https://www.youtube.com/watch?v=4nax86sau6k&t=6160) So it will be something like this.

- [01:42:43](https://www.youtube.com/watch?v=4nax86sau6k&t=6163) So let's copy and paste this code.

- [01:42:50](https://www.youtube.com/watch?v=4nax86sau6k&t=6170) Parameterized query here are query.

- [01:42:57](https://www.youtube.com/watch?v=4nax86sau6k&t=6177) So what we are going to do is we will append a text here.

- [01:43:05](https://www.youtube.com/watch?v=4nax86sau6k&t=6185) And let's say name or addition.

- [01:43:11](https://www.youtube.com/watch?v=4nax86sau6k&t=6191) OK, and here addition and there won't be this.

- [01:43:17](https://www.youtube.com/watch?v=4nax86sau6k&t=6197) Parameters are added and finally parameters are updated at insert.

- [01:43:25](https://www.youtube.com/watch?v=4nax86sau6k&t=6205) With this and it will return a number of rows affected.

- [01:43:38](https://www.youtube.com/watch?v=4nax86sau6k&t=6218) And we can show that as a message box.

- [01:43:56](https://www.youtube.com/watch?v=4nax86sau6k&t=6236) Plus.

- [01:43:58](https://www.youtube.com/watch?v=4nax86sau6k&t=6238) OK, so this is how you do update, delete or insert as parameterized query and.

- [01:44:09](https://www.youtube.com/watch?v=4nax86sau6k&t=6249) When you are inserting users values into database.

- [01:44:18](https://www.youtube.com/watch?v=4nax86sau6k&t=6258) You should always use this approach.

- [01:44:23](https://www.youtube.com/watch?v=4nax86sau6k&t=6263) Otherwise your system will be vulnerable to SQL injection.

- [01:44:32](https://www.youtube.com/watch?v=4nax86sau6k&t=6272) So let's list the students.

- [01:44:34](https://www.youtube.com/watch?v=4nax86sau6k&t=6274) It will list everything and now let's add.

- [01:44:40](https://www.youtube.com/watch?v=4nax86sau6k&t=6280) Toros to beginning of their name such as this.

- [01:44:45](https://www.youtube.com/watch?v=4nax86sau6k&t=6285) So when I click secure update, it will update all the rows.

- [01:44:48](https://www.youtube.com/watch?v=4nax86sau6k&t=6288) OK, you see 50,000 rows updated and now released.

- [01:44:54](https://www.youtube.com/watch?v=4nax86sau6k&t=6294) Now, OK, you see.

- [01:45:00](https://www.youtube.com/watch?v=4nax86sau6k&t=6300) The Toros is added to their name, appended to end of their name.

- [01:45:05](https://www.youtube.com/watch?v=4nax86sau6k&t=6305) OK, like here.

- [01:45:07](https://www.youtube.com/watch?v=4nax86sau6k&t=6307) As you can see.

- [01:45:12](https://www.youtube.com/watch?v=4nax86sau6k&t=6312) And we can also verify that from here.

- [01:45:15](https://www.youtube.com/watch?v=4nax86sau6k&t=6315) You see the name now appended like this.

- [01:45:19](https://www.youtube.com/watch?v=4nax86sau6k&t=6319) So this was the secure update and let's take the notes of lecture four.

- [01:45:36](https://www.youtube.com/watch?v=4nax86sau6k&t=6336) OK.

- [01:45:38](https://www.youtube.com/watch?v=4nax86sau6k&t=6338) All right.

- [01:45:43](https://www.youtube.com/watch?v=4nax86sau6k&t=6343) So.

- [01:45:46](https://www.youtube.com/watch?v=4nax86sau6k&t=6346) What we have seen so far is.

- [01:45:57](https://www.youtube.com/watch?v=4nax86sau6k&t=6357) How to use a task factory to start new tasks for multi-threaded programming and responsive

- [01:46:19](https://www.youtube.com/watch?v=4nax86sau6k&t=6379) user interface.

- [01:46:22](https://www.youtube.com/watch?v=4nax86sau6k&t=6382) Designed OK.

- [01:46:24](https://www.youtube.com/watch?v=4nax86sau6k&t=6384) And how.

- [01:46:27](https://www.youtube.com/watch?v=4nax86sau6k&t=6387) To access elements of different threads such as accessing.

- [01:46:41](https://www.youtube.com/watch?v=4nax86sau6k&t=6401) Textbox.

- [01:46:43](https://www.youtube.com/watch?v=4nax86sau6k&t=6403) From sub threads started by.

- [01:46:50](https://www.youtube.com/watch?v=4nax86sau6k&t=6410) Started as a task, OK.

- [01:47:00](https://www.youtube.com/watch?v=4nax86sau6k&t=6420) All right, what else we have seen.

- [01:47:16](https://www.youtube.com/watch?v=4nax86sau6k&t=6436) OK, how to properly convert code blocks into methods to prevent duplicate and copy paste

- [01:47:36](https://www.youtube.com/watch?v=4nax86sau6k&t=6456) code programming.

- [01:47:38](https://www.youtube.com/watch?v=4nax86sau6k&t=6458) OK, and when does fields properties.

- [01:47:44](https://www.youtube.com/watch?v=4nax86sau6k&t=6464) Classes of static.

- [01:47:47](https://www.youtube.com/watch?v=4nax86sau6k&t=6467) Classes are initialized.

- [01:47:50](https://www.youtube.com/watch?v=4nax86sau6k&t=6470) How to call constructor of a static class and when it is initialized.

- [01:48:03](https://www.youtube.com/watch?v=4nax86sau6k&t=6483) OK.

- [01:48:05](https://www.youtube.com/watch?v=4nax86sau6k&t=6485) And what else there is.

- [01:48:08](https://www.youtube.com/watch?v=4nax86sau6k&t=6488) What is SQL injection and how to prevent it with parameterized queries.

- [01:48:18](https://www.youtube.com/watch?v=4nax86sau6k&t=6498) How to write.

- [01:48:22](https://www.youtube.com/watch?v=4nax86sau6k&t=6502) Parameterized queries in C sharp or SQL server.

- [01:48:30](https://www.youtube.com/watch?v=4nax86sau6k&t=6510) How to properly construct a database class.

- [01:48:39](https://www.youtube.com/watch?v=4nax86sau6k&t=6519) How to handle all database operations.

- [01:48:51](https://www.youtube.com/watch?v=4nax86sau6k&t=6531) With both run queries and parameterized queries, OK.

- [01:49:14](https://www.youtube.com/watch?v=4nax86sau6k&t=6554) All right, what else there is.

- [01:49:29](https://www.youtube.com/watch?v=4nax86sau6k&t=6569) OK, dispatcher begin invoke.

- [01:49:40](https://www.youtube.com/watch?v=4nax86sau6k&t=6580) Dispatcher invoke, OK.

- [01:49:48](https://www.youtube.com/watch?v=4nax86sau6k&t=6588) OK, then using statements.

- [01:50:00](https://www.youtube.com/watch?v=4nax86sau6k&t=6600) OK, let's see the duration, OK, so we are about close to two hours.

- [01:50:21](https://www.youtube.com/watch?v=4nax86sau6k&t=6621) And let's see.

- [01:50:23](https://www.youtube.com/watch?v=4nax86sau6k&t=6623) From lecture three context.

- [01:50:30](https://www.youtube.com/watch?v=4nax86sau6k&t=6630) OK, we have shown this.

- [01:50:34](https://www.youtube.com/watch?v=4nax86sau6k&t=6634) We have shown this at delete button as update.

- [01:50:42](https://www.youtube.com/watch?v=4nax86sau6k&t=6642) OK, so.

- [01:50:44](https://www.youtube.com/watch?v=4nax86sau6k&t=6644) Yeah, we have shown how to update with.

- [01:50:50](https://www.youtube.com/watch?v=4nax86sau6k&t=6650) Parameterized query, but we can also delete the records with non parameterized query as

- [01:50:57](https://www.youtube.com/watch?v=4nax86sau6k&t=6657) well.

- [01:51:00](https://www.youtube.com/watch?v=4nax86sau6k&t=6660) So let me add that to.

- [01:51:06](https://www.youtube.com/watch?v=4nax86sau6k&t=6666) OK, delete record by ID unsafe insecure.

- [01:51:14](https://www.youtube.com/watch?v=4nax86sau6k&t=6674) Sometimes you want to write code quickly and if you are not using any input from the user

- [01:51:27](https://www.youtube.com/watch?v=4nax86sau6k&t=6687) client side, then you can write your.

- [01:51:29](https://www.youtube.com/watch?v=4nax86sau6k&t=6689) You can use raw queries.

- [01:51:32](https://www.youtube.com/watch?v=4nax86sau6k&t=6692) OK, so the parameterized queries are important when you are handling unsanitized data.

- [01:51:39](https://www.youtube.com/watch?v=4nax86sau6k&t=6699) When you are writing your own query, your selects, your updates, your deletes, and there

- [01:51:46](https://www.youtube.com/watch?v=4nax86sau6k&t=6706) is no possible way of exploitation, then you can use direct SQL queries, direct raw queries.

- [01:51:59](https://www.youtube.com/watch?v=4nax86sau6k&t=6719) OK, and.

- [01:52:03](https://www.youtube.com/watch?v=4nax86sau6k&t=6723) So.

- [01:52:04](https://www.youtube.com/watch?v=4nax86sau6k&t=6724) This will be delete, unsecure, and it will simply.

- [01:52:08](https://www.youtube.com/watch?v=4nax86sau6k&t=6728) Delete record something like this, let me show you.

- [01:52:15](https://www.youtube.com/watch?v=4nax86sau6k&t=6735) So it was something like this.

- [01:52:26](https://www.youtube.com/watch?v=4nax86sau6k&t=6746) OK, here.

- [01:52:31](https://www.youtube.com/watch?v=4nax86sau6k&t=6751) OK, let's change the name of this method.

- [01:52:36](https://www.youtube.com/watch?v=4nax86sau6k&t=6756) So to keep them as same DB update direct insert: when you change your method, you can.

- [01:52:45](https://www.youtube.com/watch?v=4nax86sau6k&t=6765) Click rename and it will rename all the references you see.

- [01:52:49](https://www.youtube.com/watch?v=4nax86sau6k&t=6769) Currently, we have only single reference we have.

- [01:52:51](https://www.youtube.com/watch?v=4nax86sau6k&t=6771) Now we are going to have the other reference as well.

- [01:52:57](https://www.youtube.com/watch?v=4nax86sau6k&t=6777) It will be here.

- [01:53:00](https://www.youtube.com/watch?v=4nax86sau6k&t=6780) And the query will be simply.

- [01:53:04](https://www.youtube.com/watch?v=4nax86sau6k&t=6784) OK, first write the query in your server management studio.

- [01:53:12](https://www.youtube.com/watch?v=4nax86sau6k&t=6792) Where ID equal to.

- [01:53:18](https://www.youtube.com/watch?v=4nax86sau6k&t=6798) OK, so this is our query.

- [01:53:22](https://www.youtube.com/watch?v=4nax86sau6k&t=6802) And here you will take it from TXT user.

- [01:53:28](https://www.youtube.com/watch?v=4nax86sau6k&t=6808) Student name text.

- [01:53:29](https://www.youtube.com/watch?v=4nax86sau6k&t=6809) OK, so this is totally unsafe.

- [01:53:31](https://www.youtube.com/watch?v=4nax86sau6k&t=6811) However.

- [01:53:32](https://www.youtube.com/watch?v=4nax86sau6k&t=6812) I just want to show you how to do it as well.

- [01:53:46](https://www.youtube.com/watch?v=4nax86sau6k&t=6826) Since we don't have any, we don't have any unique identified of students in our database

- [01:53:53](https://www.youtube.com/watch?v=4nax86sau6k&t=6833) currently.

- [01:53:54](https://www.youtube.com/watch?v=4nax86sau6k&t=6834) It will delete multiple roles.

- [01:53:57](https://www.youtube.com/watch?v=4nax86sau6k&t=6837) So let's list the students.

- [01:53:59](https://www.youtube.com/watch?v=4nax86sau6k&t=6839) OK, now I will delete all the students.

- [01:54:03](https://www.youtube.com/watch?v=4nax86sau6k&t=6843) We sixty ones or sixty four ninety five.

- [01:54:07](https://www.youtube.com/watch?v=4nax86sau6k&t=6847) Sixty four ninety five.

- [01:54:10](https://www.youtube.com/watch?v=4nax86sau6k&t=6850) It records.

- [01:54:11](https://www.youtube.com/watch?v=4nax86sau6k&t=6851) OK, nine rows deleted when I click.

- [01:54:17](https://www.youtube.com/watch?v=4nax86sau6k&t=6857) And I have to.

- [01:54:19](https://www.youtube.com/watch?v=4nax86sau6k&t=6859) OK, now they are gone.

- [01:54:21](https://www.youtube.com/watch?v=4nax86sau6k&t=6861) This is how we call insecure.

- [01:54:24](https://www.youtube.com/watch?v=4nax86sau6k&t=6864) We could also call it as secure like here.

- [01:54:27](https://www.youtube.com/watch?v=4nax86sau6k&t=6867) Same nothing different.

- [01:54:29](https://www.youtube.com/watch?v=4nax86sau6k&t=6869) OK, so I think we have seen everything and.

- [01:54:36](https://www.youtube.com/watch?v=4nax86sau6k&t=6876) Probably next week I will show you how to handle different.

- [01:54:43](https://www.youtube.com/watch?v=4nax86sau6k&t=6883) Databases such as SQLite database with.

- [01:54:47](https://www.youtube.com/watch?v=4nax86sau6k&t=6887) Other methods.

- [01:54:49](https://www.youtube.com/watch?v=4nax86sau6k&t=6889) We see if I remember correctly and then.

- [01:54:52](https://www.youtube.com/watch?v=4nax86sau6k&t=6892) By the way,: there is also frameworks to prevent SQL injection such as entity framework.

- [01:54:59](https://www.youtube.com/watch?v=4nax86sau6k&t=6899) And I will also show you that as well.

- [01:55:02](https://www.youtube.com/watch?v=4nax86sau6k&t=6902) So don't worry about that.

- [01:55:04](https://www.youtube.com/watch?v=4nax86sau6k&t=6904) This is hardcore programming.

- [01:55:07](https://www.youtube.com/watch?v=4nax86sau6k&t=6907) We do everything ourselves.

- [01:55:09](https://www.youtube.com/watch?v=4nax86sau6k&t=6909) However, when you do this way, you have much more control of your code.

- [01:55:17](https://www.youtube.com/watch?v=4nax86sau6k&t=6917) And you can write much more effective and let's say tuned code as well.

- [01:55:24](https://www.youtube.com/watch?v=4nax86sau6k&t=6924) This is hardcore, but I would say this is better.

- [01:55:29](https://www.youtube.com/watch?v=4nax86sau6k&t=6929) From my point of view.

- [01:55:32](https://www.youtube.com/watch?v=4nax86sau6k&t=6932) In the especially in the high performance required projects.

- [01:55:38](https://www.youtube.com/watch?v=4nax86sau6k&t=6938) OK, so I think this is good for this week.

- [01:55:46](https://www.youtube.com/watch?v=4nax86sau6k&t=6946) So.

- [01:55:47](https://www.youtube.com/watch?v=4nax86sau6k&t=6947) Let's upload our code to our GitHub repository.

- [01:56:06](https://www.youtube.com/watch?v=4nax86sau6k&t=6966) OK.

- [01:56:09](https://www.youtube.com/watch?v=4nax86sau6k&t=6969) Lecture 4.

- [01:56:14](https://www.youtube.com/watch?v=4nax86sau6k&t=6974) In the previous lectures, we had some noise from background.

- [01:56:19](https://www.youtube.com/watch?v=4nax86sau6k&t=6979) And I am hoping that it won't be here at this lecture.

- [01:56:25](https://www.youtube.com/watch?v=4nax86sau6k&t=6985) I'm hoping we will see after the video recording.

- [01:56:28](https://www.youtube.com/watch?v=4nax86sau6k&t=6988) OK, we have updated our.

- [01:56:31](https://www.youtube.com/watch?v=4nax86sau6k&t=6991) GitHub repository.

- [01:56:33](https://www.youtube.com/watch?v=4nax86sau6k&t=6993) OK, it's OK.

- [01:56:37](https://www.youtube.com/watch?v=4nax86sau6k&t=6997) End of lecture.

- [01:56:40](https://www.youtube.com/watch?v=4nax86sau6k&t=7000) Hope to see you next week.
