from flask import Flask, render_template, jsonify, request, json
import pymysql


conn = pymysql.connect(host='localhost',user='root',passwd='*****WEIWEI**',db='5200test')
cursor=conn.cursor()

app = Flask(__name__)
@app.route('/')
def dataload():
    return render_template("crime_cab.html")

@app.route('/chart1')
def chart1():
    sql1 = "select district,number from uberlift_source_sum "
    cursor.execute(sql1)
    data1 = cursor.fetchall()
    sql2 = "select hour,avg(round(times,1)),avg(round(multiplier,1)) from uberlift_hour_multiplier_count group by hour "
    cursor.execute(sql2)
    data2 = cursor.fetchall()
    sql3 = "select weather,avg(multiplier) from uberlift_weather_multiplier group by weather"
    cursor.execute(sql3)
    data3 = cursor.fetchall()
    print(data1)
    print(data2)
    print(data3)
    return jsonify([data1,data2,data3])

@app.route('/chart2')
def chart2():
    sql1 = "select hour,total,shoot from crime_shoot_hour "
    cursor.execute(sql1)
    data1 = cursor.fetchall()
    sql2 = "select month,total,shoot from crime_shoot_month "
    cursor.execute(sql2)
    data2 = cursor.fetchall()
    return jsonify([data1,data2])

@app.route('/chart3')
def chart3():
    sql = "select district,crime,destination, departure from district_crime_destination_departure "
    cursor.execute(sql)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/map')
def map():
    # sql = "select round(latitude,2) as la,round(longitude,2) as lo from crime_longtitude_latitude group by la,lo "
    sql="select latitude,longitude from crime_longtitude_latitude where id%1600=0 order by latitude,longitude"
    cursor.execute(sql)
    data = cursor.fetchall()
    return jsonify(data)

@app.route('/inquire', methods=['POST'])
def inquire():
    source = request.form['source']
    destination = request.form['destination']
    hour = request.form['hour']
    sql="select avg(price) from inquire3 where s=\""+source+"\" and d=\""+destination+"\" group by s,d,com,ty order by com,ty"
    cursor.execute(sql)
    data = cursor.fetchall()
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
