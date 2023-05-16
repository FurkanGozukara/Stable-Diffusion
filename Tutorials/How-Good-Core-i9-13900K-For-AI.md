# video tutorial will be added once it is published

# How Good Core i9 13900K For AI, Machine Learning, Stable Diffusion, Video Rendering Tasks

## Core i9 13900K VS Core i7 10700F Benchmarking Results

### Tested Applications

* Stable Diffusion via Automatic1111 Web UI : https://www.youtube.com/playlist?list=PL_pbwdIyffsmclLl0O144nQRnezKlNdx3
* Open AI Whisper : https://www.youtube.com/watch?v=msj3wuYf3d8
* Auto Editor to remove non-speech parts : https://github.com/WyattBlue/auto-editor
* Davinci Resolve (free edition) 4K Video Rendering : https://youtu.be/_-yYRGKyz8E
* Davinci Resolve (free edition) Proxy Media generation 

### Test video for auto-encode and Davinci Resolve

* Duration 00:07:33
* Video: HVC1 3840x2160 60fps 113096kbps [V: hevc main L5.1, yuv420p, 3840x2160, 113096 kb/s]
* Audio: AAC 48000Hz stereo 181kbps [A: SoundHandler (aac lc, 48000 Hz, stereo, 181 kb/s)]

### Whisper Used Command

GPU test :

```whisper "C:\13900k cpu review\test.mp3" --model large-v1 --language en --initial_prompt "Welcome our Youtube channel." --best_of 10 --beam_size 10```

CPU test :

```whisper "C:\13900k cpu review\test.mp3" --model large-v1 --language en --initial_prompt "Welcome our Youtube channel." --device cpu --best_of 10 --beam_size 10```
 
## Core i7 10700F Setup
 
### CPU-z & GPU-z Validation
 
 * CPU : 10700F
 * GPU : RTX 3090
 * RAM : 64 GB DDR4-2660
 
CPU-z Validation Link : **https://valid.x86.fr/asaijw**
 
GPU-z Validation Link : **https://www.techpowerup.com/gpuz/details/m696w**


 
