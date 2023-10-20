import AddingAndRemovingDataToFromArrays from "./AddingAndRemovingDataToFromArrays";
import ForLoops from "./ForLoops";
import MapFunctions from "./MapFunction";
import FindFunction from "./FindFunction";
import FilterFunction from "./FilterFunction";
function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
        functionScoped, blockScoped,
        constant1, numberArray1, stringArray1
    ];
    console.log('WorkingWithArrays');
    console.log(functionScoped);
    console.log(blockScoped);
    console.log(constant1);
    console.log(numberArray1);
    console.log(stringArray1);
    console.log(variableArray1);
    return (
        <div>
          <h2>Working with Arrays</h2>
          numberArray1 = {numberArray1} <br />
          stringArray1 = {stringArray1} <br />
          variableArray1 = {variableArray1} <br />  
          <AddingAndRemovingDataToFromArrays/> 
          <ForLoops/>       
          <MapFunctions/>
          <FindFunction/>
          <FilterFunction/>
        </div>
      );


}
export default WorkingWithArrays