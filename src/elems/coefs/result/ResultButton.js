export default function ResultButton() {
    return (
        <div className="but">
            <input type="button" id="GetResult" value="Найти корни" onClick={GetSolve} />
            {/*<input type="text" id="name" name="name" required minLength="4" maxLength="8" size="10" />*/}
        </div>
    );
}

function GetSolve() {
    let coefficientA = document.getElementById('CoefA').value
    let coefficientB = document.getElementById('CoefB').value
    let coefficientC = document.getElementById('CoefC').value
    let discriminant = coefficientB * coefficientB - 4 * coefficientA * coefficientC
    let x1 = (-coefficientB + Math.sqrt(discriminant)) / (2 * coefficientA)
    let x2 = (-coefficientB - Math.sqrt(discriminant)) / (2 * coefficientA)
    document.getElementById('Root1').value = x1
    document.getElementById('Root2').value = x2
}