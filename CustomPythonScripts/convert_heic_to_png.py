#pip install pyheif Pillow
#Please donate SECourses https://www.patreon.com/SECourses

import os
from PIL import Image
import pyheif

def heic_to_png(input_folder, output_folder):
    # Ensure the output folder exists
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Loop through all files in the input folder
    for filename in os.listdir(input_folder):
        if filename.lower().endswith(".heic"):
            heic_path = os.path.join(input_folder, filename)
            # Read the HEIC image
            heif_file = pyheif.read(heic_path)
            # Convert to PIL image
            image = Image.frombytes(
                heif_file.mode, 
                heif_file.size, 
                heif_file.data,
                "raw",
                heif_file.mode,
                heif_file.stride,
            )
            
            # Create the output path
            output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + '.png')
            # Save the image as PNG
            image.save(output_path, "PNG")

if __name__ == "__main__":
    INPUT_FOLDER = r"/path/to/input_folder"
    OUTPUT_FOLDER = r"/path/to/output_folder"
    
    heic_to_png(INPUT_FOLDER, OUTPUT_FOLDER)
