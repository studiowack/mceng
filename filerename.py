import os

directory = './imgs'  # Replace with the actual directory path

for filename in os.listdir(directory):
    if filename.endswith('.jpg'):  # Replace with the desired file extension
        new_filename = filename.replace(' ', '_').replace(',', '')
        os.rename(os.path.join(directory, filename), os.path.join(directory, new_filename))