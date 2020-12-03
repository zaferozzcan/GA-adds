import models

from flask import Blueprint, jsonify, request

from playhouse.shortcuts import model_to_dict


# first argument is blueprints name
# second argument is it's import_name
# The third argument is the url_prefix so we don't have
# to prefix all our apis with /api/v1
dog = Blueprint('dogs', 'dog')

@dog.route('/', methods=["GET"])
def get_all_dogs():
    ## find the dogs and change each one to a dictionary into a new array
    try:
        dogs = [model_to_dict(dog) for dog in models.Dog.select()]
        print(dogs)
        return jsonify(data=dogs, status={"code": 200, "message": "Success"})
    except models.DoesNotExist:
        return jsonify(data={}, status={"code": 401, "message": "Error getting the resources"})



@dog.route('/', methods=["POST"])
def create_dogs():
    ## see request payload anagolous to req.body in express
    payload = request.get_json()
    print(type(payload), 'payload')
    dog = models.Dog.create(**payload)
    ## see the object
    print(dog.__dict__)
    ## Look at all the methods
    print(dir(dog))
    # Change the model to a dict
    print(model_to_dict(dog), 'model to dict')
    dog_dict = model_to_dict(dog)
    return jsonify(data=dog_dict, status={"code": 201, "message": "Success"})