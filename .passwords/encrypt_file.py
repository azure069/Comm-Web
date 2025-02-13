from Crypto.Cipher import AES
import os

def encrypt_file(input_filename, password):
    try:
        # Read the original file
        with open(input_filename, 'rb') as f:
            file_data = f.read()

        # AES requires a key of 16, 24, or 32 bytes, so we pad or truncate the password to 32 bytes
        key = password.ljust(32, ' ').encode()  # AES key must be 16, 24, or 32 bytes
        cipher = AES.new(key, AES.MODE_GCM)

        # Encrypt the file data
        ciphertext, tag = cipher.encrypt_and_digest(file_data)

        # Save the encrypted file with a .enc extension
        encrypted_filename = input_filename + ".enc"
        with open(encrypted_filename, 'wb') as f:
            f.write(cipher.nonce)
            f.write(tag)
            f.write(ciphertext)

        # Delete the original file after encryption
        os.remove(input_filename)
        print(f"Encrypted file saved as {encrypted_filename}. Original file deleted.")

    except Exception as e:
        print(f"Error during encryption: {e}")

# Example usage: Encrypt the file
input_filename = "passwords.txt"  # Specify the actual filename here
password = input("Enter the password to encrypt the file: ")
encrypt_file(input_filename, password)
