# https://imagemagick.org/script/download.php 
# Please donate SECourses https://www.patreon.com/SECourses

import os
import subprocess

def convert_heic_to_png(input_folder_path, output_folder_path):
    """Converts all HEIC images in the input folder to PNG images in the output folder using ImageMagick.

    Args:
        input_folder_path: The path to the input folder containing the HEIC images.
        output_folder_path: The path to the output folder where the converted PNG images will be saved.
    """
    if not os.path.exists(output_folder_path):
        os.makedirs(output_folder_path)

    for filename in os.listdir(input_folder_path):
        if filename.lower().endswith(".heic"):
            input_file_path = os.path.join(input_folder_path, filename)
            output_file_path = os.path.join(output_folder_path, os.path.splitext(filename)[0] + ".png")
            
            try:
                # Constructing the ImageMagick convert command
                command = ["magick", input_file_path, output_file_path]
                
                # Executing the command
                subprocess.run(command, check=True)
                print(f"Conversion successful: {input_file_path} to {output_file_path}")
            except subprocess.CalledProcessError as e:
                print(f"ImageMagick conversion failed: {str(e)}")
            except Exception as e:
                print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    input_folder_path = r"input_folder"
    output_folder_path = r"output_folder"
    convert_heic_to_png(input_folder_path, output_folder_path)
