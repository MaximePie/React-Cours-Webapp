import React, { Component } from 'react';

const denomination = [1, 5, 10, 20, 50, 100, 200]

class Denomination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            tokens: [],
            tokens_v2: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
            tokens: [],
            tokens_v2: []
        });
    }

    calculDenomination(amount) {
        // ordonne par ordre décroissant voir doc sort
        //https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/sort
        denomination.sort((a, b) => b - a);
        const tokens = [];

        let q;
        for (let d of denomination) {
            // 257
            // 257 >= 200
            if (amount >= d) {
                // q = 1
                q = Math.floor(amount / d);
                // { token : 200, quantity : 1 }
                tokens.push({ token: d, quantity: q });
                // 257 - 200
                amount = amount - q * d;
            }
        }

        return tokens;
    }

    // Moins optimal mais plus jolie (...)
    calculDenomination_v2(amount) {
        let count = 0;
        const tokens = []

        for (let d of denomination) {
            while (amount >= d) {
                amount = amount - d;
                count++;
            }

            if (count > 0) tokens.push({ token: d, quantity: count });

            count = 0;
        }

        return tokens;
    }

    handleSubmit(event) {
        event.preventDefault();

        // 1. D'abord je le fais sur papier
        // 2. après je le code directement ici
        // 3. après je refactore dans une methode de classe
        let { amount } = this.state;

        this.setState({
            tokens: this.calculDenomination(amount),
            // tokens_v2: this.calculDenomination_v2(amount)
        });
    }

    render() {
        const { amount, tokens, tokens_v2 } = this.state;

        return (
            <div >
                <ul>
                    <h2>Liste de token disponibles</h2>
                    {denomination.map((token, i) =>
                        <li key={i} >{token}</li>
                    )}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <p>
                        <input
                            name="amount"
                            value={amount}
                            onChange={this.handleChange}
                        />
                    </p>
                    <p><input type="submit" /></p>
                </form>

                {tokens.length > 0 ?
                    tokens.map((t, i) =>
                        <p key={i}>token : {t.token} quantity {t.quantity}</p>
                    ) : null
                }

                {tokens_v2.length > 0 ?
                    tokens_v2.map((t, i) =>
                        <p key={i}>token : {t.token} quantity {t.quantity}</p>

                    ) : null
                }
            </div>
        )
    }
}

// export du composant
export default Denomination;
