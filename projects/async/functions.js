/* ДЗ 5 - Асинхронность и работа с сетью */

/*
 Задание 1:

 Функция должна возвращать Promise, который должен быть разрешен через указанное количество секунд

 Пример:
   delayPromise(3) // вернет promise, который будет разрешен через 3 секунды
 */

function delayPromise(seconds) {
  seconds = seconds * 1000;
  return new Promise((resolve) => {
    setTimeout(() => resolve(), seconds);
  });
}

/*
 Задание 2:

 2.1: Функция должна вернуть Promise, который должен быть разрешен с массивом городов в качестве значения

 Массив городов можно получить отправив асинхронный запрос по адресу
 https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json

 2.2: Элементы полученного массива должны быть отсортированы по имени города

 Пример:
   loadAndSortTowns().then(towns => console.log(towns)) // должна вывести в консоль отсортированный массив городов
 */
async function loadAndSortTowns() {
  const townsURL =
    'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';
  let towns = [];
  async function request(url, method = 'GET') {
    try {
      const response = await fetch(url, {
        method,
      }).then((data) => data.json());
      return response;
    } catch (error) {
      alert(error);
    }
  }
  towns = await request(townsURL);
  towns.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return towns;
}

export { delayPromise, loadAndSortTowns };
