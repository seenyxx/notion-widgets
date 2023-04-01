# Notion Widgets
### Title Widget
A centered and customisable strip of text.
**Url:** `/notion-widgets/title-widget/<parameters>`

[Demo here](https://seen-idc.github.io/notion-widgets/title-widget/?text=Hello&font=sc&size=42&dark=1)

[Demo #2 here](https://seen-idc.github.io/notion-widgets/title-widget/?text=Lorem%20ipsum%20dolor%20sit%20amet,%20consectetur%20adipiscing%20elit.%20Ut%20pharetra%20dolor%20lacus.&callout=a&size=16&bold=a&italic=a&dark=a&bg=302228&paddingOverride=18px)

Parameters:
- `?text` Text to be displayed
- `?size` Size of the text in pixels
- `?font` can be `default`, `serif`, `mono` and `sc` (small caps)
- `?dark` Enter any value to change the background to fit dark mode
- `?italic` Enter any value to make the text *italicised*
- `?bold` Enter any value to make the test **bold**
- `?callout` Enter any value to make the embed mimic the appearance of the built-in notion callout
- `?bg` Enter hex code without the hashtag e.g. `ffffff` to change the background of the callout
- `?paddingOverride` Enter number value + px to override the padding value of the callout
- `?borderRadiusOverride` Enter number value + px to override the border radius of the callout
### Quote Widget
A customisable centered strip of text with a random quote.
**Url:** `/notion-widgets/quote/<parameters>`

[Demo here](https://seen-idc.github.io/notion-widgets/quote/?maxLength=50&font=serif&size=24&dark=1)

Parameters:
- `?size` Size of the text in pixels
- `?font` can be `default`, `serif`, `mono` and `sc` (small caps)
- `?dark` Enter any value to change the background to fit dark mode
- `?maxLength` Maximum character length of quote