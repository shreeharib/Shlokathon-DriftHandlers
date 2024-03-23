# from flask import Flask, jsonify

# app = Flask(__name__)

# @app.route("/members")
# def members():
#     return jsonify({"Hello": ["member1"]})

# if __name__ == "__main__":
#     app.run(debug=True, port=8000)
# from flask import Flask, jsonify
# import pandas as pd
# import joblib
# import google.generativeai as genai
# import time

# app = Flask(__name__)

# genai.configure(api_key="AIzaSyBt_KiDXCAeVxCQcEj8aXpFDCsykI7PP9Q")

# def get_gemini_response(input):
#     model = genai.GenerativeModel('gemini-pro')
#     response = model.generate_content(input)
#     return response.text

# def get_data():
#     return pd.read_csv("/Users/shreehari/Documents/mlhackathon/flask-server/prediction_test.csv").values
# df = pd.read_csv("/Users/shreehari/Documents/mlhackathon/flask-server/prediction_test.csv").values

# classifier = joblib.load('/Users/shreehari/Documents/mlhackathon/flask-server/rfmodel.joblib')
# predictions = []


# @app.route('/predict', methods=['GET'])
# def predict():
#     # for seconds in range(2000):
#     #     new_row = get_data()[seconds]
#     #     prediction = classifier.predict([new_row])[0]
#     #     predictions.append(prediction)
#     #     classes = ["Machine Failure", "Tool Wear Failure", "Heat Dissipation Failure", "Power Failure",
#     #                "Over Strain Failure", "Random Failures"]
#     #     if prediction != 0:
#     #         result = classes[prediction]
#     for i in range(2000):
#         time.sleep(1)
#         new_row = df[i]
#         data = int(classifier.predict([new_row])[0])
#         print(data)
#         classes = ["Machine Failure", "Tool Wear Failure", "Heat Dissipation Failure", "Power Failure",
#                    "Over Strain Failure", "Random Failures"]
#         if data != 0:
#             result = classes[data]
#             print(result, data)
#             input_prompt = f"You are a solution provider for predictive failures. In a milling machine my predictive maintenance model predicted {result}. Tell me briefly how to fix it before the failure actually occurs. Make sure your response is brief and to the point. Your response should be in bullet points. Don't add styling to your response such as bold and other"
#             response = get_gemini_response(input_prompt.replace("*", ""))
#             new_responses = f'{result} may occur.\n' + "Suggestions:\n"+ response +"\n"
#             return jsonify({'response': new_responses})

# if __name__ == '__main__':
#     app.run(debug=True,port=8000)
from flask import Flask, jsonify,send_from_directory
import pandas as pd
import joblib
import google.generativeai as genai
import time
from datetime import datetime
app = Flask(__name__,static_folder='/Users/shreehari/Documents/mlhackathon/flask-server')

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

i = 0  # Make i a global variable

@app.route('/reports')
def serve_report():
    return send_from_directory(directory='/Users/shreehari/Documents/mlhackathon/flask-server', path='report.json')

@app.route('/reportsy')
def servey_report():
    return send_from_directory(app.static_folder, 'my_report.html')

@app.route("/members")
def members():
    return jsonify({"Hello": ["member1"]})

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
            new_responses = f'{result} may occur.\n' + "Suggestions:\n"+ response +"\n" + f"{x.strftime('%H:%M:%S')} - {x.day}/{x.month}/{x.year}"
            i += 1  # Increment i
            return jsonify({'response': new_responses})
        i += 1  # Increment i
    return jsonify({'response': None})

@app.route('/newdata', methods=['GET'])
def newdata():
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
            new_responses = f'{result} may occur.\n' + "Suggestions:\n"+ response +"\n" + f"{x.strftime('%H:%M:%S')} - {x.day}/{x.month}/{x.year}"
            i += 1  # Increment i
            return jsonify({'response': data})
        i += 1  # Increment i
    return jsonify({'response': data})

if __name__ == '__main__':
    app.run(debug=True,port=8000)
