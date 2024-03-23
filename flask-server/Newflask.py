from datetime import datetime

# from discordwebhook import Discord
import joblib
from flask import Flask
import pandas as pd
from flask_socketio import SocketIO, emit
import google.generativeai as genai
import threading
import time
import os

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

df = pd.read_csv("/Users/shreehari/Documents/mlhackathon/flask-server/prediction_test.csv").values
classifier = joblib.load('/Users/shreehari/Documents/mlhackathon/flask-server/rfmodel.joblib')

predictions = []




def update_data():
    global current_time
    for i in range(2000):
        time.sleep(1)
        new_row = df[i]
        prediction_data = int(classifier.predict([new_row])[0])
        classes = ["Machine Failure", "Tool Wear Failure", "Heat Dissipation Failure", "Power Failure",
                   "Over Strain Failure", "Random Failures"]
        if prediction_data != 0:
            result = classes[prediction_data]
            current_time = datetime.now().strftime("%H:%M:%S")
            # discord.post(content=f"Alert!! Your machine might face {result}.\nFor detailed information check: www.google.com")
            print(result)
        socketio.emit('new_data', {'value': prediction_data})


# @app.route('/')
# def index():
#     return "Real-time Dashboard Backend"


if __name__ == '__main__':
    threading.Thread(target=update_data).start()
    socketio.run(app, debug=True,port=8000)