/* eslint-disable camelcase */
// data.test.js
import {ALL_GENRES, reducer, ActionType} from "./data.js";
/*
import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api.js';
import {ALL_GENRES, reducer, ActionType, Operation} from "./data.js";

const mockInfo = [
  {
    name: `Bohemian Rhapsody`,
    poster_image: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Bohemian_Rhapsody.jpg`,
    preview_image: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/bohemian_rhapsody.jpg`,
    background_image: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Bohemian_Rhapsody.jpg`,
    background_color: `#929FA5`,
    description: `Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. Freddie defied stereotypes and shattered convention to become one of the most beloved entertainers on the planet.`,
    rating: `6.1`,
    scores_count: 338903,
    director: `Bryan Singer`,
    starring: [`Rami Malek`, `Lucy Boynton`, `Gwilym Lee`],
    run_time: 134,
    genre: `Drama`,
    released: 2018,
    id: 1,
    is_favorite: false,
    video_link: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    preview_video_link: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  },
];
*/

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    filmsInfo: [],
    filmsFullInfo: [],
    genre: ALL_GENRES,
    promo: undefined,
  });
});

// const api = createAPI(() => {});

it(`Reducer should set current genre by a given value`, () => {
  expect(reducer({
    genre: ALL_GENRES,
  }, {
    type: ActionType.SET_CURRENT_GENRE,
    payload: `Crime`,
  })).toEqual({
    genre: `Crime`,
  });
});

/*
describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const filmsLoader = Operation.loadMovies();

    apiMock
      .onGet(`/films`)
      .reply(mockInfo);
    return filmsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
      });
  });
});
*/
