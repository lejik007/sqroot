export default function Coef() {
    return (
        <div className="coefficient">
            <label htmlFor="CoefA">Коэффициент при х<sup>2</sup></label>

            <input type="text" id="name" name="CoefA" required minLength="4" maxLength="8" size="10" />
            {/*<input type="text" id="name" name="name" required minLength="4" maxLength="8" size="10" />*/}
        </div>
    );
}