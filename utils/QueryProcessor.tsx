export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew id")) {
    return (
      "Your Andrew Id is: muskanm"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "muskanm";
  }

  if (query.includes("which of the following numbers is the largest:")) {
    const numberPattern = /[-]?\d+(\.\d+)?/g;
    const numbers = query.match(numberPattern)?.map(Number) || [];
    if (numbers.length === 0) {
      return "No numbers found.";
    }
    const max = Math.max(...numbers);
    return max.toString();
  }

  return "";
}
