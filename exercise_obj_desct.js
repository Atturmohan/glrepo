let contacts = [
    {
        name: 'Friends',
        people: [
            {
                name: 'Ram',
                emailid: 'ram@gmail.com',
                number: '9876543210'
            },
            {
                name: 'Rahul',
                emailid: 'rahul@gmail.com',
                number: '9876543211'
            }
        ]
    },
    {
        name: 'Family',
        people: [
            {
                name: 'Bhaiya',
                emailid: 'sunil@gmail.com',
                number: '9876543212'
            },
            {
                name: 'Mom',
                number: '9876543213'
            }
        ]
    }
];


const [,{people:[,secondContactInFamily]}] = contacts;



const [{people:[{emailid:effmailid}]},] = contacts;

console.log(secondContactInFamily,effmailid);



sum =  function(...x){
     let k=0;    
     for(let i=0;i<x.length;i++){
         k +=x[i]
     }
     console.log(k);
}

sum(1,2,3,4,5);