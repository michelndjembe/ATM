//  const arrayList = [1,2,3,4,5,6,7,8,9,10];
//  const randomList = [];
//  for(i=0; i<4; i++){
//      randomList[i]=arrayList[Math.floor(Math.random()*arrayList.length)];
//     document.getElementById("question").innerText=randomList;

// }   

// const userIds = [8,4,1,3,2,10,9,7,6,5,11];
// const payementmethod = ['mtn','paypal',"mtn",'mtn','orange','expresunion','paypal','card','mtn','orange','card'];
// const username = ['Kingsley','jude','lopex','Helio','george','ekena','irist','Nissi','Jeff','gerard','akono']
// const collection =[7800,4200,650,450,1000,1800,1300,900,25,550,810]
// var range=[], sum=0, aver=0, allgreater=[], j=0, show=true;
// let part1 = document.getElementById("average");
// let part2 = document.getElementById("greater");


// function average(fItem,lItem){
//     for(i=fItem-1; i<lItem; i++){
//         range[j]=collection[i];
//         j++;
//         sum+=collection[i];
//     }
//     aver=sum/collection.length;
//     document.getElementById("question").innerText=aver;
// }

// function greater(first){
//     for(i=0; i<collection.length; i++){
//         if(first>collection[i]){
//             allgreater[j]=collection[i];
//             j++;
//         }
//     }
// }

// function assign(){ 
//     let sorted,resort;
//     let serializeduserTransactionData=[];
//     for(i=0; i<=collection.length-1; i++){
//         let index=collection.indexOf(collection[i]);     
//         serializeduserTransactionData[i]={'username':username[index],'Payement Method':payementmethod[index],'id':userIds[index], 'amount':collection[index]}
//     }
//     //sorted = serializeduserTransactionData.sort((a,b)=>{return a.amount - b.amount});
//     sorted=OriginalSort(serializeduserTransactionData);
//     console.log(serializeduserTransactionData);
// }


// function OriginalSort(arr){
//     let initialValue=0;
//     let NewArr=[]; 
//     for(i=0; i<collection.length-1; i++){
//         for(j=i+1; j<collection.length; j++){
//             if(arr[i].amount>arr[j].amount){
//                 initialValue=arr[i]
//                 arr[i]=arr[j];
//                 arr[j]=initialValue;
//             }
//             else arr[i]=arr[i];
//         }
//         NewArr[i]=arr[i];
//     }

//     return NewArr;
// }

// function togglebtn(){
//     if(show='true'){
//         part1.classList.add('show');
//         part2.classList.remove('show');
//     }

//     if(show='false'){
//         part2.classList.add('show');
//         part1.classList.remove('show');
//     }
// }
// let numberOfNumber=+prompt('Give us the total number of number N');
// let listOfnumber=[];
// let sums=0;
// for(i=0; i<numberOfNumber; i++){
//     listOfnumber.push(+prompt(`give the number ${+(i+1)}` ));
// };
// sums =listOfnumber.reduce((a,b)=>a+b);
// alert(`The sum of the ${numberOfNumber} numbers is : ` +sums);


// let marchantDla=268, ave=20, moneyPerDay=700000, rate=2/3;

// showValue();
// amountCalculator(268, 20, 700000, 2/3);

// function showValue(){
//     alert(`Exercise1:
// 1) the number of marchant of bafoussam is ${Math.round(marchantDla*2/3) };
// 2) the number of transaction per day for all bafoussam marchant is : ${Math.round(marchantDla*(2/3)*20)};
// 3) the amount for each transaction is ${Math.round((700000/(20*268)))};
// 4) the total amount collected in bafoussam is : ${Math.round(marchantDla*(2/3)*20)*Math.round((700000/(20*268)))}

// Exercise2:
// 1) the number of marchant of bafoussam is ${Math.round(marchantDla*2/3) };
// 2) the number of transaction per day for all bafoussam marchant is : ${Math.round(marchantDla*(2/3)*20)};
// 3) the amount for each transaction is ${700000};
// 4) the total amount collected in bafoussam is : ${Math.round(marchantDla*(2/3)*20)*700000}
// `);
// }


// function amountCalculator(numberOfMarchant, average, amountPerDay, marchantRate){
//     let data1=0, data2=0;
//     alert(`Exercise3:
// 1) the number of marchant of new city is ${ Math.round(numberOfMarchant*marchantRate) };
// 2) the number of transaction per day for all new city marchant is : ${data1= Math.round(numberOfMarchant*marchantRate*average)};
// 3) the amount for each transaction is ${data2= Math.round(amountPerDay/(average*numberOfMarchant))};
// 4) the total amount collected in new city is : ${data1*data2}
// `);
// 
// ArrayManager()

// function ArrayManager() {
//     let arrayLength = + prompt('Veuillez enter la taille du tableau');
//     constraint = arrayLength % 2;
//     let arrayItems = [];
//     for (let i = 0; i < arrayLength; i++){
//         arrayItems = arrayItems.concat(prompt(`Entrez l'element numero ${i}`));
//     }

//         console.log(`Le nombre d'element ici est impaire donc on prendra le ilieux exact
//         Les indexs sont: ${Math.floor(arrayLength / 2)} et la valeur est ${arrayItems[Math.floor(arrayLength / 2)]}`);

// }

let atm1 = document.getElementById('atm1');
let atm2 = document.getElementById('atm2')
let atm3 = document.getElementById('atm3')
let atm4 = document.getElementById('atm4')
let atm5 = document.getElementById('atm5')
let screem1 = document.getElementById('screem1');
let inputScreem1 = document.getElementById('inputScreem1');
let okay1 = document.getElementById('okay1');
let digit1 = document.querySelectorAll('[digit]');
let solde = 2453200; let pinCode = 456629; let soldeSeuile = 50000000;
screem1.value = `Bienvenue to your account. Veuillez choisir l'operation a effectuer
    1) Consulter le solde de votre compte
    2) Effectuer un retrait
    3) Effectuer un depot
    4) Ejecter la carte`;
    

function ecrire(e) {
    inputScreem1.value = +inputScreem1.value.concat(e);
}

okay1.addEventListener('click', (e)=>{
    e.preventDefault();
    inp =+ document.getElementById('inputScreem1').value;
    choose(inp);
    return inp;
})

function choose(inp) {
    if (inp == 1) {
        atm1.classList.remove('d-flex');
        atm1.classList.add('d-none');
        atm2.classList.remove('d-none');
        atm2.classList.add('d-flex');
    }
    if (inp == 2) {
        atm1.classList.remove('d-flex');
        atm1.classList.add('d-none');
        atm3.classList.remove('d-none');
        atm3.classList.add('d-flex');
    }
    if (inp == 3) {
        atm1.classList.remove('d-flex');
        atm1.classList.add('d-none');
        atm4.classList.remove('d-none');
        atm4.classList.add('d-flex');
    }
    if (inp == 4) {
        screem1.value = `Carte ejecté`;
        inputScreem1.value = '';
        setTimeout(() => {
            screem1.value = `Bienvenue to your account. Veuillez choisir l'operation a effectuer
    1) Consulter le solde de votre compte
    2) Effectuer un retrait
    3) Effectuer un depot
    4) Ejecter la carte`;
        }, 2000);
    }
}

function cancel(a) {
    if (a == 1) {
        inputScreem1.value = '';
    }

    if (a == 2) {
        inputScreem2.value = '';
    }

    if (a == 3) {
        inputScreem3.value = '';
    }

    if (a == 4) {
        inputScreem4.value = '';
    }
}


let screem2 = document.getElementById('screem2');
let inputScreem2 = document.getElementById('inputScreem2');
let okay2 = document.getElementById('okay2');

screem2.value = `Vérifiez votre solde
Veuillez entrer votre code pin`;


function inserer2(e) {
    inputScreem2.value = +inputScreem2.value.concat(e);
}

okay2.addEventListener('click', (e) => {
    e.preventDefault();
    inp2 = document.getElementById('inputScreem2').value;
    inputScreem2.value = '';
    checkCode(inp2);
})
let i = 0;
function checkCode(a) {
    if (a.lenght != 6 || a != pinCode) {
        i++;
        if (i == 3) {
            screem2.value = `code erroné`;
            setTimeout(() => {
                screem2.value = `Plus de 3 essais.
            Carte bloqué`;
            }, 2000);
            i = 0;
            setTimeout(() => {
                atm2.classList.remove('d-flex');
                atm2.classList.add('d-none');
                atm1.classList.remove('d-none');
                atm1.classList.add('d-flex');
            }, 4000);
        }
        else {
            screem2.value = `code erroné`;
            setTimeout(() => {
                screem2.value = `Vérifiez votre solde. Veuillez entrer votre code pin`;
            }, 2000);
        }
    }

    if (a == pinCode) {
        screem2.value = `Votre solde est de $ ${solde} `;
        setTimeout(() => {
            atm2.classList.remove('d-flex');
            atm2.classList.add('d-none');
            atm1.classList.remove('d-none');
            atm1.classList.add('d-flex');
        }, 4000);
    }


}


let screem3 = document.getElementById('screem3');
let inputScreem3 = document.getElementById('inputScreem3');
let okay31 = document.getElementById('okay31');
let okay32 = document.getElementById('okay32');

screem3.value = `Vous allez effectuer un retrait
Veuillez entrer le montant`;


function inserer3(e) {
    inputScreem3.value = +inputScreem3.value.concat(e);
}
okay31.addEventListener('click', (e) => {
    e.preventDefault();
    inp3 = document.getElementById('inputScreem3').value;
    inputScreem3.value = '';
    retrait(inp3);
});

okay32.addEventListener('click', (e) => {
    e.preventDefault();
    inp3 = document.getElementById('inputScreem3').value;
    inputScreem3.value = '';
    checkCode2(inp3);
});

function retrait(a) {
    if (a > solde) {
        screem3.value = `Retrait impossible.
        Solde payeur insuffisant`;
    }
    else {
        screem3.value = `Pour valider votre transaction, entrez votre codePin`;
        solde = solde - inp3;
        okay31.classList.remove('d-block');
        okay31.classList.add('d-none');
        okay32.classList.remove('d-none');
        okay32.classList.add('d-block');
    }
}

let i2 = 0;
function checkCode2(a) {
    if (a.lenght != 6 || a != pinCode) {
        i2++;
        if (i2 == 3) {
            screem3.value = `code erroné`;
            setTimeout(() => {
                screem3.value = `Plus de 3 essais.
            Carte bloqué`;
            }, 2000);
            screem3.value = `code erroné`;
            setTimeout(() => {
            atm3.classList.remove('d-flex');
            atm3.classList.add('d-none');
            atm1.classList.remove('d-none');
            atm1.classList.add('d-flex');
            }, 4000);

            i = 0;
        }
        else {
            screem3.value = `code erroné`;
            setTimeout(() => {
                screem3.value = `Vérifiez votre solde. Veuillez entrer votre code pin`;
            }, 2000);

        }
    }

    if (a == pinCode) {
        screem3.value = `Retrait effectuer. Nouveau solde est de $ ${solde} `;
        setTimeout(() => {
            atm3.classList.remove('d-flex');
            atm3.classList.add('d-none');
            atm1.classList.remove('d-none');
            atm1.classList.add('d-flex');
        }, 3000);
    }


};



let screem4 = document.getElementById('screem4');
let inputScreem4 = document.getElementById('inputScreem4');
let okay41 = document.getElementById('okay41');
let okay42 = document.getElementById('okay42');

screem4.value = `Vous allez effectuer un depot
Veuillez entrer le montant`;


function inserer4(e) {
    inputScreem4.value = +inputScreem4.value.concat(e);
}
okay41.addEventListener('click', (e) => {
    e.preventDefault();
    inp4 =+ document.getElementById('inputScreem4').value;
    inputScreem4.value = '';
    depot(inp4);
});


function depot(a) {
    newSolde = a + solde;
    if (newSolde > soldeSeuile) {
        screem4.value = `Vous avez depassé le solde max `;
        setTimeout(() => {
            screem4.value = `Vous allez effectuer un depot. Veuillez entrer le montant`;
        }, 3000);
    }

    else {
        solde = solde + a;
        screem4.value = `Depot effectué avec succès`;
        setTimeout(() => {
            atm4.classList.remove('d-flex');
            atm4.classList.add('d-none');
            atm1.classList.remove('d-none');
            atm1.classList.add('d-flex');
        }, 3000);
    }
}

