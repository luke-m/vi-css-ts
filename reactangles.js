function drawRectangle(options) {
    var width = options.width;
    var height = options.height;
    // draw logic
    console.log("Your rectangle has the area " + width * height);
    if (options.color) {
        console.log("btw, your rectangle is " + options.color);
    }
}
drawRectangle({ width: 200, height: 200, color: 'red' });
