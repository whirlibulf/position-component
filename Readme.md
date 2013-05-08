
# position-component

A component for storing the x, y and z co-ordinates of an object in the Whirlibulf game engine.


## Installation

    $ component install whirlibulf/position-component


## Usage

The script component's ID is `position`.

Register the component:

    var positionComponent = require('position-component');
    game.addComponent(new positionComponent());

The options object for this component:

    {
      x: 0,
      y: 0,
      z: 0
    }

All three values should be numbers.
   

## License

  MIT
