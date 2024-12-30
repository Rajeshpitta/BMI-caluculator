
function cal()
{
let height;
let weight;
let BMI;
let condition=document.getElementById("condition");
height=document.getElementById("height").value;
height=parseInt(height);
weight=document.getElementById("weight").value;
weight=parseInt(weight);
    BMI=(weight/(height*height)*10000);

    document.getElementById("result").innerHTML="your BMI is"+" "+BMI;
    if(BMI<16)
    {
        condition.innerHTML="Severe Thinness";
    }
    else if(BMI>16  && BMI< 17)
        condition.innerHTML="Moderate Thinness";
    else if(BMI>17  && BMI< 18.5)
        condition.innerHTML="Mild Thinness";
    else if(BMI>18.5  && BMI< 25)
        condition.innerHTML="Normal";
    else if(BMI>25  && BMI< 30)
        condition.innerHTML="over weight";
    else if(BMI>30  && BMI< 35)
        condition.innerHTML="Obese Class I";
    else if(BMI>35  && BMI< 40)
        condition.innerHTML="Obese Class II";
    else if(BMI>40)
        condition.innerHTML="Obese Class III";
   
}
