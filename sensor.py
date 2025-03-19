import random
import time

def read_sensor_data():
    return {
        "temperature": round(random.uniform(20, 30), 2),
        "humidity": round(random.uniform(30, 70), 2)
    }


while True:
    data = read_sensor_data()
    print(f"Sensor Data: {data}")
    time.sleep(2)
