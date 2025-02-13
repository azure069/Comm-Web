Encryption and Decryption Scripts for Passwords

Description:
This repository contains two Python scripts for encrypting and decrypting a file (`passwords.txt`) using AES encryption. The encrypted file (`passwords.txt.enc`) can be securely stored and decrypted when needed using a password.

---

1. **Encrypting the passwords.txt File**:
   - The `encrypt.py` script allows you to encrypt a `passwords.txt` file with a password of your choice.
   - The encrypted file will be saved as `passwords.txt.enc`.
   - When encrypting, the script will delete the original `passwords.txt` file after encryption.

   **Steps**:
   - Ensure you have the required Python libraries installed (`pycryptodome`).
   - Run the script using the following command:
     ```bash
     python encrypt.py
     ```
   - The script will prompt you to enter a password for encryption.

---

2. **Decrypting the passwords.txt.enc File**:
   - The `decrypt.py` script allows you to decrypt the `passwords.txt.enc` file using the same password that was used for encryption.
   - Once decrypted, the original `passwords.txt` file will be restored, and the encrypted file will be deleted.

   **Steps**:
   - Ensure the encrypted file (`passwords.txt.enc`) is in the same directory as the script.
   - Run the script using the following command:
     ```bash
     python decrypt.py
     ```
   - The script will prompt you to enter the password used for encryption.

---

### Python Script Details:

1. **encrypt.py**:
   - Reads the `passwords.txt` file and encrypts its contents using AES encryption with the provided password.
   - Generates a `.enc` file as output and deletes the original `passwords.txt` file.

2. **decrypt.py**:
   - Reads the encrypted `passwords.txt.enc` file and decrypts it using the provided password.
   - Restores the original `passwords.txt` file and deletes the `.enc` encrypted file.

---

### Requirements:
- Python 3.x
- `pycryptodome` library for AES encryption

   Install `pycryptodome` with the following:
   ```bash
   pip install pycryptodome
