class YoutubeCahnnel {
  constructor(name) {
    this.name = name;
    this.subscribers = [];
  }
//   subscription mechanism
  subscribe(user) {
    this.subscribers.push(user);
  }

  unSubscribe(user) {
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber != user
    );
  }

  uploadVideo(title) {
    // get notify
    this.subscribers.forEach((user) => user.notifyMe(title, this.name));
  }
}

class YoutubeUser {
  constructor(userName, email) {
    this.userName = userName;
    this.email = email;
  }
  //notify
  notifyMe(videoTitle, channelName) {
    console.log(`i am ${this.userName} get notified that ${channelName}
         uploaded new Video :${videoTitle}`);
  }
}

let channel1 = new YoutubeCahnnel("ElzeroWebSchool");
let user1 = new YoutubeUser("ahmed", "ahmed@gmail.com");
let user2 = new YoutubeUser("ali", "ali@gmail.com");

channel1.subscribe(user1);
channel1.subscribe(user2);

channel1.uploadVideo('angular lec 1')
channel1.unSubscribe(user1)

channel1.uploadVideo('angular lec 2')

