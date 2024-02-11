import os
import time

def generate_large_file(filename, size_gb, chunk_size=1024*1024*10): # 10MB chunk
    """Generate a file of specific size with random data."""
    size_bytes = size_gb * 1024**3 # Convert GB to Bytes
    start_time = time.time() # Capture start time

    with open(filename, 'wb') as f:
        for _ in range(0, size_bytes, chunk_size):
            # Generate random bytes
            chunk = os.urandom(min(chunk_size, size_bytes))
            f.write(chunk)
            size_bytes -= len(chunk)
            if size_bytes <= 0:
                break

    end_time = time.time() # Capture end time
    duration = end_time - start_time # Calculate duration in seconds
    size_gb_written = size_gb # The size of the file written in GB
    average_speed = size_gb_written / duration # GB per second

    # Print results
    print(f"Time taken to write the file: {duration:.2f} seconds")
    print(f"Average speed: {average_speed:.2f} GB/s")

# Adjust the filename and size as needed
filename = 'test_file.bin'
size_gb = 150 # Adjusted for demonstration; original value was 150

generate_large_file(filename, size_gb)
