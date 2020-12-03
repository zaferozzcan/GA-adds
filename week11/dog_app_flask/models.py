from peewee import *
import datetime

DATABASE = PostgresqlDatabase('dogs')

class Dog(Model):
    name = CharField()
    owner = CharField()
    breed = CharField()
    created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        database = DATABASE


def initialize():
    DATABASE.connect()
    DATABASE.create_tables([Dog], safe=True)
    print("TABLES Created")
    DATABASE.close()