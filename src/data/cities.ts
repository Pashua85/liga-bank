export interface ICity {
  cityName: string,
  location: {
    lat: number,
    lng: number
  }
}


export const citiesInRussia: ICity[] = [
  {
    cityName: `Москва`,
    location: {
      lat: 55.751244,
      lng: 37.618423
    }
  },
  {
    cityName: `Санкт-Петербург`,
    location: {
      lat: 59.937500,
      lng: 30.308611
    }
  },
  {
    cityName: `Саратов`,
    location: {
      lat: 51.592365,
      lng: 45.960804
    }
  },
  {
    cityName: `Киров`,
    location: {
      lat: 54.074322,
      lng: 34.302608
    }
  },
  {
    cityName: `Тюмень`,
    location: {
      lat: 57.161297,
      lng: 65.525017
    }
  },
  {
    cityName: `Омск`,
    location: {
      lat: 54.983334,
      lng: 73.366669
    }
  }
];

export const citiesInCIS: ICity[] = [
  {
    cityName: `Баку`,
    location: {
      lat: 40.409264,
      lng: 49.867092
    }
  },
  {
    cityName: `Ташкент`,
    location: {
      lat: 41.311081,
      lng: 69.240562
    }
  },
  {
    cityName: `Минск`,
    location: {
      lat: 53.893009,
      lng: 27.567444
    }
  },
  {
    cityName: `Алма-Ата`,
    location: {
      lat: 43.238949,
      lng: 76.889709
    }
  }
];

export const citiesInEurope: ICity[] = [
  {
    cityName: `Париж`,
    location: {
      lat: 48.864716,
      lng: 2.349014
    }
  },
  {
    cityName: `Прага`,
    location: {
      lat: 50.073658,
      lng: 14.418540
    }
  },
  {
    cityName: `Лондон`,
    location: {
      lat: 51.509865,
      lng: 0.118092
    }
  },
  {
    cityName: `Рим`,
    location: {
      lat: 41.902782,
      lng: 12.496366
    }
  }
];

