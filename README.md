# OBS Overlay for the Garden of Chaos Tournament

This is a simple Github Page to be used with OBS in order to create a simple flower-themed overlay for the Garden of Chaos, a Fantasy Strike online tournament.

Through the page, the organizer can set the members of the player's teams, and mark each character as winner or loser following the results of every match.

## Setup

In OBS, create a Browser source. Point the url to this project's page:

    https://gtmelo.github.io/OBS-Flower-Overlay/

For width and height, set your stream's resolution values (i.e. 1920x1080 for 1080p, 3840x2160 for 4k, etc.). 

You may leave all other options on their default values, or tinker with them if needed. Hit Ok.

You should be seeing the overlay superimposed over the rest of the stream. Now, you have to hide the controls so only the flowers are visible. You can do so by holding Alt and dragging the bottom-center resizing anchor on the source, until only the flowers are visible. You can also ajust the position of the source so the flowers rest higher or lower on the screen, as needed.

## Scaling the flowers
This project is still in a very early stage of development. It was designed with 1080p resolution in mind, so it may look too small or too big on different resolutions.

An option to adjust the scaling is planned. Meanwhile, you can adjust the size of the flowers with the following hack: on the "custom css" field, after the body{...} line, copy and paste the lines below:

    .facing-left { transform: scale(0.8) }
    .facing-right { transform: scaleX(-0.8) scaleY(0.8) }

change the values in the parenthesis to whatever suits you (1 = 100% scale). Make sure to use the same value on all scales, or the flowers may look distorted or uneven.

## Usage

To interact with the overlay, right-click the browser source, and choose the "interact" option on the menu. A separate screen will show the full page, and interacting with it will reflect on the stream. (you can resize this popup window. The overlay on the stream will remain the same.).

The overlay was designed with a max team of 5 characters. You can set each slot with a character by clicking on their portraits. You can also mark each character as they win or lose each match, and the flower will highlight those characters accordingly.

## Development notes and roadmap

As of right now, the project is functional, but atrociously coded over a very short amount of free time. A major refactor must be performed as soon as possible.

That said, there is already a list of improvements and features I wish to implement:

- Refactor the entire project so it is not a sin against the very concept of programming;
- Properly implement models and state management through vue;
- Allow multiple images per character (i.e. better images for that character for every slot in the flower);
- Better artwork (I'm really keen on more artistic representations for every character);
- Add a control for current rules in play;
- Add support for alternative layouts;
- Add support for alternative image sets;
- Add support for full customization, including scaling, colors, animation speed etc;
- Add animations for various transitions (intros and outros, win/lose conditions, etc)
- Improve the gradient animations