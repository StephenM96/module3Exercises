const fun1 = async () => {
    // console.log('Start preparing pizza')
    const prepped = new Promise((resolve, reject) => {
        if (Math.random() > 0.01) {
            setTimeout(() => resolve("Start preparing pizza"), 3);
        }else {
            setTimeout(() => reject("Pizza is not ready to begin."), 3);
        }  
    });
    try {
        let result = await prepped
        console.log("Success ", result)
    } catch (error) {
        console.log("Error! ", error)
    };
};
const fun2 = async() => {
    // console.log('Made the base')
    const based = new Promise((resolve, reject) => {
        if (Math.random() > 0.01) {
            setTimeout(() => resolve('Made the base'), 10);
        }else {
            setTimeout(() => reject("Pizza base is not ready."), 10);
        }  
    });
    try {
        let result = await based
        console.log("Success ", result)
    } catch (error) {
        console.log("Error! ", error)
    };
};
const fun3 = async() => {
    // console.log('Added the sauce and cheese')
    const cheesy = new Promise((resolve, reject) => {
        if (Math.random() > 0.01) {
            setTimeout(() => resolve('Added the sauce and cheese'), 15);
        }else {
            setTimeout(() => reject("Sauce and cheese is not ready."), 15);
        }  
    });
    try {
        let result = await cheesy
        console.log("Success ", result)
    } catch (error) {
        console.log("Error! ", error)
    };
};
const fun4 = async() => {
    // console.log('Added the sausage, bacon, and bell peppers')
    const meaty = new Promise((resolve, reject) => {
        if (Math.random() > 0.01) {
            setTimeout(() => resolve('Added the sausage, bacon, and bell peppers'), 20);
        }else {
            setTimeout(() => reject("Toppings are not ready to add."), 20);
        }  
    });
    try {
        let result = await meaty
        console.log("Success ", result)
    } catch (error) {
        console.log("Error! ", error)
    };
};
const fun5 = async() => {
    // console.log('Cooked the pizza')
    const cooked = new Promise((resolve, reject) => {
        if (Math.random() > 0.01) {
            setTimeout(() => resolve('Cooked the pizza'), 50);
        }else {
            setTimeout(() => reject("Pizza is cold."), 50);
        }  
    });
    try {
        let result = await cooked
        console.log("Success ", result)
    } catch (error) {
        console.log("Error! ", error)
    };
};
const fun6 = async() => {
    // console.log('Pizza is ready')
    const ready = new Promise((resolve, reject) => {
        if (Math.random() > 0.01) {
            setTimeout(() => resolve('Pizza is ready'), 51);
        }else {
            setTimeout(() => reject("Pizza is not ready."), 51);
        }  
    });
    try {
        let result = await ready
        console.log("Success ", result)
    } catch (error) {
        console.log("Error! ", error)
    };

};

fun1() 
fun2()
fun3()
fun4()
fun5()
fun6()

