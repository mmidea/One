// колко литра вода ще събира аквариума, ако се знае, че определен процент от вместимостта му е заета от пясък, 
// растения, нагревател и помпа.

// Един литър вода се равнява на един кубичен дециметър/ 1л=1 дм3/.

// 1. Дължина в см – цяло число в интервала [10 … 500]

// 2. Широчина в см – цяло число в интервала [10 … 300]

// 3. Височина в см – цяло число в интервала [10… 200]

// 4. Процент – реално число в интервала [0.000 … 100.000] 

function fishTank(input){
    let lengthDm = Number(input[0])/10;
    let widthDm = Number(input[1])/10;
    let heightDm = Number(input[2])/10;
    let realPercent = Number(input[3])/100;
    let realLiters = (lengthDm * widthDm * heightDm) * (1 - realPercent);
    console.log(realLiters);
    
    }
    fishTank(["105 ",
    
        "77 ",
        
        "89 ",
        
        "18.5 "]);