# [Storm JavaScript Player - React Compontent](http://stormstreaming.com/)

Dedicated Storm JavaScript Player sample and component for ReactJS.

To get started checkout examples and documentation at https://www.stormstreaming.com/docs/javascript-getting-started

# Installation

1. Using NPM:

> `npm install --save @stormstreaming/stormlibrary-react`

2. Using Yarn:

> `yarn install --dev @stormstreaming/stormlibrary-react`

3. Manually - if you are clueless about NPM/Yarn or simply want to test it out, just grab`/dist/iife/index.js` file and embed it on your website.

Browser compatibility
---------------------
* Edge 12+
* Chrome 31+
* Firefox 42+
* Safari 13+
* Opera 15+

For legacy browsers, HLS mode is used instead.


## Server-side rendering (SSR)

Both Storm JavaScript Library & Player (bedrocks for this React component) make use of DOM elements like window/video. In order to avoid errors related
to SSR you might need to modify your code in the following manner:

Import:
```
const StormPlayer = dynamic(() => import("@stormstreaming/stormplayer-react/src/components/stormPlayer/StormPlayer"), {
  ssr: false,
});
```

Code call:
```
{typeof window !== "undefined" && (
            <StormPlayer
              playerConfig={{
                containerID: "player1",
                width,
                height,
                title: "Your streaming video title",
                subtitle: "Subtitle for your video",
                unmuteText: "UNMUTE SOUND",
              }}
              libraryConfig={STORM_LIBRARY_CONFIG} 
            />
          )}
```

## Resources

- [Documentation](https://www.stormstreaming.com/docs)
- [Sample Video Player Project](https://github.com/StormStreaming/stormplayer-js)
- [Changelog](CHANGELOG.md)


## License

- [License](LICENSE.txt)