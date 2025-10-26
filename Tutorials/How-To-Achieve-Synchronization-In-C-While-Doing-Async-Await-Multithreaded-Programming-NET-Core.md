# How To Achieve Synchronization In C# While Doing Async Await Multithreaded Programming - .NET Core

## Full tutorial link > https://www.youtube.com/watch?v=A7EUGpyO6Cw

[![How To Achieve Synchronization In C# While Doing Async Await Multithreaded Programming - .NET Core](https://img.youtube.com/vi/A7EUGpyO6Cw/sddefault.jpg)](https://www.youtube.com/watch?v=A7EUGpyO6Cw "How To Achieve Synchronization In C# While Doing Async Await Multithreaded Programming - .NET Core")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Achieve-Synchronization-In-C-While-Doing-Async-Await-Multithreaded-Programming-NET-Core.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/How-To-Achieve-Synchronization-In-C-While-Doing-Async-Await-Multithreaded-Programming-NET-Core.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


In this video, I am comparing #Mutex, #SemaphoreSlim and #ReaderWriterLockSlim synchronization primitives in a multi-threaded async and await methodology using application. Our Discord : [https://discord.gg/5tfCy9C5sj.](https://discord.gg/5tfCy9C5sj.) If I have been of assistance to you and you would like to show your support for my work, please consider becoming a patron on 🥰 [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Source code of demo available on Patreon: [https://www.patreon.com/posts/77858916](https://www.patreon.com/posts/77858916)

[00:00:00](https://youtu.be/A7EUGpyO6Cw?t=0) Introduction to How To Achieve Synchronization In C# While Doing Async Await Multithreaded Programming

[00:00:32](https://youtu.be/A7EUGpyO6Cw?t=32) The objects we are going to use

[00:02:00](https://youtu.be/A7EUGpyO6Cw?t=120) How we gonna test and compare Mutex, SemaphoreSlim and ReaderWriterLockSlim

[00:02:47](https://youtu.be/A7EUGpyO6Cw?t=167) Why use local variable to prevent data race

[00:04:44](https://youtu.be/A7EUGpyO6Cw?t=284) Sub method that will call writing method with await keyword

[00:05:24](https://youtu.be/A7EUGpyO6Cw?t=324) Why define long variables to debug application with Interlocked.Increment

[00:05:42](https://youtu.be/A7EUGpyO6Cw?t=342) Write to file method where we are doing locking and synchnorşization

[00:06:06](https://youtu.be/A7EUGpyO6Cw?t=366) Method call vs when lock is obtained

[00:07:19](https://youtu.be/A7EUGpyO6Cw?t=439) Why we need to use Interlocked

[00:09:21](https://youtu.be/A7EUGpyO6Cw?t=561) Why we are using finally method when working different locking mechanisms

[00:10:54](https://youtu.be/A7EUGpyO6Cw?t=654) How to test how actually each synchronization method (Mutex, SemaphoreSlim, ReaderWriterLockSlim) works

[00:12:30](https://youtu.be/A7EUGpyO6Cw?t=750) What happened in the lock acquiring part of the method call

[00:14:00](https://youtu.be/A7EUGpyO6Cw?t=840) Testing not properly working synchronization method ReaderWriterLockSlim

[00:15:22](https://youtu.be/A7EUGpyO6Cw?t=922) Testing not properly working synchronization method Mutex

[00:17:25](https://youtu.be/A7EUGpyO6Cw?t=1045) Why Mutex is not the correct choice for synchronization of async await using multi-threaded programming

Mutex, SemaphoreSlim, and ReaderWriterLockSlim are all synchronization primitives that can be used in .NET Core to control access to shared resources.

A Mutex (short for "mutual exclusion") is a synchronization object that allows only one thread to enter a critical section at a time. It is used to protect shared resources from concurrent access, which can cause race conditions and other types of errors. A Mutex can be owned by a single thread, and other threads that attempt to acquire the Mutex will be blocked until the owning thread releases it.

SemaphoreSlim is similar to a Mutex in that it controls access to a shared resource, but it allows multiple threads to enter the critical section simultaneously. A SemaphoreSlim has a count that represents the number of threads that can enter the critical section simultaneously. When a thread tries to enter the critical section, the count is decremented. If the count is zero, the thread is blocked until the count is increased by another thread exiting the critical section.

ReaderWriterLockSlim is a synchronization primitive that is designed to optimize access to shared resources that are read frequently and written infrequently. It allows multiple threads to read the shared resource simultaneously, but only one thread can write to it at a time. This can greatly improve performance in scenarios where many threads are reading the shared resource but only a few are writing to it.

All three synchronization primitives are useful in different scenarios and have their own advantages and disadvantages.

Mutex is a powerful synchronization primitive that can be used to protect shared resources from concurrent access. It is easy to use and understand, and it can be used to synchronize access to shared resources across multiple processes. However, it can be slow and can cause contention if used excessively.

SemaphoreSlim is a good choice when you need to synchronize access to a shared resource that can be used by multiple threads simultaneously. It allows multiple threads to enter the critical section at the same time, which can improve performance in some scenarios. However, it can also cause contention if used excessively.

ReaderWriterLockSlim is a good choice when you need to optimize access to shared resources that are read frequently and written infrequently. It allows multiple threads to read the shared resource simultaneously, which can greatly improve performance in scenarios where many threads are reading the shared resource but only a few are writing to it. However, it can be more complex to use and understand than Mutex or SemaphoreSlim.

In summary, Mutex, SemaphoreSlim and ReaderWriterLockSlim are all useful synchronization primitives in different scenarios. They all can be used to control access to shared resources in multi-threaded environment and can help prevent race conditions and other types of errors. The choice of which one to use will depend on the specific requirements of your application.



### Video Transcription


- [00:00:01](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1) Greetings everyone.

- [00:00:02](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=2) In this video, I have prepared a demo software to demonstrate you how to achieve synchronization

- [00:00:06](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=6) and preventing data race by using semaphore slim when doing fully multi-threaded asynchronous

- [00:00:11](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=11) programming by using async and await keywords.

- [00:00:14](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=14) I am also going to compare semaphore slim with mutex and reader write writer lock slim

- [00:00:19](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=19) so you will understand the difference between them.

- [00:00:21](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=21) This demo software is prepared by using .NET Core 7 and WPF application.

- [00:00:28](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=28) So, let me introduce you the concept we are going to have.

- [00:00:32](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=32) We are defining a two stream writers to log the errors and log the numbers that our methods

- [00:00:37](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=37) are going to generate.

- [00:00:39](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=39) So, we have a public main window.

- [00:00:42](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=42) Let me show you the interface of the application.

- [00:00:45](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=45) It is pretty simple.

- [00:00:47](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=47) Semaphore slim example, reader writer lock slim example, mutex example.

- [00:00:52](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=52) Okay.

- [00:00:53](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=53) So, in the constructor of the main window, I am setting auto flush true for both of the

- [00:01:00](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=60) stream writers.

- [00:01:01](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=61) I have defined it as private, static read only semaphore slim object, reader writer

- [00:01:07](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=67) lock slim object and mutex object as you can see.

- [00:01:11](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=71) So, the semaphore slim is requiring initial count and max count.

- [00:01:16](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=76) Since I want only one thread at a time to enter the method, I am setting both of them

- [00:01:22](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=82) as one in semaphore slim initialization.

- [00:01:26](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=86) For reader writer lock slim, it is just default.

- [00:01:29](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=89) And for mutex, I am setting as false so none of the threads are starting with only of the

- [00:01:36](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=96) mutex.

- [00:01:37](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=97) And I have an enum to make our testing easier.

- [00:01:43](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=103) So, according to which one we want to test, we are setting the enum as mutex, semaphore

- [00:01:48](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=108) slim and reader writer lock slim.

- [00:01:50](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=110) So, when we click each of the buttons, as you can see on the interface, it is just going

- [00:01:58](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=118) to set the enum and then call the task run method.

- [00:02:03](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=123) So, all of the methods will run in the sub tasks.

- [00:02:06](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=126) None of them will run in the main thread as you can see.

- [00:02:09](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=129) This is so simple code.

- [00:02:12](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=132) So, setting the enum like here, like here, and like here, then just starting the start

- [00:02:17](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=137) task method.

- [00:02:18](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=138) So, start task method.

- [00:02:21](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=141) Start task method is pretty simple.

- [00:02:24](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=144) In a for loop, we are starting 10 tasks and saving them inside a list like this.

- [00:02:30](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=150) Then we are doing task wait all.

- [00:02:34](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=154) And once all of the tasks are completed, we are going to flush the stream writer so we

- [00:02:40](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=160) will be able to see the full logs.

- [00:02:42](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=162) And then we are just printing on the screen message box show all done.

- [00:02:47](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=167) Now inside this for loop, we are assigning a local variable like this.

- [00:02:53](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=173) Why?

- [00:02:54](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=174) Because when you check the code, you see we are running an asynchronous task and it is

- [00:03:02](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=182) also starting a task.

- [00:03:04](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=184) When this task is started.

- [00:03:07](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=187) This "i" variable is being already changed because for loop is not waiting for this task

- [00:03:14](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=194) to start.

- [00:03:15](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=195) Therefore, you have to assign this "i" variable into a local variable.

- [00:03:21](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=201) Otherwise, all of the "i" variable will be the latest "i" variable in this for loop.

- [00:03:28](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=208) And you won't get what you want.

- [00:03:31](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=211) Let me: demonstrate it actually.

- [00:03:33](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=213) So, if I don't set it into a local variable, and if I just use "i", let me show you what

- [00:03:41](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=221) kind of results we are going to get.

- [00:03:44](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=224) Okay, let's open the text file.

- [00:03:51](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=231) So you see all of the numbers are beginning with 11,000.

- [00:03:56](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=236) I will explain why.

- [00:03:58](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=238) Don't worry about that.

- [00:04:01](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=241) Because the "i" is being 11 in all of the cases.

- [00:04:09](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=249) So let's just return back.

- [00:04:11](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=251) So this is for ensuring no data race is happening in this for loop and when the task is starting.

- [00:04:19](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=259) So we are starting an asynchronous task in here.

- [00:04:27](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=267) And we are awaiting this task.

- [00:04:29](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=269) Actually, we should also set this as configure await false.

- [00:04:32](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=272) So the configure await false means that this task will run, can run in a sub task.

- [00:04:39](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=279) Since this is inside the task, it is just fine.

- [00:04:42](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=282) But just get used to use this configure await false.

- [00:04:46](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=286) Now let's check out to start write method.

- [00:04:51](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=291) Inside start write method, we have another for loop.

- [00:04:55](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=295) And inside this for loop, you see an await write to file method call.

- [00:05:03](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=303) This is also an asynchronous task as you can see.

- [00:05:07](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=307) And we are setting configure await false.

- [00:05:09](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=309) So this task will also run in a sub task.

- [00:05:13](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=313) If it is good.

- [00:05:15](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=315) And we are sending, we are taking a parameter here as counter and we are sending that counter

- [00:05:22](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=322) plus "i".

- [00:05:24](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=324) Okay, as you can see, so we have two long variables here, I will show you why did I

- [00:05:33](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=333) set them to demonstrate how exactly the locking works when you're doing multi threaded asynchronous

- [00:05:42](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=342) programming.

- [00:05:44](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=344) Okay, inside task write to file method.

- [00:05:47](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=347) Now this is why we are doing the synchronization.

- [00:05:53](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=353) And I did set a try and catch in all of them to demonstrate you how mutex or reader writer

- [00:06:00](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=360) lock slim is not working when you are working with async and await keywords in a multi threaded

- [00:06:07](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=367) environment.

- [00:06:08](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=368) So first of all, we are incrementing method call counter because method calls will happen

- [00:06:14](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=374) immediately.

- [00:06:16](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=376) However, in this next statement, according to the selecting selected synchronization

- [00:06:24](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=384) method, we are locking our mutex object with WaitOne, we are locking our lock semaphore

- [00:06:30](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=390) slim object with wait or we are locking lock reader lock, lock reader, writer lock slim

- [00:06:37](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=397) with enter write lock.

- [00:06:39](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=399) So when we check the description, it says that blocks the current thread until the current

- [00:06:44](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=404) main handle receives a signal for mutex.

- [00:06:49](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=409) For lock semaphore slim, it says that blocks the current thread until it can enter the

- [00:06:53](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=413) semaphore slim, you see almost same description.

- [00:06:55](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=415) However, this has a lot of exceptions and this one also only have one exception.

- [00:07:01](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=421) And then we check the enter writer lock, it says tries to enter the lock in the write

- [00:07:05](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=425) mode.

- [00:07:07](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=427) Okay, so once the locking.

- [00:07:12](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=432) Once these objects are obtained the lock, it will move to the these line and inside

- [00:07:17](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=437) these line, I am incrementing method entered counter by one.

- [00:07:22](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=442) So you see I am using interlocked.

- [00:07:24](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=444) Actually, it is not necessary to use interlocked here because if you are properly locking,

- [00:07:31](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=451) then only one thread at a time will enter here.

- [00:07:33](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=453) But in here, multiple threads can enter because we still didn't lock.

- [00:07:38](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=458) Therefore, interlocked is ensuring the thread safety of increment of this variable.

- [00:07:47](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=467) And inside here: I am I am logging into the console of the debug console method: call

- [00:07:54](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=474) counter interlocked read method call method call counter and method entered counter.

- [00:08:01](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=481) Why these two variables will be different?

- [00:08:05](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=485) Because whenever a call happened to this method, this line will be executed.

- [00:08:11](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=491) However, this line will executed only if the lock is happened.

- [00:08:15](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=495) Therefore, there will be a difference between these counters.

- [00:08:20](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=500) And of course, after all of them have been completed executed, this will also become

- [00:08:28](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=508) zero.

- [00:08:29](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=509) Why?

- [00:08:30](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=510) Because in the finally, I am just decreasing each of the variables by one.

- [00:08:34](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=514) Okay, then in here, I have await task delay to put some delay into this method.

- [00:08:42](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=522) Like it is downloading a file from internet or or doing a database call.

- [00:08:49](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=529) And in here, I am writing this number into our text file.

- [00:08:58](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=538) And if an error happens, I'm just logging this error into debug WriteLine to see it.

- [00:09:08](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=548) You see this, there shouldn't be any error in here.

- [00:09:13](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=553) Why?

- [00:09:14](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=554) Because we are ensuring the thread synchronization with locking these methods for only one thread

- [00:09:22](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=562) at a time.

- [00:09:23](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=563) And in the also we are using finally method.

- [00:09:29](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=569) Why?

- [00:09:31](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=571) Because if an error happens for somehow we need to release the lock.

- [00:09:36](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=576) And in the finally, we are just releasing mutex.

- [00:09:38](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=578) And we are releasing semaphore slim and we are releasing lock reader, lock, reader, writer

- [00:09:45](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=585) lock slim with exit read, lock release and release mutex.

- [00:09:50](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=590) And in here, we are just decreasing the each of the variable.

- [00:09:55](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=595) Also, you see, I have put all of them inside a big try catch to show you what kind of errors

- [00:10:02](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=602) we are going to get when we use mutex or reader writer lock slim.

- [00:10:07](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=607) This was a problem that I wanted to solve.

- [00:10:12](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=612) Because in the lecture that I teach in the school, we have coded a multi threaded web

- [00:10:22](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=622) crawler.

- [00:10:23](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=623) And it was really hard to achieve synchronization.

- [00:10:28](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=628) When we are using async and await keywords in a fully multi threaded environment.

- [00:10:34](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=634) Therefore, I have done a lot of research and I have come to the conclusion that semaphore

- [00:10:40](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=640) slim is the only way is the best.

- [00:10:43](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=643) I think it is also the only way to ensure synchronization when you are doing multi threaded

- [00:10:51](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=651) async and await keywords using asynchronous programming.

- [00:10:56](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=656) So let's start and let me explain to you how this is working.

- [00:11:03](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=663) In the output window, you see we are seeing method called counter and method entered counter,

- [00:11:08](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=668) which means that there are always eight, actually nine thread calls are waiting to enter inside

- [00:11:18](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=678) write to file method.

- [00:11:20](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=680) Once all of them currently waiting methods are executed, this will also become to zero.

- [00:11:28](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=688) So it will take 100 seconds why?.

- [00:11:32](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=692) We have 100 milliseconds delay in here, and we are doing a loop of 100.

- [00:11:41](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=701) And actually, there will be 10 threads.

- [00:11:44](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=704) Therefore, we also need to multiply this by 10.

- [00:11:48](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=708) Okay, all done.

- [00:11:50](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=710) Actually, I reduced it to 10 milliseconds delay and you see in the end ending method

- [00:11:57](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=717) called counter is reducing by one and it is becoming equal like here.

- [00:12:03](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=723) Why?

- [00:12:04](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=724) Because the awaiting tasks to acquire the lock and enter inside this write to file method

- [00:12:11](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=731) is getting their chance to enter as the other tasks are finished.

- [00:12:18](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=738) And in the final request, they are getting executed.

- [00:12:25](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=745) So what happened in here is all of them awaiting other thread calls are getting into waiting

- [00:12:41](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=761) queue and when the lock is available, their execution from this line of code continues.

- [00:12:57](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=777) So when we check the description of semaphore slim wait, it says that blocks the current

- [00:13:02](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=782) thread until it can enter the semaphore slim.

- [00:13:05](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=785) So they're getting into this line executing this line of code.

- [00:13:10](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=790) And inside exactly here, they are just waiting.

- [00:13:14](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=794) They are just waiting this lock semaphore slim object to be released.

- [00:13:19](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=799) And once it is free, they continue their execution from this line of code.

- [00:13:25](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=805) So let's check out the entire output.

- [00:13:28](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=808) It starts with 123, up to 10,000.

- [00:13:35](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=815) And let's check out all of the results.

- [00:13:38](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=818) Okay, as you can see, so we have exactly 1000 line of code and each one of them is ending

- [00:13:45](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=825) at 99 100% working correctly as we have expected from the code.

- [00:13:52](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=832) It's a pretty simple demo actually.

- [00:13:54](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=834) When you are reading it, you will understand it.

- [00:13:58](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=838) Now let's try the other synchronization methods and see if they are working or not.

- [00:14:05](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=845) I will just restart the application.

- [00:14:08](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=848) Okay.

- [00:14:09](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=849) And then just let's first try reader writer lock slim example.

- [00:14:13](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=853) When I click the reader writer lock slim.

- [00:14:16](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=856) Example, I am seeing a lot of exception throws in the bottom in the output window.

- [00:14:22](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=862) Can we zoom in here?

- [00:14:23](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=863) Okay.

- [00:14:24](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=864) We are not able to zoom in here, but we will see them in the error logs.

- [00:14:32](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=872) Okay.

- [00:14:34](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=874) So you see in the numbers, we only have single number and then we have got errors.

- [00:14:39](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=879) The error message is error method reader writer lock slim recursive write log acquisitions

- [00:14:46](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=886) not allowed in this mode.

- [00:14:48](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=888) However, actually we want to only one thread to enter inside the method.

- [00:14:57](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=897) And if we allow recursive recursive write lock acquisitions, then it won't happen.

- [00:15:04](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=904) Therefore reader writer lock slim reader writer lock slim is not suitable to use in a multi-threaded

- [00:15:14](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=914) and async await methodology using programming.

- [00:15:20](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=920) So it fails.

- [00:15:22](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=922) Let's also try to mutex and see if it will work for us.

- [00:15:27](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=927) Mutex example.

- [00:15:29](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=929) Okay.

- [00:15:30](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=930) And we are seeing method call counter 12 and method enter counter three.

- [00:15:37](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=937) So it is actually failing right now because method enter should be only one at a time.

- [00:15:44](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=944) And let's check out the errors.

- [00:15:45](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=945) Okay, we have got error.

- [00:15:48](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=948) Object synchronization method was called from an unsynchronized block of code as you can

- [00:15:55](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=955) see.

- [00:15:57](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=957) So Mutex also didn't worked well in our case.

- [00:16:03](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=963) It didn't behave as we have expected.

- [00:16:06](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=966) And let's check out the results.

- [00:16:09](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=969) The wait completed due to an abandoned Mutex object synchronization method was called from

- [00:16:14](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=974) an unsynchronized block of code.

- [00:16:16](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=976) And let's check out the numbers.

- [00:16:18](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=978) Okay, in the numbers window, actually, we are only seeing, oh, we are seeing very few

- [00:16:26](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=986) of the tasks so far.

- [00:16:28](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=988) And when the all of all of it is completed, I wonder if we see all.

- [00:16:34](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=994) Probably we will not.

- [00:16:39](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=999) Okay.

- [00:16:40](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1000) Okay.

- [00:16:41](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1001) You see it is still not completed.

- [00:16:44](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1004) Because a lot of errors are happening.

- [00:16:46](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1006) I am seeing errors.

- [00:16:47](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1007) Method call counter is 16.

- [00:16:49](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1009) And method entered counter is five definitely incorrect.

- [00:16:52](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1012) Let me some.

- [00:16:55](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1015) Let me show you the messages in here.

- [00:16:58](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1018) Okay.

- [00:16:59](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1019) So you see method call counter is 16 and method entered counter is five, actually, this should

- [00:17:05](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1025) be only 9 or 10.

- [00:17:06](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1026) And this should be only 1, because we want only one of the thread to enter inside our

- [00:17:14](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1034) method call.

- [00:17:17](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1037) And you're not able to get it.

- [00:17:19](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1039) And it is still even not completed yet.

- [00:17:23](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1043) Okay, it has been completed, but it took like 100 times more duration, maybe more.

- [00:17:31](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1051) And you see, we don't we didn't get 1000 results as expected, because we have a lot of errors,

- [00:17:39](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1059) as you can see, when we use mutex.

- [00:17:43](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1063) Therefore, mutex is not the correct choice for you.

- [00:17:49](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1069) So I suggest you to use SemaphoreSlim to ensure synchronization and prevent data race when

- [00:17:59](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1079) you are doing multi traded programming and using async and await keywords.

- [00:18:07](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1087) I hope you I hope you have enjoyed.

- [00:18:11](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1091) Please like subscribe and join if possible to our channel, you can go to our about tab

- [00:18:19](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1099) of our channel and you can click the official discord and it from there you can join our

- [00:18:24](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1104) discord channel and ask me any questions you want.

- [00:18:27](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1107) If you are generous and support from Patreon, I would appreciate that very much.

- [00:18:33](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1113) So far we have 11 patrons and I am thanking them very much.

- [00:18:39](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1119) So you see, I also have different kinds of videos, not only C sharp programming, but

- [00:18:44](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1124) everything is about technology.

- [00:18:46](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1126) So I am sure that you will find very useful videos for yourself in our channel.

- [00:18:54](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1134) And I am also.

- [00:18:55](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1135) I also just generated a new playlist for C# .net core programming, tips, guides and best

- [00:19:04](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1144) practices.

- [00:19:05](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1145) Leave a comment and tell me what you want to see next.

- [00:19:08](https://www.youtube.com/watch?v=A7EUGpyO6Cw&t=1148) Hopefully see you in another video.
