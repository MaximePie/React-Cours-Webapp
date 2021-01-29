/**
 * Renvoyer le coût total calculé pour une amélioration dans X niveaux.
 * @param total Le cumul de coût total
 * @param result Le produit du coût actuel par le facteur de multiplication
 * @param limit Le nombre de fois que l'on souhaite effectuer l'opération
 * @param current Le nombre actuel de fois que l'on a effectué l'opération
 * @returns Number Coût total
 */
export default function multiply(total, result, limit, current = 0) {
  if (current === limit || limit === 1) {
    return total;
  }

  const multipliedResult = result * 1.2;

  return multiply(total + multipliedResult, multipliedResult, limit, current + 1)
}
