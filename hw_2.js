//Вывести объект с наиболее часто повторяющимся числом и количеством его повторений

const numbers = [
  200, 200, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 2, 2, 4, 5, 5, 5, 123, 123, 32, 32,
  32, 32, 32, 32, 32, 32, 32,
];

const showMostFrequentElem = (array) => {
  const obj = array.reduce((result, item) => {
      result[item] = !result[item] ? 1 : result[item] + 1;
      return result;
    }, {});

  let max = 0;
  for (let key in obj) {
    max = max < obj[key] ? obj[key] : max;
  }

  let objElem = {};
  let objectEntries = Object.entries(obj);
  for (let item of objectEntries) {
    if (item[1] === max) {
      objElem[item[0]] = item[1];
    }
  }
  console.log(Object.keys(objElem)[0]);
};
showMostFrequentElem(numbers);

// 1. Функция принимает массив пользователей. Исходные данные см. ниже. Возвращает объект, состоящий из двух полей: female и male. Данные
// поля являются массивами, в которых содержаться пользователи, подходящие по категории gender соответственно.
//     Также, вместо двух полей first_name и last_name у каждого из объектов должно быть поле fullName в котором будут объеденины убранные поля
// (first_name и last_name). Количество пользователей может быть не ограничено.

const users = [
  {
    id: 1,
    first_name: "Jeanette",
    last_name: "Penddreth",
    email: "jpenddreth0@census.gov",
    gender: "female",
    ip_address: "26.58.193.2",
  },
  {
    id: 2,
    first_name: "Petr",
    last_name: "Jackson",
    email: "gfrediani1@senate.gov",
    gender: "male",
    ip_address: "229.179.4.212",
  },
  {
    id: 1,
    first_name: "Thomas",
    last_name: "Anderson",
    email: "thomas_anderson@matrix.io",
    gender: "male",
    ip_address: "161.185. 160.93",
  },
];

const sortByGender = (users) => {
  return users.reduce((result, user) => {
    const userGender = user.gender;
    user.fullName = user.first_name + " " + user.last_name;
    delete user.first_name;
    delete user.last_name;
    if (!result[userGender]) {
      result[userGender] = [user];
    } else {
      result[userGender].push(user);
    }
    return result;
  }, {});
};
console.log(sortByGender(users));

// 2.Преобразуйте массив в объект используя функцию reduce.

const videos = [
  {
    id: 65432445,
    title: "The Chamber",
  },
  {
    id: 675465,
    title: "Fracture",
  },
  {
    id: 70111470,
    title: "Die Hard",
  },
  {
    id: 654356453,
    title: "Bad Boys",
  },
];

// Ожидаемый результат...
//     {
//         "65432445": "The Chamber",
//         "675465": "Fracture",
//         "70111470": "Die Hard",
//         "654356453": "Bad Boys"
//     }

const createObjectFromArray = (videos) => {
  return videos.reduce((result, video) => {
    result[video.id] = video.title;
    return result;
  }, {});
};
console.log(createObjectFromArray(videos));

//  3. Выведите массив ids для релизов у которых рейтинг 5.0.

const newReleases = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

// // [675465, …]

const getIds = (newReleases) => {
  return newReleases.reduce((result, newRelease) => {
    if (newRelease.rating[0] === 5.0) {
      result.push(newRelease.id);
    }
    return result;
  }, []);
};
console.log(getIds(newReleases));

// 4. С помощью функций map, reduce, вывести url у которого самая большая площадь

const boxarts = [
  {
    width: 200,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg",
  },
  {
    width: 150,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg",
  },
  {
    width: 300,
    height: 200,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg",
  },
  {
    width: 425,
    height: 150,
    url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg",
  },
];

const getMaxAreaUrl = (boxarts) => {
  let maxArea = 0;
  let url = '';
  boxarts.reduce((result, boxart) => {
    if (boxart.width * boxart.height > maxArea) {
      maxArea = boxart.width * boxart.height;
      url = boxart.url;
    }
  });
  return url;
};
console.log(getMaxAreaUrl(boxarts));

// 5. Написать функцию, которая принимает в себя массив числовых и строчных числовых значений.
// Данная функция должна вернуть массив, в котором числовые значения исходного массива стали строчными,
// а строчные - числовыми.

const array = [1, 2, 3, "4", "5", "6"];

const numbersToStrings = (array) =>
  array.map((item) => (typeof item === "number" ? String(item) : Number(item)));
console.log(numbersToStrings(array));

// 6. Написать функцию, которая принимает в себя два массива, а возвращает один,
// состоящий из двух, которые в нее вошли

const spider = ["M", "a", "r"];
const man = ["v", "e", "l"];

const spiderMan = (spider, man) => spider.concat(man);
console.log(spiderMan(spider, man));

// 7. Написать функцию, которая принимает следующие значения: первым аргументом - строковое значение, вторым -
// допустимое количество символов. Если длина строки больше, чем допустимое значение символов, строка должна
// обрезаться, а в конце добавляться многоточие.

let string = "Hello, brother!";

const cutString = (string, limit) =>
  string.length <= limit ? string : string.slice(0, limit) + "...";
console.log(cutString(string, 10));
