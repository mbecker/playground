'use strict';

class Cookie{
  constructor(path, duration) {
    this.path = path;
    this.duration = duration;
  }

  // Static methods
  // The static keyword defines a static method for a class. Static methods are called without instantiating their class and are also not callable when the class is instantiated. Static methods are often used to create utility functions for an application.

  static saveCookie(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}
