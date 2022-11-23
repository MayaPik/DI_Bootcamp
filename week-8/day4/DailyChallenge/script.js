//In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

//Create a class named Video. The class should be constructed with the following parameters:

//Create a method called watch() which displays a string as follows:
//“uploader parameter watched all time parameter of title parameter!”
class Video {
    constructor(title, uploader,time) {
        this.title = title,
        this.uploader = uploader,
        this.time = time
    }
    watch() {
        return `${this.uploader} watched all ${this.time} of ${this.title}`
    }
}

//Instantiate a new Video instance and call the watch() method.
    const aVideo1 = new Video("Monkeys jump on people", "koftov", 24);
    const aVideo2 = new Video("boys sing birthday songs", "empi83", 42);

      //  Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
          // Think of the best data structure to save this information within the array.
    let storeVideos = []
    const aVideo3 = new Video("Elephents jump", "coolguy432", 10);
    const aVideo4 = new Video("monkeys dance", "halokiity1", 35);
    const aVideo5 = new Video("boys sing birthday songs", "empi83", 42);
    storeVideos.push(aVideo1,aVideo2,aVideo3,aVideo4,aVideo5)

    // Bonus: Loop through the array to instantiate those instances.

    for (let i = 0; i < storeVideos.length; i++) {
      console.log(storeVideos[i].watch());
    }