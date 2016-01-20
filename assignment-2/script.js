// JavaScript Document

function set_matching_word(selectObj, txtObj)
{
   var number = txtObj.value;
   for(var i = 0; i < selectObj.length; i++)
   {
      if(selectObj.options[i].value == number)
      selectObj.selectedIndex = i;
   }
}


