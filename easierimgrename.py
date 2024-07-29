import os

def rename_images(directory, name):
    count = 1
    for filename in os.listdir(directory):
        if filename.endswith(".jpg") or filename.endswith(".png") or filename.endswith(".JPG") or filename.endswith(".PNG") or filename.endswith(".jpeg") or filename.endswith(".JPEG"):
            new_name = f"{name}{count}"
            extension = os.path.splitext(filename)[1]
            new_filename = f"{new_name}{extension}"
            os.rename(os.path.join(directory, filename), os.path.join(directory, new_filename))
            count += 1

# Example usage
directory = "imgs/restorations/"
name = "rangerrespic"
rename_images(directory, name)