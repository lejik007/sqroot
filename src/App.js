import CoefA from "./elems/coefs/coefA/CoefA";
import CoefB from "./elems/coefs/coefB/CoefB";
import CoefC from "./elems/coefs/coefC/CoefC";
import ResultButton from "./elems/coefs/result/ResultButton";
import Root1 from "./elems/coefs/root1/Root1";
import Root2 from "./elems/coefs/root2/Root2";
import ClearButton from "./elems/coefs/clearbutton/ClearButton";
import ClearDoc from "./elems/coefs/cleardoc/ClearButton";

export default function App() {
    return (
        <div className="App">
            <CoefA/>
            <CoefB/>
            <CoefC/>
            <ResultButton/>
            <ClearButton/>
            <Root1/>
            <Root2/>
            <ClearDoc />
            <input type="button" onClick={PaintRed} value="Red" />
            <input type="button" onClick={PaintGreen} value="Green" />
            <input type="button" onClick={GetText} value="Третья кнопка" />

        </div>
    );
}

function PaintRed() {
    document.body.style.backgroundColor = "Red"
}

function PaintGreen() {
    document.body.style.backgroundColor = "Green"
}

function GetText() {
    let text = document.getElementById('CoefA').value
    document.getElementById('CoefB').value = text
}