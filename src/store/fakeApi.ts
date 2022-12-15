import { map, timer } from "rxjs";

export const fakeApi = {
  getUserName: () =>
    timer(2000).pipe(map(() => ({ name: "Monica" }))),
};
