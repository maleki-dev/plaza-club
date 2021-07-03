import React, { useRef, useEffect, useState } from 'react';
import Widget from '../widget/widget.component';
import * as S from './level-progress.styles';
import { userData, levelsData } from '../../data';
import levelAssesment from '../../helpers/levelAssesment';
import { ReactComponent as Diamond } from '../../assets/images/svg/diamond.svg';
import Tooltip from '../tooltip/tooltip.component';

const { green, silver, gold } = levelsData;
const { score } = userData;
const level = levelAssesment(score).levelId;

const calcWidth = () => {
  const greenWidth = level === 'green' ? (score * 100) / green.maxScore : 100;
  const silverWidth =
    level === 'silver'
      ? ((score - green.maxScore) * 7.6) / (silver.maxScore - green.maxScore) + 92.4
      : level === 'green'
      ? 0
      : 100;
  const goldWidth =
    level === 'gold' ? ((score - silver.maxScore) * 7) / (gold.maxScore - silver.maxScore) + 93 : 0;
  return { greenWidth, silverWidth, goldWidth };
};

const LevelProgress = () => {
  const levelRef = useRef(null);
  const [tooltipLeft, setTooltipLeft] = useState(0);

  useEffect(() => {
    const getLeft = () =>
      setTooltipLeft(levelRef ? levelRef.current.getBoundingClientRect().width : 0);
    window.addEventListener('resize', getLeft);
    getLeft();
  }, [levelRef]);

  return (
    <S.Container>
      <Widget>
        <S.Title>نوار افزایش سطح</S.Title>
        <S.StripContainer>
          <S.StripBadges>
            <S.Badge right="0">{gold.maxScore.toLocaleString()}</S.Badge>
            <S.Badge right="7">{silver.maxScore.toLocaleString()}</S.Badge>
            <S.Badge right="14">{green.maxScore.toLocaleString()}</S.Badge>
          </S.StripBadges>
          <Tooltip direction="up" left={tooltipLeft} text={score.toLocaleString()}>
            <S.MainStrip>
              <S.BaseGreenStrip>
                <S.GreenStrip
                  width={calcWidth().greenWidth}
                  ref={level === 'green' ? levelRef : null}
                />
              </S.BaseGreenStrip>
              <S.BaseSilverStrip>
                <S.SilverStrip
                  width={calcWidth().silverWidth}
                  ref={level === 'silver' ? levelRef : null}
                />
              </S.BaseSilverStrip>
              <S.BaseGoldStrip>
                <S.GoldStrip
                  width={calcWidth().goldWidth}
                  ref={level === 'gold' ? levelRef : null}
                />
              </S.BaseGoldStrip>
              {level === 'diamond' ? <S.DiamondStrip ref={levelRef} /> : null}
            </S.MainStrip>
          </Tooltip>
          <S.StripBadges>
            <S.Badge right="0">
              <Diamond />
            </S.Badge>
            <S.Badge right="7">{gold.levelName}</S.Badge>
            <S.Badge right="14">{silver.levelName}</S.Badge>
          </S.StripBadges>
        </S.StripContainer>
      </Widget>
    </S.Container>
  );
};

export default LevelProgress;
