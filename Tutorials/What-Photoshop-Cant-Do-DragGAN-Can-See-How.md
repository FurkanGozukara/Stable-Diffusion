# What Photoshop Can't Do, DragGAN Can! See How!

## Full tutorial link > https://www.youtube.com/watch?v=55Smbt38KgM

[![What Photoshop Can't Do, DragGAN Can! See How!](https://img.youtube.com/vi/55Smbt38KgM/sddefault.jpg)](https://www.youtube.com/watch?v=55Smbt38KgM "What Photoshop Can't Do, DragGAN Can! See How!")

[![image](https://img.shields.io/discord/772774097734074388?label=Discord&logo=discord)](https://discord.com/servers/software-engineering-courses-secourses-772774097734074388) [![Hits](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/What-Photoshop-Cant-Do-DragGAN-Can-See-How.md.svg?style=plastic&label=Hits%20Since%2025.08.27&labelColor=007ec6&logo=SECourses)](https://hits.sh/github.com/FurkanGozukara/Stable-Diffusion/blob/main/Tutorials/What-Photoshop-Cant-Do-DragGAN-Can-See-How.md)
[![Patreon](https://img.shields.io/badge/Patreon-Support%20Me-F2EB0E?style=for-the-badge&logo=patreon)](https://www.patreon.com/c/SECourses) [![BuyMeACoffee](https://img.shields.io/badge/Buy%20Me%20a%20Coffee-ffdd00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/DrFurkan) [![Furkan Gözükara Medium](https://img.shields.io/badge/Medium-Follow%20Me-800080?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@furkangozukara) [![Codio](https://img.shields.io/static/v1?style=for-the-badge&message=Articles&color=4574E0&logo=Codio&logoColor=FFFFFF&label=CivitAI)](https://civitai.com/user/SECourses/articles) [![Furkan Gözükara Medium](https://img.shields.io/badge/DeviantArt-Follow%20Me-990000?style=for-the-badge&logo=deviantart&logoColor=white)](https://www.deviantart.com/monstermmorpg)

[![YouTube Channel](https://img.shields.io/badge/YouTube-SECourses-C50C0C?style=for-the-badge&logo=youtube)](https://www.youtube.com/SECourses)  [![Furkan Gözükara LinkedIn](https://img.shields.io/badge/LinkedIn-Follow%20Me-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/furkangozukara/)   [![Udemy](https://img.shields.io/static/v1?style=for-the-badge&message=Stable%20Diffusion%20Course&color=A435F0&logo=Udemy&logoColor=FFFFFF&label=Udemy)](https://www.udemy.com/course/stable-diffusion-dreambooth-lora-zero-to-hero/?referralCode=E327407C9BDF0CEA8156) [![Twitter Follow Furkan Gözükara](https://img.shields.io/badge/Twitter-Follow%20Me-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/GozukaraFurkan)


Today, we’re exploring an innovative research paper called "Drag Your GAN: Interactive Point-based Manipulation on the Generative Image Manifold." This groundbreaking study introduces a new method for controlling and manipulating images synthesized by Generative Adversarial Networks (GANs) with precision, flexibility, and generality.

If I have been of assistance to you and you would like to show your support for my work, please consider becoming a patron on 🥰 ⤵️

[https://www.patreon.com/SECourses](https://www.patreon.com/SECourses)

Technology & Science: News, Tips, Tutorials, Tricks, Best Applications, Guides, Reviews ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3](https://www.youtube.com/playlist?list=PL_pbwdIyffsnkay6X91BWb9rrfLATUMr3)

Playlist of StableDiffusion Tutorials, Automatic1111 and Google Colab Guides, DreamBooth, Textual Inversion / Embedding, LoRA, AI Upscaling, Pix2Pix, Img2Img ⤵️

[https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3](https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3)

Research Paper ⤵️

[https://arxiv.org/pdf/2305.10973.pdf](https://arxiv.org/pdf/2305.10973.pdf)

Video Footage Source ⤵️

[https://vcai.mpi-inf.mpg.de/projects/DragGAN/](https://vcai.mpi-inf.mpg.de/projects/DragGAN/)

The authors focus on visual content synthesis, which is an integral aspect of many industries, ranging from movie editing and car design to social media. Their primary goal is to enhance the controllability over the pose, shape, expression, and layout of generated objects. They point out the limitations of current methods, like using manual annotation of training data or a prior 3D model, which lack precise control and flexibility.

The proposed solution, DragGAN, aims to address these limitations, offering a user-interactive approach for manipulating GAN-generated images. It provides a system where users can drag any points of an image to reach target points accurately. Comprising a feature-based motion supervision and a unique point tracking approach, DragGAN allows users to deform an image while maintaining control over pixel destination.

DragGAN operates effectively within the feature space of a GAN and its real-world applications include image manipulation and point tracking for different categories such as animals, cars, humans, and landscapes. It's designed to yield realistic outputs even in complex scenarios like hallucinating occluded content and deforming shapes that consistently adhere to the object’s rigidity.

The researchers also introduce a new process called a 'shifted feature patch loss' for optimizing the latent code, making it a highly efficient, repeated optimization process until the handle points reach the targets. This process doesn’t rely on additional networks, and it only takes a few seconds on a single RTX 3090 GPU.

The research paper introduces a new paradigm for interactive image manipulation using GANs. The user identifies a series of 'handle points' and 'target points' on the image and can even draw a binary mask to define movable regions of the image. Once these points are inputted, the system undertakes a series of optimization steps until the handle points align with the target points, providing a rapid and interactive editing system.

The authors also developed a user-friendly graphical user interface (GUI) for interactive manipulation. They compared their method with other approaches and showed that DragGAN provides superior results in terms of image manipulation and point tracking. This novel approach shows potential for real image editing via GAN inversion techniques.

Stay tuned for more insights into the world of AI and deep learning. Here we unravel complex studies and make them accessible to everyone interested in technology. Subscribe to our channel for regular updates on the latest advancements and applications of AI.

Keywords: #AI #GAN #DragGAN #MachineLearning #DeepLearning #ImageManipulation #ImageSynthesis #StyleGAN2 #ArtificialIntelligence #Technology #PointTracking #MotionSupervision #PyTorch #LatentCode #RealImageEditing #ImageDeformation #UserInteractive #RTX3090 #TechChannel #YouTubeTech #GenerativeAdversarialNetworks #TechReview #TechResearch



### Video Transcription


- [00:00:00](https://www.youtube.com/watch?v=55Smbt38KgM&t=0) In the abstract of the research paper titled 'Drag Your GAN: Interactive Point-based Manipulation

- [00:00:05](https://www.youtube.com/watch?v=55Smbt38KgM&t=5) on the Generative Image Manifold,' the authors delve into the issue of synthesizing visual

- [00:00:10](https://www.youtube.com/watch?v=55Smbt38KgM&t=10) content that meets user needs.

- [00:00:12](https://www.youtube.com/watch?v=55Smbt38KgM&t=12) They note that this usually necessitates precise and flexible controllability over aspects

- [00:00:17](https://www.youtube.com/watch?v=55Smbt38KgM&t=17) such as the pose, shape, expression, and layout of the objects generated.

- [00:00:22](https://www.youtube.com/watch?v=55Smbt38KgM&t=22) They outline the limitations of the prevailing methodologies, which achieve the controllability

- [00:00:26](https://www.youtube.com/watch?v=55Smbt38KgM&t=26) of generative adversarial networks (GANs) either through manual annotation of training

- [00:00:31](https://www.youtube.com/watch?v=55Smbt38KgM&t=31) data or a prior 3D model.

- [00:00:33](https://www.youtube.com/watch?v=55Smbt38KgM&t=33) They criticize these methods for their lack of precision, flexibility, and generality.

- [00:00:38](https://www.youtube.com/watch?v=55Smbt38KgM&t=38) The authors introduce a new and promising method of controlling GANs: dragging any points

- [00:00:43](https://www.youtube.com/watch?v=55Smbt38KgM&t=43) of an image to make them accurately reach target points in a user-interactive manner.

- [00:00:48](https://www.youtube.com/watch?v=55Smbt38KgM&t=48) This method is demonstrated in Figure 1 of the paper.

- [00:00:51](https://www.youtube.com/watch?v=55Smbt38KgM&t=51) To facilitate this, they propose a system called DragGAN, which comprises two main parts:

- [00:00:56](https://www.youtube.com/watch?v=55Smbt38KgM&t=56) 1) a feature-based motion supervision that guides the 'handle point' towards the target

- [00:01:01](https://www.youtube.com/watch?v=55Smbt38KgM&t=61) position, and 2) an innovative point tracking approach that utilizes the discriminative

- [00:01:06](https://www.youtube.com/watch?v=55Smbt38KgM&t=66) generator features to continually localize the position of the handle points.

- [00:01:10](https://www.youtube.com/watch?v=55Smbt38KgM&t=70) DragGAN, they argue, provides users the ability to deform an image with a precise control

- [00:01:15](https://www.youtube.com/watch?v=55Smbt38KgM&t=75) over pixel destination, hence manipulating the pose, shape, expression, and layout of

- [00:01:21](https://www.youtube.com/watch?v=55Smbt38KgM&t=81) various categories such as animals, cars, humans, and landscapes.

- [00:01:26](https://www.youtube.com/watch?v=55Smbt38KgM&t=86) This approach stands out because these manipulations are conducted on the learned generative image

- [00:01:30](https://www.youtube.com/watch?v=55Smbt38KgM&t=90) manifold of a GAN, which tends to yield realistic outputs even in complex scenarios like hallucinating

- [00:01:36](https://www.youtube.com/watch?v=55Smbt38KgM&t=96) occluded content and deforming shapes that consistently adhere to the object’s rigidity.

- [00:01:41](https://www.youtube.com/watch?v=55Smbt38KgM&t=101) The abstract concludes with the authors demonstrating the advantage of DragGAN over prior techniques

- [00:01:46](https://www.youtube.com/watch?v=55Smbt38KgM&t=106) in the tasks of image manipulation and point tracking.

- [00:01:49](https://www.youtube.com/watch?v=55Smbt38KgM&t=109) They provide both qualitative and quantitative comparisons to back their claim.

- [00:01:54](https://www.youtube.com/watch?v=55Smbt38KgM&t=114) Lastly, they demonstrate the manipulation of real images through GAN inversion, showcasing

- [00:01:59](https://www.youtube.com/watch?v=55Smbt38KgM&t=119) the practical application of DragGAN.

- [00:02:01](https://www.youtube.com/watch?v=55Smbt38KgM&t=121) The paper introduces an innovative approach to manipulating image synthesis through deep

- [00:02:05](https://www.youtube.com/watch?v=55Smbt38KgM&t=125) generative models such as Generative Adversarial Networks (GANs).

- [00:02:09](https://www.youtube.com/watch?v=55Smbt38KgM&t=129) This method strives to fulfill essential requirements for image synthesis, namely flexibility, precision,

- [00:02:16](https://www.youtube.com/watch?v=55Smbt38KgM&t=136) and generality.

- [00:02:17](https://www.youtube.com/watch?v=55Smbt38KgM&t=137) The paper begins by emphasizing the growing success of GANs in generating photorealistic

- [00:02:22](https://www.youtube.com/watch?v=55Smbt38KgM&t=142) images, but acknowledges the demand for better control over synthesized visual content.

- [00:02:28](https://www.youtube.com/watch?v=55Smbt38KgM&t=148) This could benefit a range of users - from social media users wanting to modify casual

- [00:02:33](https://www.youtube.com/watch?v=55Smbt38KgM&t=153) photos, to professional movie editors, and car designers seeking to fine-tune their designs.

- [00:02:38](https://www.youtube.com/watch?v=55Smbt38KgM&t=158) The researchers aspire to address these needs by building a controllable image synthesis

- [00:02:43](https://www.youtube.com/watch?v=55Smbt38KgM&t=163) model with the ability to control spatial attributes (position, pose, shape, expression,

- [00:02:50](https://www.youtube.com/watch?v=55Smbt38KgM&t=170) layout) of the generated objects with high precision, and apply to different object categories.

- [00:02:57](https://www.youtube.com/watch?v=55Smbt38KgM&t=177) The authors argue that previous methods for achieving controllability of GANs, whether

- [00:03:01](https://www.youtube.com/watch?v=55Smbt38KgM&t=181) through prior 3D models or supervised learning that relies on manually annotated data, have

- [00:03:07](https://www.youtube.com/watch?v=55Smbt38KgM&t=187) limitations, such as the inability to generalize to new object categories or limited control

- [00:03:12](https://www.youtube.com/watch?v=55Smbt38KgM&t=192) over a range of spatial attributes.

- [00:03:14](https://www.youtube.com/watch?v=55Smbt38KgM&t=194) They also critique recent interest in text-guided image synthesis, stating it lacks precision

- [00:03:20](https://www.youtube.com/watch?v=55Smbt38KgM&t=200) and flexibility in editing spatial attributes.

- [00:03:23](https://www.youtube.com/watch?v=55Smbt38KgM&t=203) To overcome these challenges, the researchers propose a novel, interactive point-based manipulation

- [00:03:29](https://www.youtube.com/watch?v=55Smbt38KgM&t=209) system.

- [00:03:30](https://www.youtube.com/watch?v=55Smbt38KgM&t=210) This allows users to control the movement of multiple points in an image (referred to

- [00:03:34](https://www.youtube.com/watch?v=55Smbt38KgM&t=214) as 'handle points') to reach designated 'target points'.

- [00:03:37](https://www.youtube.com/watch?v=55Smbt38KgM&t=217) In comparison to a similar study, UserControllableLT, the paper's approach is presented as more

- [00:03:43](https://www.youtube.com/watch?v=55Smbt38KgM&t=223) advanced as it handles multiple points with precise position control, enabling more diverse

- [00:03:47](https://www.youtube.com/watch?v=55Smbt38KgM&t=227) and accurate image manipulation.

- [00:03:50](https://www.youtube.com/watch?v=55Smbt38KgM&t=230) Their proposed system, DragGAN, addresses two sub-problems: guiding handle points towards

- [00:03:55](https://www.youtube.com/watch?v=55Smbt38KgM&t=235) target points, and tracking the handle points at each editing step.

- [00:03:58](https://www.youtube.com/watch?v=55Smbt38KgM&t=238) The authors claim that DragGAN operates effectively within the feature space of a GAN, leading

- [00:04:03](https://www.youtube.com/watch?v=55Smbt38KgM&t=243) to both motion supervision and precise point tracking.

- [00:04:06](https://www.youtube.com/watch?v=55Smbt38KgM&t=246) This is accomplished through a process they describe as a 'shifted feature patch loss'

- [00:04:11](https://www.youtube.com/watch?v=55Smbt38KgM&t=251) that optimizes the latent code, which allows for an efficient, repeated optimization process

- [00:04:16](https://www.youtube.com/watch?v=55Smbt38KgM&t=256) until the handle points reach the targets.

- [00:04:18](https://www.youtube.com/watch?v=55Smbt38KgM&t=258) The researchers further illustrate that DragGAN allows for optional region-specific editing

- [00:04:23](https://www.youtube.com/watch?v=55Smbt38KgM&t=263) and does not rely on additional networks, resulting in a process that only takes a few

- [00:04:27](https://www.youtube.com/watch?v=55Smbt38KgM&t=267) seconds on a single RTX 3090 GPU.

- [00:04:32](https://www.youtube.com/watch?v=55Smbt38KgM&t=272) This results in a rapid and interactive editing system, permitting quick iterations until

- [00:04:36](https://www.youtube.com/watch?v=55Smbt38KgM&t=276) desired output is achieved.

- [00:04:39](https://www.youtube.com/watch?v=55Smbt38KgM&t=279) DragGAN's effectiveness is demonstrated through extensive evaluation on diverse datasets (animals,

- [00:04:44](https://www.youtube.com/watch?v=55Smbt38KgM&t=284) humans, cars, and landscapes).

- [00:04:46](https://www.youtube.com/watch?v=55Smbt38KgM&t=286) The paper claims that DragGAN, unlike conventional shape deformation methods, operates on the

- [00:04:52](https://www.youtube.com/watch?v=55Smbt38KgM&t=292) learned image manifold of a GAN, adhering to underlying object structures.

- [00:04:57](https://www.youtube.com/watch?v=55Smbt38KgM&t=297) This enables the system to imagine occluded content and deform according to the object's

- [00:05:02](https://www.youtube.com/watch?v=55Smbt38KgM&t=302) rigidity.

- [00:05:03](https://www.youtube.com/watch?v=55Smbt38KgM&t=303) The authors have also developed a GUI for users to interactively perform the manipulation.

- [00:05:08](https://www.youtube.com/watch?v=55Smbt38KgM&t=308) Comparative results reportedly confirm the superiority of their approach over UserControllableLT

- [00:05:13](https://www.youtube.com/watch?v=55Smbt38KgM&t=313) and other point tracking approaches, while the application of GAN inversion techniques

- [00:05:17](https://www.youtube.com/watch?v=55Smbt38KgM&t=317) also shows potential for real image editing.

- [00:05:20](https://www.youtube.com/watch?v=55Smbt38KgM&t=320) The paper introduces a novel approach for interactive image manipulation with GANs.

- [00:05:24](https://www.youtube.com/watch?v=55Smbt38KgM&t=324) It's particularly focused on allowing users to define pairs of points within the image,

- [00:05:29](https://www.youtube.com/watch?v=55Smbt38KgM&t=329) and then move those points to their desired locations, which results in corresponding

- [00:05:33](https://www.youtube.com/watch?v=55Smbt38KgM&t=333) adjustments to the image itself.

- [00:05:35](https://www.youtube.com/watch?v=55Smbt38KgM&t=335) The method is built upon the StyleGAN2 architecture, which leverages a 512-dimensional latent code

- [00:05:41](https://www.youtube.com/watch?v=55Smbt38KgM&t=341) to create output images.

- [00:05:43](https://www.youtube.com/watch?v=55Smbt38KgM&t=343) The interactive point-based manipulation process comprises several stages.

- [00:05:47](https://www.youtube.com/watch?v=55Smbt38KgM&t=347) First, the user identifies a series of 'handle points' and 'target points' on the image.

- [00:05:52](https://www.youtube.com/watch?v=55Smbt38KgM&t=352) These handle points are semantic positions within the image (such as the nose and jaw

- [00:05:57](https://www.youtube.com/watch?v=55Smbt38KgM&t=357) on a face) which are moved to their corresponding target points.

- [00:06:00](https://www.youtube.com/watch?v=55Smbt38KgM&t=360) The user may also draw a binary mask to define movable regions of the image.

- [00:06:05](https://www.youtube.com/watch?v=55Smbt38KgM&t=365) Following user input, the system undertakes a series of optimization steps.

- [00:06:09](https://www.youtube.com/watch?v=55Smbt38KgM&t=369) Each step consists of motion supervision and point tracking.

- [00:06:12](https://www.youtube.com/watch?v=55Smbt38KgM&t=372) In the former, a loss function encourages handle points to move towards target points,

- [00:06:17](https://www.youtube.com/watch?v=55Smbt38KgM&t=377) optimizing the latent code.

- [00:06:19](https://www.youtube.com/watch?v=55Smbt38KgM&t=379) The resultant new latent code and image cause a slight movement in the image object.

- [00:06:24](https://www.youtube.com/watch?v=55Smbt38KgM&t=384) This is followed by a point tracking process, updating the handle points to reflect the

- [00:06:28](https://www.youtube.com/watch?v=55Smbt38KgM&t=388) altered object position.

- [00:06:29](https://www.youtube.com/watch?v=55Smbt38KgM&t=389) The optimization process repeats until the handle points reach the positions of the target

- [00:06:33](https://www.youtube.com/watch?v=55Smbt38KgM&t=393) points, with iterations ranging between 30-200 in the authors' experiments.

- [00:06:39](https://www.youtube.com/watch?v=55Smbt38KgM&t=399) The user may stop the optimization at any point, input new handle and target points,

- [00:06:43](https://www.youtube.com/watch?v=55Smbt38KgM&t=403) and continue editing as desired.

- [00:06:45](https://www.youtube.com/watch?v=55Smbt38KgM&t=405) In terms of motion supervision, the paper suggests a novel motion supervision loss that

- [00:06:50](https://www.youtube.com/watch?v=55Smbt38KgM&t=410) does not rely on additional neural networks.

- [00:06:52](https://www.youtube.com/watch?v=55Smbt38KgM&t=412) This loss optimizes the latent code in one step, preserving the appearance of the object

- [00:06:57](https://www.youtube.com/watch?v=55Smbt38KgM&t=417) while modifying its spatial attributes.

- [00:07:00](https://www.youtube.com/watch?v=55Smbt38KgM&t=420) This is performed in a selective manner to control the amount of image content movement.

- [00:07:04](https://www.youtube.com/watch?v=55Smbt38KgM&t=424) To track points after motion supervision, the paper introduces a unique point tracking

- [00:07:08](https://www.youtube.com/watch?v=55Smbt38KgM&t=428) approach for GANs.

- [00:07:10](https://www.youtube.com/watch?v=55Smbt38KgM&t=430) Using the discriminative features of GANs to capture dense correspondence, point tracking

- [00:07:14](https://www.youtube.com/watch?v=55Smbt38KgM&t=434) is achieved via nearest neighbor search in a feature patch.

- [00:07:18](https://www.youtube.com/watch?v=55Smbt38KgM&t=438) This ensures accurate object tracking, even when more than one handle point is considered.

- [00:07:23](https://www.youtube.com/watch?v=55Smbt38KgM&t=443) The authors implemented the approach using PyTorch, with the Adam optimizer used to optimize

- [00:07:27](https://www.youtube.com/watch?v=55Smbt38KgM&t=447) the latent code.

- [00:07:29](https://www.youtube.com/watch?v=55Smbt38KgM&t=449) They set hyper-parameters at λ = 20, r1 = 3, and r2 = 12, and halted optimization when

- [00:07:36](https://www.youtube.com/watch?v=55Smbt38KgM&t=456) all handle points were no more than a pixel away from their respective target points.

- [00:07:40](https://www.youtube.com/watch?v=55Smbt38KgM&t=460) The paper's authors also developed a graphical user interface (GUI) for the system, which

- [00:07:46](https://www.youtube.com/watch?v=55Smbt38KgM&t=466) allows users to manipulate images interactively in a few seconds per edit.

- [00:07:50](https://www.youtube.com/watch?v=55Smbt38KgM&t=470) They provide a supplementary video for live recordings of interactive sessions.
