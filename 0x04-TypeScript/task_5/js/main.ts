interface MajorCredits { credits: number; _brand: 'major'; }
interface MinorCredits { credits: number; _brand: 'minor'; }

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'major' };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, _brand: 'minor' };
}

// Example usage
const math: MajorCredits = { credits: 5, _brand: 'major' };
const physics: MajorCredits = { credits: 3, _brand: 'major' };
console.log(sumMajorCredits(math, physics));

const history: MinorCredits = { credits: 2, _brand: 'minor' };
const geography: MinorCredits = { credits: 4, _brand: 'minor' };
console.log(sumMinorCredits(history, geography));