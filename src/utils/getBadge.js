import Badge from '../components/badge/badge.component';

const getBadge = condition => {
  if (condition === 'confirmed') {
    return <Badge $color="success">تایید شد</Badge>;
  } else if (condition === 'unConfirmed') {
    return <Badge $color="error">عدم تایید</Badge>;
  } else if (condition === 'pending') {
    return <Badge $color="background">درحال بررسی</Badge>;
  }
};
export default getBadge;
