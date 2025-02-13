from Crypto.Cipher import AES
import os

def decrypt_file(input_filename, password):
    try:
        # Read the encrypted file
        with open(input_filename, 'rb') as f:
            nonce, tag, ciphertext = [f.read(x) for x in (16, 16, -1)]

        # AES decryption requires the same password to generate the key
        key = password.ljust(32, ' ').encode()  # Make sure the key length matches the encryption key length
        cipher = AES.new(key, AES.MODE_GCM, nonce=nonce)

        # Decrypt the file data
        file_data = cipher.decrypt_and_verify(ciphertext, tag)

        # Save the decrypted file by removing the .enc extension
        decrypted_filename = input_filename[:-4]  # Remove the .enc extension to restore the original filename
        with open(decrypted_filename, 'wb') as f:
            f.write(file_data)

        # Delete the encrypted file after decryption
        os.remove(input_filename)
        print(f"Decrypted file saved as {decrypted_filename}. Encrypted file deleted.")

    except ValueError:
        print("Incorrect password or data integrity error")
    except Exception as e:
        print(f"Error during decryption: {e}")

# Example usage: Decrypt the file
input_filename = "passwords.txt.enc"  # Specify the actual encrypted file here
password = input("Enter the password to decrypt the file: ")
decrypt_file(input_filename, password)
