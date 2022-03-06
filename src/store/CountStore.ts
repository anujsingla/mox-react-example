import { IRootStore } from "./RootStore";
import { action, computed, makeObservable, observable } from "mobx";

export class CountStore {
  count: number = 1;
  rootStore: IRootStore;

  constructor(rootStore: IRootStore) {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      getCountValue: computed,
    });
    this.rootStore = rootStore;
  }

  increment = () => {
    this.count++;
  };

  decrement = () => {
    console.log(this.rootStore.githubUserDetails);
    this.count--;
  };

  get getCountValue() {
    return this.count;
  }
}
