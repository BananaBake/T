(function(Scratch) {
  "use strict";

  if (!Scratch.extensions.unsandboxed) {
    throw new Error("This Turbo Mode example must run unsandboxed");
  }
  
  const vm = Scratch.vm;

  class TurboMode {
    getInfo() {
      return {
        id: "turbomodeunsandboxed",
        name: "Turbo Mode",
        blocks: [