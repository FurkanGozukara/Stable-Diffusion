# Stable Diffusion WebUI Forge Neo - Complete Model Support Guide

## Table of Contents
- [Supported Model Types](#supported-model-types)
- [Model Folder Structure](#model-folder-structure)
- [Detailed Model Placement Guide](#detailed-model-placement-guide)
- [Supported File Formats](#supported-file-formats)
- [Model Loading Configuration](#model-loading-configuration)
- [Advanced Features](#advanced-features)
- [Troubleshooting](#troubleshooting)

---

## Supported Model Types

### 1. **Stable Diffusion Models**
- **SD 1.5** - Standard Stable Diffusion 1.5 models
- **SDXL** - Stable Diffusion XL models (1024x1024 base resolution)
- **SDXL Refiner** - SDXL refiner models for enhanced quality

### 2. **Flux Models**
- **Flux Dev** - Development version of Flux models
- **Flux Krea** - Krea variant of Flux
- **Flux Kontext** - Kontext variant (requires "kontext" in filename/path for proper detection)
  - Supports img2img and inpaint modes

### 3. **Wan Models (v2.2)**
- Supports multiple generation modes:
  - txt2img (Text to Image)
  - img2img (Image to Image)
  - txt2vid (Text to Video)
  - img2vid (Image to Video)
- **Note:** Video export requires FFmpeg installation

### 4. **Chroma Models**
- ChromaTransformer2DModel based architectures
- Advanced color and style control

### 5. **Nunchaku/SVDQ Models**
- Variants: dev, krea, kontext, t5
- Optimized quantized models for faster inference

### 6. **LoRA Models**
- Low-Rank Adaptation models for fine-tuning
- Compatible with SD1.5, SDXL, and Flux base models

### 7. **ControlNet Models**
- Conditional control models for guided generation
- Support for various control types (pose, depth, canny, etc.)

### 8. **VAE Models**
- Variational Autoencoder models
- Support for both standard and Wan VAE architectures

### 9. **Text Encoders**
- CLIP models (CLIPTextModel, CLIPTextModelWithProjection)
- T5 Encoder models (T5EncoderModel, UMT5EncoderModel)
- Support for quantized versions (nf4, fp4, gguf formats)

### 10. **Upscaler Models**
- ESRGAN and compatible architectures
- Support for various upscaling algorithms via spandrel
- Can run in half precision for faster processing

---

## Model Folder Structure

The base models directory is located at:
```
E:\Forge_Neo_v1\sd-webui-forge-classic\models\
```

### Complete Folder Structure:

```
models/
├── Stable-diffusion/          # Main checkpoint models
│   ├── sd15_models.safetensors
│   ├── sdxl_models.safetensors
│   ├── flux_models.safetensors
│   ├── wan_models.safetensors
│   └── chroma_models.safetensors
│
├── Lora/                       # LoRA adaptation models
│   ├── character_loras/
│   ├── style_loras/
│   └── concept_loras/
│
├── VAE/                        # VAE models
│   ├── vae_models.safetensors
│   └── wan_vae_models.safetensors
│
├── ControlNet/                 # ControlNet models
│   ├── openpose/
│   ├── depth/
│   ├── canny/
│   └── other_control_types/
│
├── ControlNetPreprocessor/     # Preprocessor models for ControlNet
│   └── preprocessor_models/
│
├── ESRGAN/                     # Upscaler models
│   ├── 4x_upscalers/
│   ├── 2x_upscalers/
│   └── other_scales/
│
├── embeddings/                 # Textual embeddings
│   ├── negative_embeddings/
│   └── positive_embeddings/
│
├── text_encoder/               # Text encoder models
│   ├── clip_models/
│   ├── t5_models/
│   └── umt5_models/
│
└── diffusers/                  # Diffusers format models
    └── model_folders/
```

---

## Detailed Model Placement Guide

### Stable Diffusion Checkpoints
**Location:** `models/Stable-diffusion/`

Place your main model files here:
- SD 1.5 models (512x512 base resolution)
- SDXL models (1024x1024 base resolution)
- SDXL Refiner models
- Flux models (Dev, Krea, Kontext)
- Wan 2.2 models
- Chroma models

**Supported formats:** `.safetensors`, `.ckpt`, `.pth`

**Important Notes:**
- Flux Kontext models MUST include "kontext" in the filename or parent folder name for proper detection
- Example: `flux_kontext_dev.safetensors` or place in folder `kontext/flux_dev.safetensors`

### LoRA Models
**Location:** `models/Lora/`

Place LoRA adaptation files here. Organize by type for better management:
- Character LoRAs
- Style LoRAs
- Concept LoRAs

**Supported formats:** `.safetensors`, `.pt`, `.pth`, `.ckpt`

### VAE Models
**Location:** `models/VAE/`

Place VAE models here:
- Standard VAE models for SD1.5/SDXL
- Wan VAE models for Wan 2.2
- Custom trained VAE models

**Supported formats:** `.safetensors`, `.pt`, `.pth`, `.ckpt`

### ControlNet Models
**Location:** `models/ControlNet/`

Organize by control type:
- `openpose/` - Human pose detection models
- `depth/` - Depth map models
- `canny/` - Edge detection models
- `mlsd/` - Line detection models
- `normal/` - Normal map models
- `seg/` - Segmentation models

**Supported formats:** `.safetensors`, `.pth`

### Upscaler Models
**Location:** `models/ESRGAN/`

All upscaler models now go in a single folder:
- ESRGAN models
- Real-ESRGAN models
- SwinIR models
- Other spandrel-compatible architectures

**Supported formats:** `.pth`, `.safetensors`, `.pt`

### Embeddings
**Location:** `models/embeddings/`

Textual inversion embeddings:
- Negative embeddings (for negative prompts)
- Positive embeddings (for enhanced prompts)

**Supported formats:** `.pt`, `.safetensors`, `.bin`

### Text Encoders
**Location:** `models/text_encoder/`

CLIP and T5 encoder models:
- CLIP models for SD1.5/SDXL
- T5 models for advanced text encoding
- UMT5 models
- SVDQ quantized models

**Supported formats:** `.safetensors`, `.bin`, `.gguf`

---

## Supported File Formats

### Primary Formats
1. **`.safetensors`** (Recommended)
   - Safer and faster loading
   - Prevents arbitrary code execution
   - Supports metadata

2. **`.ckpt`**
   - Legacy checkpoint format
   - Compatible but slower to load

3. **`.pth`**
   - PyTorch native format
   - Used for various model types

4. **`.pt`**
   - PyTorch tensor format
   - Common for LoRA and embeddings

### Specialized Formats
1. **`.gguf`** (Quantized models)
   - Highly compressed format
   - Supports various quantization levels
   - Reduced memory usage

2. **`.bin`** (Binary format)
   - Used for some text encoders
   - Hugging Face compatible

3. **Quantized formats**
   - `nf4` - 4-bit NormalFloat quantization
   - `fp4` - 4-bit floating point
   - `fp8` - 8-bit floating point (e4m3fn, e5m2)

---

## Model Loading Configuration

### Command Line Arguments

You can customize model paths using command line arguments in `webui-user.bat`:

```batch
set COMMANDLINE_ARGS=--model-ref "D:\MyModels" --forge-ref-a1111-home "C:\A1111\stable-diffusion-webui" --forge-ref-comfy-home "C:\ComfyUI"
```

#### Available Arguments:

1. **`--model-ref`**
   - Points to a central models folder containing all your models
   - Replaces the default models folder entirely
   - Example: `--model-ref "D:\AI_Models"`

2. **`--forge-ref-a1111-home`**
   - Reference an Automatic1111 installation to share models
   - Loads: Stable-diffusion, text_encoder folders
   - Example: `--forge-ref-a1111-home "C:\automatic1111"`

3. **`--forge-ref-comfy-home`**
   - Reference a ComfyUI installation to share models
   - Loads: diffusion_models, clip folders
   - Example: `--forge-ref-comfy-home "C:\ComfyUI"`

4. **`--ckpt-dir`**
   - Add additional checkpoint directories
   - Can specify multiple directories

### Model Caching

The WebUI implements intelligent caching:
- ControlNet models: Cached based on `control_net_model_cache_size` setting (default: 5)
- Metadata caching for faster subsequent loads
- SHA256 hash caching for model verification

---

## Advanced Features

### Quantization Support

The WebUI supports various quantization methods for reduced memory usage:

1. **GGUF Quantization**
   - Highly efficient compression
   - Supports multiple quantization levels
   - Automatic detection and loading

2. **BitsAndBytes Quantization**
   - nf4 and fp4 formats
   - Dynamic quantization support
   - Reduced VRAM usage

3. **Float8 Support**
   - Hardware-accelerated on compatible GPUs
   - e4m3fn and e5m2 formats
   - Balanced quality/performance

### Attention Mechanisms

Supports multiple attention backends (auto-selected in order of availability):
1. SageAttention (fastest, requires installation)
2. FlashAttention (fast, requires installation)
3. xformers (good performance, `--xformers` flag)
4. PyTorch native
5. Basic attention

### Memory Management

- **Dynamic memory allocation** based on available VRAM
- **Model offloading** to system RAM when needed
- **Half precision (fp16) support** for upscalers (`--half` in settings)
- **GPU tile composition** for upscaling (configurable in settings)

### Special Model Features

1. **Wan 2.2 Video Generation**
   - Requires FFmpeg for video export
   - Supports both txt2vid and img2vid
   - Configurable frame rates and durations

2. **Flux Kontext**
   - Advanced contextual understanding
   - Supports img2img and inpaint
   - Requires proper naming for detection

3. **SVDQ/Nunchaku Models**
   - Quantized models for faster inference
   - Multiple variants (dev, krea, kontext, t5)
   - Reduced memory footprint

4. **RescaleCFG & MaHiRo**
   - RescaleCFG: Reduces burnt colors in v-pred models
   - MaHiRo: Alternative CFG calculation for better prompt adherence
   - Enable in Settings > UI Alternatives

---

## Troubleshooting

### Common Issues and Solutions

#### Model Not Detected
- **Check file extension:** Must be `.safetensors`, `.ckpt`, `.pth`, `.pt`, or `.bin`
- **Verify folder structure:** Ensure models are in correct subfolders
- **Refresh model list:** Use the refresh button in the WebUI
- **Check file permissions:** Ensure read access to model files

#### Out of Memory Errors
- **Enable model offloading** in settings
- **Use quantized models** (GGUF, nf4, fp4)
- **Reduce batch size** to 1
- **Use half precision** for VAE and upscalers
- **Close other GPU applications**

#### Flux Kontext Not Working
- **Naming requirement:** File or folder must contain "kontext"
- **Example:** `flux_kontext_dev.safetensors`
- **Alternative:** Place in folder named `kontext/`

#### Video Export Failing (Wan 2.2)
- **Install FFmpeg:** Required for video encoding
- **Add to PATH:** Ensure FFmpeg is in system PATH
- **Verify installation:** Run `ffmpeg` in command prompt

#### Slow Loading Times
- **Use .safetensors format:** Faster than .ckpt
- **Enable caching:** Check cache settings
- **Use SSD storage:** Faster than HDD
- **Reduce model cache size** if low on RAM

#### ControlNet Issues
- **Match model version:** Use SD1.5 ControlNet with SD1.5 base models
- **Check preprocessor:** Ensure preprocessor matches control type
- **Update ControlNet models:** Some old models may be incompatible

### Performance Optimization Tips

1. **Use appropriate attention:**
   - Install SageAttention for fastest generation (`--sage`)
   - Or use xformers as fallback (`--xformers`)

2. **Optimize for your GPU:**
   - RTX 30+ series: Try `--cuda-malloc --cuda-stream --pin-shared-memory`
   - RTX 50 series: Consider SageAttention 2

3. **Model format selection:**
   - Prefer `.safetensors` over `.ckpt`
   - Use quantized models if VRAM limited
   - Consider GGUF format for large models

4. **Storage optimization:**
   - Use `--uv-symlink` to reduce installation size
   - Share models between UIs using `--forge-ref-*` arguments
   - Organize models in subfolders for better management

---

## Model Compatibility Matrix

| Model Type | SD 1.5 | SDXL | Flux | Wan 2.2 | Chroma |
|------------|--------|------|------|---------|---------|
| Base Checkpoint | ✅ | ✅ | ✅ | ✅ | ✅ |
| LoRA | ✅ | ✅ | ✅ | ❌ | ❓ |
| ControlNet | ✅ | ✅ | ❓ | ❌ | ❌ |
| VAE | ✅ | ✅ | ✅ | ✅* | ✅ |
| Textual Inversion | ✅ | ✅ | ❌ | ❌ | ❌ |
| img2img | ✅ | ✅ | ✅** | ✅ | ✅ |
| Inpaint | ✅ | ✅ | ✅** | ❌ | ❓ |
| Video | ❌ | ❌ | ❌ | ✅ | ❌ |

Legend:
- ✅ Fully supported
- ✅* Special VAE architecture (WanVAE)
- ✅** Only Flux Kontext variant
- ❓ Experimental/Limited support
- ❌ Not supported

---

## Additional Resources

- **Original Forge Repository:** https://github.com/lllyasviel/stable-diffusion-webui-forge
- **Neo Fork:** https://github.com/Haoming02/sd-webui-forge-classic
- **Model Downloads:**
  - Civitai: https://civitai.com
  - Hugging Face: https://huggingface.co
  
## Notes

- This guide covers the Neo branch of Forge as of September 2024
- Always backup your models before major updates
- Check the GitHub repository for the latest updates and features
- Join the community Discord for help and model recommendations

---

*Last Updated: September 2024 - Forge Neo Branch*
