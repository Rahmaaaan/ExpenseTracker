alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

# Function that encode & decode message by take certain input as intial text, shifting number, cipher direction as encode or decode
def caesar(start_text, shift_amount, cipher_direction):
  end_text = ""
  # By taking a character in start_text, if character is in alphabet list it store the index of that character & store in position
  for character in start_text:
    if character in alphabet:
      position = alphabet.index(character)
      # By checking direction it will add or subtract the position & shift_amount into new_position 
      if cipher_direction == "encode":
        new_position = position + shift_amount
      else:
        new_position = position - shift_amount
      # Adding into end_text by taking the new_position & alphabet list 
      end_text += alphabet[new_position]
    else:
      # It will add same letter & symbols in the end_text
      end_text += character
  print(f"Here's the {cipher_direction}d result is {end_text}")

from art import logo
print(f"\033[31m{logo}\033[00m")

should_end = False
# While loop to keep asking for input until user wants to quit
while not should_end:

  direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n")
  text = input("Type your message:\n").lower()
  shift = int(input("Type the shift number:\n")) % 26

  # calling caesar function with direction, text and shift as input
  caesar(start_text=text, shift_amount=shift, cipher_direction=direction)

  restart = input("Type 'yes' if you want to go again. Otherwise type 'no'.\n")
  if restart == "no":
    should_end = True
    print("Goodbye")
    


