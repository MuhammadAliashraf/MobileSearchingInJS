// Mobile Data 
let mobile = {
    iphone: {
        v14pro: {
            CompanyName: "iphone",
            MobileVersion: "v14pro",
            ram: 4,
            rom: 256,
            price: 499,
        },
        v13pro: {
            CompanyName: "iphone",
            MobileVersion: "v13pro",
            ram: 4,
            rom: 128,
            price: 49900,
        },
        v12pro: {
            CompanyName: "iphone",
            MobileVersion: "v12pro",
            ram: 4,
            rom: 32,
            price: 59000,
        },
        v11pro: {
            CompanyName: "iphone",
            MobileVersion: "v11pro",
            ram: 4,
            rom: 16,
            price: 70000,
        },
    },
    samsung: {
        note10: {
            CompanyName: "samsung",
            MobileVersion: "note1",
            ram: 2,
            rom: 256,
            price: 3000,
        },
        a51: {
            CompanyName: "samsung",
            MobileVersion: "a51",
            ram: 3,
            rom: 256,
            price: 499,
        },
        s20ultra: {
            CompanyName: "samsung",
            MobileVersion: "s20ultra",
            ram: 8,
            rom: 256,
            price: 499,
        },
        a72: {
            CompanyName: "samsung",
            MobileVersion: "a72",
            ram: 9,
            rom: 256,
            price: 499,
        }
    },
    oppo: {
        oppoa54: {
            CompanyName: "oppo",
            MobileVersion: "oppoa54",
            ram: 2,
            rom: 256,
            price: 3000,
        },
        oppoF9: {
            CompanyName: "oppo",
            MobileVersion: "oppoF9",
            ram: 3,
            rom: 256,
            price: 499,
        },
        OppoF7: {
            CompanyName: "oppo",
            MobileVersion: "OppoF7",
            ram: 8,
            rom: 256,
            price: 499,
        },
        oppoa52: {
            CompanyName: "oppo",
            MobileVersion: "oppoa52",
            ram: 9,
            rom: 256,
            price: 499,
        },
    },
    xaomi: {
        mi11: {
            CompanyName: "xaomi",
            MobileVersion: "mi11",
            ram: 4,
            rom: 256,
            price: 200,
        },
        redminote10: {
            CompanyName: "xaomi",
            MobileVersion: "redminote10",
            ram: 4,
            rom: 256,
            price: 300,
        },
        redmi9c: {
            CompanyName: "xaomi",
            MobileVersion: "redmi9c",
            ram: 4,
            rom: 256,
            price: 450,
        },
        minote10lite: {
            CompanyName: "xaomi",
            MobileVersion: "minote10lite",
            ram: 4,
            rom: 256,
            price: 150,
        },
    },
}


let companyName=document.getElementById('companyName')
let mobileModel=document.getElementById('mobileModel')
let datalist=document.getElementById('datalist')

function FillMain(){
    let MainName =Object.keys(mobile)
    for(var i=0 ; i <MainName.length;i++){
        companyName.innerHTML+=`<option value="${MainName[i]}">${MainName[i]}</option>`
    }    
}
FillMain();

function FillNasted(){
    mobileModel.disabled=false;
    // nastedKeys.innerHTML="";
    let nastedKeys=Object.keys(mobile[companyName.value])
    for(var i = 0; i<nastedKeys.length;i++) {
        mobileModel.innerHTML +=`<option value="${nastedKeys[i]}">${nastedKeys[i]}</option>`
    }
    
}

function ShowData(){
    let res=((mobile[companyName.value][mobileModel.value]))
    console.log(res)
    datalist.innerHTML +=`<h1>${Object.keys(res)}</h1> <br> <h1>${Object.values(res)}</h1>`


}