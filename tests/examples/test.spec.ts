import {test} from '@playwright/test';

interface a{
    x: number;
    y : number;

}

interface b {
    name : string;
}

function printa(anew : a){
    console.log(`x value is :${anew.x}`);

}

function printb(bnew : b){
    console.log(`name value is :${bnew.name}`);

}


test("typescript practice",async()=>{

const obj = {
    name : "google",
    x : 2,
    y :1
}
printb(obj);
printa(obj);

});
