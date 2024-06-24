from flask import Flask, render_template, request
from datetime import datetime
import pytz

app = Flask(__name__)

# List of countries and their corresponding timezones
countries = {
    "USA": "America/New_York",
    "UK": "Europe/London",
    "India": "Asia/Kolkata",
    "Japan": "Asia/Tokyo",
    "Australia": "Australia/Sydney",
    "Pakistan": "Asia/Karachi"
}

@app.route('/')
def index():
    selected_country = request.args.get('country')
    current_time = None
    if selected_country and selected_country in countries:
        timezone = pytz.timezone(countries[selected_country])
        current_time = datetime.now(timezone).strftime('%Y-%m-%d %H:%M:%S')
    return render_template('index.html', countries=countries, current_time=current_time)

if __name__ == '__main__':
    app.run(debug=True)
