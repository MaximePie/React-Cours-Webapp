/**
 * Generate a data list with every upgrades of the game
 */

import triangle from "../images/triangle.png";
import tambour from "../images/tambour.png";
import sifflet from "../images/sifflet.png";
import mandoline from "../images/mandoline.jpg";
import banjo from "../images/banjo.png";

/**
 * Générer la liste des améliorations
 */
export default function generateUpgrades() {
  return [
    {
      name: "Triangle",
      amount: 0,
      cost: 10,
      income: 1,
      image: triangle,
    },
    {
      name: "Tambour",
      amount: 0,
      cost: 12,
      income: 2,
      image: tambour,
    },
    {
      name: "Sifflet",
      amount: 0,
      cost: 50,
      income: 10,
      image: sifflet,
    },
    {
      name: "Ukulele",
      amount: 0,
      cost: 100,
      income: 15,
    },
    {
      name: "Banjo",
      amount: 0,
      cost: 120,
      income: 18,
      image: banjo,
    },
    {
      name: "Mandoline",
      amount: 0,
      cost: 150,
      income: 20,
      image: mandoline,
    },
  ]
}
