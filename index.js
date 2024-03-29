let cardsList=[
    {
        title:"Total Balance",
        value:"$9,568.00",
    },
    {
        title:"Discount Percentage",
        value:"60%",
    },
    {
        title:"Total Referral",
        value:"300",
    },
    {
        title:"Discount Amount",
        value:"$300",
    },
    {
        title:"Commission Amount",
        value:"$46.00",
    },
    {
        title:"Total Earning",
        value:"$18.00",
    },
    {
        title:"Commission Discount",
        value:"40%",
    },
    {
        title:"Total Bank Transfer",
        value:"$534.00",
    }
]
let cardsContainerEle=document.getElementsById("cardsContainer")
function getCard(){ 
        let cardEle=document.createElement('div')
        for (let eachItem of cardList) {
            let cardTitleEle=document.createElement('p')
            cardTitleEle.textContent=eachItem.title
            let cardValueEle=document.createElement('p')
            cardValueEle.textContent=eachItem.value
            cardEle.appendChild(cardTitleEle)
            cardEle.appendChild(cardValueEle)
        }
        cardsContainerEle.appendChild(cardEle)
}
getCard();

let paraEle=document.getElementsById("par")
paraEle.textContent="hello"