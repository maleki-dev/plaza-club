import React, { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import * as S from './pagination.styles';

const Pagination = ({ $totalPages, $onClick, $currentPage, $onChange }) => {
  const [currentPage, setCurrentPage] = useState($currentPage);

  const goPrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    $onChange(currentPage - 1);
  };

  const goNextPage = () => {
    if (currentPage === $totalPages) return;
    setCurrentPage(currentPage + 1);
    $onChange(currentPage + 1);
  };

  const handleClick = page => {
    setCurrentPage(page);
    $onClick(page);
  };

  const pagesArray = [...Array(+$totalPages + 1).keys()].slice(1);
  return (
    <S.Container>
      <CustomButton
        $size="medium"
        $color="background"
        $deactive={currentPage === 1}
        onClick={goPrevPage}
      >
        قبلی
      </CustomButton>
      {pagesArray.map(page => (
        <S.Item key={page} onClick={() => handleClick(page)} $active={page === +currentPage}>
          {page}
        </S.Item>
      ))}
      <CustomButton
        $size="medium"
        $color="background"
        $deactive={currentPage === $totalPages}
        onClick={goNextPage}
      >
        بعدی
      </CustomButton>
    </S.Container>
  );
};

export default Pagination;
