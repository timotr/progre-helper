str = "INSERT INTO stock (product_id, warehouse_id, amount) VALUES "
for(let i=1; i<=100; i++) {
    let wh = Math.round(Math.random())+1;
    let wh2 = wh == 1 ? 2 : 1;
    let amount = Math.round(Math.random()*15)*10
    if (Math.random() > 0.3)
    amount*=10
    str += `(${i}, ${wh}, ${amount}),`   
    if (Math.random() > 0.5) {
        amount = Math.round(Math.random()*25)*10
       str += `(${i}, ${wh2}, ${amount}),`
    }
}
