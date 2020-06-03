import { createSlice } from '@reduxjs/toolkit';

const staticData = {
  city: 'New York',
  lat: 40.74,
  lon: -73.98,
  timezone: 'America/New_York',
  timezone_offset: -14400,
  current: {
    dt: 1590891294,
    sunrise: 1590830866,
    sunset: 1590884380,
    temp: 296.8,
    feels_like: 294.7,
    pressure: 1013,
    humidity: 46,
    dew_point: 284.51,
    uvi: 7.93,
    clouds: 75,
    visibility: 16093,
    wind_speed: 3.6,
    wind_deg: 270,
    weather: [
      {
        id: 803,
        main: 'Clouds',
        description: 'broken clouds',
        icon: '04n'
      }
    ]
  },
  hourly: [
    {
      dt: 1590890400,
      temp: 296.8,
      feels_like: 292.36,
      pressure: 1013,
      humidity: 46,
      dew_point: 284.51,
      clouds: 75,
      wind_speed: 6.95,
      wind_deg: 303,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ]
    },
    {
      dt: 1590894000,
      temp: 295.29,
      feels_like: 290.52,
      pressure: 1013,
      humidity: 50,
      dew_point: 284.39,
      clouds: 66,
      wind_speed: 7.37,
      wind_deg: 325,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n'
        }
      ]
    },
    {
      dt: 1590897600,
      temp: 293.19,
      feels_like: 288.06,
      pressure: 1013,
      humidity: 55,
      dew_point: 283.88,
      clouds: 49,
      wind_speed: 7.68,
      wind_deg: 323,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ]
    },
    {
      dt: 1590901200,
      temp: 291.34,
      feels_like: 286.02,
      pressure: 1014,
      humidity: 57,
      dew_point: 282.69,
      clouds: 36,
      wind_speed: 7.49,
      wind_deg: 325,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ]
    },
    {
      dt: 1590904800,
      temp: 289.97,
      feels_like: 284.34,
      pressure: 1014,
      humidity: 57,
      dew_point: 281.41,
      clouds: 27,
      wind_speed: 7.46,
      wind_deg: 325,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n'
        }
      ]
    },
    {
      dt: 1590908400,
      temp: 289.02,
      feels_like: 283.05,
      pressure: 1014,
      humidity: 54,
      dew_point: 279.95,
      clouds: 0,
      wind_speed: 7.4,
      wind_deg: 325,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1590912000,
      temp: 287.96,
      feels_like: 282.27,
      pressure: 1015,
      humidity: 57,
      dew_point: 279.79,
      clouds: 0,
      wind_speed: 6.93,
      wind_deg: 330,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1590915600,
      temp: 287.28,
      feels_like: 281.48,
      pressure: 1015,
      humidity: 56,
      dew_point: 278.66,
      clouds: 0,
      wind_speed: 6.82,
      wind_deg: 331,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1590919200,
      temp: 286.82,
      feels_like: 280.66,
      pressure: 1016,
      humidity: 51,
      dew_point: 277.08,
      clouds: 0,
      wind_speed: 6.84,
      wind_deg: 328,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590922800,
      temp: 286.84,
      feels_like: 280.63,
      pressure: 1017,
      humidity: 46,
      dew_point: 275.64,
      clouds: 0,
      wind_speed: 6.55,
      wind_deg: 331,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590926400,
      temp: 287.46,
      feels_like: 281.18,
      pressure: 1017,
      humidity: 41,
      dew_point: 274.53,
      clouds: 0,
      wind_speed: 6.4,
      wind_deg: 334,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590930000,
      temp: 288.71,
      feels_like: 282.24,
      pressure: 1018,
      humidity: 34,
      dew_point: 273.07,
      clouds: 0,
      wind_speed: 6.36,
      wind_deg: 343,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590933600,
      temp: 289.94,
      feels_like: 283.6,
      pressure: 1018,
      humidity: 31,
      dew_point: 272.48,
      clouds: 0,
      wind_speed: 6.13,
      wind_deg: 342,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590937200,
      temp: 291,
      feels_like: 284.63,
      pressure: 1019,
      humidity: 29,
      dew_point: 272.7,
      clouds: 0,
      wind_speed: 6.18,
      wind_deg: 338,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590940800,
      temp: 292.04,
      feels_like: 285.72,
      pressure: 1019,
      humidity: 28,
      dew_point: 273.35,
      clouds: 0,
      wind_speed: 6.19,
      wind_deg: 337,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590944400,
      temp: 292.89,
      feels_like: 286.93,
      pressure: 1018,
      humidity: 28,
      dew_point: 274.03,
      clouds: 0,
      wind_speed: 5.83,
      wind_deg: 334,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590948000,
      temp: 293.47,
      feels_like: 287.37,
      pressure: 1018,
      humidity: 28,
      dew_point: 274.71,
      clouds: 0,
      wind_speed: 6.14,
      wind_deg: 330,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590951600,
      temp: 293.6,
      feels_like: 287.22,
      pressure: 1017,
      humidity: 28,
      dew_point: 274.74,
      clouds: 0,
      wind_speed: 6.56,
      wind_deg: 328,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590955200,
      temp: 293.58,
      feels_like: 286.87,
      pressure: 1017,
      humidity: 27,
      dew_point: 274.21,
      clouds: 0,
      wind_speed: 6.92,
      wind_deg: 327,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590958800,
      temp: 293.21,
      feels_like: 286.54,
      pressure: 1017,
      humidity: 27,
      dew_point: 273.86,
      clouds: 0,
      wind_speed: 6.8,
      wind_deg: 327,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590962400,
      temp: 293.06,
      feels_like: 287.11,
      pressure: 1017,
      humidity: 28,
      dew_point: 274.44,
      clouds: 0,
      wind_speed: 5.85,
      wind_deg: 326,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590966000,
      temp: 292.48,
      feels_like: 286.06,
      pressure: 1018,
      humidity: 30,
      dew_point: 274.49,
      clouds: 0,
      wind_speed: 6.62,
      wind_deg: 329,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590969600,
      temp: 291.36,
      feels_like: 285.5,
      pressure: 1019,
      humidity: 33,
      dew_point: 274.9,
      clouds: 0,
      wind_speed: 5.91,
      wind_deg: 333,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1590973200,
      temp: 290.29,
      feels_like: 283.87,
      pressure: 1020,
      humidity: 34,
      dew_point: 274.35,
      clouds: 0,
      wind_speed: 6.59,
      wind_deg: 341,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1590976800,
      temp: 288.94,
      feels_like: 282.13,
      pressure: 1020,
      humidity: 34,
      dew_point: 273.11,
      clouds: 0,
      wind_speed: 6.89,
      wind_deg: 342,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1590980400,
      temp: 287.99,
      feels_like: 281.34,
      pressure: 1021,
      humidity: 36,
      dew_point: 273.3,
      clouds: 0,
      wind_speed: 6.64,
      wind_deg: 339,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1590984000,
      temp: 287.25,
      feels_like: 281.01,
      pressure: 1021,
      humidity: 38,
      dew_point: 273.27,
      clouds: 0,
      wind_speed: 6.08,
      wind_deg: 341,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1590987600,
      temp: 286.9,
      feels_like: 281.24,
      pressure: 1022,
      humidity: 38,
      dew_point: 273.1,
      clouds: 0,
      wind_speed: 5.19,
      wind_deg: 345,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1590991200,
      temp: 286.88,
      feels_like: 281.67,
      pressure: 1022,
      humidity: 38,
      dew_point: 272.64,
      clouds: 0,
      wind_speed: 4.53,
      wind_deg: 342,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1590994800,
      temp: 286.74,
      feels_like: 281.98,
      pressure: 1022,
      humidity: 39,
      dew_point: 272.77,
      clouds: 0,
      wind_speed: 3.94,
      wind_deg: 340,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1590998400,
      temp: 286.62,
      feels_like: 282.44,
      pressure: 1022,
      humidity: 39,
      dew_point: 272.88,
      clouds: 0,
      wind_speed: 3.09,
      wind_deg: 336,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1591002000,
      temp: 286.24,
      feels_like: 281.94,
      pressure: 1022,
      humidity: 40,
      dew_point: 272.97,
      clouds: 0,
      wind_speed: 3.27,
      wind_deg: 316,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n'
        }
      ]
    },
    {
      dt: 1591005600,
      temp: 285.79,
      feels_like: 281.03,
      pressure: 1022,
      humidity: 43,
      dew_point: 273.8,
      clouds: 0,
      wind_speed: 4.05,
      wind_deg: 305,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1591009200,
      temp: 286.05,
      feels_like: 282.05,
      pressure: 1023,
      humidity: 47,
      dew_point: 275.06,
      clouds: 0,
      wind_speed: 3.29,
      wind_deg: 304,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1591012800,
      temp: 287.3,
      feels_like: 283.1,
      pressure: 1023,
      humidity: 45,
      dew_point: 275.69,
      clouds: 0,
      wind_speed: 3.7,
      wind_deg: 310,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1591016400,
      temp: 288.74,
      feels_like: 284.09,
      pressure: 1023,
      humidity: 42,
      dew_point: 276.21,
      clouds: 0,
      wind_speed: 4.43,
      wind_deg: 313,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1591020000,
      temp: 290.13,
      feels_like: 285.68,
      pressure: 1022,
      humidity: 39,
      dew_point: 276.34,
      clouds: 0,
      wind_speed: 4.19,
      wind_deg: 308,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1591023600,
      temp: 291.91,
      feels_like: 287.36,
      pressure: 1022,
      humidity: 34,
      dew_point: 275.97,
      clouds: 0,
      wind_speed: 4.25,
      wind_deg: 306,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1591027200,
      temp: 293.15,
      feels_like: 287.97,
      pressure: 1021,
      humidity: 29,
      dew_point: 274.75,
      clouds: 0,
      wind_speed: 4.88,
      wind_deg: 312,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1591030800,
      temp: 294.01,
      feels_like: 288.43,
      pressure: 1021,
      humidity: 27,
      dew_point: 274.43,
      clouds: 0,
      wind_speed: 5.39,
      wind_deg: 322,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1591034400,
      temp: 294.88,
      feels_like: 289.63,
      pressure: 1020,
      humidity: 26,
      dew_point: 274.79,
      clouds: 0,
      wind_speed: 4.96,
      wind_deg: 312,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1591038000,
      temp: 295.64,
      feels_like: 290.13,
      pressure: 1019,
      humidity: 24,
      dew_point: 274.57,
      clouds: 0,
      wind_speed: 5.23,
      wind_deg: 308,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ]
    },
    {
      dt: 1591041600,
      temp: 295.79,
      feels_like: 291.08,
      pressure: 1019,
      humidity: 25,
      dew_point: 275.22,
      clouds: 23,
      wind_speed: 4.25,
      wind_deg: 295,
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d'
        }
      ]
    },
    {
      dt: 1591045200,
      temp: 295.17,
      feels_like: 291.22,
      pressure: 1018,
      humidity: 29,
      dew_point: 276.34,
      clouds: 48,
      wind_speed: 3.54,
      wind_deg: 264,
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d'
        }
      ]
    },
    {
      dt: 1591048800,
      temp: 294.16,
      feels_like: 288.17,
      pressure: 1018,
      humidity: 33,
      dew_point: 277.5,
      clouds: 60,
      wind_speed: 6.71,
      wind_deg: 279,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ]
    },
    {
      dt: 1591052400,
      temp: 293.28,
      feels_like: 288.7,
      pressure: 1019,
      humidity: 38,
      dew_point: 278.7,
      clouds: 67,
      wind_speed: 5.04,
      wind_deg: 290,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ]
    },
    {
      dt: 1591056000,
      temp: 293.21,
      feels_like: 289.81,
      pressure: 1019,
      humidity: 38,
      dew_point: 278.68,
      clouds: 60,
      wind_speed: 3.34,
      wind_deg: 309,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ]
    },
    {
      dt: 1591059600,
      temp: 292.82,
      feels_like: 290,
      pressure: 1019,
      humidity: 40,
      dew_point: 279.06,
      clouds: 92,
      wind_speed: 2.62,
      wind_deg: 314,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n'
        }
      ]
    }
  ],
  daily: [
    {
      dt: 1590854400,
      sunrise: 1590830866,
      sunset: 1590884380,
      temp: {
        day: 296.8,
        min: 295.29,
        max: 296.8,
        night: 295.29,
        eve: 296.8,
        morn: 296.8
      },
      feels_like: {
        day: 293.55,
        night: 290.52,
        eve: 293.55,
        morn: 293.55
      },
      pressure: 1013,
      humidity: 46,
      dew_point: 284.51,
      wind_speed: 5.24,
      wind_deg: 270,
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d'
        }
      ],
      clouds: 75,
      uvi: 7.93
    },
    {
      dt: 1590940800,
      sunrise: 1590917238,
      sunset: 1590970825,
      temp: {
        day: 291,
        min: 287.53,
        max: 293.47,
        night: 287.99,
        eve: 293.21,
        morn: 287.89
      },
      feels_like: {
        day: 284.63,
        night: 281.34,
        eve: 286.54,
        morn: 282.21
      },
      pressure: 1019,
      humidity: 29,
      dew_point: 272.7,
      wind_speed: 6.18,
      wind_deg: 338,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: 0,
      uvi: 7.25
    },
    {
      dt: 1591027200,
      sunrise: 1591003612,
      sunset: 1591057270,
      temp: {
        day: 291.91,
        min: 286.24,
        max: 295.17,
        night: 291.76,
        eve: 295.17,
        morn: 286.24
      },
      feels_like: {
        day: 287.36,
        night: 289.79,
        eve: 291.22,
        morn: 281.94
      },
      pressure: 1022,
      humidity: 34,
      dew_point: 275.97,
      wind_speed: 4.25,
      wind_deg: 306,
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d'
        }
      ],
      clouds: 0,
      uvi: 8.32
    },
    {
      dt: 1591113600,
      sunrise: 1591089987,
      sunset: 1591143713,
      temp: {
        day: 292.89,
        min: 289.2,
        max: 294.45,
        night: 290.91,
        eve: 294.45,
        morn: 289.2
      },
      feels_like: {
        day: 289.45,
        night: 288.6,
        eve: 291.34,
        morn: 286.19
      },
      pressure: 1017,
      humidity: 37,
      dew_point: 278.08,
      wind_speed: 3.21,
      wind_deg: 272,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: 100,
      uvi: 9.15
    },
    {
      dt: 1591200000,
      sunrise: 1591176365,
      sunset: 1591230154,
      temp: {
        day: 295.87,
        min: 289.31,
        max: 300.17,
        night: 296.52,
        eve: 298.98,
        morn: 289.31
      },
      feels_like: {
        day: 294.46,
        night: 295.73,
        eve: 297.61,
        morn: 287.48
      },
      pressure: 1008,
      humidity: 57,
      dew_point: 287.13,
      wind_speed: 3.7,
      wind_deg: 251,
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10d'
        }
      ],
      clouds: 46,
      rain: 1.51,
      uvi: 8.58
    },
    {
      dt: 1591286400,
      sunrise: 1591262745,
      sunset: 1591316595,
      temp: {
        day: 300.51,
        min: 294.35,
        max: 304.9,
        night: 298.75,
        eve: 304.9,
        morn: 294.35
      },
      feels_like: {
        day: 298.32,
        night: 297.26,
        eve: 301.64,
        morn: 295.17
      },
      pressure: 1008,
      humidity: 38,
      dew_point: 285.2,
      wind_speed: 3.92,
      wind_deg: 301,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: 94,
      uvi: 8.95
    },
    {
      dt: 1591372800,
      sunrise: 1591349126,
      sunset: 1591403034,
      temp: {
        day: 299.92,
        min: 294.99,
        max: 299.92,
        night: 296.75,
        eve: 298.75,
        morn: 294.99
      },
      feels_like: {
        day: 299.14,
        night: 297.62,
        eve: 296.55,
        morn: 294.85
      },
      pressure: 1015,
      humidity: 39,
      dew_point: 284.83,
      wind_speed: 1.84,
      wind_deg: 151,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: 100,
      uvi: 10.32
    },
    {
      dt: 1591459200,
      sunrise: 1591435510,
      sunset: 1591489471,
      temp: {
        day: 301.09,
        min: 295.32,
        max: 303.88,
        night: 295.32,
        eve: 303.36,
        morn: 295.59
      },
      feels_like: {
        day: 298.72,
        night: 290.59,
        eve: 298.92,
        morn: 295.54
      },
      pressure: 1011,
      humidity: 38,
      dew_point: 285.59,
      wind_speed: 4.4,
      wind_deg: 304,
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d'
        }
      ],
      clouds: 90,
      uvi: 9.98
    }
  ]
};

const weatherData = createSlice({
  name: 'weatherData',
  initialState: staticData,
  reducers: {}
});

export default weatherData.reducer;
