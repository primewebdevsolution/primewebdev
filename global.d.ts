// global.d.ts

export {};

declare global {
  interface Window {
    Calendly: any; // Or use a more specific type if you have one for Calendly
  }
}
