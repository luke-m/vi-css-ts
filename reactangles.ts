interface rectOpts {
    width: number;
    height: number;
}

function drawRectangle (options: rectOpts) {
    let width = options.width;
    let height = options.height;

    // draw logic
    console.log(
        `${width * height}`
    );
}

drawRectangle({width: 200, height: 200});