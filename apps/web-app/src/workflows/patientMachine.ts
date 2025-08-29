import { createMachine } from "xstate";

export const patientMachine = createMachine({
  id: "patientJourney",
  initial: "registration",
  states: {
    registration: { on: { NEXT: "triage" } },
    triage: { on: { NEXT: "diagnostics", PREV: "registration" } },
    diagnostics: { on: { NEXT: "treatment", PREV: "triage" } },
    treatment: { on: { NEXT: "discharge", PREV: "diagnostics" } },
    discharge: { type: "final" },
  },
});