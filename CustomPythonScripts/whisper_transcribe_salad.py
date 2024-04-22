import gradio as gr
import requests
import json
from moviepy.editor import AudioFileClip
import os
from pydub import AudioSegment
from io import BytesIO

# Constants
API_URL = "https://your_api_url.salad.cloud"
API_KEY = "your_api_key"

def transcribe_audio(file, is_video=False):
    headers = {
        'Salad-Api-Key': API_KEY
    }

    # Extract audio from video
    audio = AudioFileClip(file.name)
    audio_path = "temp_audio.wav"
    audio.write_audiofile(audio_path)
        
    # Convert audio to MP3 format
    audio_segment = AudioSegment.from_wav(audio_path)
    mp3_path = "temp_audio.mp3"
    audio_segment.export(mp3_path, format="mp3")
        
    file = open(mp3_path, "rb")

    response = requests.post(f"{API_URL}/asr", headers=headers, files={'file': file})
    if response.status_code == 200:
        data = response.json()
        srt_output = convert_to_srt(data)
        raw_text = data["text"]
        json_output = json.dumps(data, indent=2)

        # Save SRT file
        with open("transcription.srt", "w") as srt_file:
            srt_file.write(srt_output)

        # Save raw text file
        with open("transcription.txt", "w") as txt_file:
            txt_file.write(raw_text)

        # Save JSON file
        with open("transcription.json", "w") as json_file:
            json_file.write(json_output)

        return srt_output, raw_text, json_output
    else:
        return "Failed to transcribe. Error: " + response.text, "", ""

def convert_to_srt(data):
    srt_output = ""
    for i, chunk in enumerate(data["chunks"], start=1):
        start_time = format_timestamp(chunk["timestamp"][0])
        end_time = format_timestamp(chunk["timestamp"][1])
        text = chunk["text"].strip()
        
        srt_output += f"{i}\n"
        srt_output += f"{start_time} --> {end_time}\n"
        srt_output += f"{text}\n\n"
    
    return srt_output

def format_timestamp(seconds):
    hours = int(seconds // 3600)
    minutes = int((seconds % 3600) // 60)
    seconds = seconds % 60
    milliseconds = int((seconds - int(seconds)) * 1000)
    return f"{hours:02d}:{minutes:02d}:{int(seconds):02d},{milliseconds:03d}"

def handle_file(file):
    if file is None:
        return "No file uploaded.", "", ""

    return transcribe_audio(file)

def main():
    # Gradio interface
    with gr.Blocks() as app:
        gr.Markdown("# Salad Transcription Service")
        with gr.Row():
            file_input = gr.File(label="Upload a sound or video file")
            submit_button = gr.Button("Transcribe")
        srt_output = gr.Textbox(label="SRT Output")
        raw_text_output = gr.Textbox(label="Raw Text Output")
        json_output = gr.Textbox(label="JSON Output")

        file_input.change(handle_file, inputs=file_input, outputs=[srt_output, raw_text_output, json_output])

    app.launch(share=True)  # Enable sharing

if __name__ == "__main__":
    main()