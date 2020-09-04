export type Region = `Россия` | `СНГ` | `Европа`

export interface ICity {
  cityName: string,
  location: {
    lat: number,
    lng: number
  },
  region: Region
}

export const citiesInRussia: ICity[] = [
  {
    cityName: `Москва`,
    location: {
      lat: 55.751244,
      lng: 37.618423
    },
    region: `Россия`
  },
  {
    cityName: `Санкт-Петербург`,
    location: {
      lat: 59.937500,
      lng: 30.308611
    },
    region: `Россия`
  },
  {
    cityName: `Саратов`,
    location: {
      lat: 51.592365,
      lng: 45.960804
    },
    region: `Россия`
  },
  {
    cityName: `Киров`,
    location: {
      lat: 54.074322,
      lng: 34.302608
    },
    region: `Россия`
  },
  {
    cityName: `Тюмень`,
    location: {
      lat: 57.161297,
      lng: 65.525017
    },
    region: `Россия`
  },
  {
    cityName: `Омск`,
    location: {
      lat: 54.983334,
      lng: 73.366669
    },
    region: `Россия`
  }
];

export const citiesInCIS: ICity[] = [
  {
    cityName: `Баку`,
    location: {
      lat: 40.409264,
      lng: 49.867092
    },
    region: `СНГ`
  },
  {
    cityName: `Ташкент`,
    location: {
      lat: 41.311081,
      lng: 69.240562
    },
    region: `СНГ`
  },
  {
    cityName: `Минск`,
    location: {
      lat: 53.893009,
      lng: 27.567444
    },
    region: `СНГ`
  },
  {
    cityName: `Алма-Ата`,
    location: {
      lat: 43.238949,
      lng: 76.889709
    },
    region: `СНГ`
  }
];

export const citiesInEurope: ICity[] = [
  {
    cityName: `Париж`,
    location: {
      lat: 48.864716,
      lng: 2.349014
    },
    region: `Европа`
  },
  {
    cityName: `Прага`,
    location: {
      lat: 50.073658,
      lng: 14.418540
    },
    region: `Европа`
  },
  {
    cityName: `Лондон`,
    location: {
      lat: 51.509865,
      lng: 0.118092
    },
    region: `Европа`
  },
  {
    cityName: `Рим`,
    location: {
      lat: 41.902782,
      lng: 12.496366
    },
    region: `Европа`
  }
];

