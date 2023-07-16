
let tableObj = [{
    name : 'Anuradha',
    class : 'FE',
    roll :' 12345',
    area :'Marathalli',
    marks: '97',
    interest : 'JS'
  },
                 {
    name : 'Manoj',
    class : 'FE',
    roll :' 134876',
    area :'Bellandur',
    marks: '80.3',
    interest : 'CSS'
  },
                 {
    name : 'Suresh',
    class : 'BE',
    roll :' 12345',
    area :'Brookfield',
    marks: '75',
    interest : 'JS'
  },
  {
    name : 'Kriti',
    class : 'BE',
    roll :' 57891',
    area :'M.G. Nagar',
    marks: '86',
    interest : 'JAVA'
  },
  {
    name : 'Raghav',
    class : 'FE',
    roll :'16289',
    area :'Kundalhalli',
    marks: '94',
    interest : 'HTML',
  },
  {
    name : 'Nidhi',
    class : 'FE',
    roll :'74312',
    area :'AECS Layout',
    marks: '62',
    interest : 'CSS'
  },
  {
    name : 'Arnav',
    class : 'FE',
    roll :' 78915',
    area :'Jayanagar',
    marks: '55',
    interest : 'CSS',
  },
  {
    name : 'Pratuysh',
    class : 'FE',
    roll :'982510',
    area :'Marathalli',
    marks: '85',
    interest : 'JS',
  },
  {
    name : 'Manpreet',
    class : 'FE',
    roll :'71123',
    area :'BEML Layout',
    marks: '70',
    interest : 'HTML',
  },
  {
    name : 'Saswat',
    class : 'BE',
    roll :'16812',
    area :'Indiranagar',
    marks: '77',
    interest : '.NET',
  },
  {
    name : 'Samparna',
    class : 'FE',
    roll :'34325',
    area :'Kundalhalli',
    marks: '67',
    interest : 'JS'
  },
  {
    name : 'Prem',
    class : 'BE',
    roll :'97125',
    area :'Whitefield',
    marks: '89',
    interest : '.NET',
  }, 
  {
    name : 'Natasha',
    class : 'BE',
    roll :'17525',
    area :'Bellandur',
    marks: '92',
    interest : 'JAVA'
  },
                 {
    name : 'Kajol',
    class : 'FE',
    roll :' 87612',
    area :'Hoskote',
    marks: '50',
    interest : 'HTML'
  }]


  var divC=document.getElementById("cards");
  var html='';

  function obj(){
    tableObj.forEach((ele)=>{
        
         html=html+`<div class="child"><h3>${ele.name}</br>${ele.class}</br>${ele.roll}</br>${ele.area}</br>${ele.marks}</br>${ele.interest}</h3></div>`
         divC.innerHTML=html;
    })
   
  }

  obj();
