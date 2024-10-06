import mysql.connector

def connect():
    connection = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="pos_restaurant"
    )
    return connection
