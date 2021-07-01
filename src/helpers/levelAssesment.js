import { levelsData } from '../global-data';

const { green, silver, gold, diamond } = levelsData;

const levelAssesment = score => {
  if (score >= 0 && score <= green.maxScore) {
    return green;
  } else if (score > green.maxScore && score <= silver.maxScore) {
    return silver;
  } else if (score > silver.maxScore && score < gold.maxScore) {
    return gold;
  } else if (score >= diamond.minScore) {
    return diamond;
  }
};

export default levelAssesment;
