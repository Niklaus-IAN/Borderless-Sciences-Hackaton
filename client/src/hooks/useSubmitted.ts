import { useStore } from "@tanstack/react-store";
import { submittedStore } from "../store/submittedStore";

export const useSubmitted = () =>
  useStore(submittedStore, (state) => state.submitted);
