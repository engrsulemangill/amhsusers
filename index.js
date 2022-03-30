var myInput=prompt("ENTER PASSWORD");
   
    if(myInput=="idspass")
    {
        document.getElementById("main").classList.remove("show");
    }
    else
    {
        alert("INVALID PASSWORD")
    }


function searchItem1()
{
var myInput, myTable, filter, txtValue, i, tr, td1;
myInput=document.getElementById("myInput1").value;
filter=myInput.toUpperCase();
myTable=document.getElementById("myTable");
tr=myTable.getElementsByTagName("tr");

for(i=0;i<=tr.length;i++)
{
    td1=tr[i].getElementsByTagName("td")[0];
    if(td1)
    {
        txtValue=td1.textContent||td1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)
        {
            tr[i].style.display="";
        }
        else
        {
            tr[i].style.display="none";
        }
    }
}
}
function searchItem2()
{
var myInput, myTable, filter, txtValue, i, tr, td1;
myInput=document.getElementById("myInput2").value;
filter=myInput.toUpperCase();
myTable=document.getElementById("myTable");
tr=myTable.getElementsByTagName("tr");

for(i=0;i<=tr.length;i++)
{
    td1=tr[i].getElementsByTagName("td")[1];
    if(td1)
    {
        txtValue=td1.textContent||td1.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)
        {
            tr[i].style.display="";
        }
        else
        {
            tr[i].style.display="none";
        }
    }
}
}
function searchItem3()
{
var myInput, myTable, filter, txtValue, i, tr, td2;
myInput=document.getElementById("myInput3").value;
filter=myInput.toUpperCase();
myTable=document.getElementById("myTable");
tr=myTable.getElementsByTagName("tr");

for(i=0;i<=tr.length;i++)
{
    td2=tr[i].getElementsByTagName("td")[2];
    if(td2)
    {
        txtValue=td2.textContent||td2.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)
        {
            tr[i].style.display="";
        }
        else
        {
            tr[i].style.display="none";
        }
    }
}
}
function searchItem4()
{
var myInput, myTable, filter, txtValue, i, tr, td3;
myInput=document.getElementById("myInput4").value;
filter=myInput.toUpperCase();
myTable=document.getElementById("myTable");
tr=myTable.getElementsByTagName("tr");

for(i=0;i<=tr.length;i++)
{
    td3=tr[i].getElementsByTagName("td")[3];
    if(td3)
    {
        txtValue=td3.textContent||td3.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)
        {
            tr[i].style.display="";
        }
        else
        {
            tr[i].style.display="none";
        }
    }
}
}
function searchItem5()
{
var myInput, myTable, filter, txtValue, i, tr, td4;
myInput=document.getElementById("myInput5").value;
filter=myInput.toUpperCase();
myTable=document.getElementById("myTable");
tr=myTable.getElementsByTagName("tr");

for(i=0;i<=tr.length;i++)
{
    td4=tr[i].getElementsByTagName("td")[4];
    if(td4)
    {
        txtValue=td4.textContent||td4.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)
        {
            tr[i].style.display="";
        }
        else
        {
            tr[i].style.display="none";
        }
    }
}
}
function searchItem6()
{
var myInput, myTable, filter, txtValue, i, tr, td5;
myInput=document.getElementById("myInput6").value;
filter=myInput.toUpperCase();
myTable=document.getElementById("myTable");
tr=myTable.getElementsByTagName("tr");

for(i=0;i<=tr.length;i++)
{
    td5=tr[i].getElementsByTagName("td")[5];
    if(td5)
    {
        txtValue=td5.textContent||td5.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)
        {
            tr[i].style.display="";
        }
        else
        {
            tr[i].style.display="none";
        }
    }
}
}
// function searchRoute()
// {
    
// }
function searchItem7()
{
var myInput, myTable, filter, txtValue, i, tr, td6;
myInput=document.getElementById("myInput7").value;
filter=myInput.toUpperCase();
myTable=document.getElementById("myTable");
tr=myTable.getElementsByTagName("tr");

for(i=0;i<=tr.length;i++)
{
    td6=tr[i].getElementsByTagName("td")[5];
    if(td6)
    {
        txtValue=td6.textContent||td6.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1)
        {
            tr[i].style.display="";
        }
        else
        {
            tr[i].style.display="none";
        }
    }
}
}



