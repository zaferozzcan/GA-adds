import requests

response = requests.get('https://www.multidots.com/importance-of-code-quality-and-coding-standard-in-software-development/#:~:text=Coding%20standards%20help%20in%20the,and%20thereby%20reduce%20the%20errors.&text=If%20the%20coding%20standards%20are%20followed%2C%20the%20code%20is%20consistent,at%20any%20point%20in%20time.')

print(response.text)