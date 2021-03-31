import pymysql.cursors

# Connect to the database
connection = pymysql.connect(host='syllabits.betatesting.as.ua.edu:3306',
                             user='syllabits',
                             password='1#FkfyD3T~@R',
                             database='syllabit_SiteStorage',
                             cursorclass=pymysql.cursors.DictCursor)

with connection:
    with connection.cursor() as cursor:
        # Create a new record
        sql = "INSERT INTO `Testtable` (`first`, `last`) VALUES (%s, %s)"
        cursor.execute(sql, ('me', 'boiii'))

    # connection is not autocommit by default. So you must commit to save
    # your changes.
    connection.commit()