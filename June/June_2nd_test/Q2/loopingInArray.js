1. Sequential for loop:
    eg: var myStringArray = ["Hello","World"];
    var arrayLength = myStringArray.length;
    for (var i = 0; i < arrayLength; i++) {
        console.log(myStringArray[i]);
        //Do something
    }


    2. forEach:
        eg: const array = ["one", "two", "three"]
        array.forEach(function (item, index) {
          console.log(item, index);
        });

    3.for-of:
        eg:let colors = ['red', 'green', 'blue'];
        for (const color of colors){
            console.log(color);
        }


    