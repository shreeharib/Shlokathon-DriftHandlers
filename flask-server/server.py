from discordwebhook import Discord
from flask import Flask, jsonify,send_from_directory
import pandas as pd
import joblib
import google.generativeai as genai
import time
import json
from datetime import datetime
app = Flask(__name__,static_folder='/Users/shreehari/Documents/mlhackathon/flask-server')
discord = Discord(url="https://discordapp.com/api/webhooks/1220618057085620225/L4z0myyW2MC87KfkzKt5D7mppChnbYV203SvvTrqeUnGK2kudfebQR2lu0WpzAj-38yi")

genai.configure(api_key="AIzaSyBt_KiDXCAeVxCQcEj8aXpFDCsykI7PP9Q")

def get_gemini_response(input):
    model = genai.GenerativeModel('gemini-pro')
    response = model.generate_content(input)
    return response.text

def get_data():
    return pd.read_csv("/Users/shreehari/Documents/mlhackathon/flask-server/prediction_test.csv").values

df = pd.read_csv("/Users/shreehari/Documents/mlhackathon/flask-server/prediction_test.csv").values
classifier = joblib.load('/Users/shreehari/Documents/mlhackathon/flask-server/rfmodel.joblib')
predictions = []
classes = ["Machine Failure", "Tool Wear Failure", "Heat Dissipation Failure", "Power Failure",
           "Over Strain Failure", "Random Failures"]

i = 0 


@app.route('/predict', methods=['GET'])
def predict():
    global i  # Declare i as global inside the function
    if i < 2000:
        new_row = df[i]
        data = int(classifier.predict([new_row])[0])
        print(data)
        if data != 0:
            result = classes[data]
            print(result, data)
            input_prompt = f"You are a solution provider for predictive failures. In a milling machine my predictive maintenance model predicted {result}. Tell me briefly how to fix it before the failure actually occurs. Make sure your response is brief and to the point. Your response should be in bullet points. Don't add styling to your response such as bold and other"
            response = get_gemini_response(input_prompt.replace("*", ""))
            x = datetime.now()
            # discord.post(content=f"Alert!! Your machine might face {result}.\nFor detailed information check: www.google.com")
            new_responses = f'{result} may occur.\n' + "Suggestions:\n"+ response +"\n" + f"{x.strftime('%H:%M:%S')} - {x.day}/{x.month}/{x.year}"
            i += 1  # Increment i
            print(jsonify(new_responses))
            
            # Append new_responses to data.json
            with open('/Users/shreehari/Documents/mlhackathon/flask-server/data.json', 'r+') as f:
                data = json.load(f)
                data.append(new_responses)
                f.seek(0)
                json.dump(data, f)
            
            return jsonify({'response': new_responses})
        i += 1  # Increment i
    return jsonify({'response': None})


@app.route('/get_data', methods=['GET'])
def get_data():
    with open('/Users/shreehari/Documents/mlhackathon/flask-server/data.json', 'r') as f:
        data = json.load(f)
    return jsonify({'data': data})



@app.route('/newdata', methods=['GET'])
def newdata():
    global i  # Declare i as global inside the function
    if i < 2000:
        new_row = df[i]
        class_data = int(classifier.predict([new_row])[0])
        
        if class_data != 0:
            result = classes[class_data]
            print(result, class_data)
            input_prompt = f"You are a solution provider for predictive failures. In a milling machine my predictive maintenance model predicted {result}. Tell me briefly how to fix it before the failure actually occurs. Make sure your response is brief and to the point. Your response should be in bullet points. Don't add styling to your response such as bold and other"
            response = get_gemini_response(input_prompt.replace("*", ""))
            x = datetime.now()
            discord.post(content=f"Alert!! Your machine might face {result}.\nFor detailed information check: http://localhost:3000/predictionss")
            new_responses = f'{result} may occur.\n' + "Suggestions:\n"+ response +"\n" + f"{x.strftime('%H:%M:%S')} - {x.day}/{x.month}/{x.year}"
            with open('/Users/shreehari/Documents/mlhackathon/flask-server/data.json', 'r+') as f:
                data = json.load(f)
                data.append(new_responses)
                f.seek(0)
                json.dump(data, f)
            i += 1  # Increment i
            return jsonify({'response': class_data})
        i += 1  # Increment i
    return jsonify({'response': class_data})

if __name__ == '__main__':
    app.run(debug=True,port=8000)
