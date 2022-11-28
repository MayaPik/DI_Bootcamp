const robots = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    image: 'https://robohash.org/1?200x200'
  },
  {
    id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Shanna@melissa.tv',
    image: 'https://robohash.org/2?200x200'
  },
  {
    id: 3,
    name: 'Clementine Bauch',
    username: 'Samantha',
    email: 'Nathan@yesenia.net',
    image: 'https://robohash.org/3?200x200'
  },
  {
    id: 4,
    name: 'Patricia Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
    image: 'https://robohash.org/4?200x200'
  },
  {
    id: 5,
    name: 'Chelsey Dietrich',
    username: 'Kamren',
    email: 'Lucio_Hettinger@annie.ca',
    image: 'https://robohash.org/5?200x200'
  },
  {
    id: 6,
    name: 'Mrs. Dennis Schulist',
    username: 'Leopoldo_Corkery',
    email: 'Karley_Dach@jasper.info',
    image: 'https://robohash.org/6?200x200'
  },
  {
    id: 7,
    name: 'Kurtis Weissnat',
    username: 'Elwyn.Skiles',
    email: 'Telly.Hoeger@billy.biz',
    image: 'https://robohash.org/7?200x200'
  },
  {
    id: 8,
    name: 'Nicholas Runolfsdottir V',
    username: 'Maxime_Nienow',
    email: 'Sherwood@rosamond.me',
    image: 'https://robohash.org/8?200x200'
  },
  {
    id: 9,
    name: 'Glenna Reichert',
    username: 'Delphine',
    email: 'Chaim_McDermott@dana.io',
    image:'https://robohash.org/9?200x200'
  },
  {
    id: 10,
    name: 'Clementina DuBuque',
    username: 'Moriah.Stanton',
    email: 'Rey.Padberg@karina.biz',
    image:'https://robohash.org/10?200x200'
  }
  ];


  let space = document.getElementById('place');
  let allRobots = []

  class Robot {
    constructor(id,name,username,email,image) {
      this.id = id,
      this.name = name,
      this.username = username,
      this.email = email,
      this.image = image
    }
    createRobotCard() {
      this.robotCard = document.createElement('div')
      this.robotCard.className = "card col-lg-3 col-md-4 col-sm-4 m-2";

      this.imageCard = document.createElement('img')
      this.imageCard.className = "card-img"
      this.imageCard.src = this.image;
      
      this.cardTitle = document.createElement('h3')
      this.cardTitle.textContent = this.name;

      this.cardSubTitle = document.createElement('h5')
      this.cardSubTitle.textContent = this.username;

      this.emailTitle = document.createElement('h5')
      this.emailTitle.textContent = this.email;

      this.robotCard.append(this.imageCard)
      this.robotCard.append(this.cardTitle)
      this.robotCard.append(this.cardSubTitle)
      this.robotCard.append(this.emailTitle)

      space.append(this.robotCard)
      allRobots.push(this)
    }

    show(){
      this.robotCard.classList.remove('hidden')
    }
    hide(){
      this.robotCard.classList.add('hidden')

    }
  }

    robots.forEach(robot => {
      let makeRobot = new Robot(robot.id, robot.name, robot.username, robot.email, robot.image)
      makeRobot.createRobotCard()
    });

  let searchInput = document.getElementById('search')
  searchInput.addEventListener('input', makeSearch)

  function makeSearch(element) {
    allRobots.forEach(robot => robot.name.toLowerCase().includes(element.target.value.toLowerCase()) ? robot.show() : robot.hide())

  }
