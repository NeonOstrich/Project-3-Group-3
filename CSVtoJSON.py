import csv
import json

# Open CSV file for reading
with open('InfantMortalityRate.csv', 'r') as csv_file:
    # Create a CSV reader
    csv_reader = csv.DictReader(csv_file)
    
    # Create an empty list to store the JSON objects
    json_list = []
    
    # Iterate through each row in the CSV file
    for row in csv_reader:
        # Append each row as a dictionary to the JSON list
        json_list.append(row)

# Write the JSON list to a JSON file
with open('output.json', 'w') as json_file:
    # Use the json.dump() function to write the JSON list to the file
    json.dump(json_list, json_file, indent=4)
