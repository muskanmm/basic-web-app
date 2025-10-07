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

  if (query.toLowerCase().includes("largest")) {
    const numberPattern = /[-]?\d+(\.\d+)?/g;
    const numbers = query.match(numberPattern)?.map(Number) || [];
    if (numbers.length === 0) {
      return "No numbers found.";
    }
    const max = Math.max(...numbers);
    return max.toString();
  }

  if (query.toLowerCase().includes("plus")) {
    const match = query.match(/(\d+)\s*plus\s*(\d+)/i);
    if (match) {
      const a = parseInt(match[1], 10);
      const b = parseInt(match[2], 10);
      return (a + b).toString();
    }
  }

  return "";
}
