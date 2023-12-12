window.addEventListener('load',() => {

    // const params = (new URL(document.location)).searchParams;
    // const FirstName = params.get('FirstName');
    // const LastName = params.get('LastName');
    // const WorkerId = params.get('WorkerId');
    // const PartName = params.get('PartName');
    // const PartId = params.get('PartId');
    // const Date = params.get('Date');


    const FirstName = localStorage.getItem('FirstName');
    const LastName = localStorage.getItem('LastName');
    const WorkerId = localStorage.getItem('WorkerId');
    const PartName = localStorage.getItem('PartName');
    const PartId = localStorage.getItem('PartId');
    const Date = localStorage.getItem('Date');


    document.getElementById('FirstName').innerHTML = FirstName;
    document.getElementById('LastName').innerHTML = LastName;
    document.getElementById('WorkerId').innerHTML = WorkerId;
    document.getElementById('PartName').innerHTML = PartName;
    document.getElementById('PartId').innerHTML = PartId;
    document.getElementById('Date').innerHTML = Date;


})

