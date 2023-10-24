#pip install imageio imageio[freeimage]
#Please donate SECourses https://www.patreon.com/SECourses

import os
import imageio

def heic_to_png(input_folder, output_folder):
    # Ensure the output folder exists
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)

    # Loop through all files in the input folder
    for filename in os.listdir(input_folder):
        if filename.lower().endswith(".heic"):
            heic_path = os.path.join(input_folder, filename)
            # Read the HEIC image
            image = imageio.imread(heic_path)
            
            # Create the output path
            output_path = os.path.join(output_folder, os.path.splitext(filename)[0] + '.png')
            # Save the image as PNG
            imageio.imwrite(output_path, image)

if __name__ == "__main__":
    INPUT_FOLDER = "/path/to/input_folder"
    OUTPUT_FOLDER = "/path/to/output_folder"
    
    heic_to_png(INPUT_FOLDER, OUTPUT_FOLDER)
