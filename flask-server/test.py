from flask import Flask, jsonify
from flask_socketio import SocketIO, emit
from datetime import datetime
import time
import pandas as pd
import joblib

app = Flask(__name__)
socketio = SocketIO(app)
df = pd.read_csv("/Users/shreehari/Documents/mlhackathon/flask-server/prediction_test.csv").values
classifier = joblib.load('/Users/shreehari/Documents/mlhackathon/flask-server/rfmodel.joblib')
predictions = []
@app.route('/', methods=['GET'])
def update_data():
    global i  # Declare i as global inside the function
    for i in range(2000):
        time.sleep(1)
        new_row = df[i]
        prediction_data = int(classifier.predict([new_row])[0])
        classes = ["Machine Failure", "Tool Wear Failure", "Heat Dissipation Failure", "Power Failure",
                   "Over Strain Failure", "Random Failures"]
        if prediction_data != 0:
            result = classes[prediction_data]
            current_time = datetime.now().strftime("%H:%M:%S")
            response = f"Alert!! Your machine might face {result}.\nFor detailed information check: www.google.com"
            print(result)
            socketio.emit('new_data', {'value': prediction_data, 'response': response})
    return jsonify({'response': "Data updated successfully"})

if __name__ == '__main__':
    socketio.run(app,port=4000)