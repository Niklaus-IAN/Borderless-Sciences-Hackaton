import { Store } from "@tanstack/store";

export const submittedStore = new Store({
  submitted: false,
});

// actions
export const setSubmitted = (value: boolean) => {
  submittedStore.setState((state) => ({
    ...state,
    submitted: value,
  }));
};

export const resetSubmitted = () => {
  submittedStore.setState((state) => ({
    ...state,
    submitted: false,
  }));
};
