    let num = 2;
    let x;
    let y;
    y = 0;

    for (let i = 1; i <= 20; i++) {
        
        x = i % num;

        if (x == 0) {
            console.log(`${i}`);
        } else {
            y = y + 1;
        }
    }

    console.log(`${y} sono i numeri dispari`)
