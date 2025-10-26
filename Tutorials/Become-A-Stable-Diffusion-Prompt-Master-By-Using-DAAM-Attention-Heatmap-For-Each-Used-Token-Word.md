# Become A Stable Diffusion Prompt Master By Using DAAM - Attention Heatmap For Each Used Token - Word

## Full tutorial link > https://www.youtube.com/watch?v=XiKyEKJrTLQ

[![Become A Stable Diffusion Prompt Master By Using DAAM - Attention Heatmap For Each Used Token - Word](https://img.youtube.com/vi/XiKyEKJrTLQ/sddefault.jpg)](https://www.youtube.com/watch?v=XiKyEKJrTLQ "Become A Stable Diffusion Prompt Master By Using DAAM - Attention Heatmap For Each Used Token - Word")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Become-A-Stable-Diffusion-Prompt-Master-By-Using-DAAM-Attention-Heatmap-For-Each-Used-Token-Word.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/Become-A-Stable-Diffusion-Prompt-Master-By-Using-DAAM-Attention-Heatmap-For-Each-Used-Token-Word.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Our Discord : [https://discord.gg/HbqgGaZVmr.](https://discord.gg/HbqgGaZVmr.) In this video, I am explaining how to use the DAAM extension of Automatic1111 to understand how input words influence the parts of a generated image. If I have been of assistance to you and you would like to show your support for my work, please consider becoming a patron on 🥰 [https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Playlist of #StableDiffusion Tutorials, Automatic1111 and Google Colab Guides, DreamBooth, Textual Inversion / Embedding, LoRA, AI Upscaling, Pix2Pix, Img2Img:

[https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

What the #DAAM: Interpreting Stable Diffusion Using Cross #Attention Paper :

[https://arxiv.org/pdf/2210.04885.pdf](https://arxiv.org/pdf/2210.04885.pdf)

DAAM Script Repo : [https://github.com/castorini/daam](https://github.com/castorini/daam)

DAAM Extension of Automatic1111 : [https://github.com/toriato/stable-diffusion-webui-daam](https://github.com/toriato/stable-diffusion-webui-daam)

Notepad++ : [https://notepad-plus-plus.org/downloads/](https://notepad-plus-plus.org/downloads/)

[00:00:00](https://youtu.be/XiKyEKJrTLQ?t=0) Introduction to becoming a Stable Diffusion prompt master

[00:00:25](https://youtu.be/XiKyEKJrTLQ?t=25) What the DAAM: Interpreting Stable Diffusion Using Cross Attention Paper

[00:00:55](https://youtu.be/XiKyEKJrTLQ?t=55) How to install DAAM extension on Automatic1111 Web UI

[00:01:10](https://youtu.be/XiKyEKJrTLQ?t=70) How and from where to use DAAM extension on Automatic1111

[00:01:50](https://youtu.be/XiKyEKJrTLQ?t=110) How to get prompt heatmap of the generated image

[00:03:46](https://youtu.be/XiKyEKJrTLQ?t=226) How to give different attention / emphasis / strength to different words used in a prompt

[00:04:22](https://youtu.be/XiKyEKJrTLQ?t=262) Heatmap blend alpha

[00:05:43](https://youtu.be/XiKyEKJrTLQ?t=343) Outro

Some info from paper

Abstract

Large-scale diffusion neural networks represent a substantial milestone in text-to-image generation, but they remain poorly understood, lacking interpretability analyses. In this paper, we perform a text–image attribution analysis on Stable Diffusion, a recently open- sourced model. To produce pixel-level attribution maps, we upscale and aggregate cross- attention word–pixel scores in the denoising subnetwork, naming our method DAAM. We evaluate its correctness by testing its semantic segmentation ability on nouns, as well as its generalized attribution quality on all parts of speech, rated by humans. We then apply DAAM to study the role of syntax in the pixel space, characterizing head–dependent heat map interaction patterns for ten common dependency relations. Finally, we study several semantic phenomena using DAAM, with a focus on feature entanglement, where we find that co-hyponyms worsen generation quality and descriptive adjectives attend too broadly. To our knowledge, we are the first to interpret large diffusion models from a visuo linguistic perspective, which enables future lines of research.

6 Related Work and Future Directions

The primary area of this work is in understanding neural networks from the perspective of computational linguistics, with the goal of better in- forming future research. A large body of relevant papers exists, where researchers apply textual perturbation (Wallace et al.,2019), attention visualization (Vig,2019;Kovaleva et al.,2019;Shimaoka et al.,2016), and information bottlenecks (Jiang et al.,2020) to relate important input tokens to the outputs of large language models. Others explicitly test for linguistic constructs within models, such as Hendricks and Nematzadeh’s (2021) probing of vision transformers for verb understanding and Ilinykh and Dobnik’s (2022) examination of visual grounding in image-to-text transformers. Our distinction is that we carry out an attributive anal- ysis in the space of generative diffusion models, as the pixel output relates to syntax and semantics. As a future extension, we plan to assess the unsupervised parsing ability of Stable Diffusion with syntactic–geometric probes, similar to Hewitt and Manning’s (2019) work in BERT. The intersection of text-to-image generation and natural language processing is certainly substantial. In the context of enhancing diffusion models using prompt engineering,Hertz et al.(2022) cement cross-attention maps for the purpose of precision-editing generated images using text, and Woolf(2022) proposes negative prompts for removing undesirable, scene-wide attributes. Related as well are works for generative adversarial networks, whereKarras et al.(2019) andMaterzy n´ska et al. (2022) disentangle various features such as style and spelling. Along this vein, our work exposes more entanglement in co-hyponyms and adjectives. A future line of work is to disentangle such concepts and improve generative quality.

7 Conclusions

In this paper, we study visuo-linguistic phenomena in diffusion models by interpreting word–pixel cross-attention maps. We prove the correctness of our attribution method, DAAM, through a quantitative semantic segmentation task and a qualitative generalized attribution study. We apply DAAM to assess how syntactic relations translate to visual interactions, finding that certain maps of heads in- appropriately subsume their dependents’. We use these findings to form hypotheses about feature entanglement, showing that co-hyponyms are jumbled and adjectives attend too broadly.



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=0) Greetings everyone. In this video, I will show you&nbsp; how you can understand the effect of each prompt&nbsp;&nbsp;

- [00:00:05](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=5) you are using to generate images by text-to-image.&nbsp; To see that, we will use DAAM extension of Stable&nbsp;&nbsp;

- [00:00:10](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=10) Diffusion Automatic1111 web UI. If you don't know&nbsp; yet what is Stable Diffusion, Automatic1111 or&nbsp;&nbsp;

- [00:00:16](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=16) how to use them, I have excellent tutorial series&nbsp; playlist on my channel. This is the playlist and&nbsp;&nbsp;

- [00:00:21](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=21) you see we have so far 14 plus videos, how to use&nbsp; Stable Diffusion for Automatic1111 and for how to&nbsp;&nbsp;

- [00:00:28](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=28) use Stable Diffusion on Google Colab. So DAAM is&nbsp; the method name the authors of this paper have&nbsp;&nbsp;

- [00:00:34](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=34) chosen. Interpreting Stable Diffusion using cross&nbsp; attention. The paper aims that how does an input&nbsp;&nbsp;

- [00:00:40](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=40) word influence parts of the generated image. The&nbsp; authors of the paper has released their script to&nbsp;&nbsp;

- [00:00:47](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=47) use it and there is an extension for Automatic1111&nbsp; that allow us to use this script. This is the&nbsp;&nbsp;

- [00:00:53](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=53) extension repo link. Now I will install this&nbsp; extension on my Automatic1111. To do that,&nbsp;&nbsp;

- [00:00:58](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=58) I am going to extensions tab and in here click&nbsp; install from URL, paste it and install. It has&nbsp;&nbsp;

- [00:01:04](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=64) been installed. Let's just apply and restart&nbsp; UI. Extension has been installed. So how are&nbsp;&nbsp;

- [00:01:09](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=69) we going to use it? You see, there will be a new&nbsp; option here. Attention Heatmap. This is where we&nbsp;&nbsp;

- [00:01:15](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=75) are going to use this extension and I am going to&nbsp; make my examples on Protegen x3.4 version. This&nbsp;&nbsp;

- [00:01:23](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=83) is where you can download this model. It's a very&nbsp; good model, very realistic model. Let's start by&nbsp;&nbsp;

- [00:01:28](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=88) typing our first prompt and see how each word is&nbsp; affecting our prompt. This is the prompt. I have&nbsp;&nbsp;

- [00:01:35](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=95) used a sports car beautiful oasis with palm&nbsp; trees, and you see we got a beautiful image&nbsp;&nbsp;

- [00:01:40](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=100) right here. Before starting that, I want to show&nbsp; you that Python, this is the version I'm using,&nbsp;&nbsp;

- [00:01:45](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=105) Torch version, xformers version, Gradio, Commit&nbsp; hash and checkpoint hash, if you wonder that. How&nbsp;&nbsp;

- [00:01:51](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=111) are we going to get the heatmap of this image? To&nbsp; do that, I am just copying this prompt here and&nbsp;&nbsp;

- [00:01:57](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=117) going to the attention heatmap, pasting it here,&nbsp; and you need to put comma for each word to see&nbsp;&nbsp;

- [00:02:04](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=124) their emphasis on the picture. Also, pick this&nbsp; use grid output to grid directory. There is an&nbsp;&nbsp;

- [00:02:10](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=130) easier way to put comma to each of the word. To do&nbsp; that, you can use Notepad++ and in the find what,&nbsp;&nbsp;

- [00:02:17](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=137) just put a space character and replace with comma,&nbsp; replace all and you will get the prompt separated&nbsp;&nbsp;

- [00:02:24](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=144) with commas. I am also putting the seed as same&nbsp; seed like this, and then I will hit generate and&nbsp;&nbsp;

- [00:02:30](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=150) then we will see the each one of the prompt effect&nbsp; on the image. So you see there are now two images.&nbsp;&nbsp;

- [00:02:36](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=156) One of them is showing the effect of each prompt&nbsp; and the output is here. When we click the heatmap,&nbsp;&nbsp;

- [00:02:43](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=163) we can see how much each word is affecting&nbsp; our result. For example, there is a little&nbsp;&nbsp;

- [00:02:48](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=168) bit too much effect of a keyword and perhaps with&nbsp; keyword. So if you want to reduce the effect of&nbsp;&nbsp;

- [00:02:55](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=175) some of the keywords, you can use this heatmap&nbsp; and reduce them. For example, let's reduce the&nbsp;&nbsp;

- [00:03:00](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=180) effect of a keyword like here and with keywords&nbsp; like this one. This will reduce the strength,&nbsp;&nbsp;

- [00:03:07](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=187) the effect of the both of the keywords. This&nbsp; is prompt emphasis of the Automatic1111 web&nbsp;&nbsp;

- [00:03:13](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=193) UI feature. Now we can see the effect of a and&nbsp; with keywords are decreased. And let's see the&nbsp;&nbsp;

- [00:03:19](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=199) output image. OK, it is like this. If you are&nbsp; still not satisfied with the image, then you&nbsp;&nbsp;

- [00:03:24](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=204) can also increase the effect of other keywords&nbsp; and decrease the some other ones. For example,&nbsp;&nbsp;

- [00:03:29](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=209) if palm is having too much effect and beautiful or&nbsp; oasis is having little effect, we can also modify&nbsp;&nbsp;

- [00:03:35](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=215) them. Let's reduce to zero point eight. Let's&nbsp; also increase oasis to one point two. And also,&nbsp;&nbsp;

- [00:03:41](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=221) let's increase beautiful to one point two.&nbsp; And let's reduce car to zero point eight. If&nbsp;&nbsp;

- [00:03:47](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=227) you don't know how these attention emphasis is&nbsp; working, there is a wiki page on Automatic1111&nbsp;&nbsp;

- [00:03:52](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=232) and this displaying how they are affecting&nbsp; the results. So this is how it is increasing&nbsp;&nbsp;

- [00:03:57](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=237) attention. This is how decreasing attention. This&nbsp; is how it is working, basically. OK, so we got our&nbsp;&nbsp;

- [00:04:02](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=242) new results. This is our new result. And this&nbsp; is how each word is having effect, car, oasis,&nbsp;&nbsp;

- [00:04:09](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=249) beautiful, with, trees, palm, a. So based on the&nbsp; result, you can even further modify image and you&nbsp;&nbsp;

- [00:04:17](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=257) can decide what to choose, what to decrease&nbsp; strength, what to increase emphasis. Also,&nbsp;&nbsp;

- [00:04:22](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=262) there are some other options. Heatmap blend&nbsp; alpha. If you make this one, then it won't show&nbsp;&nbsp;

- [00:04:28](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=268) the original image in the generated heatmap. So it&nbsp; will be like this. Then you will have a more clear&nbsp;&nbsp;

- [00:04:34](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=274) idea of how much each word is having effect. The&nbsp; trees are not having much effect because I think&nbsp;&nbsp;

- [00:04:40](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=280) it is already using the palm world. Therefore, we&nbsp; can just remove the palm from the prompt and let's&nbsp;&nbsp;

- [00:04:46](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=286) see what we are going to get. We have removed the&nbsp; palm instead of trees, and now we don't have palm,&nbsp;&nbsp;

- [00:04:51](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=291) but only trees. And now this is how the effect&nbsp; is appearing. The sports beautiful oasis and car.&nbsp;&nbsp;

- [00:04:56](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=296) This is the new output. Let's take it back. So&nbsp; I will just remove the trees and generate again.&nbsp;&nbsp;

- [00:05:02](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=302) And now this is our image back. And this is now&nbsp; with car sports oasis beautiful palm. And there&nbsp;&nbsp;

- [00:05:09](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=309) is no more trees. Therefore, it has zero effect.&nbsp; And let's remove the with keyword. By the way,:&nbsp;&nbsp;

- [00:05:14](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=314) the combination of these keywords are generating&nbsp; a chain of effect. Therefore, they may not be&nbsp;&nbsp;

- [00:05:21](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=321) displaying very much emphasis here. But as a chain&nbsp; effect, they could be affecting a lot. So this is&nbsp;&nbsp;

- [00:05:27](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=327) our new image and this is the output we got. Car&nbsp; sports oasis beautiful. They are like these. This&nbsp;&nbsp;

- [00:05:33](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=333) is a cool and neat thing that you can play with.&nbsp; Based on this, you can increase or decrease the&nbsp;&nbsp;

- [00:05:38](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=338) emphasis, the attention of the each word and try&nbsp; to get a better understanding of how prompts are&nbsp;&nbsp;

- [00:05:43](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=343) affecting your results. It's a cool addition.&nbsp; Hopefully see you in another video. But before,&nbsp;&nbsp;

- [00:05:48](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=348) please don't forget to like subscribe. And if&nbsp; you support us on Patreon, I would appreciate&nbsp;&nbsp;

- [00:05:53](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=353) that very much. Sorry about my voice. I am a&nbsp; little bit of sick currently. I got cold I think&nbsp;&nbsp;

- [00:05:58](https://www.youtube.com/watch?v=XiKyEKJrTLQ&t=358) so you can subscribe, like, join and support us&nbsp; on Patreon. Hopefully see you in another video.
